import { GraduationCap, Briefcase, Heart, Users, Building, Home, Scale, Stethoscope, Award, BookOpen, Mic, Calendar } from "lucide-react";
import Layout from "@/components/Layout";
import { useI18n } from "@/lib/i18n";

const Objectives = () => {
  const { t } = useI18n();

  const mainObjectives = [
    {
      icon: GraduationCap,
      title: t("शैक्षणिक सहाय्य", "Educational Support"),
      description: t("विद्यार्थ्यांना शिक्षणासाठी मार्गदर्शन व प्रोत्साहन", "Guidance and encouragement for student education"),
      points: [
        t("स्पर्धा परीक्षांची तयारी मार्गदर्शन", "Guidance for competitive exam preparation"),
        t("मेरिट विद्यार्थ्यांना पारितोषिक", "Awards for meritorious students"),
        t("शिष्यवृत्ती माहिती व मदत", "Scholarship information and assistance"),
        t("उच्च शिक्षणासाठी सल्ला", "Higher education guidance")
      ]
    },
    {
      icon: Briefcase,
      title: t("नोकरी मार्गदर्शन", "Career Guidance"),
      description: t("करिअर निवड व नोकरी संधी माहिती", "Career selection and job opportunity information"),
      points: [
        t("विविध क्षेत्रातील तज्ञांकडून मार्गदर्शन", "Guidance from experts in various fields"),
        t("नोकरी संधींची माहिती", "Job opportunity information"),
        t("मुलाखत तयारी सल्ला", "Interview preparation tips"),
        t("व्यावसायिक नेटवर्किंग", "Professional networking")
      ]
    },
    {
      icon: Stethoscope,
      title: t("आरोग्य सहाय्य", "Health Support"),
      description: t("आरोग्य उपचारासाठी मदत व मार्गदर्शन", "Medical treatment assistance and guidance"),
      points: [
        t("डॉक्टरांशी संपर्क", "Doctor consultation"),
        t("हॉस्पिटल माहिती", "Hospital information"),
        t("उपचार खर्च मदत (आवश्यकतेनुसार)", "Medical expense assistance (as needed)"),
        t("आरोग्य विमा माहिती", "Health insurance information")
      ]
    },
    {
      icon: Home,
      title: t("निवास व्यवस्था", "Accommodation"),
      description: t("मुंबईत तात्पुरती राहण्याची व्यवस्था", "Temporary accommodation arrangements in Mumbai"),
      points: [
        t("पीजी/भाड्याच्या खोली माहिती", "PG/Rental room information"),
        t("विश्वासार्ह जागा शोधण्यात मदत", "Help finding reliable places"),
        t("नवीन लोकांसाठी मार्गदर्शन", "Guidance for newcomers")
      ]
    },
    {
      icon: Scale,
      title: t("कायदेशीर मदत", "Legal Assistance"),
      description: t("कायदेविषयक बाबींमध्ये सल्ला", "Legal advice and assistance"),
      points: [
        t("वकिलांशी संपर्क", "Lawyer consultation"),
        t("कायदेशीर सल्ला", "Legal advice"),
        t("कागदपत्र तयारी मदत", "Document preparation assistance"),
        t("न्यायालय प्रक्रिया मार्गदर्शन", "Court procedure guidance")
      ]
    },
    {
      icon: Building,
      title: t("सरकारी कामे", "Government Affairs"),
      description: t("मंत्रालय व सरकारी कार्यालयातील कामे", "Ministry and government office matters"),
      points: [
        t("मंत्रालयातील अधिकाऱ्यांची मदत", "Ministry officer assistance"),
        t("सरकारी योजनांची माहिती", "Government scheme information"),
        t("दाखले व प्रमाणपत्रे", "Documents and certificates"),
        t("शासकीय कार्यालय मार्गदर्शन", "Government office guidance")
      ]
    }
  ];

  const culturalActivities = [
    {
      icon: Calendar,
      title: t("डॉ. बाबासाहेब आंबेडकर जयंती", "Dr. B.R. Ambedkar Jayanti"),
      description: t("दरवर्षी १४ एप्रिलला मोठ्या थाटामाटात साजरी", "Celebrated every April 14th with great pomp")
    },
    {
      icon: Users,
      title: t("वार्षिक स्नेहसंमेलन", "Annual Sneh Sammelan"),
      description: t("मुंबईच्या विविध उपनगरात बुलढाणावासियांचे एकत्रीकरण", "Gathering of Buldhana residents across Mumbai suburbs")
    },
    {
      icon: Award,
      title: t("गुणवंत विद्यार्थी सन्मान", "Merit Student Award"),
      description: t("मेरिटमध्ये आलेल्या विद्यार्थ्यांना पारितोषिक", "Rewards for meritorious students")
    },
    {
      icon: Mic,
      title: t("शिक्षक दिन सोहळा", "Teacher's Day Celebration"),
      description: t("महात्मा फुले स्मृतिदिनी आदर्श शिक्षक पुरस्कार", "Ideal Teacher Award on Mahatma Phule Memorial Day")
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            {t("ध्येय व उपक्रम", "Objectives & Initiatives")}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            {t("आमची", "Our")} <span className="text-gradient">{t("उद्दिष्टे", "Objectives")}</span> {t("व", "and")} <span className="text-accent">{t("कार्य", "Work")}</span>
          </h1>
          <p className="max-w-3xl mx-auto text-primary-foreground/80 text-lg">
            {t("शैक्षणिक, सामाजिक आणि सांस्कृतिक माध्यमातून बुलढाणा जिल्ह्यातील धम्म बांधवांपर्यंत पोहोचणे आणि त्यांना योग्य मदत करणे", "Through educational, social and cultural means, to reach Buddhists from Buldhana district in Mumbai and provide them appropriate help")}
          </p>
        </div>
      </section>

      {/* Main Objectives */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("सामाजिक सहाय्य", "Social Assistance")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("आम्ही कशात मदत करतो?", "What do we help with?")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("मुंबईला येणाऱ्या प्रत्येक बुलढाणावासियाला खालील बाबींमध्ये मदत मिळते", "Every Buldhana resident coming to Mumbai receives assistance in the following areas")}
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
              {t("सांस्कृतिक उपक्रम", "Cultural Initiatives")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("सांस्कृतिक कार्यक्रम", "Cultural Programs")}
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
                {t("आपत्कालीन मदत", "Emergency Assistance")}
              </h2>
              <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                {t("मुंबईला नवीन आलेल्या व्यक्तींसाठी विशेष मदत - राहण्याची तात्पुरती व्यवस्था, आपत्कालीन वैद्यकीय मदत, आणि तातडीच्या परिस्थितीत सर्व प्रकारचे सहाय्य.", "Special assistance for newcomers to Mumbai - temporary accommodation arrangements, emergency medical help, and all kinds of help in urgent situations.")}
              </p>
              <p className="text-accent font-semibold text-lg">
                {t("केव्हाही संपर्क करा - आम्ही मदतीसाठी तत्पर आहोत!", "Contact anytime - we are ready to help!")}
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
              {t("आमचे तज्ञ", "Our Experts")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("विविध क्षेत्रातील तज्ञ सदस्य", "Expert Members from Various Fields")}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-background border border-border">
            <p className="text-lg text-foreground text-center mb-8">
              {t("आमच्या मंडळामध्ये खालील क्षेत्रातील तज्ञ सदस्य आहेत:", "Our organization has expert members from the following fields:")}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                t("डॉक्टर", "Doctor"),
                t("इंजिनीयर", "Engineer"),
                t("वकील", "Lawyer"),
                t("बिल्डर", "Builder"),
                t("उद्योजक", "Entrepreneur"),
                t("शिक्षक", "Teacher"),
                t("प्राध्यापक", "Professor"),
                t("बँक अधिकारी", "Bank Officer"),
                t("सरकारी अधिकारी", "Government Officer"),
                t("मंत्रालय अधिकारी", "Ministry Officer"),
                t("पोलीस अधिकारी", "Police Officer"),
                t("चार्टर्ड अकाउंटंट", "Chartered Accountant")
              ].map((expert, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm"
                >
                  {expert}
                </span>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8">
              {t("त्यामुळे कोणतेही काम असो, आपल्याला कुठेच अडचण येत नाही.", "So no matter what work it is, you won't face any problems.")}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Objectives;
