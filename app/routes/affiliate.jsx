import CheckIcon from '../components/CheckIcon';
import {
  ShortChainFattyAcidsIcon,
  AminoAcidsIcon,
  IndolesIcon,
  PeptidesIcon,
  AdditionalMetabolitesIcon,
} from '../components/MoleculeIcons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export default function AffiliatePage() {
  const features = [
    'No colonization required',
    'No refrigeration',
    'No live microbes or bacterial DNA',
    'Designed for sensitive guts',
    'A sterilized, human-derived postbiotic from rigorously screened donors',
    'Postbiotic nutrients your body already recognizes',
    'Full-spectrum molecular diversity',
  ];

  const molecules = [
    {
      icon: <ShortChainFattyAcidsIcon />,
      title: 'Short-chain fatty acids',
      description: 'Energy for gut cells',
      color: 'text-deep-purple',
    },
    {
      icon: <AminoAcidsIcon />,
      title: 'Amino acids',
      description: 'Building blocks of life',
      color: 'text-rust',
    },
    {
      icon: <IndolesIcon />,
      title: 'Indoles',
      description: 'Neurological signaling',
      color: 'text-earth-brown',
    },
    {
      icon: <PeptidesIcon />,
      title: 'Peptides',
      description: 'Cellular communication',
      color: 'text-slate',
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

  return (
    <div className="min-h-screen bg-light-neutral">
      {/* Hero Section */}
      <section className="relative min-h-[540px] flex items-center justify-center px-6 py-16 md:py-24 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `
              linear-gradient(99deg, rgba(222, 176, 101, 0.00) -0.01%, rgba(222, 176, 101, 0.13) 50%, rgba(222, 176, 101, 0.25) 100.01%),
              linear-gradient(266deg, rgba(39, 91, 82, 0.12) -0.01%, rgba(39, 91, 82, 0.24) 48.18%, rgba(39, 91, 82, 0.40) 96.36%),
              url('https://cdn.shopify.com/s/files/1/0602/5281/5555/files/Thaena_December_Finals_2025_1-75.jpg?v=1766006458')
            `,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        />

        <div className="absolute inset-0 backdrop-blur-[5px]" />

        <div className="relative z-10 w-full max-w-[768px] mx-auto flex flex-col items-center gap-6 text-center">
          <div className="inline-block">
            <span className="text-slate font-mono text-xs font-medium leading-5 tracking-[0.7px] uppercase">
              Welcome to Humans Healing Humans
            </span>
          </div>

          <h1 className="font-playfair text-teal-green text-4xl sm:text-5xl md:text-[60px] font-normal leading-tight md:leading-[60px]">
            Welcome to Thaena
          </h1>

          <div className="w-full max-w-[672px]">
            <p className="text-slate font-roboto text-lg sm:text-xl leading-7 font-medium">
              Create your free Thaena account below to access special pricing,
              courtesy of {{affiliate_name}}.
            </p>
            <p className="text-slate font-roboto text-lg sm:text-xl leading-7 font-normal">
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
            <button className="h-14 px-8 bg-deep-purple text-light-neutral font-mono text-base font-medium leading-6 rounded-xl shadow-[0_4px_20px_-4px_rgba(29,48,41,0.08)] hover:bg-deep-purple/90 transition-colors">
              Create Your Free Account
            </button>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16 md:py-24 px-6 bg-neutral-warm">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center gap-3 mb-12 text-center">
            <span className="text-rust font-mono text-sm font-medium leading-5 tracking-[0.7px] uppercase">
              Our Product
            </span>
            <h2 className="font-playfair text-teal-green text-4xl md:text-[48px] font-normal leading-tight md:leading-[48px]">
              ThaenaBiotic®
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-12 mb-12">
            <div className="flex-1 flex flex-col gap-7 max-w-2xl lg:max-w-none">
              <p className="text-slate font-roboto text-lg leading-[29.25px]">
                ThaenaBiotic® delivers over 13,000 distinct metabolites made by
                healthy microbiomes — not created in a lab, but naturally
                fermented inside a healthy human gut.
              </p>

              <h3 className="text-slate font-playfair text-xl font-medium leading-7">
                What sets it apart:
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

              <p className="text-earth-brown font-playfair text-xl font-medium leading-7">
                ThaenaBiotic® offers a new way to support gut health —
                function-first, ecosystem-informed, and radically human.
              </p>
            </div>

            <div className="w-full lg:w-[400px] flex-shrink-0">
              <div className="relative rounded-3xl shadow-[0_8px_32px_-8px_rgba(29,48,41,0.10)] backdrop-blur-[2px] overflow-hidden">
                <img
                  src="https://cdn.shopify.com/s/files/1/0602/5281/5555/files/Thaena_December_Finals_2025_1-84.jpg?v=1766006455"
                  alt="ThaenaBiotic supplement bottle"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="h-14 px-8 bg-deep-purple text-light-neutral font-mono text-base font-medium leading-6 rounded-xl shadow-[0_4px_20px_-4px_rgba(29,48,41,0.08)] hover:bg-deep-purple/90 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center gap-3 mb-12 text-center">
            <span className="text-rust font-mono text-sm font-medium leading-5 tracking-[0.7px] uppercase">
              Our Story
            </span>
            <h2 className="font-playfair text-teal-green text-4xl md:text-[48px] font-normal leading-tight md:leading-[48px]">
              Who We Are
            </h2>
          </div>

          <div className="max-w-[849px] mx-auto flex flex-col gap-[23px] mb-12">
            <p className="text-slate font-roboto text-lg leading-[29.25px]">
              Thaena is building a regenerative healing brand rooted in a simple
              truth: humans are ecosystems, and modern life is eroding the
              microbial biodiversity that keeps those ecosystems resilient.
            </p>

            <p className="text-slate font-roboto text-lg leading-[29.25px]">
              Thaena was founded by a clinician who saw firsthand the powerful,
              restorative effects of the human microbiome. Working with patients
              struggling with chronic illness and gut dysfunction, she witnessed
              the potential of fecal microbiota transplant (FMT) but also
              recognized its limitations.
            </p>

            <p className="text-slate font-roboto text-lg leading-[29.25px]">
              That experience sparked a bold idea: could we safely capture the
              functional benefits of a healthy human microbiome, without the
              risks or complications of live organisms?
            </p>

            <p className="text-slate font-roboto text-lg leading-[29.25px]">
              What followed was years of research, donor screening, and
              scientific development, leading to a breakthrough: ThaenaBiotic® —
              a shelf-stable, sterilized, human-derived postbiotic supplement.
              Designed to deliver the richness of microbial metabolites from
              extraordinarily healthy humans, ThaenaBiotic® is a new way to
              support gut health. Function-first, ecosystem-informed, and
              radically human.
            </p>

            <p className="text-slate font-roboto text-lg leading-[29.25px]">
              But Thaena is more than a single product. We exist to restore
              human postbiotic signaling for gut and whole-body health. Our work
              aims to support the body as an ecosystem: resilient, biodiverse,
              and capable of rebuilding.
            </p>

            <p className="text-earth-brown font-playfair text-lg font-medium leading-7">
              At its core, Thaena is guided by one belief: humans can help
              humans heal.
            </p>
          </div>

          <div className="flex justify-center">
            <button className="h-14 px-8 bg-transparent text-deep-purple font-mono text-base font-medium leading-6 rounded-xl border-2 border-deep-purple hover:bg-deep-purple/5 transition-colors">
              Create Your Free Account
            </button>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-16 md:py-24 px-6 bg-neutral-warm">
        <div className="max-w-[1425px] mx-auto flex flex-col gap-6">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-rust font-mono text-sm font-medium leading-5 tracking-[0.7px] uppercase">
              OUR Science
            </span>
            <h2 className="font-playfair text-teal-green text-4xl md:text-[48px] font-normal leading-tight md:leading-[48px]">
              The Science Behind ThaenaBiotic®
            </h2>
            <div className="max-w-[1024px]">
              <p className="text-slate font-roboto text-xl leading-7">
                Why gut signals matter, what's inside ThaenaBiotic®, and how we
                ensure uncompromising safety
              </p>
            </div>
          </div>

          <div className="max-w-[1280px] mx-auto flex flex-col gap-4 mt-6">
            <h3 className="text-teal-green font-playfair text-[32px] font-normal leading-[48px] tracking-[-1.2px] text-center">
              Why Gut Signals Matter
            </h3>

            <div className="flex flex-col gap-[23px]">
              <p className="text-slate font-roboto text-lg leading-[29.25px]">
                Your microbiome is part of an ecosystem that depends on
                thousands of small, powerful molecules created as it breaks down
                food. These{' '}
                <span className="font-bold">postbiotic nutrients</span> help
                support energy, mood, immunity, inflammation balance, and the
                resilience of the gut itself.
              </p>

              <p className="text-slate font-roboto text-lg leading-[29.25px]">
                But modern life can starve this ecosystem. Stress, low-fiber
                diets, antibiotics, and chronic imbalance all decrease its
                diversity. When diversity drops, postbiotic nutrient production
                drops, and your body loses one of its core sources of
                resilience.
              </p>

              <p className="text-slate font-roboto text-lg leading-[29.25px]">
                <span className="font-bold">
                  ThaenaBiotic® is the regenerative bridge.
                </span>
              </p>

              <p className="text-slate font-roboto text-lg leading-[29.25px]">
                A thriving human microbiome produces a wide spectrum of
                postbiotic molecules, a complexity no plant, probiotic, or
                lab-grown system can fully replicate. And when your own
                biodiversity is depleted, it may not be able to generate the
                signals you need — <span className="font-bold">yet</span>.
              </p>

              <p className="text-slate font-roboto text-lg leading-[29.25px]">
                Thaena® sources these postbiotic nutrients from rare, biodiverse
                human microbiomes. They're sterilized and refined, then
                delivered to you as regenerative support. It's a bridge that
                helps{' '}
                <span className="font-bold">
                  re-establish healthy signaling
                </span>{' '}
                while your ecosystem rebuilds.
              </p>

              <p className="text-earth-brown font-playfair text-xl font-medium leading-[29.25px]">
                No live microbes. No DNA. No colonization required—just the
                signals your body already recognizes.
              </p>
            </div>
          </div>

          <div className="flex justify-center my-4">
            <div className="w-24 h-px bg-[#A7B3A7]" />
          </div>

          <div className="flex flex-col gap-16">
            <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-4">
              <h3 className="text-teal-green font-playfair text-[32px] font-normal leading-[48px] tracking-[-1.2px] text-center">
                Key Postbiotic Molecules
              </h3>
              <div className="max-w-[1024px]">
                <p className="text-slate font-roboto text-xl leading-7 text-center">
                  ThaenaBiotic® contains more than 13,000 metabolites. These are
                  a few of the most well-studied postbiotic categories that play
                  key roles in supporting gut and whole-body function:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1280px] mx-auto w-full">
              {molecules.map((molecule, index) => (
                <div
                  key={index}
                  className="flex items-center gap-5 p-4 rounded-2xl shadow-[0_4px_20px_-4px_rgba(29,48,41,0.08)] backdrop-blur-[2px] bg-white/50"
                >
                  {molecule.icon}
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

              <div className="flex flex-col justify-center items-center gap-3 p-4 rounded-2xl shadow-[0_4px_20px_-4px_rgba(29,48,41,0.08)] backdrop-blur-[2px] bg-white/50 md:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3">
                  <AdditionalMetabolitesIcon />
                  <h4 className="text-teal-green font-playfair text-lg font-medium leading-7 text-center">
                    + 10,000+ additional metabolites
                  </h4>
                </div>
                <p className="text-slate font-roboto text-sm leading-5 text-center">
                  Science is still mapping them, but your gut already knows what
                  to do with them.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-4">
            <div className="w-24 h-px bg-[#A7B3A7]" />
          </div>

          <div className="max-w-[1280px] mx-auto w-full">
            <div className="flex flex-col items-center gap-3 w-full">
              <p className="font-mono text-[14px] leading-[20px] tracking-[0.7px] uppercase text-warm-brown text-center">
                Safety Information
              </p>
              <h2 className="font-playfair text-[36px] md:text-[48px] leading-[1] font-normal tracking-[-0.025em] text-teal-green text-center">
                Our Process: Safety You Can Trust
              </h2>
              <div className="w-24 h-[1px] bg-sage"></div>
              <p className="font-roboto text-[18px] md:text-[20px] leading-[28px] text-slate-dark text-center max-w-[768px] mt-2">
                Every step is controlled by us, designed for safety first and
                regenerative integrity always.
              </p>
            </div>

            <div className="relative">
              <div className="absolute top-8 left-0 right-0 h-[1px] bg-sage hidden lg:block"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 text-center"
                  >
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
              <p className="text-earth-brown font-playfair text-lg font-medium leading-7">
                Built by scientists, we raised safety and quality to a new
                standard — and protected human postbiotic nutrients the industry
                once dismissed as irrelevant.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button className="h-14 px-8 bg-deep-purple text-light-neutral font-mono text-base font-medium leading-6 rounded-xl shadow-[0_4px_20px_-4px_rgba(29,48,41,0.08)] hover:bg-deep-purple/90 transition-colors">
              Get Started
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

            <div className="flex justify-center">
              <button className="h-14 px-8 bg-transparent text-deep-purple font-mono text-base font-medium leading-6 rounded-xl border-2 border-deep-purple hover:bg-deep-purple/5 transition-colors">
                Create Your Free Account
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
