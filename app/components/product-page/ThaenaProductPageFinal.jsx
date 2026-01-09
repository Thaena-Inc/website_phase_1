import HeroAndBuyBox from "./HeroAndBuyBox";
import WhatsInThaenaBiotic from "./WhatsInThaenaBiotic";
import IsThaenaForYou from "./IsThaenaForYou";
import HowToTake from "./HowToTake";
import TrackYourJourney from "./TrackYourJourney";
import FAQ from "./FAQ";
import FinalCTA from "./FinalCTA";

/**
 * @param {{
 *   product?: {
 *     featuredImage?: {
 *       url: string;
 *       altText?: string;
 *       width?: number;
 *       height?: number;
 *     };
 *     media?: {
 *       nodes?: Array<{
 *         image?: {
 *           url: string;
 *           altText?: string;
 *           width?: number;
 *           height?: number;
 *         };
 *       }>;
 *     };
 *     selectedOrFirstAvailableVariant?: {
 *       image?: {
 *         url: string;
 *         altText?: string;
 *         width?: number;
 *         height?: number;
 *       };
 *     };
 *   } | null;
 *   customerTags?: string[];
 *   isLoggedIn?: boolean;
 * }}
 */
export default function ThaenaProductPage({product, customerTags = [], isLoggedIn = false}) {
  // Get the main product image - prefer variant image, then featured image, then first media image
  const productImage =
    product?.selectedOrFirstAvailableVariant?.image ||
    product?.featuredImage ||
    product?.media?.nodes?.[0]?.image ||
    null;

  return (
    <>
      <HeroAndBuyBox 
        productImage={productImage}
        product={product}
        customerTags={customerTags}
        isLoggedIn={isLoggedIn}
      />
      <WhatsInThaenaBiotic />
      <IsThaenaForYou />
      <HowToTake />
      <TrackYourJourney />
      <FAQ />
      <FinalCTA />
    </>
  );
}
