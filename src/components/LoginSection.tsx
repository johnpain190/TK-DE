
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const LoginSection = () => {
  const [versichertennummer, setVersichertennummer] = useState('');
  const [passwort, setPasswort] = useState('');

  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: '#eceae8' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Single Full Width Login Container */}
          <div className="bg-white p-8 md:p-16 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-normal mb-12 md:mb-16 text-gray-800">Login mit Passwort</h2>
            
            <div className="space-y-8 md:space-y-10">
              <div>
                <label htmlFor="versichertennummer" className="block text-xl md:text-2xl text-gray-700 mb-4 md:mb-6 font-normal">
                  Versichertennummer
                </label>
                <input
                  type="text"
                  id="versichertennummer"
                  value={versichertennummer}
                  onChange={(e) => setVersichertennummer(e.target.value)}
                  className="w-full px-6 md:px-6 py-6 md:py-6 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white text-xl md:text-xl"
                />
              </div>
              
              <div>
                <label htmlFor="passwort" className="block text-xl md:text-2xl text-gray-700 mb-4 md:mb-6 font-normal">
                  Passwort
                </label>
                <input
                  type="password"
                  id="passwort"
                  value={passwort}
                  onChange={(e) => setPasswort(e.target.value)}
                  className="w-full px-6 md:px-6 py-6 md:py-6 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white text-xl md:text-xl"
                />
              </div>
              
              <a href="#" className="text-gray-600 hover:text-gray-800 text-lg md:text-xl inline-block underline">
                Wo finde ich meine Zugangsdaten?
              </a>
              
              <button className="w-full bg-gray-700 text-white py-6 md:py-6 px-8 md:px-8 hover:bg-gray-800 transition-colors flex items-center justify-between group font-normal text-xl md:text-2xl">
                <span>Einloggen</span>
                <ChevronRight className="transition-transform group-hover:translate-x-1" size={24} />
              </button>
              
              {/* Additional Options */}
              <div className="space-y-6 pt-8">
                <div className="flex items-center text-gray-600 cursor-pointer hover:text-gray-900 py-3">
                  <ChevronRight size={20} className="mr-4 text-gray-500" />
                  <span className="text-lg md:text-xl">Passwort vergessen?</span>
                </div>
                <div className="flex items-center text-gray-600 cursor-pointer hover:text-gray-900 py-3">
                  <ChevronRight size={20} className="mr-4 text-gray-500" />
                  <span className="text-lg md:text-xl">
                    Neu bei Meine TK? <span className="text-blue-500">Jetzt registrieren</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Weitere Möglichkeiten Section */}
          <div className="bg-white p-8 md:p-16 shadow-sm mt-8">
            <h2 className="text-3xl md:text-4xl font-normal mb-12 md:mb-16 text-gray-800">Weitere Möglichkeiten</h2>
            
            <div className="space-y-6">
              <div className="flex items-center text-gray-600 cursor-pointer hover:text-gray-900 py-4 md:py-5">
                <ChevronRight size={20} className="mr-4 text-gray-500" />
                <span className="text-lg md:text-xl">Freischaltcode per Post erhalten?</span>
              </div>
              
              <div className="flex items-center text-gray-600 cursor-pointer hover:text-gray-900 py-4 md:py-5">
                <ChevronRight size={20} className="mr-4 text-gray-500" />
                <span className="text-lg md:text-xl">Einmal-Kennwort per Post erhalten?</span>
              </div>
              
              <div className="flex items-center text-gray-600 cursor-pointer hover:text-gray-900 py-4 md:py-5">
                <ChevronRight size={20} className="mr-4 text-gray-500" />
                <span className="text-lg md:text-xl">Mitgliedschaftsantrag: Status einsehen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
