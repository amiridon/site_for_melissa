import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Private Estate Management Services | MCR Estate Management',
  description: 'Comprehensive estate management services including property oversight, household staff management, lifestyle coordination, and confidential administration.',
};

export default function ServicesPage() {
  const services = [
    {
      title: "Property Management & Oversight",
      description: "Comprehensive oversight of property maintenance, vendor relationships, and facility operations to ensure your estate remains in pristine condition.",
      features: [
        "Regular property inspections and maintenance scheduling",
        "Vendor management and quality control",
        "Security system monitoring and coordination",
        "Landscape and grounds management",
        "Utility management and cost optimization"
      ],
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Household Staff Coordination",
      description: "Professional management of domestic staff including hiring, training, scheduling, and performance oversight to maintain service excellence.",
      features: [
        "Staff recruitment and comprehensive vetting",
        "Training programs and service standards",
        "Schedule coordination and coverage planning",
        "Performance management and development",
        "Payroll and administrative support"
      ],
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Lifestyle & Personal Services",
      description: "Personalized coordination of daily life services, special events, and lifestyle management to enhance comfort and convenience.",
      features: [
        "Personal shopping and errand coordination",
        "Travel planning and logistics management",
        "Event planning and coordination",
        "Appointment scheduling and calendar management",
        "Special project management and oversight"
      ],
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Administrative & Financial Coordination",
      description: "Discreet management of estate-related administrative tasks, financial coordination, and confidential documentation.",
      features: [
        "Bill management and payment coordination",
        "Insurance and warranty management",
        "Contract negotiation and vendor relations",
        "Record keeping and documentation",
        "Financial reporting and budget oversight"
      ],
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-bgDark">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6 tracking-tight">
            <span className="text-brandSoft">Comprehensive</span> Estate Management
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            <span className="text-brandMuted">Exceptional service</span> across all aspects of private estate operations, 
            delivered with discretion and personalized attention.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div key={index} className="rounded-2xl bg-surface border-card shadow-s overflow-hidden">
                <div className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Service Info */}
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-brand/10 text-brand">
                          {service.icon}
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-text">
                          {service.title}
                        </h2>
                      </div>
                      
                      <p className="text-muted leading-relaxed mb-6 text-lg">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-lg font-medium text-text mb-4">Key Services Include:</h3>
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-brand mt-2"></div>
                            <p className="text-muted">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mt-16">
            <div className="rounded-2xl bg-surface border-card shadow-s p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-text mb-4">
                  Specialized Services
                </h2>
                <p className="text-muted max-w-2xl mx-auto">
                  Every estate has unique needs. We provide customized solutions 
                  tailored to your specific requirements and lifestyle.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="rounded-xl bg-bgLight border border-card shadow-s p-6 hover:shadow-m transition-shadow duration-300">
                  <h3 className="font-medium text-text mb-2">Emergency Response</h3>
                  <p className="text-sm text-muted">24/7 emergency coordination and response protocols.</p>
                </div>
                <div className="rounded-xl bg-bgLight border border-card shadow-s p-6 hover:shadow-m transition-shadow duration-300">
                  <h3 className="font-medium text-text mb-2">Seasonal Preparation</h3>
                  <p className="text-sm text-muted">Comprehensive seasonal property preparation and protection.</p>
                </div>
                <div className="rounded-xl bg-bgLight border border-card shadow-s p-6 hover:shadow-m transition-shadow duration-300">
                  <h3 className="font-medium text-text mb-2">Technology Integration</h3>
                  <p className="text-sm text-muted">Smart home systems and modern technology coordination.</p>
                </div>
                <div className="rounded-xl bg-bgLight border border-card shadow-s p-6 hover:shadow-m transition-shadow duration-300">
                  <h3 className="font-medium text-text mb-2">Guest Services</h3>
                  <p className="text-sm text-muted">Comprehensive guest preparation and hospitality coordination.</p>
                </div>
                <div className="rounded-xl bg-bgLight border border-card shadow-s p-6 hover:shadow-m transition-shadow duration-300">
                  <h3 className="font-medium text-text mb-2">Renovation Oversight</h3>
                  <p className="text-sm text-muted">Project management for renovations and improvements.</p>
                </div>
                <div className="rounded-xl bg-bgLight border border-card shadow-s p-6 hover:shadow-m transition-shadow duration-300">
                  <h3 className="font-medium text-text mb-2">Concierge Services</h3>
                  <p className="text-sm text-muted">Personalized concierge support for daily conveniences.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="rounded-2xl bg-surface border-card shadow-s p-12">
              <h2 className="text-3xl font-bold text-text mb-4">
                Ready to Elevate Your Estate Management?
              </h2>
              <p className="text-muted mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how our comprehensive services can be tailored 
                to meet your estate&apos;s unique needs and your lifestyle preferences.
              </p>
              
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium
                bg-brand text-brandFgDim shadow-s
                hover:bg-brandHover hover:text-brandFg hover:shadow-m active:bg-brandPressed
                focus:outline-none focus:ring-2 focus:ring-brand/40 focus:ring-offset-2 focus:ring-offset-bg
                transition-all duration-300"
              >
                Discuss Your Needs
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}