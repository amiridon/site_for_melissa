import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-card bg-bg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-text font-medium mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-muted">
                📧{' '}
                <a 
                  href="mailto:mchatters@msn.com" 
                  className="hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand/40 focus:ring-offset-2 focus:ring-offset-bg rounded"
                >
                  mchatters@msn.com
                </a>
              </p>
              <p className="text-muted">
                🔗{' '}
                <a 
                  href="#" 
                  className="hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand/40 focus:ring-offset-2 focus:ring-offset-bg rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-text font-medium mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link 
                href="/about" 
                className="block text-muted hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand/40 focus:ring-offset-2 focus:ring-offset-bg rounded"
              >
                About Melissa
              </Link>
              <Link 
                href="/services" 
                className="block text-muted hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand/40 focus:ring-offset-2 focus:ring-offset-bg rounded"
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="block text-muted hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand/40 focus:ring-offset-2 focus:ring-offset-bg rounded"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Services Preview */}
          <div>
            <h3 className="text-text font-medium mb-4">Services</h3>
            <div className="space-y-2 text-muted text-sm">
              <p>Property Oversight</p>
              <p>Lifestyle Management</p>
              <p>Operational Discretion</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted text-sm">
            © 2025 Melissa Chatters-Rosario. All rights reserved.
          </p>
          <p className="text-muted text-sm mt-2 sm:mt-0">
            Made with ❤️ using Next.js + TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}