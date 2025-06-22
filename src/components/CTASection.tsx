
import React from 'react';
import { ChevronRight, Phone, Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-gray-700 py-10">
      <div className="container mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-4 max-w-5xl mx-auto">
          <button className="bg-yellow-400 text-black py-4 px-10 hover:bg-yellow-500 transition-colors flex items-center justify-between group flex-1 font-medium text-lg">
            <span>Jetzt Mitglied werden</span>
            <ChevronRight className="transition-transform group-hover:translate-x-1" size={22} />
          </button>
          
          <button className="bg-gray-600 text-white py-4 px-10 hover:bg-gray-500 transition-colors flex items-center justify-center gap-4 font-medium text-lg">
            <span>Kontakt</span>
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <Mail size={20} />
            </div>
          </button>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-4 max-w-5xl mx-auto">
          <button className="w-full bg-yellow-400 text-black py-4 px-6 hover:bg-yellow-500 transition-colors flex items-center justify-between group font-medium text-lg">
            <span>Jetzt Mitglied werden</span>
            <ChevronRight className="transition-transform group-hover:translate-x-1" size={24} />
          </button>
          
          <button className="w-full bg-gray-300 text-gray-700 py-4 px-6 hover:bg-gray-200 transition-colors flex items-center justify-end gap-4 font-medium text-lg">
            <span>Kontakt</span>
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <Mail size={20} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
