import {useState, useEffect} from 'react';
import {Link} from 'react-router';
import {X, Check} from 'lucide-react';

export function CartFeedbackOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItem, setCartItem] = useState(null);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    const handleCartItemAdded = (event) => {
      setCartItem(event.detail || {});
      setIsOpen(true);
      // Update cart quantity if provided
      if (event.detail?.cartQuantity) {
        setCartQuantity(event.detail.cartQuantity);
      } else {
        setCartQuantity(event.detail?.quantity || 1);
      }
    };

    window.addEventListener('cart:itemAdded', handleCartItemAdded);

    return () => {
      window.removeEventListener('cart:itemAdded', handleCartItemAdded);
    };
  }, []);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when overlay is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  const {
    imageUrl,
    title = 'ThaenaBiotic - Postbiotic Supplement',
    variantTitle,
    size,
    quantity = 1,
  } = cartItem || {};

  // Format size display - prefer size prop, then variantTitle, then default
  const sizeDisplay = size || variantTitle || '30 capsules';

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-end p-0 transition-opacity duration-300 ease-in-out"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-feedback-title"
    >
      <div
        className="bg-[#ede8de] rounded-l-lg shadow-lg w-full max-w-md h-full md:h-auto md:max-h-[90vh] flex flex-col transform transition-all duration-300 ease-in-out animate-slide-in-right overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between p-6 pb-4 border-b border-slate-dark/10">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-teal-green flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
            <h2
              id="cart-feedback-title"
              className="text-base font-roboto font-medium text-slate-dark"
              role="status"
              aria-live="polite"
            >
              Item added to your cart
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-slate-dark/5 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-slate-dark" strokeWidth={1.5} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex gap-4">
            {/* Product Image */}
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={title}
                className="w-20 h-20 object-cover rounded border border-slate-dark/10 flex-shrink-0"
              />
            ) : (
              <div className="w-20 h-20 bg-slate-dark/5 rounded border border-slate-dark/10 flex-shrink-0 flex items-center justify-center">
                <span className="text-xs text-slate-dark/50">Image</span>
              </div>
            )}
            
            {/* Product Details */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-roboto font-medium text-slate-dark mb-1">
                {title}
              </p>
              <p className="text-sm font-roboto text-slate-dark/70">
                Size: {sizeDisplay}
              </p>
            </div>
          </div>
        </div>

        {/* Footer with buttons */}
        <div className="p-6 pt-4 border-t border-slate-dark/10 space-y-3">
          <Link
            to="/cart"
            className="block text-center text-sm font-roboto text-slate-dark hover:text-slate-dark/70 transition-colors"
            onClick={handleClose}
          >
            View my cart ({cartQuantity})
          </Link>
          <Link
            to="/checkout"
            className="block w-full text-center bg-slate-dark hover:bg-slate-dark/90 text-neutral-light font-roboto-mono text-base font-medium py-4 px-6 rounded-xl transition-all"
            onClick={handleClose}
          >
            Check Out
          </Link>
          <button
            onClick={handleClose}
            className="block w-full text-center text-sm font-roboto text-slate-dark underline hover:text-slate-dark/70 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
