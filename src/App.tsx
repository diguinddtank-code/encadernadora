import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import { WhatsAppIcon } from './components/NAPBlock';
import { NAP } from './data/siteData';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const getInitialPath = (): string => {
    if (typeof window === 'undefined') return '/';
    const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
    if (['/sobre', '/servicos', '/contato'].includes(path)) {
      return path;
    }
    // Also check hash fallback
    const hash = window.location.hash.toLowerCase();
    if (hash === '#sobre') return '/sobre';
    if (hash === '#servicos') return '/servicos';
    if (hash === '#contato' || hash === '#localizacao') return '/contato';
    return '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);

  // Sync with browser Back/Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
      if (['/sobre', '/servicos', '/contato'].includes(path)) {
        setCurrentPath(path);
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
  };

  const whatsappUrl = `https://wa.me/${NAP.phoneRaw}?text=${encodeURIComponent("Olá! Gostaria de fazer um orçamento com a Encadernadora JR.")}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-slate-900 font-sans selection:bg-[#25D366] selection:text-white overflow-x-hidden w-full max-w-full">
      
      {/* Dynamic SEO Meta Tags Sync */}
      <SEOHead currentPath={currentPath} />

      {/* Persistent Floating WhatsApp CTA */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.5)] hover:bg-[#1ebe57] hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Falar no WhatsApp com a Encadernadora JR"
      >
        <span className="absolute w-full h-full bg-[#25D366] rounded-full animate-ping opacity-60"></span>
        <WhatsAppIcon className="w-8 h-8 relative z-10" />
      </a>

      {/* Main Navigation Header */}
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Active Page View */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {currentPath === '/sobre' && <AboutPage onNavigate={handleNavigate} />}
        {currentPath === '/servicos' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPath === '/contato' && <ContactPage onNavigate={handleNavigate} />}
        {currentPath === '/' && <HomePage onNavigate={handleNavigate} />}
      </main>

      {/* Global Footer with NAP & Sitemaps */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
