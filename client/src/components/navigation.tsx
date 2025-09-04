import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-primary-foreground font-bold text-2xl" data-testid="logo">DAHSC</div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('turnier')}
              className="text-primary-foreground hover:text-gray-300 transition-colors duration-200"
              data-testid="nav-turnier"
            >
              Turnier
            </button>
            <button 
              onClick={() => scrollToSection('sponsoring')}
              className="text-primary-foreground hover:text-gray-300 transition-colors duration-200"
              data-testid="nav-sponsoring"
            >
              Sponsoring
            </button>
            <button 
              onClick={() => scrollToSection('teams')}
              className="text-primary-foreground hover:text-gray-300 transition-colors duration-200"
              data-testid="nav-teams"
            >
              Teams
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="text-primary-foreground hover:text-gray-300 transition-colors duration-200"
              data-testid="nav-kontakt"
            >
              Kontakt
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-foreground hover:bg-gray-800"
              data-testid="mobile-menu-button"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4" data-testid="mobile-menu">
            <button 
              onClick={() => scrollToSection('turnier')}
              className="block text-primary-foreground hover:text-gray-300 py-2 w-full text-left"
              data-testid="mobile-nav-turnier"
            >
              Turnier
            </button>
            <button 
              onClick={() => scrollToSection('sponsoring')}
              className="block text-primary-foreground hover:text-gray-300 py-2 w-full text-left"
              data-testid="mobile-nav-sponsoring"
            >
              Sponsoring
            </button>
            <button 
              onClick={() => scrollToSection('teams')}
              className="block text-primary-foreground hover:text-gray-300 py-2 w-full text-left"
              data-testid="mobile-nav-teams"
            >
              Teams
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="block text-primary-foreground hover:text-gray-300 py-2 w-full text-left"
              data-testid="mobile-nav-kontakt"
            >
              Kontakt
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
