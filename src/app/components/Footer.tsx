import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";


const navItems = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Blog", href: "/BlogPage" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-yellow-100 text-gray-200 pt-12">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 pb-12">
        {/* Left: Logo, Para, Socials */}
        <div className="flex flex-col items-start">
          <div className="mb-4">
            <svg width="60" height="60" viewBox="0 0 60 60" className="block">
              <defs>
                <path id="circlePath" d="M30,10 a20,20 0 1,1 0,40 a20,20 0 1,1 0,-40" />
              </defs>
              <circle cx="30" cy="30" r="28" fill="#fff7ed" stroke="#ff6600" strokeWidth="2" />
              <text fill="#ff6600" fontSize="7" fontWeight="bold">
                <textPath href="#circlePath" startOffset="5%">Seasoned Hip Seasoned Hip Seasoned</textPath>
              </text>
              <g transform="translate(30,32)">
                <g transform="scale(1.1) translate(-12,-12)">
                  <path d="M12 21C12 21 4 13.36 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.36 16 21 16 21H12Z" fill="none" stroke="#ff6600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </g>
            </svg>
          </div>
          <p className="mb-4 text-sm text-gray-600 dancing-script">
           Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
            Hic dolorum suscipit, at cupiditate dicta voluptates sequi <br/>
             commodi, voluptas alias, perferendis sit veritatis impedit <br/>
              minima quibusdam amet. Assumenda eveniet in quibusdam.</p>
          <div className="flex space-x-3 mt-2">
            <a href="#" className="bg-gray-400 hover:bg-blue-600 rounded-full p-2"><FaFacebookF /></a>
            <a href="#" className="bg-gray-400 hover:bg-pink-500 rounded-full p-2"><FaInstagram /></a>
            <a href="#" className="bg-gray-400 hover:bg-blue-400 rounded-full p-2"><FaTwitter /></a>
            <a href="#" className="bg-gray-400 hover:bg-green-500 rounded-full p-2"><FaWhatsapp /></a>
          </div>
        </div>
        {/* Middle: Contact Info */}
        <div className="flex flex-col items-start mt-6">
          <h3 className="text-lg font-semibold mb-4 text-zinc-800 dancing-script">Contact</h3>
          <div className="flex items-center mb-3">
            <FaMapMarkerAlt className="text-xl mr-3 text-gray-500" />
            <div>
              <div className="font-semibold dancing-script text-zinc-500">Address</div>
              <div className="text-sm text-gray-400 berkshire-swash-regular">123 ABC Street, City, Country</div>
            </div>
          </div>
          <div className="flex items-center mb-3">
            <FaPhoneAlt className="text-xl mr-3 text-gray-400" />
            <div>
              <div className="font-semibold dancing-script text-zinc-500">Phone</div>
              <div className="text-sm text-gray-400 berkshire-swash-regular">+1 234 567 890</div>
            </div>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-xl mr-3 text-gray-400" />
            <div>
              <div className="font-semibold dancing-script text-zinc-500">Email</div>
             <div className="text-sm text-gray-400 berkshire-swash-regular">abc@gmail.com</div>
            </div>
          </div>
        </div>
        {/* Right: Recent Posts & Insta */}
        <div className="flex flex-col items-start w-full mr-6">
          <h3 className="text-lg font-semibold mb-4 text-zinc-800 dancing-script mt-8">Recent Post</h3>
          <div className="flex flex-col md:flex-row w-full gap-8">
            {/* Recent Posts */}
            <div className="flex flex-col flex-1">
              <div className="flex items-center mb-3">
                <Image src="/carou/7.jpg" alt="Recent 1" width={96} height={96} className="w-24 h-24 object-cover mr-3" />
                <p className="text-sm text-zinc-600 dancing-script">Delicious chocolate cake recipe <br/> for your sweet cravings. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas alias quibusdam, laboriosam dolorum laborum veritatis hic perferendis et.</p>
              </div>
              <div className="flex items-center mb-6 mt-4">
                <Image src="/images/8.jpg" alt="Recent 2" width={96} height={96} className="w-24 h-24 object-cover mr-3" />
                <p className="text-sm text-zinc-600 dancing-script">Try our new marshmallow dessert, easy and quick! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque consequatur consequuntur alias reprehenderit nobis ducimus maxime, iste recusandae provident doloremque.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter Section */}
      <div className="py-8">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="mb-4 md:mb-0 md:w-1/2">
            <h4 className="text-lg font-semibold mb-2 text-zinc-500 berkshire-swash-regular">Enter your email below to get our <span className="text-orange-400"><br/>Recipe of the Day</span></h4>
          </div>
          <form className="flex w-full md:w-1/2 max-w-xl">
            <input
              type="email"
              placeholder="Enter your email for newsletter..."
              className="flex-1 rounded-l-full border border-orange-500 px-4 py-2 text-gray-900 focus:outline-none dancing-script"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-r-full font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="bg-orange-300 py-4 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-2 md:mb-0 dancing-script">&copy; {new Date().getFullYear()} All rights reserved.</div>
          <div className="flex space-x-6 dancing-script">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-pink-400">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
