import Image from "next/image"
import { FaInstagram, FaLinkedin, FaDribbble, FaBriefcase, FaArrowRight } from "react-icons/fa"
import Header from "../components/header"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"

const portfolioItems = [
  {
    id: 1,
    title: "PRÉ-CAJU 2024",
    category: "Direção de Arte / Social Media",
    src: "/xodo.png", 
    desc: "A criação de peças para a cobertura do Pré-Caju 2024 envolve desenvolver uma identidade visual vibrante e conectada ao espírito do evento. Isso inclui materiais para redes sociais, impressos, audiovisuais e personalização de trios elétricos, sempre pensando no engajamento do público e na valorização da experiência dos foliões. É essencial planejar estrategicamente para promover a festa e destacar elementos culturais e locais.",
  },
  {
    id: 2,
    title: "GIROCAR",
    category: "Identidade Visual / Branding",
    src: "/girocar.png",
    desc: "Girocar é uma empresa de transporte focada em oferecer serviços seguros, confiáveis e eficientes para atender às necessidades de seus clientes. Com uma abordagem centrada na qualidade e no bem-estar dos passageiros, a Girocar combina conforto, pontualidade e excelência em atendimento. Seja para deslocamentos diários, viagens ou transporte corporativo, a empresa se destaca por sua frota moderna e equipe treinada, garantindo uma experiência de transporte tranquila e satisfatória. Girocar: movendo você com cuidado e dedicação!",
  },
  {
    id: 3,
    title: "ÍNTEGRA",
    category: "Criação de Marca / Logotipo",
    src: "/integra.png",
    desc: "A marca Integra Publicidade e Propaganda reflete união, criatividade e eficiência, com foco em soluções completas e inovadoras. Seu nome e identidade visual simbolizam conexão, colaboração e dinamismo, posicionando a agência como parceira estratégica para conectar marcas ao público com autenticidade e impacto.",
  },
]

