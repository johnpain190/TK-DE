
import React, { useState, useEffect, useMemo } from 'react';

const LoadingScreen = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  const messages = useMemo(() => [
    "Checking your account status...",
    "Verifying your credentials...",
    "Checking your eligibility for the TK-Gesundheitsbonus...",
    "Loading your account dashboard...",
    "Finalizing your session..."
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eceae8]">
      <div className="text-center">
        <div className="flex justify-center space-x-2 mb-8">
          {[0, 200, 400].map((delay, index) => (
            <div 
              key={index}
              className="w-4 h-4 rounded-sm bg-[#009ee0] animate-bounce"
              style={{ 
                animationDelay: `${delay}ms`,
                animationDuration: '1.4s'
              }}
            />
          ))}
        </div>
        
        <div className="h-12 flex items-center justify-center">
          <p 
            key={currentMessageIndex}
            className="text-lg text-gray-700 font-medium animate-fade-in"
          >
            {messages[currentMessageIndex]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
