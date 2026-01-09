/**
 * Function Labs pricing utility for BSS Commerce integration
 * Handles customer tag-based pricing discounts
 */

/**
 * Tag priority order (higher index = higher priority)
 */
const TAG_PRIORITY = {
  tier1: 3, // Highest priority
  tier2: 2,
  tier3: 1, // Lowest priority
};

/**
 * Price multipliers by tag and variant size
 * Format: { tag: { size: multiplier } }
 */
const PRICE_MULTIPLIERS = {
  tier3: {
    '7': 0.5,
    '30': 0.49748,
    '90': 0.59919,
  },
  tier1: {
    '30': 0.49748,
    '90': 0.49899,
  },
  tier2: {
    '7': 0.8,
    '30': 0.74874,
    '90': 0.79959,
  },
};

/**
 * Extract variant size from variant title or ID
 * @param {Object} variant - Shopify variant object
 * @returns {string|null} - Size ('7', '30', '90') or null
 */
export function getVariantSize(variant) {
  if (!variant) return null;
  
  const title = variant.title || '';
  const id = variant.id || '';
  
  // Check for 90 first (longest match)
  if (title.includes('90') || id.includes('90') || id === 'gid://shopify/ProductVariant/42146515648707') {
    return '90';
  }
  // Check for 30
  if (title.includes('30') || id.includes('30') || id === 'gid://shopify/ProductVariant/42146515615939') {
    return '30';
  }
  // Check for 7
  if (title.includes('7') || id.includes('7') || id === 'gid://shopify/ProductVariant/50560592937265') {
    return '7';
  }
  
  return null;
}

/**
 * Get the highest priority tag from customer tags
 * @param {string[]} customerTags - Array of customer tags
 * @returns {string|null} - Highest priority tag ('tier1', 'tier2', 'tier3') or null
 */
export function getHighestPriorityTag(customerTags = []) {
  if (!customerTags || customerTags.length === 0) return null;
  
  // Convert tags to lowercase for comparison
  const tagsLower = customerTags.map(tag => tag.toLowerCase());
  
  // Find all matching tags
  const matchingTags = [];
  
  if (tagsLower.includes('tier1')) matchingTags.push('tier1');
  if (tagsLower.includes('tier2')) matchingTags.push('tier2');
  if (tagsLower.includes('tier3')) matchingTags.push('tier3');
  
  if (matchingTags.length === 0) return null;
  
  // Return the tag with highest priority
  return matchingTags.reduce((highest, current) => {
    return TAG_PRIORITY[current] > TAG_PRIORITY[highest] ? current : highest;
  });
}

/**
 * Calculate discounted price based on customer tag and variant size
 * @param {number} basePrice - Original price in cents (or dollars, depending on input)
 * @param {string[]} customerTags - Array of customer tags
 * @param {Object} variant - Variant object with title/id
 * @returns {Object|null} - Price configuration or null if no discount applies
 * @returns {number} return.multiplier - Price multiplier
 * @returns {number} return.discountedPrice - Calculated discounted price
 * @returns {number} return.basePrice - Original base price
 * @returns {string} return.tag - Applied tag
 * @returns {string} return.size - Variant size
 */
export function calculateFunctionLabsPrice(basePrice, customerTags = [], variant = null) {
  if (!customerTags || customerTags.length === 0) return null;
  if (!variant) return null;
  
  // Get highest priority tag
  const tag = getHighestPriorityTag(customerTags);
  if (!tag) return null;
  
  // Get variant size
  const size = getVariantSize(variant);
  if (!size) return null;
  
  // Check if multiplier exists for this tag/size combination
  const multipliers = PRICE_MULTIPLIERS[tag];
  if (!multipliers || !multipliers[size]) return null;
  
  const multiplier = multipliers[size];
  const discountedPrice = basePrice * multiplier;
  
  return {
    multiplier,
    discountedPrice,
    basePrice,
    tag,
    size,
  };
}

/**
 * Check if Function Labs pricing should be applied
 * @param {boolean} isLoggedIn - Whether customer is logged in
 * @param {string[]} customerTags - Customer tags
 * @param {Object} variant - Variant object
 * @returns {boolean}
 */
export function shouldApplyFunctionLabsPricing(isLoggedIn, customerTags = [], variant = null) {
  if (!isLoggedIn) return false;
  if (!customerTags || customerTags.length === 0) return false;
  if (!variant) return false;
  
  const tag = getHighestPriorityTag(customerTags);
  const size = getVariantSize(variant);
  
  return tag !== null && size !== null && PRICE_MULTIPLIERS[tag]?.[size] !== undefined;
}

