import {useEffect, useRef} from 'react';
import {CartForm} from '@shopify/hydrogen';
import {dispatchCartItemAdded} from '~/lib/cartFeedback';

/**
 * @param {{
 *   analytics?: unknown;
 *   children: React.ReactNode;
 *   disabled?: boolean;
 *   lines: Array<OptimisticCartLineInput>;
 *   onClick?: () => void;
 *   className?: string;
 *   productImage?: {url: string} | null;
 *   productTitle?: string;
 *   size?: string;
 * }}
 */
export function AddToCartButton({
  analytics,
  children,
  disabled,
  lines,
  onClick,
  className,
  productImage,
  productTitle,
  size,
}) {
  return (
    <CartForm route="/cart" inputs={{lines}} action={CartForm.ACTIONS.LinesAdd}>
      {(fetcher) => (
        <>
          <CartFeedbackTrigger 
            fetcher={fetcher} 
            lines={lines}
            productImage={productImage}
            productTitle={productTitle}
            size={size}
          />
          <input
            name="analytics"
            type="hidden"
            value={JSON.stringify(analytics)}
          />
          <button
            type="submit"
            onClick={onClick}
            disabled={disabled ?? fetcher.state !== 'idle'}
            className={className}
          >
            {children}
          </button>
        </>
      )}
    </CartForm>
  );
}

/**
 * Inner component that tracks fetcher state and dispatches cart feedback event on success
 * @param {{
 *   fetcher: FetcherWithComponents;
 *   lines: Array<OptimisticCartLineInput>;
 *   productImage?: {url: string} | null;
 *   productTitle?: string;
 *   size?: string;
 * }}
 */
function CartFeedbackTrigger({fetcher, lines, productImage, productTitle, size}) {
  const prevStateRef = useRef(fetcher.state);
  const lastDispatchedDataRef = useRef(null);

  useEffect(() => {
    const wasSubmitting = prevStateRef.current === 'submitting';
    const isNowIdle = fetcher.state === 'idle';
    const hasData = fetcher.data && !fetcher.data.errors;

    if (wasSubmitting && isNowIdle && hasData) {
      // Check if we've already dispatched for this data
      const currentDataId = JSON.stringify(fetcher.data);
      if (lastDispatchedDataRef.current !== currentDataId) {
        // Calculate quantity
        const totalQuantity =
          lines.reduce((sum, line) => sum + (line.quantity || 0), 0) || 1;

        // Get cart total quantity from response if available
        const cartQuantity = fetcher.data?.cart?.totalQuantity || totalQuantity;

        dispatchCartItemAdded({
          title: productTitle || 'ThaenaBiotic - Postbiotic Supplement',
          quantity: totalQuantity,
          cartQuantity: cartQuantity,
          imageUrl: productImage?.url,
          size: size,
        });

        lastDispatchedDataRef.current = currentDataId;
      }
    }

    prevStateRef.current = fetcher.state;
  }, [fetcher.state, fetcher.data, lines, productImage, productTitle, size]);

  return null;
}

/** @typedef {import('react-router').FetcherWithComponents} FetcherWithComponents */
/** @typedef {import('@shopify/hydrogen').OptimisticCartLineInput} OptimisticCartLineInput */
