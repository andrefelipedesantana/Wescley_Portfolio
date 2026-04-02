"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { FaInstagram, FaFacebook, FaEnvelope, FaBriefcase, FaArrowRight } from "react-icons/fa"
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
  {
    id: 4,
    title: "BRUXA ARRÊTADA",
    category: "Criação de Arte / Logotipo",
    src: "/ARTE BANNER.png",
    images: [
      "/PARA INSTAGRAM 3.png",
  "/WITCH 3.png",
  "/PARA INSTAGRAM.png",
  "/PARA INSTAGRAM BRANCA.png",
  "/ARTE BANNER.png"

],
    desc: ""
  },
  {
    id: 5,
    title: "FEIRA CULTURA",
    category: "Criação de Arte / Logotipo",
    src: "/FEIRA CULTURA.png",
    desc: "",
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
  setMousePosition({ x: e.clientX, y: e.clientY })
}
    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  return (
    <div className="bg-gradient-to-b from-black via-black to-[#2a0845] text-white min-h-screen font-sans selection:bg-purple-500/30 relative">
      
      <div
        className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.08), transparent 80%)`,
        }}
      />

      <Header />

      <div className="flex flex-col items-center gap-3">

        <section
          id="home"
          className="relative w-full flex justify-center pt-24 min-h-screen items-center"
        >
          <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
            <Image
              src="/CAPA CURU.png" 
              alt="Background Arte"
              fill
              className="object-cover opacity-50"
              style={{ objectPosition: "70% center" }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
          </div>

          <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-center px-6 py-20 lg:py-32 gap-12 relative z-10">
            <div className="flex flex-col max-w-[600px] z-10">
              <div className="flex items-center gap-3 border border-white/20 bg-black/40 backdrop-blur-sm rounded-full px-5 py-2 w-fit mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse"></span>
                <span className="text-xs text-gray-200 font-semibold tracking-widest uppercase">DISPONÍVEL PARA FREELANCE</span>
              </div>

              <div className="pl-16 flex flex-col mb-8 select-none cursor-default">
                <h2
                  className="text-white text-5xl lg:text-6xl font-extrabold tracking-tight mb-[-10px] ml-4 relative z-10"
                  style={{ textShadow: '0 0 15px rgba(168, 85, 247, 0.9)' }}
                >
                  iai, sou
                </h2>
                <h1
                  className="text-7xl lg:text-[8.5rem] font-black tracking-tighter -rotate-2 text-[#a855f7] relative"
                  style={{
                    WebkitTextStroke: '3px white',
                    textShadow: '0 0 20px rgba(168,85,247,0.8), 0 0 40px rgba(168,85,247,0.6), 0 0 60px rgba(168,85,247,0.4)',
                    lineHeight: '1.1'
                  }}
                >
                  Wess
                </h1>
              </div>

              <div className="flex flex-wrap items-center gap-6 mt-10">
                <a href="#" className="bg-[#a855f7] hover:bg-purple-500 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide flex items-center gap-3 transition-transform duration-300 hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                  DESIGNER / ILUSTRADOR <FaArrowRight />
                </a>

                <div className="flex items-center gap-6 border border-white/20 bg-black/40 backdrop-blur-sm rounded-full px-8 py-4">
                  <a href="https://www.instagram.com/akumakoji/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#a855f7] transition-colors duration-300 drop-shadow-md">
                    <FaInstagram size={20} />
                  </a>
                  <a href="https://www.facebook.com/wescley.costa.771169/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#a855f7] transition-colors duration-300 drop-shadow-md">
                    <FaFacebook size={20} />
                  </a>
                  <a href="mailto:Contato.akumakoji@gmail.com" className="text-gray-300 hover:text-[#a855f7] transition-colors duration-300 drop-shadow-md">
                    <FaEnvelope size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center items-center md:mr-10">
              <div className="absolute inset-0 rounded-full bg-[#a855f7] blur-[100px] opacity-30"></div>
              <div className="relative p-2 rounded-full border border-white/20 bg-gradient-to-br from-white/10 to-transparent shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-sm">
                <Image
                  src="/wescley.jpg"
                  alt="Wescley Costa"
                  width={400}
                  height={400}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="sobre"
          className="relative z-10 w-full max-w-[1200px] px-6 py-24 flex flex-col gap-12"
        >
          <div className="flex items-center gap-4">
            <span className="w-12 h-[3px] bg-[#a855f7] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Sobre Mim
            </h2>
          </div>

          <article className="bg-gradient-to-br from-[#1a1a1a]/80 to-[#0a0a0a]/80 backdrop-blur-md border border-white/5 hover:border-purple-500/30 transition-colors duration-500 rounded-3xl p-8 md:p-14 text-gray-300 text-[17px] leading-relaxed space-y-6 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_2s_infinite]"></div>
            <p className="relative z-10">
              Sou Wescley, ilustrador e designer. Gosto de trabalhar com arte inspirada em fantasia e mundos imaginários. Muitas das minhas referências vêm de histórias como The Lord of the Rings, que sempre influenciaram meu gosto por cenários épicos e personagens marcantes.
            </p>
            <p className="relative z-10">
              No tempo livre, gosto de jogar League of Legends e Final Fantasy, além de ler livros de fantasia. Também sou pisciano, o que talvez explique minha conexão com criatividade e imaginação.
            </p>
            <p className="relative z-10">
              A arte, para mim, é uma forma de explorar esses mundos e transformar inspiração em imagem.
            </p>
          </article>
        </section>

        <section
          id="experiencia"
          className="relative z-10 w-full max-w-[1200px] mx-auto px-6 py-24 flex flex-col gap-16 md:gap-20"
        >
          <div className="flex items-center gap-4">
            <span className="w-12 h-[3px] bg-[#a855f7] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Experiência</h2>
          </div>

          <div className="relative mt-4">
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2 shadow-[0_0_15px_rgba(168,85,247,0.3)]"></div>

            <div className="flex flex-col gap-16 md:gap-20">
              
              <div className="relative flex flex-col md:flex-row items-center w-full group">
                <div className="hidden md:block w-1/2 pr-16"></div>
                
                <div className="absolute left-[20px] md:left-1/2 w-10 h-10 rounded-full bg-[#111111] border border-[#a855f7] flex items-center justify-center text-[#a855f7] -translate-x-1/2 z-10 group-hover:bg-[#a855f7] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-110">
                  <FaBriefcase size={16} />
                </div>

                <div className="w-full md:w-1/2 pl-16 md:pl-16 flex justify-start">
                  <div className="bg-[#161616]/80 backdrop-blur-md border border-white/5 hover:border-purple-500/50 rounded-2xl p-8 w-full max-w-[480px] hover:-translate-y-2 transition-all duration-300 shadow-xl relative overflow-hidden">
                    <div className="flex flex-col mb-3 relative z-10">
                      <h3 className="text-white font-bold text-2xl tracking-tight">2018 - 2019</h3>
                    </div>
                    <p className="text-gray-300 font-semibold mb-4 text-[15px] relative z-10">Filial de Marketing (Mary Kay)</p>
                    <p className="text-gray-400 text-[15px] leading-relaxed mb-8 relative z-10">
                      Atuei como designer gráfico com foco em demandas variadas do setor de marketing. Desenvolvi habilidades em gerenciamento e organização de processos de forma eficaz, lidando tanto com rotinas criativas quanto administrativas.
                    </p>
                    <div className="flex gap-2 flex-wrap relative z-10">
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Photoshop</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Illustrator</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Excel</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row items-center w-full group">
                <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-16 flex justify-start md:justify-end">
                  <div className="bg-[#161616]/80 backdrop-blur-md border border-white/5 hover:border-purple-500/50 rounded-2xl p-8 w-full max-w-[480px] hover:-translate-y-2 transition-all duration-300 shadow-xl relative overflow-hidden">
                    <div className="flex flex-col mb-3 relative z-10">
                      <h3 className="text-white font-bold text-2xl tracking-tight">2021</h3>
                    </div>
                    <p className="text-gray-300 font-semibold mb-4 text-[15px] relative z-10">Localine LTDA</p>
                    <p className="text-gray-400 text-[15px] leading-relaxed mb-8 relative z-10">
                      Responsável pelas plotagens em uma empresa de transporte, aplicando criatividade em designs funcionais. Foco em garantir o impacto visual, considerando aspectos rigorosos de durabilidade, legibilidade e adaptação a diferentes tipos de veículos e superfícies.
                    </p>
                    <div className="flex gap-2 flex-wrap relative z-10">
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Photoshop</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Illustrator</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Premiere</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">After Effects</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">CorelDRAW</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">CapCut</span>
                    </div>
                  </div>
                </div>

                <div className="absolute left-[20px] md:left-1/2 w-10 h-10 rounded-full bg-[#111111] border border-[#a855f7] flex items-center justify-center text-[#a855f7] -translate-x-1/2 z-10 group-hover:bg-[#a855f7] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-110">
                  <FaBriefcase size={16} />
                </div>
                
                <div className="hidden md:block w-1/2 pl-16"></div>
              </div>

              <div className="relative flex flex-col md:flex-row items-center w-full group">
                <div className="hidden md:block w-1/2 pr-16"></div>
                
                <div className="absolute left-[20px] md:left-1/2 w-10 h-10 rounded-full bg-[#111111] border border-[#a855f7] flex items-center justify-center text-[#a855f7] -translate-x-1/2 z-10 group-hover:bg-[#a855f7] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-110">
                  <FaBriefcase size={16} />
                </div>

                <div className="w-full md:w-1/2 pl-16 md:pl-16 flex justify-start">
                  <div className="bg-[#161616]/80 backdrop-blur-md border border-white/5 hover:border-purple-500/50 rounded-2xl p-8 w-full max-w-[480px] hover:-translate-y-2 transition-all duration-300 shadow-xl relative overflow-hidden">
                    <div className="flex flex-col mb-3 relative z-10">
                      <h3 className="text-white font-bold text-2xl tracking-tight">2021</h3>
                    </div>
                    <p className="text-gray-300 font-semibold mb-4 text-[15px] relative z-10">Prefeitura de Poço Redondo - SE</p>
                    <p className="text-gray-400 text-[15px] leading-relaxed mb-8 relative z-10">
                      Criação de projetos visuais para materiais impressos e campanhas para o Instagram. Atuação com foco em combining estética e funcionalidade para engajar o público local e transmitir as mensagens institucionais de forma clara e eficaz.
                    </p>
                    <div className="flex gap-2 flex-wrap relative z-10">
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Photoshop</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Illustrator</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row items-center w-full group">
                <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-16 flex justify-start md:justify-end">
                  <div className="bg-[#161616]/80 backdrop-blur-md border border-white/5 hover:border-purple-500/50 rounded-2xl p-8 w-full max-w-[480px] hover:-translate-y-2 transition-all duration-300 shadow-xl relative overflow-hidden">
                    <div className="flex flex-col mb-3 relative z-10">
                      <h3 className="text-white font-bold text-2xl tracking-tight">2022 - 2025</h3>
                    </div>
                    <p className="text-gray-300 font-semibold mb-4 text-[15px] relative z-10">Rede Xodó FM / Sistema RTV</p>
                    <p className="text-gray-400 text-[15px] leading-relaxed mb-8 relative z-10">
                      Desenvolvimento e implementação de projetos criativos, incluindo materiais gráficos e campanhas digitais. Atuação sob prazos desafiadores, colaborando com diferentes equipes para criar soluções que atendem às necessidades específicas da marca, inovando e impactando o público de maneira eficaz.
                    </p>
                    <div className="flex gap-2 flex-wrap relative z-10">
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Photoshop</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Illustrator</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Premiere</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">After Effects</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">CorelDRAW</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">CapCut</span>
                    </div>
                  </div>
                </div>

                <div className="absolute left-[20px] md:left-1/2 w-10 h-10 rounded-full bg-[#111111] border border-[#a855f7] flex items-center justify-center text-[#a855f7] -translate-x-1/2 z-10 group-hover:bg-[#a855f7] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-110">
                  <FaBriefcase size={16} />
                </div>
                
                <div className="hidden md:block w-1/2 pl-16"></div>
              </div>

              <div className="relative flex flex-col md:flex-row items-center w-full group">
                <div className="hidden md:block w-1/2 pr-16"></div>
                
                <div className="absolute left-[20px] md:left-1/2 w-10 h-10 rounded-full bg-[#111111] border border-[#a855f7] flex items-center justify-center text-[#a855f7] -translate-x-1/2 z-10 group-hover:bg-[#a855f7] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-110">
                  <FaBriefcase size={16} />
                </div>

                <div className="w-full md:w-1/2 pl-16 md:pl-16 flex justify-start">
                  <div className="bg-[#161616]/80 backdrop-blur-md border border-white/5 hover:border-purple-500/50 rounded-2xl p-8 w-full max-w-[480px] hover:-translate-y-2 transition-all duration-300 shadow-xl relative overflow-hidden">
                    <div className="flex flex-col mb-3 relative z-10">
                      <h3 className="text-white font-bold text-2xl tracking-tight">2021 - 2025</h3>
                    </div>
                    <p className="text-gray-300 font-semibold mb-4 text-[15px] relative z-10">Banda Cintura Fina</p>
                    <p className="text-gray-400 text-[15px] leading-relaxed mb-8 relative z-10">
                      Responsável por toda a parte visual da marca, tanto digital quanto física. Criei conteúdo para o Instagram, desenvolvendo campanhas visuais que reforçaram a identidade da banda e engajaram o público, trabalhando em estreita colaboração com os membros para garantir que a estética refletisse sua essência e estilo musical.

                    </p>
                    <div className="flex gap-2 flex-wrap relative z-10">
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

              <div className="relative flex flex-col md:flex-row items-center w-full group">
                <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-16 flex justify-start md:justify-end">
                  <div className="bg-[#161616]/80 backdrop-blur-md border border-white/5 hover:border-purple-500/50 rounded-2xl p-8 w-full max-w-[480px] hover:-translate-y-2 transition-all duration-300 shadow-xl relative overflow-hidden">
                    <div className="flex flex-col mb-3 relative z-10">
                      <h3 className="text-white font-bold text-2xl tracking-tight">Atualmente</h3>
                    </div>
                    <p className="text-gray-300 font-semibold mb-4 text-[15px] relative z-10">Prefeitura de Poço Redondo - SE</p>
                    <p className="text-gray-400 text-[15px] leading-relaxed mb-8 relative z-10">
                        Criação de projetos visuais para materiais impressos e campanhas para o Instagram. Atuação com foco em combining estética e funcionalidade para engajar o público local e transmitir as mensagens institucionais de forma clara e eficaz.                    </p>
                    <div className="flex gap-2 flex-wrap relative z-10">
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Photoshop</span>
                      <span className="bg-[#2a1442] text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">Illustrator</span>
                    </div>
                  </div>
                </div>

                <div className="absolute left-[20px] md:left-1/2 w-10 h-10 rounded-full bg-[#111111] border border-[#a855f7] flex items-center justify-center text-[#a855f7] -translate-x-1/2 z-10 group-hover:bg-[#a855f7] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-110">
                  <FaBriefcase size={16} />
                </div>
                
                <div className="hidden md:block w-1/2 pl-16"></div>
              </div>

            </div>
          </div>
        </section>

        <section id="projetos" className="relative z-10 w-full max-w-[1500px] mx-auto px-6 py-24 flex flex-col gap-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="w-12 h-[3px] bg-[#a855f7] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
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
                  <button className="relative block w-full text-left cursor-pointer overflow-hidden rounded-3xl border border-white/5 transition-all duration-300 group bg-[#161616]/60 backdrop-blur-sm hover:border-purple-500/40">
                    
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

                <DialogContent className="bg-[#121212]/95 backdrop-blur-xl border border-white/10 text-white w-[95vw] sm:max-w-[1200px] max-h-[90vh] overflow-y-auto rounded-3xl p-8 flex flex-col gap-6 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-white text-center font-serif tracking-wide">
                      {item.title}
                    </DialogTitle>
                    <DialogDescription className="hidden">Detalhes do projeto {item.title}</DialogDescription>
                  </DialogHeader>

                  <div className="flex flex-col items-center gap-6">
                    
                    <div className="w-full bg-[#1e1e1e]/50 rounded-2xl overflow-hidden p-1 border border-white/5 shadow-inner flex flex-col gap-4 justify-center items-center">
                      {(item.images || [item.src]).map((imgSrc, idx) => (
                        <Image 
                          key={idx}
                          src={imgSrc} 
                          alt={`${item.title} ${idx + 1}`} 
                          width={1600} 
                          height={900} 
                          className="rounded-xl object-contain w-full max-h-[65vh]" 
                        />
                      ))}
                    </div>
                    
                    {item.desc && (
                      <p className="text-gray-200 text-center text-[15px] leading-relaxed max-w-[800px] font-serif">
                        {item.desc}
                      </p>
                    )}
                    
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

        <section
          id="ilustracoes"
          className="relative z-10 w-full max-w-[1200px] px-6 py-24 flex flex-col gap-12"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center gap-4">
              <span className="w-12 h-[3px] bg-[#a855f7] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight text-center">
                Galeria de Ilustrações
              </h2>
              <span className="w-12 h-[3px] bg-[#a855f7] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            {ilustracoes.map((img) => (
              <Dialog key={img.id}>
                
                <DialogTrigger asChild>
                  <button className="overflow-hidden rounded-md transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:z-10 relative group cursor-pointer bg-[#1a1a1a]/50 backdrop-blur-sm p-1">
                    <Image
                      src={img.src}
                      alt="Ilustração miniatura"
                      width={500}
                      height={600}
                      className="object-cover w-full h-[400px] rounded-sm transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
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
                    className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] rounded-md"
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