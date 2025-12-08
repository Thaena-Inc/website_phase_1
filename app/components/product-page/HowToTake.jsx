export default function HowToTake() {
  return (
    <>
    {/* How to Take ThaenaBiotic Section */}
    <div className="bg-[rgba(109,79,44,0.20)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 py-20">
          {/* Header */}
          <div className="mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-[48px] leading-[1] lg:leading-[48px] tracking-[-0.96px] text-teal-green text-center font-normal mb-4">
              How to Take ThaenaBiotic®
            </h2>
            <p className="font-roboto text-lg md:text-xl leading-7 text-[rgba(68,65,78,0.80)] text-center">
              Flexible dosing for your lifestyle. Take with or without food, morning or evening.
            </p>
          </div>

          {/* Dosage Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Daily Maintenance */}
            <div className="bg-neutral-light rounded-xl border border-[#A8B3A8] shadow-sm p-6 flex flex-col gap-3">
              <div className="inline-flex items-center px-3 py-[2.667px] rounded-full bg-sage self-start">
                <span className="font-roboto-mono text-xs font-bold leading-4 text-white">EVERYDAY</span>
              </div>
              <h3 className="font-cormorant text-xl font-semibold leading-7 tracking-[-0.4px] text-slate-dark">
                Daily Maintenance
              </h3>
              <p className="font-roboto text-2xl font-bold leading-9 text-purple">
                1-2 capsules
              </p>
              <p className="font-roboto text-sm leading-[22.75px] text-slate-dark">
                For ongoing microbiome support and overall wellness
              </p>
            </div>

            {/* Card 2: Travel Support */}
            <div className="bg-neutral-light rounded-xl border border-[#A8B3A8] shadow-sm p-6 flex flex-col gap-3">
              <div className="inline-flex items-center px-3 py-[2.667px] rounded-full bg-sepia self-start">
                <span className="font-roboto-mono text-xs font-bold leading-4 text-white">ON THE GO</span>
              </div>
              <h3 className="font-cormorant text-xl font-semibold leading-7 tracking-[-0.4px] text-slate-dark">
                Travel Support
              </h3>
              <p className="font-roboto text-2xl font-bold leading-9 text-purple">
                2-3 capsules
              </p>
              <p className="font-roboto text-sm leading-[22.75px] text-slate-dark">
                Before and during travel to maintain gut balance
              </p>
            </div>

            {/* Card 3: Acute Support */}
            <div className="bg-neutral-light rounded-xl border border-[#A8B3A8] shadow-sm p-6 flex flex-col gap-3">
              <div className="inline-flex items-center px-3 py-[2.667px] rounded-full bg-teal-green self-start">
                <span className="font-roboto-mono text-xs font-bold leading-4 text-white">INTENSIVE</span>
              </div>
              <h3 className="font-cormorant text-xl font-semibold leading-7 tracking-[-0.4px] text-slate-dark">
                Acute Support
              </h3>
              <p className="font-roboto text-2xl font-bold leading-9 text-purple">
                3-4 capsules
              </p>
              <p className="font-roboto text-sm leading-[22.75px] text-slate-dark">
                During stress, illness recovery, or disruption
              </p>
            </div>

            {/* Card 4: Professional Guidance */}
            <div className="bg-neutral-light rounded-xl border border-[#A8B3A8] shadow-sm p-6 flex flex-col gap-3">
              <div className="inline-flex items-center px-3 py-[2.667px] rounded-full bg-golden self-start">
                <span className="font-roboto-mono text-xs font-bold leading-4 text-white">PERSONALIZED</span>
              </div>
              <h3 className="font-cormorant text-xl font-semibold leading-7 tracking-[-0.4px] text-slate-dark">
                Professional Guidance
              </h3>
              <p className="font-roboto text-2xl font-bold leading-9 text-purple">
                As directed
              </p>
              <p className="font-roboto text-sm leading-[22.75px] text-slate-dark">
                Follow your healthcare provider's recommendations
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}