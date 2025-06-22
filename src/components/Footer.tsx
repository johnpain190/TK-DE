
import React from 'react';
import { Youtube, Instagram, Facebook, Pinterest } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Unternehmen */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4 text-base">Unternehmen</h3>
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
            <h3 className="font-medium text-gray-800 mb-4 text-base">Oft genutzte Inhalte</h3>
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
            <h3 className="font-medium text-gray-800 mb-4 text-base">International</h3>
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
            <h3 className="font-medium text-gray-800 mb-4 text-base">Portale</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-800 transition-colors">Firmenkunden</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Lebenswelten</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Leistungserbringer</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Karriere</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Vertriebspartner</a></li>
            </ul>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8 mb-12">
          {/* Oft genutzte Inhalte - partial list for mobile */}
          <div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-800 transition-colors">E-Mail-Adresse verwalten</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Familienversicherung online beantragen</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Postfach: Briefe empfangen in Meine TK</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Newsletter bestellen</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Jetzt Mitglied werden</a></li>
            </ul>
          </div>
          
          {/* International */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4 text-base">International</h3>
            <ul className="space-y-3 text-sm text-gray-600">
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
            <h3 className="font-medium text-gray-800 mb-4 text-base">Portale</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-800 transition-colors">Firmenkunden</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Lebenswelten</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Leistungserbringer</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Karriere</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Vertriebspartner</a></li>
            </ul>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-start md:justify-center space-x-4 mb-8">
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
            <Youtube size={24} />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="text-lg font-bold">♪</span>
            </div>
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
            <Pinterest size={24} />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
            <div className="w-6 h-6 border border-gray-700 rounded flex items-center justify-center">
              <span className="text-xs font-bold">blog</span>
            </div>
          </a>
        </div>
        
        {/* Footer Links */}
        <div className="flex flex-col md:flex-row md:justify-center gap-4 md:gap-6 text-sm text-gray-600">
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
