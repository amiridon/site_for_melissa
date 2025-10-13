import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Melissa | MCR Estate Management',
  description: 'Learn about Melissa Chatters-Rosario\'s professional background and transition to private estate management.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bgDark">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6 tracking-tight">
            Meet <span className="text-brand">Melissa Chatters-Rosario</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            A decade of <span className="text-brand">leadership in property and people management</span>, 
            now dedicated to exceptional private estate services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="rounded-2xl bg-surface border-card shadow-s p-8">
                <h2 className="text-2xl font-bold text-text mb-4">Professional Journey</h2>
                <p className="text-muted leading-relaxed mb-6">
                  With over ten years of progressive leadership experience in property management and 
                  team coordination, Melissa brings a unique blend of operational excellence and 
                  interpersonal finesse to private estate management.
                </p>
                
                <p className="text-muted leading-relaxed mb-6">
                  Her transition from traditional property management to exclusive private estates 
                  represents a natural evolution of her passion for creating exceptional living 
                  experiences through meticulous attention to detail and personalized service.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-brand mt-2"></div>
                    <p className="text-muted">
                      <strong className="text-text">Leadership Excellence:</strong> Successfully managed 
                      diverse property portfolios and coordinated teams across multiple locations.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-brand mt-2"></div>
                    <p className="text-muted">
                      <strong className="text-text">Client Relations:</strong> Developed lasting 
                      relationships through transparent communication and proactive problem-solving.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-brand mt-2"></div>
                    <p className="text-muted">
                      <strong className="text-text">Operational Precision:</strong> Implemented 
                      systems that ensure seamless day-to-day operations and long-term asset preservation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-surface border-card shadow-s p-8">
                <h3 className="text-xl font-bold text-text mb-4">Core Values</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-text mb-2">Discretion</h4>
                    <p className="text-sm text-muted">
                      Understanding the importance of privacy and confidentiality in all interactions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-text mb-2">Excellence</h4>
                    <p className="text-sm text-muted">
                      Pursuing the highest standards in every aspect of estate management.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-text mb-2">Integrity</h4>
                    <p className="text-sm text-muted">
                      Building trust through consistent, honest, and transparent communication.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-text mb-2">Dedication</h4>
                    <p className="text-sm text-muted">
                      Committed to exceeding expectations through personalized attention.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Image Placeholder */}
            <div className="lg:order-first">
              <div className="rounded-2xl bg-surface border-card shadow-s overflow-hidden">
                <div className="aspect-[4/5] bg-bgLight flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-brand/20 mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-10 h-10 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-muted text-sm">Professional Portrait</p>
                  </div>
                </div>
                <div className="p-6 bg-bg">
                  <p className="text-xs text-muted text-center italic">
                    "Excellence is not a destination; it's a continuous journey of 
                    improvement and dedication to those we serve."
                  </p>
                  <p className="text-xs text-brand text-center mt-2 font-medium">
                    — Melissa Chatters-Rosario
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className="rounded-2xl bg-surface border-card shadow-s p-12">
              <h2 className="text-3xl font-bold text-text mb-4">
                Ready to Experience Excellence?
              </h2>
              <p className="text-muted mb-8 max-w-2xl mx-auto">
                Discover how personalized estate management can transform your property 
                into a seamlessly operated, well-maintained haven.
              </p>
              
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium
                  bg-brand text-brandFgDim shadow-s
                  hover:bg-brandHover hover:text-brandFg hover:shadow-m active:bg-brandPressed
                  focus:outline-none focus:ring-2 focus:ring-brand/40 focus:ring-offset-2 focus:ring-offset-bg
                  transition-all duration-300"
              >
                Schedule Consultation
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