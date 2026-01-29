import { Calendar, Users, Award, Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const EventsSection = () => {
  const upcomingEvent = {
    title: "वार्षिक स्नेहसंमेलन २०२६",
    date: "१ फेब्रुवारी २०२६",
    time: "सकाळी ९:०० ते ४:००",
    venue: "डॉ. बाबासाहेब आंबेडकर भवन, गोकुळदास पास्ता लेन, दादर (पूर्व), मुंबई",
    specialGuests: [
      "मा. डॉ. भीमराव आंबेडकर (राष्ट्रीय ट्रस्टी कार्याध्यक्ष - भारतीय बौद्ध महासभा)",
      "मा. सरसेनानी आनंदराज आंबेडकर (सभापती - बौद्धजन पंचायत समिती)"
    ],
    fee: "₹ १,००० प्रति कुटुंब"
  };

  const events = [
    {
      year: "2018",
      title: "पहिले स्नेहसंमेलन - पनवेल",
      date: "१६ सप्टेंबर २०१८",
      description: "३७५+ बुलढाणावासियांचा सहभाग. मेरिट विद्यार्थ्यांना पारितोषिक वितरण.",
      guests: ["मा. डी. डी. बांगर (से. नि. संचालक RBI)", "मा. गुलाबराव अवसरमोल (से. नि. न्यायाधीश)", "मा. एच. बी. तायडे (से. नि. सहसचिव गृह मंत्रालय)"],
      highlight: true
    },
    {
      year: "2024",
      title: "चॅरिटी शो - मुलुंड",
      date: "२०२४",
      description: "बुलढाणा भवनासाठी निधी संकलन. जवळपास ₹५ लाख निधी प्राप्त.",
      guests: [],
      highlight: false
    },
    {
      year: "2025",
      title: "शिक्षक दिन - जुईनगर",
      date: "२८ नोव्हेंबर २०२५",
      description: "महात्मा ज्योतिबा फुले स्मृतिदिन. ४०+ आदर्श शिक्षक पुरस्कार.",
      guests: ["मा. आयु. कैलास पगारे साहेब (आयुक्त बाल व महिला)", "डॉ. कैलास गायकवाड (उपायुक्त नवी मुंबई)", "मा. संघरत्न खिल्लारे (उपायुक्त शिक्षण विभाग)"],
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
              आगामी कार्यक्रम
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
                  विशेष पाहुणे:
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
                नोंदणी करा
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/20 text-primary-foreground font-semibold hover:bg-white/30 transition-colors"
              >
                अधिक माहिती
              </Link>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
            कार्यक्रम
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            आमचे <span className="text-accent">प्रमुख कार्यक्रम</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            प्रत्येक वर्षी आम्ही स्नेहसंमेलन, डॉ. बाबासाहेब आंबेडकर जयंती, 
            आणि विविध सांस्कृतिक कार्यक्रमांचे आयोजन करतो.
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
                    <span className="text-xs text-accent font-medium">विशेष कार्यक्रम</span>
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
                      प्रमुख पाहुणे:
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
              <h3 className="text-lg font-bold text-foreground">डॉ. बाबासाहेब आंबेडकर जयंती</h3>
            </div>
            <p className="text-muted-foreground">
              प्रत्येक वर्षी १४ एप्रिलला मोठ्या थाटामाटात साजरी करण्यात येते.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center">
                <Users className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground">वार्षिक स्नेहसंमेलन</h3>
            </div>
            <p className="text-muted-foreground">
              मुंबईच्या विविध उपनगरांमध्ये दरवर्षी स्नेहसंमेलनाचे आयोजन.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
