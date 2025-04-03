import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../button";
import { Sheet, SheetTrigger, SheetContent } from "../sheet";
import { cn } from "../../../lib/utils";
import logo from "/logo.jpg";


import { LogIn, Menu  } from "lucide-react";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState<string>("home");
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed top-0 w-full z-50 transition-all  border-b border-b-gray-300   px-15 ", scrolled ? "bg-white shadow-md" : "traspanrent")}> 
      <div className="container mx-auto flex items-center justify-between py-2 px-6">

      <Link to="/" className="flex items-center space-x-3">
      <img src={logo} alt="Logo" className="h-15 w-15 rounded-full" />
     <span className="text-xl font-bold tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
  Lexnyxoria
</span>
    </Link>


        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
  {['Platform', 'Use Cases', 'Company', 'Join Now'].map((item) => (
    <Link 
      key={item} 
      to={`#${item}`} 
      className={cn(
        "text-lg font-medium transition-colors mx-8 pb-2  ",
        activeLink === item ? "text-[#20A08F]" : "text-gray-700 hover:text-[#20A08F]"
      )}
      onClick={() => setActiveLink(item)}
    >
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </Link>
  ))}
</nav>
        
        {/* Social Icons & Button */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex space-x-3">
            {/* {[navIcon1, navIcon2, navIcon3].map((icon, index) => (
              <a key={index} href="#" className="hover:opacity-80">
                <img src={icon} alt="social" className="h-6" />
              </a>
            ))} */}
          </div>
          <Link to="#connect">
      <Button className="flex items-center gap-2 px-4 py-2 text-white bg-[#262E40]  rounded-lg shadow-md">
        <LogIn className="w-5 h-5" />
        Login
      </Button>
    </Link>
        </div>
        
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu size={24} />
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col space-y-6 p-6">
            {['Home', 'About', 'Contact'].map((item) => (
              <Link 
                key={item} 
                to={`#${item}`} 
                className={cn("text-lg font-medium", activeLink === item ? "text-blue-600" : "text-gray-700 hover:text-blue-600")}
                onClick={() => setActiveLink(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
            <div className="flex space-x-3 mt-4">
              {/* {[navIcon1, navIcon2, navIcon3].map((icon, index) => (
                <a key={index} href="#" className="hover:opacity-80">
                  <img src={icon} alt="social" className="h-6" />
                </a>
              ))} */}
            </div>
            <Link to="#connect">
      <Button className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md">
        <LogIn className="w-5 h-5" />
        Login
      </Button>
    </Link>
          </SheetContent>
        </Sheet>
      </div>
    </header>
    
  );
};
