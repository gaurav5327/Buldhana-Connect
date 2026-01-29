import { GraduationCap, Briefcase, Heart, Users, Building, Home, Scale, Stethoscope, Award, BookOpen, Mic, Calendar } from "lucide-react";
import Layout from "@/components/Layout";

const Objectives = () => {
  const mainObjectives = [
    {
      icon: GraduationCap,
      title: "शैक्षणिक सहाय्य",
      description: "विद्यार्थ्यांना शिक्षणासाठी मार्गदर्शन व प्रोत्साहन",
      points: [
        "स्पर्धा परीक्षांची तयारी मार्गदर्शन",
        "मेरिट विद्यार्थ्यांना पारितोषिक",
        "शिष्यवृत्ती माहिती व मदत",
        "उच्च शिक्षणासाठी सल्ला"
      ]
    },
    {
      icon: Briefcase,
      title: "नोकरी मार्गदर्शन",
      description: "करिअर निवड व नोकरी संधी माहिती",
      points: [
        "विविध क्षेत्रातील तज्ञांकडून मार्गदर्शन",
        "नोकरी संधींची माहिती",
        "मुलाखत तयारी सल्ला",
        "व्यावसायिक नेटवर्किंग"
      ]
    },
    {
      icon: Stethoscope,
      title: "आरोग्य सहाय्य",
      description: "आरोग्य उपचारासाठी मदत व मार्गदर्शन",
      points: [
        "डॉक्टरांशी संपर्क",
        "हॉस्पिटल माहिती",
        "उपचार खर्च मदत (आवश्यकतेनुसार)",
        "आरोग्य विमा माहिती"
      ]
    },
    {
      icon: Home,
      title: "निवास व्यवस्था",
      description: "मुंबईत तात्पुरती राहण्याची व्यवस्था",
      points: [
        "पीजी/भाड्याच्या खोली माहिती",
        "विश्वासार्ह जागा शोधण्यात मदत",
        "नवीन लोकांसाठी मार्गदर्शन"
      ]
    },
    {
      icon: Scale,
      title: "कायदेशीर मदत",
      description: "कायदेविषयक बाबींमध्ये सल्ला",
      points: [
        "वकिलांशी संपर्क",
        "कायदेशीर सल्ला",
        "कागदपत्र तयारी मदत",
        "न्यायालय प्रक्रिया मार्गदर्शन"
      ]
    },
    {
      icon: Building,
      title: "सरकारी कामे",
      description: "मंत्रालय व सरकारी कार्यालयातील कामे",
      points: [
        "मंत्रालयातील अधिकाऱ्यांची मदत",
        "सरकारी योजनांची माहिती",
        "दाखले व प्रमाणपत्रे",
        "शासकीय कार्यालय मार्गदर्शन"
      ]
    }
  ];

  const culturalActivities = [
    {
      icon: Calendar,
      title: "डॉ. बाबासाहेब आंबेडकर जयंती",
      description: "दरवर्षी १४ एप्रिलला मोठ्या थाटामाटात साजरी"
    },
    {
      icon: Users,
      title: "वार्षिक स्नेहसंमेलन",
      description: "मुंबईच्या विविध उपनगरात बुलढाणावासियांचे एकत्रीकरण"
    },
    {
      icon: Award,
      title: "गुणवंत विद्यार्थी सन्मान",
      description: "मेरिटमध्ये आलेल्या विद्यार्थ्यांना पारितोषिक"
    },
    {
      icon: Mic,
      title: "शिक्षक दिन सोहळा",
      description: "महात्मा फुले स्मृतिदिनी आदर्श शिक्षक पुरस्कार"
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            ध्येय व उपक्रम
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            आमची <span className="text-gradient">उद्दिष्टे</span> व <span className="text-accent">कार्य</span>
          </h1>
          <p className="max-w-3xl mx-auto text-primary-foreground/80 text-lg">
            शैक्षणिक, सामाजिक आणि सांस्कृतिक माध्यमातून बुलढाणा जिल्ह्यातील 
            धम्म बांधवांपर्यंत पोहोचणे आणि त्यांना योग्य मदत करणे
          </p>
        </div>
      </section>

      {/* Main Objectives */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              सामाजिक सहाय्य
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              आम्ही कशात मदत करतो?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              मुंबईला येणाऱ्या प्रत्येक बुलढाणावासियाला खालील बाबींमध्ये मदत मिळते
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainObjectives.map((obj, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border hover-lift group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-4 transition-colors">
                  <obj.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{obj.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{obj.description}</p>
                <ul className="space-y-2">
                  {obj.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Activities */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
              सांस्कृतिक उपक्रम
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              सांस्कृतिक कार्यक्रम
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {culturalActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center shrink-0">
                  <activity.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{activity.title}</h3>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Help */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl gradient-hero relative overflow-hidden">
            <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-accent/20 blur-2xl" />
            <div className="relative text-center">
              <Heart className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                आपत्कालीन मदत
              </h2>
              <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                मुंबईला नवीन आलेल्या व्यक्तींसाठी विशेष मदत - राहण्याची तात्पुरती व्यवस्था, 
                आपत्कालीन वैद्यकीय मदत, आणि तातडीच्या परिस्थितीत सर्व प्रकारचे सहाय्य.
              </p>
              <p className="text-accent font-semibold text-lg">
                केव्हाही संपर्क करा - आम्ही मदतीसाठी तत्पर आहोत!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Network */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              आमचे तज्ञ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              विविध क्षेत्रातील तज्ञ सदस्य
            </h2>
          </div>

          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-background border border-border">
            <p className="text-lg text-foreground text-center mb-8">
              आमच्या मंडळामध्ये खालील क्षेत्रातील तज्ञ सदस्य आहेत:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["डॉक्टर", "इंजिनीयर", "वकील", "बिल्डर", "उद्योजक", "शिक्षक", "प्राध्यापक", 
                "बँक अधिकारी", "सरकारी अधिकारी", "मंत्रालय अधिकारी", "पोलीस अधिकारी", 
                "चार्टर्ड अकाउंटंट"].map((expert, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm"
                >
                  {expert}
                </span>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8">
              त्यामुळे कोणतेही काम असो, आपल्याला कुठेच अडचण येत नाही.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Objectives;
