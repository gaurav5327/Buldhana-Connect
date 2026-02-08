import { Calendar, Users, Award, Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

const EventsSection = () => {
  const { t} = useI18n();

  const upcomingEvent = {
    title: t("वार्षिक स्नेहसंमेलन २०२६", "Annual Sneh Sammelan 2026"),
    date: t("१ फेब्रुवारी २०२६", "1 February 2026"),
    time: t("सकाळी ९:०० ते ४:००", "9:00 AM to 4:00 PM"),
    venue: t("डॉ. बाबासाहेब आंबेडकर भवन, गोकुळदास पास्ता लेन, दादर (पूर्व), मुंबई", "Dr. Babasaheb Ambedkar Hall, Gokulda's Pasta Lane, Dadar (East), Mumbai"),
    specialGuests: [
      t("मा. डॉ. भीमराव आंबेडकर (राष्ट्रीय ट्रस्टी कार्याध्यक्ष - भारतीय बौद्ध महासभा)", "Dr. Bhimrao Ambedkar (National Trustee President - Indian Buddhist Association)"),
      t("मा. सरसेनानी आनंदराज आंबेडकर (सभापती - बौद्धजन पंचायत समिती)", "Anandraj Ambedkar (President - Buddhist Community Council)")
    ],
    fee: t("₹ १,००० प्रति कुटुंब", "₹1,000 per family")
  };

  const events = [
    {
      year: "2018",
      title: t("पहिले स्नेहसंमेलन - पनवेल", "First Sneh Sammelan - Panvel"),
      date: t("१६ सप्टेंबर २०१८", "16 September 2018"),
      description: t("३७५+ बुलढाणावासियांचा सहभाग. मेरिट विद्यार्थ्यांना पारितोषिक वितरण.", "375+ Buldhana residents participated. Merit scholarships awarded."),
      guests: [
        t("मा. डी. डी. बांगर (से. नि. संचालक RBI)", "D. D. Bangar (Ret. Director RBI)"),
        t("मा. गुलाबराव अवसरमोल (से. नि. न्यायाधीश)", "Gulabrao Avsarmoal (Ret. Judge)"),
        t("मा. एच. बी. तायडे (से. नि. सहसचिव गृह मंत्रालय)", "H. B. Tyde (Ret. Secretary Home Ministry)")
      ],
      highlight: true
    },
    {
      year: "2024",
      title: t("चॅरिटी शो - मुलुंड", "Charity Show - Mulund"),
      date: t("२०२४", "2024"),
      description: t("बुलढाणा भवनासाठी निधी संकलन. जवळपास ₹५ लाख निधी प्राप्त.", "Fundraising for Buldhana Bhavan. Nearly ₹500k raised."),
      guests: [],
      highlight: false
    },
    {
      year: "2025",
      title: t("शिक्षक दिन - जुईनगर", "Teacher's Day - Juinagar"),
      date: t("२८ नोव्हेंबर २०२५", "28 November 2025"),
      description: t("महात्मा ज्योतिबा फुले स्मृतिदिन. ४०+ आदर्श शिक्षक पुरस्कार.", "Jyotirao Phule Memorial Day. 40+ exemplary teacher awards."),
      guests: [
        t("मा. आयु. कैलास पगारे साहेब (आयुक्त बाल व महिला)", "Kailash Pagare (Commissioner Child & Women)"),
        t("डॉ. कैलास गायकवाड (उपायुक्त नवी मुंबई)", "Dr. Kailash Gaikwad (Deputy Commissioner Navi Mumbai)"),
        t("मा. संघरत्न खिल्लारे (उपायुक्त शिक्षण विभाग)", "Sangharatan Khillare (Deputy Commissioner Education)")
      ],
      highlight: true
    }
  ];

  return (
    <section id="events" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Upcoming Event Banner */}
        <div className="max-w-4xl mx-auto mb-16 p-8 rounded-3xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
              {t("आगामी कार्यक्रम", "Upcoming Event")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{upcomingEvent.title}</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span>{upcomingEvent.date} | {upcomingEvent.time}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm">{upcomingEvent.venue}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="font-semibold">{upcomingEvent.fee}</span>
                </div>
              </div>
              
              <div>
                <p className="text-accent font-semibold mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 fill-accent" />
                  {t("विशेष पाहुणे:", "Special Guests:")}
                </p>
                <ul className="space-y-1 text-sm">
                  {upcomingEvent.specialGuests.map((guest, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      {guest}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link 
                to="/donate" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-gold text-accent-foreground font-semibold shadow-gold hover-lift"
              >
                {t("नोंदणी करा", "Register")}
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/20 text-primary-foreground font-semibold hover:bg-white/30 transition-colors"
              >
                {t("अधिक माहिती", "More Info")}
              </Link>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
            {t("कार्यक्रम", "Events")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("आमचे", "Our")} <span className="text-accent">{t("प्रमुख कार्यक्रम", "Major Events")}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("प्रत्येक वर्षी आम्ही स्नेहसंमेलन, डॉ. बाबासाहेब आंबेडकर जयंती, आणि विविध सांस्कृतिक कार्यक्रमांचे आयोजन करतो.", "Every year we organize Sneh Sammelans, Dr. Babasaheb Ambedkar celebrations, and various cultural programs.")}
          </p>
        </div>

        {/* Events Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          {events.map((event, index) => (
            <div 
              key={index}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 mt-8" />

              {/* Year Badge */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -top-2">
                <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {event.year}
                </span>
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                event.highlight ? 'p-6 rounded-2xl bg-background shadow-elevated border-2 border-accent/30' : 'p-6 rounded-2xl bg-background shadow-soft border border-border'
              }`}>
                <div className="md:hidden mb-2">
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    {event.year}
                  </span>
                </div>
                
                {event.highlight && (
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="text-xs text-accent font-medium">{t("विशेष कार्यक्रम", "Special Event")}</span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4">{event.description}</p>

                {event.guests.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {t("प्रमुख पाहुणे:", "Chief Guests:")}
                    </p>
                    <ul className="text-sm text-foreground space-y-1">
                      {event.guests.slice(0, 3).map((guest, gIndex) => (
                        <li key={gIndex} className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          {guest}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </div>
          ))}
        </div>

        {/* Annual Celebrations */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                <Star className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{t("डॉ. बाबासाहेब आंबेडकर जयंती", "Dr. Babasaheb Ambedkar Jayanti")}</h3>
            </div>
            <p className="text-muted-foreground">
              {t("प्रत्येक वर्षी १४ एप्रिलला मोठ्या थाटामाटात साजरी करण्यात येते.", "Celebrated grandly every year on 14th April.")}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center">
                <Users className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{t("वार्षिक स्नेहसंमेलन", "Annual Sneh Sammelan")}</h3>
            </div>
            <p className="text-muted-foreground">
              {t("मुंबईच्या विविध उपनगरांमध्ये दरवर्षी स्नेहसंमेलनाचे आयोजन.", "Organized annually across various Mumbai suburbs.")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
