import {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {Link} from 'react-router';

/**
 * @type {Route.MetaFunction}
 */
export const meta = () => {
  return [{title: 'Thaena | Home'}];
};

/**
 * @param {Route.LoaderArgs} args
 */
export async function loader(args) {
  // Homepage doesn't need data loading - it's static content
  return {};
}

function CheckIcon() {
  return (
    <svg 
      width="12" 
      height="9" 
      viewBox="0 0 12 9" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-[10.667px] h-[7.333px] flex-shrink-0"
    >
      <path 
        d="M11.3327 0.666748L3.99935 8.00008L0.666016 4.66675" 
        stroke="#275B52" 
        strokeWidth="1.33333" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlipCard({card, wrapperClassName = "", cardClassName = ""}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [expandedHeight, setExpandedHeight] = useState(null);

  const shellRef = useRef(null);
  const backInnerRef = useRef(null);
  const collapsedHeightRef = useRef(null);

  const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  const measureExpandedHeight = () => {
    const shellEl = shellRef.current;
    const backEl = backInnerRef.current;
    if (!shellEl || !backEl) return;

    let minHeightPx = 0;
    if (typeof window !== 'undefined') {
      const minHeight = window.getComputedStyle(shellEl).minHeight;
      const parsed = Number.parseFloat(minHeight);
      if (Number.isFinite(parsed)) minHeightPx = parsed;
    }

    const collapsedBaseline =
      (collapsedHeightRef.current ?? 0) > 0 ? collapsedHeightRef.current : 0;
    const measuredShellHeight = Math.ceil(shellEl.getBoundingClientRect().height);

    // If we're already expanded, the measured height is not a good baseline
    // (it would prevent shrinking on resize). Prefer min-height / collapsed height.
    const baselineHeight =
      expandedHeight != null
        ? Math.max(minHeightPx, collapsedBaseline)
        : Math.max(minHeightPx, collapsedBaseline, measuredShellHeight);
    const neededHeight = Math.ceil(backEl.scrollHeight);
    const next = neededHeight > baselineHeight ? neededHeight : null;
    if (next !== expandedHeight) setExpandedHeight(next);
  };

  // When unflipped, clear any explicit height so the default stays unchanged.
  useIsomorphicLayoutEffect(() => {
    if (!isFlipped) {
      setExpandedHeight(null);
      collapsedHeightRef.current = null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFlipped]);

  // When flipped, expand this card only if its back content needs more room.
  useIsomorphicLayoutEffect(() => {
    if (isFlipped) {
      measureExpandedHeight();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFlipped, card?.content]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onResize = () => {
      if (isFlipped) measureExpandedHeight();
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFlipped]);

  const renderContent = (text, boldWord) => {
    if (!boldWord) {
      return text.split('\n').map((line, i) => (
        <span key={i}>
          {line}
          {i < text.split('\n').length - 1 && <><br /><br /></>}
        </span>
      ));
    }

    const parts = text.split(boldWord);
    return (
      <>
        {parts[0]}
        <strong>{boldWord}</strong>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={wrapperClassName}>
      <div
        ref={shellRef}
        className={`relative w-full transition-[height] duration-300 ${cardClassName}`}
        style={expandedHeight ? {height: `${expandedHeight}px`} : undefined}
      >
        <div
          className={`relative w-full h-full transition-opacity duration-300 ${
            isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <button
            onClick={() => {
              if (shellRef.current) {
                collapsedHeightRef.current = Math.ceil(
                  shellRef.current.getBoundingClientRect().height,
                );
              }
              setIsFlipped(true);
            }}
            className="w-full h-full flex flex-col items-end justify-between p-6 md:p-8 rounded-xl border border-[#EDE7DE] shadow-sm hover:shadow-md transition-shadow bg-cream/80 text-left"
          >
            <h3 className="font-playfair text-[20px] md:text-[24px] font-semibold leading-[1.25] text-slate-dark w-full text-center m-0">
              {card.title}
            </h3>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <path
                d="M7.5 4.1665L13.3333 9.99984L7.5 15.8332"
                stroke="#925781"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            ref={backInnerRef}
            className="w-full h-full flex flex-col justify-between p-6 md:p-8 rounded-xl border border-deep-purple/40 shadow-lg bg-cream/50"
          >
            <p className="font-roboto text-[14px] leading-[22.75px] text-slate-dark">
              {renderContent(card.content, card.contentBold)}
            </p>
            <button
              onClick={() => {
                setIsFlipped(false);
                setExpandedHeight(null);
                collapsedHeightRef.current = null;
              }}
              className="font-roboto text-[12px] font-semibold leading-[16px] tracking-[0.6px] uppercase text-deep-purple hover:text-deep-purple/80 transition-colors self-start mt-4"
            >
              Click to flip back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExpandableCard({card, isExpanded, onToggle}) {
  const contentId = `expandable-card-content-${card.id}`;

  const renderContent = (text, boldWords) => {
    if (!boldWords || boldWords.length === 0) {
      return text;
    }

    const parts = [];
    let remaining = text;
    let key = 0;

    boldWords.forEach(boldWord => {
      const index = remaining.indexOf(boldWord);
      if (index !== -1) {
        if (index > 0) {
          parts.push(remaining.substring(0, index));
        }
        parts.push(<strong key={key++}>{boldWord}</strong>);
        remaining = remaining.substring(index + boldWord.length);
      }
    });

    if (remaining) {
      parts.push(remaining);
    }

    return parts;
  };

  return (
    <div className="flex flex-col items-center flex-1 min-w-[250px] max-w-[320px] rounded-[24px] border border-sage shadow-sm hover:shadow-md transition-shadow">
      <div className="w-[220px] flex flex-col items-center py-6">
        <div className="flex justify-center items-center self-stretch aspect-square rounded-xl mb-4">
          <img 
            src={card.image} 
            alt={card.title}
            className="w-full h-full object-cover rounded-xl"
            onError={(e) => {
              console.error('Image failed to load. Please update the image URL.');
              e.target.style.display = 'none';
            }}
          />
        </div>
        
        <button 
          type="button"
          onClick={onToggle}
          className="flex items-center gap-5 w-full mb-4"
          aria-expanded={isExpanded}
          aria-controls={contentId}
        >
          <h3 className="flex-1 text-left font-playfair text-[18px] font-semibold leading-[22.5px] text-teal-green">
            {card.title}
          </h3>
          <svg 
            width="12" 
            height="7" 
            viewBox="0 0 12 7" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={`w-[10px] h-[5px] flex-shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          >
            <path 
              d={isExpanded ? "M0.833984 0.833374L5.83398 5.83337L10.834 0.833374" : "M10.834 5.83337L5.83398 0.833374L0.833984 5.83337"}
              stroke="#275B52" 
              strokeWidth="1.66667" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div 
          id={contentId}
          className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <p className="font-roboto text-[14px] leading-[22.75px] text-slate-dark/80">
            {renderContent(card.content, card.contentBold)}
          </p>
        </div>
      </div>
    </div>
  );
}

const cards = [
  {
    id: 1,
    image: "https://cdn.shopify.com/s/files/1/0602/5281/5555/files/microbiome-signals_png.png?v=1766004524",
    title: "You're an ecosystem, and your microbiome is central to that.",
    content: "You carry more living microbes than human cells. When that living ecosystem breaks down food, it produces thousands of powerful molecules — the postbiotic nutrients that help fuel cellular energy, support immune balance, and influence mood.",
    contentBold: ["postbiotic nutrients"]
  },
  {
    id: 2,
    image: "https://cdn.shopify.com/s/files/1/0602/5281/5555/files/quieted-signals_png.png?v=1766004524",
    title: "Modern living can starve this ecosystem.",
    content: "You inherit your microbiome at birth, but low-fiber diets, antibiotics, ultra-processed food, infection, stress, and chronic imbalance can decrease its diversity. When diversity drops, postbiotic nutrient production drops, and your body loses one of its core sources of resilience."
  },
  {
    id: 3,
    image: "https://cdn.shopify.com/s/files/1/0602/5281/5555/files/question-signals_png.png?v=1766004524",
    title: "You can't fake human biodiversity.",
    content: "A thriving human microbiome produces a wide spectrum of postbiotic molecules. No plant, probiotic, or lab-grown system can replicate that full complex ecology. And when your own biodiversity is depleted, it may not be able to generate the signals you need — yet.",
    contentBold: ["yet."]
  },
  {
    id: 4,
    image: "https://cdn.shopify.com/s/files/1/0602/5281/5555/files/postbiotic-blend_png.png?v=1766004524",
    title: "ThaenaBiotic® is the regenerative bridge.",
    content: "We source our postbiotic nutrients from rare, biodiverse human microbiomes. They're sterilized and refined, then delivered to you as regenerative support. It's a bridge that helps re-establish healthy signaling while your ecosystem rebuilds.",
    contentBold: ["re-establish healthy signaling"]
  }
];

const keyFeatures = [
  "No colonization required",
  "No refrigeration",
  "No live microbes or bacterial DNA",
  "Designed for sensitive guts",
  "Subscription available"
];

const whatYouGet = [
  "A sterilized, human-derived postbiotic from rigorously screened donors",
  "Postbiotic nutrients your body already recognizes",
  "Full-spectrum molecular diversity",
  "Support for travel, disruption, and daily rhythm"
];

const processSteps = [
  {
    title: "Collection",
    description: "We work directly with vetted human donors using our own highly stringent health and biodiversity standards — not outsourced screening."
  },
  {
    title: "Sterilization",
    description: "Our patented autoclaving process eliminates microbes while preserving the postbiotic signals your body intuitively understands."
  },
  {
    title: "Stabilization",
    description: "Freeze drying protects potency and creates a shelf-stable powder for easy oral encapsulation."
  },
  {
    title: "Processing",
    description: "Every batch is produced under strict GMP conditions and third party tested for safety and purity."
  }
];

const testimonials = [
  {
    quote: "\"I am a healthcare provider and have been recommending ThaenaBiotic® to my patients for the past several years. I have been very impressed with the product and recently decided to try it for myself. I love how simple it is, rather than a complex protocol.\"",
    author: "Dr. Stephanie Raven, ND",
    title: ""
  },
  {
    quote: "\"Now that you [Thaena] came out with this revolutionary postbiotic I can't not use it for people.\"",
    author: "Dr. Dan Rubin, ND FABNO",
    title: "Leading Voice for Naturopathic Oncology"
  }
];

const flipCards = [
  {
    id: "sterilized",
    title: "How sterilized postbiotics work",
    content: "We define postbiotics as the full suite of bioactive compounds and microbial nutrients left after heat-killing the stool of a healthy human gut ecosystem. This includes short-chain fatty acids (SCFAs), polyphenol metabolites, tryptophan derivatives, bioactive peptides, and countless other microbial signaling compounds.\nThaenaBiotic® captures these postbiotic molecules from exceptionally healthy human guts, then preserves them through a patented autoclave and freeze-dry process that removes all live bacteria, viruses, and DNA while protecting the postbiotics.\n\nThe signalling molecules in these postbiotics help your gut support balance, resilience, and recovery, without colonization or the risks of live microbes.",
    contentBold: "without colonization"
  },
  {
    id: "probiotics",
    title: "Why postbiotics ≠ probiotics",
    content: "Probiotics contain only a few microbial strains that are able to be cultured in a lab. Postbiotics, on the other hand, give your gut the signals about what probiotic microbes it should be making — without any live bacteria. It's the difference between adding a single seed to the soil and enriching that soil with all the nutrients that help the whole ecosystem thrive. You're feeding the soil with everything it needs to flourish."
  },
  {
    id: "probiotic-pairing",
    title: "Do you need a probiotic with this?",
    content: "ThaenaBiotic® works on its own — no probiotic required. But if you already use a probiotic you trust, they can be a powerful pairing. Think of them as complementary tools."
  },
  {
    id: "medicine",
    title: "Why poop has always been medicine",
    content: "Across history — from early traditional medicine, veterinary medicine, to today's FDA-regulated fecal microbiota transplants — human stool has been used to restore gut function.\nThaenaBiotic® takes that ancient concept and updates it with modern safety, sterilization, and science: no microbes, no DNA, just the microbial postbiotic nutrients created inside exceptionally healthy humans."
  },
  {
    id: "infection",
    title: "How do you know there's no risk of infection?",
    content: "ThaenaBiotic® is sterilized, not live. Our patented autoclave process heat-kills all organisms, eliminating viability while preserving postbiotic signals. Every batch then undergoes third-party sterility testing for harmful bacteria and heavy metals, and is only released for sale once it passes a full safety panel.\nNo live microbes = no live-microbe infection risk."
  },
  {
    id: "taste",
    title: "What does it taste/smell like?",
    content: "There's no taste, and most of our customers either say there's no scent, or a faint earthy scent. Most customers describe it as mild and easy to take."
  }
];

export default function Homepage() {
  const [activeCardId, setActiveCardId] = useState(null);

  const handleToggleCard = (cardId) => {
    setActiveCardId((prev) => (prev === cardId ? null : cardId));
  };

  return (
    <div className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://cdn.shopify.com/s/files/1/0602/5281/5555/files/Thaena_December_Finals_2025_1-31.jpg?v=1766006459')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: "linear-gradient(90deg, rgba(247, 243, 236, 0.63) 0%, rgba(247, 243, 236, 0.49) 50%, rgba(247, 243, 236, 0.63) 100%)"
          }}
        />
        
        {/* Content Layer */}
        <div className="w-full h-full min-h-screen flex items-center justify-center relative z-20">
          <div className="w-full max-w-[1100px] min-w-[300px] px-6 md:px-8 lg:px-12 py-16 md:py-24">
            <div className="flex flex-col items-start gap-4 md:gap-6">
              <h1 className="font-playfair text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] leading-[1] font-normal tracking-[-0.025em] text-slate-dark text-left">
                The world's first human-derived postbiotic supplement.
              </h1>

              <p className="font-roboto text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] leading-[1.16] font-normal text-slate-dark text-left mr-auto">
                Not probiotics. Not prebiotics. The complete spectrum of postbiotic signals only a healthy gut ecosystem produces.
              </p>

              <p className="font-mono text-[16px] sm:text-[18px] md:text-[20px] leading-[1.625] font-normal uppercase text-slate-dark tracking-wide text-left mr-auto">
                Humans Healing Humans.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 ml-0">
                <Link 
                  to="/thaenabiotic"
                  className="group flex items-center justify-center gap-2 h-[56px] px-[42px] rounded-[12px] border-2 border-deep-purple bg-deep-purple hover:bg-deep-purple/90 transition-colors w-full sm:w-auto"
                >
                  <span className="font-mono text-[16px] font-medium leading-[24px] text-light-neutral">
                    Shop Now
                  </span>
                  <svg 
                    width="11" 
                    height="11" 
                    viewBox="0 0 11 11" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[9.33px] h-[9.33px]"
                  >
                    <path 
                      d="M0.666016 5.33335H9.99935M9.99935 5.33335L5.33268 0.666687M9.99935 5.33335L5.33268 10" 
                      stroke="#f7f3ec" 
                      strokeWidth="1.33333" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                
                <Link 
                  to="/affiliate"
                  className="flex items-center justify-center h-[56px] px-[42px] rounded-[12px] border-2 border-teal-green bg-teal-green hover:bg-teal-green/90 transition-colors w-full sm:w-auto"
                >
                  <span className="font-mono text-[16px] font-medium leading-[24px] text-light-neutral">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: "rgba(247, 243, 236, 1)" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6">
          <div className="flex flex-col items-center w-full">
            <h2 className="font-playfair text-[36px] md:text-[48px] leading-[1] font-normal tracking-[-0.025em] text-teal-green text-center mb-4">
              Why Thaena Works
            </h2>
            <div className="w-24 h-[1px] bg-sage"></div>
          </div>

          <div className="max-w-[850px] min-w-[300px] w-full">
            <p className="font-roboto text-[18px] md:text-[20px] leading-[28px] text-slate-dark text-center">
              Yes, it starts with poop. But what ends up in each capsule are the microbial postbiotic nutrients your gut depends on.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-4 ${
              activeCardId !== null ? 'items-start' : 'items-stretch'
            }`}
          >
            {cards.map((card) => (
              <ExpandableCard
                key={card.id}
                card={card}
                isExpanded={activeCardId === card.id}
                onToggle={() => handleToggleCard(card.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 px-6 overflow-hidden">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://cdn.shopify.com/s/files/1/0602/5281/5555/files/Thaena_December_Finals_2025_1-23.jpg?v=1766006458')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.8
          }}
        />
        <div className="relative max-w-[1200px] mx-auto flex flex-col items-center gap-12 z-10">
          <div className="flex flex-col items-center gap-3 w-auto ml-auto min-w-[50%]">
            <p className="font-mono text-[14px] leading-[20px] tracking-[0.7px] uppercase text-warm-brown text-center">
              Our PRODUCT
            </p>
            <h2 className="font-playfair text-[36px] md:text-[48px] leading-[1] font-normal tracking-[-0.025em] text-teal-green text-center">
              Meet ThaenaBiotic<sup>®</sup>
            </h2>
            <div className="w-24 h-[1px] bg-sage"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-end ml-auto">
            <div className="lg:col-start-2 lg:col-span-2 flex flex-col gap-6 rounded-xl overflow-hidden bg-[#EDE8DE] p-8 border-2 border-sage lg:w-[90%] lg:justify-self-end">
            <p className="font-roboto text-[18px] md:text-[20px] leading-[28px] text-slate-dark text-center mb-[0.5em]">
              ThaenaBiotic<sup>®</sup> delivers over 13,000 distinct metabolites made by healthy microbiomes — not created in a lab, but naturally fermented inside a healthy human gut.
            </p>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="flex flex-col gap-3">
                    <h3 className="font-roboto text-[16px] font-bold leading-[20px] text-slate-dark">
                      Key features:
                    </h3>
                    <div className="flex flex-col gap-3">
                      {keyFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckIcon />
                          <span className="font-roboto text-[14px] leading-[20px] text-slate-dark flex-1">
                            {feature}
                          </span>
                        </div>
                      ))}
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 flex items-center justify-center rounded-full flex-shrink-0">
                          <span className="text-[12px] leading-[16px]">💰</span>
                        </div>
                        <span className="font-roboto text-[14px] leading-[20px] text-slate-dark flex-1">
                          30-day money-back guarantee
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="font-roboto text-[16px] font-bold leading-[20px] text-slate-dark">
                      What you get:
                    </h3>
                    <div className="flex flex-col gap-3">
                      {whatYouGet.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckIcon />
                          <span className="font-roboto text-[14px] leading-[20px] text-slate-dark flex-1">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Link 
                to="/thaenabiotic"
                className="h-[56px] flex items-center justify-center rounded-[12px] border-2 border-teal-green bg-teal-green hover:bg-teal-green/90 transition-colors"
              >
                <span className="font-mono text-[16px] font-medium leading-[24px] text-cream">
                  Shop ThaenaBiotic®
                </span>
              </Link>
              <p className="font-roboto text-[14px] leading-[24px] text-slate-dark text-center">
                <span className="font-medium">Are you a provider or referred by one?</span>
                {" "}
                <a 
                  href="https://thaena.com/account/login" 
                  className="font-light hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Log in for your additional discount.
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
          <div className="flex flex-col items-center gap-3 w-full">
            <p className="font-mono text-[14px] leading-[20px] tracking-[0.7px] uppercase text-warm-brown text-center">
              Safety Information
            </p>
            <h2 className="font-playfair text-[36px] md:text-[48px] leading-[1] font-normal tracking-[-0.025em] text-teal-green text-center">
              Our Process: Safety You Can Trust
            </h2>
            <div className="w-24 h-[1px] bg-sage"></div>
            <p className="font-roboto text-[18px] md:text-[20px] leading-[28px] text-slate-dark text-center max-w-[768px] mt-2">
              Every step is controlled by us, designed for safety first and regenerative integrity always.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-[1px] bg-sage hidden lg:block"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center gap-3 text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-rust-orange flex items-center justify-center bg-cream relative z-10">
                    <div className="w-8 h-8 rounded-full bg-sage/20"></div>
                  </div>
                  
                  <h3 className="font-playfair text-[26px] md:text-[30px] leading-[1.2] font-normal tracking-[-0.025em] text-deep-purple">
                    {step.title}
                  </h3>
                  
                  <p className="font-roboto text-[14px] md:text-[16px] leading-[1.7] text-brown-text max-w-[260px]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 w-full mx-auto">
            <h3 className="font-playfair text-[22px] md:text-[24px] leading-[1.25] font-semibold text-teal-green text-center">
              Why this matters:
            </h3>
            <p className="font-roboto text-[18px] md:text-[20px] leading-[28px] text-slate-dark text-center">
              Built by scientists, we raised safety and quality to a new standard — and protected human postbiotic nutrients the industry once dismissed as irrelevant.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 md:px-28 relative overflow-hidden">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://cdn.shopify.com/s/files/1/0602/5281/5555/files/ChatGPT_Image_DONORS.png?v=1765998384')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.1
          }}
        />
        
        {/* Optional: Color Overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            backgroundColor: "rgba(167, 179, 167, 0.3)"
          }}
        />
        
        {/* Content Layer */}
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12 relative z-20">
          <div className="flex flex-col items-center gap-3 w-full">
            <p className="font-mono text-[14px] leading-[20px] tracking-[0.7px] uppercase text-warm-brown text-center">
              Our Donors
            </p>
            <h2 className="font-playfair text-[36px] md:text-[48px] leading-[1] font-normal tracking-[-0.025em] text-teal-green text-center">
              Healthy Humans in Our Modern World
            </h2>
            <div className="w-24 h-[1px] bg-sage"></div>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-roboto text-[20px] md:text-[24px] leading-[1.33] text-slate-dark text-center max-w-[900px]">
              Our donors are not just part of our process — they're the heart of it. And each donor moves the science forward. Their postbiotic profiles help us sharpen our understanding of resilience, balance, and biodiversity in the human gut, advancing microbiome knowledge for everyone.
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            <blockquote className="border-l-[5px] border-deep-purple pl-6 md:pl-12">
              <p className="font-roboto text-[20px] md:text-[24px] leading-[1.35] text-slate-dark text-center">
                "We're not just selecting for lack of disease — we're selecting for the kind of vibrant wellness that most people have never experienced."
              </p>
            </blockquote>
            <cite className="not-italic">
              <p className="font-roboto text-[16px] leading-[20px] italic text-slate-dark text-center">
                Dr. Andrea McBeth, CEO
              </p>
            </cite>
          </div>

          <div className="flex justify-center">
            <Link 
              to="/donor"
              className="flex items-center justify-center gap-2 h-[56px] px-[42px] rounded-xl border-2 border-deep-purple bg-deep-purple hover:bg-deep-purple/90 transition-colors"
            >
              <span className="font-mono text-[16px] font-medium leading-[24px] text-cream">
                Meet Our Donors
              </span>
              <svg 
                width="11" 
                height="11" 
                viewBox="0 0 11 11" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-[9.33px] h-[9.33px]"
              >
                <path 
                  d="M0.666016 5.33317H9.99935M9.99935 5.33317L5.33268 0.666504M9.99935 5.33317L5.33268 9.99984" 
                  stroke="#F7F3EC" 
                  strokeWidth="1.33333" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
          <div className="flex flex-col items-center gap-4 w-full">
            <p className="font-mono text-[14px] leading-[20px] tracking-[0.35px] uppercase text-rust-orange text-center">
              Patient & Provider Voices
            </p>
            <h2 className="font-playfair text-[36px] md:text-[48px] leading-[1] font-normal tracking-[-0.025em] text-teal-green text-center">
              Testimonials
            </h2>
            <div className="w-24 h-[1px] bg-sage"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex flex-col justify-center gap-4 px-0 lg:px-6 relative"
              >
                {index < testimonials.length && (
                  <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[1px] bg-slate-dark/30 overflow-hidden"></div>
                )}
                
                <blockquote className="font-roboto text-[16px] md:text-[18px] leading-[1.625] text-slate-dark">
                  {testimonial.quote}
                </blockquote>
                
                <div className="flex flex-col">
                  <cite className="not-italic font-playfair text-[16px] leading-[24px] text-slate-dark">
                    {testimonial.author}
                  </cite>
                  {testimonial.title && (
                    <p className="font-roboto text-[14px] leading-[20px] text-slate-dark">
                      {testimonial.title}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex flex-col justify-center gap-4 px-0 lg:px-6">
              <p className="font-roboto text-[16px] md:text-[18px] leading-[1.625] text-slate-dark italic">
                Curious about others' experiences with ThaenaBiotic®?
                <br /><br />
                You can find public conversations on Google and Reddit where individuals share their personal journeys.
                <br /><br />
                Please note: These are independent platforms. The reviews reflect individual opinions and do not represent medical advice or claims validated by Thaena.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: "rgba(109, 79, 44, 0.2)" }}>
        <div className="max-w-[1400px] mx-auto flex flex-col gap-16">
          <div className="flex flex-col items-center gap-3 w-full">
            <p className="font-mono text-[14px] leading-[20px] tracking-[0.7px] uppercase text-warm-brown text-center">
              PRODUCT INSIGHTS
            </p>
            <h2 className="font-playfair text-[36px] md:text-[48px] leading-[1] font-normal tracking-[-0.025em] text-teal-green text-center">
              Inside ThaenaBiotic®
            </h2>
            <div className="w-24 h-[1px] bg-sage"></div>
            <p className="font-roboto text-[18px] md:text-[20px] leading-[1.2] text-slate-dark text-center max-w-[800px] mt-2">
              Six simple explanations that reveal what sets ThaenaBiotic® apart and how it supports your gut.
            </p>
          </div>

          <div className="w-full max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-auto">
              <FlipCard 
                card={flipCards[0]} 
                wrapperClassName="lg:col-span-7 lg:row-span-2"
                cardClassName="min-h-[160px] lg:min-h-[170px]"
              />
              
              <FlipCard 
                card={flipCards[1]} 
                wrapperClassName="lg:col-span-5 lg:row-span-2"
                cardClassName="min-h-[160px] lg:min-h-[192px]"
              />
              
              <FlipCard 
                card={flipCards[2]} 
                wrapperClassName="lg:col-span-5 lg:row-span-2"
                cardClassName="min-h-[160px]"
              />
              
              <FlipCard 
                card={flipCards[3]} 
                wrapperClassName="lg:col-span-7 lg:row-span-2"
                cardClassName="min-h-[160px] lg:min-h-[170px]"
              />
              
              <FlipCard 
                card={flipCards[4]} 
                wrapperClassName="lg:col-span-6 lg:row-span-2"
                cardClassName="min-h-[160px]"
              />
              
              <FlipCard 
                card={flipCards[5]} 
                wrapperClassName="lg:col-span-6 lg:row-span-2"
                cardClassName="min-h-[160px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-[120px] px-6 md:px-80 relative overflow-hidden">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://cdn.shopify.com/s/files/1/0602/5281/5555/files/bharath-kumar-lJZII_3rg0M-unsplash_2.jpg?v=1765998606')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.2
          }}
        />
        
        {/* Gradient Overlays */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: "linear-gradient(0deg, rgba(167, 179, 167, 0.25) 0%, rgba(167, 179, 167, 0.25) 100%), linear-gradient(0deg, rgba(39, 91, 82, 0.15) 0%, rgba(39, 91, 82, 0.15) 100%)"
          }}
        />
        
        {/* Content Layer */}
        <div className="max-w-[786px] mx-auto flex flex-col items-center gap-6 text-center relative z-20">
          <h2 className="font-playfair text-[36px] md:text-[48px] leading-[1] font-normal tracking-[-0.025em] text-teal-green">
            One Capsule. Thousands of Nutrients.
          </h2>
          
          <p className="font-roboto text-[22px] md:text-[28px] leading-[1.16] font-normal text-slate-dark">
            Join the Thaenaverse™ and support your gut's natural intelligence.
          </p>
          
          <Link 
            to="/thaenabiotic"
            className="h-[56px] px-8 flex items-center justify-center rounded-[10px] bg-[#A66890] hover:bg-[#A66890]/90 transition-colors shadow-lg"
          >
            <span className="font-roboto text-[18px] font-medium leading-[28px] text-cream">
              Shop ThaenaBiotic® Now
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}

/** @typedef {import('./+types/_index').Route} Route */
