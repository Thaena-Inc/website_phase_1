export default function IsThaenaForYou() {
  return (
    <>
    {/* Is ThaenaBiotic for You Section */}
    <div className="bg-neutral-light">
    <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 py-20">
      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="font-playfair text-3xl md:text-4xl lg:text-[48px] leading-[1] lg:leading-[48px] tracking-[-0.96px] text-teal-green font-normal">
          Is ThaenaBiotic® for You?
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-wrap gap-6 mb-16">
        {/* Card 1: Tried probiotics */}
        <div className="w-full lg:w-[calc(50%-12px)] bg-white rounded-md border-t border-r border-b border-l-4 border-t-sepia/30 border-r-sepia/30 border-b-sepia/30 border-l-sepia shadow-sm p-8 flex flex-col">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-sepia/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.9165 9.91675L18.0832 18.0834M12.2498 23.9167L23.9165 12.25C24.4617 11.7158 24.8955 11.0788 25.193 10.3758C25.4904 9.67278 25.6455 8.91786 25.6494 8.15461C25.6532 7.39136 25.5057 6.63491 25.2154 5.92896C24.9251 5.22301 24.4977 4.58163 23.958 4.04194C23.4183 3.50225 22.7769 3.07486 22.071 2.78457C21.365 2.49429 20.6086 2.34674 19.8453 2.35061C19.082 2.35447 18.3271 2.50961 17.6241 2.80705C16.9211 3.10449 16.2841 3.53828 15.7498 4.08341L4.0832 15.75C3.53801 16.2843 3.10421 16.9212 2.80677 17.6242C2.50933 18.3272 2.35419 19.0822 2.35033 19.8454C2.34646 20.6087 2.49401 21.3651 2.7843 22.0711C3.07458 22.777 3.50197 23.4184 4.04166 23.9581C4.58136 24.4978 5.22274 24.9252 5.92869 25.2155C6.63464 25.5058 7.39109 25.6533 8.15434 25.6495C8.91759 25.6456 9.67251 25.4905 10.3755 25.193C11.0785 24.8956 11.7155 24.4618 12.2498 23.9167Z" stroke="#9F5D3C" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-playfair text-2xl font-medium leading-8 tracking-[-0.48px] text-slate-dark break-words whitespace-normal">
                  You've tried probiotics… but you still don't feel right.
                </h3>
              </div>
            </div>
            <p className="font-roboto text-base leading-[26px] text-slate-dark/80">
              Most probiotics add bacteria your body doesn't recognize — they often can't colonize or communicate with your native microbes. ThaenaBiotic® delivers what your gut actually uses: the nutrient signals (postbiotics) that tell your body how to digest, regulate, and heal.
            </p>
          </div>
          <button className="mt-3 flex items-center justify-center gap-2 text-sepia font-roboto text-sm leading-5 hover:opacity-80 transition-opacity">
            Learn More About the Difference Between Probiotics + ThaenaBiotic®
            <svg className="w-[9.33px] h-[9.33px] flex-shrink-0" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.666504 5.33342H9.99984M9.99984 5.33342L5.33317 0.666748M9.99984 5.33342L5.33317 10.0001" stroke="#9F5D3C" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Card 2: Recovering from antibiotics */}
        <div className="w-full lg:w-[calc(50%-12px)] bg-white rounded-md border-t border-r border-b border-l-4 border-t-teal-green/30 border-r-teal-green/30 border-b-teal-green/30 border-l-teal-dark shadow-sm p-8 flex flex-col">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-teal-green/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.1665 16.3333C23.905 14.63 25.6665 12.5883 25.6665 9.91667C25.6665 8.21487 24.9905 6.5828 23.7871 5.37941C22.5838 4.17602 20.9517 3.5 19.2499 3.5C17.1965 3.5 15.7499 4.08333 13.9999 5.83333C12.2499 4.08333 10.8032 3.5 8.74987 3.5C7.04807 3.5 5.416 4.17602 4.21261 5.37941C3.00922 6.5828 2.3332 8.21487 2.3332 9.91667C2.3332 12.6 4.0832 14.6417 5.8332 16.3333L13.9999 24.5L22.1665 16.3333Z" stroke="#275B52" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-playfair text-2xl font-medium leading-8 tracking-[-0.48px] text-slate-dark break-words whitespace-normal">
                  You're recovering from antibiotics, illness, or burnout.
                </h3>
              </div>
            </div>
            <p className="font-roboto text-base leading-[26px] text-slate-dark/80">
              When your microbiome's been wiped out, your body loses access to key compounds that regulate digestion, energy, and mood. ThaenaBiotic® replenishes those microbial nutrients — safely, without live bacteria — helping your system remember how to balance itself.
            </p>
          </div>
        </div>

        {/* Card 3: Diet limited */}
        <div className="w-full lg:w-[calc(50%-12px)] bg-white rounded-md border-t border-r border-b border-l-4 border-t-purple/30 border-r-purple/30 border-b-purple/30 border-l-purple shadow-sm p-8 flex flex-col">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-purple/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.3309 3.5V8.16667M25.6643 5.83333H20.9976M4.66431 19.8333V22.1667M5.83098 21H3.49764M11.5908 18.0833C11.4866 17.6795 11.2762 17.3111 10.9814 17.0162C10.6865 16.7214 10.318 16.511 9.91431 16.4068L2.75681 14.5611C2.63461 14.5265 2.52719 14.4529 2.45065 14.3517C2.37411 14.2504 2.33271 14.1269 2.33271 14C2.33271 13.873 2.37411 13.7496 2.45065 13.6483C2.52719 13.547 2.63461 13.4735 2.75681 13.4388L9.91431 11.592C10.318 11.4879 10.6862 11.2776 10.9811 10.983C11.2759 10.6884 11.4864 10.3202 11.5908 9.91667L13.4364 2.75917C13.4708 2.63652 13.5442 2.52854 13.6456 2.45161C13.7471 2.37469 13.8709 2.33301 13.9982 2.33301C14.1255 2.33301 14.2493 2.37469 14.3507 2.45161C14.4522 2.52854 14.5256 2.63652 14.56 2.75917L16.4044 9.91667C16.5086 10.3204 16.719 10.6888 17.0139 10.9837C17.3087 11.2785 17.6772 11.489 18.0809 11.5931L25.2384 13.4376C25.3615 13.4716 25.4701 13.545 25.5474 13.6466C25.6248 13.7481 25.6667 13.8723 25.6667 14C25.6667 14.1276 25.6248 14.2518 25.5474 14.3534C25.4701 14.455 25.3615 14.5283 25.2384 14.5623L18.0809 16.4068C17.6772 16.511 17.3087 16.7214 17.0139 17.0162C16.719 17.3111 16.5086 17.6795 16.4044 18.0833L14.5588 25.2408C14.5245 25.3634 14.451 25.4714 14.3496 25.5483C14.2481 25.6253 14.1243 25.6669 13.997 25.6669C13.8697 25.6669 13.7459 25.6253 13.6445 25.5483C13.543 25.4714 13.4695 25.3634 13.4353 25.2408L11.5908 18.0833Z" stroke="#8F5681" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-playfair text-2xl font-medium leading-8 tracking-[-0.48px] text-slate-dark break-words whitespace-normal">
                  Your diet is limited by sensitivities or fear of flares.
                </h3>
              </div>
            </div>
            <p className="font-roboto text-base leading-[26px] text-slate-dark/80">
              If you can't tolerate certain foods, your microbes can't make the nutrients those foods would normally create. Our donors eat the full spectrum of foods — so ThaenaBiotic® gives you the full spectrum of postbiotics. You get the nourishment your gut's been missing until you can reintroduce foods naturally again over time.
            </p>
          </div>
          <button className="mt-3 flex items-center justify-center gap-2 text-purple font-roboto text-sm leading-5 hover:opacity-80 transition-opacity">
            🌿 To Help You Build Toward Real Food Freedom — Without Fear
          </button>
        </div>

        {/* Card 4: Optimized everything */}
        <div className="w-full lg:w-[calc(50%-12px)] bg-white rounded-md border-t border-r border-b border-l-4 border-t-earth-brown/30 border-r-earth-brown/30 border-b-earth-brown/30 border-l-earth-brown shadow-sm p-8 flex flex-col">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-earth-brown/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.9165 25.0834C2.9165 21.5834 5.07484 18.8301 8.84317 18.0834C11.6665 17.5234 14.5832 15.7501 15.7498 14.5834M13.4165 23.9167C11.3679 23.923 9.39177 23.159 7.88008 21.7764C6.36839 20.3938 5.4316 18.4936 5.25541 16.4525C5.07921 14.4115 5.67653 12.3788 6.92889 10.7576C8.18126 9.13636 9.99721 8.04509 12.0165 7.70008C18.6665 6.41675 20.4165 5.81008 22.7498 2.91675C23.9165 5.25008 25.0832 7.79341 25.0832 12.2501C25.0832 18.6667 19.5065 23.9167 13.4165 23.9167Z" stroke="#6D4F2C" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-playfair text-2xl font-medium leading-8 tracking-[-0.48px] text-slate-dark break-words whitespace-normal">
                  You've optimized everything else — now it's time to upgrade your biology.
                </h3>
              </div>
            </div>
            <p className="font-roboto text-base leading-[26px] text-slate-dark/80">
              You track sleep. You train recovery. You fine-tune every system — except the one that runs them all: your gut. ThaenaBiotic® delivers the rare, human-native metabolites produced by the healthiest microbiomes on Earth. Think of it as molecular intelligence for high-functioning biology.
            </p>
          </div>
        </div>

        {/* Card 5: Just want it to work */}
        <div className="w-full lg:w-[calc(50%-12px)] bg-white rounded-md border-t border-r border-b border-l-4 border-t-sage-grey/30 border-r-sage-grey/30 border-b-sage-grey/30 border-l-sage-grey shadow-sm p-8 flex flex-col">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-sage-grey/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.8335 23.3333C10.7849 23.3395 8.80881 22.5755 7.29712 21.1929C5.78542 19.8103 4.84857 17.9101 4.67237 15.869C4.49617 13.828 5.09348 11.7953 6.34585 10.1741C7.59822 8.55289 9.41416 7.46157 11.4335 7.11659C18.0835 5.83325 19.8335 5.22659 22.1668 2.33325C23.3335 4.66659 24.5002 7.20992 24.5002 11.6666C24.5002 18.0833 18.9235 23.3333 12.8335 23.3333Z" stroke="#A8B3A8" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.3335 24.5C2.3335 21 4.49183 18.2467 8.26016 17.5C11.0835 16.94 14.0002 15.1667 15.1668 14" stroke="#A8B3A8" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-playfair text-2xl font-medium leading-8 tracking-[-0.48px] text-slate-dark break-words whitespace-normal">
                  You just want your gut to work — every day, without thinking about it.
                </h3>
              </div>
            </div>
            <p className="font-roboto text-base leading-[26px] text-slate-dark/80">
              ThaenaBiotic® helps regulate rhythm, comfort, and consistency from the inside out. Whether you deal with constipation, loose stools, or unpredictable digestion, our human-derived postbiotics help your body find its natural pace again.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="flex flex-col items-center gap-6">
        <div className="w-16 h-[2px] bg-golden"></div>
        <p className="font-roboto text-lg leading-7 text-slate-dark text-center">
          Still not sure? Talk to your healthcare provider about whether ThaenaBiotic® is right for you.
        </p>
        <button className="h-14 px-11 rounded-xl border-2 border-purple bg-neutral-light hover:opacity-90 transition-opacity">
          <span className="font-roboto-mono text-sm font-medium leading-5 text-purple">Explore the Science</span>
        </button>
      </div>
    </div>
  </div>
  </>
  );
}