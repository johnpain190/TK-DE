
import React from 'react';
import { User, Search, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* TK Logo */}
          <div className="flex items-center">
            <div className="bg-blue-500 text-white px-4 py-2 rounded">
              <div className="font-bold text-xl">TK</div>
              <div className="text-xs">Die Techniker</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-800">
              <User size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-800">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-800">
              <Menu size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="p-2 text-gray-600 hover:text-gray-800">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
