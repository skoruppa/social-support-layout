
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  ArrowRight,
  Link as LinkIcon
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* BIP Banner */}
        <div className="flex justify-center mb-10">
          <a 
            href="https://www.bip.gov.pl/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-white text-blue-800 px-5 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            aria-label="Biuletyn Informacji Publicznej"
          >
            <div className="flex items-center">
              <div className="mr-3">
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" rx="8" fill="#0066CC" />
                  <path d="M25 30H75V70H25V30Z" fill="white" />
                  <path d="M35 40H65V60H35V40Z" fill="#0066CC" />
                  <path d="M45 45H55V55H45V45Z" fill="white" />
                </svg>
              </div>
              <div className="font-semibold">
                <span className="block text-sm">Biuletyn</span>
                <span className="block text-sm">Informacji Publicznej</span>
              </div>
            </div>
            <LinkIcon className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6">Dom Pomocy Społecznej w Jaworznie</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                <span>ul. Przykładowa 123<br />43-600 Jaworzno</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-blue-300 flex-shrink-0" />
                <a href="tel:+48123456789" className="hover:text-blue-200 transition-colors">+48 12 345 67 89</a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 text-blue-300 flex-shrink-0" />
                <a href="mailto:kontakt@dpsjaworzno.pl" className="hover:text-blue-200 transition-colors">kontakt@dpsjaworzno.pl</a>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 mr-3 text-blue-300 flex-shrink-0" />
                <span>Pon - Pt: 8:00 - 16:00</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6">Szybkie linki</h3>
            <ul className="space-y-3">
              {[
                { text: 'Strona główna', path: '/' },
                { text: 'Wydarzenia 2025', path: '/events-2025' },
                { text: 'Archiwum', path: '/archive' },
                { text: 'Kontakt', path: '/contact' },
                { text: 'RODO', path: '/rodo' },
                { text: 'Projekty', path: '/projects' },
                { text: 'Deklaracja Dostępności Cyfrowej', path: '/accessibility-declaration' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="flex items-center group hover:text-blue-200 transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6">Bądź na bieżąco</h3>
            <p className="mb-6">Śledź nas w mediach społecznościowych, aby być na bieżąco z aktualnościami i wydarzeniami w naszym domu.</p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-10 pt-8 text-sm text-blue-300 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Dom Pomocy Społecznej w Jaworznie. Wszelkie prawa zastrzeżone.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-white transition-colors">Polityka prywatności</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Regulamin</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dostępność</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
