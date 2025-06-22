
import React, { useState, useEffect } from 'react';
import { User, Search, Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Large Logo - Outside Header, sticking to top */}
      <div className={`fixed top-0 left-8 z-50 transition-all duration-300 ${
        isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <img 
          src="https://www.tk.de/blueprint/static/assets/base/images/logo_Sonderform.svg"
          alt="Die Techniker"
          className="h-24 w-auto"
        />
      </div>

      {/* Header Bar - Fixed Height */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm border-b border-gray-200 h-16">
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Small Logo - Inside Header (appears when scrolled), full height */}
            <div className={`absolute top-0 left-4 transition-all duration-300 ${
              isScrolled ? 'opacity-100' : 'opacity-0'
            }`}>
              <img 
                src="https://www.tk.de/blueprint/static/assets/base/images/logo_Sonderform.svg"
                alt="Die Techniker"
                className="h-16 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 ml-auto">
              <button className="p-2 text-gray-700 hover:text-gray-900">
                <User size={22} />
              </button>
              <button className="p-2 text-gray-700 hover:text-gray-900">
                <Search size={22} />
              </button>
              <button className="p-2 text-gray-700 hover:text-gray-900">
                <Menu size={22} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden ml-auto">
              <button className="p-2 text-gray-700 hover:text-gray-900">
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from being hidden behind fixed header */}
      <div className="h-16" />
    </>
  );
};

export default Header;
