export default function Introduction() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brandSubtle/5 relative">
      {/* Decorative accent bar */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-brand rounded-b"></div>
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-text tracking-tight">
              <span className="text-brand">Experience</span> You Can Trust
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              After a decade managing corporate properties and contractors, 
              <span className="text-brand font-medium"> Melissa Chatters-Rosario</span> brings 
              her expertise to private estates — offering <span className="text-brandMuted">professionalism, organization, 
              and tailored attention</span> to the unique needs of distinguished households.
            </p>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              From coordinating multi-million-dollar maintenance projects to orchestrating 
              seamless day-to-day operations, every home runs like a well-tuned organization — 
              with warmth and privacy at its core.
            </p>
          </div>
          
          {/* Image placeholder with elegant card treatment */}
          <div className="relative">
            <div className="rounded-2xl bg-surface border-card shadow-s p-6">
              {/* Placeholder for professional portrait */}
              <div className="aspect-[4/5] rounded-xl bg-bgLight border border-card flex items-center justify-center">
                <div className="text-center text-muted">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-card flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-sm">Professional Portrait</p>
                </div>
              </div>
              
              {/* Quote or caption */}
              <blockquote className="mt-6 text-center">
                <p className="text-muted italic">
                  "True luxury is peace of mind — when every detail is handled before you think to ask."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}