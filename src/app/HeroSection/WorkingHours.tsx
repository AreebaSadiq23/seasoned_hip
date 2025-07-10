import React from "react";
import { PhoneIcon } from  "@heroicons/react/24/solid";

const WorkingHours = () => {
  return (
    <section className="w-full flex flex-col items-center py-10 px-4 bg-white">
      <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-1 text-orange-500 berkshire-swash-regular">Order Now</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-zinc-800 dancing-script">Opening Hours</h2>
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        {/* Left: Monday to Wednesday */}
        <div className="flex flex-col items-center md:items-start flex-1">
          <span className="text-lg font-semibold mb-1 text-zinc-800 dancing-script">Monday - Wednesday</span>
          <span className="text-base text-gray-600">9:00 AM - 8:00 PM</span>
        </div>
        {/* Center: Phone Icon, Call Now, Number */}
        <div className="flex flex-col items-center flex-1">
          <div className="w-16 h-16 rounded-full bg-primary/10 p-4 mb-2 flex items-center justify-center border-2 border-black">
            <PhoneIcon className="h-8 w-8 text-zinc-800" />
          </div>
          <span className="text-base font-semibold mb-1 text-zinc-800 dancing-script">Call Now</span>
          <span className="text-lg text-gray-500">(123) 456-7890</span>
        </div>
        {/* Right: Friday to Sunday */}
        <div className="flex flex-col items-center md:items-end flex-1">
          <span className="text-lg font-semibold mb-1 text-zinc-800 dancing-script">Friday - Sunday</span>
          <span className="text-base text-gray-600">10:00 AM - 10:00 PM</span>
        </div>
      </div>
    </section>
  );
};

export default WorkingHours; 