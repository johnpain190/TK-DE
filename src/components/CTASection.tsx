
import React from 'react';
import { ChevronRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
          <button className="bg-yellow-400 text-black py-3 px-8 rounded-none hover:bg-yellow-500 transition-colors flex items-center justify-between group flex-1 font-normal">
            <span>Jetzt Mitglied werden</span>
            <ChevronRight className="transition-transform group-hover:translate-x-1" size={20} />
          </button>
          
          <button className="bg-gray-500 text-white py-3 px-8 rounded-none hover:bg-gray-400 transition-colors flex items-center justify-center gap-3 font-normal">
            <span>Kontakt</span>
            <div className="flex items-center gap-1">
              <span className="text-lg">📞</span>
              <span className="text-lg">✉</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
