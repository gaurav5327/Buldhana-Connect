import { Users, Heart, Building2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-accent blur-3xl" />
      </div>
      
      {/* Ashoka Chakra Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5">
        <div className="w-full h-full border-[3px] border-primary-foreground rounded-full animate-pulse-glow" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Badge */}
        <div className="animate-fade-up opacity-0 mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            स्थापना २०१४ | नोंदणी २०२२
          </span>
        </div>
        
        {/* Main Title */}
        <h1 className="animate-fade-up opacity-0 animation-delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
          बुलढाणा जिल्हा बौद्ध रहिवासी
          <br />
          <span className="text-gradient">समाज मंडळ मुंबई</span>
        </h1>
        
        {/* Tagline */}
        <p className="animate-fade-up opacity-0 animation-delay-200 text-xl md:text-2xl text-primary-foreground/80 mb-4 font-medium">
          सविनय जयभीम 🙏
        </p>
        
        {/* Description */}
        <p className="animate-fade-up opacity-0 animation-delay-300 max-w-3xl text-primary-foreground/70 text-lg md:text-xl mb-10 leading-relaxed">
          मुंबईत राहणाऱ्या बुलढाणा जिल्ह्यातील धम्म बांधवांना शैक्षणिक, सामाजिक 
          आणि सांस्कृतिक मदत करण्यासाठी कार्यरत
        </p>
        
        {/* Stats */}
        <div className="animate-fade-up opacity-0 animation-delay-400 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-12">
          <div className="flex flex-col items-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
            <Users className="w-8 h-8 text-accent mb-3" />
            <span className="text-3xl md:text-4xl font-bold text-primary-foreground">७०००+</span>
            <span className="text-primary-foreground/70 text-sm mt-1">कुटुंबे जोडलेली</span>
          </div>
          <div className="flex flex-col items-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
            <Heart className="w-8 h-8 text-accent mb-3" />
            <span className="text-3xl md:text-4xl font-bold text-primary-foreground">१३</span>
            <span className="text-primary-foreground/70 text-sm mt-1">तालुके समाविष्ट</span>
          </div>
          <div className="flex flex-col items-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
            <Building2 className="w-8 h-8 text-accent mb-3" />
            <span className="text-3xl md:text-4xl font-bold text-primary-foreground">१०+</span>
            <span className="text-primary-foreground/70 text-sm mt-1">वर्षांचा अनुभव</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="animate-fade-up opacity-0 animation-delay-500 flex flex-col sm:flex-row gap-4">
          <a 
            href="#about" 
            className="px-8 py-4 rounded-xl gradient-gold text-accent-foreground font-semibold text-lg shadow-gold hover-lift"
          >
            आमच्याबद्दल जाणून घ्या
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 rounded-xl bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 font-semibold text-lg hover:bg-primary-foreground/20 transition-colors"
          >
            संपर्क करा
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/70 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
