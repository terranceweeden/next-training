// src/components/layout/Footer.tsx
import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CameraIcon className="h-8 w-8 text-amber-400" />
              PhotoArt Studios
            </h3>
            <p className="text-gray-300 mb-4">
              Capturing life&apos;s precious moments with artistic excellence
              since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-gray-300 hover:text-amber-400 transition-colors" />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-gray-300 hover:text-amber-400 transition-colors" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-gray-300 hover:text-amber-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Photography Ave</p>
              <p>New York, NY 10001</p>
              <p>
                <a
                  href="tel:+15551234567"
                  className="hover:text-amber-400 transition-colors"
                >
                  (555) 123-4567
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@photoart.com"
                  className="hover:text-amber-400 transition-colors"
                >
                  hello@photoart.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} PhotoArt Studios. All rights reserved.</p>
          <div className="mt-2 text-sm">
            <Link
              href="/privacy"
              className="hover:text-amber-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="mx-2">•</span>
            <Link
              href="/terms"
              className="hover:text-amber-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h5 className="text-sm font-medium mb-2">Join our newsletter</h5>
        <form className="flex">
          <input
            type="email"
            placeholder="Your email"
            className="px-3 py-2 bg-gray-800 text-white rounded-l focus:outline-none focus:ring-1 focus:ring-amber-400"
          />
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-r font-medium"
          >
            Join
          </button>
          {/* <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 bg-amber-500 p-3 rounded-full shadow-lg hover:bg-amber-600 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5 text-white" />
          </button> */}
        </form>
      </div>
    </footer>
  );
}

function CameraIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}
