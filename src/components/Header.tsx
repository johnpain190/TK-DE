
import React from 'react';
import { User, Search, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* TK Logo - Much Larger */}
          <div className="flex items-center">
            <img 
              src="https://www.tk.de/blueprint/static/assets/base/images/logo_Sonderform.svg"
              alt="Die Techniker"
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <span className="text-gray-700 text-sm mr-6 font-medium">Login</span>
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
          <div className="md:hidden">
            <button className="p-2 text-gray-700 hover:text-gray-900">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
