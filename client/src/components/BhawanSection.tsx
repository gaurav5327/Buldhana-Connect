import { Building2, BookOpen, Users, Calendar, PartyPopper, Target } from "lucide-react";

const BhawanSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "निवासी अभ्यासिका",
      description: "स्पर्धा परीक्षांची तयारी करणाऱ्या विद्यार्थ्यांसाठी"
    },
    {
      icon: Building2,
      title: "सुसज्ज ग्रंथालय",
      description: "विविध विषयांवरील पुस्तके आणि अभ्यास साहित्य"
    },
    {
      icon: Users,
      title: "तज्ञ मार्गदर्शन",
      description: "विविध क्षेत्रातील तज्ञांचे नियमित मार्गदर्शन सत्र"
    },
    {
      icon: PartyPopper,
      title: "प्रशस्त सभागृह",
      description: "लग्न, समारंभ आणि इतर कार्यक्रमांसाठी"
    }
  ];

  return (
    <section id="bhawan" className="py-20 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            स्वप्न प्रकल्प
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">बुलढाणा</span> <span className="text-accent">भवन</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            मुंबईत राहणाऱ्या बुलढाणावासियांसाठी एक स्वतःचे केंद्र - जिथे राहणे, 
            शिकणे आणि एकत्र येणे शक्य होईल.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Vision Card */}
          <div className="relative">
            <div className="p-8 md:p-10 rounded-3xl gradient-hero shadow-elevated">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-accent/20 blur-xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center">
                    <Target className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-foreground">आमचे स्वप्न</h3>
                </div>

                <p className="text-primary-foreground/90 text-lg leading-relaxed mb-6">
                  आपल्या बुलढाणा जिल्ह्याने मुंबईला खूप मोठे अधिकारी तसेच उद्योजक दिलेले आहेत. 
                  सर्वांचे मुंबईत घरे आहेत, पण मुंबईला आलेल्या लोकांची राहण्याची व्यवस्था 
                  २-३ दिवसांपेक्षा अधिक करणे कठीण आहे.
                </p>

                <p className="text-primary-foreground/90 text-lg leading-relaxed mb-6">
                  म्हणून आम्ही सर्वांनी विचार केला की आपण <strong className="text-accent">बुलढाणा भवन</strong> बांधूया!
                </p>

                <div className="p-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20">
                  <p className="text-primary-foreground/80 text-sm">
                    <strong className="text-accent">२०२४ चॅरिटी शो:</strong> मुलुंड येथे आयोजित केलेल्या 
                    चॅरिटी शोमधून जवळपास ₹५ लाख निधी प्राप्त झाला. यामधून आपला अधिकारी 
                    आणि उद्योजक तयार होईल अशी आम्ही आशा बाळगतो.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-4 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border border-accent/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center animate-pulse-glow">
                <Building2 className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">बुलढाणा भवन निधी</p>
                <p className="text-sm text-muted-foreground">आपली मदत आमच्यासाठी मोलाची आहे</p>
              </div>
            </div>
            <a 
              href="#contact"
              className="px-6 py-3 rounded-xl gradient-gold text-accent-foreground font-semibold shadow-gold hover-lift"
            >
              सहभागी व्हा
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BhawanSection;
