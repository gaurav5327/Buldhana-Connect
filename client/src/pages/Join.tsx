import { useState } from "react";
import { UserPlus, CheckCircle, Users, Heart, Award } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const Join = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    whatsapp: "",
    email: "",
    mumbaiArea: "",
    taluka: "",
    village: "",
    profession: "",
    wantsToVolunteer: ""
  });

  const talukas = [
    "बुलढाणा", "चिखली", "देऊळगाव राजा", "जळगाव जामोद", "खामगाव",
    "लोणार", "मलकापूर", "मेहकर", "मोताळा", "नांदुरा",
    "संग्रामपूर", "शेगाव", "सिंदखेड राजा"
  ];

  const mumbaiAreas = [
    "कल्याण", "ठाणे", "नवी मुंबई", "चेंबूर", "दादर",
    "अंधेरी", "बोरिवली", "विरार", "उल्हासनगर", "मुलुंड",
    "पनवेल", "वाशी", "खारघर", "ऐरोली", "इतर"
  ];

  const benefits = [
    { icon: Users, title: "समुदाय जोडणी", description: "७०००+ कुटुंबांच्या नेटवर्कचा भाग" },
    { icon: Heart, title: "तात्काळ मदत", description: "कधीही मदतीसाठी संपर्क करा" },
    { icon: Award, title: "कार्यक्रम निमंत्रण", description: "सर्व कार्यक्रमांना प्राधान्य" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create email content with form data
    const emailSubject = "नवीन सभासद नोंदणी विनंती - बुलढाणा मंडळ";
    const emailBody = `
सविनय जयभीम,

नवीन सभासद नोंदणी विनंती:

व्यक्तिगत माहिती:
- नाव: ${formData.name}
- मोबाईल: ${formData.mobile}
- WhatsApp: ${formData.whatsapp || formData.mobile}
- ईमेल: ${formData.email || 'नाही'}

पत्ता माहिती:
- मुंबईतील क्षेत्र: ${formData.mumbaiArea}
- तालुका: ${formData.taluka}
- गाव: ${formData.village}

इतर माहिती:
- व्यवसाय: ${formData.profession || 'नाही'}
- स्वयंसेवक बनायचे: ${formData.wantsToVolunteer === 'yes' ? 'होय' : formData.wantsToVolunteer === 'no' ? 'नाही' : 'निवडले नाही'}

कृपया या व्यक्तीला मंडळाच्या WhatsApp ग्रुपमध्ये जोडा.

धन्यवाद!
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:buldhanabauddhamandal@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Try to open email client
    try {
      window.location.href = mailtoLink;
    } catch (error) {
      // Fallback: copy email content to clipboard
      navigator.clipboard.writeText(`To: buldhanabauddhamandal@gmail.com\nSubject: ${emailSubject}\n\n${emailBody}`);
    }

    // Show success message after a short delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      toast({
        title: "ईमेल तयार केला!",
        description: "तुमचा ईमेल क्लायंट उघडला आहे. कृपया ईमेल पाठवा.",
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-20 min-h-[60vh] flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center p-8 rounded-3xl bg-card border border-border">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                ईमेल पाठवला गेला!
              </h1>
              <p className="text-muted-foreground mb-6">
                तुमची सभासद नोंदणी विनंती ईमेलद्वारे पाठवली गेली आहे!
                आम्ही लवकरच तुम्हाला WhatsApp ग्रुपमध्ये जोडू आणि संपर्क करू.
              </p>
              <p className="text-accent font-semibold text-xl">
                सविनय जयभीम 🙏
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            सभासद बना
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            आमच्या <span className="text-gradient">परिवाराचा</span> भाग व्हा
          </h1>
          <p className="max-w-3xl mx-auto text-primary-foreground/80 text-lg">
            ७०००+ कुटुंबांच्या मजबूत नेटवर्कचा भाग व्हा आणि एकमेकांच्या प्रगतीला हातभार लावा
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-background">
                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center shrink-0">
                  <benefit.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  पूर्ण नाव <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="तुमचे पूर्ण नाव"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                />
              </div>

              {/* Mobile & WhatsApp */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    मोबाईल नंबर <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    placeholder="मोबाईल नंबर"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    WhatsApp नंबर
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="WhatsApp नंबर (वेगळा असल्यास)"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  ईमेल (पर्यायी)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="तुमचा ईमेल"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                />
              </div>

              {/* Mumbai Area */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  मुंबईतील क्षेत्र <span className="text-destructive">*</span>
                </label>
                <select
                  name="mumbaiArea"
                  value={formData.mumbaiArea}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                >
                  <option value="">निवडा...</option>
                  {mumbaiAreas.map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              {/* Taluka & Village */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    तालुका (बुलढाणा जिल्हा) <span className="text-destructive">*</span>
                  </label>
                  <select
                    name="taluka"
                    value={formData.taluka}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  >
                    <option value="">निवडा...</option>
                    {talukas.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    गाव <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="village"
                    value={formData.village}
                    onChange={handleChange}
                    required
                    placeholder="तुमचे गाव"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>

              {/* Profession */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  व्यवसाय / नोकरी
                </label>
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  placeholder="तुमचा व्यवसाय किंवा नोकरी"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                />
              </div>

              {/* Volunteer */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  तुम्हाला स्वयंसेवक म्हणून काम करायचे आहे का?
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="wantsToVolunteer"
                      value="yes"
                      checked={formData.wantsToVolunteer === "yes"}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary"
                    />
                    <span className="text-foreground">होय</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="wantsToVolunteer"
                      value="no"
                      checked={formData.wantsToVolunteer === "no"}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary"
                    />
                    <span className="text-foreground">नाही</span>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover-lift disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    नोंदणी करत आहे...
                  </>
                ) : (
                  <>
                    <UserPlus className="w-5 h-5" />
                    सभासद नोंदणी करा
                  </>
                )}
              </button>
            </form>

            {/* Note */}
            <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-sm text-primary font-medium mb-2">
                📧 नोंदणी प्रक्रिया:
              </p>
              <p className="text-sm text-muted-foreground">
                फॉर्म भरून "सभासद नोंदणी करा" बटण दाबल्यानंतर तुमचा ईमेल क्लायंट उघडेल.
                तयार झालेला ईमेल <strong>buldhanabauddhamandal@gmail.com</strong> वर पाठवा.
              </p>
            </div>

            <p className="mt-4 text-center text-sm text-muted-foreground">
              सध्या सभासद शुल्क नाही. मंडळाचे सभासद होणे पूर्णपणे विनामूल्य आहे.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Join;
