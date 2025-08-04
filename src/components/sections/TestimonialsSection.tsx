// components/sections/TestimonialsSection.tsx
"use client";

import Slider from "react-slick";
import { Quote } from "lucide-react";
import { testimonials } from "../../content/testimonials";

export interface Testimonial {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly avatar: string;
  readonly quote: string;
  readonly rating: number;
  readonly date: string;
  readonly featured?: boolean;
  readonly category: "wedding" | "portrait" | "commercial" | "landscape";
}

export function TestimonialsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hear what our clients say about working with us
          </p>
        </div>

        <Slider {...settings} className="testimonial-slider">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="bg-gray-800 p-8 rounded-xl h-full">
                <Quote className="text-amber-400 h-8 w-8 mb-4" />
                <p className="text-lg mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    {/* <Image
                      src={}
                      alt={}
                      width={48}
                      height={48}
                      className="object-cover"
                    /> */}
                    {/* <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    /> */}
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
