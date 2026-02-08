import { Building2, BookOpen, Users, PartyPopper, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useI18n } from "@/lib/i18n";
import bhavanImg from "@/assets/buldhana-bhavan.jpeg";

const Bhavan = () => {
  const { t } = useI18n();

  const features = [
    { icon: BookOpen, title: t("निवासी अभ्यासिका", "Residential Study Hall"), description: t("स्पर्धा परीक्षांची तयारी करणाऱ्या विद्यार्थ्यांसाठी", "For students preparing for competitive exams") },
    { icon: Building2, title: t("सुसज्ज ग्रंथालय", "Well-equipped Library"), description: t("विविध विषयांवरील पुस्तके आणि अभ्यास साहित्य", "Books and study materials on various subjects") },
    { icon: Users, title: t("तज्ञ मार्गदर्शन", "Expert Guidance"), description: t("विविध क्षेत्रातील तज्ञांचे नियमित मार्गदर्शन सत्र", "Regular guidance sessions from experts in various fields") },
    { icon: PartyPopper, title: t("प्रशस्त सभागृह", "Spacious Hall"), description: t("लग्न, समारंभ आणि इतर कार्यक्रमांसाठी", "For weddings, ceremonies and other events") },
  ];

  return (
    <Layout>
      {/* Hero with Image */}
      <section className="relative">
        <div className="h-64 md:h-80 overflow-hidden">
          <img 
            src={bhavanImg} 
            alt={t("बुलढाणा भवन - स्वप्न प्रकल्प", "Buldhana Bhavan - Dream Project")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 py-8">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">{t("स्वप्न प्रकल्प", "Dream Project")}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              <span className="text-accent">{t("बुलढाणा", "Buldhana")}</span> {t("भवन", "Bhavan")}
            </h1>
            <p className="max-w-3xl mx-auto text-primary-foreground/90 text-lg">
              {t("मुंबईत बुलढाणावासियांसाठी स्वतःचे केंद्र - निवास, अभ्यास, आणि सांस्कृतिक कार्यक्रमांसाठी", "Our own center in Mumbai for Buldhana residents - for residence, studies, and cultural activities")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-3xl bg-card border border-border mb-12">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">{t("आमचे स्वप्न", "Our Dream")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("आपल्या बुलढाणा जिल्ह्याने मुंबईला खूप मोठे अधिकारी तसेच उद्योजक दिलेले आहेत. पण मुंबईला आलेल्या लोकांची राहण्याची व्यवस्था २-३ दिवसांपेक्षा अधिक करणे कठीण आहे. म्हणून आम्ही बुलढाणा भवन बांधण्याचा निर्णय घेतला.", "Our Buldhana district has given Mumbai many great officers and entrepreneurs. But it's difficult to arrange accommodation for people coming to Mumbai for more than 2-3 days. So we decided to build Buldhana Bhavan.")}
              </p>
              <div className="flex items-center gap-6 p-4 rounded-xl bg-accent/10">
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">₹५ लाख+</p>
                  <p className="text-xs text-muted-foreground">{t("निधी संकलित", "Funds Raised")}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">२०२४</p>
                  <p className="text-xs text-muted-foreground">{t("चॅरिटी शो", "Charity Show")}</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-6 text-center">{t("प्रस्तावित सुविधा", "Proposed Amenities")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{f.title}</h4>
                    <p className="text-sm text-muted-foreground">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center p-8 rounded-3xl gradient-hero">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">{t("या स्वप्नात सहभागी व्हा!", "Be Part of This Dream!")}</h3>
              <p className="text-primary-foreground/80 mb-6">{t("तुमची देणगी या प्रकल्पासाठी मोलाची आहे.", "Your donation is valuable for this project.")}</p>
              <Link to="/donate" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-gold text-accent-foreground font-semibold shadow-gold hover-lift">
                {t("देणगी द्या", "Donate")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Bhavan;
