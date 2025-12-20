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
  return [{title: 'Thaena | Microbiome Donors'}];
};

export default function DonorPage() {
  return (
    <div className="relative min-h-screen bg-cream">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `url('https://api.builder.io/api/v1/image/assets/TEMP/892d48c75141afc5400f5264c4c18b89ae62201d?width=2850') lightgray 0px -515.5px / 100% 361.675% no-repeat, linear-gradient(268deg, rgba(160, 92, 59, 0.00) -0.03%, rgba(160, 92, 59, 0.10) 49.35%, rgba(160, 92, 59, 0.17) 98.73%), linear-gradient(92deg, rgba(39, 91, 82, 0.00) -0.03%, rgba(39, 91, 82, 0.14) 49.33%, rgba(39, 91, 82, 0.31) 98.7%), #F7F3EC`,
        }}
      />

      <div className="relative z-10 flex flex-col">
        {/* Hero */}
        <section
          className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24"
          style={{
            backgroundImage:
              'url(https://cdn.builder.io/api/v1/image/assets%2F2698fec9a90e4b17b35971f30190927b%2F659f0658f3e14691afa882f15cc56b9c)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundColor: 'rgba(39, 91, 82, 0.2)',
          }}
        >
          <div className="w-full max-w-[1024px] mx-auto">
            <div className="flex flex-col items-center gap-5 text-center">
              <h1 className="font-playfair text-4xl sm:text-5xl lg:text-[60px] font-normal leading-tight lg:leading-[60px] tracking-[-0.025em] lg:tracking-[-1.5px] text-teal-green">
                Our Donors
              </h1>

              <div className="flex flex-col items-center gap-2.5 max-w-full pb-3">
                <p className="font-roboto text-lg sm:text-xl leading-7 font-normal text-slate">
                  Thaena relies on exceptionally healthy, carefully screened microbiome donors. Every bottle of ThaenaBiotic<sup>®</sup> starts with our donors, whose rare biology helps us advance microbiome science and create safe, human-derived postbiotics.
                </p>

                <p className="font-roboto text-lg sm:text-xl leading-7 font-normal text-slate">
                  This donor program is built on a simple belief: Humans Healing Humans.
                </p>
              </div>

              <a
                href="#donor-application"
                className="inline-flex h-14 px-8 items-center justify-center rounded-[10px] bg-slate-dark hover:bg-slate-dark/90 text-cream font-roboto text-lg font-medium whitespace-nowrap shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)]"
              >
                Apply to be a Donor
              </a>
            </div>
          </div>
        </section>

        {/* Why Microbiome Donors Matter */}
        <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-cream">
          <div className="w-full max-w-[1024px] mx-auto">
            <div className="flex flex-col items-center gap-10">
              <div className="w-full max-w-[768px]">
                <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[48px] font-normal leading-tight lg:leading-[48px] tracking-[-0.025em] lg:tracking-[-1.2px] text-teal-green text-center">
                  Why Microbiome Donors Matter
                </h2>
              </div>

              <div className="flex flex-col gap-6 max-w-[896px] w-full">
                <p className="font-roboto text-base sm:text-lg leading-[1.625] font-normal text-slate">
                  In our modern world of processed foods, antibiotic overuse, and stressors, truly healthy microbiomes are becoming increasingly rare – and incredibly valuable.
                </p>

                <p className="font-roboto text-base sm:text-lg leading-[1.625] font-normal text-slate">
                  Our donors represent the exceptional few: individuals whose gut ecosystems have remained remarkably balanced and resilient. That's why we rely on them to create safe, human-derived postbiotics that support gut and whole-body health.
                </p>

                <p className="font-roboto text-base sm:text-lg leading-[1.625] font-normal text-slate">
                  By partnering with these rare individuals, Thaena advances microbiome science while making safe, human-derived postbiotics accessible to those who need them. This is the essence of our &quot;Humans Healing Humans&quot; philosophy — harnessing the wisdom of healthy human biology to support wellness in others.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Qualifies */}
        <section
          className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16"
          style={{backgroundColor: 'rgba(167, 179, 167, 0.3)'}}
        >
          <div className="w-full max-w-[1024px] mx-auto">
            <div className="flex flex-col items-center gap-6">
              <div className="w-full">
                <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[48px] font-normal leading-tight lg:leading-[48px] tracking-[-0.025em] lg:tracking-[-1.2px] text-teal-green text-center">
                  Who Qualifies
                </h2>
              </div>

              <div className="w-full max-w-[896px]">
                <p className="font-roboto text-base sm:text-lg leading-[1.625] font-normal text-slate text-center">
                  Our donors are uniquely healthy individuals who represent the optimal human microbiome. They are carefully screened and monitored to ensure the highest quality metabolite production.
                </p>
              </div>

              <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-6 mt-4">
                <div className="flex flex-col gap-4 flex-1 max-w-full lg:max-w-[332px]">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-slate">•</span>
                    <span className="font-roboto text-base leading-[1.625] text-slate">Age 18–45</span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-slate">•</span>
                    <span className="font-roboto text-base leading-[1.625] text-slate">Healthy BMI</span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-slate">•</span>
                    <span className="font-roboto text-base leading-[1.625] text-slate">Vaginal birth and breastfed as an infant</span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-slate">•</span>
                    <span className="font-roboto text-base leading-[1.625] text-slate">Healthy, consistent daily bowel movements</span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-slate">•</span>
                    <span className="font-roboto text-base leading-[1.625] text-slate">High-quality, whole-food diet</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 flex-1 max-w-full lg:max-w-[332px]">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-slate">•</span>
                    <span className="font-roboto text-base leading-[1.625] text-slate">
                      No chronic GI, autoimmune, metabolic, or inflammatory conditions
                    </span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-slate">•</span>
                    <span className="font-roboto text-base leading-[1.625] text-slate">
                      Fewer than 5 lifetime rounds of antibiotics
                    </span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-slate">•</span>
                    <span className="font-roboto text-base leading-[1.625] text-slate">No prescription medications</span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-slate">•</span>
                    <span className="font-roboto text-base leading-[1.625] text-slate">No tobacco or recreational drug use</span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <p className="font-roboto text-sm italic font-light text-slate text-center">
                  Final eligibility is determined through clinical screening and laboratory testing.
                </p>
              </div>

              <div className="flex flex-col items-center gap-3.5 mt-6 w-full max-w-[896px]">
                <h3 className="font-playfair text-2xl sm:text-3xl lg:text-[36px] font-normal leading-tight lg:leading-[60px] text-center text-deep-purple">
                  Only 3% of applicants are accepted.
                </h3>
                <p className="font-roboto text-base sm:text-lg leading-[1.625] font-light text-slate text-center">
                  Our standards are intentionally strict to ensure consistency, safety, and exceptional microbiome quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Screening Process */}
        <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-cream">
          <div className="w-full max-w-[1024px] mx-auto">
            <div className="flex flex-col items-center gap-6">
              <div className="w-full">
                <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[48px] font-normal leading-tight lg:leading-[48px] tracking-[-0.025em] lg:tracking-[-1.2px] text-teal-green text-center">
                  Screening Process
                </h2>
              </div>

              <div className="w-full max-w-[896px]">
                <p className="font-roboto text-base sm:text-lg leading-[1.625] font-normal text-slate text-center">
                  Every potential donor undergoes comprehensive evaluation with medical oversight. Our multi-stage process maintains the highest bar for acceptance.
                </p>
              </div>

              <div className="relative w-full max-w-[527px] mt-4">
                <div className="absolute left-5 top-5 bottom-5 w-px bg-rust/20 hidden sm:block" />

                <div className="flex flex-col gap-6">
                  {[
                    {
                      step: '1',
                      title: 'Application Review',
                      body: 'Brief initial fit check to assess basic eligibility criteria',
                    },
                    {
                      step: '2',
                      title: 'Health & Lifestyle Questionnaires',
                      body: 'Detailed health and lifestyle history, bowel movement tracker, and food diary',
                    },
                    {
                      step: '3',
                      title: 'Physician Interview',
                      body: 'One-on-one medical review with our clinical team',
                    },
                    {
                      step: '4',
                      title: 'Clinical Screening & Lab Testing',
                      body: 'Comprehensive blood, stool, and urine analysis',
                    },
                    {
                      step: '5',
                      title: 'Ongoing Monitoring',
                      body: 'Donors remain active only if they continue to meet program standards',
                    },
                  ].map(({step, title, body}) => (
                    <div key={step} className="grid grid-cols-[auto_1fr] gap-3 items-start">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-rust/30 relative z-10 bg-cream">
                        <span className="font-mono text-sm text-rust">{step}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="font-playfair text-lg sm:text-xl font-light leading-7 tracking-[-0.025em] text-rust">
                          {title}
                        </h3>
                        <p className="font-roboto text-sm leading-[1.625] text-slate">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full max-w-[896px] mt-6">
                <p className="font-roboto text-base sm:text-lg leading-[1.625] font-normal text-slate text-center">
                  &quot;We&apos;re not just selecting for lack of disease — we&apos;re selecting for the kind of vibrant wellness that most people have never experienced.&quot;
                </p>
                <p className="font-roboto text-sm italic leading-5 text-slate text-center">
                  Dr. Andrea McBeth, CEO
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Begins with Donor Selection */}
        <section
          className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16"
          style={{backgroundColor: 'rgba(109, 79, 44, 0.2)'}}
        >
          <div className="w-full max-w-[1024px] mx-auto">
            <div className="flex flex-col items-center gap-6">
              <div className="w-full">
                <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[48px] font-normal leading-tight lg:leading-[48px] tracking-[-0.025em] lg:tracking-[-1.2px] text-teal-green text-center">
                  Safety Begins with Donor Selection
                </h2>
              </div>

              <div className="w-full max-w-[896px]">
                <p className="font-roboto text-base sm:text-lg leading-[1.625] font-normal text-slate text-center">
                  Donor screening is the first step in Thaena&apos;s multi-layer safety process. By combining exceptional donor health with rigorous clinical oversight, we ensure the safest possible starting material. From there, our process includes sterilization, postbiotic isolation, and batch-level testing.
                </p>
              </div>

              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-rust">Step 01</span>
                    <div className="flex-1 h-px bg-cream" />
                  </div>
                  <h3 className="font-playfair text-lg font-light leading-7 tracking-[-0.025em] text-teal-green">
                    Donor Screening
                  </h3>
                  <p className="font-roboto text-sm leading-[1.625] text-slate">
                    We vet all donors using our own highly stringent health and biodiversity standards — not outsourced screening.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-rust">Step 04</span>
                    <div className="flex-1 h-px bg-cream" />
                  </div>
                  <h3 className="font-playfair text-lg font-light leading-7 tracking-[-0.025em] text-teal-green">
                    Stabilization
                  </h3>
                  <p className="font-roboto text-sm leading-[1.625] text-slate">
                    Freeze-drying protects potency and creates a shelf-stable form suitable for precise encapsulation and reliable dosing.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-rust">Step 02</span>
                    <div className="flex-1 h-px bg-cream" />
                  </div>
                  <h3 className="font-playfair text-lg font-light leading-7 tracking-[-0.025em] text-teal-green">
                    Collection
                  </h3>
                  <p className="font-roboto text-sm leading-[1.625] text-slate">
                    We collect donations under controlled conditions to ensure the highest-quality starting material for postbiotic creation.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-rust">Step 05</span>
                    <div className="flex-1 h-px bg-cream" />
                  </div>
                  <h3 className="font-playfair text-lg font-light leading-7 tracking-[-0.025em] text-teal-green">
                    Processing & Testing
                  </h3>
                  <p className="font-roboto text-sm leading-[1.625] text-slate">
                    Each batch is produced under strict GMP conditions and verified through third-party testing for safety, purity, and consistency.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-rust">Step 03</span>
                    <div className="flex-1 h-px bg-cream" />
                  </div>
                  <h3 className="font-playfair text-lg font-light leading-7 tracking-[-0.025em] text-teal-green">
                    Sterilization
                  </h3>
                  <p className="font-roboto text-sm leading-[1.625] text-slate">
                    Our patented autoclaving process eliminates microbes while preserving the postbiotic signals your body intuitively understands.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="/thaenabiotic"
                  className="inline-flex items-center gap-2 text-sm text-slate-dark underline font-roboto hover:opacity-80 transition-opacity"
                >
                  See our full safety process
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-2.5 h-2.5"
                  >
                    <path
                      d="M0.666626 5.33342H9.99996M9.99996 5.33342L5.33329 0.666748M9.99996 5.33342L5.33329 10.0001"
                      stroke="currentColor"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
          <div className="w-full max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center gap-16">
              <div className="w-full">
                <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[48px] font-normal leading-tight lg:leading-[48px] tracking-[-0.025em] lg:tracking-[-1.2px] text-teal-green text-center">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="w-full max-w-[896px]">
                <Accordion type="single" collapsible className="flex flex-col gap-4">
                  {[
                    {
                      question: 'Do donors follow special diets?',
                      answer:
                        'Our donors maintain naturally healthy, whole-food diets without strict restrictions. We focus on their overall health patterns rather than specific diet protocols.',
                    },
                    {
                      question: 'Do the same donors provide material over time?',
                      answer:
                        'Yes, qualified donors may continue to contribute regularly as long as they maintain the strict health standards required by our program.',
                    },
                    {
                      question: 'Can I apply to be a donor?',
                      answer:
                        'Yes! If you meet the strict health criteria outlined above, you can apply through our donor application process. Only 3% of applicants are accepted.',
                    },
                    {
                      question: 'How many donors do you have?',
                      answer:
                        'We maintain a carefully selected pool of elite donors who represent the exceptional few with optimal microbiome health.',
                    },
                    {
                      question: 'Why do you mix donor samples in the product?',
                      answer:
                        'Combining multiple elite donors creates greater microbial diversity and resilience, providing a more comprehensive postbiotic profile for optimal health benefits.',
                    },
                  ].map((faq, index) => (
                    <AccordionItem
                      key={faq.question}
                      value={`item-${index + 1}`}
                      className="border-none bg-[#EDE8DE] rounded-xl overflow-hidden"
                    >
                      <AccordionTrigger className="font-playfair text-lg font-medium leading-7 tracking-[-0.01em] text-slate hover:no-underline px-6 py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="font-roboto text-sm leading-[1.625] text-slate px-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="donor-application"
          className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 overflow-hidden"
        >
          {/* Background Image Layer */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('https://cdn.shopify.com/s/files/1/0602/5281/5555/files/bharath-kumar-lJZII_3rg0M-unsplash_2.jpg?v=1765998606')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.2 // 20% opacity
            }}
          />
          
          {/* Color Overlay Layer */}
          <div 
            className="absolute inset-0 z-10"
            style={{
              backgroundColor: 'rgba(167, 179, 167, 0.3)'
            }}
          />
          
          {/* Content Layer */}
          <div className="relative z-20 w-full max-w-[786px] mx-auto">
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="w-full">
                <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[48px] font-normal leading-tight lg:leading-[48px] tracking-[-0.025em] lg:tracking-[-1.2px] text-teal-green text-center">
                  Think You Might Be a Good Fit?
                </h2>
              </div>

              <div className="w-full">
                <p className="font-roboto text-xl sm:text-2xl lg:text-[28px] leading-[1.16] font-normal text-slate text-center">
                  Begin your donor application and learn whether you qualify.
                </p>
              </div>

              <a
                href="https://9zft9a2cyhi.typeform.com/to/y2Fbvx72"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 px-8 items-center justify-center rounded-[10px] bg-slate-dark hover:bg-slate-dark/90 text-cream font-roboto text-lg font-medium shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)]"
              >
                Join Our Donor Program
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

/** @typedef {import('./+types/donor').Route} Route */


