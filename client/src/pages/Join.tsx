import { useState } from "react";
import { UserPlus, CheckCircle, Users, Heart, Award } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import { useI18n } from "@/lib/i18n";

const Join = () => {
  const { t } = useI18n();
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
    wantsToVolunteer: "",
    paymentStatus: "",
    transactionId: ""
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

  const benefits = [
    { icon: Users, title: t("समुदाय जोडणी", "Community Network"), description: t("७०००+ कुटुंबांच्या नेटवर्कचा भाग", "Part of 7000+ family network") },
    { icon: Heart, title: t("तात्काळ मदत", "Immediate Support"), description: t("कधीही मदतीसाठी संपर्क करा", "Contact anytime for help") },
    { icon: Award, title: t("कार्यक्रम निमंत्रण", "Event Access"), description: t("सर्व कार्यक्रमांना प्राधान्य", "Priority to all events") },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create email content with form data
    const emailSubject = t("नवीन सभासद नोंदणी विनंती - बुलढाणा मंडळ", "New Member Registration Request - Buldhana Mandal");
    const emailBody = `
${t("सविनय जयभीम", "Jai Bhim")},

${t("नवीन सभासद नोंदणी विनंती:", "New Member Registration Request:")}

${t("व्यक्तिगत माहिती:", "Personal Information:")}
- ${t("नाव", "Name")}: ${formData.name}
- ${t("मोबाईल", "Mobile")}: ${formData.mobile}
- WhatsApp: ${formData.whatsapp || formData.mobile}
- ${t("ईमेल", "Email")}: ${formData.email || t("नाही", "No")}

${t("पत्ता माहिती:", "Address Information:")}
- ${t("मुंबईतील क्षेत्र", "Mumbai Area")}: ${formData.mumbaiArea}
- ${t("तालुका", "Taluka")}: ${formData.taluka}
- ${t("गाव", "Village")}: ${formData.village}

${t("इतर माहिती:", "Other Information:")}
- ${t("व्यवसाय", "Profession")}: ${formData.profession || t("नाही", "No")}
- ${t("स्वयंसेवक बनायचे", "Want to volunteer")}: ${formData.wantsToVolunteer === 'yes' ? t("होय", "Yes") : formData.wantsToVolunteer === 'no' ? t("नाही", "No") : t("निवडले नाही", "Not selected")}

${t("पेमेंट माहिती:", "Payment Information:")}
- ${t("सभासद शुल्क स्थिती", "Membership Fee Status")}: ${formData.paymentStatus === 'paid' ? t("भरले आहे", "Paid") : formData.paymentStatus === 'pending' ? t("नंतर भरणार", "Will pay later") : t("निवडले नाही", "Not selected")}
- Transaction ID: ${formData.transactionId || t("नाही", "No")}

${t("कृपया या व्यक्तीला मंडळाच्या WhatsApp ग्रुपमध्ये जोडा.", "Please add this person to the organization's WhatsApp group.")}

${t("धन्यवाद!", "Thank you!")}
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
        title: t("ईमेल तयार केला!", "Email prepared!"),
        description: t("तुमचा ईमेल क्लायंट उघडला आहे. कृपया ईमेल पाठवा.", "Your email client has opened. Please send the email."),
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
                {t("ईमेल पाठवला गेला!", "Email sent!")}
              </h1>
              <p className="text-muted-foreground mb-6">
                {t("तुमची सभासद नोंदणी विनंती ईमेलद्वारे पाठवली गेली आहे! आम्ही लवकरच तुम्हाला WhatsApp ग्रुपमध्ये जोडू आणि संपर्क करू.", "Your membership registration request has been sent via email! We will add you to the WhatsApp group and contact you soon.")}
              </p>
              <p className="text-accent font-semibold text-xl">
                {t("सविनय जयभीम 🙏", "Jai Bhim 🙏")}
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
            {t("सभासद बना", "Become Member")}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            {t("आमच्या", "Our")} <span className="text-gradient">{t("परिवाराचा", "Family")}</span> {t("भाग व्हा", "Be Part")}
          </h1>
          <p className="max-w-3xl mx-auto text-primary-foreground/80 text-lg">
            {t("७०००+ कुटुंबांच्य मजबूत नेटवर्कचा भाग व्हा आणि एकमेकांच्या प्रगतीला हातभार लावा", "Be part of our strong network of 7000+ families and contribute to each other's progress")}
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

              {/* Mobile & WhatsApp */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    placeholder={t("मोबाईल नंबर", "Mobile number")}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("WhatsApp नंबर", "WhatsApp Number")}
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder={t("WhatsApp नंबर (वेगळा असल्यास)", "WhatsApp number (if different)")}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("ईमेल (पर्यायी)", "Email (Optional)")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("तुमचा ईमेल", "Your email")}
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
                    {t("गाव", "Village")} <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="village"
                    value={formData.village}
                    onChange={handleChange}
                    required
                    placeholder={t("तुमचे गाव", "Your village")}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>

              {/* Profession */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("व्यवसाय / नोकरी", "Profession / Job")}
                </label>
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  placeholder={t("तुमचा व्यवसाय किंवा नोकरी", "Your profession or job")}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                />
              </div>

              {/* Volunteer */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("तुम्हाला स्वयंसेवक म्हणून काम करायचे आहे का?", "Do you want to work as a volunteer?")}
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
                    <span className="text-foreground">{t("होय", "Yes")}</span>
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
                    <span className="text-foreground">{t("नाही", "No")}</span>
                  </label>
                </div>
              </div>

              {/* Payment Confirmation */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("सभासद शुल्क (₹१०००) भरले आहे का?", "Have you paid the membership fee (₹1000)?")} <span className="text-destructive">*</span>
                </label>
                <div className="space-y-3">
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentStatus"
                        value="paid"
                        onChange={handleChange}
                        className="w-4 h-4 text-primary"
                        required
                      />
                      <span className="text-foreground">{t("होय, भरले आहे", "Yes, paid")}</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentStatus"
                        value="pending"
                        onChange={handleChange}
                        className="w-4 h-4 text-primary"
                      />
                      <span className="text-foreground">{t("नंतर भरेन", "Will pay later")}</span>
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("Transaction ID / Reference Number (पेमेंट केले असल्यास)", "Transaction ID / Reference Number (if paid)")}
                    </label>
                    <input
                      type="text"
                      name="transactionId"
                      onChange={handleChange}
                      placeholder={t("Transaction ID किंवा Reference Number", "Transaction ID or Reference Number")}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                    />
                  </div>
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
                    {t("नोंदणी करत आहे...", "Registering...")}
                  </>
                ) : (
                  <>
                    <UserPlus className="w-5 h-5" />
                    {t("सभासद नोंदणी करा", "Register as Member")}
                  </>
                )}
              </button>
            </form>

            {/* Note */}
            <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-sm text-primary font-medium mb-2">
                {t("📧 नोंदणी प्रक्रिया:", "📧 Registration Process:")}
              </p>
              <p className="text-sm text-muted-foreground">
                {t("फॉर्म भरून \"सभासद नोंदणी करा\" बटण दाबल्यानंतर तुमचा ईमेल क्लायंट उघडेल. तयार झालेला ईमेल", "After filling the form and pressing 'Register as Member' button, your email client will open. Send the prepared email to")} <strong>buldhanabauddhamandal@gmail.com</strong> {t("वर पाठवा.", ".")}
              </p>
            </div>

            {/* Membership Fee & Payment Details */}
            <div className="mt-6 p-6 rounded-xl bg-primary/5 border border-primary/20">
              <h3 className="text-lg font-semibold text-primary mb-4">{t("सभासद शुल्क व पेमेंट माहिती", "Membership Fee & Payment Information")}</h3>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                  <p className="text-sm font-medium text-accent mb-2">
                    {t("💰 सभासद शुल्क: ₹१००० (एकवेळ)", "💰 Membership Fee: ₹1000 (One-time)")}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t("सभासद होण्यासाठी ₹१००० शुल्क भरावे लागते", "₹1000 fee is required to become a member")}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Bank Details */}
                  <div className="p-4 rounded-lg bg-background border border-border">
                    <h4 className="font-semibold text-foreground mb-3">🏦 {t("बँक तपशील", "Bank Details")}</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>{t("बँक:", "Bank:")}</strong> State Bank of India (SBI)</p>
                      <p><strong>{t("खाते नाव:", "Account Name:")}</strong> {t("बुलढाणा जिल्हा बौद्ध रहिवासी समाज मंडळ", "Buldhana District Buddhist Residents Society")}</p>
                      <p><strong>{t("खाते क्रमांक:", "Account Number:")}</strong> 40472267240</p>
                      <p><strong>IFSC {t("कोड:", "Code:")})</strong> SBIN0070174</p>
                      <p><strong>{t("शाखा:", "Branch:")}</strong> Kharghar, Navi Mumbai</p>
                    </div>
                  </div>

                  {/* UPI Details */}
                  <div className="p-4 rounded-lg bg-background border border-border">
                    <h4 className="font-semibold text-foreground mb-3">📱 UPI {t("पेमेंट", "Payment")}</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>UPI ID:</strong> BULDHANAZILLA6240@SBI</p>
                      <p><strong>{t("फोन पे / गूगल पे:", "PhonePe / Google Pay:")}</strong> 9702777927</p>
                      <div className="mt-3 p-2 bg-muted rounded text-center">
                        <p className="text-xs text-muted-foreground">{t("QR कोड स्कॅन करा", "Scan QR Code")}</p>
                        <p className="text-xs text-primary">{t("किंवा UPI ID वापरा", "or use UPI ID")}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-orange-50 border border-orange-200">
                  <p className="text-sm text-orange-800">
                    <strong>{t("महत्वाचे:", "Important:")}</strong> {t("पेमेंट केल्यानंतर स्क्रीनशॉट घेऊन फॉर्म भरताना त्याचा उल्लेख करा.", "After payment, take a screenshot and mention it while filling the form.")}
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-sm text-muted-foreground">
              {t("सभासद शुल्क भरल्यानंतर तुम्हाला मंडळाच्या सर्व कार्यक्रमांमध्ये सहभागी होण्याचा अधिकार मिळेल.", "After paying the membership fee, you will be eligible to participate in all organization events.")}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Join;
