import CheckIcon from '../components/CheckIcon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

/**
 * @type {Route.MetaFunction}
 */
export const meta = () => {
  return [{title: 'Thaena | Affiliate'}];
};

export default function AffiliatePage() {
  const features = [
    'No colonization required (signals, not organisms)',
    'No refrigeration (shelf-stable)',
    'No live microbes or bacterial DNA',
    'Designed for sensitive guts',
    'Full-spectrum postbiotic diversity (13,000+ metabolites)',
  ];

  const donors = [
    'Stable, well-regulated digestion',
    'Low baseline inflammation',
    'Balanced immune and metabolic signaling',
    'Long-term physiological consistency',
  ];

  const molecules = [
    {
      icon: 'https://cdn.shopify.com/s/files/1/0602/5281/5555/files/SCFAs-Icons.png?v=1766099676',
      bgColor: 'bg-deep-purple/15',
      title: 'Short-chain fatty acids',
      description: 'Fuel for gut cells',
      color: 'text-deep-purple',
    },
    {
      icon: 'https://cdn.shopify.com/s/files/1/0602/5281/5555/files/Amino-Acids-Icon.png?v=1766099677',
      bgColor: 'bg-rust/15',
      title: 'Peptides and amino acids',
      description: 'Cellular communication and repair',
      color: 'text-rust',
    },
    {
      icon: 'https://cdn.shopify.com/s/files/1/0602/5281/5555/files/Indoles-Icon.png?v=1766099676',
      bgColor: 'bg-earth-brown/20',
      title: 'Indoles',
      description: 'Neurological signaling',
      color: 'text-earth-brown',
    },
    {
      icon: 'https://cdn.shopify.com/s/files/1/0602/5281/5555/files/SCFAs-Icons.png?v=1766099676',
      bgColor: 'bg-slate-dark/15',
      title: 'Bile acids',
      description: 'Digestive signaling and balance',
      color: 'text-slate-dark',
    },
    {
      icon: 'https://cdn.shopify.com/s/files/1/0602/5281/5555/files/Amino-Acids-Icon.png?v=1766099677',
      bgColor: 'bg-sage/30',
      title: 'Ceramides',
      description: 'Cellular barrier support and repair',
      color: 'text-teal-green',
      descriptionColor: 'text-slate-dark',
    },
    {
      icon: 'https://cdn.shopify.com/s/files/1/0602/5281/5555/files/Additional-Metabolites-Icon.png?v=1766099676',
      bgColor: 'bg-sage-green/30',
      title: 'Additional metabolites',
      description: 'Still being mapped by science',
      color: 'text-teal-green',
    },
  ];

  const faqs = [
    {
      question: <>Who is this product for?</>,
      answer: (
        <>
          ThaenaBiotic<sup>®</sup> is designed for anyone looking to support their gut health with human-derived postbiotic nutrients. It's especially beneficial for those with sensitive guts, people who have tried probiotics without success, and anyone experiencing the effects of modern lifestyle stress on their microbiome.
        </>
      ),
    },
    {
      question: (
        <>
          How is ThaenaBiotic<sup>®</sup> different from probiotics?
        </>
      ),
      answer: (
        <>
          Unlike probiotics, which deliver live bacteria that need to colonize your gut, ThaenaBiotic<sup>®</sup> provides postbiotic metabolites—the beneficial compounds that healthy bacteria produce. This means no live organisms, no refrigeration needed, and signals your body already recognizes and can use immediately.
        </>
      ),
    },
    {
      question: <>Is it safe?</>,
      answer: (
        <>
          Yes. ThaenaBiotic<sup>®</sup> undergoes rigorous safety protocols. Every batch is produced under strict GMP conditions, third-party tested for safety and purity, and our patented sterilization process eliminates all live microbes while preserving the functional postbiotic signals. Donors are screened to the highest standards.
        </>
      ),
    },
    {
      question: <>Does it need refrigeration?</>,
      answer: (
        <>
          No. One of the key advantages of ThaenaBiotic<sup>®</sup> is its shelf-stability. Because it contains postbiotic metabolites rather than live organisms, it doesn't require refrigeration and maintains its potency at room temperature.
        </>
      ),
    },
    {
      question: <>How does it taste?</>,
      answer: (
        <>
          ThaenaBiotic<sup>®</sup> comes in easy-to-swallow capsules, so there's no taste to worry about. Simply take with water as part of your daily routine.
        </>
      ),
    },
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

  return (
    <div className="min-h-screen bg-light-neutral">
      {/* Hero Section */}
      <section className="relative min-h-[540px] flex items-center justify-center px-6 py-16 md:py-16 lg:py-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `
              url('https://cdn.shopify.com/s/files/1/0602/5281/5555/files/Thaena_December_Finals_2025_1-75.jpg?v=1766006458')
            `,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgb(222 176 101 / 5%) 0%, rgb(222 176 101 / 25%) 50%, rgb(222 176 101 / 40%) 100%) center center, linear-gradient(315deg, rgb(39 91 82 / 10%) 0%, rgb(39 91 82 / 30%) 50%, rgb(39 91 82 / 50%) 100%) center center, linear-gradient(90deg, rgb(237 232 222 / 60%) 0%, rgb(237 232 222 / 60%) 50%, rgb(237 232 222 / 60%) 100%) center center`,
            backgroundPosition: 'center center',
          }}
        />

        <div className="relative z-10 w-full max-w-[768px] mx-auto flex flex-col items-center gap-6 text-center">
          <div className="inline-block">
            <span className="px-3 py-1 bg-teal-green/50 rounded-full text-[#ede8de] font-mono text-xs font-medium leading-5 tracking-[0.7px] uppercase">
              Welcome to Humans Healing Humans
            </span>
          </div>

          <h1 className="font-playfair text-teal-green text-4xl sm:text-5xl md:text-[60px] font-normal leading-tight md:leading-[60px]">
            Welcome to Thaena
          </h1>

          <div className="w-full max-w-[672px]">
            <p className="text-slate font-roboto text-lg sm:text-xl leading-7 font-medium">
            Create your free Thaena account below to access special pricing, courtesy of {'{{affiliate_name}}'}.
        This page is only available through their link.
            </p>
          </div>

          <div className="w-full max-w-[672px]">
            <p className="text-slate font-roboto text-lg sm:text-xl leading-7 font-normal font-light italic">
              Account creation is free. No subscription required. Your discount
              is applied automatically after sign-up.
            </p>
          </div>

          <div className="mt-2">
            <a href="#affiliateForm" className="h-14 px-8 bg-slate-dark text-light-neutral font-mono text-base font-medium leading-6 rounded-xl shadow-[0_4px_20px_-4px_rgba(29,48,41,0.08)] hover:bg-slate-dark/90 transition-colors inline-flex items-center justify-center">
              Create Your Free Account
            </a>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="affiliateForm" className="py-16 md:py-24 px-6">
        <div className="max-w-[1024px] mx-auto">
          <p className="font-playfair text-teal-green text-4xl md:text-[48px] font-normal leading-tight md:leading-[48px]">Form Placeholder</p>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16 md:py-24 px-6 bg-neutral-warm">
        <div className="max-w-[1024px] mx-auto">
          <div className="flex flex-col items-center gap-3 mb-12 text-center">
            <span className="text-rust font-mono text-base font-medium leading-5 tracking-[0.7px] uppercase">
              Our Product
            </span>
            <h2 className="font-playfair text-teal-green text-4xl md:text-[48px] font-normal leading-tight md:leading-[48px]">
              What We Make
            </h2>
          </div>

          <div className="grid grid-cols-[1.1fr_0.9fr] gap-[34px] items-start md:grid-cols-1">
            <div>
              <p className="text-base leading-[1.65] text-slate-dark m-0 mb-[18px] max-w-[62ch] font-roboto">
              ThaenaBiotic<sup>®</sup> is a postbiotic supplement delivering over 13,000 distinct metabolites made by healthy microbiomes — not created in a lab, but naturally fermented inside a healthy human gut.
              </p>

              <div className="grid grid-cols-2 gap-[14px] my-[6px] mb-[18px] sm:grid-cols-1" role="list" aria-label="Product highlights">
                <div className="bg-neutral-light border border-sage/50 rounded-xl p-[14px_14px_13px] shadow-[0_10px_30px_rgba(0,0,0,0.06)]" role="listitem">
                  <div className="text-base font-semibold tracking-[0.01em] mb-1.5 text-slate-dark leading-[1.35]">No colonization required</div>
                  <div className="text-sm text-slate-dark/80 leading-[1.4]">No live microbes or bacterial DNA</div>
                </div>

                <div className="bg-neutral-light border border-sage/50 rounded-xl p-[14px_14px_13px] shadow-[0_10px_30px_rgba(0,0,0,0.06)]" role="listitem">
                  <div className="text-base font-semibold tracking-[0.01em] mb-1.5 text-slate-dark leading-[1.35]">Designed for sensitive guts</div>
                  <div className="text-sm text-slate-dark/80 leading-[1.4]">Full-spectrum molecular diversity</div>
                </div>

                <div className="bg-neutral-light border border-sage/50 rounded-xl p-[14px_14px_13px] shadow-[0_10px_30px_rgba(0,0,0,0.06)]" role="listitem">
                  <div className="text-base font-semibold tracking-[0.01em] mb-1.5 text-slate-dark leading-[1.35]">No refrigeration</div>
                  <div className="text-sm text-slate-dark/80 leading-[1.4]">Support for travel, disruption, and daily rhythm</div>
                </div>

                <div className="bg-neutral-light border border-sage/50 rounded-xl p-[14px_14px_13px] shadow-[0_10px_30px_rgba(0,0,0,0.06)]" role="listitem">
                  <div className="text-base font-semibold tracking-[0.01em] mb-1.5 text-slate-dark leading-[1.35]">Subscription available</div>
                  <div className="text-sm text-slate-dark/80 leading-[1.4]">30-day money-back guarantee</div>
                </div>
              </div>

              <div className="border-l-2 border-rust-dark/50 pl-[14px] py-[10px] my-[6px] mb-[22px]">
                <div className="text-base leading-[1.55] text-slate-dark font-roboto">
                  A sterilized, human-derived postbiotic from rigorously screened donors — delivering postbiotic nutrients your body already recognizes.
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[400px] flex-shrink-0 flex">
              <div className="relative rounded-3xl shadow-[0_8px_32px_-8px_rgba(29,48,41,0.10)] backdrop-blur-[2px] overflow-hidden w-full h-full flex items-center justify-center">
                <img
                  src="https://cdn.shopify.com/s/files/1/0602/5281/5555/files/Thaena_December_Finals_2025_1-84.jpg?v=1766006455"
                  alt="ThaenaBiotic supplement bottle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <a href="#affiliateForm" className="h-14 px-8 bg-slate-dark text-light-neutral font-mono text-base font-medium leading-6 rounded-xl shadow-[0_4px_20px_-4px_rgba(29,48,41,0.08)] hover:bg-slate-dark/90 transition-colors inline-flex items-center justify-center">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="pt-[72px] px-[18px] pb-[84px]">
        <div className="max-w-[1080px] mx-auto">
          <div className="flex flex-col items-center gap-3 mb-12 text-center">
            <span className="text-rust font-mono text-base font-medium leading-5 tracking-[0.7px] uppercase">
              Who We Are
            </span>
            <h2 className="font-playfair text-teal-green text-4xl md:text-[48px] font-normal leading-tight md:leading-[48px]">
              Why Thaena is Different
            </h2>
          </div>

          <div className="max-w-[1024px] mx-auto mb-[42px] text-center">
            <div className="text-sm text-slate-dark font-semibold">
              Most gut supplements focus on: <span className="font-semibold">Adding strains (probiotics)</span>, or <span className="font-semibold">Feeding strains (prebiotics)</span>
            </div>
          </div>

          <div className="max-w-[1024px] mx-auto mb-[34px] p-[22px_24px_24px] border border-sage rounded-xl text-center">
            <div className="text-sm text-slate-dark mb-3 font-semibold">
              ThaenaBiotic<sup>®</sup> focuses on something more foundational:
            </div>
            <div className="font-playfair text-[22px] leading-[1.35] text-slate-dark">
              supporting the <strong>signaling environment</strong> that helps the gut ecosystem function and recover.
            </div>
          </div>

          <div className="max-w-fit mx-auto grid grid-cols-3 gap-[10px] mb-8" aria-label="Key differences">
            {features.map((feature, index) => {
              // Parse feature text to extract main text and subtext
              const match = feature.match(/^(.+?)\s*\((.+?)\)$/);
              const mainText = match ? match[1].trim() : feature;
              const subText = match ? match[2].trim() : null;

              return (
                <div key={index} className="py-2">
                  <div className="text-sm leading-[1.5] text-slate-dark/80 font-semibold border-l-2 border-sage pl-[14px]">
                    {mainText}
                    {subText && (
                      <>
                        <br />
                        <span className="font-medium text-slate-dark/60 ml-1.5">
                          ({subText})
                        </span>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <a href="#affiliateForm" className="h-14 px-8 bg-transparent text-slate-dark font-mono text-base font-medium leading-6 rounded-xl border-2 border-slate-dark hover:bg-slate-dark/5 transition-colors inline-flex items-center justify-center">
              Unlock Your Discount — Create Free Account
            </a>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="pt-[78px] px-[18px] pb-[92px] bg-neutral-warm">
        <div className="max-w-[1024px] mx-auto flex flex-col gap-6">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-rust font-mono text-base font-medium leading-5 tracking-[0.7px] uppercase">
              The Science
            </span>
            <h2 className="font-playfair text-teal-green text-4xl md:text-[48px] font-normal leading-tight md:leading-[48px]">
              Humans Healing Humans<sup>™</sup> — from the source
            </h2>
          </div>

          {/* Group 1: Baseline */}
          <div className="max-w-[720px] mx-auto py-[10px] ml-[11.5rem]">
            <p className="m-0 text-base leading-[1.75] text-slate-dark font-light font-roboto">
              Most stool banks simply screen for disease. <span className="font-semibold">We look for patterns of health across the whole system.</span>
            </p>
          </div>

          {/* Group 2: Donor philosophy (spotlight) */}
          <div className="max-w-[720px] mx-auto relative py-4 pb-0 w-full">
            <p className="m-0 relative z-10 text-lg leading-[1.55] text-slate-dark font-playfair text-center">
              Thaena operates its own donor program with direct medical oversight. Our donors are not suppliers — they are partners in a regenerative healing ecosystem.
            </p>
            <div className="hhh5-divider" aria-hidden="true"></div>
          </div>

          {/* Group 3: Donor criteria */}
          <div className="max-w-[720px] mx-auto py-[10px] ml-[11.5rem]">
            <p className="m-0 text-base leading-[1.75] text-slate-dark font-semibold mb-3 font-roboto">
              We look for individuals whose bodies demonstrate:
            </p>

            <ul className="grid grid-cols-2 gap-[10px_20px] font-roboto w-full" role="list" aria-label="Donor criteria">
              {donors.map((donor, index) => (
                <li key={index} className="pl-[14px] relative text-slate-dark/80 text-base leading-[1.55] hhh5-crit" role="listitem">
                  {donor}
                </li>
              ))}
            </ul>
          </div>

          {/* Group 4: Hinge */}
          <div className="max-w-[720px] mx-auto py-[10px] pl-[14px] border-l-2 border-rust-dark ml-[11.5rem]">
            <p className="m-0 text-base leading-[1.75] text-slate-dark font-semibold font-roboto">
              This allows us to hold a higher standard at the source — and throughout the entire process.
            </p>
          </div>

          {/* Group 5: Safety outcomes (box) */}
          <div className="max-w-[720px] mx-auto py-[10px] border border-sage rounded-xl bg-neutral-light p-[18px] w-full">
            <p className="m-0 text-base leading-[1.75] text-slate-dark font-semibold mb-3 font-roboto">
              Every batch of ThaenaBiotic<sup>®</sup> reflects:
            </p>

            <ul className="list-none p-0 mt-1.5 grid gap-[10px]" aria-label="Batch reflections">
              <li className="flex gap-[10px] text-slate-dark text-base leading-[1.5] items-start">
                <CheckIcon />
                <span className="font-roboto">
                  Careful donor selection and ongoing monitoring
                </span>
              </li>
              <li className="flex gap-[10px] text-slate-dark text-base leading-[1.5] items-start">
                <CheckIcon />
                <span className="font-roboto">
                  Sterilization for safety
                </span>
              </li>
              <li className="flex gap-[10px] text-slate-dark text-base leading-[1.5] items-start">
                <CheckIcon />
                <span className="font-roboto">
                  Preservation of postbiotic diversity
                </span>
              </li>
              <li className="flex gap-[10px] text-slate-dark text-base leading-[1.5] items-start">
                <CheckIcon />
                <span className="font-roboto">
                  Third-party testing for purity and consistency
                </span>
              </li>
            </ul>
          </div>

          {/* Group 6: Seal */}
          <div className="max-w-[720px] mx-auto py-[10px]">
            <p className="m-0 text-base leading-[1.75] text-slate-dark font-bold tracking-[0.01em] font-roboto">
              This is Humans Healing Humans<sup>™</sup> — with modern safety controls and scientific integrity.
            </p>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[1024px] mx-auto flex flex-col gap-6">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-rust font-mono text-base font-medium leading-5 tracking-[0.7px] uppercase">
              What's Inside
            </span>
            <h2 className="font-playfair text-teal-green text-4xl md:text-[48px] font-normal leading-tight md:leading-[48px]">
              What's Inside ThaenaBiotic<sup>®</sup>
            </h2>
          </div>

          <div className="flex flex-col gap-16">
            <div className="max-w-[1024px] mx-auto flex flex-col items-center gap-4">
              <div className="max-w-[1024px]">
                <p className="text-slate font-roboto text-xl leading-7 text-center">
                  ThaenaBiotic<sup>®</sup> contains more than <strong>13,000 metabolites</strong> naturally produced inside healthy human gut ecosystems.
                </p>
                <p className="text-slate font-roboto text-xl leading-7 text-center">
                  Some well-studied categories include:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1280px] mx-auto w-full">
              {molecules.map((molecule, index) => (
                <div
                  key={index}
                  className="flex items-center gap-5 p-4 rounded-2xl shadow-[0_4px_20px_-4px_rgba(29,48,41,0.08)] backdrop-blur-[2px] bg-white/50"
                >
                  <div className={`flex w-12 h-11 justify-center items-center rounded-full ${molecule.bgColor} shrink-0`}>
                    <img
                      src={molecule.icon}
                      alt={molecule.title}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4
                      className={`${molecule.color} font-playfair text-lg font-medium leading-7`}
                    >
                      {molecule.title}
                    </h4>
                    <p className="text-slate font-roboto text-sm leading-5">
                      {molecule.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started Section */}
      <section className="py-16 md:py-24 px-6 bg-earth-brown/20">
        <div className="relative flex items-center justify-center">
          <div className="max-w-[786px] flex flex-col justify-center items-center gap-6 relative z-20">
            {/* Heading */}
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-[48px] leading-[1] lg:leading-[48px] tracking-[-1.2px] text-teal-green text-center font-normal">
              How to Get Started
            </h2>

            {/* Subheading */}
            <div className="pb-4">
              <p className="font-roboto text-xl md:text-2xl lg:text-[28px] leading-[32.5px] text-slate-dark text-center">
                Most people begin with a simple daily routine.
              </p>
              <p className="font-roboto text-xl md:text-2xl lg:text-[28px] leading-[32.5px] text-slate-dark text-center">
                ThaenaBiotic<sup>®</sup> is <strong>non-living and sterilized</strong>, designed to be easy to integrate — no complex protocols, no colonization, no refrigeration.
              </p>
            </div>

            {/* CTA Button */}
            <a href="#affiliateForm" className="h-14 px-10 py-7 flex items-center justify-center rounded-[10px] bg-transparent border-2 border-slate-dark hover:bg-slate-dark/5 transition-colors">
              <span className="font-roboto text-lg font-medium leading-7 text-slate-dark">
                Create Your Free Account to Get Your Discount
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[1425px] mx-auto">
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="text-rust font-mono text-base font-medium leading-5 tracking-[0.7px] uppercase">
                Questions & Answers
              </span>
              <h2 className="font-playfair text-teal-green text-4xl md:text-[48px] font-normal leading-tight md:leading-[48px]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="w-full max-w-[768px]">
              <Accordion
                type="single"
                collapsible
                className="flex flex-col gap-4"
              >
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="rounded-xl shadow-[0_4px_20px_-4px_rgba(29,48,41,0.08)] backdrop-blur-[2px] bg-white/50 border-none px-6 py-4"
                  >
                    <AccordionTrigger className="text-slate font-playfair text-lg font-normal leading-7 hover:no-underline text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate font-roboto text-base leading-6 pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section>
        <div className="relative flex items-center justify-center bg-neutral-light overflow-hidden py-16 md:py-24 px-6">
          {/* Background Image Layer */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('https://cdn.shopify.com/s/files/1/0602/5281/5555/files/bharath-kumar-lJZII_3rg0M-unsplash_2.jpg?v=1765998606')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: '0.2',
            }}
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background: `linear-gradient(0deg, rgba(167, 179, 167, 0.50) 0%, rgba(167, 179, 167, 0.50) 100%)`,
            }}
          />

          {/* Content Layer */}
          <div className="max-w-[786px] flex flex-col justify-center items-center gap-6 relative z-20">
            {/* Heading */}
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-[48px] leading-[1] lg:leading-[48px] tracking-[-1.2px] text-teal-green text-center font-normal">
              Your partner discount is waiting.
            </h2>

            {/* Subheading */}
            <div className="pb-4">
              <p className="font-roboto text-xl md:text-2xl lg:text-[28px] leading-[32.5px] text-slate-dark text-center">
                Create your free Thaena account to unlock discounted pricing and get started.
              </p>
            </div>

            {/* CTA Button */}
            <a href="#affiliateForm" className="h-14 px-10 py-7 flex items-center justify-center rounded-[10px] bg-slate-dark shadow-lg hover:opacity-90 transition-opacity">
              <span className="font-roboto text-lg font-medium leading-7 text-light-neutral">
                Create Your Free Account to Get Your Discount
              </span>
            </a>

            <p className="text-slate font-roboto text-xl leading-7 text-center font-light italic">
              Free to join. Your discount is applied after account creation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
