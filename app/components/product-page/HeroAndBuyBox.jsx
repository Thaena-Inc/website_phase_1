import {useEffect, useRef, useState, useMemo} from "react";
import {ChevronDown, Minus, Plus} from "lucide-react";
import {AddToCartButton} from "~/components/AddToCartButton";
import {useAside} from "~/components/Aside";

const VARIANT_ID_30 = "gid://shopify/ProductVariant/42146515615939";
const VARIANT_ID_90 = "gid://shopify/ProductVariant/42146515648707";

/**
 * Calculate the subscription price for a variant based on selling plan
 * @param {number} basePrice - Base price of the variant
 * @param {any} sellingPlan - Selling plan object
 * @returns {number} - Calculated subscription price
 */
function calculateSubscriptionPrice(basePrice, sellingPlan) {
  if (!sellingPlan?.priceAdjustments?.[0]?.adjustmentValue) {
    return basePrice;
  }

  const adjustment = sellingPlan.priceAdjustments[0].adjustmentValue;

  if (adjustment.__typename === "SellingPlanFixedPriceAdjustment") {
    return parseFloat(adjustment.price?.amount || basePrice);
  } else if (adjustment.__typename === "SellingPlanFixedAmountPriceAdjustment") {
    return basePrice - parseFloat(adjustment.adjustmentAmount?.amount || 0);
  } else if (adjustment.__typename === "SellingPlanPercentagePriceAdjustment") {
    const discount = basePrice * (parseFloat(adjustment.adjustmentPercentage || 0) / 100);
    return basePrice - discount;
  }

  return basePrice;
}

/**
 * Find selling plan by delivery frequency
 * @param {any[]} sellingPlans - Array of selling plans
 * @param {string} frequency - Delivery frequency (e.g., "30 days")
 * @returns {any|null} - Matching selling plan or null
 */
function findSellingPlanByFrequency(sellingPlans, frequency) {
  if (!sellingPlans || sellingPlans.length === 0) return null;
  
  const days = frequency.split(" ")[0];
  return sellingPlans.find(plan => {
    // Check if plan name or description contains the frequency
    const name = plan.name?.toLowerCase() || "";
    const description = plan.description?.toLowerCase() || "";
    return name.includes(days) || description.includes(days) || 
           plan.recurringDeliveries?.toString() === days;
  }) || sellingPlans[0]; // Fallback to first plan
}

/**
 * @param {{
 *   productImage?: {
 *     url: string;
 *     altText?: string;
 *     width?: number;
 *     height?: number;
 *   } | null;
 *   product?: {
 *     variants?: {
 *       nodes?: Array<{
 *         id: string;
 *         title?: string;
 *         price?: {amount: string; currencyCode: string};
 *         compareAtPrice?: {amount: string; currencyCode: string};
 *       }>;
 *     };
 *     selectedOrFirstAvailableVariant?: {
 *       price?: {amount: string; currencyCode: string};
 *       compareAtPrice?: {amount: string; currencyCode: string};
 *     };
 *     sellingPlanGroups?: {
 *       nodes?: Array<{
 *         sellingPlans?: {
 *           nodes?: Array<any>;
 *         };
 *       }>;
 *     };
 *   } | null;
 * }}
 */
