import { motion } from 'motion/react';
import { 
  MapPin, Phone, Clock, ArrowRight, Book, Award, Calendar, FileText, 
  GraduationCap, Library, Utensils, CheckCircle2, Star, ShieldCheck, 
  ThumbsUp, Quote, Sparkles, ChevronRight, HelpCircle 
} from 'lucide-react';
import { NAP, SERVICES, TESTIMONIALS, FAQS, TRUST_BADGES } from '../data/siteData';
import NAPBlock, { WhatsAppIcon } from '../components/NAPBlock';

interface HomePageProps {
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

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function HomePage({ onNavigate }: HomePageProps) {
  const whatsappUrl = `https://wa.me/${NAP.phoneRaw}?text=${encodeURIComponent("Olá! Gostaria de fazer um orçamento com a Encadernadora JR.")}`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="flex-1">
      
      {/* Hero Section with Parallax & Centered Mobile Layout */}
      <section className="relative overflow-hidden bg-slate-100 border-b border-stone-200 min-h-[75vh] lg:min-h-[85vh] flex items-center w-full max-w-full">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('${NAP.heroBgImage}')` }}
        ></div>
        {/* Light Overlay for readability and contrast */}
        <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/70 lg:to-transparent"></div>
        
        <div className="relative px-4 sm:px-6 md:px-12 py-10 sm:py-16 lg:py-24 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center z-10 overflow-hidden">
          
          {/* Top on Mobile / Right on Desktop: Hero Logo */}
          <div className="flex justify-center items-center order-1 lg:order-2 w-full max-w-full">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md flex items-center justify-center py-2 sm:py-4"
            >
              <img 
                src={NAP.logoUrl} 
                alt="Encadernadora JR Logo Oficial" 
                className="relative z-10 h-28 sm:h-36 md:h-48 lg:h-64 w-auto max-w-[85%] object-contain drop-shadow-md animate-float"
              />
            </motion.div>
          </div>

          {/* Bottom on Mobile / Left on Desktop: Text Content */}
          <div className="flex flex-col items-center lg:items-start order-2 lg:order-1 w-full max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Google Badge - Strictly 1 Line */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/95 px-3 py-1 rounded-md border border-stone-200 shadow-xs mb-4 sm:mb-5 text-xs whitespace-nowrap"
            >
              <GoogleIcon className="w-3.5 h-3.5 shrink-0" />
              <div className="flex gap-0.5 text-amber-500 shrink-0">
                <Star fill="currentColor" size={11} />
                <Star fill="currentColor" size={11} />
                <Star fill="currentColor" size={11} />
                <Star fill="currentColor" size={11} />
                <Star fill="currentColor" size={11} />
              </div>
              <span className="text-stone-800 font-semibold">5.0 no Google</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-stone-900 tracking-tight leading-[1.15] mb-4 text-balance"
            >
              Encadernação Profissional & Capa Dura no <span className="text-emerald-800">Mercado Novo</span>.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-stone-700 max-w-xl mb-6 sm:mb-8 leading-relaxed font-medium text-balance"
            >
              Trabalhos acadêmicos nas normas ABNT, capa dura de luxo, diário razão e cardápios resistentes. Mais de 20 anos de tradição e atendimento ágil em Belo Horizonte.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto max-w-md mx-auto lg:mx-0 justify-center lg:justify-start"
            >
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:bg-[#1ebe57] transition-all shadow-md active:scale-95 w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Orçamento WhatsApp</span>
              </a>
              <button 
                onClick={() => {
                  const el = document.getElementById('servicos');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-white text-stone-800 border border-stone-300 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:bg-stone-50 transition-colors shadow-xs cursor-pointer w-full sm:w-auto"
              >
                <span>Ver Serviços</span>
                <ArrowRight className="w-4 h-4 text-stone-500 shrink-0" />
              </button>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 px-6 md:px-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAFAF9] border border-slate-100">
            <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-display font-bold text-slate-900 text-lg">20+ Anos de História</h4>
              <p className="text-slate-600 text-sm font-medium">Tradição sólida no Mercado Novo</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAFAF9] border border-slate-100">
            <div className="p-3 bg-blue-50 text-blue-700 rounded-xl">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-display font-bold text-slate-900 text-lg">Normas ABNT & Fiscais</h4>
              <p className="text-slate-600 text-sm font-medium">Rigor técnico absoluto</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAFAF9] border border-slate-100">
            <div className="p-3 bg-amber-50 text-amber-700 rounded-xl">
              <Clock className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-display font-bold text-slate-900 text-lg">Entrega Expressa</h4>
              <p className="text-slate-600 text-sm font-medium">Opções rápidas para urgências</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAFAF9] border border-slate-100">
            <div className="p-3 bg-purple-50 text-purple-700 rounded-xl">
              <ThumbsUp className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-display font-bold text-slate-900 text-lg">Nota Máxima 5.0</h4>
              <p className="text-slate-600 text-sm font-medium">Satisfação garantida em BH</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with High Conversion Cards */}
      <section id="servicos" className="py-24 px-6 md:px-12 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-emerald-700 font-bold tracking-wider uppercase text-xs">Excelência em Cada Detalhe</span>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mt-2 mb-4 tracking-tight">
                Nossos Serviços de Encadernação
              </h2>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">
                Produzidos com maestria artesanal e acabamentos nobres. Solicite seu orçamento direto pelo WhatsApp com resposta imediata.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/servicos')}
              className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-emerald-700 transition-colors cursor-pointer group"
            >
              <span>Ver catálogo com especificações</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.iconName] || Book;
              return (
                <motion.article 
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group"
                >
                  {/* Image Header with color strip */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <div className={`h-2 w-full bg-gradient-to-r ${service.color} absolute top-0 left-0 z-20`}></div>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent"></div>
                    <div className={`absolute top-4 right-4 z-20 bg-white p-3 rounded-2xl shadow-lg text-slate-700 group-hover:text-white group-hover:bg-gradient-to-br ${service.color} transition-all duration-500`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                        {service.shortDesc}
                      </p>
                    </div>
                    
                    <a 
                      href={`https://wa.me/${NAP.phoneRaw}?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para: ${service.title}`)}`}
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
          </motion.div>
        </div>
      </section>

      {/* About Us / Location Section (Mercado Novo Highlight) */}
      <section id="quem-somos" className="py-24 px-6 md:px-12 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,211,102,0.1)_0%,transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl group border-2 border-slate-800"
          >
            <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src={NAP.mercadoNovoImage} 
              alt="Oficina Encadernadora JR no Mercado Novo" 
              className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-500 text-white p-3 rounded-xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-white">Mercado Novo - Loja 1249</h4>
                  <p className="text-emerald-100 text-xs font-medium">Corredor O, 2º Piso | Belo Horizonte - MG</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 bg-stone-800 text-stone-200 px-3 py-1 rounded-md border border-stone-700 mb-6 text-xs font-bold uppercase tracking-wider whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Tradição & Qualidade</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold mb-6 tracking-tight leading-tight text-balance">
              Mais de <span className="text-emerald-400">20 anos</span> de história no Mercado Novo.
            </h2>
            
            <div className="space-y-4 text-base text-slate-300 font-medium leading-relaxed mb-8">
              <p>
                A Encadernadora JR é um símbolo de resistência e amor pelo ofício da encadernação em Belo Horizonte. Localizados no icônico <strong>Mercado Novo</strong>, unimos a tradição do trabalho manual com a agilidade que os tempos modernos exigem.
              </p>
              <p>
                Ao longo de mais de duas décadas, construímos nossa reputação entregando excelência em cada página, capa e costura. Seja para proteger documentos importantes, eternizar memórias em livros personalizados ou garantir a durabilidade de cardápios e teses.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 w-full border-t border-white/10 pt-8 mb-8">
              <div>
                <h4 className="text-3xl font-display font-bold text-white mb-1">20+</h4>
                <p className="text-emerald-400 text-xs font-medium uppercase tracking-wider">Anos de Experiência</p>
              </div>
              <div>
                <h4 className="text-3xl font-display font-bold text-white mb-1">10k+</h4>
                <p className="text-emerald-400 text-xs font-medium uppercase tracking-wider">Projetos Entregues</p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('/sobre')}
              className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-6 py-3 rounded-xl hover:bg-slate-100 transition-colors text-sm cursor-pointer"
            >
              <span>Conhecer Nossa História Completa</span>
              <ChevronRight className="w-4 h-4 text-emerald-600" />
            </button>
          </motion.div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-24 px-6 md:px-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-emerald-700 font-bold tracking-wider uppercase text-xs">Avaliações Verificadas</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mt-2 mb-4 tracking-tight">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="text-slate-600 text-lg font-medium leading-relaxed">
              A satisfação de quem confia no nosso trabalho há mais de 20 anos é a nossa maior garantia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-[#FAFAF9] p-6 rounded-3xl border border-slate-200 relative flex flex-col justify-between"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-amber-200 opacity-60" />
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} fill="currentColor" size={16} />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm italic mb-6 relative z-10 font-medium leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-base">{testimonial.name}</h4>
                  <p className="text-emerald-700 font-semibold text-xs">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (Crucial for Google SEO & People Also Ask) */}
      <section className="py-24 px-6 md:px-12 bg-[#FAFAF9]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-700 font-bold tracking-wider uppercase text-xs">Tire Suas Dúvidas</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mt-2 mb-4 tracking-tight">
              Dúvidas Frequentes sobre Encadernação
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-medium">
              Informações transparentes sobre prazos, normas ABNT, materiais e atendimento.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
              >
                <h3 className="font-display font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section with verified NAP - Perfectly Centered on Mobile */}
      <section id="localizacao" className="py-14 sm:py-24 px-4 sm:px-6 md:px-12 bg-white border-t border-stone-200 overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12 w-full max-w-full">
          <div className="text-center max-w-3xl mx-auto px-2">
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-800 block mb-1 whitespace-nowrap">Mercado Novo de BH</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-stone-900 mt-1 mb-3 tracking-tight text-balance">
              Onde nos encontrar
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-stone-600 font-medium leading-relaxed text-balance">
              Visite nossa oficina no histórico Mercado Novo. Fácil acesso, estacionamento próximo e atendimento direto com os especialistas.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full max-w-full">
            <div className="lg:col-span-5 w-full max-w-xl mx-auto lg:mx-0 flex justify-center">
              <NAPBlock className="w-full" />
            </div>

            <div className="lg:col-span-7 w-full max-w-xl mx-auto lg:mx-0">
              <div className="aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-stone-200 shadow-md bg-stone-100 w-full">
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
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,211,102,0.15)_0%,transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-6 tracking-tight">
            Pronto para dar vida ao seu projeto?
          </h2>
          <p className="text-xl text-slate-300 mb-10 font-medium max-w-2xl mx-auto">
            Nossa equipe está pronta para te atender no WhatsApp. Orçamentos rápidos, sem compromisso e com a melhor qualidade de BH.
          </p>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-[#1ebe57] transition-all shadow-[0_10px_40px_rgba(37,211,102,0.4)] transform hover:-translate-y-1"
          >
            <WhatsAppIcon className="w-6 h-6" />
            <span>Chamar no WhatsApp Agora</span>
          </a>
        </div>
      </section>

    </div>
  );
}
