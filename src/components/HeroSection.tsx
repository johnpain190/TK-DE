
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-light text-gray-800 text-center mb-8 tracking-wide">
          Meine TK
        </h1>
        
        {/* Hero Image */}
        <div className="w-full h-64 md:h-80 rounded-none mb-0 relative overflow-hidden shadow-sm">
          <img 
            src="https://www.tk.de/resource/image/2116170/10x2/1680/336/60edd37e173249dc7d960098db164bad/A5A5FFE73E65B8B709A5428771F9815C/web-tk-app-startseite-divers.jpg"
            alt="TK App Startseite"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