export default function HeroAndBuyBox({productImage, product}) {
  const [selectedSize, setSelectedSize] = useState("30");
  const [purchaseType, setPurchaseType] = useState("subscribe");
  const [quantity, setQuantity] = useState(1);
  const [deliveryFrequency, setDeliveryFrequency] = useState("30 days");
  const [isDeliveryDropdownOpen, setIsDeliveryDropdownOpen] = useState(false);
  const [highlightedOption, setHighlightedOption] = useState(null);
  const dropdownRef = useRef(null);
  const {open} = useAside();

  // Extract selling plans from product
  const sellingPlans = useMemo(() => {
    if (!product?.sellingPlanGroups?.nodes?.[0]?.sellingPlans?.nodes) {
      return [];
    }
    return product.sellingPlanGroups.nodes[0].sellingPlans.nodes;
  }, [product]);

  // Get variants
  const variants = useMemo(() => {
    return product?.variants?.nodes || [];
  }, [product]);

  // Find variant by size (30 or 90)
  const selectedVariant = useMemo(() => {
    const sizeMatch = selectedSize === "30" ? "30" : "90";
    return variants.find(v => 
      v.title?.includes(sizeMatch) || 
      v.id === (selectedSize === "30" ? VARIANT_ID_30 : VARIANT_ID_90)
    ) || variants[0];
  }, [variants, selectedSize]);

  // Get base price from variant or fallback
  const basePrice = useMemo(() => {
    if (selectedVariant?.price?.amount) {
      return parseFloat(selectedVariant.price.amount);
    }
    // Fallback to hardcoded prices if variant data not available
    return selectedSize === "30" ? 199.0 : 499.0;
  }, [selectedVariant, selectedSize]);

  // Find selling plan for current frequency
  const selectedSellingPlan = useMemo(() => {
    if (purchaseType !== "subscribe" || sellingPlans.length === 0) {
      return null;
    }
    return findSellingPlanByFrequency(sellingPlans, deliveryFrequency);
  }, [sellingPlans, deliveryFrequency, purchaseType]);

  // Calculate subscription price
  const subscriptionPrice = useMemo(() => {
    if (!selectedSellingPlan) return basePrice;
    return calculateSubscriptionPrice(basePrice, selectedSellingPlan);
  }, [basePrice, selectedSellingPlan]);

  // Current price based on purchase type
  const currentPrice = purchaseType === "subscribe" ? subscriptionPrice : basePrice;

  // Build delivery options from selling plans or use defaults
  const deliveryOptions = useMemo(() => {
    if (sellingPlans.length > 0) {
      return sellingPlans.map(plan => {
        const days = plan.recurringDeliveries?.toString() || 
                    plan.name?.match(/\d+/)?.[0] || 
                    "30";
        return {
          label: `Delivery every ${days} days`,
          value: `${days} days`,
          plan: plan
        };
      });
    }
    // Fallback to default options
    return [
      {label: "Delivery every 30 days", value: "30 days"},
      {label: "Delivery every 90 days", value: "90 days"},
    ];
  }, [sellingPlans]);

  // Get selected variant ID
  const selectedVariantId = selectedVariant?.id || 
    (selectedSize === "30" ? VARIANT_ID_30 : VARIANT_ID_90);

  // Handle click outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDeliveryDropdownOpen(false);
        setHighlightedOption(null);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsDeliveryDropdownOpen(false);
        setHighlightedOption(null);
      }
    };

    if (isDeliveryDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isDeliveryDropdownOpen]);

  // Handle keyboard navigation in dropdown
  const handleDropdownKeyDown = (event) => {
    if (!isDeliveryDropdownOpen) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlightedOption(
        highlightedOption === null || highlightedOption === "30" ? "90" : "30",
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlightedOption(
        highlightedOption === null || highlightedOption === "90" ? "30" : "90",
      );
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (highlightedOption) {
        const option = deliveryOptions.find(
          (opt) => opt.value.split(" ")[0] === highlightedOption,
        );
        if (option) {
          setDeliveryFrequency(option.value);
          setIsDeliveryDropdownOpen(false);
          setHighlightedOption(null);
        }
      }
    }
  };

  const handleSelectDeliveryOption = (value) => {
    setDeliveryFrequency(value);
    setIsDeliveryDropdownOpen(false);
    setHighlightedOption(null);
  };

  // Get selected variant ID - already defined in useMemo above
  // const selectedVariantId = selectedVariant?.id || 
  //   (selectedSize === "30" ? VARIANT_ID_30 : VARIANT_ID_90);

  // Determine which image to show based on selected size
  const imageUrl = selectedSize === "30" 
    ? "https://cdn.shopify.com/s/files/1/0602/5281/5555/files/Thaena_December_Finals_2025_1-13.jpg?v=1766006457"
    : "https://cdn.shopify.com/s/files/1/0602/5281/5555/files/Thaena_December_Finals_2025_1-14.jpg?v=1766006457";

  return (
    <>
      {/* Product Section */}
      <div className="min-h-screen bg-neutral-warm">
        <main className="container mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-7xl mx-auto">
            {/* Product Image Section */}
            <div className="flex-1 max-w-[636px]">
              <div className="relative w-[636px] h-[636px] mb-4">
                <img
                  src={imageUrl}
                  alt="ThaenaBiotic Postbiotic Supplement bottle"
                  className="w-full h-full object-cover rounded-lg"
                  loading="eager"
                />
              </div>
              <p className="text-center text-xs text-slate-dark/80 font-normal">
                Third-party tested • GMP Certified • Made in USA
              </p>
            </div>

            {/* Product Details Section */}
            <div className="flex-1 max-w-[636px] flex flex-col gap-4">
              {/* Category */}
              <p className="text-rust text-xs font-roboto-mono uppercase tracking-wider">
                Daily Wellness
              </p>

              {/* Title */}
              <h1 className="font-playfair text-4xl md:text-5xl leading-tight text-slate-dark">
                ThaenaBiotic® - Postbiotic Supplement
              </h1>

              {/* Description */}
              <div className="flex flex-col gap-4">
                <p className="text-slate-dark text-base leading-relaxed">
                  Because it all comes from humans — not lab beakers — you get
                  the real-world diversity and complexity that can only come
                  from a human gut.
                </p>
                <p className="text-slate-dark/80 text-sm font-light leading-7">
                  Sterilized & safe • No refrigeration needed • No live
                  bacteria
                </p>
              </div>

              {/* Size Selection */}
              <div className="flex flex-col gap-4 mt-4">
                <label className="text-slate-dark/80 text-xs font-roboto-mono uppercase tracking-wider">
                  Select Size
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* 30 Capsules */}
                  <button
                    onClick={() => setSelectedSize("30")}
                    className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                      selectedSize === "30"
                        ? "border-teal-green bg-teal-green/5"
                        : "border-slate-dark/20 hover:border-teal-green/50"
                    }`}
                  >
                    <div className="flex flex-col gap-1">
                      <h3 className="font-playfair text-2xl text-slate-dark">
                        30 capsules
                      </h3>
                      <p className="text-xs text-slate-dark/80">
                        1 month supply
                      </p>
                    </div>
                    {selectedSize === "30" && (
                      <span className="absolute -top-2 left-4 px-3 py-1 bg-teal-green text-neutral-light text-[10px] uppercase tracking-wider rounded-full">
                        Most Popular
                      </span>
                    )}
                  </button>

                  {/* 90 Capsules */}
                  <button
                    onClick={() => setSelectedSize("90")}
                    className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                      selectedSize === "90"
                        ? "border-rust bg-rust/5"
                        : "border-slate-dark/20 hover:border-rust/50"
                    }`}
                  >
                    <div className="flex flex-col gap-1">
                      <h3 className="font-playfair text-2xl text-slate-dark">
                        90 capsules
                      </h3>
                      <p className="text-xs text-slate-dark/80">
                        3 months supply
                      </p>
                    </div>
                    {selectedSize === "90" && (
                      <span className="absolute -top-2 left-4 px-3 py-1 bg-rust text-neutral-light text-[10px] uppercase tracking-wider rounded-full">
                        Best Value
                      </span>
                    )}
                  </button>
                </div>
              </div>

              {/* Pricing and Purchase Options */}
              <div className="flex flex-col sm:flex-row gap-8 items-start mt-4">
                {/* Price */}
                <div className="flex-shrink-0">
                  <p className="font-playfair text-3xl text-slate-dark">
                    ${currentPrice.toFixed(2)}
                  </p>
                </div>

                {/* Purchase Options */}
                <div className="flex-1 flex flex-col gap-3 w-full">
                  {/* One-time Purchase */}
                  <button
                    onClick={() => setPurchaseType("onetime")}
                    className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${
                      purchaseType === "onetime"
                        ? "border-teal-green bg-teal-green/5"
                        : "border-slate-dark/30 hover:border-slate-dark/50"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        purchaseType === "onetime"
                          ? "border-teal-green"
                          : "border-slate-dark/80"
                      }`}
                    >
                      {purchaseType === "onetime" && (
                        <div className="w-2 h-2 rounded-full bg-teal-green" />
                      )}
                    </div>
                    <div className="flex-1 flex justify-between items-center">
                      <span className="text-sm text-slate-dark">
                        One-time purchase
                      </span>
                      <span className="text-sm text-slate-dark">
                        ${basePrice.toFixed(2)}
                      </span>
                    </div>
                  </button>

                  {/* Subscribe & Save */}
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => setPurchaseType("subscribe")}
                      className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${
                        purchaseType === "subscribe"
                          ? "border-teal-green bg-teal-green/5"
                          : "border-slate-dark/30 hover:border-slate-dark/50"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          purchaseType === "subscribe"
                            ? "border-teal-green"
                            : "border-slate-dark/80"
                        }`}
                      >
                        {purchaseType === "subscribe" && (
                          <div className="w-2 h-2 rounded-full bg-teal-green" />
                        )}
                      </div>
                      <div className="flex-1 flex justify-between items-center">
                        <span className="text-sm text-slate-dark">
                          Subscribe & Save
                        </span>
                        <span className="text-sm text-slate-dark">
                          ${subscriptionPrice.toFixed(2)}
                        </span>
                      </div>
                    </button>

                    {/* Delivery Frequency Dropdown */}
                    {purchaseType === "subscribe" && (
                      <div className="relative" ref={dropdownRef}>
                        <button
                          onClick={() =>
                            setIsDeliveryDropdownOpen(!isDeliveryDropdownOpen)
                          }
                          onKeyDown={handleDropdownKeyDown}
                          className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-dark/30 hover:border-slate-dark/50 transition-all bg-white"
                          aria-haspopup="listbox"
                          aria-expanded={isDeliveryDropdownOpen}
                        >
                          <span className="text-sm text-slate-dark">
                            Delivery every {deliveryFrequency}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-dark transition-transform ${
                              isDeliveryDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Dropdown Menu */}
                        {isDeliveryDropdownOpen && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-dark/30 rounded-xl shadow-lg z-10">
                            {deliveryOptions.map((option) => {
                              const isHighlighted =
                                highlightedOption ===
                                option.value.split(" ")[0];
                              return (
                                <button
                                  key={option.value}
                                  onClick={() =>
                                    handleSelectDeliveryOption(option.value)
                                  }
                                  onKeyDown={handleDropdownKeyDown}
                                  onMouseEnter={() =>
                                    setHighlightedOption(
                                      option.value.split(" ")[0],
                                    )
                                  }
                                  className={`w-full px-4 py-3 text-left text-sm transition-colors first:rounded-t-xl last:rounded-b-xl ${
                                    isHighlighted
                                      ? "bg-slate-dark/10 text-slate-dark"
                                      : "bg-white text-slate-dark hover:bg-slate-dark/5"
                                  }`}
                                  role="option"
                                  aria-selected={
                                    deliveryFrequency === option.value
                                  }
                                >
                                  {option.label}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex flex-col gap-3 mt-6">
                <label className="text-slate-dark/80 text-xs font-roboto-mono uppercase tracking-wider">
                  Quantity
                </label>
                <div className="flex gap-6 items-stretch">
                  {/* Quantity Selector */}
                  <div className="flex items-center border border-slate-dark/30 rounded">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-slate-dark/5 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4 text-slate-dark" />
                    </button>
                    <div className="w-12 flex items-center justify-center">
                      <span className="text-base font-semibold text-slate-dark">
                        {quantity}
                      </span>
                    </div>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-slate-dark/5 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4 text-slate-dark" />
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <AddToCartButton
                    lines={[
                      {
                        merchandiseId: selectedVariantId,
                        quantity,
                        ...(purchaseType === "subscribe" && selectedSellingPlan?.id
                          ? {sellingPlanId: selectedSellingPlan.id}
                          : {}),
                      },
                    ]}
                    onClick={() => {
                      open("cart");
                    }}
                    productImage={{url: imageUrl}}
                    productTitle="ThaenaBiotic - Postbiotic Supplement"
                    size={selectedSize === "30" ? "30 capsules" : "90 capsules"}
                    className="flex-1 bg-slate-dark hover:bg-slate-dark/90 text-neutral-light font-roboto-mono text-base font-medium py-4 px-6 rounded-xl transition-all"
                  >
                    Add to Cart
                  </AddToCartButton>
                </div>
              </div>

              {/* Footer Text */}
              <div className="mt-6 text-center">
                <p className="text-slate-dark/80 text-xs font-light">
                  Human-derived, not lab-grown •{" "}
                  <span className="underline">30-day money-back guarantee</span>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
