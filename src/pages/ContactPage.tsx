import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Navigation, Bus, Car, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { NAP, SERVICES } from '../data/siteData';
import NAPBlock, { WhatsAppIcon } from '../components/NAPBlock';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [selectedService, setSelectedService] = useState('tcc');
  const [userName, setUserName] = useState('');
  const [pageCount, setPageCount] = useState('80');
  const [urgency, setUrgency] = useState('normal');
  const [additionalNotes, setAdditionalNotes] = useState('');

  const currentServiceObj = SERVICES.find(s => s.id === selectedService) || SERVICES[0];

  const handleWhatsAppSend = (e: FormEvent) => {
    e.preventDefault();
    const urgencyLabel = urgency === 'urgente' ? 'URGENTE (Preciso o mais rápido possível)' : 'Prazo normal (24h a 48h)';
    const text = `Olá! Gostaria de um orçamento via site:
• Nome: ${userName || 'Cliente'}
• Serviço: ${currentServiceObj.title}
• Qtd. de Páginas: ${pageCount}
• Prazo Desejado: ${urgencyLabel}
${additionalNotes ? `• Observações: ${additionalNotes}` : ''}
Aguardo retorno!`;

    window.open(`https://wa.me/${NAP.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-[#FAFAF9] text-slate-900">
      
      {/* Breadcrumb Header */}
      <div className="bg-slate-100 border-b border-slate-200 py-3 px-6 md:px-12 text-xs font-semibold text-slate-500">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <button onClick={() => onNavigate('/')} className="hover:text-emerald-700 cursor-pointer">
            Início
          </button>
          <span>/</span>
          <span className="text-slate-900 font-bold">Contato</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-12 md:py-20 px-6 md:px-12 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-900 border border-emerald-200 px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase mb-5 whitespace-nowrap">
            <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>Mercado Novo & Atendimento</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-stone-900 tracking-tight leading-[1.15] max-w-4xl mb-5 text-balance">
            Onde Estamos & Como Fazer Seu Orçamento
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-stone-700 max-w-3xl leading-relaxed font-medium text-balance">
            Visite nossa oficina no histórico <strong>Mercado Novo</strong> em Belo Horizonte ou solicite seu orçamento imediato pelo WhatsApp com resposta rápida da nossa equipe.
          </p>
        </div>
      </section>

      {/* Main Grid: Form / Simulator on Left, NAP on Right - Centered on Mobile */}
      <section className="py-8 sm:py-16 px-3.5 sm:px-6 md:px-12 max-w-7xl mx-auto w-full max-w-full">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start w-full max-w-full">
          
          {/* Left Column: Interactive WhatsApp Quote Simulator - Centered */}
          <div className="lg:col-span-7 bg-white p-4 sm:p-7 md:p-10 rounded-2xl sm:rounded-3xl border border-stone-200 shadow-xs w-full max-w-xl mx-auto lg:mx-0">
            <div className="flex items-start sm:items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg sm:text-2xl font-display font-bold text-stone-900 leading-tight">
                  Simulador de Orçamento Rápido
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 font-medium mt-0.5">
                  Preencha os dados e inicie a conversa no WhatsApp
                </p>
              </div>
            </div>

            <form onSubmit={handleWhatsAppSend} className="space-y-4 sm:space-y-6">
              {/* Name */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1.5">
                  Seu Nome ou Nome da Empresa
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Ex: João da Silva / Escritório Modelo"
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-sm text-stone-800"
                />
              </div>

              {/* Service Select */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1.5">
                  Tipo de Serviço Desejado
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-sm text-stone-800 bg-white"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pages & Urgency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1.5">
                    Qtd. Aproximada de Páginas
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={pageCount}
                    onChange={(e) => setPageCount(e.target.value)}
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-sm text-stone-800"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1.5">
                    Urgência do Pedido
                  </label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-sm text-stone-800 bg-white"
                  >
                    <option value="normal">Prazo Padrão (24h a 48h)</option>
                    <option value="urgente">Expressa (Mesmo Dia)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1.5">
                  Observações (Cor da capa, gravação dourada, etc.)
                </label>
                <textarea
                  rows={3}
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  placeholder="Ex: Capa preta com gravação em dourado para TCC..."
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-sm text-stone-800"
                ></textarea>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 sm:py-4 px-5 rounded-xl font-bold text-sm sm:text-base hover:bg-[#1ebe57] transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Enviar Orçamento no WhatsApp</span>
              </button>

              <div className="flex items-center gap-1.5 text-xs text-stone-500 justify-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Resposta ágil e sem compromisso.</span>
              </div>
            </form>
          </div>

          {/* Right Column: Verified NAP Block - Centered */}
          <div className="lg:col-span-5 w-full max-w-xl mx-auto lg:mx-0 flex justify-center">
            <NAPBlock className="w-full lg:sticky lg:top-28" />
          </div>

        </div>
      </section>

      {/* Map & How to get there */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 md:px-12 bg-white border-t border-stone-200 overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12 w-full max-w-full">
          
          <div className="text-center max-w-3xl mx-auto px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-stone-900 tracking-tight text-balance">
              Como Chegar à Nossa Oficina no Mercado Novo
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-2 font-medium text-balance">
              Estamos no centro de Belo Horizonte, em um dos pontos mais acessíveis e tradicionais da capital mineira.
            </p>
          </div>

          {/* Directions Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-xl md:max-w-none mx-auto">
            <div className="bg-[#FAFAF9] p-5 sm:p-6 rounded-2xl border border-stone-200">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                <Navigation className="w-4 h-4" />
              </div>
              <h3 className="text-base font-display font-bold text-stone-900 mb-1.5">No Mercado Novo</h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-medium">
                Suba ao <strong>2º piso</strong>. Siga pelo <strong>Corredor O</strong> até a <strong>Loja 1249</strong>. Acesso direto pelas rampas da Olegário Maciel.
              </p>
            </div>

            <div className="bg-[#FAFAF9] p-5 sm:p-6 rounded-2xl border border-stone-200">
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-3">
                <Car className="w-4 h-4" />
              </div>
              <h3 className="text-base font-display font-bold text-stone-900 mb-1.5">De Carro ou App</h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-medium">
                Endereço GPS: <strong>Av. Olegário Maciel, 742 - Centro</strong>. Há estacionamentos rotativos credenciados na porta e nas ruas laterais.
              </p>
            </div>

            <div className="bg-[#FAFAF9] p-5 sm:p-6 rounded-2xl border border-stone-200">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
                <Bus className="w-4 h-4" />
              </div>
              <h3 className="text-base font-display font-bold text-stone-900 mb-1.5">Transporte Público</h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-medium">
                A 3 minutos a pé da <strong>Praça Raul Soares</strong> e de dezenas de linhas de ônibus e Move da região central.
              </p>
            </div>
          </div>

          {/* Google Maps Embed - Centered */}
          <div className="aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-stone-200 shadow-md bg-stone-100 w-full max-w-5xl mx-auto">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.966779342718!2d-43.94544838450166!3d-19.92582998660662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e4f5555555%3A0x1234567890abcdef!2sMercado%20Novo!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização da Encadernadora JR no Mercado Novo"
            ></iframe>
          </div>

        </div>
      </section>

    </div>
  );
}
