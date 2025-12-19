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
      icon: 'https://cdn.shopify.com/s/files/1/0602/5281/5555/files/Additional-Metabolites-Icon.png?v=1766099676',
      bgColor: 'bg-sage-green/30',
      title: 'Additional metabolites',
      description: 'Still being mapped by science',
      color: 'text-teal-green',
    },
  ];

  const faqs = [
    {
      question: 'Who is this product for?',
      answer:
        "ThaenaBiotic® is designed for anyone looking to support their gut health with human-derived postbiotic nutrients. It's especially beneficial for those with sensitive guts, people who have tried probiotics without success, and anyone experiencing the effects of modern lifestyle stress on their microbiome.",
    },
    {
      question: 'How is ThaenaBiotic® different from probiotics?',
      answer:
        'Unlike probiotics, which deliver live bacteria that need to colonize your gut, ThaenaBiotic® provides postbiotic metabolites—the beneficial compounds that healthy bacteria produce. This means no live organisms, no refrigeration needed, and signals your body already recognizes and can use immediately.',
    },
    {
      question: 'Is it safe?',
      answer:
        'Yes. ThaenaBiotic® undergoes rigorous safety protocols. Every batch is produced under strict GMP conditions, third-party tested for safety and purity, and our patented sterilization process eliminates all live microbes while preserving the functional postbiotic signals. Donors are screened to the highest standards.',
    },
    {
      question: 'Does it need refrigeration?',
      answer:
        "No. One of the key advantages of ThaenaBiotic® is its shelf-stability. Because it contains postbiotic metabolites rather than live organisms, it doesn't require refrigeration and maintains its potency at room temperature.",
    },
    {
      question: 'How does it taste?',
      answer:
        "ThaenaBiotic® comes in easy-to-swallow capsules, so there's no taste to worry about. Simply take with water as part of your daily routine.",
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
      <section className="relative min-h-[540px] flex items-center justify-center px-6 py-16 md:py-24 lg:py-32">
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
            <button className="h-14 px-8 bg-slate-dark text-light-neutral font-mono text-base font-medium leading-6 rounded-xl shadow-[0_4px_20px_-4px_rgba(29,48,41,0.08)] hover:bg-slate-dark/90 transition-colors">
              Create Your Free Account
            </button>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[1024px] mx-auto">
          <p className="font-playfair text-teal-green text-4xl md:text-[48px] font-normal leading-tight md:leading-[48px]">Form Placeholder</p>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16 md:py-24 px-6 bg-neutral-warm">
        <div className="max-w-[1024px] mx-auto">
          <div className="flex flex-col items-center gap-3 mb-12 text-center">
            <span className="text-rust font-mono text-sm font-medium leading-5 tracking-[0.7px] uppercase">
              Our Product
            </span>
            <h2 className="font-playfair text-teal-green text-4xl md:text-[48px] font-normal leading-tight md:leading-[48px]">
              What We Make
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-12 mb-12">
            <div className="flex-1 flex flex-col gap-7 max-w-2xl lg:max-w-none">
              <p className="text-slate font-roboto text-lg leading-[29.25px]">
              You're not just a body. <strong>You're an ecosystem</strong> — and your gut depends on thousands of molecular signals produced by a healthy, diverse microbiome.
              </p>
              <p className="text-slate font-roboto text-lg leading-[29.25px]">
              Modern life can disrupt that ecosystem. When microbial diversity declines, postbiotic signaling declines too.
              </p>
              <p className="text-slate font-roboto text-lg leading-[29.25px] font-bold">
              ThaenaBiotic® is the regenerative bridge.
              </p>
              <p className="text-slate font-roboto text-lg leading-[29.25px]">
              It delivers a complete spectrum of postbiotic compounds sourced from healthy human gut ecosystems, then <strong>sterilized and refined into capsules</strong>.
              </p>

              <ul className="list-none space-y-[14px]">
                <li className="text-slate font-roboto text-lg leading-6 pl-[10px] border-l border-deep-purple/80">No live microbes</li>
                <li className="text-slate font-roboto text-lg leading-6 pl-[10px] border-l border-deep-purple/80">No bacterial DNA</li>
                <li className="text-slate font-roboto text-lg leading-6 pl-[10px] border-l border-deep-purple/80">No colonization required</li>
              </ul>

              <p className="text-slate font-roboto text-lg leading-[29.25px]">
                Just the signals your body already recognizes.
              </p>
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
            <button className="h-14 px-8 bg-slate-dark text-light-neutral font-mono text-base font-medium leading-6 rounded-xl shadow-[0_4px_20px_-4px_rgba(29,48,41,0.08)] hover:bg-slate-dark/90 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[1024px] mx-auto">
          <div className="flex flex-col items-center gap-3 mb-12 text-center">
            <span className="text-rust font-mono text-sm font-medium leading-5 tracking-[0.7px] uppercase">
              Who We Are
            </span>
            <h2 className="font-playfair text-teal-green text-4xl md:text-[48px] font-normal leading-tight md:leading-[48px]">
              Why Thaena is Different
            </h2>
          </div>

          <div className="mx-auto flex flex-col gap-[23px] mb-12">
            <p className="text-slate font-roboto text-lg leading-[29.25px]">
              Most gut supplements focus on:
            </p>

            <ul className="list-[circle] list-inside">
              <li className="text-slate font-roboto text-lg leading-6">Adding strains (probiotics), or</li>
              <li className="text-slate font-roboto text-lg leading-6">Feeding strains (prebiotics)</li>
            </ul>

            <p className="text-slate font-roboto text-lg leading-[29.25px]">
            <strong>ThaenaBiotic® focuses on something more foundational:</strong><br/>
            supporting the <i>signaling environment</i> that helps the gut ecosystem function and recover.
            </p>

            <h3 className="text-slate font-playfair text-xl font-medium leading-7">
              Key differences:
            </h3>

            <div className="flex flex-col gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-slate font-roboto text-base leading-6">
                      {feature}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          <div className="flex justify-center">
            <button className="h-14 px-8 bg-transparent text-slate-dark font-mono text-base font-medium leading-6 rounded-xl border-2 border-slate-dark hover:bg-slate-dark/5 transition-colors">
              Unlock Your Discount — Create Free Account
            </button>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-16 md:py-24 px-6 bg-neutral-warm">
        <div className="max-w-[1024px] mx-auto flex flex-col gap-6">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-rust font-mono text-sm font-medium leading-5 tracking-[0.7px] uppercase">
              The Science
            </span>
            <h2 className="font-playfair text-teal-green text-4xl md:text-[48px] font-normal leading-tight md:leading-[48px]">
              Humans Healing Humans™ — from the source
            </h2>
          </div>

          {/* Donors Content Container */}
          <div className="max-w-[1024px] mx-auto flex flex-col gap-4 mt-6">
            <p className="text-slate font-roboto text-xl leading-7">
              Most stool banks simply screen for disease.
              <br />
              <strong>We look for patterns of health across the whole system.</strong>
            </p>

            <p className="text-slate font-roboto text-xl leading-7">
              Thaena operates its own donor program with direct medical oversight. Our donors are not suppliers — they are partners in a regenerative healing ecosystem.
            </p>

            <p className="text-slate font-roboto text-xl leading-7">
              We look for individuals whose bodies demonstrate:
            </p>

            <ul className="list-[circle] list-inside flex flex-col gap-3">
              {donors.map((donor, index) => (
                <li key={index} className="text-slate font-roboto text-lg leading-6">
                  {donor}
                </li>
              ))}
            </ul>

            <p className="text-slate font-roboto text-lg leading-[29.25px]">
              This allows us to hold a higher standard at the source — and throughout the entire process.
            </p>
          </div>

          {/* Safety Content Container */}
          <div className="max-w-[1024px] flex flex-col gap-4 mt-6">
            <p className="text-slate font-roboto text-lg leading-[29.25px]">
              Every batch of ThaenaBiotic® reflects:
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-slate font-roboto text-base leading-6">
                  Careful donor selection and ongoing monitoring
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-slate font-roboto text-base leading-6">
                  Sterilization for safety
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-slate font-roboto text-base leading-6">
                  Preservation of postbiotic diversity
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-slate font-roboto text-base leading-6">
                  Third-party testing for purity and consistency
                </span>
              </div>
            </div>

            <p className="text-slate font-roboto text-lg leading-[29.25px]">
              <span className="font-bold">
                This is Humans Healing Humans™ — with modern safety controls and scientific integrity.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[1024px] mx-auto flex flex-col gap-6">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-rust font-mono text-sm font-medium leading-5 tracking-[0.7px] uppercase">
              What's Inside
            </span>
            <h2 className="font-playfair text-teal-green text-4xl md:text-[48px] font-normal leading-tight md:leading-[48px]">
              What's Inside ThaenaBiotic®
            </h2>
          </div>

          <div className="flex flex-col gap-16">
            <div className="max-w-[1024px] mx-auto flex flex-col items-center gap-4">
              <div className="max-w-[1024px]">
                <p className="text-slate font-roboto text-xl leading-7 text-center">
                  ThaenaBiotic® contains more than <strong>13,000 metabolites</strong> naturally produced inside healthy human gut ecosystems.
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
                ThaenaBiotic® is <strong>non-living and sterilized</strong>, designed to be easy to integrate — no complex protocols, no colonization, no refrigeration.
              </p>
            </div>

            {/* CTA Button */}
            <button className="h-14 px-10 py-7 flex items-center justify-center rounded-[10px] bg-transparent border-2 border-slate-dark hover:bg-slate-dark/5 transition-colors">
              <span className="font-roboto text-lg font-medium leading-7 text-slate-dark">
                Create Your Free Account to Get Your Discount
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[1425px] mx-auto">
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="text-rust font-mono text-sm font-medium leading-5 tracking-[0.7px] uppercase">
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
            <button className="h-14 px-10 py-7 flex items-center justify-center rounded-[10px] bg-mauve shadow-lg hover:opacity-90 transition-opacity">
              <span className="font-roboto text-lg font-medium leading-7 text-[#F9F5F1]">
                Create Your Free Account to Get Your Discount
              </span>
            </button>

            <p className="text-slate font-roboto text-xl leading-7 text-center font-light italic">
              Free to join. Your discount is applied after account creation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
