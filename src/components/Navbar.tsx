import { useState } from 'react';
import { Menu, X, Phone, MapPin, Sparkles } from 'lucide-react';
import { NAP } from '../data/siteData';
import { WhatsAppIcon } from './NAPBlock';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${NAP.phoneRaw}?text=${encodeURIComponent("Olá! Gostaria de fazer um orçamento com a Encadernadora JR.")}`;

  const navLinks = [
    { label: "Início", path: "/" },
    { label: "Serviços", path: "/servicos" },
    { label: "Sobre Nós", path: "/sobre" },
    { label: "Contato", path: "/contato" },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner with NAP info - Strictly 1 Line on Mobile */}
      <div className="bg-slate-900 text-slate-300 text-[11px] sm:text-xs py-1.5 px-3 md:px-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-hidden whitespace-nowrap">
          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold min-w-0">
            <MapPin className="w-3 h-3 shrink-0 text-emerald-400" />
            <span className="font-semibold text-emerald-400">
              <span className="hidden xs:inline">Mercado Novo, Loja 1249</span>
              <span className="xs:hidden">Mercado Novo</span>
            </span>
            <span className="hidden md:inline text-slate-500 font-normal">| Mais de 20 anos de tradição em BH</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0 font-medium">
            <a 
              href={`tel:+${NAP.phoneRaw}`} 
              className="flex items-center gap-1 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
              <span className="font-bold">{NAP.phoneDisplay}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-amber-400 font-bold flex items-center gap-0.5">
              ★ 5.0
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md z-40 border-b border-stone-200 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-3 flex justify-between items-center">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
            aria-label="Encadernadora JR - Início"
          >
            <img 
              src={NAP.logoUrl} 
              alt="Encadernadora JR Logo" 
              className="h-8 sm:h-10 md:h-11 object-contain transition-transform group-hover:scale-102" 
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-stone-900 text-white shadow-xs' 
                      : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-2">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#1ebe57] transition-all shadow-xs hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Orçamento WhatsApp</span>
            </a>

            {/* Mobile Fast CTA */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center gap-1.5 bg-[#25D366] text-white px-3 py-1.5 rounded-lg font-bold text-xs shadow-xs"
              aria-label="Orçamento no WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Orçamento</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-stone-700 hover:text-stone-950 hover:bg-stone-100 rounded-lg transition-colors focus:outline-none cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200 px-5 py-5 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-lg font-semibold text-sm transition-colors flex items-center justify-between cursor-pointer ${
                      isActive 
                        ? 'bg-stone-900 text-white' 
                        : 'text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>}
                  </button>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-stone-100 space-y-2.5">
              <div className="bg-stone-50 p-3 rounded-lg text-xs space-y-0.5 text-stone-600">
                <p className="font-bold text-stone-900 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Balcão Mercado Novo
                </p>
                <p className="leading-snug">Corredor O, Loja 1249 - Av. Olegário Maciel, 742</p>
                <p className="text-emerald-700 font-bold">{NAP.phoneDisplay}</p>
              </div>

              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-4 rounded-lg font-bold text-sm shadow-xs hover:bg-[#1ebe57] transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
