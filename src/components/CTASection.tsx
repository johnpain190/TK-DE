
import React from 'react';
import { ChevronRight, Phone, Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
          <button className="bg-yellow-400 text-black py-4 px-6 rounded hover:bg-yellow-500 transition-colors flex items-center justify-between group flex-1">
            <span className="font-medium">Jetzt Mitglied werden</span>
            <ChevronRight className="transition-transform group-hover:translate-x-1" size={20} />
          </button>
          
          <button className="bg-gray-600 text-white py-4 px-6 rounded hover:bg-gray-500 transition-colors flex items-center justify-center gap-2">
            <span>Kontakt</span>
            <Phone size={16} />
            <Mail size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
