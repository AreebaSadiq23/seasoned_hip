'use client'
import React, { useState } from 'react';
import Link from "next/link";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // implement search functionality here
      console.log('Searching for:', searchQuery);
      // For now, just clear the search
      setSearchQuery('');
      setSearchOpen(false);
    }
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white px-4 py-3 flex items-center justify-between">
      {/* Left: Logo/Title */}
      <div className="flex items-center gap-3">
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

      {/* Center: Nav Items (hidden on mobile) */}
      <nav className="hidden md:flex gap-8 flex-1 justify-center dancing-script">
        <Link href="/" className="text-gray-800 font-medium hover:text-orange-500 transition">
          Home
        </Link>
        <Link href="/shop" className="text-gray-800 font-medium hover:text-orange-500 transition">
          Shop
        </Link>
        <Link href="/BlogPage" className="text-gray-800 font-medium hover:text-orange-500 transition">
          Blog
        </Link>
        <Link href="/contact" className="text-gray-800 font-medium hover:text-orange-500 transition">
          Contact
        </Link>
      </nav>

      {/* Right: Search and Button */}
      <div className="flex items-center gap-4">
        {/* Enhanced Inline Search Functionality */}
        <div className="relative">
          {searchOpen ? (
            <form onSubmit={handleSearch} className="flex items-center bg-white rounded-xl shadow-lg border-2 border-orange-200">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What are you looking for?"
                className="w-64 px-4 py-2 text-gray-600 dancing-script text-sm border-none focus:outline-none focus:ring-0 bg-transparent"
                autoFocus
              />
              <button
                type="submit"
                className="px-3 py-2 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 transition-all duration-200 hover:scale-105"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="px-2 py-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-r-lg transition-all duration-200"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </form>
          ) : (
            <button
              className="p-3 rounded-xl hover:bg-orange-50 transition-all duration-200 hover:scale-105 group"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <div className="relative">
                <svg width="24" height="24" fill="none" stroke="#ff6600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="group-hover:scale-110 transition-transform duration-200">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>
            </button>
          )}
        </div>

        {/* Shop Now Button */}
        <Link href="/shop" className="hidden sm:inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 dancing-script py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 transform">
          Shop Now
        </Link>
        {/* Hamburger for mobile */}
        <button className="md:hidden ml-2 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <svg width="26" height="26" fill="none" stroke="#ff6600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-30 md:hidden" onClick={() => setMenuOpen(false)}>
          <div className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6 flex flex-col gap-6" onClick={e => e.stopPropagation()}>
            <button className="self-end mb-4" onClick={() => setMenuOpen(false)} aria-label="Close">
              <svg width="24" height="24" fill="none" stroke="#ff6600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <Link href="/" className="text-gray-800 font-medium text-lg hover:text-orange-500 transition" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/shop" className="text-gray-800 font-medium text-lg hover:text-orange-500 transition" onClick={() => setMenuOpen(false)}>
              Shop
            </Link>
            <Link href="/BlogPage" className="text-gray-800 font-medium text-lg hover:text-orange-500 transition" onClick={() => setMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/Contact" className="text-gray-800 font-medium text-lg hover:text-orange-500 transition" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <Link href="/shop" className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-orange-600 transition mt-4 text-center" onClick={() => setMenuOpen(false)}>
              Shop Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 