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
  
  // First, try to match by options (most reliable for Recharge)
  const matchByOptions = sellingPlans.find(plan => {
    const frequencyOption = plan.options?.find(opt => 
      opt.name?.toLowerCase().includes('frequency') || 
      opt.name?.toLowerCase().includes('delivery')
    );
    
    if (frequencyOption?.value) {
      const match = frequencyOption.value.match(/\d+/);
      if (match && match[0] === days) return true;
    }
    return false;
  });
  
  if (matchByOptions) return matchByOptions;
  
  // Fallback to matching by recurringDeliveries, name, or description
  const match = sellingPlans.find(plan => {
    // Check recurringDeliveries
    if (plan.recurringDeliveries?.toString() === days) return true;
    
    // Check name or description
    const name = plan.name?.toLowerCase() || "";
    const description = plan.description?.toLowerCase() || "";
    if (name.includes(days) || description.includes(days)) return true;
    
    return false;
  });
  
  return match || sellingPlans[0]; // Fallback to first plan
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
  const {open} = useAside();
  const [selectedSize, setSelectedSize] = useState("30");
  const [purchaseType, setPurchaseType] = useState("onetime");
  const [quantity, setQuantity] = useState(1);
  const [deliveryFrequency, setDeliveryFrequency] = useState("30 days");
  const [isDeliveryDropdownOpen, setIsDeliveryDropdownOpen] = useState(false);
  const [highlightedOption, setHighlightedOption] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Track which thumbnail is selected
  const dropdownRef = useRef(null);

  // Extract selling plans from product - get all plans from all groups
  const sellingPlans = useMemo(() => {
    if (!product?.sellingPlanGroups?.nodes) {
      return [];
    }
    // Collect all selling plans from all selling plan groups
    const allPlans = [];
    product.sellingPlanGroups.nodes.forEach(group => {
      if (group?.sellingPlans?.nodes) {
        allPlans.push(...group.sellingPlans.nodes);
      }
    });
    return allPlans;
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

  // Build delivery options - always show both 30 and 90 day options
  // Match them to actual selling plans using specific Recharge plan IDs
  const deliveryOptions = useMemo(() => {
    // Specific Recharge plan IDs (numeric part of Shopify GID)
    const PLAN_ID_30_DAYS = "7350352";  // Recharge: 690829394225 (external), Shopify: 7350352
    const PLAN_ID_90_DAYS = "17929757"; // Recharge: 690829361457 (external), Shopify: 17929757
    
    // Always start with both options
    const options = [
      {label: "Delivery every 30 days", value: "30 days", plan: null},
      {label: "Delivery every 90 days", value: "90 days", plan: null},
    ];
    
    // Try to match selling plans to our options
    if (sellingPlans.length > 0) {
      sellingPlans.forEach(plan => {
        // Extract plan ID from GID format (e.g., "gid://shopify/SellingPlan/7350352" -> "7350352")
        let planId = null;
        if (plan.id) {
          const idMatch = plan.id.match(/\/(\d+)$/);
          if (idMatch) {
            planId = idMatch[1];
          }
        }
        
        // Method 1: Match by specific plan ID (most reliable)
        if (planId === PLAN_ID_30_DAYS) {
          const optionIndex = options.findIndex(opt => opt.value === "30 days");
          if (optionIndex >= 0 && !options[optionIndex].plan) {
            options[optionIndex].plan = plan;
          }
        } else if (planId === PLAN_ID_90_DAYS) {
          const optionIndex = options.findIndex(opt => opt.value === "90 days");
          if (optionIndex >= 0 && !options[optionIndex].plan) {
            options[optionIndex].plan = plan;
          }
        }
        
        // Method 2: Fallback - try to extract days from plan data
        if (!planId || (planId !== PLAN_ID_30_DAYS && planId !== PLAN_ID_90_DAYS)) {
          let planDays = null;
          
          // Check options (most reliable for Recharge)
          const frequencyOption = plan.options?.find(opt => {
            const optName = opt.name?.toLowerCase() || '';
            return optName.includes('frequency') || 
                   optName.includes('delivery') ||
                   optName.includes('interval');
          });
          
          if (frequencyOption?.value) {
            const match = frequencyOption.value.match(/\d+/);
            if (match) planDays = match[0];
          }
          
          // Check recurringDeliveries
          if (!planDays && plan.recurringDeliveries !== null && plan.recurringDeliveries !== undefined) {
            if (typeof plan.recurringDeliveries === 'number') {
              planDays = plan.recurringDeliveries.toString();
            } else {
              const parsed = parseInt(String(plan.recurringDeliveries), 10);
              if (!isNaN(parsed)) planDays = parsed.toString();
            }
          }
          
          // Extract from name
          if (!planDays && plan.name) {
            const match = plan.name.match(/\d+/);
            if (match) planDays = match[0];
          }
          
          // Extract from description
          if (!planDays && plan.description) {
            const match = plan.description.match(/\d+/);
            if (match) planDays = match[0];
          }
          
          // Match the plan to our options (only if not already matched by ID)
          if (planDays === "30") {
            const optionIndex = options.findIndex(opt => opt.value === "30 days");
            if (optionIndex >= 0 && !options[optionIndex].plan) {
              options[optionIndex].plan = plan;
            }
          } else if (planDays === "90") {
            const optionIndex = options.findIndex(opt => opt.value === "90 days");
            if (optionIndex >= 0 && !options[optionIndex].plan) {
              options[optionIndex].plan = plan;
            }
          }
        }
      });
    }
    
    return options;
  }, [sellingPlans]);

  // Find selling plan for current frequency
  // Always calculate this so we can show subscription price even when not in subscribe mode
  const selectedSellingPlan = useMemo(() => {
    // Get the plan from the selected delivery option (or default to first option if not in subscribe mode)
    const frequencyToUse = purchaseType === "subscribe" ? deliveryFrequency : "30 days";
    const selectedOption = deliveryOptions.find(opt => opt.value === frequencyToUse);
    // If the selected option has a plan, use it
    if (selectedOption?.plan) {
      return selectedOption.plan;
    }
    // Fallback: try to find any delivery option with a plan
    const optionWithPlan = deliveryOptions.find(opt => opt.plan);
    if (optionWithPlan?.plan) {
      return optionWithPlan.plan;
    }
    // Final fallback: use first available selling plan
    if (sellingPlans.length > 0) {
      return sellingPlans[0];
    }
    return null;
  }, [deliveryOptions, deliveryFrequency, purchaseType, sellingPlans]);

  // Calculate subscription price - recalculates when variant or selling plan changes
  // Always calculate this so it can be displayed in the "Subscribe & Save" button
  const subscriptionPrice = useMemo(() => {
    if (!selectedSellingPlan) return basePrice;
    const calculatedPrice = calculateSubscriptionPrice(basePrice, selectedSellingPlan);
    return calculatedPrice;
  }, [basePrice, selectedSellingPlan, selectedVariant]);

  // Current price based on purchase type
  const currentPrice = purchaseType === "subscribe" ? subscriptionPrice : basePrice;

  // Ensure deliveryFrequency matches an available option with a plan when switching to subscribe
  useEffect(() => {
    if (deliveryOptions.length > 0 && purchaseType === "subscribe") {
      const matchingOption = deliveryOptions.find(opt => opt.value === deliveryFrequency);
      if (!matchingOption) {
        // If current frequency doesn't match, set to first available option
        setDeliveryFrequency(deliveryOptions[0].value);
      } else if (!matchingOption.plan) {
        // If current option doesn't have a plan, find one that does
        const optionWithPlan = deliveryOptions.find(opt => opt.plan);
        if (optionWithPlan) {
          setDeliveryFrequency(optionWithPlan.value);
        }
      }
    }
  }, [deliveryOptions, purchaseType, deliveryFrequency]);

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

  // Define thumbnail images - will be updated based on selected size
  const thumbnailImages = useMemo(() => {
    const size30Image = "https://cdn.shopify.com/s/files/1/0602/5281/5555/files/Thaena_December_Finals_2025_1-13.jpg?v=1766006457";
    const size90Image = "https://cdn.shopify.com/s/files/1/0602/5281/5555/files/Thaena_December_Finals_2025_1-14.jpg?v=1766006457";
    const galleryImage1 = "https://cdn.shopify.com/s/files/1/0602/5281/5555/files/Screenshot_2025-12-17_at_2.34.55_PM.png?v=1766010941";
    const galleryImage2 = "https://cdn.shopify.com/s/files/1/0602/5281/5555/files/Screenshot_2025-12-17_at_2.35.10_PM.png?v=1766010941";
    
    if (selectedSize === "30") {
      return [
        size30Image, // Top thumbnail - selected size image (30 cap)
        galleryImage1, // Middle thumbnail - gallery image 1
        galleryImage2, // Bottom thumbnail - gallery image 2
      ];
    } else {
      return [
        size90Image, // Top thumbnail - selected size image (90 cap)
        galleryImage1, // Middle thumbnail - gallery image 1
        galleryImage2, // Bottom thumbnail - gallery image 2
      ];
    }
  }, [selectedSize]);

  // Determine which image to show based on selected thumbnail
  const imageUrl = thumbnailImages[selectedImageIndex];

  // Reset selected image index when size changes
  useEffect(() => {
    setSelectedImageIndex(0); // Reset to top thumbnail when size changes
  }, [selectedSize]);

  return (
    <>
      {/* Product Section */}
      <div className="min-h-screen bg-neutral-light">
        <main className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Product Image Section */}
            <div className="flex-1 max-w-[700px]">
              <div className="flex gap-2 items-start">
                {/* Thumbnail Gallery */}
                <div className="flex flex-col gap-2 flex-shrink-0 pt-0">
                  {thumbnailImages.map((thumbUrl, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImageIndex === index
                          ? "border-teal-green shadow-md"
                          : "border-slate-dark/20 hover:border-slate-dark/40"
                      }`}
                      aria-label={`View image ${index + 1}`}
                    >
                      <img
                        src={thumbUrl}
                        alt={`ThaenaBiotic product view ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {selectedImageIndex === index && (
                        <div className="absolute inset-0 border-2 border-teal-green rounded-lg pointer-events-none" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Main Image */}
                <div className="flex-1 min-w-0">
                  <div className="relative w-full max-w-[700px] h-[700px]">
                    <img
                      src={imageUrl}
                      alt="ThaenaBiotic Postbiotic Supplement bottle"
                      className="w-full h-full object-cover rounded-lg"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details Section */}
            <div className="flex-1 max-w-[636px] flex flex-col gap-2">
              {/* Category */}
              <p className="text-rust text-xs font-roboto-mono uppercase tracking-wider">
                Daily Wellness
              </p>

              {/* Title */}
              <h1 className="font-playfair text-4xl md:text-5xl leading-tight text-slate-dark">
                ThaenaBiotic<sup>®</sup> - Postbiotic Supplement
              </h1>

              {/* Description */}
              <div className="flex flex-col gap-2">
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
              <div className="flex flex-col gap-3 mt-2">
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
                      <p className="text-slate-dark/80 text-xs font-light">
                        <a 
                          href="https://thaena.com/pages/chloe-app" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="underline hover:text-teal-green transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          30-day money-back guarantee
                        </a>
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
              <div className="flex flex-col sm:flex-row gap-4 items-start mt-2">
                {/* Price */}
                <div className="flex-shrink-0">
                  <p className="font-playfair text-3xl text-slate-dark">
                    ${currentPrice.toFixed(2)}
                  </p>
                </div>

                {/* Purchase Options */}
                <div className="flex-1 flex flex-col gap-2 w-full">
                  {/* One-time Purchase */}
                  <button
                    onClick={() => setPurchaseType("onetime")}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
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
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => setPurchaseType("subscribe")}
                      className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
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
                          className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-dark/30 hover:border-slate-dark/50 transition-all bg-white"
                          aria-haspopup="listbox"
                          aria-expanded={isDeliveryDropdownOpen}
                        >
                          <span className="text-sm text-slate-dark">
                            {deliveryOptions.find(opt => opt.value === deliveryFrequency)?.label || `Delivery every ${deliveryFrequency}`}
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
              <div className="flex flex-col gap-2 mt-2">
                <label className="text-slate-dark/80 text-xs font-roboto-mono uppercase tracking-wider">
                  Quantity
                </label>
                <div className="flex gap-6 items-stretch">
                  {/* Quantity Selector */}
                  <div className="flex items-center border border-slate-dark/30 rounded flex-shrink-0">
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
                  <div className="flex-1 min-w-0">
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
                      className="w-full bg-slate-dark hover:bg-slate-dark/90 text-neutral-light font-roboto-mono text-base font-medium py-4 px-6 rounded-xl transition-all"
                    >
                      Add to Cart
                    </AddToCartButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
