import { QrCode, CreditCard, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import qrCodeImg from "@/assets/upi-qr-code.jpeg";

const Donate = () => {
  return (
    <Layout>
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">देणगी</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            <span className="text-accent">देणगी</span> द्या
          </h1>
          <p className="max-w-3xl mx-auto text-primary-foreground/80 text-lg">
            तुमची देणगी बुलढाणा भवन प्रकल्प आणि समाजकार्यासाठी वापरली जाईल
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-card border border-border">
              <CreditCard className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">बँक हस्तांतरण</h2>
              <div className="space-y-3 text-muted-foreground">
                <p><strong className="text-foreground">बँक:</strong> State Bank of India (SBI)</p>
                <p><strong className="text-foreground">खाते नाव:</strong> बुलढाणा जिल्हा बौद्ध रहिवासी समाज मंडळ</p>
                <p><strong className="text-foreground">UPI ID:</strong> BULDHANAZILLA6240@SBI</p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border text-center">
              <QrCode className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">UPI द्वारे देणगी</h2>
              <div className="w-56 h-56 mx-auto mb-4 rounded-xl overflow-hidden border-2 border-primary/20">
                <img 
                  src={qrCodeImg} 
                  alt="UPI QR Code - Scan & Pay" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-primary font-semibold">BULDHANAZILLA6240@SBI</p>
              <p className="text-sm text-muted-foreground mt-2">
                कोणत्याही UPI App ने स्कॅन करा
              </p>
            </div>
          </div>

          {/* Snehsammelan 2026 Special */}
          <div className="max-w-4xl mx-auto mt-12 p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
            <div className="text-center mb-6">
              <span className="inline-block px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
                विशेष निमंत्रण
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                स्नेहसंमेलन २०२६ - सहयोग राशी
              </h2>
              <p className="text-muted-foreground mt-2">
                १ फेब्रुवारी २०२६ | डॉ. बाबासाहेब आंबेडकर भवन, दादर (पूर्व)
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">₹ १,०००/-</p>
              <p className="text-muted-foreground">प्रति कुटुंब सहयोग राशी</p>
              <p className="text-sm text-foreground mt-4">
                नास्ता: ८:३० - ९:३० | लंच: १:०० - १:३०
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-12 p-6 rounded-xl bg-accent/10 border border-accent/20 text-center">
            <CheckCircle className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="text-foreground">
              <strong>पारदर्शकता:</strong> सर्व देणग्यांचा उपयोग बुलढाणा भवन आणि समाजकार्यासाठीच केला जातो.
            </p>
          </div>

          <div className="text-center mt-8">
            <Link to="/bhavan" className="text-primary font-medium hover:underline">
              बुलढाणा भवन प्रकल्पाबद्दल अधिक जाणून घ्या →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
