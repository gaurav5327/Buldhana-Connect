import { Phone, Mail, MapPin, Clock, Users, FileCheck } from "lucide-react";

const ContactSection = () => {
  const locations = [
    "कल्याण", "ठाणे", "नवी मुंबई", "चेंबूर", "दादर",
    "अंधेरी", "बोरिवली", "विरार", "उल्हासनगर", "मुलुंड"
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            संपर्क
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            आमच्याशी <span className="text-primary">संपर्क</span> करा
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            तुम्ही खाली दिलेल्या मान्यवर सभासदांना कधीही फोन करू शकता व आपले काम सांगू शकता.
            आम्ही तुमच्या मदतीसाठी सदैव तत्पर आहोत.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Registration Info */}
            <div className="p-6 rounded-2xl bg-background border border-border shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">नोंदणी माहिती</h3>
                  <p className="text-muted-foreground">
                    मंडळाचे रजिस्ट्रेशन ठाणे येथील धर्मदाय आयुक्त कार्यालयामध्ये २०२२ साली झाले आहे.
                  </p>
                  <p className="mt-2 text-sm text-primary font-medium">
                    बुलढाणा जिल्हा बौद्ध रहिवासी समाज मंडळ मुंबई (रजि.)
                  </p>
                </div>
              </div>
            </div>

            {/* Help Available */}
            <div className="p-6 rounded-2xl bg-background border border-border shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">केव्हाही मदत उपलब्ध</h3>
                  <p className="text-muted-foreground">
                    नोकरी, शिक्षण, आरोग्य उपचार किंवा इतर कोणत्याही कामासाठी
                    तुम्ही केव्हाही मदतीचा हात मागू शकता.
                  </p>
                </div>
              </div>
            </div>

            {/* Members Count */}
            <div className="p-6 rounded-2xl gradient-hero shadow-elevated">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center shrink-0">
                  <Users className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-foreground">७०००+</p>
                  <p className="text-primary-foreground/80">कुटुंबे आमच्यासोबत जोडलेली</p>
                </div>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <div className="p-6 rounded-2xl bg-background border border-border shadow-soft h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">आमची उपस्थिती</h3>
                  <p className="text-sm text-muted-foreground">मुंबई आणि परिसरातील उपनगरे</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {locations.map((location, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {location}
                  </span>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-muted-foreground mb-4">
                  आम्ही प्रत्येक उपनगरात जाऊन सभा आणि स्नेहसंमेलन घेतो.
                  तुमच्या जवळच्या सभासदांशी संपर्क साधा.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+919702777927"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover-lift"
                  >
                    <Phone className="w-5 h-5" />
                    फोन करा
                  </a>
                  <a
                    href="mailto:buldhanabauddhamandal@gmail.com?subject=संपर्क%20-%20बुलढाणा%20मंडळ"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                    title="ईमेल पाठवा"
                  >
                    <Mail className="w-5 h-5" />
                    ईमेल करा
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
