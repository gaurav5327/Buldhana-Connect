import { QrCode, CreditCard, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useI18n } from "@/lib/i18n";
import qrCodeImg from "@/assets/upi-qr-code.jpeg";

const Donate = () => {
  const { t } = useI18n();

  return (
    <Layout>
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">{t("देणगी", "Donate")}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            <span className="text-accent">{t("देणगी", "Donate")}</span> {t("द्या", "Now")}
          </h1>
          <p className="max-w-3xl mx-auto text-primary-foreground/80 text-lg">
            {t("तुमची देणगी बुलढाणा भवन प्रकल्प आणि समाजकार्यासाठी वापरली जाईल", "Your donation will be used for Buldhana Bhavan project and social work")}
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-card border border-border">
              <CreditCard className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">{t("बँक हस्तांतरण", "Bank Transfer")}</h2>
              <div className="space-y-3 text-muted-foreground">
                <p><strong className="text-foreground">{t("बँक:", "Bank:")})</strong> State Bank of India (SBI)</p>
                <p><strong className="text-foreground">{t("खाते नाव:", "Account Name:")}</strong> {t("बुलढाणा जिल्हा बौद्ध रहिवासी समाज मंडळ", "Buldhana District Buddhist Residents Society")}</p>
                <p><strong>UPI ID:</strong> BULDHANAZILLA6240@SBI</p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border text-center">
              <QrCode className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">{t("UPI द्वारे देणगी", "Donate via UPI")}</h2>
              <div className="w-56 h-56 mx-auto mb-4 rounded-xl overflow-hidden border-2 border-primary/20">
                <img 
                  src={qrCodeImg} 
                  alt={t("UPI QR कोड - स्कॅन करा व पेमेंट करा", "UPI QR Code - Scan & Pay")}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-primary font-semibold">BULDHANAZILLA6240@SBI</p>
              <p className="text-sm text-muted-foreground mt-2">
                {t("कोणत्याही UPI App ने स्कॅन करा", "Scan with any UPI App")}
              </p>
            </div>
          </div>

          {/* Snehsammelan 2026 Special */}
          <div className="max-w-4xl mx-auto mt-12 p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
            <div className="text-center mb-6">
              <span className="inline-block px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
                {t("विशेष निमंत्रण", "Special Invitation")}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {t("स्नेहसंमेलन २०२६ - सहयोग राशी", "Sneh Sammelan 2026 - Contribution Amount")}
              </h2>
              <p className="text-muted-foreground mt-2">
                {t("१ फेब्रुवारी २०२६ | डॉ. बाबासाहेब आंबेडकर भवन, दादर (पूर्व)", "February 1, 2026 | Dr. B.R. Ambedkar Bhavan, Dadar (East)")}
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">₹ १,०००/-</p>
              <p className="text-muted-foreground">{t("प्रति कुटुंब सहयोग राशी", "Per family contribution amount")}</p>
              <p className="text-sm text-foreground mt-4">
                {t("नास्ता: ८:३० - ९:३० | लंच: १:०० - १:३०", "Breakfast: 8:30 - 9:30 | Lunch: 1:00 - 1:30")}
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-12 p-6 rounded-xl bg-accent/10 border border-accent/20 text-center">
            <CheckCircle className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="text-foreground">
              <strong>{t("पारदर्शकता:", "Transparency:")}</strong> {t("सर्व देणग्यांचा उपयोग बुलढाणा भवन आणि समाजकार्यासाठीच केला जातो.", "All donations are used exclusively for Buldhana Bhavan and social work.")}
            </p>
          </div>

          <div className="text-center mt-8">
            <Link to="/bhavan" className="text-primary font-medium hover:underline">
              {t("बुलढाणा भवन प्रकल्पाबद्दल अधिक जाणून घ्या →", "Learn more about Buldhana Bhavan project →")}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
