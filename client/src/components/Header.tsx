import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from '@/lib/i18n';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t, lang, setLang } = useI18n();

  const navLinks = [
    { href: "#about", label: t("आमच्याबद्दल", "About") },
    { href: "#events", label: t("कार्यक्रम", "Events") },
    { href: "#bhawan", label: t("बुलढाणा भवन", "Bhavan") },
    { href: "#contact", label: t("संपर्क", "Contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl gradient-hero flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg md:text-xl">ब</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-foreground text-sm md:text-base leading-tight">बुलढाणा जिल्हा</p>
              <p className="text-xs md:text-sm text-muted-foreground">बौद्ध रहिवासी समाज मंडळ</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#contact"
              className="px-5 py-2.5 rounded-lg gradient-gold text-accent-foreground font-semibold text-sm shadow-gold hover-lift"
            >
              {t('सभासद व्हा', 'Become Member')}
            </a>

            {/* Language Switcher */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLang('mr')}
                className={`px-3 py-1 rounded ${lang==='mr' ? 'bg-primary text-primary-foreground' : 'bg-muted/10 text-foreground'}`}
                aria-label="Select Marathi"
              >
                MR
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded ${lang==='en' ? 'bg-primary text-primary-foreground' : 'bg-muted/10 text-foreground'}`}
                aria-label="Select English"
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-foreground font-medium hover:bg-primary/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mx-4 mt-2 px-5 py-3 rounded-lg gradient-gold text-accent-foreground font-semibold text-center shadow-gold"
              >
                {t('सभासद व्हा', 'Become Member')}
              </a>

              <div className="mx-4 mt-3 flex gap-2">
                <button onClick={() => { setLang('mr'); setIsMenuOpen(false); }} className={`px-3 py-2 rounded ${lang==='mr' ? 'bg-primary text-primary-foreground' : 'bg-muted/10'}`}>MR</button>
                <button onClick={() => { setLang('en'); setIsMenuOpen(false); }} className={`px-3 py-2 rounded ${lang==='en' ? 'bg-primary text-primary-foreground' : 'bg-muted/10'}`}>EN</button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
