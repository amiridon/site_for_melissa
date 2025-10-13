import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact MCR Estate Management | Get in Touch',
  description: 'Contact Melissa Chatters-Rosario for private estate management services. Discuss your estate needs with a professional household manager.',
};

export default function Contact() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-text tracking-tight">
            Get in <span className="text-brand">Touch</span>
          </h1>
          <p className="mt-6 text-xl text-muted max-w-3xl mx-auto">
            Whether you're seeking full-time management or discrete project oversight, 
            Melissa welcomes the opportunity to discuss your estate's unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details Card */}
            <div className="rounded-2xl bg-bg border border-card shadow-s bg-[image:var(--surface-gradient)] p-6">
              <h2 className="text-2xl font-semibold text-text mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center mr-4">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-muted text-sm">Email</p>
                    <a 
                      href="mailto:mchatters@msn.com"
                      className="text-text font-medium hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand/40 focus:ring-offset-2 focus:ring-offset-bg rounded"
                    >
                      mchatters@msn.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center mr-4">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-muted text-sm">LinkedIn</p>
                    <a 
                      href="#" 
                      className="text-text font-medium hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand/40 focus:ring-offset-2 focus:ring-offset-bg rounded"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Professional Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="rounded-2xl bg-bg border border-card shadow-s bg-[image:var(--surface-gradient)] p-6">
              <h3 className="text-xl font-semibold text-text mb-4">
                What to Expect
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-brand rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="text-text font-medium text-sm">Initial Response</p>
                    <p className="text-muted text-sm">Within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-brand rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="text-text font-medium text-sm">Consultation Call</p>
                    <p className="text-muted text-sm">Scheduled within 3-5 business days</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-brand rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="text-text font-medium text-sm">Proposal</p>
                    <p className="text-muted text-sm">Customized plan within 1 week</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="rounded-xl bg-bgLight border border-card p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="text-text font-medium text-sm">Privacy & Confidentiality</h4>
                  <p className="text-muted text-xs mt-1">
                    All communications are kept strictly confidential. 
                    Your privacy is our highest priority.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16">
          <div className="rounded-2xl bg-bg border border-card shadow-s bg-[image:var(--surface-gradient)] p-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-text mb-6">
                Ready to Elevate Your Estate Management?
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-text font-medium">Consultation</h3>
                  <p className="text-muted text-sm">Complimentary initial discussion</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-text font-medium">Assessment</h3>
                  <p className="text-muted text-sm">Comprehensive estate evaluation</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-text font-medium">Excellence</h3>
                  <p className="text-muted text-sm">Tailored management solutions</p>
                </div>
              </div>
              
              <p className="text-muted max-w-2xl mx-auto">
                Experience the peace of mind that comes with professional estate management. 
                Let's discuss how we can enhance your property's operations and your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}