import { Link } from "react-router-dom";
import { Users, Heart, Building2, GraduationCap, Briefcase, Calendar, ArrowRight, HandHeart, Award, MapPin, Phone, X, Image } from "lucide-react";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import mandalLogo from "@/assets/mandal-logo.jpeg";
import babasahebImg from "@/assets/babasaheb.jpeg";
import bhavanImg from "@/assets/buldhana-bhavan.jpeg";
import varshikSahsamelanImg from "@/assets/varshik_sahsamelan.jpg";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Keyboard event handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      if (e.key === 'Escape') {
        closeImageModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);
  const highlights = [
    { icon: Calendar, value: "१०+", label: "वर्षांची सेवा", color: "bg-primary/10 text-primary" },
    { icon: Users, value: "७०००+", label: "कुटुंबे जोडलेली", color: "bg-accent/20 text-accent" },
    { icon: Award, value: "२०२२", label: "नोंदणी वर्ष", color: "bg-primary/10 text-primary" },
    { icon: MapPin, value: "१३", label: "तालुके समाविष्ट", color: "bg-accent/20 text-accent" },
  ];

  const services = [
    { icon: GraduationCap, title: "शैक्षणिक मदत", description: "स्पर्धा परीक्षा मार्गदर्शन व शिष्यवृत्ती" },
    { icon: Briefcase, title: "नोकरी मार्गदर्शन", description: "विविध क्षेत्रातील तज्ञांकडून करिअर सल्ला" },
    { icon: HandHeart, title: "सामाजिक सहाय्य", description: "आरोग्य, निवास व कायदेशीर मदत" },
    { icon: Heart, title: "सांस्कृतिक कार्यक्रम", description: "जयंती, स्नेहसंमेलन व सांस्कृतिक सोहळे" },
  ];

  const announcements = [
    {
      date: "१ फेब्रुवारी २०२६",
      title: "वार्षिक स्नेहसंमेलन २०२६",
      description: "डॉ बाबासाहेब आंबेडकर भवन, दादर - सकाळी ९ ते दुपारी ४",
      featured: true,
      urgent: true,
      image: varshikSahsamelanImg
    },
    {
      date: "२८ नोव्हेंबर २०२५",
      title: "शिक्षक दिन समारंभ",
      description: "४०+ आदर्श शिक्षकांचा गौरव - जुईनगर"
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] gradient-hero overflow-hidden flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-accent blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Logo */}
            <div className="animate-fade-up opacity-0 shrink-0">
              <img
                src={mandalLogo}
                alt="बुलढाणा जिल्हा बौद्ध रहिवासी समाज मंडळ मुंबई"
                className="w-40 h-40 md:w-52 md:h-52 rounded-2xl object-cover shadow-elevated border-4 border-accent/30"
              />
            </div>

            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="animate-fade-up opacity-0 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  नोंदणीकृत संस्था - धर्मदाय आयुक्त ठाणे
                </span>
              </div>

              {/* Main Title */}
              <h1 className="animate-fade-up opacity-0 animation-delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 marathi-title organization-name">
                बुलढाणा जिल्हा बौद्ध रहिवासी
                <br />
                <span className="text-accent">समाज मंडळ मुंबई</span>
              </h1>

              {/* Tagline */}
              <p className="animate-fade-up opacity-0 animation-delay-200 text-xl md:text-2xl text-primary-foreground/80 mb-6 font-medium">
                सविनय जयभीम 🙏
              </p>

              {/* Description */}
              <p className="animate-fade-up opacity-0 animation-delay-300 max-w-3xl mx-auto text-primary-foreground/70 text-lg md:text-xl mb-10 leading-relaxed">
                बुलढाणा जिल्ह्यातील धम्म बांधवांसाठी मुंबईत मदतीचा आधार -
                नोकरी, शिक्षण, आरोग्य आणि सामाजिक सहाय्यासाठी केव्हाही संपर्क करा
              </p>

              {/* CTA Buttons */}
              <div className="animate-fade-up opacity-0 animation-delay-400 flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/get-help"
                  className="px-8 py-4 rounded-xl gradient-gold text-accent-foreground font-semibold text-lg shadow-gold hover-lift"
                >
                  मदत हवी आहे?
                </Link>
                <Link
                  to="/join"
                  className="px-8 py-4 rounded-xl bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 font-semibold text-lg hover:bg-primary-foreground/20 transition-colors"
                >
                  सभासद बना
                </Link>
                <Link
                  to="/donate"
                  className="px-8 py-4 rounded-xl bg-primary-foreground text-primary font-semibold text-lg hover:bg-primary-foreground/90 transition-colors"
                >
                  देणगी द्या
                </Link>
              </div>

              {/* Highlights */}
              <div className="animate-fade-up opacity-0 animation-delay-500 grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {highlights.map((item, index) => (
                  <div key={index} className="p-4 md:p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
                    <item.icon className="w-6 h-6 md:w-8 md:h-8 text-accent mx-auto mb-2" />
                    <p className="text-2xl md:text-3xl font-bold text-primary-foreground">{item.value}</p>
                    <p className="text-xs md:text-sm text-primary-foreground/70">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              आमची सेवा
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              शैक्षणिक • सामाजिक • सांस्कृतिक
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              मुंबईला येणाऱ्या प्रत्येक बुलढाणावासियाला योग्य मदत मिळावी हे आमचे ध्येय
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-card border border-border hover-lift">
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-4 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/objectives" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              सर्व सेवा पहा <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Announcements & Buldhana Bhavan */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Announcements */}
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
                ताज्या बातम्या
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                आगामी कार्यक्रम
              </h2>
              <div className="space-y-4">
                {announcements.map((item, index) => (
                  <Link
                    key={index}
                    to="/events"
                    className={`block rounded-xl border hover-lift cursor-pointer transition-all overflow-hidden ${item.featured
                      ? 'bg-gradient-to-r from-accent/10 to-accent/5 border-accent/30 hover:from-accent/15 hover:to-accent/10'
                      : 'bg-background border-border hover:bg-muted/50'
                      }`}
                  >
                    {item.image && (
                      <div
                        className="relative aspect-[2/1] overflow-hidden group cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          openImageModal(item.image);
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <Image className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-medium ${item.featured ? 'text-accent' : 'text-accent'
                          }`}>
                          {item.date}
                        </span>
                        {item.urgent && (
                          <span className="px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                            आगामी
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      {item.featured && (
                        <div className="mt-3 pt-3 border-t border-accent/20">
                          <p className="text-xs text-accent font-medium">
                            सहयोग राशी: ₹१००० प्रति कुटुंब • प्रमुख पाहुणे: डॉ भीमराव आंबेडकर, आनंदराज आंबेडकर साहेब
                          </p>
                        </div>
                      )}
                      <div className="mt-3 flex items-center text-xs text-primary font-medium">
                        अधिक माहिती <ArrowRight className="w-3 h-3 ml-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <Link to="/events" className="inline-flex items-center gap-2 text-primary font-medium mt-6 hover:gap-3 transition-all">
                सर्व कार्यक्रम पहा <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Buldhana Bhavan */}
            <div className="rounded-3xl overflow-hidden relative">
              <img
                src={bhavanImg}
                alt="बुलढाणा भवन - स्वप्न प्रकल्प"
                className="w-full h-64 object-cover"
              />
              <div className="p-8 gradient-hero">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                  बुलढाणा भवन प्रकल्प
                </h2>
                <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                  मुंबईत बुलढाणावासियांसाठी स्वतःचे केंद्र - निवासी अभ्यासिका, ग्रंथालय,
                  सभागृह आणि तज्ञ मार्गदर्शन केंद्र.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">₹५ लाख+</p>
                    <p className="text-xs text-primary-foreground/70">निधी संकलित</p>
                  </div>
                  <div className="h-10 w-px bg-primary-foreground/30" />
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary-foreground">२०२४</p>
                    <p className="text-xs text-primary-foreground/70">चॅरिटी शो</p>
                  </div>
                </div>
                <Link
                  to="/bhavan"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-gold text-accent-foreground font-semibold shadow-gold hover-lift"
                >
                  अधिक जाणून घ्या <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/5 via-background to-accent/5 border border-border">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              मदत हवी आहे का? आत्ताच संपर्क करा!
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              आमच्या मंडळामध्ये डॉक्टर, इंजिनीयर, वकील, बिल्डर, उद्योजक तसेच
              मंत्रालयात मोठ्या पदावर अनेक लोक काम करतात.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-help"
                className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover-lift"
              >
                मदत मागा
              </Link>
              <a
                href="tel:+919702777927"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5" />
                फोन करा
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image Viewer Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            onClick={closeImageModal}
            className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            title="बंद करा (Esc)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <img
              src={selectedImage}
              alt="वार्षिक स्नेहसंमेलन २०२६"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Image Info */}
          <div className="absolute bottom-4 left-4 z-10 max-w-md">
            <div className="p-4 rounded-xl bg-black/50 backdrop-blur-sm text-white">
              <h3 className="font-semibold text-lg mb-1">
                वार्षिक स्नेहसंमेलन २०२६
              </h3>
              <p className="text-white/70 text-sm">
                १ फेब्रुवारी २०२६ • डॉ बाबासाहेब आंबेडकर भवन, दादर
              </p>
            </div>
          </div>

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closeImageModal}
          />
        </div>
      )}
    </Layout>
  );
};

export default Index;
