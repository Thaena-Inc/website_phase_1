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
                The Thaena Donor Program
              </h1>

              <div className="flex flex-col items-center gap-2.5 max-w-full pb-3">
                <p className="font-roboto text-lg sm:text-xl leading-7 font-normal text-slate">
                  Our donors are not suppliers.
                </p>

                <p className="font-roboto text-lg sm:text-xl leading-7 font-normal text-slate">
                  They are <strong>partners</strong> in a regenerative healing ecosystem — individuals whose exceptional microbial balance helps advance science, restore depleted microbiomes, and redefine what thriving human health can look like.
                </p>

                <p className="font-roboto text-lg sm:text-xl leading-7 font-normal text-slate">
                  This is <strong>Humans Healing Humans<sup>™</sup></strong>, at scale.
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
                  Why We Built Our Own Donor Program
                </h2>
                <p className="font-roboto text-[18px] md:text-[20px] leading-[28px] text-slate-dark text-center">
                  Thaena operates its own <strong>independent donor program</strong>.
                </p>
              </div>

              <div className="flex flex-col gap-6 max-w-[1024px] w-full">
                <p className="font-roboto text-base sm:text-lg leading-[1.625] font-normal text-slate">
                Unlike conventional donation models, we:
                </p>

                <ul className="list-[circle] list-inside">
                  <li className="font-roboto text-base sm:text-lg leading-[1.625] font-normal text-slate">Do not outsource donor screening</li>
                  <li className="font-roboto text-base sm:text-lg leading-[1.625] font-normal text-slate">Do not rely on minimum-viability health definitions</li>
                  <li className="font-roboto text-base sm:text-lg leading-[1.625] font-normal text-slate">Do not ignore health and wellness habits like diet and lifestyle</li>
                </ul>

                <p className="font-roboto text-base sm:text-lg leading-[1.625] font-normal text-slate">
                  Instead, we curate a living reference for what thriving human biology looks like in practice — and hold every downstream process to that same standard.
                </p>

                <p className="font-roboto text-base sm:text-lg leading-[1.625] font-normal text-slate">
                  This allows us to set a higher bar for:
                </p>

                <p className="font-playfair text-base sm:text-lg leading-[1.625] font-normal text-slate pl-[10px] border-l border-teal-green/80">
                  Safety • Consistency • Postbiotic diversity and composition
                </p>

                <p className="font-roboto text-base sm:text-lg leading-[1.625] font-normal text-slate">
                  Because regenerative health starts at the source.
                </p>
              </div>

              <div className="flex flex-col gap-6 max-w-[1024px] w-full">
                <p className="font-roboto text-base sm:text-lg leading-[1.625] font-bold text-slate">
                  Most stool banks just screen for disease.
                </p>

                <p className="font-roboto text-base sm:text-lg leading-[1.625] font-bold text-slate">
                  We look for patterns of health across the whole system.
                </p>

                <p className="font-roboto text-base sm:text-lg leading-[1.625] font-normal text-slate">
                  At Thaena, health is measured by resilience, regulation, and long-term balance — not just lack of disease. We look for individuals whose bodies demonstrate:
                </p>

                <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-slate font-roboto text-base leading-6">Stable, well-regulated digestion</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-slate font-roboto text-base leading-6">Low baseline inflammation</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-slate font-roboto text-base leading-6">Robust immune and metabolic signaling</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-slate font-roboto text-base leading-6">Long-term physiological consistency, not short-term optimization</span>
                </div>
              </div>

                <p className="font-roboto text-base sm:text-lg leading-[1.625] font-normal text-slate">
                  This level of biological coherence is rare.
                </p>

                <p className="font-playfair text-base sm:text-lg leading-[1.625] font-normal text-center text-deep-purple">
                That rarity is exactly why it matters.
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
                  Eligibility for the Thaena Donor Program reflects <strong>whole-body health across time</strong>, not isolated metrics.
                </p>

                <p className="font-roboto text-base sm:text-lg leading-[1.625] font-normal text-slate text-center">
                  Candidates must meet strict criteria, including:
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
                    <span className="font-roboto text-base leading-[1.625] text-slate">Healthy, stable BMI</span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-slate">•</span>
                    <span className="font-roboto text-base leading-[1.625] text-slate">Vaginal birth and breastfed in infancy</span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-slate">•</span>
                    <span className="font-roboto text-base leading-[1.625] text-slate">Consistent, high-quality daily bowel movements</span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-slate">•</span>
                    <span className="font-roboto text-base leading-[1.625] text-slate">Long-term whole-food dietary patterns</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 flex-1 max-w-full lg:max-w-[332px]">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-slate">•</span>
                    <span className="font-roboto text-base leading-[1.625] text-slate">
                      No history of chronic GI, autoimmune, metabolic, mental health, or inflammatory disease
                    </span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-slate">•</span>
                    <span className="font-roboto text-base leading-[1.625] text-slate">
                      Fewer than six lifetime courses of antibiotics
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
                  Final eligibility is determined through <strong>comprehensive clinical screening and advanced laboratory testing</strong>.
                </p>
              </div>

              <div className="flex flex-col items-center gap-3.5 mt-6 w-full max-w-[896px]">
                <h3 className="font-playfair text-2xl sm:text-3xl lg:text-[36px] font-normal leading-tight lg:leading-[60px] text-center text-deep-purple">
                  Fewer than <strong>1% of applicants</strong> qualify.
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
                  How the Selection Process Works
                </h2>
              </div>

              <div className="w-full max-w-[896px]">
                <p className="font-roboto text-base sm:text-lg leading-[1.625] font-normal text-slate text-center">
                  Every potential donor goes through a thoughtful, medically supervised process designed to protect both donors and the people we serve.
                </p>
              </div>

              <div className="relative w-full max-w-[527px] mt-4">
                <div className="absolute left-5 top-5 bottom-5 w-px bg-rust/20 hidden sm:block" />

                <div className="flex flex-col gap-6">
                  {[
                    {
                      step: '1',
                      title: 'InitialApplication Review',
                      body: 'A brief survey to ensure basic eligibility',
                    },
                    {
                      step: '2',
                      title: 'Health & Lifestyle Questionnaires',
                      body: ' Detailed history, bowel movement tracking, and food diary',
                    },
                    {
                      step: '3',
                      title: 'Physician Interview',
                      body: 'One-on-one review with our clinical team',
                    },
                    {
                      step: '4',
                      title: 'Clinical Screening & Lab Testing',
                      body: 'Blood, stool, and urine analysis',
                    },
                    {
                      step: '5',
                      title: 'Ongoing Monitoring',
                      body: 'Continued participation depends on sustained health over time, regular check ins, and follow up lab screenings',
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

              <div className="flex flex-col gap-2 w-full max-w-[1024px] mt-6">
              <p className="font-roboto text-base sm:text-lg leading-[1.625] font-normal text-slate">
                At Thaena, donor health is not a one-time decision — it's an ongoing relationship. Because the microbiome responds to sleep, stress, diet, environment, and major life events, we monitor donors continuously and pause collection whenever balance may be temporarily disrupted.
                </p>
                <p className="font-roboto text-base sm:text-lg leading-[1.625] font-normal text-slate text-center">
                  &quot;Everything affects the microbiome. When one of our donors experienced a significant loss in their family, we paused collection until their system returned to balance.&quot;
                </p>
                <p className="font-roboto text-sm italic leading-5 text-slate text-center">
                  Dr. Andrea McBeth, CEO
                </p>
                <p className="font-roboto text-base sm:text-lg leading-[1.625] font-normal text-slate">
                  This approach protects donors, preserves signal integrity, and reflects how seriously we take our responsibility to both sides of the healing relationship.
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
                  From Donor to Postbiotic Signal
                </h2>
              </div>

              <div className="w-full max-w-[896px]">
                <p className="font-roboto text-base sm:text-lg leading-[1.625] font-normal text-slate text-center">
                  Donor screening is only the <strong>first step</strong> in Thaena's broader safety and quality process.
                </p>
                <p className="font-roboto text-base sm:text-lg leading-[1.625] font-normal text-slate text-center">
                  From there, every batch undergoes:
                </p>
                <div className="relative w-full max-w-[527px] mt-4">

                  <div className="flex flex-col gap-6">
                    {[
                      {
                        step: '1',
                        body: 'Controlled collection',
                      },
                      {
                        step: '2',
                        body: 'Patented sterilization for safety',
                      },
                      {
                        step: '3',
                        body: 'Lyophilization to preserve postbiotic signals',
                      },
                      {
                        step: '4',
                        body: 'Third-party batch testing for safety, purity, and consistency',
                      },
                    ].map(({step, title, body}) => (
                      <div key={step} className="grid grid-cols-[auto_1fr] gap-3 items-start">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-rust/30 relative z-10 bg-cream">
                          <span className="font-mono text-sm text-rust">{step}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-roboto text-sm leading-[1.625] text-slate">{body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
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
                  Become a Partner in Healing
                </h2>
              </div>

              <div className="w-full">
                <p className="font-roboto text-xl sm:text-2xl lg:text-[28px] leading-[1.16] font-normal text-slate text-center">
                  If you carry an unusually resilient, well-regulated microbiome, your biology may help others find their way back to health.
                </p>
              </div>

              <a
                href="https://9zft9a2cyhi.typeform.com/to/y2Fbvx72"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 px-8 items-center justify-center rounded-[10px] bg-slate-dark hover:bg-slate-dark/90 text-cream font-roboto text-lg font-medium shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)]"
              >
                Apply to the Thaena Donor Program
              </a>

              <div className="w-full">
                <p className="font-roboto text-lg sm:text-xl lg:text-[28px] leading-[1.16] font-light text-slate text-center italic">
                Confidential. Medically supervised. All testing covered.
                </p>

                <p className="font-roboto text-lg sm:text-xl lg:text-[28px] leading-[1.16] font-light text-slate text-center italic">
                  Compensation provided.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

/** @typedef {import('./+types/donor').Route} Route */


