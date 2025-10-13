export default function Hero() {
  return (
    <section className="relative py-16 px-6 sm:px-8 lg:px-10 h-[50vh] bg-bgDark overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero-estate-bg.png)',
          backgroundAttachment: 'fixed',
        }}
      ></div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-bgDark/85 via-bgDark/70 to-bgDark/85"></div>
      
      {/* Additional subtle gradient overlay */}
      <div className="absolute inset-0 bg-surface opacity-20"></div>
      
      <div className="relative mx-auto max-w-4xl text-center">
        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text tracking-tight">
          <span className="text-brandSoft">Refined Stewardship</span> for{' '}
          <span className="text-brand">Exceptional Homes</span>
        </h1>
        
        {/* Subtitle */}
        <p className="mt-6 text-xl sm:text-2xl text-muted max-w-3xl mx-auto leading-relaxed">
          <span className="text-accentSecondary">Discretion, precision, and excellence</span> in private estate management.
        </p>
        
        {/* Call to action */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-medium
              bg-brand text-brandFgDim shadow-s
              hover:bg-brandHover hover:text-brandFg hover:shadow-m active:bg-brandPressed
              focus:outline-none focus:ring-2 focus:ring-brand/40 focus:ring-offset-2 focus:ring-offset-bg
              transition-all duration-300"
          >
            Request Consultation
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          
          <a 
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-medium
              bg-brandSoft text-accentSecondaryFgDim border border-brandSoft shadow-s
              hover:bg-brandSoftHover hover:text-accentSecondaryFg hover:shadow-m active:bg-brandSoftPressed
              focus:outline-none focus:ring-2 focus:ring-brandSoft/40 focus:ring-offset-2 focus:ring-offset-bg
              transition-all duration-300"
          >
            View Services
          </a>
        </div>
        
        {/* Subtle tagline */}
        <p className="mt-8 text-brandSoft/80 text-md font-bold">
          Trusted by discerning homeowners who value <span className="text-accentLuxury">excellence</span>
        </p>
      </div>
    </section>
  );
}