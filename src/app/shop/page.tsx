import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaSearch } from "react-icons/fa";
import Image from "next/image";
import WorkingHours from "../HeroSection/WorkingHours";

const categories = [
  { name: "Marble Cake", count: 12 },
  { name: "Plum Cake", count: 8 },
  { name: "Choclate pudding cake", count: 5 },
  { name: "Egg", count: 7 },
  { name: "Lemon ginger bound cake", count: 4 },
  { name: "Bread Stick", count: 9 },
];

const tags = [
  "New", "Sale", "Popular", "Trending", "Men", "Women", "Kids", "Best", "Limited", "Hot"
];

const topProducts = [
  { name: "Lorem ipsum dolor sit amet", img: "/carou/1.jpg", price: 120, oldPrice: 150 },
  { name: "Lorem ipsum dolor sit amet", img: "/carou/2.jpg", price: 80, oldPrice: 100 },
  { name: "Lorem ipsum dolor sit amet", img: "/carou/3.jpg", price: 95, oldPrice: 120 },
  { name: "Lorem ipsum dolor sit amet", img: "/carou/4.jpg", price: 60, oldPrice: 80 },
  { name: "Lorem ipsum dolor sit amet", img: "/carou/5.jpg", price: 40, oldPrice: 55 },
  { name: "Lorem ipsum dolor sit amet", img: "/carou/6.jpg", price: 20, oldPrice: 30 },
];

const products = Array.from({ length: 16 }).map((_, i) => ({
  name: `Product ${i + 1}`,
  img: `/shop/${(i % 16) + 1}.jpg`,
  price: 50 + i * 10,
}));

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="relative w-full h-[220px] md:h-[300px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/10.jpg)' }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center w-full">
          <h1 className="text-white text-3xl md:text-5xl font-bold mt-8 dancing-script">Shop</h1>
          <div className="flex items-center gap-2 text-white mt-2">
            <span className="text-sm">Home</span>
            <span className="mx-1">&gt;&gt;</span>
            <span className="text-sm font-semibold">Shop</span>
          </div>
        </div>
        {/* Share Section */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-row items-center gap-2">
          <span className="text-white text-md dancing-script">Share with</span>
          <div className="flex gap-3">
            <span className="bg-white/80 rounded-full p-2 hover:bg-blue-500 hover:text-white text-zinc-500 transition"><FaFacebookF size={18} /></span>
            <span className="bg-white/80 rounded-full p-2 hover:bg-pink-500 hover:text-white text-zinc-500 transition"><FaInstagram size={18} /></span>
            <span className="bg-white/80 rounded-full p-2 hover:bg-blue-400 hover:text-white text-zinc-500 transition"><FaTwitter size={18} /></span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/4 flex flex-col items-center md:items-start">
          {/* Search Bar */}
          <div className="relative w-full mb-6">
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pr-10 pl-4 text-zinc-500 py-2 rounded border-2 border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 berkshire-swash-regular"
            />
          </div>
          {/* Categories */}
          <h2 className="font-semibold text-lg mb-1 text-zinc-500 dancing-script">Category</h2>
          <div className="w-62 h-1 bg-orange-300 mb-4 rounded" />
          <ul className="w-full mb-8 ">
            {categories.map((cat) => (
              <li key={cat.name} className="flex items-center  justify-between py-2 border-b last:border-b-0">
                <span className="text-zinc-500 berkshire-swash-regular ">{cat.name}</span>
                <span className="bg-orange-100 text-zinc-600 rounded-full px-2 text-xs ml-2">{cat.count}</span>
              </li>
            ))}
          </ul>
          {/* Filter by Price */}
          <h2 className="font-semibold text-lg mb-1 text-zinc-500 dancing-script">Filter by Price</h2>
          <div className="w-64 h-1 bg-orange-500 mb-4 rounded" />
          <div className="flex items-center gap-2 mb-4">
            <input type="range" min="0" max="200" className="w-32" />
            <span className="text-sm">$0 - $200</span>
          </div>
          <button className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-600 mb-8">Filter</button>
          {/* Top Products */}
          <h2 className="font-semibold text-lg mb-1 dancing-script text-zinc-500">Top Product</h2>
          <div className="w-64 h-1 bg-orange-500 mb-4 rounded" />
          <div className="flex flex-col gap-4 mb-8">
            {topProducts.map((prod) => (
              <div key={prod.img} className="flex items-center gap-3">
                <Image src={prod.img} alt={prod.name} width={48} height={48} className="w-12 h-12 rounded-full object-cover border" />
                <div>
                  <div className="font-medium text-sm text-zinc-500 dancing-script">{prod.name}</div>
                  <div className="flex items-center gap-18">
                    <span className="text-xs text-gray-500 line-through berkshire-swash-regular">${prod.oldPrice}</span>
                    <span className="text-orange-400 font-bold text-sm berkshire-swash-regular">${prod.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Tags */}
          <h2 className="font-semibold text-lg mb-1 text-zinc-500 dancing-script">Tags</h2>
          <div className="w-66 h-1 bg-orange-500 mb-4 rounded" />
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs cursor-pointer hover:bg-blue-500 hover:text-white transition">{tag}</span>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-3/4 flex flex-col mt-24">
          {/* Top Bar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <div className="text-gray-600 text-sm dancing-script">Showing <span className="font-semibold">5-12</span> of <span className="font-semibold">24</span> results</div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm dancing-script">Sort by:</span>
              <select className="py-1 text-sm focus:outline-none py-2 rounded border-2 border-orange-400 text-zinc-800">
                <option>Default sorting</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
              <span className="ml-2 flex gap-1">
                <span className="w-6 h-6 border rounded flex items-center justify-center cursor-pointer"><svg width="16" height="16"><rect width="16" height="16" fill="#888" /></svg></span>
                <span className="w-6 h-6 border rounded flex items-center justify-center cursor-pointer"><svg width="16" height="16"><rect width="7" height="16" fill="#888" /><rect x="9" width="7" height="16" fill="#bbb" /></svg></span>
              </span>
            </div>
          </div>
          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 mt-20">
            {products.map((prod) => (
              <div key={prod.img} className="bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col items-center p-4">
                <Image src={prod.img} alt={prod.name} width={96} height={96} className="w-24 h-24 object-cover mb-3" />
                <div className="text-center mb-1 text-zinc-800 dancing-script font-bold">{prod.name}</div>
                <div className="text-orange-600 font-bold berkshire-swash-regular mb-1">${prod.price}</div>
              </div>
            ))}
            <WorkingHours/>
          </div>
        </div>
      </div>
    </div>
  );
} 