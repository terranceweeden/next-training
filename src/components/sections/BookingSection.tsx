// components/sections/BookingSection.tsx
"use client";

import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { InlineWidget } from "react-calendly";

export function BookingSection() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Book a Session</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to create something amazing? Schedule your photography session
            today.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="md:w-1/3 p-8 bg-gray-900 text-white">
              <h3 className="text-2xl font-bold mb-6">Session Options</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-amber-400">
                    Portrait Session
                  </h4>
                  <p className="text-gray-300">1 hour • $250</p>
                </div>
                <div>
                  <h4 className="font-medium text-amber-400">
                    Wedding Package
                  </h4>
                  <p className="text-gray-300">Full day • $3,500</p>
                </div>
                <div>
                  <h4 className="font-medium text-amber-400">
                    Commercial Shoot
                  </h4>
                  <p className="text-gray-300">Half day • $1,200</p>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-medium mb-2">Need help deciding?</h4>
                <button className="text-amber-400 hover:text-amber-300 flex items-center">
                  Contact us <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="md:w-2/3 p-8">
              <InlineWidget
                url="https://calendly.com/yourusername"
                styles={{
                  height: "600px",
                  width: "100%",
                }}
                pageSettings={{
                  backgroundColor: "ffffff",
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: "f59e0b",
                  textColor: "1e293b",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
