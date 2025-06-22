
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const LoginSection = () => {
  const [versichertennummer, setVersichertennummer] = useState('');
  const [passwort, setPasswort] = useState('');

  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: '#eceae8' }}>
      <div className="container mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Login Form */}
            <div className="bg-white p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl md:text-2xl font-normal mb-8 md:mb-8 text-gray-800">Login mit Passwort</h2>
              
              <div className="space-y-6 md:space-y-6">
                <div>
                  <label htmlFor="versichertennummer" className="block text-base md:text-base text-gray-700 mb-3 font-normal">
                    Versichertennummer
                  </label>
                  <input
                    type="text"
                    id="versichertennummer"
                    value={versichertennummer}
                    onChange={(e) => setVersichertennummer(e.target.value)}
                    className="w-full px-4 md:px-4 py-4 md:py-3 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white text-base md:text-base"
                  />
                </div>
                
                <div>
                  <label htmlFor="passwort" className="block text-base md:text-base text-gray-700 mb-3 font-normal">
                    Passwort
                  </label>
                  <input
                    type="password"
                    id="passwort"
                    value={passwort}
                    onChange={(e) => setPasswort(e.target.value)}
                    className="w-full px-4 md:px-4 py-4 md:py-3 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white text-base md:text-base"
                  />
                </div>
                
                <a href="#" className="text-gray-600 hover:text-gray-800 text-base md:text-base inline-block underline">
                  Wo finde ich meine Zugangsdaten?
                </a>
                
                <button className="w-full bg-gray-700 text-white py-4 md:py-4 px-6 md:px-6 hover:bg-gray-800 transition-colors flex items-center justify-between group font-normal text-base md:text-base">
                  <span>Einloggen</span>
                  <ChevronRight className="transition-transform group-hover:translate-x-1" size={20} />
                </button>
              </div>
            </div>
            
            {/* Desktop: Weitere Möglichkeiten */}
            <div className="bg-white p-6 md:p-10 shadow-sm">
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
          </div>
        </div>

        {/* Mobile Layout - Single Column */}
        <div className="lg:hidden max-w-lg mx-auto">
          <div className="bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-normal mb-8 text-gray-800">Login mit Passwort</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="versichertennummer-mobile" className="block text-lg text-gray-800 mb-4 font-medium">
                  Versichertennummer
                </label>
                <input
                  type="text"
                  id="versichertennummer-mobile"
                  value={versichertennummer}
                  onChange={(e) => setVersichertennummer(e.target.value)}
                  className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white text-lg"
                />
              </div>
              
              <div>
                <label htmlFor="passwort-mobile" className="block text-lg text-gray-800 mb-4 font-medium">
                  Passwort
                </label>
                <input
                  type="password"
                  id="passwort-mobile"
                  value={passwort}
                  onChange={(e) => setPasswort(e.target.value)}
                  className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white text-lg"
                />
              </div>
              
              <a href="#" className="text-gray-600 hover:text-gray-800 text-lg inline-block underline">
                Wo finde ich meine Zugangsdaten?
              </a>
              
              <button className="w-full bg-gray-700 text-white py-4 px-6 hover:bg-gray-800 transition-colors flex items-center justify-between group font-normal text-lg">
                <span>Einloggen</span>
                <ChevronRight className="transition-transform group-hover:translate-x-1" size={24} />
              </button>
              
              {/* Mobile: Additional options */}
              <div className="space-y-4 pt-8">
                <div className="flex items-center text-gray-700 cursor-pointer hover:text-gray-900 py-3">
                  <ChevronRight size={20} className="mr-3 text-gray-500" />
                  <span className="text-lg">Passwort vergessen?</span>
                </div>
                <div className="flex items-center text-gray-700 cursor-pointer hover:text-gray-900 py-3">
                  <ChevronRight size={20} className="mr-3 text-gray-500" />
                  <span className="text-lg">
                    Neu bei Meine TK? <span className="text-blue-600">Jetzt registrieren</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile: Weitere Möglichkeiten */}
          <div className="bg-white p-6 shadow-sm mt-8">
            <h2 className="text-2xl font-normal mb-8 text-gray-800">Weitere Möglichkeiten</h2>
            
            <div className="space-y-4">
              <div className="flex items-center text-gray-700 cursor-pointer hover:text-gray-900 py-3">
                <ChevronRight size={20} className="mr-3 text-gray-500" />
                <span className="text-lg">Freischaltcode per Post erhalten?</span>
              </div>
              
              <div className="flex items-center text-gray-700 cursor-pointer hover:text-gray-900 py-3">
                <ChevronRight size={20} className="mr-3 text-gray-500" />
                <span className="text-lg">Einmal-Kennwort per Post erhalten?</span>
              </div>
              
              <div className="flex items-center text-gray-700 cursor-pointer hover:text-gray-900 py-3">
                <ChevronRight size={20} className="mr-3 text-gray-500" />
                <span className="text-lg">Mitgliedschaftsantrag: Status einsehen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
