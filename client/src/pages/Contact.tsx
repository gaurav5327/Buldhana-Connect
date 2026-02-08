import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import { useI18n } from '@/lib/i18n';

const Contact = () => {
  const { t } = useI18n();

  const locations = [t('कल्याण','Kalyan'), t('ठाणे','Thane'), t('नवी मुंबई','Navi Mumbai'), t('चेंबूर','Chembur'), t('दादर','Dadar'), t('अंधेरी','Andheri'), t('बोरिवली','Borivali'), t('विरार','Virar'), t('उल्हासनगर','Ulhasnagar'), t('मुलुंड','Mulund')];

  return (
    <Layout>
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">{t('संपर्क','Contact')}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            {t('आमच्याशी','Get in touch')} <span className="text-gradient">{t('संपर्क','Contact')}</span> { /* keeps similar phrasing */ }
          </h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <Phone className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">{t('फोन','Phone')}</h3>
                <a href="tel:+919702777927" className="text-primary text-lg">+91 9702777927</a>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <Mail className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">{t('ईमेल','Email')}</h3>
                <a
                  href="mailto:buldhanabauddhamandal@gmail.com?subject=संपर्क%20-%20बुलढाणा%20मंडळ"
                  className="text-primary hover:underline cursor-pointer"
                  title={t('ईमेल पाठवा','Send email')}
                >
                  buldhanabauddhamandal@gmail.com
                </a>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <Clock className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold text-foreground mb-2">{t('केव्हाही संपर्क करा','Reach out anytime')}</h3>
                <p className="text-muted-foreground">{t('आम्ही मदतीसाठी सदैव तत्पर आहोत','We are always ready to help')}</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-4">{t('आमची उपस्थिती','Our Presence')}</h3>
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
                  {t('WhatsApp ग्रुप जॉइन करा','Join WhatsApp group')}
                </a>

                <a
                  href="https://wa.me/919702777927"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover-lift"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('WhatsApp वर संपर्क करा','Contact on WhatsApp')}
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-12 p-6 rounded-xl bg-primary/5 border border-primary/20 text-center">
            <p className="text-foreground">
              <strong>{t('नोंदणी:','Registration:')}</strong> {t('धर्मदाय आयुक्त कार्यालय, ठाणे (२०२२)','Charity Commissioner, Thane (2022)')}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
