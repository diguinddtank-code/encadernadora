import { MapPin, Phone, Clock, Mail, CheckCircle2, Navigation, ExternalLink } from 'lucide-react';
import { NAP } from '../data/siteData';

interface NAPBlockProps {
  variant?: 'card' | 'inline' | 'compact';
  className?: string;
  showMapButton?: boolean;
}

export const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function NAPBlock({
  variant = 'card',
  className = '',
  showMapButton = true
}: NAPBlockProps) {
  const whatsappUrl = `https://wa.me/${NAP.phoneRaw}?text=${encodeURIComponent("Olá! Gostaria de falar sobre encadernação com a Encadernadora JR.")}`;

  return (
    <div 
      itemScope 
      itemType="https://schema.org/LocalBusiness"
      className={`rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-xs ${className}`}
    >
      <meta itemProp="name" content={NAP.name} />
      <meta itemProp="telephone" content={`+${NAP.phoneRaw}`} />
      <meta itemProp="email" content={NAP.email} />

      <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between pb-5 border-b border-stone-100 gap-2 sm:gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-md mb-1.5">
            <CheckCircle2 className="w-3 h-3 text-emerald-700 shrink-0" />
            <span>Dados Oficiais no Mercado Novo</span>
          </div>
          <h3 className="text-xl font-display font-extrabold text-stone-900 leading-snug">
            {NAP.name}
          </h3>
          <p className="text-xs text-stone-500 font-medium">
            Mais de 20 anos de ofício contínuo em Belo Horizonte
          </p>
        </div>
        <span className="px-2.5 py-1 bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-bold rounded-md shrink-0 self-start xs:self-auto">
          ★ 5.0 Google
        </span>
      </div>

      <div className="space-y-4 pt-5 text-stone-700 text-sm">
        {/* Address */}
        <div className="flex items-start gap-3">
          <div className="p-2 bg-stone-100 text-stone-700 rounded-lg shrink-0 mt-0.5">
            <MapPin className="w-4 h-4 text-emerald-700" />
          </div>
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Endereço da Loja</p>
            <p className="font-semibold text-stone-900 leading-snug">
              <span itemProp="streetAddress">{NAP.address.street}</span> – <span className="text-emerald-800 font-bold">{NAP.address.complement}</span>
            </p>
            <p className="text-xs text-stone-600 mt-0.5">
              <span itemProp="addressLocality">{NAP.address.city}</span> - <span itemProp="addressRegion">{NAP.address.state}</span>, CEP <span itemProp="postalCode">{NAP.address.cep}</span>
            </p>
            <p className="text-[11px] text-stone-500 mt-0.5">
              2º piso, próximo ao Corredor O. Acesso via escadas da Av. Olegário Maciel.
            </p>
          </div>
        </div>

        {/* Phone / WhatsApp */}
        <div className="flex items-start gap-3">
          <div className="p-2 bg-stone-100 text-stone-700 rounded-lg shrink-0 mt-0.5">
            <Phone className="w-4 h-4 text-emerald-700" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Telefone & WhatsApp</p>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-base font-bold text-stone-900 hover:text-emerald-700 transition-colors inline-flex items-center gap-2"
            >
              <span>{NAP.phoneDisplay}</span>
              <span className="text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200/60 font-semibold px-2 py-0.2 rounded-full whitespace-nowrap">
                Online
              </span>
            </a>
          </div>
        </div>

        {/* Hours */}
        <div className="flex items-start gap-3">
          <div className="p-2 bg-stone-100 text-stone-700 rounded-lg shrink-0 mt-0.5">
            <Clock className="w-4 h-4 text-emerald-700" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1">Horário de Funcionamento</p>
            <div className="text-xs text-stone-800 space-y-0.5 font-medium">
              {NAP.hours.map((h, i) => (
                <div key={i} className="flex justify-between gap-2">
                  <span className="text-stone-600">{h.days}:</span>
                  <span className="text-stone-900 font-semibold">{h.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3">
          <div className="p-2 bg-stone-100 text-stone-700 rounded-lg shrink-0 mt-0.5">
            <Mail className="w-4 h-4 text-emerald-700" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400">E-mail Direto</p>
            <a 
              href={`mailto:${NAP.email}`} 
              className="text-xs sm:text-sm font-semibold text-stone-900 hover:text-emerald-700 transition-colors break-all"
            >
              {NAP.email}
            </a>
          </div>
        </div>
      </div>

      {showMapButton && (
        <div className="mt-6 pt-5 border-t border-stone-100 flex flex-col sm:flex-row gap-2.5">
          <a
            href={NAP.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-stone-900 text-white font-semibold py-3 px-4 rounded-xl hover:bg-stone-800 transition-all text-xs shadow-xs"
          >
            <Navigation className="w-3.5 h-3.5 text-emerald-400" />
            <span>Traçar Rota no Maps</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 px-4 rounded-xl hover:bg-[#1ebe57] transition-all text-xs shadow-xs"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>Chamar WhatsApp</span>
          </a>
        </div>
      )}
    </div>
  );
}
