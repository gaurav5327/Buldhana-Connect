import { Building2, BookOpen, Users, PartyPopper, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import bhavanImg from "@/assets/buldhana-bhavan.jpeg";

const Bhavan = () => {
  const features = [
    { icon: BookOpen, title: "निवासी अभ्यासिका", description: "स्पर्धा परीक्षांची तयारी करणाऱ्या विद्यार्थ्यांसाठी" },
    { icon: Building2, title: "सुसज्ज ग्रंथालय", description: "विविध विषयांवरील पुस्तके आणि अभ्यास साहित्य" },
    { icon: Users, title: "तज्ञ मार्गदर्शन", description: "विविध क्षेत्रातील तज्ञांचे नियमित मार्गदर्शन सत्र" },
    { icon: PartyPopper, title: "प्रशस्त सभागृह", description: "लग्न, समारंभ आणि इतर कार्यक्रमांसाठी" },
  ];

  return (
    <Layout>
      {/* Hero with Image */}
      <section className="relative">
        <div className="h-64 md:h-80 overflow-hidden">
          <img 
            src={bhavanImg} 
            alt="बुलढाणा भवन - स्वप्न प्रकल्प" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 py-8">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">स्वप्न प्रकल्प</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              <span className="text-accent">बुलढाणा</span> भवन
            </h1>
            <p className="max-w-3xl mx-auto text-primary-foreground/90 text-lg">
              मुंबईत बुलढाणावासियांसाठी स्वतःचे केंद्र - निवास, अभ्यास, आणि सांस्कृतिक कार्यक्रमांसाठी
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-3xl bg-card border border-border mb-12">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">आमचे स्वप्न</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                आपल्या बुलढाणा जिल्ह्याने मुंबईला खूप मोठे अधिकारी तसेच उद्योजक दिलेले आहेत. पण मुंबईला आलेल्या लोकांची राहण्याची व्यवस्था २-३ दिवसांपेक्षा अधिक करणे कठीण आहे. म्हणून आम्ही बुलढाणा भवन बांधण्याचा निर्णय घेतला.
              </p>
              <div className="flex items-center gap-6 p-4 rounded-xl bg-accent/10">
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">₹५ लाख+</p>
                  <p className="text-xs text-muted-foreground">निधी संकलित</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">२०२४</p>
                  <p className="text-xs text-muted-foreground">चॅरिटी शो</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-6 text-center">प्रस्तावित सुविधा</h3>
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
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">या स्वप्नात सहभागी व्हा!</h3>
              <p className="text-primary-foreground/80 mb-6">तुमची देणगी या प्रकल्पासाठी मोलाची आहे.</p>
              <Link to="/donate" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-gold text-accent-foreground font-semibold shadow-gold hover-lift">
                देणगी द्या <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Bhavan;