const ilustracoes = [
  { id: 1, src: "/yara1.png" },
  { id: 2, src: "/LOVERS IN LIYUE 2024.png" },
  { id: 3, src: "/mitsuri.jpg" },
  { id: 4, src: "/LEAF 1.jpg" },
  { id: 5, src: "/concept.jpg" },
  { id: 6, src: "/COMMISSIONS RABINHO.jpg" },
  { id: 7, src: "/commision devil.png" },
  { id: 8, src: "/columbinaxx.png" },
  { id: 9, src: "/columbina 012.jpg" },
  { id: 10, src: "/caverna do dragão 2.jpg" },
  { id: 11, src: "/Bianca full paint.png" },
  { id: 12, src: "/bruce.png" },
  { id: 13, src: "/ax.png" },
  { id: 14, src: "/ASAHINA PNG VERSAO 2.png" },
  { id: 15, src: "/ary.png" },
  { id: 16, src: "/angel2 (2).png" },
]

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-purple-500/30">
      <Header />

      <div className="flex flex-col items-center gap-3 pt-24">

        {/* --- SEÇÃO HOME --- */}
        <section
          id="home"
          className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-center px-6 py-20 lg:py-32 gap-12"
        >
          <div className="flex flex-col max-w-[600px] z-10">
            <div className="flex items-center gap-3 border border-white/10 bg-white/5 rounded-full px-5 py-2 w-fit mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse"></span>
              <span className="text-xs text-gray-300 font-semibold tracking-widest uppercase">DISPONÍVEL PARA FREELANCE</span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Olá, me chamo
            </h2>
            <h1 className="text-6xl lg:text-[5.5rem] font-extrabold text-[#a855f7] tracking-tighter mt-1 mb-6 drop-shadow-md">
              Wescley Costa
            </h1>

            <p className="text-gray-400 text-[17px] leading-relaxed max-w-lg">
              Transformando ideias em experiências visuais memoráveis através do design e da ilustração.
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-10">
              <a href="#" className="bg-[#a855f7] hover:bg-purple-500 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide flex items-center gap-3 transition-transform duration-300 hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                DESIGNER / ILUSTRADOR <FaArrowRight />
              </a>

              <div className="flex items-center gap-6 border border-white/10 bg-white/5 rounded-full px-8 py-4">
                <a href="https://www.instagram.com/akumakoji/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  <FaInstagram size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaLinkedin size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaDribbble size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center md:mr-10">
            <div className="absolute inset-0 rounded-full bg-[#a855f7] blur-[100px] opacity-20"></div>
            <div className="relative p-2 rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-transparent shadow-2xl">
              <Image
                src="/wescley.jpg"
                alt="Wescley Costa"
                width={450}
                height={450}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* --- SEÇÃO SOBRE MIM --- */}
        <section
          id="sobre"
          className="w-full max-w-[1200px] px-6 py-24 flex flex-col gap-12"
        >
          <div className="flex items-center gap-4">
            <span className="w-12 h-[3px] bg-[#a855f7] rounded-full"></span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Sobre Mim
            </h2>
          </div>

          <article className="bg-gradient-to-br from-[#1a1a1a] to-[#121212] border border-white/5 rounded-3xl p-8 md:p-14 text-gray-300 text-[17px] leading-relaxed space-y-6 shadow-xl">
            <p>
              Sou um Designer Gráfico e Ilustrador apaixonado por criar identidades visuais
              impactantes e ilustrações cheias de personalidade. Com anos de experiência
              no mercado criativo, busco sempre unir técnica e sensibilidade para entregar
              projetos que não apenas parecem bons, mas que comunicam a essência de cada marca.
            </p>
            <p>
              Minha trajetória inclui passagens por emissoras de rádio e agências, onde
              pude aprimorar minha versatilidade em diferentes formatos: desde a criação
              de marcas (branding) até a concepção de peças para grandes eventos,
              social media e campanhas publicitárias offline e digitais.
            </p>
            <p>
              Acredito que o design tem o poder de transformar a maneira como as pessoas
              percebem o mundo ao seu redor, e é essa crença que move o meu trabalho todos os dias.
            </p>
          </article>
        </section>

        {/* --- SEÇÃO EXPERIÊNCIA --- */}
        <section
          id="experiencia"
          className="w-full max-w-[1200px] mx-auto px-6 py-24 flex flex-col gap-16 md:gap-20"
        >
          <div className="flex items-center gap-4">
            <span className="w-12 h-[3px] bg-[#a855f7] rounded-full"></span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Experiência</h2>
          </div>

          <div className="relative mt-4">
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2"></div>

            <div className="flex flex-col gap-16 md:gap-20">
              
              {/* CARD 1 */}
              <div className="relative flex flex-col md:flex-row items-center w-full group">
                <div className="hidden md:block w-1/2 pr-16"></div>
                
                <div className="absolute left-[20px] md:left-1/2 w-10 h-10 rounded-full bg-[#111111] border border-[#a855f7] flex items-center justify-center text-[#a855f7] -translate-x-1/2 z-10 group-hover:bg-[#a855f7] group-hover:text-white transition-colors duration-300">
                  <FaBriefcase size={16} />
                </div>

                <div className="w-full md:w-1/2 pl-16 md:pl-16 flex justify-start">
                  <div className="bg-[#161616] border border-white/5 rounded-2xl p-8 w-full max-w-[480px] hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-3">
                      <h3 className="text-white font-bold text-2xl tracking-tight">Designer Visual</h3>
                      <span className="text-xs font-semibold bg-[#2a1442] text-purple-300 px-4 py-1.5 rounded-full w-fit whitespace-nowrap">Atualmente</span>
                    </div>
                    <p className="text-gray-300 font-semibold mb-4 text-[15px]">Banda Cintura Fina</p>
                    <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
                      Responsável por toda a parte visual da marca, tanto digital quanto física. Criei conteúdo para o Instagram, desenvolvendo campanhas visuais que reforçaram a identidade da banda e engajaram o público, trabalhando em estreita colaboração com os membros para garantir que a estética refletisse sua essência e estilo musical.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Photoshop</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Illustrator</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Premiere</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">After Effects</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">CorelDRAW</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">CapCut</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="relative flex flex-col md:flex-row items-center w-full group">
                <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-16 flex justify-start md:justify-end">
                  <div className="bg-[#161616] border border-white/5 rounded-2xl p-8 w-full max-w-[480px] hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-3">
                      <h3 className="text-white font-bold text-2xl tracking-tight">Designer Gráfico</h3>
                      <span className="text-xs font-semibold bg-[#2a1442] text-purple-300 px-4 py-1.5 rounded-full w-fit whitespace-nowrap">2022 - 2025</span>
                    </div>
                    <p className="text-gray-300 font-semibold mb-4 text-[15px]">Rede Xodó FM / Sistema RTV</p>
                    <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
                      Desenvolvimento e implementação de projetos criativos, incluindo materiais gráficos e campanhas digitais. Atuação sob prazos desafiadores, colaborando com diferentes equipes para criar soluções que atendem às necessidades específicas da marca, inovando e impactando o público de maneira eficaz.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Photoshop</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Illustrator</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Premiere</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">After Effects</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">CorelDRAW</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">CapCut</span>
                    </div>
                  </div>
                </div>

                <div className="absolute left-[20px] md:left-1/2 w-10 h-10 rounded-full bg-[#111111] border border-[#a855f7] flex items-center justify-center text-[#a855f7] -translate-x-1/2 z-10 group-hover:bg-[#a855f7] group-hover:text-white transition-colors duration-300">
                  <FaBriefcase size={16} />
                </div>
                
                <div className="hidden md:block w-1/2 pl-16"></div>
              </div>

              {/* CARD 3 */}
              <div className="relative flex flex-col md:flex-row items-center w-full group">
                <div className="hidden md:block w-1/2 pr-16"></div>
                
                <div className="absolute left-[20px] md:left-1/2 w-10 h-10 rounded-full bg-[#111111] border border-[#a855f7] flex items-center justify-center text-[#a855f7] -translate-x-1/2 z-10 group-hover:bg-[#a855f7] group-hover:text-white transition-colors duration-300">
                  <FaBriefcase size={16} />
                </div>

                <div className="w-full md:w-1/2 pl-16 md:pl-16 flex justify-start">
                  <div className="bg-[#161616] border border-white/5 rounded-2xl p-8 w-full max-w-[480px] hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-3">
                      <h3 className="text-white font-bold text-2xl tracking-tight">Designer Gráfico</h3>
                      <span className="text-xs font-semibold bg-[#2a1442] text-purple-300 px-4 py-1.5 rounded-full w-fit whitespace-nowrap">2021</span>
                    </div>
                    <p className="text-gray-300 font-semibold mb-4 text-[15px]">Localine LTDA</p>
                    <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
                      Responsável pelas plotagens em uma empresa de transporte, aplicando criatividade em designs funcionais. Foco em garantir o impacto visual, considerando aspectos rigorosos de durabilidade, legibilidade e adaptação a diferentes tipos de veículos e superfícies.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Photoshop</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Illustrator</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Premiere</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">After Effects</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">CorelDRAW</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">CapCut</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="relative flex flex-col md:flex-row items-center w-full group">
                <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-16 flex justify-start md:justify-end">
                  <div className="bg-[#161616] border border-white/5 rounded-2xl p-8 w-full max-w-[480px] hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-3">
                      <h3 className="text-white font-bold text-2xl tracking-tight">Designer Gráfico</h3>
                      <span className="text-xs font-semibold bg-[#2a1442] text-purple-300 px-4 py-1.5 rounded-full w-fit whitespace-nowrap">2021</span>
                    </div>
                    <p className="text-gray-300 font-semibold mb-4 text-[15px]">Prefeitura de Poço Redondo - SE</p>
                    <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
                      Criação de projetos visuais para materiais impressos e campanhas para o Instagram. Atuação com foco em combining estética e funcionalidade para engajar o público local e transmitir as mensagens institucionais de forma clara e eficaz.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Photoshop</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Illustrator</span>
                    </div>
                  </div>
                </div>

                <div className="absolute left-[20px] md:left-1/2 w-10 h-10 rounded-full bg-[#111111] border border-[#a855f7] flex items-center justify-center text-[#a855f7] -translate-x-1/2 z-10 group-hover:bg-[#a855f7] group-hover:text-white transition-colors duration-300">
                  <FaBriefcase size={16} />
                </div>
                
                <div className="hidden md:block w-1/2 pl-16"></div>
              </div>

              {/* CARD 5 */}
              <div className="relative flex flex-col md:flex-row items-center w-full group">
                <div className="hidden md:block w-1/2 pr-16"></div>
                
                <div className="absolute left-[20px] md:left-1/2 w-10 h-10 rounded-full bg-[#111111] border border-[#a855f7] flex items-center justify-center text-[#a855f7] -translate-x-1/2 z-10 group-hover:bg-[#a855f7] group-hover:text-white transition-colors duration-300">
                  <FaBriefcase size={16} />
                </div>

                <div className="w-full md:w-1/2 pl-16 md:pl-16 flex justify-start">
                  <div className="bg-[#161616] border border-white/5 rounded-2xl p-8 w-full max-w-[480px] hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-3">
                      <h3 className="text-white font-bold text-2xl tracking-tight">Designer Gráfico</h3>
                      <span className="text-xs font-semibold bg-[#2a1442] text-purple-300 px-4 py-1.5 rounded-full w-fit whitespace-nowrap">2018 - 2019</span>
                    </div>
                    <p className="text-gray-300 font-semibold mb-4 text-[15px]">Filial de Marketing (Mary Kay)</p>
                    <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
                      Atuei como designer gráfico com foco em demandas variadas do setor de marketing. Desenvolvi habilidades em gerenciamento e organização de processos de forma eficaz, lidando tanto com rotinas criativas quanto administrativas.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Photoshop</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Illustrator</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Excel</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- SEÇÃO PORTFÓLIO --- */}
        <section id="projetos" className="w-full max-w-[1500px] mx-auto px-6 py-24 flex flex-col gap-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="w-12 h-[3px] bg-[#a855f7] rounded-full"></span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Portfólio</h2>
              </div>
              <p className="text-gray-400 max-w-xl text-[17px] leading-relaxed">
                Uma seleção dos meus projetos favoritos recentes. Cada peça reflete uma busca
                por inovação visual e adequação ao propósito da marca.
              </p>
            </div>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            {portfolioItems.map((item) => (
              <Dialog key={item.id}>
                
                <DialogTrigger asChild>
                  <button className="relative block w-full text-left cursor-pointer overflow-hidden rounded-3xl border border-white/5 transition-all duration-300 group bg-[#161616]">
                    
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={800} 
                      height={448}
                      className="w-full h-[448px] object-contain transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#111111]/90 via-[#111111]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 md:p-10 pointer-events-none">
                      <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col gap-2">
                        <span className="text-gray-300 text-sm font-bold tracking-widest uppercase drop-shadow-md">
                          {item.category}
                        </span>
                        <h3 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg mb-4">
                          {item.title}
                        </h3>
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex justify-center items-center shadow-xl">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                </DialogTrigger>

                <DialogContent className="bg-[#121212] border border-white/5 text-white w-[95vw] sm:max-w-[800px] rounded-3xl p-8 flex flex-col gap-6 shadow-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-white text-center font-serif tracking-wide">
                      {item.title}
                    </DialogTitle>
                    <DialogDescription className="hidden">Detalhes do projeto {item.title}</DialogDescription>
                  </DialogHeader>

                  <div className="flex flex-col items-center gap-6">
                    
                    <div className="w-full bg-[#1e1e1e] rounded-2xl overflow-hidden p-1 border border-white/5 shadow-inner">
                      <Image 
                        src={item.src} 
                        alt={item.title} 
                        width={1200} 
                        height={800} 
                        className="rounded-xl object-contain w-full max-h-[55vh]" 
                      />
                    </div>
                    
                    <p className="text-gray-200 text-center text-[15px] leading-relaxed max-w-[600px] font-serif">
                      {item.desc}
                    </p>
                    
                    <DialogTrigger asChild>
                      <button className="mt-2 px-8 py-2 bg-[#a855f7] hover:bg-purple-500 border-2 border-transparent hover:border-white text-white font-bold text-sm rounded-full transition-all duration-300 hover:scale-105 pointer-events-auto">
                        Fechar Projeto
                      </button>
                    </DialogTrigger>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        {/* --- SEÇÃO ILUSTRAÇÕES --- */}
        <section
          id="ilustracoes"
          className="w-full max-w-[1200px] px-6 py-24 flex flex-col gap-12"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center gap-4">
              <span className="w-12 h-[3px] bg-[#a855f7] rounded-full"></span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight text-center">
                Galeria de Ilustrações
              </h2>
              <span className="w-12 h-[3px] bg-[#a855f7] rounded-full"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
            {ilustracoes.map((img) => (
              <Dialog key={img.id}>
                
                <DialogTrigger asChild>
                  <button className="overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] group cursor-pointer bg-[#1a1a1a] p-1">
                    <Image
                      src={img.src}
                      alt="Ilustração miniatura"
                      width={500}
                      height={600}
                      className="object-cover w-full h-[400px] transition-transform duration-500 group-hover:scale-110"
                    />
                  </button>
                </DialogTrigger>

                <DialogContent className="bg-transparent border-none shadow-none p-0 w-[95vw] !max-w-[1400px] h-[90vh] flex justify-center items-center">
                  <DialogHeader className="hidden">
                    <DialogTitle>Ilustração Ampliada</DialogTitle>
                    <DialogDescription>Visualização em tela cheia da arte de Wescley Costa</DialogDescription>
                  </DialogHeader>

                  <DialogClose className="absolute top-0 right-0 md:top-2 md:right-2 z-50 p-3 bg-black/60 hover:bg-[#a855f7] border border-white/20 rounded-full text-white backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-xl focus:outline-none">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    <span className="sr-only">Fechar</span>
                  </DialogClose>

                  <Image
                    src={img.src}
                    alt="Ilustração Ampliada"
                    width={2000}
                    height={2000}
                    className="w-full h-full object-contain drop-shadow-2xl rounded-md"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}