'use client';
import React from "react";
import Image from "next/image";

const PrSection = () => {
    const images = [1, 2, 3, 4, 5, 6];
    const [startIdx, setStartIdx] = React.useState(0);
    const visibleCount = 3; // Show only 3 images at a time
    const total = images.length;

    const handlePrev = () => {
        setStartIdx((prev) => (prev - 1 + total) % total);
    };
    const handleNext = () => {
        setStartIdx((prev) => (prev + 1) % total);
    };

    const visibleImages = Array.from({ length: visibleCount }, (_, i) => images[(startIdx + i) % total]);

    return (
        <section
            className="w-full flex flex-col items-center py-12 bg-gray-50 relative overflow-hidden"
            style={{
                backgroundImage: "url('/images/4.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-white/70 pointer-events-none"></div>
            <div className="relative z-10 w-full flex flex-col items-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 dancing-script">Search</h2>
                <p className="text-gray-500 mb-6 text-center max-w-md dancing-script">Find your favorite desserts, connect with students, and explore new opportunities!</p>
                {/* Search bar with icon */}
                <div className="flex items-center w-full max-w-md mb-8 bg-white rounded-full shadow px-4 py-2">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="flex-1 outline-none bg-transparent px-2 py-1 text-gray-700"
                    />
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </div>
                {/* Carousel with 3 visible images and navigation buttons */}
                <div className="flex items-center gap-4 justify-center w-full max-w-2xl">
                    <button
                        onClick={handlePrev}
                        className="p-2 rounded-full bg-white shadow hover:bg-gray-100 focus:outline-none z-20"
                        aria-label="Previous"
                    >
                        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div className="flex gap-6 w-full justify-center">
                        {visibleImages.map((num, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <Image
                                    src={`/carou/${num}.jpg`}
                                    alt={`Circle ${num}`}
                                    width={112}
                                    height={112}
                                    className="w-28 h-28 rounded-full object-cover shadow border-4 border-white"
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={handleNext}
                        className="p-2 rounded-full bg-white shadow hover:bg-gray-100 focus:outline-none z-20"
                        aria-label="Next"
                    >
                        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};
export default PrSection;