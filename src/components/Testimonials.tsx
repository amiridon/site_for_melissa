export default function Testimonials() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle background with parallax feel */}
      <div className="absolute inset-0 bg-bgDark bg-surface opacity-30"></div>
      
      <div className="relative mx-auto max-w-4xl text-center">
        {/* Philosophy quote */}
        <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium text-text leading-relaxed">
          &quot;True luxury is peace of mind — when every detail is handled before you think to ask.&quot;
        </blockquote>
        
        {/* Attribution */}
        <footer className="mt-8">
          <div className="flex items-center justify-center">
            <div className="text-muted">
              <cite className="not-italic font-medium text-text">Melissa Chatters-Rosario</cite>
              <p className="text-sm mt-1">Estate Management Philosophy</p>
            </div>
          </div>
        </footer>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center space-x-6 text-brand/40">
          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
          </svg>
        </div>

        {/* Values or principles */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 text-brand mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-text font-medium">Reliability</h3>
            <p className="mt-2 text-muted text-sm">Consistent excellence you can depend on</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 text-brand mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-text font-medium">Attention to Detail</h3>
            <p className="mt-2 text-muted text-sm">Nothing escapes our careful oversight</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 text-brand mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-text font-medium">Discretion</h3>
            <p className="mt-2 text-muted text-sm">Your privacy is our highest priority</p>
          </div>
        </div>
      </div>
    </section>
  );
}