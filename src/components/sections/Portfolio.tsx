"use client";

import { useState } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { Modal } from "@/components/ui/Modal";
import { portfolioItems } from "@/content/portfolio";

const breakpointColumnsObj = {
  default: 3,
  1024: 3,
  768: 2,
  640: 1,
};

export function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of stunning photography work across different
            genres
          </p>
        </div>

        <div className="mb-8 flex justify-center space-x-2">
          {["All", "Wedding", "Portrait", "Commercial", "Landscape"].map(
            (category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white text-gray-800 hover:bg-gray-100 transition-colors"
              >
                {category}
              </button>
            )
          )}
        </div>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4"
        >
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="mb-4 cursor-zoom-in group"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={800}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL={item.blurData}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-medium">
                      {item.title}
                    </h3>
                    <p className="text-white/80">{item.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4"
        >
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="mb-4 cursor-zoom-in group"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={800}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL={item.blurData}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-medium">
                      {item.title}
                    </h3>
                    <p className="text-white/80">{item.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
        {selectedImage !== null && (
          <Modal onClose={() => setSelectedImage(null)}>
            <div className="relative w-full max-w-6xl">
              <Image
                src={portfolioItems[selectedImage].image}
                alt={portfolioItems[selectedImage].title}
                width={1200}
                height={1600}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              <div className="mt-4">
                <h3 className="text-2xl font-medium">
                  {portfolioItems[selectedImage].title}
                </h3>
                <p className="text-gray-600">
                  {portfolioItems[selectedImage].description}
                </p>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
}
