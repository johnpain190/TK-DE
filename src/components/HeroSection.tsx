
import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-8 mt-16" style={{ backgroundColor: '#eceae8' }}>
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-light text-gray-800 text-center mb-8 tracking-wide">
          Meine TK
        </h1>
      </div>
      
      {/* Full width banner */}
      <div className="w-full h-64 md:h-80 relative overflow-hidden">
        <img 
          src="https://www.tk.de/resource/image/2116170/10x2/1680/336/60edd37e173249dc7d960098db164bad/A5A5FFE73E65B8B709A5428771F9815C/web-tk-app-startseite-divers.jpg"
          alt="TK Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
