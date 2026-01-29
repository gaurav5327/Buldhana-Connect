import { useState } from "react";
import { Send, CheckCircle, Phone, AlertCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const GetHelp = () => {
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
    "बुलढाणा", "चिखली", "देऊळगाव राजा", "जळगाव जामोद", "खामगाव",
    "लोणार", "मलकापूर", "मेहकर", "मोताळा", "नांदुरा",
    "संग्रामपूर", "शेगाव", "सिंदखेड राजा"
  ];

  const mumbaiAreas = [
    "कल्याण", "ठाणे", "नवी मुंबई", "चेंबूर", "दादर",
    "अंधेरी", "बोरिवली", "विरार", "उल्हासनगर", "मुलुंड",
    "पनवेल", "वाशी", "खारघर", "ऐरोली", "इतर"
  ];

  const helpTypes = [
    { value: "job", label: "नोकरी / करिअर मार्गदर्शन" },
    { value: "education", label: "शिक्षण / प्रवेश मदत" },
    { value: "medical", label: "आरोग्य / वैद्यकीय मदत" },
    { value: "accommodation", label: "निवास व्यवस्था" },
    { value: "legal", label: "कायदेशीर सल्ला" },
    { value: "government", label: "सरकारी कामे" },
    { value: "other", label: "इतर" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "विनंती पाठवली!",
      description: "आम्ही लवकरच तुमच्याशी संपर्क साधू.",
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
                तुमची विनंती मिळाली!
              </h1>
              <p className="text-muted-foreground mb-6">
                आम्ही तुमची विनंती प्राप्त केली आहे. आमचे सदस्य लवकरच तुमच्याशी
                संपर्क साधतील. कृपया धीर धरा.
              </p>
              <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 mb-6">
                <p className="text-sm text-foreground">
                  <strong>तातडीसाठी:</strong> तुम्ही आमच्या कार्यकारिणी सदस्यांना थेट फोन करू शकता.
                </p>
              </div>
              <a
                href="tel:+919702777927"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold"
              >
                <Phone className="w-5 h-5" />
                आत्ताच फोन करा
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
            मदत हवी आहे?
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            आम्ही तुमच्या <span className="text-gradient">मदतीसाठी</span> आहोत
          </h1>
          <p className="max-w-3xl mx-auto text-primary-foreground/80 text-lg">
            नोकरी, शिक्षण, आरोग्य, निवास किंवा इतर कोणत्याही समस्येसाठी
            खालील फॉर्म भरा. आम्ही लवकरच संपर्क साधू.
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
                <p className="font-medium text-foreground">तातडीच्या मदतीसाठी थेट फोन करा:</p>
                <a href="tel:+919702777927" className="text-primary font-semibold">+91 9702777927</a>
              </div>
            </div>

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

              {/* Mobile */}
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
                  placeholder="तुमचा मोबाईल नंबर"
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
                    गाव
                  </label>
                  <input
                    type="text"
                    name="village"
                    value={formData.village}
                    onChange={handleChange}
                    placeholder="तुमचे गाव"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>

              {/* Help Type */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  कोणत्या प्रकारची मदत हवी आहे? <span className="text-destructive">*</span>
                </label>
                <select
                  name="helpType"
                  value={formData.helpType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                >
                  <option value="">निवडा...</option>
                  {helpTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  तुमची समस्या सविस्तर सांगा <span className="text-destructive">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="कृपया तुमची समस्या तपशीलवार सांगा..."
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
                    पाठवत आहे...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    विनंती पाठवा
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
