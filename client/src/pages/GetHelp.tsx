import { useState } from "react";
import { Send, CheckCircle, Phone, AlertCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import { useI18n } from "@/lib/i18n";

const GetHelp = () => {
  const { t } = useI18n();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    mumbaiArea: "",
    taluka: "",
    village: "",
    helpType: "",
    message: ""
  });

  const talukas = [
    t("बुलढाणा", "Buldhana"), t("चिखली", "Chikhli"), t("देऊळगाव राजा", "Deulgaon Raja"), 
    t("जळगाव जामोद", "Jalgaon Jamod"), t("खामगाव", "Khamgaon"), t("लोणार", "Lonar"), 
    t("मलकापूर", "Malkapur"), t("मेहकर", "Mehkar"), t("मोताळा", "Motala"), 
    t("नांदुरा", "Nandura"), t("संग्रामपूर", "Sangrampur"), t("शेगाव", "Shegaon"), 
    t("सिंदखेड राजा", "Sindkhed Raja")
  ];

  const mumbaiAreas = [
    t("कल्याण", "Kalyan"), t("ठाणे", "Thane"), t("नवी मुंबई", "Navi Mumbai"), 
    t("चेंबूर", "Chembur"), t("दादर", "Dadar"), t("अंधेरी", "Andheri"), 
    t("बोरिवली", "Borivali"), t("विरार", "Virar"), t("उल्हासनगर", "Ulhasnagar"), 
    t("मुलुंड", "Mulund"), t("पनवेल", "Panvel"), t("वाशी", "Vashi"), 
    t("खारघर", "Kharghar"), t("ऐरोली", "Airolli"), t("इतर", "Other")
  ];

  const helpTypes = [
    { value: "job", label: t("नोकरी / करिअर मार्गदर्शन", "Job / Career Guidance") },
    { value: "education", label: t("शिक्षण / प्रवेश मदत", "Education / Admission Help") },
    { value: "medical", label: t("आरोग्य / वैद्यकीय मदत", "Health / Medical Assistance") },
    { value: "accommodation", label: t("निवास व्यवस्था", "Accommodation") },
    { value: "legal", label: t("कायदेशीर सल्ला", "Legal Advice") },
    { value: "government", label: t("सरकारी कामे", "Government Affairs") },
    { value: "other", label: t("इतर", "Other") },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: t("विनंती पाठवली!", "Request sent!"),
      description: t("आम्ही लवकरच तुमच्याशी संपर्क साधू.", "We will contact you soon."),
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
                {t("तुमची विनंती मिळाली!", "Your request received!")}
              </h1>
              <p className="text-muted-foreground mb-6">
                {t("आम्ही तुमची विनंती प्राप्त केली आहे. आमचे सदस्य लवकरच तुमच्याशी संपर्क साधतील. कृपया धीर धरा.", "We have received your request. Our team will contact you soon. Please wait.")}
              </p>
              <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 mb-6">
                <p className="text-sm text-foreground">
                  <strong>{t("तातडीसाठी:", "For urgency:")}</strong> {t("तुम्ही आमच्या कार्यकारिणी सदस्यांना थेट फोन करू शकता.", "You can directly call our office members.")}
                </p>
              </div>
              <a
                href="tel:+919702777927"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold"
              >
                <Phone className="w-5 h-5" />
                {t("आत्ताच फोन करा", "Call Now")}
              </a>
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
            {t("मदत हवी आहे?", "Need Help?")}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            {t("आम्ही तुमच्या", "We are here for your")} <span className="text-gradient">{t("मदतीसाठी", "assistance")}</span> {t("आहोत", "")}
          </h1>
          <p className="max-w-3xl mx-auto text-primary-foreground/80 text-lg">
            {t("नोकरी, शिक्षण, आरोग्य, निवास किंवा इतर कोणत्याही समस्येसाठी खालील फॉर्म भरा. आम्ही लवकरच संपर्क साधू.", "Fill the form below for job, education, health, accommodation, or any other problem. We will contact you soon.")}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Quick Contact */}
            <div className="mb-8 p-4 rounded-xl bg-accent/10 border border-accent/20 flex items-center gap-4">
              <AlertCircle className="w-6 h-6 text-accent shrink-0" />
              <div>
                <p className="font-medium text-foreground">{t("तातडीच्या मदतीसाठी थेट फोन करा:", "For urgent help, call directly:")})</p>
                <a href="tel:+919702777927" className="text-primary font-semibold">+91 9702777927</a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("पूर्ण नाव", "Full Name")} <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t("तुमचे पूर्ण नाव", "Your full name")}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("मोबाईल नंबर", "Mobile Number")} <span className="text-destructive">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  placeholder={t("तुमचा मोबाईल नंबर", "Your mobile number")}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                />
              </div>

              {/* Mumbai Area */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("मुंबईतील क्षेत्र", "Mumbai Area")} <span className="text-destructive">*</span>
                </label>
                <select
                  name="mumbaiArea"
                  value={formData.mumbaiArea}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                >
                  <option value="">{t("निवडा...", "Select...")}</option>
                  {mumbaiAreas.map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              {/* Taluka & Village */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("तालुका (बुलढाणा जिल्हा)", "Taluka (Buldhana District)")} <span className="text-destructive">*</span>
                  </label>
                  <select
                    name="taluka"
                    value={formData.taluka}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  >
                    <option value="">{t("निवडा...", "Select...")}</option>
                    {talukas.map(t_name => (
                      <option key={t_name} value={t_name}>{t_name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("गाव", "Village")}
                  </label>
                  <input
                    type="text"
                    name="village"
                    value={formData.village}
                    onChange={handleChange}
                    placeholder={t("तुमचे गाव", "Your village")}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>

              {/* Help Type */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("कोणत्या प्रकारची मदत हवी आहे?", "What kind of help do you need?")} <span className="text-destructive">*</span>
                </label>
                <select
                  name="helpType"
                  value={formData.helpType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                >
                  <option value="">{t("निवडा...", "Select...")}</option>
                  {helpTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("तुमची समस्या सविस्तर सांगा", "Describe your problem in detail")} <span className="text-destructive">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={t("कृपया तुमची समस्या तपशीलवार सांगा...", "Please describe your problem in detail...")}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 rounded-xl gradient-gold text-accent-foreground font-semibold text-lg shadow-gold hover-lift disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                    {t("पाठवत आहे...", "Sending...")}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t("विनंती पाठवा", "Send Request")}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetHelp;
