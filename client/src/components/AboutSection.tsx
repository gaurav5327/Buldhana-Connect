import { Target, HandHeart, GraduationCap, Briefcase, Users2, Building } from "lucide-react";

const AboutSection = () => {
  const services = [
    {
      icon: Briefcase,
      title: "नोकरी मार्गदर्शन",
      description: "विविध क्षेत्रातील तज्ञांकडून नोकरी संदर्भात मार्गदर्शन व मदत"
    },
    {
      icon: GraduationCap,
      title: "शैक्षणिक सहाय्य",
      description: "शिक्षणासाठी मुंबईला येणाऱ्या विद्यार्थ्यांना योग्य मार्गदर्शन"
    },
    {
      icon: HandHeart,
      title: "आरोग्य सेवा",
      description: "आरोग्य उपचारासाठी येणाऱ्या लोकांना डॉक्टर व हॉस्पिटल संपर्क"
    },
    {
      icon: Users2,
      title: "निवास व्यवस्था",
      description: "२-३ दिवसांसाठी राहण्याची तात्पुरती व्यवस्था"
    },
    {
      icon: Building,
      title: "व्यवसाय मदत",
      description: "उद्योजकांशी संपर्क साधून व्यवसाय सुरू करण्यासाठी मार्गदर्शन"
    },
    {
      icon: Target,
      title: "सरकारी कामे",
      description: "मंत्रालयातील अधिकाऱ्यांच्या माध्यमातून सरकारी कामांसाठी मदत"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            आमच्याबद्दल
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            आमचे <span className="text-primary">ध्येय</span> व <span className="text-accent">उद्दिष्टे</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            बुलढाणा जिल्ह्यातील धम्म बांधव मुंबईच्या अनेक उपनगरांमध्ये राहतात - 
            कल्याण, ठाणे, नवी मुंबई, चेंबूर, दादर, अंधेरी, बोरिवली, विरार, उल्हासनगर. 
            आमचे मंडळ गेल्या दहा वर्षांपासून सातत्याने या सर्व ठिकाणी मीटिंग आणि 
            स्नेहसंमेलनांचे आयोजन करत आहे.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="relative max-w-4xl mx-auto mb-16 p-8 md:p-12 rounded-3xl gradient-card shadow-elevated border border-border">
          <div className="absolute top-0 left-0 w-full h-1 gradient-gold rounded-t-3xl" />
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">आमचा मुख्य हेतू</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                जे लोक मुंबईला कामाकरता येतात - नोकरीसाठी, शिक्षणासाठी, आरोग्य उपचारासाठी 
                किंवा इतर कामासाठी - त्यांना योग्य ती मदत मिळावी आणि त्यांचे काम सोपे व्हावे 
                हीच संकल्पना घेऊन आम्ही सर्वजण काम करीत आहोत. शैक्षणिक, सामाजिक आणि 
                सांस्कृतिक या माध्यमातून आम्ही लोकांपर्यंत पोहोचत आहोत.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover-lift cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-4 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Expert Members Note */}
        <div className="mt-16 p-8 rounded-3xl bg-primary/5 border border-primary/20 text-center">
          <p className="text-lg text-foreground">
            आमच्या मंडळामध्ये <span className="font-semibold text-primary">डॉक्टर, इंजिनीयर, वकील, बिल्डर, उद्योजक</span> तसेच 
            <span className="font-semibold text-accent"> मंत्रालयात मोठ्या पदावर</span> खूप लोक काम करीत आहेत. 
            त्यामुळे कोणतेही काम असो, आपल्याला कुठेच अडचण येत नाही.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
