
import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

const LoginSection = () => {
  const [versichertennummer, setVersichertennummer] = useState('');
  const [passwort, setPasswort] = useState('');
  const [showError, setShowError] = useState(false);

  const handleLogin = () => {
    if (!versichertennummer || !passwort) {
      setShowError(true);
    } else {
      setShowError(false);
      console.log('Login attempted');
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Login Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-light mb-6 text-gray-800">Login mit Passwort</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="versichertennummer" className="block text-sm font-medium text-gray-700 mb-2">
                  Versichertennummer
                </label>
                <input
                  type="text"
                  id="versichertennummer"
                  value={versichertennummer}
                  onChange={(e) => setVersichertennummer(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
                {showError && !versichertennummer && (
                  <p className="text-red-500 text-sm mt-1">Bitte geben Sie die gewünschte Information ein.</p>
                )}
              </div>
              
              <div>
                <label htmlFor="passwort" className="block text-sm font-medium text-gray-700 mb-2">
                  Passwort
                </label>
                <input
                  type="password"
                  id="passwort"
                  value={passwort}
                  onChange={(e) => setPasswort(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <a href="#" className="text-blue-600 hover:underline text-sm">
                Wo finde ich meine Zugangsdaten?
              </a>
              
              <button
                onClick={handleLogin}
                className="w-full bg-gray-700 text-white py-3 px-4 rounded hover:bg-gray-800 transition-colors flex items-center justify-between group"
              >
                <span>Einloggen</span>
                <ChevronRight className="transition-transform group-hover:translate-x-1" size={20} />
              </button>
            </div>
            
            <div className="mt-6 space-y-3">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-gray-900">
                  <span>Passwort vergessen?</span>
                  <ChevronDown className="transition-transform group-open:rotate-180" size={16} />
                </summary>
              </details>
              
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-gray-900">
                  <span>Neu bei Meine TK? <span className="text-blue-600">Jetzt registrieren</span></span>
                  <ChevronDown className="transition-transform group-open:rotate-180" size={16} />
                </summary>
              </details>
            </div>
          </div>
          
          {/* Weitere Möglichkeiten */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-light mb-6 text-gray-800">Weitere Möglichkeiten</h2>
            
            <div className="space-y-3">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-gray-900 py-2">
                  <span>Freischaltcode per Post erhalten?</span>
                  <ChevronDown className="transition-transform group-open:rotate-180" size={16} />
                </summary>
              </details>
              
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-gray-900 py-2">
                  <span>Einmal-Kennwort per Post erhalten?</span>
                  <ChevronDown className="transition-transform group-open:rotate-180" size={16} />
                </summary>
              </details>
              
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-gray-900 py-2">
                  <span>Mitgliedschaftsantrag: Status einsehen</span>
                  <ChevronDown className="transition-transform group-open:rotate-180" size={16} />
                </summary>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
