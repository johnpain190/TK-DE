
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const LoginSection = () => {
  const [versichertennummer, setVersichertennummer] = useState('');
  const [passwort, setPasswort] = useState('');

  return (
    <section className="lg:py-12 lg:md:py-20" style={{ backgroundColor: '#eceae8' }}>
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
                
                <button 
                  className="w-full text-white py-4 md:py-4 px-6 md:px-6 transition-colors flex items-center justify-between group font-normal text-base md:text-base"
                  style={{ backgroundColor: '#454542' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3a3937'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#454542'}
                >
                  <span className="group-hover:underline transition-all duration-200">Einloggen</span>
                  <ChevronRight className="transition-transform group-hover:translate-x-1" size={20} />
                </button>
                
                {/* Desktop: Additional options below login button */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-center text-gray-700 cursor-pointer hover:text-gray-900">
                    <ChevronRight size={16} className="mr-3 text-gray-500" />
                    <span className="text-base">Passwort vergessen?</span>
                  </div>
                  <div className="flex items-center text-gray-700 cursor-pointer hover:text-gray-900">
                    <ChevronRight size={16} className="mr-3 text-gray-500" />
                    <span className="text-base">
                      Neu bei Meine TK? <span className="text-blue-600">Jetzt registrieren</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Desktop: Weitere Möglichkeiten */}
            <div className="bg-white p-2 shadow-sm max-w-xs">
              <h2 className="text-base font-normal mb-2 text-gray-800">Weitere Möglichkeiten</h2>
              
              <div className="space-y-0">
                <div className="py-1 border-b border-gray-200">
                  <span className="text-gray-700 text-xs flex items-center cursor-pointer hover:text-gray-900">
                    <ChevronRight size={10} className="mr-1 text-gray-500" />
                    Freischaltcode per Post erhalten?
                  </span>
                </div>
                
                <div className="py-1 border-b border-gray-200">
                  <span className="text-gray-700 text-xs flex items-center cursor-pointer hover:text-gray-900">
                    <ChevronRight size={10} className="mr-1 text-gray-500" />
                    Einmal-Kennwort per Post erhalten?
                  </span>
                </div>
                
                <div className="py-1">
                  <span className="text-gray-700 text-xs flex items-center cursor-pointer hover:text-gray-900">
                    <ChevronRight size={10} className="mr-1 text-gray-500" />
                    Mitgliedschaftsantrag: Status einsehen
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Combined Single Box */}
        <div className="lg:hidden">
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
              
              <button 
                className="w-full text-white py-4 px-6 transition-colors flex items-center justify-between group font-normal text-lg"
                style={{ backgroundColor: '#454542' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3a3937'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#454542'}
              >
                <span className="group-hover:underline transition-all duration-200">Einloggen</span>
                <ChevronRight className="transition-transform group-hover:translate-x-1" size={24} />
              </button>
              
              {/* Mobile: Additional options */}
              <div className="space-y-4 pt-4">
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
              
              {/* Mobile: Weitere Möglichkeiten - Combined in same box */}
              <div className="pt-8 border-t border-gray-200">
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
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
