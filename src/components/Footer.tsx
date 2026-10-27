import { MapPin, Phone, Mail, Clock, ShieldCheck, Instagram, ArrowUpRight } from 'lucide-react';
import { NAP, SERVICES } from '../data/siteData';
import { WhatsAppIcon } from './NAPBlock';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const whatsappUrl = `https://wa.me/${NAP.phoneRaw}?text=${encodeURIComponent("Olá! Gostaria de um orçamento com a Encadernadora JR.")}`;

  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <button 
              onClick={() => handleNav('/')}
              className="flex items-center gap-2 cursor-pointer text-left focus:outline-none"
            >
              <img 
                src={NAP.logoUrl} 
                alt="Encadernadora JR Logo" 
                className="h-10 object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" 
              />
            </button>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tradição, precisão e arte manual em encadernação de capa dura, teses acadêmicas, livros fiscais e cardápios há mais de 20 anos no Mercado Novo em Belo Horizonte.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-emerald-950/40 border border-emerald-800/40 px-3 py-1.5 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>Garantia de Qualidade & Padrão ABNT</span>
            </div>
          </div>

          {/* Col 2: Serviços Links */}
          <div className="space-y-4">
            <h4 className="text-white font-display font-bold text-base tracking-wide uppercase text-xs">
              Nossos Serviços
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleNav('/servicos')}
                    className="hover:text-emerald-400 transition-colors text-left flex items-center justify-between w-full group cursor-pointer"
                  >
                    <span>{s.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Subpages & Navigation */}
          <div className="space-y-4">
            <h4 className="text-white font-display font-bold text-base tracking-wide uppercase text-xs">
              Navegação do Site
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('/')} className="hover:text-white transition-colors cursor-pointer">
                  Página Inicial (Home)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/sobre')} className="hover:text-white transition-colors cursor-pointer">
                  Sobre Nós (Nossa História no Mercado Novo)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/servicos')} className="hover:text-white transition-colors cursor-pointer">
                  Catálogo Completo de Serviços
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/contato')} className="hover:text-white transition-colors cursor-pointer">
                  Contato
                </button>
              </li>
            </ul>

            <div className="pt-2">
              <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Arquivos de Indexação (SEO)</h5>
              <div className="flex flex-wrap gap-2 text-xs">
                <a href="/robots.txt" target="_blank" className="text-slate-500 hover:text-emerald-400 underline">robots.txt</a>
                <span className="text-slate-700">•</span>
                <a href="/sitemap.xml" target="_blank" className="text-slate-500 hover:text-emerald-400 underline">sitemap.xml</a>
                <span className="text-slate-700">•</span>
                <a href="/llms.txt" target="_blank" className="text-slate-500 hover:text-emerald-400 underline">llms.txt</a>
              </div>
            </div>
          </div>

          {/* Col 4: NAP & Contato Rápido */}
          <div className="space-y-4">
            <h4 className="text-white font-display font-bold text-base tracking-wide uppercase text-xs">
              Dados de Localização (NAP)
            </h4>
            <div className="space-y-3 text-xs leading-relaxed text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <address className="not-italic">
                  <strong className="text-white">Mercado Novo - Loja 1249</strong><br />
                  Corredor O, 2º Piso<br />
                  Av. Olegário Maciel, 742 - Centro<br />
                  Belo Horizonte - MG, CEP 30180-110
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:+${NAP.phoneRaw}`} className="hover:text-white font-bold">
                  {NAP.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${NAP.email}`} className="hover:text-white">
                  {NAP.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Seg a Sex: 08h - 18h | Sáb: 08h - 12h</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-xl font-bold text-xs hover:bg-[#1ebe57] transition-all w-full justify-center shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Orçamento Imediato WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {NAP.name} ({NAP.legalName}). Todos os direitos reservados. CNPJ ativo. Mercado Novo - Belo Horizonte/MG.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all text-slate-300"
              aria-label="WhatsApp Encadernadora JR"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all text-slate-300"
              aria-label="Instagram Encadernadora JR"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
