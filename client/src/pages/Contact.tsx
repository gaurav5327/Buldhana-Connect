import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import Layout from "@/components/Layout";

const Contact = () => {
  const locations = ["कल्याण", "ठाणे", "नवी मुंबई", "चेंबूर", "दादर", "अंधेरी", "बोरिवली", "विरार", "उल्हासनगर", "मुलुंड"];

  return (
    <Layout>
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">संपर्क</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            आमच्याशी <span className="text-gradient">संपर्क</span> करा
          </h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <Phone className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">फोन</h3>
                <a href="tel:+919702777927" className="text-primary text-lg">+91 9702777927</a>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <Mail className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">ईमेल</h3>
                <a
                  href="mailto:buldhanabauddhamandal@gmail.com?subject=संपर्क%20-%20बुलढाणा%20मंडळ"
                  className="text-primary hover:underline cursor-pointer"
                  title="ईमेल पाठवा"
                >
                  buldhanabauddhamandal@gmail.com
                </a>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <Clock className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold text-foreground mb-2">केव्हाही संपर्क करा</h3>
                <p className="text-muted-foreground">आम्ही मदतीसाठी सदैव तत्पर आहोत</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-4">आमची उपस्थिती</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {locations.map((loc, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">{loc}</span>
                ))}
              </div>

              <div className="space-y-3">
                <a
                  href="https://chat.whatsapp.com/IGoTEsXKgfSIhokZZuPHQZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover-lift"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp ग्रुप जॉइन करा
                </a>

                <a
                  href="https://wa.me/919702777927"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover-lift"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp वर संपर्क करा
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-12 p-6 rounded-xl bg-primary/5 border border-primary/20 text-center">
            <p className="text-foreground">
              <strong>नोंदणी:</strong> धर्मदाय आयुक्त कार्यालय, ठाणे (२०२२)
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
