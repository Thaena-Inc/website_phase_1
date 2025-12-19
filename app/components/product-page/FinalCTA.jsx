export default function FinalCTA() {
  return (
    <>
    {/* Final CTA Hero Section */}
    <div className="relative flex items-center justify-center py-24 md:py-32 lg:py-40 px-6 md:px-16 lg:px-80 bg-neutral-light overflow-hidden">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://cdn.shopify.com/s/files/1/0602/5281/5555/files/bharath-kumar-lJZII_3rg0M-unsplash_2.jpg?v=1765998606')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: '0.2'
        }}
      />
      
      {/* Optional: Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(0deg, rgba(167, 179, 167, 0.50) 0%, rgba(167, 179, 167, 0.50) 100%)`
        }}
      />
      
      {/* Content Layer */}
      <div className="max-w-[786px] flex flex-col justify-center items-center gap-6 relative z-20">
      {/* Heading */}
      <h2 className="font-playfair text-3xl md:text-4xl lg:text-[48px] leading-[1] lg:leading-[48px] tracking-[-1.2px] text-teal-green text-center font-normal">
        The Power of the Human Microbiome, In a Capsule.
      </h2>

      {/* Subheading */}
      <div className="pb-4">
        <p className="font-roboto text-xl md:text-2xl lg:text-[28px] leading-[32.5px] text-slate-dark text-center">
          Everything your gut ecosystem needs to find its way back.
        </p>
      </div>

      {/* CTA Button */}
      <button className="h-14 px-10 py-7 flex items-center justify-center rounded-[10px] bg-mauve shadow-lg hover:opacity-90 transition-opacity">
        <span className="font-roboto text-lg font-medium leading-7 text-[#F9F5F1]">
          Shop ThaenaBiotic® Now
        </span>
      </button>
    </div>
  </div>
  </>
  );
}