import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, Heart } from "lucide-react";
import mandalLogo from "@/assets/mandal-logo.jpeg";
import { useI18n } from '@/lib/i18n';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { t, lang, setLang } = useI18n();

  const navItems = [
    { href: "/", label: t("मुख्यपृष्ठ", "Home") },
    { href: "/about", label: t("आमच्याबद्दल", "About") },
    { href: "/objectives", label: t("ध्येय व उपक्रम", "Objectives") },
    { href: "/events", label: t("कार्यक्रम", "Events") },
    { href: "/gallery", label: t("गॅलरी", "Gallery") },
    { href: "/committee", label: t("कार्यकारिणी", "Committee") },
    {
      label: t("सहभाग", "Participation"),
      children: [
        { href: "/get-help", label: t("मदत हवी आहे?", "Get Help") },
        { href: "/join", label: t("सभासद बना", "Join") },
        { href: "/donate", label: t("देणगी द्या", "Donate") },
      ]
    },
    { href: "/bhavan", label: t("बुलढाणा भवन", "Bhavan") },
    { href: "/news", label: t("बातम्या", "News") },
    { href: "/contact", label: t("संपर्क", "Contact") },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>{t('धर्मदाय आयुक्त कार्यालय, ठाणे - नोंदणीकृत २०२२','Registered (Thane) - 2022')}</p>
          <div className="flex items-center gap-6">
            <a
              href="tel:+919702777927"
              className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer"
              title="फोन करा"
            >
              <Phone className="w-4 h-4" />
              +91 9702777927
            </a>
            <a
              href="mailto:buldhanabauddhamandal@gmail.com?subject=संपर्क%20-%20बुलढाणा%20मंडळ"
              className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer"
              title="ईमेल पाठवा"
            >
              <Mail className="w-4 h-4" />
              buldhanabauddhamandal@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border shadow-soft md:top-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 min-w-0">
              <img
                src={mandalLogo}
                alt="बुलढाणा जिल्हा बौद्ध रहिवासी समाज मंडळ मुंबई"
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl object-cover flex-shrink-0"
              />
              <div className="hidden sm:block max-w-[200px] lg:max-w-[220px] overflow-hidden">
                <p className="font-bold text-foreground text-sm lg:text-base leading-tight mb-1 truncate">{t('बुलढाणा जिल्हा','Buldhana District')}</p>
                <p className="text-xs lg:text-sm text-muted-foreground leading-tight truncate">{t('बौद्ध रहिवासी समाज मंडळ','Buddhist Residents Association')}</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                item.children ? (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 py-2 w-48 bg-card rounded-lg shadow-elevated border border-border animate-fade-in">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={`block px-4 py-2 text-sm hover:bg-primary/10 transition-colors ${isActive(child.href) ? 'text-primary font-medium bg-primary/5' : 'text-foreground'
                              }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href!}
                    className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${isActive(item.href!)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>

            {/* CTA Button & Language Switcher */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/donate"
                className="px-5 py-2.5 rounded-lg gradient-gold text-accent-foreground font-semibold text-sm shadow-gold hover-lift"
              >
                {t('देणगी द्या','Donate')}
              </Link>

              {/* Language Switcher */}
              <div className="flex items-center gap-2 border-l border-border pl-4">
                <button
                  onClick={() => setLang('mr')}
                  className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${lang === 'mr' ? 'bg-primary text-primary-foreground' : 'bg-muted/10 text-foreground hover:bg-muted/20'}`}
                  aria-label="Select Marathi"
                >
                  मराठी
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${lang === 'en' ? 'bg-primary text-primary-foreground' : 'bg-muted/10 text-foreground hover:bg-muted/20'}`}
                  aria-label="Select English"
                >
                  English
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border animate-fade-in max-h-[70vh] overflow-y-auto">
              <nav className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  item.children ? (
                    <div key={index}>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between px-4 py-3 text-foreground font-medium"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.label && (
                        <div className="pl-4 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              onClick={() => setIsMenuOpen(false)}
                              className={`block px-4 py-2 rounded-lg ${isActive(child.href) ? 'bg-primary/10 text-primary' : 'text-muted-foreground'
                                }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      to={item.href!}
                      onClick={() => setIsMenuOpen(false)}
                      className={`px-4 py-3 rounded-lg font-medium ${isActive(item.href!) ? 'bg-primary/10 text-primary' : 'text-foreground'
                        }`}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
                <Link
                  to="/donate"
                  onClick={() => setIsMenuOpen(false)}
                  className="mx-4 mt-2 px-5 py-3 rounded-lg gradient-gold text-accent-foreground font-semibold text-center shadow-gold"
                >
                  {t('देणगी द्या','Donate')}
                </Link>

                {/* Language Switcher Mobile */}
                <div className="mx-4 mt-4 flex gap-2 border-t border-border pt-4">
                  <button
                    onClick={() => { setLang('mr'); setIsMenuOpen(false); }}
                    className={`flex-1 px-3 py-2 rounded text-sm font-semibold transition-colors ${lang === 'mr' ? 'bg-primary text-primary-foreground' : 'bg-muted/10 text-foreground'}`}
                  >
                    मराठी
                  </button>
                  <button
                    onClick={() => { setLang('en'); setIsMenuOpen(false); }}
                    className={`flex-1 px-3 py-2 rounded text-sm font-semibold transition-colors ${lang === 'en' ? 'bg-primary text-primary-foreground' : 'bg-muted/10 text-foreground'}`}
                  >
                    English
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="gradient-hero pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={mandalLogo}
                  alt="बुलढाणा जिल्हा बौद्ध रहिवासी समाज मंडळ मुंबई"
                  className="w-12 h-12 rounded-xl object-cover border-2 border-accent/30"
                />
                <div>
                  <p className="font-bold text-primary-foreground">{t('बुलढाणा जिल्हा','Buldhana District')}</p>
                  <p className="text-primary-foreground/80 text-sm">{t('बौद्ध रहिवासी समाज मंडळ','Buddhist Residents Association')}</p>
                </div>
              </div>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {t('मुंबईत राहणाऱ्या बुलढाणा जिल्ह्यातील धम्म बांधवांसाठी शैक्षणिक, सामाजिक आणि सांस्कृतिक मदत.','Educational, social and cultural support for Buldhana residents in Mumbai.')}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-primary-foreground font-semibold mb-4">{t('द्रुत दुवे','Quick Links')}</h3>
              <div className="space-y-2">
                {[
                  { href: "/about", label: t('आमच्याबद्दल','About') },
                  { href: "/objectives", label: t('ध्येय व उपक्रम','Objectives') },
                  { href: "/events", label: t('कार्यक्रम','Events') },
                  { href: "/committee", label: t('कार्यकारिणी','Committee') },
                ].map(link => (
                  <Link key={link.href} to={link.href} className="block text-primary-foreground/70 hover:text-accent text-sm transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Get Involved */}
            <div>
              <h3 className="text-primary-foreground font-semibold mb-4">{t('सहभागी व्हा','Get Involved')}</h3>
              <div className="space-y-2">
                {[
                  { href: "/get-help", label: t('मदत मिळवा','Get Help') },
                  { href: "/join", label: t('सभासद बना','Join') },
                  { href: "/donate", label: t('देणगी द्या','Donate') },
                  { href: "/bhavan", label: t('बुलढाणा भवन','Bhavan') },
                ].map(link => (
                  <Link key={link.href} to={link.href} className="block text-primary-foreground/70 hover:text-accent text-sm transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-primary-foreground font-semibold mb-4">{t('संपर्क','Contact')}</h3>
              <div className="space-y-3 text-sm">
                <a href="tel:+919702777927" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4" />
                  +91 9702777927
                </a>
                <a
                  href="mailto:buldhanabauddhamandal@gmail.com?subject=संपर्क%20-%20बुलढाणा%20मंडळ"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors cursor-pointer"
                  title={t('ईमेल पाठवा','Send email')}
                >
                  <Mail className="w-4 h-4" />
                  buldhanabauddhamandal@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-primary-foreground/20 text-center">
            <p className="text-2xl font-semibold text-accent mb-4">{t('सविनय जयभीम 🙏','Savinay Jai Bhim 🙏')}</p>
            <p className="text-sm text-primary-foreground/60 mb-2">
              {t('धर्मदाय आयुक्त कार्यालय, ठाणे येथे नोंदणीकृत (२०२२)','Registered (Thane) - 2022')}
            </p>
            <p className="text-sm text-primary-foreground/60 flex items-center justify-center gap-1">
              © {new Date().getFullYear()} {t('बुलढाणा जिल्हा बौद्ध रहिवासी समाज मंडळ मुंबई','Buldhana District Buddhist Residents Association, Mumbai')}.
              <span className="flex items-center gap-1">
                {t('Made with','Made with')} <Heart className="w-4 h-4 text-accent fill-accent" /> {t('for our community','for our community')}
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
           