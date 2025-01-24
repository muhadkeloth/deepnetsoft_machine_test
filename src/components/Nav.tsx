import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from '../assets/images/Logo.png';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-nav-bg relative z-50">
      <div className="container mx-auto md:px-28 ">
        <div className="flex justify-between items-center h-16">

          
          <div className="relative md:static -mb-16 flex-1 md:flex-none">
            <div className="flex items-center md:items-start justify-center md:justify-start">
            <img src={logo} alt="Logo" className="h-86 w-76 " />
              <div className="hidden md:block ms-2 ">
                <div className="text-[35px] leading-tight">
                  <span className="text-main-clr">DEEP</span>
                  <span> NET</span><br />
                  <span className="text-shade-txt">SOFT</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex h-full flex-col justify-end pb-1 ">
            <div className="flex space-x-8">
            <button className="text-main-clr hover:opacity-80">HOME</button>
            <button className="text-white-txt hover:text-main-clr">MENU</button>
            <button className="text-white-txt hover:text-main-clr">MAKE A RESERVATION</button>
            <button className="text-white-txt hover:text-main-clr">CONTACT US</button>
            </div>
          </div>

          <div className="md:hidden absolute right-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      {isMenuOpen && (  
        <div className="md:hidden fixed inset-0 bg-main-clr z-50">
          <div className="container mx-auto px-4 py-20 h-full flex flex-col items-center justify-center space-y-8">

          <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-background text-3xl"
            >
              <X size={38} className="m-2 font-bold" />
            </button>
            <a 
              href="#"
              className="text-3xl font-semibold text-background hover:opacity-80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#"
              className="text-3xl font-semibold text-background hover:opacity-80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </a>
            <a 
              href="#"
              className="text-3xl font-semibold text-background hover:opacity-80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div> 
      )}
    </nav>  
  )
}

export default Nav