
import React from 'react';
import { Youtube, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Unternehmen */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Unternehmen</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-800">Über Die Techniker</a></li>
              <li><a href="#" className="hover:text-gray-800">Vorstand der TK</a></li>
              <li><a href="#" className="hover:text-gray-800">Verwaltungsrat der TK</a></li>
              <li><a href="#" className="hover:text-gray-800">Presse und Politik</a></li>
              <li><a href="#" className="hover:text-gray-800">TK im Bundesland</a></li>
              <li><a href="#" className="hover:text-gray-800">Nachhaltigkeit bei der TK</a></li>
              <li><a href="#" className="hover:text-gray-800">Digitale Verantwortung der TK</a></li>
              <li><a href="#" className="hover:text-gray-800">Gesundheitsdatennutzung</a></li>
              <li><a href="#" className="hover:text-gray-800">📊 Geschäftsbericht</a></li>
            </ul>
          </div>
          
          {/* Oft genutzte Inhalte */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Oft genutzte Inhalte</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-800">Magazin</a></li>
              <li><a href="#" className="hover:text-gray-800">Adresse ändern</a></li>
              <li><a href="#" className="hover:text-gray-800">E-Mail-Adresse verwalten</a></li>
              <li><a href="#" className="hover:text-gray-800">Familienversicherung online beantragen</a></li>
              <li><a href="#" className="hover:text-gray-800">Postfach: Briefe empfangen in Meine TK</a></li>
              <li><a href="#" className="hover:text-gray-800">Newsletter bestellen</a></li>
              <li><a href="#" className="hover:text-gray-800">Jetzt Mitglied werden</a></li>
            </ul>
          </div>
          
          {/* International */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">International</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-800">English</a></li>
              <li><a href="#" className="hover:text-gray-800">Türkçe</a></li>
              <li><a href="#" className="hover:text-gray-800">中文</a></li>
              <li><a href="#" className="hover:text-gray-800">Polski</a></li>
              <li><a href="#" className="hover:text-gray-800">Español</a></li>
              <li><a href="#" className="hover:text-gray-800">اللغة العربية</a></li>
            </ul>
          </div>
          
          {/* Portale */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Portale</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-800">Firmenkunden</a></li>
              <li><a href="#" className="hover:text-gray-800">Lebenswelten</a></li>
              <li><a href="#" className="hover:text-gray-800">Leistungserbringer</a></li>
              <li><a href="#" className="hover:text-gray-800">Karriere</a></li>
              <li><a href="#" className="hover:text-gray-800">Vertriebspartner</a></li>
            </ul>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <Youtube size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <div className="w-6 h-6 bg-gray-600 rounded"></div>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <div className="w-6 h-6 bg-gray-600 rounded border-2 border-gray-600"></div>
          </a>
        </div>
        
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-800">Impressum</a>
          <a href="#" className="hover:text-gray-800">Nutzungs-/Teilnahmebedingungen</a>
          <a href="#" className="hover:text-gray-800">Datenschutz und Informationsfreiheit</a>
          <a href="#" className="hover:text-gray-800">Barrierefreiheit</a>
          <a href="#" className="hover:text-gray-800">Barriere melden</a>
          <a href="#" className="hover:text-gray-800">🔧 Privatsphäre-Einstellungen</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
