import { Target, Users, Award, Calendar, Shield, Heart, BookOpen, Star } from "lucide-react";
import Layout from "@/components/Layout";
import babasahebImg from "@/assets/babasaheb-2.jpeg";
import mandalLogo from "@/assets/mandal-logo.jpeg";

const About = () => {
  const timeline = [
    { year: "२०१४", title: "मंडळाची सुरुवात", description: "मुंबईतील बुलढाणा जिल्हावासियांच्या एकत्रीकरणासाठी पहिले पाऊल" },
    { year: "२०१८", title: "पहिले स्नेहसंमेलन", description: "पनवेल येथे ३७५+ सहभागींसह भव्य कार्यक्रम" },
    { year: "२०२२", title: "अधिकृत नोंदणी", description: "धर्मदाय आयुक्त कार्यालय, ठाणे येथे नोंदणी" },
    { year: "२०२४", title: "बुलढाणा भवन निधी", description: "मुलुंड चॅरिटी शो - ₹५ लाख+ निधी संकलन" },
    { year: "२०२५", title: "शिक्षक दिन सोहळा", description: "४०+ आदर्श शिक्षकांचा सन्मान - जुईनगर" },
  ];

  const values = [
    { icon: Heart, title: "बंधुत्व", description: "धम्म बांधवांमध्ये एकोपा व परस्पर सहाय्य" },
    { icon: BookOpen, title: "शिक्षण", description: "ज्ञानाचा प्रसार हे आमचे प्राथमिक उद्दिष्ट" },
    { icon: Shield, title: "सामाजिक न्याय", description: "समता, स्वातंत्र्य आणि बंधुत्वाचे मूल्य" },
    { icon: Star, title: "सेवाभाव", description: "निःस्वार्थ सेवा हेच खरे धम्माचरण" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left">
            <img
              src={mandalLogo}
              alt="बुलढाणा जिल्हा बौद्ध रहिवासी समाज मंडळ मुंबई"
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-elevated border-4 border-accent/30 shrink-0"
            />
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                आमच्याबद्दल
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 marathi-title organization-name">
                बुलढाणा जिल्हा बौद्ध रहिवासी<br />
                <span className="text-accent">समाज मंडळ मुंबई</span>
              </h1>
              <p className="max-w-3xl text-primary-foreground/80 text-lg">
                गेल्या दहा वर्षांपासून मुंबईतील बुलढाणा जिल्हावासियांच्या सेवेत कार्यरत -
                शैक्षणिक, सामाजिक आणि सांस्कृतिक माध्यमातून समाजाची प्रगती
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-card border border-border shadow-soft">
              <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">आमचे ध्येय (Vision)</h2>
              <p className="text-muted-foreground leading-relaxed">
                बुलढाणा जिल्ह्यातील प्रत्येक धम्म बांधवाला मुंबईसारख्या महानगरात
                आपलेपणाची भावना मिळावी, त्यांना योग्य मार्गदर्शन व मदत मिळावी
                आणि त्यांच्या प्रगतीत कोणतीही अडचण येऊ नये यासाठी एक मजबूत
                सामाजिक आधार निर्माण करणे.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border shadow-soft">
              <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-accent-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">आमचे उद्दिष्ट (Mission)</h2>
              <p className="text-muted-foreground leading-relaxed">
                मुंबईला नोकरी, शिक्षण, आरोग्य उपचार किंवा इतर कामासाठी येणाऱ्या
                बुलढाणा जिल्हावासियांना योग्य ती मदत करणे, त्यांचे काम सोपे करणे
                आणि शैक्षणिक, सामाजिक व सांस्कृतिक कार्यक्रमांद्वारे समाजाला
                एकत्र आणणे.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                आमची स्थापना
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                मंडळाची गरज का भासली?
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                मुंबई ही महाराष्ट्राची राजधानी आहे. बुलढाणा जिल्ह्यातील अनेक धम्म बांधव
                नोकरी, शिक्षण, आरोग्य उपचार किंवा व्यवसायासाठी मुंबईला येतात. मुंबईसारख्या
                महानगरात नवीन व्यक्तीला योग्य मार्गदर्शन मिळणे कठीण असते.
              </p>
              <p>
                जर वेळेवर योग्य मदत मिळाली तर त्यांचे काम लवकर होते - हीच संकल्पना
                घेऊन आम्ही मंडळाची स्थापना केली. आमच्या मंडळामध्ये डॉक्टर, इंजिनीयर,
                वकील, बिल्डर, उद्योजक तसेच मंत्रालयात मोठ्या पदावर अनेक लोक काम करतात.
                त्यामुळे कोणतेही काम असो, आपल्याला योग्य मार्गदर्शन मिळते.
              </p>
              <p>
                आम्ही मुंबईच्या अनेक उपनगरांमध्ये - कल्याण, ठाणे, नवी मुंबई, चेंबूर, दादर,
                अंधेरी, बोरिवली, विरार, उल्हासनगर - जाऊन मीटिंग व स्नेहसंमेलन आयोजित करतो.
                आतापर्यंत आम्ही सहा ते सात हजार कुटुंबे जोडलेली आहेत.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
              आमचा प्रवास
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              वाटचालीचे टप्पे
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-bold text-sm">{item.year}</span>
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-4" />
                  )}
                </div>
                <div className="pt-3 pb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Info */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl gradient-hero relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-2xl gradient-gold flex items-center justify-center shrink-0">
                <Award className="w-12 h-12 text-accent-foreground" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                  नोंदणीकृत धर्मादाय संस्था
                </h2>
                <p className="text-primary-foreground/80 mb-4">
                  बुलढाणा जिल्हा बौद्ध रहिवासी समाज मंडळ मुंबई ही एक नोंदणीकृत संस्था आहे.
                  धर्मदाय आयुक्त कार्यालय, ठाणे येथे २०२२ साली आमची अधिकृत नोंदणी झाली आहे.
                </p>
                <p className="text-accent font-semibold">
                  नोंदणी क्रमांक: E-XXXX (Thane)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
            <img
              src={babasahebImg}
              alt="डॉ. बाबासाहेब आंबेडकर"
              className="w-48 h-48 rounded-2xl object-cover shadow-elevated border-4 border-primary/20 shrink-0"
            />
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                आमची मूल्ये
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                डॉ. बाबासाहेब आंबेडकर यांच्या विचारांवर आधारित
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                शिक्षण, समता, स्वातंत्र्य आणि बंधुत्व - हे डॉ. बाबासाहेब आंबेडकर यांचे विचार आमच्या कार्याचा पाया आहेत.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border text-center hover-lift">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Message */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border">
            <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
              "आम्ही केवळ एक संस्था नाही, आम्ही एक कुटुंब आहोत.
              बुलढाणा जिल्ह्यातील प्रत्येक धम्म बांधवाचे कल्याण हेच आमचे ध्येय."
            </p>
            <p className="mt-4 text-accent font-semibold">- बुलढाणा जिल्हा बौद्ध रहिवासी समाज मंडळ कार्यकारिणी</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
