import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="bg-[#F9FAF9] w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[220px] md:h-[300px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/10.jpg)' }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center w-full">
          <h1 className="text-white text-3xl md:text-5xl font-bold mt-8 dancing-script ">Contact US</h1>
          <div className="flex items-center gap-2 text-white mt-2 berkshire-swash-regular">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, <br/>
              debitis veritatis! Vero inventore tempore dolorem qui voluptas.</p>
          </div>
        </div>
      </div>
      {/* Contact Info & Form */}
      <section className="py-16 px-4 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Contact Info */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-orange-200 p-6 rounded-lg shadow flex flex-col items-center">
            <FaPhoneAlt className="text-2xl mb-2 text-orange-950" />
            <h3 className="font-semibold mb-1 text-amber-950 dancing-script">Phone</h3>
            <p className="text-orange-900 berkshire-swash-regular">207-8767-452</p>
          </div>
          <div className="bg-orange-200 p-6 rounded-lg shadow flex flex-col items-center">
            <FaWhatsapp className="text-2xl mb-2 text-orange-950" />
            <h3 className="font-semibold mb-1 text-amber-950 dancing-script">Whatsapp</h3>
            <p className="text-orange-900 berkshire-swash-regular">082-123-234-345</p>
          </div>
          <div className="bg-orange-200 p-6 rounded-lg shadow flex flex-col items-center">
            <FaEnvelope className="text-2xl mb-2 text-orange-950" />
            <h3 className="font-semibold mb-1 text-amber-950 dancing-script">Email</h3>
            <p className="text-orange-900 berkshire-swash-regular">support@yoursite.com</p>
          </div>
          <div className="bg-orange-200 p-6 rounded-lg shadow flex flex-col items-center">
            <FaMapMarkerAlt className="text-2xl mb-2 text-orange-950" />
            <h3 className="font-semibold mb-1 text-amber-950 dancing-script">Our Shop</h3>
            <p className="text-orange-900 text-center berkshire-swash-regular">2443 Oak Ridge Omaha, QA 45065</p>
          </div>
          <iframe
            title="Map"
            className="col-span-2 w-full h-64 rounded-lg shadow"
            src="https://maps.google.com/maps?q=London%20Eye&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 dancing-script">Get In Touch</h2>
          <p className="text-gray-500 mb-6 berkshire-swash-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <form className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="Name" className="p-3 border border-gray-300 rounded-md placeholder-zinc-600 dancing-script" />
            <input type="email" placeholder="Email" className="p-3 border border-gray-300 rounded-md placeholder-zinc-600 dancing-script" />
            <input type="text" placeholder="Subject" className="p-3 border border-gray-300 rounded-md placeholder-zinc-600 dancing-script" />
            <textarea placeholder="Message" className="p-3 border border-gray-300 rounded-md h-32 placeholder-zinc-600 dancing-script"></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-300 to-orange-500 text-white px-6 py-3 rounded-md hover:opacity-90"
            >
              Send Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;