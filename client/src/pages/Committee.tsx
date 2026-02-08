import { Phone, X, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";
import { useI18n } from "@/lib/i18n";

// Import member images
import dayanandIngleImg from "@/assets/people/Dayanand_Ingle.jpg";
import rajendraJadhaoImg from "@/assets/people/rajendra_jadhao.jpg";
import vijayKharatImg from "@/assets/people/vijay_kharat.jpg";
import bhaskarPawarImg from "@/assets/people/Bhaskar Pawar.jpg";
import seemaJadhavImg from "@/assets/people/Seema_Jadhav.jpeg";
import mandalLogo from "@/assets/mandal-logo.jpeg";

interface MemberDetails {
  fullName: string;
  education?: string;
  position?: string;
  address?: string;
  experience?: string;
  native?: string;
  phone: string;
  positions?: string[];
  otherRole?: string;
  mumbaiAddress?: string;
  designation?: string;
}

interface Member {
  name: string;
  englishName: string;
  designation: string;
  englishDesignation: string;
  role?: string;
  phone: string;
  featured?: boolean;
  image: string;
  details: MemberDetails;
}

const Committee = () => {
  const { t, lang } = useI18n();
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const executiveMembers: Member[] = [
    {
      name: "डॉ. दयानंद इंगळे",
      englishName: "Dr. Dayanand Ingle",
      designation: "अध्यक्ष",
      englishDesignation: "President",
      role: "President",
      phone: "9702777927",
      featured: true,
      image: dayanandIngleImg,
      details: {
        fullName: "Dr. Dayanand Ingle",
        education: "BE ,MTech, Ph.D Computer Engineering, LLB, LLM (Indian Constitution)",
        position: "Professor and Head Dept of Computer Engg. Bharati Vidyapeeth College of Engineering Navi Mumbai",
        address: "Navi Mumbai pin 410210 India",
        experience: "Ex. Member, Board of Studies in Computer Engineering under Science and Technology University of Mumbai",
        native: "Mandwa Ta Lonar DIST Buldhana",
        phone: "9702777927"
      }
    },
    {
      name: "आयु. प्रल्हाद सोनूने",
      englishName: "Off Pralhad Sonune",
      designation: "उपाध्यक्ष",
      englishDesignation: "Vice President",
      role: "Vice President",
      phone: "9420645830",
      featured: true,
      image: mandalLogo,
      details: {
        fullName: "Pralhad Sonune",
        designation: "उपाध्यक्ष",
        phone: "9420645830"
      }
    },
    {
      name: "आयु. अरुण अंभोरे",
      englishName: "Off Arun Ambhore",
      designation: "सचिव",
      englishDesignation: "Secretary",
      role: "Secretary",
      phone: "9224633354",
      featured: true,
      image: mandalLogo,
      details: {
        fullName: "Arun Ambhore",
        designation: "सचिव",
        phone: "9224633354"
      }
    },
    {
      name: "आयु. भास्कर पवार",
      englishName: "Off Bhaskar Pawar",
      designation: "खजिनदार",
      englishDesignation: "Treasurer",
      role: "Treasurer",
      phone: "9969131829",
      featured: true,
      image: bhaskarPawarImg,
      details: {
        fullName: "Prin. Bhaskar.B. Pawar",
        education: "M.A.B. Ed.,M.Phil.,M. Ed",
        position: "Principal, People's Education Society's Central School Sector 1, Near Police Colony, CBD Belapur Navi Mumbai",
        native: "At.post.Pimpri Khandare Tal. Lonar.Dist.Buldhana",
        phone: "9969131829"
      }
    },
  ];

  const workingCommittee: Member[] = [
    {
      name: "आयु. वामन मोरे",
      englishName: "Off Vaman More",
      designation: "सहसचिव",
      englishDesignation: "Co-Secretary",
      phone: "9082189458",
      image: mandalLogo,
      details: {
        fullName: "Vaman More",
        designation: "सहसचिव",
        phone: "9082189458"
      }
    },
    {
      name: "आयु. दिलीप भालेराव",
      englishName: "Off Dilip Bhalerao",
      designation: "सदस्य",
      englishDesignation: "Member",
      phone: "9870225644",
      image: mandalLogo,
      details: {
        fullName: "Dilip Bhalerao",
        designation: "सदस्य",
        phone: "9870225644"
      }
    },
    {
      name: "आयु. राजेंद्र जाधव",
      englishName: "Off Rajendra Jadhao",
      designation: "सदस्य",
      englishDesignation: "Member",
      phone: "8898566340",
      image: rajendraJadhaoImg,
      details: {
        fullName: "Rajendra Bhikaji Jadhao",
        education: "M.A. B. P. Ed.",
        position: "Supervisor at Anjuman Behrul Uloom Urdu High school Govandi, Mumbai - 43",
        otherRole: "Director - Dr. Babasaheb Ambedkar janm satabdi granthalay, pimpalgain sarai",
        native: "Hatedi bu.Ta. Dist. Buldana",
        mumbaiAddress: "C-49/3:14, Vaibhav CHS. Sector 24, Juinagar, Navi Mumbai, 400705",
        phone: "8898566340"
      }
    },
    {
      name: "आयु. रुस्तुम भालेराव",
      englishName: "Off Rustum Bhalerao",
      designation: "सदस्य",
      englishDesignation: "Member",
      phone: "9665622170",
      image: mandalLogo,
      details: {
        fullName: "Rustum Bhalerao",
        designation: "सदस्य",
        phone: "9665622170"
      }
    },
    {
      name: "आयु. सुभाष गवई",
      englishName: "Off Subhash Gavai",
      designation: "सदस्य",
      englishDesignation: "Member",
      phone: "9867463572",
      image: mandalLogo,
      details: {
        fullName: "Subhash Gavai",
        designation: "सदस्य",
        phone: "9867463572"
      }
    },
    {
      name: "आयु. सीमा जाधव",
      englishName: "Off Seema Jadhav",
      designation: "सदस्या",
      englishDesignation: "Member",
      phone: "9820220992",
      featured: true,
      image: seemaJadhavImg,
      details: {
        fullName: "Off Seema Jadhav",
        education: "M.A. in Arts (Sociology)",
        native: "At Post Padli, District: Buldhana",
        mumbaiAddress: "Kharghar, Navi Mumbai",
        position: "Senior Vice President, Shapoorji Pallonji Group (UAE)",
        otherRole: "Voice President in VBA Kharghar, Buddhist Unity Representative Navi Mumbai",
        positions: [
          "Tathagat Mahavihar Social Organization, Kharghar, Navi Mumbai",
          "Voice President in VBA Kharghar",
          "Buddhist Unity Representative, Navi Mumbai",
          "Member, Buldhana Bhavan Construction Organization, Mumbai",
          "Prabuddha Mahila Sangh, Kharghar, Navi Mumbai",
          "Actively involved in Dhamma propagation and social awareness initiatives"
        ],
        phone: "9820220992"
      }
    },
    {
      name: "आयु. विजय खरात",
      englishName: "Off Vijay Kharat",
      designation: "सदस्य",
      englishDesignation: "Member",
      phone: "8169963285",
      image: vijayKharatImg,
      details: {
        fullName: "Vijay Kharat",
        designation: "सदस्य",
        positions: [
          "Secretary Prabodhankar Thakre Vidyalay saramba Deulgaw Raja Buldhana",
          "President The peoples Nagri sahkari Pata Sanstha Khanda colony Panvel",
          "Secretary Indian social and cultural education society, khanda colony Panvel"
        ],
        native: "At, soyandeo Taluka sindkhed Raja Buldhana",
        phone: "8169963285"
      }
    },
    {
      name: "आयु. रमेश अडेलकर",
      englishName: "Off Ramesh Adelkar",
      designation: "सदस्य",
      englishDesignation: "Member",
      phone: "9082975404",
      image: mandalLogo,
      details: {
        fullName: "Ramesh Adelkar",
        designation: "सदस्य",
        phone: "9082975404"
      }
    },
    {
      name: "आयु. ललिता पंडागळे",
      englishName: "Off Lalita Pandagle",
      designation: "सदस्या",
      englishDesignation: "Member",
      phone: "9987239188",
      image: mandalLogo,
      details: {
        fullName: "Lalita Pandagle",
        designation: "सदस्या",
        phone: "9987239188"
      }
    },
  ];

  const openMemberDetails = (member: Member) => {
    setSelectedMember(member);
  };

  const closeMemberDetails = () => {
    setSelectedMember(null);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            {t("कार्यकारिणी", "Committee")}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            {t("आमची", "Our")} <span className="text-accent">{t("कार्यकारिणी", "Committee")}</span>
          </h1>
          <p className="max-w-3xl mx-auto text-primary-foreground/80 text-lg">
            {t("मंडळाच्या कार्यकारिणी सदस्यांची माहिती - तुम्ही कधीही संपर्क साधू शकता", "Information about the committee members - you can contact them anytime")}
          </p>
        </div>
      </section>

      {/* Executive Members */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("मुख्य पदाधिकारी", "Executive offs")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("कार्यकारी मंडळ", "Executive Committee")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {executiveMembers.map((member, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border-2 border-primary/20 text-center hover-lift cursor-pointer"
                onClick={() => openMemberDetails(member)}
              >
                {/* Member Image */}
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="inline-block px-3 py-1 rounded-full gradient-gold text-accent-foreground text-xs font-semibold mb-3">
                  {lang === 'en' ? member.englishDesignation : member.designation}
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {lang === 'en' ? member.englishName : member.name}
                </h3>
                <a
                  href={`tel:${member.phone}`}
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Phone className="w-4 h-4" />
                  {member.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Committee */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
              {t("कार्यकारी सदस्य", "Working Members")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("कार्य समिती सदस्य", "Committee Members")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {workingCommittee.map((member, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => openMemberDetails(member)}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground truncate">
                    {lang === 'en' ? member.englishName : member.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {lang === 'en' ? member.englishDesignation : member.designation}
                  </p>
                </div>
                <a
                  href={`tel:${member.phone}`}
                  className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Details Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-background rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">{t("सदस्य माहिती", "Member Information")}</h2>
                <button
                  onClick={closeMemberDetails}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Member Info */}
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary/20">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="inline-block px-4 py-2 rounded-full gradient-gold text-accent-foreground text-sm font-semibold mb-3">
                  {lang === 'en' ? selectedMember.englishDesignation : selectedMember.designation}
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {lang === 'en' ? selectedMember.englishName : selectedMember.name}
                </h3>
                {selectedMember.details.fullName && (
                  <p className="text-lg text-muted-foreground mb-4">{selectedMember.details.fullName}</p>
                )}
              </div>

              {/* Details */}
              <div className="space-y-4">
                {selectedMember.details.education && (
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{t("शिक्षण", "Education")}</p>
                      <p className="text-muted-foreground">{selectedMember.details.education}</p>
                    </div>
                  </div>
                )}

                {selectedMember.details.position && (
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{t("पद", "Position")}</p>
                      <p className="text-muted-foreground">{selectedMember.details.position}</p>
                    </div>
                  </div>
                )}

                {selectedMember.details.positions && (
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{t("पदे", "Positions")}</p>
                      <ul className="text-muted-foreground space-y-1">
                        {selectedMember.details.positions.map((position, idx) => (
                          <li key={idx}>• {position}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {selectedMember.details.experience && (
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{t("अनुभव", "Experience")}</p>
                      <p className="text-muted-foreground">{selectedMember.details.experience}</p>
                    </div>
                  </div>
                )}

                {selectedMember.details.otherRole && (
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{t("इतर भूमिका", "Other Role")}</p>
                      <p className="text-muted-foreground">{selectedMember.details.otherRole}</p>
                    </div>
                  </div>
                )}

                {selectedMember.details.native && (
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{t("मूळ गाव", "Native Village")}</p>
                      <p className="text-muted-foreground">{selectedMember.details.native}</p>
                    </div>
                  </div>
                )}

                {selectedMember.details.address && (
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{t("पत्ता", "Address")}</p>
                      <p className="text-muted-foreground">{selectedMember.details.address}</p>
                    </div>
                  </div>
                )}

                {selectedMember.details.mumbaiAddress && (
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{t("मुंबई पत्ता", "Mumbai Address")}</p>
                      <p className="text-muted-foreground">{selectedMember.details.mumbaiAddress}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">{t("संपर्क", "Contact")}</p>
                    <a
                      href={`tel:${selectedMember.details.phone}`}
                      className="text-primary hover:underline"
                    >
                      {selectedMember.details.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <div className="mt-8 text-center">
                <button
                  onClick={closeMemberDetails}
                  className="px-6 py-3 rounded-xl gradient-gold text-accent-foreground font-semibold shadow-gold hover-lift"
                >
                  {t("बंद करा", "Close")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Note */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center p-8 rounded-3xl gradient-hero">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              {t("केव्हाही संपर्क करा!", "Contact Us Anytime!")}
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              {t("तुम्ही वरील कोणत्याही सदस्यांना कधीही फोन करू शकता व आपले काम सांगू शकता. आम्ही तुमच्या मदतीसाठी सदैव तत्पर आहोत.", "You can call any of the above members anytime and tell them your needs. We are always ready to help you.")}
            </p>
            <p className="text-accent font-semibold text-lg">
              {t("सविनय जयभीम 🙏", "Jai Bhim 🙏")}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Committee;
