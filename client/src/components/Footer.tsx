import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo & Name */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-xl">ब</span>
            </div>
            <div className="text-left">
              <p className="font-bold text-primary-foreground text-lg">बुलढाणा जिल्हा बौद्ध रहिवासी</p>
              <p className="text-primary-foreground/80">समाज मंडळ मुंबई (रजि.)</p>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-2xl font-semibold text-accent mb-4">
            सविनय जयभीम 🙏
          </p>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-primary-foreground/70 mb-8">
            शैक्षणिक, सामाजिक आणि सांस्कृतिक माध्यमातून बुलढाणा जिल्ह्यातील 
            धम्म बांधवांची मुंबईत मदत करण्यासाठी कटिबद्ध.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
              आमच्याबद्दल
            </a>
            <a href="#events" className="text-primary-foreground/80 hover:text-accent transition-colors">
              कार्यक्रम
            </a>
            <a href="#bhawan" className="text-primary-foreground/80 hover:text-accent transition-colors">
              बुलढाणा भवन
            </a>
            <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
              संपर्क
            </a>
          </div>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-primary-foreground/20 mx-auto mb-6" />

          {/* Registration Info */}
          <p className="text-sm text-primary-foreground/60 mb-4">
            धर्मदाय आयुक्त कार्यालय, ठाणे येथे नोंदणीकृत (२०२२)
          </p>

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/60 flex items-center justify-center gap-1">
            © {currentYear} बुलढाणा जिल्हा बौद्ध रहिवासी समाज मंडळ मुंबई. 
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-accent fill-accent" /> for our community
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
