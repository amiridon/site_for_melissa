import Link from 'next/link';

export default function ServicesPreview() {
  const services = [
    {
      title: "Property Oversight",
      description: "Preventive maintenance, vendor coordination, and asset documentation.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Lifestyle Management", 
      description: "Event coordination, staff scheduling, and seasonal transitions.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m4 0H4m16 0v12a1 1 0 01-1 1H5a1 1 0 01-1-1V7m16 0l-1.5 3M4 7l1.5 3m0 0L6 12m-0.5-2h13" />
        </svg>
      )
    },
    {
      title: "Operational Discretion",
      description: "Confidentiality, security coordination, and record integrity.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg relative">
      {/* Subtle brand background tint for secondary color layer */}
      <div className="absolute inset-0 bg-brandSubtle/3"></div>
      <div className="mx-auto max-w-6xl relative">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-text tracking-tight">
            Core Areas of <span className="text-brand">Excellence</span>
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            <span className="text-brandMuted">Comprehensive estate management services</span> tailored to your unique needs
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl bg-surface border-card shadow-s p-6 card-interactive
                hover:shadow-m hover:bg-surfaceHover transition-all duration-300"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand/10 text-brand mb-4">
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-text mb-3">
                {service.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium
              bg-bgLight text-text border border-card shadow-s
              hover:bg-surfaceHover hover:shadow-m
              focus:outline-none focus:ring-2 focus:ring-brand/40 focus:ring-offset-2 focus:ring-offset-bg
              transition-all duration-300"
          >
            Learn More
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}