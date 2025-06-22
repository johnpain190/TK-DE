
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const LoginSection = () => {
  const [versichertennummer, setVersichertennummer] = useState('');
  const [passwort, setPasswort] = useState('');

  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: '#eceae8' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Login Form */}
          <div className="bg-white p-6 md:p-10 shadow-sm">
            <h2 className="text-xl md:text-2xl font-normal mb-6 md:mb-8 text-gray-800">Login mit Passwort</h2>
            
            <div className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="versichertennummer" className="block text-sm md:text-base text-gray-700 mb-2 font-normal">
                  Versichertennummer
                </label>
                <input
                  type="text"
                  id="versichertennummer"
                  value={versichertennummer}
                  onChange={(e) => setVersichertennummer(e.target.value)}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white text-sm md:text-base"
                />
              </div>
              
              <div>
                <label htmlFor="passwort" className="block text-sm md:text-base text-gray-700 mb-2 font-normal">
                  Passwort
                </label>
                <input
                  type="password"
                  id="passwort"
                  value={passwort}
                  onChange={(e) => setPasswort(e.target.value)}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white text-sm md:text-base"
                />
              </div>
              
              <a href="#" className="text-gray-600 hover:text-gray-800 text-sm md:text-base inline-block underline">
                Wo finde ich meine Zugangsdaten?
              </a>
              
              <button className="w-full bg-gray-700 text-white py-3 md:py-4 px-4 md:px-6 hover:bg-gray-800 transition-colors flex items-center justify-between group font-normal text-sm md:text-base">
                <span>Einloggen</span>
                <ChevronRight className="transition-transform group-hover:translate-x-1" size={20} />
              </button>
              
              {/* Mobile: Additional links below button */}
              <div className="lg:hidden space-y-3 pt-4 border-t border-gray-200">
                <div className="flex items-center text-gray-600 cursor-pointer hover:text-gray-900">
                  <ChevronRight size={16} className="mr-2 text-gray-500" />
                  <span className="text-sm">Passwort vergessen?</span>
                </div>
                <div className="flex items-center text-gray-600 cursor-pointer hover:text-gray-900">
                  <ChevronRight size={16} className="mr-2 text-gray-500" />
                  <span className="text-sm">
                    Neu bei Meine TK? <span className="text-blue-500">Jetzt registrieren</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop: Weitere Möglichkeiten */}
          <div className="hidden lg:block bg-white p-6 md:p-10 shadow-sm">
            <h2 className="text-xl md:text-2xl font-normal mb-6 md:mb-8 text-gray-800">Weitere Möglichkeiten</h2>
            
            <div className="space-y-1">
              <div className="py-3 md:py-4 border-b border-gray-200">
                <span className="text-gray-700 text-sm md:text-base flex items-center cursor-pointer hover:text-gray-900">
                  <ChevronRight size={16} className="mr-3 text-gray-500" />
                  Freischaltcode per Post erhalten?
                </span>
              </div>
              
              <div className="py-3 md:py-4 border-b border-gray-200">
                <span className="text-gray-700 text-sm md:text-base flex items-center cursor-pointer hover:text-gray-900">
                  <ChevronRight size={16} className="mr-3 text-gray-500" />
                  Einmal-Kennwort per Post erhalten?
                </span>
              </div>
              
              <div className="py-3 md:py-4">
                <span className="text-gray-700 text-sm md:text-base flex items-center cursor-pointer hover:text-gray-900">
                  <ChevronRight size={16} className="mr-3 text-gray-500" />
                  Mitgliedschaftsantrag: Status einsehen
                </span>
              </div>
            </div>
          </div>
          
          {/* Mobile: Weitere Möglichkeiten */}
          <div className="lg:hidden bg-white p-6 shadow-sm">
            <h2 className="text-xl font-normal mb-6 text-gray-800">Weitere Möglichkeiten</h2>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-600 cursor-pointer hover:text-gray-900">
                <ChevronRight size={16} className="mr-2 text-gray-500" />
                <span className="text-sm">Freischaltcode per Post erhalten?</span>
              </div>
              
              <div className="flex items-center text-gray-600 cursor-pointer hover:text-gray-900">
                <ChevronRight size={16} className="mr-2 text-gray-500" />
                <span className="text-sm">Einmal-Kennwort per Post erhalten?</span>
              </div>
              
              <div className="flex items-center text-gray-600 cursor-pointer hover:text-gray-900">
                <ChevronRight size={16} className="mr-2 text-gray-500" />
                <span className="text-sm">Mitgliedschaftsantrag: Status einsehen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
