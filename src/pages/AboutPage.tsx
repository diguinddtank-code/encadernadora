import { motion } from 'motion/react';
import { ShieldCheck, MapPin, Award, CheckCircle2, HeartHandshake, History, Sparkles, BookOpen, Clock, Users } from 'lucide-react';
import { NAP } from '../data/siteData';
import NAPBlock, { WhatsAppIcon } from '../components/NAPBlock';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const whatsappUrl = `https://wa.me/${NAP.phoneRaw}?text=${encodeURIComponent("Olá! Conheci a história da Encadernadora JR no site e gostaria de tirar uma dúvida sobre encadernação.")}`;

  return (
    <div className="bg-[#FAFAF9] text-slate-900">
      
      {/* Breadcrumb Header */}
      <div className="bg-slate-100 border-b border-slate-200 py-3 px-6 md:px-12 text-xs font-semibold text-slate-500">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <button onClick={() => onNavigate('/')} className="hover:text-emerald-700 cursor-pointer">
            Início
          </button>
          <span>/</span>
          <span className="text-slate-900 font-bold">Sobre Nós</span>
        </div>
      </div>

      {/* Page Title & Intro */}
      <section className="py-12 md:py-20 px-6 md:px-12 bg-white border-b border-stone-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-900 border border-emerald-200 px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase mb-5 whitespace-nowrap">
            <History className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>Nossa História & Ofício</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-stone-900 tracking-tight leading-[1.15] max-w-4xl mb-5 text-balance">
            Mais de <span className="text-emerald-800">20 anos</span> de dedicação à encadernação em BH.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-stone-700 max-w-3xl leading-relaxed font-medium text-balance">
            No coração de Belo Horizonte, dentro dos corredores tradicionais do histórico <strong>Mercado Novo</strong>, preservamos com dedicação a nobre arte do livro físico, da capa dura inquebrável e da costura artesanal.
          </p>
        </div>
      </section>

      {/* Main Section: Tradição e Qualidade com a Foto do Mercado Novo */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Photo side: Mercado Novo */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group relative">
              <img 
                src={NAP.mercadoNovoImage} 
                alt="Oficina Encadernadora JR no Mercado Novo em Belo Horizonte" 
                className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-500 text-white p-2.5 rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">Mercado Novo - Loja 1249</h3>
                    <p className="text-xs text-slate-200">Corredor O, 2º Piso | Av. Olegário Maciel, 742 - BH</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Float badge */}
            <div className="absolute -top-6 -right-4 md:-right-6 bg-slate-900 text-white p-4 rounded-2xl shadow-xl border border-slate-800 hidden sm:block">
              <div className="text-3xl font-display font-extrabold text-emerald-400">20+</div>
              <div className="text-xs text-slate-300 font-semibold">Anos de Ofício em BH</div>
            </div>
          </motion.div>

          {/* Text Story side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-900 border border-emerald-200 px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span>Tradição e Qualidade</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-stone-900 tracking-tight text-balance">
              Uma história construída página por página no Mercado Novo
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed font-medium text-base">
              <p>
                A <strong>Encadernadora JR</strong> nasceu com um propósito claro: entregar a máxima segurança e beleza visual para documentos, livros e trabalhos acadêmicos que não podem se deteriorar com o tempo.
              </p>
              <p>
                Escolhemos o <strong>Mercado Novo de Belo Horizonte</strong> como nossa casa há mais de duas décadas. Um espaço icônico da cultura mineira, que hoje é sinônimo de convivência, gastronomia e respeito aos ofícios clássicos.
              </p>
              <p>
                Enquanto o mundo se tornava digital, nós aprimoramos o toque, a costura e o calor da gravação em <em>hot stamping</em>. Cada TCC entregue a tempo da colação de grau, cada livro fiscal que respalda uma empresa na Junta Comercial e cada cardápio que resiste à rotina agitada dos bares de BH carrega nosso padrão inegociável de qualidade.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-200">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
                <span className="block text-2xl font-display font-bold text-emerald-700">100%</span>
                <span className="text-xs text-slate-500 font-semibold">Normas ABNT</span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
                <span className="block text-2xl font-display font-bold text-emerald-700">10.000+</span>
                <span className="text-xs text-slate-500 font-semibold">TCCs & Livros</span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center col-span-2 sm:col-span-1">
                <span className="block text-2xl font-display font-bold text-amber-500">5.0 ★</span>
                <span className="text-xs text-slate-500 font-semibold">Avaliação Google</span>
              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* Pillars of Quality */}
      <section className="py-20 px-6 md:px-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
              Por que confiar na Encadernadora JR?
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-medium">
              Conheça os diferenciais que nos tornaram referência em encadernação artesanal e capa dura em toda Minas Gerais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#FAFAF9] p-8 rounded-3xl border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Acabamento Nobre</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Materiais selecionados de primeira linha, como percalux resinado, veludo legítimo e papelão de alta densidade anti-empenamento.
              </p>
            </div>

            <div className="bg-[#FAFAF9] p-8 rounded-3xl border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Prazo Cumprido à Risca</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Entendemos prazos acadêmicos e fiscais. Se combinamos um horário de entrega, seu trabalho estará pronto e impecável.
              </p>
            </div>

            <div className="bg-[#FAFAF9] p-8 rounded-3xl border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Costura Reforçada</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Diferente de encadernações frágeis coladas a quente, nossas encadernações têm amarração e costura de mestre que não soltam folhas.
              </p>
            </div>

            <div className="bg-[#FAFAF9] p-8 rounded-3xl border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Atendimento Direto</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Aqui você fala diretamente com quem produz. Tiramos suas dúvidas no WhatsApp ou no balcão do Mercado Novo com toda a atenção.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Official NAP Block Section */}
      <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Nossos Dados Oficiais de Localização (NAP)
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-2 font-medium">
            Venha nos visitar no Mercado Novo ou faça seu contato direto.
          </p>
        </div>

        <NAPBlock />
      </section>

      {/* Fast CTA */}
      <section className="py-16 px-6 md:px-12 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight">
            Quer um trabalho de encadernação impecável?
          </h2>
          <p className="text-slate-300 text-base md:text-lg font-medium">
            Fale conosco agora mesmo no WhatsApp e receba seu orçamento personalizado em minutos.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1ebe57] transition-all shadow-[0_10px_30px_rgba(37,211,102,0.4)]"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>Fazer Orçamento no WhatsApp</span>
          </a>
        </div>
      </section>

    </div>
  );
}
