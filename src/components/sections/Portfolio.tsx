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
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter items by category
  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category === activeCategory.toLowerCase()
        );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of stunning photography work across different
            genres
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-8 flex justify-center flex-wrap gap-2">
          {["All", "Wedding", "Portrait", "Commercial", "Landscape"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? "bg-amber-500 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>

        {/* Masonry Grid */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4"
        >
          {filteredItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="mb-4 cursor-zoom-in group"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={800}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  placeholder={item.blurData ? "blur" : "empty"}
                  blurDataURL={item.blurData}
                  priority={index < 3} // Prioritize loading first 3 images
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-medium">
                      {item.title}
                    </h3>
                    <p className="text-white/80 capitalize">{item.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Masonry>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <Modal onClose={() => setSelectedImage(null)}>
            <div className="relative w-full max-w-6xl">
              <Image
                src={filteredItems[selectedImage].image}
                alt={filteredItems[selectedImage].title}
                width={1200}
                height={1600}
                className="w-full h-auto max-h-[90vh] object-contain"
                quality={100}
              />
              <div className="mt-4">
                <h3 className="text-2xl font-medium">
                  {filteredItems[selectedImage].title}
                </h3>
                <p className="text-gray-600">
                  {filteredItems[selectedImage].description}
                </p>

                {/* Safe metadata display */}
                {filteredItems[selectedImage].metadata && (
                  <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-500">
                    {filteredItems[selectedImage].metadata?.camera && (
                      <div>
                        <span className="font-medium">Camera:</span>{" "}
                        {filteredItems[selectedImage].metadata.camera}
                      </div>
                    )}
                    {filteredItems[selectedImage].metadata?.lens && (
                      <div>
                        <span className="font-medium">Lens:</span>{" "}
                        {filteredItems[selectedImage].metadata.lens}
                      </div>
                    )}
                    {filteredItems[selectedImage].metadata?.settings && (
                      <div className="col-span-2">
                        <span className="font-medium">Settings:</span>{" "}
                        {filteredItems[selectedImage].metadata.settings}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
}
