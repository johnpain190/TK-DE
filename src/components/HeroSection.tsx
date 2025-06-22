
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-light text-gray-800 text-center mb-8">
          Meine TK
        </h1>
        
        {/* Hero Image */}
        <div className="w-full h-64 md:h-96 bg-gradient-to-r from-green-900 via-yellow-800 to-blue-900 rounded-lg mb-8 relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Books and coffee cup"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
