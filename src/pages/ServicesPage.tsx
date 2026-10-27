import { useState } from 'react';
import { motion } from 'motion/react';
import { Book, GraduationCap, Award, Calendar, FileText, Library, Utensils, CheckCircle2, Clock, Sparkles, Filter, ArrowRight } from 'lucide-react';
import { SERVICES, NAP, FAQS } from '../data/siteData';
import NAPBlock, { WhatsAppIcon } from '../components/NAPBlock';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

const iconMap: Record<string, any> = {
  Book,
  GraduationCap,
  Award,
  Calendar,
  FileText,
  Library,
  Utensils
};

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'academico' | 'corporativo' | 'personalizado'>('all');

  const filteredServices = selectedCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === selectedCategory);

  return (
    <div className="bg-[#FAFAF9] text-slate-900">
      
      {/* Breadcrumb Header */}
      <div className="bg-slate-100 border-b border-slate-200 py-3 px-6 md:px-12 text-xs font-semibold text-slate-500">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <button onClick={() => onNavigate('/')} className="hover:text-emerald-700 cursor-pointer">
            Início
          </button>
          <span>/</span>
          <span className="text-slate-900 font-bold">Serviços</span>
        </div>
      </div>

      {/* Page Title & Intro */}
      <section className="py-12 md:py-20 px-6 md:px-12 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-900 border border-emerald-200 px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase mb-5 whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>Catálogo Especializado</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-stone-900 tracking-tight leading-[1.15] max-w-4xl mb-5 text-balance">
            Serviços de Encadernação com Padrão de Excelência
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-stone-700 max-w-3xl leading-relaxed font-medium mb-8 text-balance">
            Da capa dura solene para TCCs e teses acadêmicas à encadernação contábil exigida pela Junta Comercial e cardápios para o polo gastronômico de BH. Conheça nossos acabamentos.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 mr-2 uppercase tracking-wider">
              <Filter className="w-3.5 h-3.5" />
              Filtrar por:
            </div>
            {[
              { id: 'all', label: 'Todos os Serviços (7)' },
              { id: 'academico', label: 'Acadêmico (TCC & Diplomas)' },
              { id: 'corporativo', label: 'Corporativo & Fiscal (Livros & Cardápios)' },
              { id: 'personalizado', label: 'Personalizado & Capa Dura' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid with Detailed Cards */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Book;
            const waQuoteUrl = `https://wa.me/${NAP.phoneRaw}?text=${encodeURIComponent(`Olá! Gostaria de um orçamento detalhado para o serviço de: ${service.title}`)}`;

            return (
              <motion.article
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                {/* Image Container with Top Border Gradient */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <div className={`h-2 w-full bg-gradient-to-r ${service.color} absolute top-0 left-0 z-20`}></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                  <div className={`absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-lg text-slate-800`}>
                    <Icon className="w-5 h-5 text-emerald-600" />
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                      {service.fullDesc}
                    </p>

                    {/* Specs List */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6 space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Especificações Técnicas:</p>
                      {service.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* Delivery & Recommended for */}
                    <div className="space-y-2 text-xs text-slate-500 mb-6">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        <span>Prazo médio: <strong className="text-slate-900">{service.prazo}</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Conversion Button */}
                  <a
                    href={waQuoteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden group/btn inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-bold text-sm py-4 px-4 rounded-xl transition-all w-full shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.3)] hover:-translate-y-0.5"
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-500 to-teal-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <WhatsAppIcon className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">{service.whatsappText}</span>
                    <ArrowRight className="w-4 h-4 relative z-10 opacity-0 -ml-4 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all duration-300" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Services FAQ */}
      <section className="py-20 px-6 md:px-12 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Perguntas Frequentes sobre Nossos Serviços
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-2 font-medium">
              Tudo o que você precisa saber antes de solicitar sua encadernação.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.slice(0, 4).map((faq, i) => (
              <div key={i} className="bg-[#FAFAF9] p-6 rounded-2xl border border-slate-200">
                <h4 className="font-display font-bold text-slate-900 text-base md:text-lg mb-2">
                  {faq.question}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAP Block */}
      <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
        <NAPBlock />
      </section>

    </div>
  );
}
