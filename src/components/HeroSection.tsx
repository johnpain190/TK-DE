
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
          src="/lovable-uploads/96594203-4e23-4745-9e03-7b25445d14eb.png"
          alt="TK Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
