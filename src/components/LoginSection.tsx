
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Login Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-light mb-8 text-gray-900">Login mit Passwort</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="versichertennummer" className="block text-sm font-medium text-gray-700 mb-2">
                  Versichertennummer
                </label>
                <input
                  type="text"
                  id="versichertennummer"
                  value={versichertennummer}
                  onChange={(e) => setVersichertennummer(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {showError && !versichertennummer && (
                  <p className="text-red-500 text-sm mt-2">Bitte geben Sie die gewünschte Information ein.</p>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <a href="#" className="text-blue-600 hover:underline text-sm inline-block">
                Wo finde ich meine Zugangsdaten?
              </a>
              
              <button
                onClick={handleLogin}
                className="w-full bg-gray-800 text-white py-4 px-6 rounded-md hover:bg-gray-900 transition-colors flex items-center justify-between group font-medium"
              >
                <span>Einloggen</span>
                <ChevronRight className="transition-transform group-hover:translate-x-1" size={20} />
              </button>
            </div>
            
            <div className="mt-8 space-y-4">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-gray-900 py-2">
                  <span>Passwort vergessen?</span>
                  <ChevronDown className="transition-transform group-open:rotate-180" size={16} />
                </summary>
                <div className="mt-3 text-sm text-gray-600">
                  <p>Sie können Ihr Passwort zurücksetzen, indem Sie auf den Link klicken, den wir Ihnen per E-Mail senden.</p>
                </div>
              </details>
              
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-gray-900 py-2">
                  <span>Neu bei Meine TK? <span className="text-blue-600">Jetzt registrieren</span></span>
                  <ChevronDown className="transition-transform group-open:rotate-180" size={16} />
                </summary>
                <div className="mt-3 text-sm text-gray-600">
                  <p>Registrieren Sie sich jetzt und nutzen Sie alle Vorteile von Meine TK.</p>
                </div>
              </details>
            </div>
          </div>
          
          {/* Weitere Möglichkeiten */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-light mb-8 text-gray-900">Weitere Möglichkeiten</h2>
            
            <div className="space-y-4">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-gray-900 py-3 border-b border-gray-100">
                  <span>Freischaltcode per Post erhalten?</span>
                  <ChevronDown className="transition-transform group-open:rotate-180" size={16} />
                </summary>
                <div className="mt-3 pb-3 text-sm text-gray-600">
                  <p>Wenn Sie noch keinen Zugang haben, können Sie einen Freischaltcode per Post anfordern.</p>
                </div>
              </details>
              
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-gray-900 py-3 border-b border-gray-100">
                  <span>Einmal-Kennwort per Post erhalten?</span>
                  <ChevronDown className="transition-transform group-open:rotate-180" size={16} />
                </summary>
                <div className="mt-3 pb-3 text-sm text-gray-600">
                  <p>Sie können sich ein einmaliges Kennwort per Post zusenden lassen.</p>
                </div>
              </details>
              
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-gray-900 py-3">
                  <span>Mitgliedschaftsantrag: Status einsehen</span>
                  <ChevronDown className="transition-transform group-open:rotate-180" size={16} />
                </summary>
                <div className="mt-3 pb-3 text-sm text-gray-600">
                  <p>Verfolgen Sie den Status Ihres Mitgliedschaftsantrags.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
