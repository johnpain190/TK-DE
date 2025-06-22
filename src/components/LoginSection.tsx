
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const LoginSection = () => {
  const [versichertennummer, setVersichertennummer] = useState('');
  const [passwort, setPasswort] = useState('');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Login Form */}
          <div className="bg-gray-50 p-10 shadow-sm">
            <h2 className="text-xl font-normal mb-8 text-gray-800 tracking-wide">Login mit Passwort</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="versichertennummer" className="block text-sm text-gray-700 mb-2 font-medium">
                  Versichertennummer
                </label>
                <input
                  type="text"
                  id="versichertennummer"
                  value={versichertennummer}
                  onChange={(e) => setVersichertennummer(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white"
                />
              </div>
              
              <div>
                <label htmlFor="passwort" className="block text-sm text-gray-700 mb-2 font-medium">
                  Passwort
                </label>
                <input
                  type="password"
                  id="passwort"
                  value={passwort}
                  onChange={(e) => setPasswort(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white"
                />
              </div>
              
              <a href="#" className="text-gray-600 hover:text-gray-800 text-sm inline-block underline">
                Wo finde ich meine Zugangsdaten?
              </a>
              
              <button className="w-full bg-gray-700 text-white py-4 px-6 hover:bg-gray-800 transition-colors flex items-center justify-between group font-medium tracking-wide">
                <span>Einloggen</span>
                <ChevronRight className="transition-transform group-hover:translate-x-1" size={20} />
              </button>
            </div>
          </div>
          
          {/* Weitere Möglichkeiten */}
          <div className="bg-gray-50 p-10 shadow-sm">
            <h2 className="text-xl font-normal mb-8 text-gray-800 tracking-wide">Weitere Möglichkeiten</h2>
            
            <div className="space-y-1">
              <div className="py-4 border-b border-gray-200">
                <span className="text-gray-700 text-sm flex items-center cursor-pointer hover:text-gray-900">
                  <ChevronRight size={16} className="mr-3 text-gray-500" />
                  Freischaltcode per Post erhalten?
                </span>
              </div>
              
              <div className="py-4 border-b border-gray-200">
                <span className="text-gray-700 text-sm flex items-center cursor-pointer hover:text-gray-900">
                  <ChevronRight size={16} className="mr-3 text-gray-500" />
                  Einmal-Kennwort per Post erhalten?
                </span>
              </div>
              
              <div className="py-4">
                <span className="text-gray-700 text-sm flex items-center cursor-pointer hover:text-gray-900">
                  <ChevronRight size={16} className="mr-3 text-gray-500" />
                  Mitgliedschaftsantrag: Status einsehen
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
