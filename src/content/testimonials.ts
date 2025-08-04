// src/types/testimonials.d.ts

export const testimonials = [
  {
    id: "test-001",
    name: "Sarah Johnson",
    role: "Bride",
    avatar: "/images/testimonials/sarah-johnson.jpg",
    quote:
      "The wedding photos were absolutely stunning! You captured every special moment perfectly. We'll cherish these forever.",
    rating: 5,
    date: "2023-06-15",
    featured: true,
    category: "wedding",
  },
  {
    id: "test-002",
    name: "Michael Chen",
    role: "CEO, TechStart Inc.",
    avatar: "/images/testimonials/michael-chen.jpg",
    quote:
      "Our corporate headshots have never looked better. Professional, efficient, and amazing quality. Will use for all our future photography needs!",
    rating: 5,
    date: "2023-08-22",
    featured: true,
    category: "commercial",
  },
  {
    id: "test-003",
    name: "Emily Rodriguez",
    role: "Model",
    avatar: "/images/testimonials/emily-rodriguez.jpg",
    quote:
      "Working with you on my portfolio was incredible. You made me feel comfortable and the final images exceeded all expectations.",
    rating: 4,
    date: "2023-09-05",
    featured: true,
    category: "portrait",
  },
  {
    id: "test-004",
    name: "David Wilson",
    role: "Real Estate Agent",
    avatar: "/images/testimonials/david-wilson.jpg",
    quote:
      "The property photos helped sell our listings 30% faster. The lighting and angles showcased each home perfectly.",
    rating: 5,
    date: "2023-10-12",
    featured: false,
    category: "commercial",
  },
] as const;

export type Testimonial = (typeof testimonials)[number];
