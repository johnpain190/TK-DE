
import React from 'react';
import { ChevronRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-gray-700 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 max-w-5xl mx-auto">
          <button className="bg-yellow-400 text-black py-4 px-10 hover:bg-yellow-500 transition-colors flex items-center justify-between group flex-1 font-medium tracking-wide text-lg">
            <span>Jetzt Mitglied werden</span>
            <ChevronRight className="transition-transform group-hover:translate-x-1" size={22} />
          </button>
          
          <button className="bg-gray-600 text-white py-4 px-10 hover:bg-gray-500 transition-colors flex items-center justify-center gap-4 font-medium tracking-wide text-lg">
            <span>Kontakt</span>
            <div className="flex items-center gap-2">
              <span className="text-xl">📞</span>
              <span className="text-xl">✉</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
