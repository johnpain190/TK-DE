
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Unternehmen */}
          <div>
            <h3 className="font-normal text-gray-700 mb-6">Unternehmen</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-800 transition-colors">Über Die Techniker</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Vorstand der TK</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Verwaltungsrat der TK</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Presse und Politik</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">TK im Bundesland</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Nachhaltigkeit bei der TK</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Digitale Verantwortung der TK</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Gesundheitsdatennutzung</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">📊 Geschäftsbericht</a></li>
            </ul>
          </div>
          
          {/* Oft genutzte Inhalte */}
          <div>
            <h3 className="font-normal text-gray-700 mb-6">Oft genutzte Inhalte</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-800 transition-colors">Magazin</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Adresse ändern</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">E-Mail-Adresse verwalten</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Familienversicherung online beantragen</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Postfach: Briefe empfangen in Meine TK</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Newsletter bestellen</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Jetzt Mitglied werden</a></li>
            </ul>
          </div>
          
          {/* International */}
          <div>
            <h3 className="font-normal text-gray-700 mb-6">International</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-800 transition-colors">English</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Türkçe</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">中文</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Polski</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Español</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">اللغة العربية</a></li>
            </ul>
          </div>
          
          {/* Portale */}
          <div>
            <h3 className="font-normal text-gray-700 mb-6">Portale</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-800 transition-colors">Firmenkunden</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Lebenswelten</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Leistungserbringer</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Karriere</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Vertriebspartner</a></li>
            </ul>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
            <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center text-white text-sm">▶</div>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
            <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center text-white text-sm">♪</div>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
            <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center text-white text-sm">📷</div>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
            <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center text-white text-sm">f</div>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
            <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center text-white text-sm">P</div>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm">blog</div>
          </a>
        </div>
        
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-800 transition-colors">Impressum</a>
          <a href="#" className="hover:text-gray-800 transition-colors">Nutzungs-/Teilnahmebedingungen</a>
          <a href="#" className="hover:text-gray-800 transition-colors">Datenschutz und Informationsfreiheit</a>
          <a href="#" className="hover:text-gray-800 transition-colors">Barrierefreiheit</a>
          <a href="#" className="hover:text-gray-800 transition-colors">Barriere melden</a>
          <a href="#" className="hover:text-gray-800 transition-colors">🔧 Privatsphäre-Einstellungen</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
