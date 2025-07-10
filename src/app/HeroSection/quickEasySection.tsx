import React from 'react';
import Image from 'next/image';

const images = [
  {
    src: '/images/9.jpg',
    heading: 'Decent Double Stuffled Choclate Chip Cookies',
  },
  {
    src: '/images/fudgy.jpg',
    heading: 'Fudgy Brownies with Choclate Ganache',
  },
  {
    src: '/images/marshmallow.jpg',
    heading: 'Homemade Marshmallow  Smores',
  },
  {
    src: '/images/apple.jpg',
    heading: 'Apple and Almond Glette with Apple Preserves',
  },
];

const QuickEasySection = () => {
  return (
    <section aria-label="Quick and Easy Section" className="py-12 px-4 md:px-8 lg:px-16 bg-white w-full">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black berkshire-swash-regular ">Quick & Easy</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto dancing-script">
          Discover how simple and fast it is to get started. Our process  is <br/> designed to be straightforward and efficient, so you can focus on <br/> what matters most.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {images.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-full max-w-xs h-82 relative mb-2 sm:mb-4">
                <Image
                  src={img.src}
                  alt={img.heading}
                  fill
                  className="object-cover shadow-md"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={idx === 0}
                />
              </div>
              <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-1 text-center berkshire-swash-regular">Lorem Ipsum</h4>
              <h3 className="text-xl sm:text-2xl font-semibold mt-1 sm:mt-2 mb-2 text-gray-800 text-center dancing-script">{img.heading}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickEasySection; 