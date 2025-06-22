
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const LoadingScreen = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  const messages = [
    "Checking your account status...",
    "Verifying your credentials...",
    "Checking your eligibility for the TK-Gesundheitsbonus...",
    "Loading your account dashboard...",
    "Finalizing your session..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000); // Change message every 2 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#eceae8' }}>
      <Header />
      
      {/* Main Loading Content */}
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          {/* Three Square Loading Animation */}
          <div className="flex justify-center space-x-2 mb-8">
            <div 
              className="w-4 h-4 rounded-sm animate-bounce"
              style={{ 
                backgroundColor: '#009ee0',
                animationDelay: '0ms',
                animationDuration: '1.4s'
              }}
            ></div>
            <div 
              className="w-4 h-4 rounded-sm animate-bounce"
              style={{ 
                backgroundColor: '#009ee0',
                animationDelay: '200ms',
                animationDuration: '1.4s'
              }}
            ></div>
            <div 
              className="w-4 h-4 rounded-sm animate-bounce"
              style={{ 
                backgroundColor: '#009ee0',
                animationDelay: '400ms',
                animationDuration: '1.4s'
              }}
            ></div>
          </div>
          
          {/* Fading Text Messages */}
          <div className="h-12 flex items-center justify-center">
            <p 
              key={currentMessageIndex}
              className="text-lg text-gray-700 font-medium animate-fade-in"
            >
              {messages[currentMessageIndex]}
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LoadingScreen;
