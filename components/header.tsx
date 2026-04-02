import { Menu } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center bg-black/90 backdrop-blur">
      
      <div className="w-full max-w-[1200px] flex justify-between items-center px-6 md:px-8 py-5 md:py-6">

        <div className="text-white text-4xl font-bold tracking-wide">
          KOJI<span className="text-purple-500">.</span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 text-lg font-medium
        [&_a]:transition [&_a]:duration-200 [&_a]:hover:text-white">
          <li><a href="#home">Home</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#experiencia">Experiência</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#ilustracoes">Ilustrações</a></li>

        </ul>

        {/* Menu mobile */}
        <div className="md:hidden">
          <DropdownMenu>
            
            <DropdownMenuTrigger asChild>
              <button className="text-white p-2 hover:bg-white/10 rounded-md transition">
                <Menu size={26} />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="bg-black border-white/10 text-white">

              <DropdownMenuItem>
                <a href="#home" className="w-full">Home</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#sobre" className="w-full">Sobre</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#experiencia" className="w-full">Experiência</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#projetos" className="w-full">Projetos</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#ilustracoes" className="w-full">Ilustrações</a>
              </DropdownMenuItem>


            </DropdownMenuContent>

          </DropdownMenu>
        </div>

      </div>
    </nav>
  )
}