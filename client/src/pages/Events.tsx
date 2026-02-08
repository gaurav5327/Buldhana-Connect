import { Calendar, MapPin, Users, Award, Star, ArrowRight, X, Clock, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useI18n } from '@/lib/i18n';

// Import event images
import varshikSahsamelan2023Img from "@/assets/varshik_sahsamelan2023.jpg";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const { t } = useI18n();

  const openEventDetails = (event) => {
    setSelectedEvent(event);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
  };
  const majorEvents = [
    {
      year: "2018",
      title: "पहिले स्नेहसंमेलन - पनवेल",
      date: "१६ सप्टेंबर २०१८",
      location: "पनवेल",
      participants: "३७५+",
      description: "मंडळाचे पहिले भव्य स्नेहसंमेलन. मेरिट विद्यार्थ्यांचा सन्मान.",
      guests: [
        "मा. डी. डी. बांगर (से. नि. संचालक RBI)",
        "मा. गुलाबराव अवसरमोल (से. नि. न्यायाधीश)",
        "मा. एच. बी. तायडे (से. नि. सहसचिव गृह मंत्रालय)",
        "मा. रविंद्र भिसे (संचालक मुंबई शिक्षण मंडळ)",
        "डॉ. व्ही. बी. तायडे (से. नि. संचालक सिडनहम कॉलेज)",
        "मा. सिद्धार्थ खरात (सहसचिव उच्च व तंत्र शिक्षण मंत्रालय)"
      ],
      highlight: true
    },
    {
      year: "2023",
      title: "गेट-टुगेदर कार्यक्रम",
      date: "२९ जानेवारी २०२३",
      location: "मुंबई",
      participants: "२००+",
      description: "बुलढाणा जिल्हा रहिवासी बौद्ध समाज मंडळ द्वारा आयोजित गेट-टुगेदर चा कार्यक्रम मोठ्या उत्साहात व जल्लोषात पार पडला.",
      guests: [
        "आयुष्यमान एच बी तायडे साहेब",
        "प्रिन्सिपल तायडे सर",
        "आत्माराम पाखरे सर",
        "एकनाथ शिन्दे",
        "उत्तमराव काकडे",
        "सुप्रसिद्ध गायक नागसेन सावदेकर",
        "व्ही जी जाधव साहेब",
        "बोदवडे साहेब",
        "संजय जाधव सर",
        "भगवानराव गवई साहेब",
        "माजी न्यायाधीश अवसरमोल साहेब",
        "न्यायाधीश मोरे साहेब",
        "न्यायाधीश सुद्धोधन मोरे साहेब (नागपूर)",
        "आयुष्यमान सिद्धार्थ खरात साहेब",
        "आयुष्यमती सुवर्णा खरात मॅडम"
      ],
      image: varshikSahsamelan2023Img,
      highlight: true,
      details: "कार्यक्रमाच्या यशस्वीतेसाठी कार्यकारी मंडळातील सर्व सभासदांचे मोलाचे सहकार्य तर आहेत परंतु आजच्या कार्यक्रमांमध्ये हेही दिसून आले की आपल्या जिल्ह्याचे जे वरिष्ठ मार्गदर्शक आहेत त्यांच्या यशस्वी पाठिंब्यामुळेच हा कार्यक्रम पूर्णपणे खऱ्या अर्थाने यशस्वी झाला. विशेष आभार मानावे ते गायक मंडळीचे कारण त्यांच्यामुळे कार्यक्रमा मध्ये मरगळ आली नाही तर पूर्ण दिवसभर कार्य क्रम असूनही उत्साहाचे वातावरण होते."
    },
    {
      year: "2024",
      title: "चॅरिटी शो - मुलुंड",
      date: "२०२४",
      location: "मुलुंड",
      participants: "३००+",
      description: "बुलढाणा भवन प्रकल्पासाठी निधी संकलन. ₹५ लाख+ निधी प्राप्त.",
      guests: [],
      highlight: true
    },
    {
      year: "2025",
      title: "शिक्षक दिन सोहळा - जुईनगर",
      date: "२८ नोव्हेंबर २०२५",
      location: "डॉ. बाबासाहेब आंबेडकर सभागृह, जुईनगर",
      participants: "२००+",
      description: "महात्मा ज्योतिबा फुले स्मृतिदिनानिमित्त ४०+ आदर्श शिक्षकांचा गौरव.",
      guests: [
        "मा. बाय शुभम, आयु. कैलास पगारे साहेब (आयुक्त बाल व महिला)",
        "डॉ. कैलास गायकवाड (उपायुक्त नवी मुंबई महानगरपालिका)",
        "मा. संघरत्न खिल्लारे मॅडम (उपायुक्त शिक्षण विभाग)",
        "मा. प्रा. जगदीप मोरे (साहित्यिक फुले शाहू आंबेडकर)"
      ],
      highlight: true
    }
  ];

  const upcomingEvents = [
    {
      title: "वार्षिक स्नेहसंमेलन २०२६",
      date: "१ फेब्रुवारी २०२६",
      time: "सकाळी ९ ते दुपारी ४",
      location: "डॉ बाबासाहेब आंबेडकर भवन, गोकुळदास पास्ता लेन, दादर पूर्व, मुंबई",
      description: "बुलढाणा जिल्हा बौद्ध रहिवासी समाज मंडळ आयोजित स्नेहसंमेलन",
      guests: ["डॉ भीमराव आंबेडकर", "आनंदराज आंबेडकर साहेब"],
      contribution: "₹१००० प्रति कुटुंब",
      featured: true,
      details: `सविनय जय भीम बुलढाणा जिल्हा बौद्ध रहिवासी समाज मंडळ आयोजित स्नेहसंमेलनाचा कार्यक्रम एक फेब्रुवारी 2026 ला डॉ बाबासाहेब आंबेडकर भवन गोकुळदास पास्ता लेन दादर पूर्व मुंबई येथे सकाळी नऊ ते चार मध्ये आयोजित केला आहे तरी सर्वांनी 1000 रुपये प्रति कुटुंब अशी सहयोग राशी हा क्यू आर कोड वापरून जमा करावे अशी नम्र विनंती तसेच कार्यक्रमाला प्रमुख पाहुणे डॉ भीमराव आंबेडकर आणि आनंदराज आंबेडकर साहेब येणार आहेत`
    },
    {
      title: "डॉ. बाबासाहेब आंबेडकर जयंती",
      date: "१४ एप्रिल २०२६",
      description: "भव्य जयंती सोहळा"
    }
  ];

  const annualPrograms = [
    {
      title: "डॉ. बाबासाहेब आंबेडकर जयंती",
      description: "प्रत्येक वर्षी १४ एप्रिलला मोठ्या थाटामाटात साजरी",
      icon: Star
    },
    {
      title: "वार्षिक स्नेहसंमेलन",
      description: "मुंबईच्या विविध उपनगरात दरवर्षी आयोजन",
      icon: Users
    },
    {
      title: "गुणवंत विद्यार्थी सन्मान",
      description: "दरवर्षी मेरिट विद्यार्थ्यांना पारितोषिक",
      icon: Award
    },
    {
      title: "उपनगर भेटी व सभा",
      description: "प्रत्येक उपनगरात नियमित मीटिंग",
      icon: MapPin
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
          {null}
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            {t('कार्यक्रम','Events')}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            {t('आमचे','Our')} <span className="text-gradient">{t('कार्यक्रम','Events')}</span> {t('व','and')} <span className="text-accent">{t('सोहळे','Celebrations')}</span>
          </h1>
          <p className="max-w-3xl mx-auto text-primary-foreground/80 text-lg">
            {t('स्नेहसंमेलन, जयंती सोहळे, शिक्षक दिन आणि विविध सांस्कृतिक कार्यक्रमांचे आयोजन','Meetups, anniversaries, Teacher Day and various cultural events')}
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
              {t('आगामी कार्यक्रम','Upcoming Events')}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {t('येणारे कार्यक्रम','Coming Events')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border-2 cursor-pointer hover-lift transition-all ${event.featured
                  ? 'bg-gradient-to-br from-accent/20 to-accent/10 border-accent/50 hover:from-accent/25 hover:to-accent/15'
                  : 'bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 hover:from-accent/15 hover:to-accent/10'
                  }`}
                onClick={() => openEventDetails(event)}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-accent">
                    {event.date || event.tentativeDate}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">{event.title}</h3>

                {event.time && (
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>वेळ:</strong> {event.time}
                  </p>
                )}

                {event.location && (
                  <p className="text-sm text-muted-foreground mb-2 flex items-start gap-1">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                    {event.location}
                  </p>
                )}

                <p className="text-muted-foreground text-sm mb-3">{event.description}</p>

                {event.guests && event.guests.length > 0 && (
                  <div className="mb-3">
                    <p className="text-sm font-medium text-foreground mb-1">प्रमुख पाहुणे:</p>
                    <ul className="text-sm text-muted-foreground">
                      {event.guests.map((guest, gIndex) => (
                        <li key={gIndex}>• {guest}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {event.contribution && (
                  <div className="mt-4 p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <p className="text-sm font-medium text-primary">
                      सहयोग राशी: {event.contribution}
                    </p>
                  </div>
                )}

                {event.featured && (
                  <div className="mt-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                      <Star className="w-3 h-3 fill-current" />
                      विशेष कार्यक्रम
                    </span>
                    <div className="flex items-center text-xs text-primary font-medium">
                      अधिक माहिती <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                )}
                {!event.featured && (
                  <div className="mt-4 flex justify-end">
                    <div className="flex items-center text-xs text-primary font-medium">
                      अधिक माहिती <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Events Timeline */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t('मागील कार्यक्रम','Past Events')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t('प्रमुख कार्यक्रम','Major Events')}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {majorEvents.map((event, index) => (
              <div key={index} className={`p-6 md:p-8 rounded-3xl ${event.highlight
                ? 'bg-background border-2 border-primary/30 shadow-elevated'
                : 'bg-background border border-border'
                }`}>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="px-4 py-1 rounded-full gradient-hero text-primary-foreground font-bold">
                    {event.year}
                  </span>
                  {event.highlight && (
                    <span className="flex items-center gap-1 text-accent text-sm font-medium">
                      <Star className="w-4 h-4 fill-accent" />
                      विशेष कार्यक्रम
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2">{event.title}</h3>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {event.participants} सहभागी
                  </span>
                </div>

                {/* Event Image */}
                {event.image && (
                  <div className="mb-4">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full max-w-md mx-auto rounded-xl shadow-lg"
                    />
                  </div>
                )}

                <p className="text-muted-foreground mb-4">{event.description}</p>

                {/* Additional Details */}
                {event.details && (
                  <div className="mb-4 p-4 rounded-xl bg-card border border-border">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {event.details}
                    </p>
                  </div>
                )}

                {event.guests.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                      <Award className="w-4 h-4 text-accent" />
                      प्रमुख पाहुणे:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {event.guests.map((guest, gIndex) => (
                        <li key={gIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-accent mt-1">•</span>
                          {guest}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Programs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
              वार्षिक उपक्रम
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              दरवर्षीचे कार्यक्रम
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {annualPrograms.map((program, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border text-center hover-lift">
                <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mx-auto mb-4">
                  <program.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{program.title}</h3>
                <p className="text-sm text-muted-foreground">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery CTA */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center p-8 rounded-3xl gradient-hero">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              कार्यक्रमांचे फोटो पहा
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              आमच्या विविध कार्यक्रमांचे फोटो आणि व्हिडिओ गॅलरीमध्ये पहा
            </p>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-gold text-accent-foreground font-semibold shadow-gold hover-lift"
            >
              गॅलरी पहा <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-background rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">कार्यक्रम माहिती</h2>
                <button
                  onClick={closeEventDetails}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Event Info */}
              <div className="space-y-6">
                {/* Title and Date */}
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {selectedEvent.title}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span className="text-lg font-medium text-accent">
                      {selectedEvent.date}
                    </span>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedEvent.time && (
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">वेळ</p>
                        <p className="text-muted-foreground">{selectedEvent.time}</p>
                      </div>
                    </div>
                  )}

                  {selectedEvent.location && (
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">ठिकाण</p>
                        <p className="text-muted-foreground">{selectedEvent.location}</p>
                      </div>
                    </div>
                  )}

                  {selectedEvent.contribution && (
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">सहयोग राशी</p>
                        <p className="text-muted-foreground">{selectedEvent.contribution}</p>
                      </div>
                    </div>
                  )}

                  {selectedEvent.guests && selectedEvent.guests.length > 0 && (
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">प्रमुख पाहुणे</p>
                        <ul className="text-muted-foreground">
                          {selectedEvent.guests.map((guest, idx) => (
                            <li key={idx}>• {guest}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="p-4 rounded-xl bg-card border border-border">
                  <p className="text-foreground leading-relaxed">
                    {selectedEvent.details || selectedEvent.description}
                  </p>
                </div>

                {/* Contact Info */}
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <p className="text-sm font-medium text-primary mb-2">संपर्क माहिती:</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+919702777927"
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <Phone className="w-4 h-4" />
                      +91 9702777927
                    </a>
                    <a
                      href="mailto:buldhanabauddhamandal@gmail.com?subject=कार्यक्रम%20माहिती%20-%20बुलढाणा%20मंडळ"
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <Calendar className="w-4 h-4" />
                      ईमेल करा
                    </a>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <div className="mt-8 text-center">
                <button
                  onClick={closeEventDetails}
                  className="px-6 py-3 rounded-xl gradient-gold text-accent-foreground font-semibold shadow-gold hover-lift"
                >
                  बंद करा
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </Layout>
  );
};

export default Events;
