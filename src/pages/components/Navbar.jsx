import React, { useEffect, useState } from "react";
// import { href } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Menu, X } from "lucide-react";

const NavItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-xs" : "py-0"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-primary items-center">
          <span className="relative z-10">
            <span className="text-glow text-foreground">Prince Ceejay's</span>{" "}
            Portfolio
          </span>
        </a>
        {/* Desktop */}
        <div className="hidden md:flex space-x-3">
          {NavItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* Mobile */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="hover: cursor-pointer md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-3 text-xl">
            {NavItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
