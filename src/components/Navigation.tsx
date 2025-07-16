import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Brain, Menu, X } from 'lucide-react';
import echosLogo from '@/assets/echos-logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-lg border-b border-border/50 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="relative">
              <img 
                src={echosLogo} 
                alt="Echos Logo" 
                className="h-10 w-10 rounded-lg"
                onError={(e) => {
                  // Fallback to icon if image fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
                <Brain className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wide text-primary">ECHOS</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Digital Brain</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('why-echos')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Why Echos
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              What We Do
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              size="sm" 
              className="hidden sm:flex gradient-hero text-black font-medium hover:shadow-glow transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-4 border-t border-border/50 bg-background/95 backdrop-blur-lg">
            <button 
              onClick={() => scrollToSection('why-echos')}
              className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors"
            >
              Why Echos
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors"
            >
              What We Do
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <div className="pt-2">
              <Button 
                size="sm" 
                className="w-full gradient-hero text-black font-medium"
                onClick={() => scrollToSection('contact')}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;