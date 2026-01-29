import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, Heart } from "lucide-react";
import mandalLogo from "@/assets/mandal-logo.jpeg";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "मुख्यपृष्ठ" },
    { href: "/about", label: "आमच्याबद्दल" },
    { href: "/objectives", label: "ध्येय व उपक्रम" },
    { href: "/events", label: "कार्यक्रम" },
    { href: "/gallery", label: "गॅलरी" },
    { href: "/committee", label: "कार्यकारिणी" },
    {
      label: "सहभाग",
      children: [
        { href: "/get-help", label: "मदत हवी आहे?" },
        { href: "/join", label: "सभासद बना" },
        { href: "/donate", label: "देणगी द्या" },
      ]
    },
    { href: "/bhavan", label: "बुलढाणा भवन" },
    { href: "/news", label: "बातम्या" },
    { href: "/contact", label: "संपर्क" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>धर्मदाय आयुक्त कार्यालय, ठाणे - नोंदणीकृत २०२२</p>
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
            <Link to="/" className="flex items-center gap-3">
              <img
                src={mandalLogo}
                alt="बुलढाणा जिल्हा बौद्ध रहिवासी समाज मंडळ मुंबई"
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl object-cover"
              />
              <div className="hidden sm:block max-w-[180px]">
                <p className="font-bold text-foreground text-sm lg:text-base leading-tight mb-1">बुलढाणा जिल्हा</p>
                <p className="text-xs lg:text-sm text-muted-foreground leading-tight">बौद्ध रहिवासी समाज मंडळ</p>
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

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/donate"
                className="px-5 py-2.5 rounded-lg gradient-gold text-accent-foreground font-semibold text-sm shadow-gold hover-lift"
              >
                देणगी द्या
              </Link>
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
                  देणगी द्या
                </Link>
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
                  <p className="font-bold text-primary-foreground">बुलढाणा जिल्हा</p>
                  <p className="text-primary-foreground/80 text-sm">बौद्ध रहिवासी समाज मंडळ</p>
                </div>
              </div>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                मुंबईत राहणाऱ्या बुलढाणा जिल्ह्यातील धम्म बांधवांसाठी शैक्षणिक, सामाजिक आणि सांस्कृतिक मदत.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-primary-foreground font-semibold mb-4">द्रुत दुवे</h3>
              <div className="space-y-2">
                {[
                  { href: "/about", label: "आमच्याबद्दल" },
                  { href: "/objectives", label: "ध्येय व उपक्रम" },
                  { href: "/events", label: "कार्यक्रम" },
                  { href: "/committee", label: "कार्यकारिणी" },
                ].map(link => (
                  <Link key={link.href} to={link.href} className="block text-primary-foreground/70 hover:text-accent text-sm transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Get Involved */}
            <div>
              <h3 className="text-primary-foreground font-semibold mb-4">सहभागी व्हा</h3>
              <div className="space-y-2">
                {[
                  { href: "/get-help", label: "मदत मिळवा" },
                  { href: "/join", label: "सभासद बना" },
                  { href: "/donate", label: "देणगी द्या" },
                  { href: "/bhavan", label: "बुलढाणा भवन" },
                ].map(link => (
                  <Link key={link.href} to={link.href} className="block text-primary-foreground/70 hover:text-accent text-sm transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-primary-foreground font-semibold mb-4">संपर्क</h3>
              <div className="space-y-3 text-sm">
                <a href="tel:+919702777927" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4" />
                  +91 9702777927
                </a>
                <a
                  href="mailto:buldhanabauddhamandal@gmail.com?subject=संपर्क%20-%20बुलढाणा%20मंडळ"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors cursor-pointer"
                  title="ईमेल पाठवा"
                >
                  <Mail className="w-4 h-4" />
                  buldhanabauddhamandal@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-primary-foreground/20 text-center">
            <p className="text-2xl font-semibold text-accent mb-4">सविनय जयभीम 🙏</p>
            <p className="text-sm text-primary-foreground/60 mb-2">
              धर्मदाय आयुक्त कार्यालय, ठाणे येथे नोंदणीकृत (२०२२)
            </p>
            <p className="text-sm text-primary-foreground/60 flex items-center justify-center gap-1">
              © {new Date().getFullYear()} बुलढाणा जिल्हा बौद्ध रहिवासी समाज मंडळ मुंबई.
              <span className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-accent fill-accent" /> for our community
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
