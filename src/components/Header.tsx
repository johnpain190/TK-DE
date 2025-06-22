
import React from 'react';
import { User, Search, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* TK Logo */}
          <div className="flex items-center">
            <img 
              src="https://www.tk.de/blueprint/static/assets/base/images/logo_Sonderform.svg"
              alt="Die Techniker"
              className="h-12"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <span className="text-gray-600 text-sm mr-4">Login</span>
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
