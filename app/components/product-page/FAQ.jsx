import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export default function FAQ() {
  return (
    <>
    {/* FAQ Section */}
    <div className="bg-neutral-warm">
    <div className="max-w-[1200px] mx-auto px-8 py-16 lg:py-24">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 mb-16">
        <p className="font-roboto-mono text-sm leading-5 tracking-[0.35px] uppercase text-rust-dark text-center">
          Common Questions
        </p>
        <h2 className="font-playfair text-3xl md:text-4xl lg:text-[48px] leading-[1] lg:leading-[48px] tracking-[-1.2px] text-teal-green text-center font-normal">
          Frequently Asked Questions
        </h2>
        <div className="w-24 h-[1px] bg-sage"></div>
        <p className="font-roboto text-lg md:text-xl leading-7 text-slate-dark text-center max-w-[768px] pt-6">
          Get answers to the most common questions about ThaenaBiotic® and our microbiome restoration process.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-[896px] mx-auto">
        <Accordion type="single" collapsible className="flex flex-col gap-4">
          <AccordionItem value="item-1" className="bg-neutral-light rounded-xl border-none">
            <AccordionTrigger className="px-8 py-6 hover:no-underline" chevronColor="text-teal-green">
              <span className="font-playfair text-lg font-medium leading-7 tracking-[-0.4px] text-teal-green text-left">
                Why poop?
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-8 pb-6 pt-0">
              <p className="font-roboto text-base leading-7 text-slate-dark">
                ThaenaBiotic® is derived from human stool because that's where the most diverse and beneficial postbiotic metabolites are found. Unlike lab-grown alternatives, our human-derived approach captures the full spectrum of compounds your gut actually recognizes and uses.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-neutral-light rounded-xl border-none">
            <AccordionTrigger className="px-8 py-6 hover:no-underline" chevronColor="text-teal-green">
              <span className="font-playfair text-lg font-medium leading-7 tracking-[-0.4px] text-teal-green text-left">
                Are the molecules still viable?
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-8 pb-6 pt-0">
              <p className="font-roboto text-base leading-7 text-slate-dark">
                Yes. Our proprietary sterilization and preservation process maintains the structural integrity of the metabolites while eliminating all live bacteria. The postbiotic compounds remain bioactive and ready to signal your gut.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-neutral-light rounded-xl border-none">
            <AccordionTrigger className="px-8 py-6 hover:no-underline" chevronColor="text-teal-green">
              <span className="font-playfair text-lg font-medium leading-7 tracking-[-0.4px] text-teal-green text-left">
                Don't I need "matching" bacteria?
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-8 pb-6 pt-0">
              <p className="font-roboto text-base leading-7 text-slate-dark">
                No. ThaenaBiotic® doesn't add bacteria—it delivers the metabolites (postbiotics) that bacteria produce. Your existing microbiome can recognize and respond to these signals regardless of your individual bacterial strains.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-neutral-light rounded-xl border-none">
            <AccordionTrigger className="px-8 py-6 hover:no-underline" chevronColor="text-teal-green">
              <span className="font-playfair text-lg font-medium leading-7 tracking-[-0.4px] text-teal-green text-left">
                Can I take it in tandem with my other medications?
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-8 pb-6 pt-0">
              <p className="font-roboto text-base leading-7 text-slate-dark">
                ThaenaBiotic® is generally safe to take alongside most medications. However, we always recommend consulting with your healthcare provider before starting any new supplement, especially if you're on prescription medications or have specific health conditions.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
  </>
  );
}