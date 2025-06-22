
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const LoginSection = () => {
  const [versichertennummer, setVersichertennummer] = useState('');
  const [passwort, setPasswort] = useState('');

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Login Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-xl font-normal mb-8 text-gray-700">Login mit Passwort</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="versichertennummer" className="block text-sm text-gray-600 mb-2">
                  Versichertennummer
                </label>
                <input
                  type="text"
                  id="versichertennummer"
                  value={versichertennummer}
                  onChange={(e) => setVersichertennummer(e.target.value)}
                  className="w-full px-3 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400"
                />
              </div>
              
              <div>
                <label htmlFor="passwort" className="block text-sm text-gray-600 mb-2">
                  Passwort
                </label>
                <input
                  type="password"
                  id="passwort"
                  value={passwort}
                  onChange={(e) => setPasswort(e.target.value)}
                  className="w-full px-3 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400"
                />
              </div>
              
              <a href="#" className="text-gray-600 hover:underline text-sm inline-block">
                Wo finde ich meine Zugangsdaten?
              </a>
              
              <button className="w-full bg-gray-600 text-white py-3 px-6 rounded-none hover:bg-gray-700 transition-colors flex items-center justify-between group">
                <span>Einloggen</span>
                <ChevronRight className="transition-transform group-hover:translate-x-1" size={20} />
              </button>
            </div>
          </div>
          
          {/* Weitere Möglichkeiten */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-xl font-normal mb-8 text-gray-700">Weitere Möglichkeiten</h2>
            
            <div className="space-y-1">
              <div className="py-3 border-b border-gray-200">
                <span className="text-gray-600 text-sm flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Freischaltcode per Post erhalten?
                </span>
              </div>
              
              <div className="py-3 border-b border-gray-200">
                <span className="text-gray-600 text-sm flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Einmal-Kennwort per Post erhalten?
                </span>
              </div>
              
              <div className="py-3">
                <span className="text-gray-600 text-sm flex items-center">
                  <ChevronRight size={16} className="mr-2" />
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
