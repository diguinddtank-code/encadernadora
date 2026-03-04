import { MapPin, Phone, Clock, ArrowRight, Book, Award, Calendar, FileText, GraduationCap, Library, Utensils, CheckCircle2, Instagram, Star, ShieldCheck, ThumbsUp, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function App() {
  const whatsappNumber = "5531987702774";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de fazer um orçamento com a Encadernadora JR.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const logoUrl = "https://i.imgur.com/aD9YWAr.png";

  const services = [
    {
      title: "Encadernação de Capa Dura",
      desc: "Proteção robusta e acabamento premium para fascículos, coleções e documentos importantes. Materiais de alta durabilidade como percalux e couro sintético.",
      icon: <Book className="w-6 h-6" />,
      image: "https://i.imgur.com/VYufMUk.jpeg",
      whatsappText: "Orçamento para Capa Dura",
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Encadernação de TCC e Teses",
      desc: "Finalize sua graduação com excelência. Encadernação seguindo rigorosamente as normas da ABNT e das principais universidades de Minas Gerais.",
      icon: <GraduationCap className="w-6 h-6" />,
      image: "https://i.imgur.com/ax3BBS8.jpeg",
      whatsappText: "Orçamento para TCC",
      color: "from-amber-500 to-orange-400"
    },
    {
      title: "Porta Diplomas",
      desc: "Eternize sua conquista acadêmica. Confeccionamos porta diplomas revestidos em veludo ou percalux, com gravação em hot stamping.",
      icon: <Award className="w-6 h-6" />,
      image: "https://i.imgur.com/LtC4S4P.jpeg",
      whatsappText: "Orçamento para Porta Diplomas",
      color: "from-purple-500 to-pink-400"
    },
    {
      title: "Agendas Personalizadas",
      desc: "Organização com a sua identidade. Agendas corporativas e planners com capa dura personalizada com a sua logomarca.",
      icon: <Calendar className="w-6 h-6" />,
      image: "https://i.imgur.com/UEN7zCf.jpeg",
      whatsappText: "Orçamento para Agendas",
      color: "from-emerald-500 to-teal-400"
    },
    {
      title: "Diário Razão e Livros Fiscais",
      desc: "Segurança para sua contabilidade. Encadernação de livros fiscais com costura reforçada, garantindo o cumprimento das exigências legais.",
      icon: <FileText className="w-6 h-6" />,
      image: "https://i.imgur.com/VYufMUk.jpeg",
      whatsappText: "Orçamento para Livros Fiscais",
      color: "from-slate-600 to-slate-400"
    },
    {
      title: "Livros Personalizados",
      desc: "Impressão e encadernação sob demanda para autores independentes, biografias, álbuns de família e edições comemorativas.",
      icon: <Library className="w-6 h-6" />,
      image: "https://i.imgur.com/JQVDWw2.jpeg",
      whatsappText: "Orçamento para Livros",
      color: "from-rose-500 to-red-400"
    },
    {
      title: "Cardápios para Restaurantes",
      desc: "Resistência e sofisticação. Cardápios duráveis em capa dura, com plásticos internos substituíveis e resistentes à umidade.",
      icon: <Utensils className="w-6 h-6" />,
      image: "https://i.imgur.com/3grstdw.jpeg",
      whatsappText: "Orçamento para Cardápios",
      color: "from-yellow-500 to-amber-400"
    }
  ];

  const testimonials = [
    {
      name: "Mariana Silva",
      role: "Estudante de Direito",
      text: "Salvaram meu TCC! Fizeram a capa dura em tempo recorde e ficou perfeito. A gravação dourada ficou impecável. Atendimento nota 1000 no WhatsApp."
    },
    {
      name: "Carlos Eduardo",
      role: "Dono de Restaurante",
      text: "Os cardápios ficaram incrivelmente sofisticados. O material é muito resistente, fácil de limpar e valorizou muito a apresentação dos nossos pratos."
    },
    {
      name: "Ana Paula",
      role: "Contadora",
      text: "Sempre faço os livros fiscais do escritório com a Encadernadora JR. Serviço impecável, costura forte e muita confiança no cumprimento dos prazos."
    }
  ];

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
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-slate-900 font-sans">
      
      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#1ebe57] hover:scale-110 transition-all duration-300 group"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute w-full h-full bg-[#25D366] rounded-full animate-ping opacity-75"></span>
        <WhatsAppIcon className="w-8 h-8 relative z-10" />
      </a>

      {/* Header */}
      <header className="py-4 px-4 md:px-12 flex justify-between items-center border-b border-slate-200 sticky top-0 bg-white/90 backdrop-blur-md z-40 shadow-sm">
        <div className="flex items-center">
          <img src={logoUrl} alt="Encadernadora JR Logo" className="h-8 md:h-12 object-contain" />
        </div>
        
        {/* Mobile CTA */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#1ebe57] transition-all shadow-md font-bold text-sm"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>Orçamento</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-sm">
          <a href="#servicos" className="text-slate-600 hover:text-emerald-600 transition-colors">Serviços</a>
          <a href="#depoimentos" className="text-slate-600 hover:text-emerald-600 transition-colors">Depoimentos</a>
          <a href="#localizacao" className="text-slate-600 hover:text-emerald-600 transition-colors">Localização</a>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-2.5 rounded-lg hover:bg-[#1ebe57] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>Fazer Orçamento</span>
          </a>
        </nav>
      </header>

      <main className="flex-1">
        
        {/* Hero Section with Parallax & Colorful Logo */}
        <section className="relative overflow-hidden bg-slate-100 border-b border-slate-200 min-h-[85vh] flex items-center">
          {/* Parallax Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url('https://i.imgur.com/BGW4JJz.jpeg')` }}
          ></div>
          {/* Light Overlay for readability and contrast with logo */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
          
          <div className="relative px-6 md:px-12 py-20 lg:py-32 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center text-center lg:text-left z-10">
            
            {/* Left Column: Text Content */}
            <div className="flex flex-col items-center lg:items-start order-2 lg:order-1">
              {/* Google Badge */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/60 shadow-sm mb-8"
              >
                <GoogleIcon className="w-4 h-4" />
                <div className="flex gap-0.5 text-amber-400">
                  <Star fill="currentColor" size={12} />
                  <Star fill="currentColor" size={12} />
                  <Star fill="currentColor" size={12} />
                  <Star fill="currentColor" size={12} />
                  <Star fill="currentColor" size={12} />
                </div>
                <span className="text-slate-700 text-xs font-semibold tracking-wide pr-1">5.0 Avaliações</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold leading-[1.1] text-slate-900 tracking-tight mb-6"
              >
                Encadernação <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Profissional</span> e Sob Medida.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg md:text-xl text-slate-600 max-w-2xl font-medium leading-relaxed mb-10"
              >
                Especialistas em TCCs, livros fiscais, cardápios e capa dura. Qualidade impecável e agilidade para quem não tem tempo a perder.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
              >
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#1ebe57] transition-all shadow-[0_10px_30px_rgba(37,211,102,0.3)] transform hover:-translate-y-1"
                >
                  <WhatsAppIcon className="w-6 h-6" />
                  Orçamento via WhatsApp
                </a>
                <a 
                  href="#servicos"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all"
                >
                  Ver Serviços
                </a>
              </motion.div>
            </div>

            {/* Right Column: Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
              className="flex justify-center lg:justify-end w-full mb-12 lg:mb-0 order-1 lg:order-2"
            >
              <img 
                src={logoUrl} 
                alt="Encadernadora JR" 
                className="w-full max-w-[280px] md:max-w-md lg:max-w-lg xl:max-w-xl object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)] animate-float"
              />
            </motion.div>
          </div>
        </section>

        {/* Trust Badges Section */}
        <section className="py-12 bg-white border-b border-slate-200 relative z-20 -mt-6 rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg">Tradição</h3>
                <p className="text-sm text-slate-500 font-medium">Anos de experiência no mercado</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg">Qualidade</h3>
                <p className="text-sm text-slate-500 font-medium">Materiais premium e duráveis</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg">Agilidade</h3>
                <p className="text-sm text-slate-500 font-medium">Entrega rápida e pontual</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center">
                  <ThumbsUp className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg">Satisfação</h3>
                <p className="text-sm text-slate-500 font-medium">Centenas de clientes felizes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section (High Conversion Animated Cards with Photos) */}
        <section id="servicos" className="py-24 px-6 md:px-12 bg-grid-pattern" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 id="services-heading" className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mb-6 tracking-tight">
                Soluções em Encadernação
              </h2>
              <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
                Trabalhos manuais e maquinários de alta precisão. Escolha o serviço ideal e fale conosco agora mesmo.
              </p>
            </div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, idx) => (
                <motion.article 
                  key={idx} 
                  variants={itemVariants}
                  className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 transform hover:-translate-y-2"
                >
                  {/* Colorful Top Border */}
                  <div className={`h-2 w-full bg-gradient-to-r ${service.color}`}></div>

                  {/* Image Header */}
                  <div className="h-56 overflow-hidden relative bg-slate-100">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className={`absolute top-4 right-4 z-20 bg-white p-3 rounded-2xl shadow-lg text-slate-700 group-hover:text-white group-hover:bg-gradient-to-br ${service.color} transition-all duration-500`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed mb-8 flex-1 font-medium">
                      {service.desc}
                    </p>
                    
                    <a 
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para: ${service.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden group/btn inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-bold text-lg py-4 px-4 rounded-xl transition-all w-full shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)] hover:-translate-y-0.5"
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-500 to-teal-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <WhatsAppIcon className="w-5 h-5 relative z-10" />
                      <span className="relative z-10">{service.whatsappText}</span>
                      <ArrowRight className="w-4 h-4 relative z-10 opacity-0 -ml-4 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all duration-300" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* About Us / Location Section */}
        <section id="quem-somos" className="py-24 px-6 md:px-12 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,211,102,0.1)_0%,transparent_50%)]"></div>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
            >
              <div className="absolute inset-0 bg-emerald-500/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src="https://i.imgur.com/lvR4geN.jpeg" 
                alt="Oficina Encadernadora JR no Mercado Novo" 
                className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-500 text-white p-3 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl text-white">Mercado Novo</h4>
                    <p className="text-emerald-100 font-medium">Coração de Belo Horizonte</p>
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
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-6">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-50 text-sm font-bold tracking-wide uppercase">Tradição & Qualidade</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-8 tracking-tight leading-tight">
                Mais de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">20 anos</span> de história.
              </h2>
              
              <div className="space-y-6 text-lg text-slate-300 font-medium leading-relaxed mb-10">
                <p>
                  A Encadernadora JR é um símbolo de resistência e amor pelo ofício da encadernação em Belo Horizonte. Localizados no icônico <strong>Mercado Novo</strong>, unimos a tradição do trabalho manual com a agilidade que os tempos modernos exigem.
                </p>
                <p>
                  Ao longo de mais de duas décadas, construímos nossa reputação entregando excelência em cada página, capa e costura. Seja para proteger documentos importantes, eternizar memórias em livros personalizados ou garantir a durabilidade de cardápios e teses, nosso compromisso é com a sua satisfação.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 w-full border-t border-white/10 pt-8">
                <div>
                  <h4 className="text-4xl font-display font-bold text-white mb-2">20+</h4>
                  <p className="text-emerald-400 font-medium">Anos de Experiência</p>
                </div>
                <div>
                  <h4 className="text-4xl font-display font-bold text-white mb-2">10k+</h4>
                  <p className="text-emerald-400 font-medium">Projetos Entregues</p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Testimonials Section */}
        <section id="depoimentos" className="py-24 px-6 md:px-12 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mb-6 tracking-tight">
                O que dizem nossos clientes
              </h2>
              <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
                A satisfação de quem confia no nosso trabalho é a nossa maior garantia de qualidade.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#FAFAF9] p-8 rounded-3xl border border-slate-200 relative"
                >
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-amber-200 opacity-50" />
                  <div className="flex gap-1 text-amber-400 mb-6">
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                  </div>
                  <p className="text-slate-700 text-lg italic mb-8 relative z-10 font-medium">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                    <p className="text-emerald-600 font-semibold text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
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
              Chamar no WhatsApp Agora
            </a>
          </div>
        </section>

        {/* Location Section */}
        <section id="localizacao" className="py-24 px-6 md:px-12 bg-[#FAFAF9] border-t border-slate-200">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mb-6 tracking-tight">
                  Onde nos encontrar
                </h2>
                <p className="text-slate-600 text-xl font-medium leading-relaxed">
                  Visite nossa oficina no histórico Mercado Novo. Fácil acesso, estacionamento próximo e atendimento direto com os especialistas.
                </p>
              </div>
              
              <div className="space-y-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <div className="flex items-start gap-5">
                  <div className="mt-1 bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Endereço</h4>
                    <address className="text-slate-600 text-lg leading-relaxed not-italic font-medium">
                      Mercado Novo - Corredor O, Loja 1249<br />
                      Av. Olegário Maciel, 742 - Centro<br />
                      Belo Horizonte - MG, 30180-110
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="mt-1 bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Tempo de Chegada</h4>
                    <p className="text-slate-600 text-lg font-medium">
                      Aproximadamente 16 a 29 minutos da região central.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="mt-1 bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Contato</h4>
                    <p className="text-slate-600 text-lg font-bold">
                      (31) 98770-2774
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a 
                  href="https://maps.google.com/?q=Mercado+Novo+Belo+Horizonte+Av.+Olegário+Maciel,+742"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-800 transition-colors shadow-lg"
                >
                  <MapPin className="w-5 h-5" />
                  Traçar Rota no Google Maps
                </a>
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border-8 border-white shadow-2xl bg-slate-100">
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
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-6 md:px-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <img src={logoUrl} alt="Encadernadora JR Logo" className="h-10 object-contain brightness-0 invert opacity-80" />
          </div>
          <p className="text-sm font-medium">
            &copy; {new Date().getFullYear()} Encadernadora JR. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all">
              <WhatsAppIcon className="w-5 h-5" />
              <span className="sr-only">WhatsApp</span>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
