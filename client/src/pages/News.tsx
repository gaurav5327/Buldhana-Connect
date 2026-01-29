import { Newspaper, ExternalLink, Calendar } from "lucide-react";
import Layout from "@/components/Layout";

const News = () => {
  const newsItems = [
    {
      title: "बुलढाणा जिल्हा बौद्ध रहिवाशी समाज मंडळ मुंबई चे वार्षिक स्नेहसंमेलन",
      description: "आंबेडकर भवन दादर मुंबई येथे आयोजित करण्यात आले आहे.",
      source: "सागर लता न्यूज",
      date: "जानेवारी २०२६",
      link: "https://sagarlatanews.com/?p=2047",
      featured: true
    },
    { title: "शिक्षक दिन सोहळा २०२५ - जुईनगर", source: "विविध वृत्तपत्रे", date: "नोव्हेंबर २०२५" },
    { title: "चॅरिटी शो मुलुंड - बुलढाणा भवन निधी", source: "स्थानिक प्रसारमाध्यमे", date: "२०२४" },
    { title: "पहिले स्नेहसंमेलन पनवेल", source: "विविध वृत्तपत्रे", date: "सप्टेंबर २०१८" },
  ];

  return (
    <Layout>
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">बातम्या</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            बातम्या आणि <span className="text-gradient">प्रसारमाध्यमे</span>
          </h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {newsItems.map((item, i) => (
              <div key={i} className={`p-6 rounded-2xl border hover-lift ${item.featured ? 'bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20' : 'bg-card border-border'}`}>
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-full ${item.featured ? 'bg-primary/10' : 'bg-muted'}`}>
                    <Newspaper className={`w-6 h-6 ${item.featured ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                        {item.description && (
                          <p className="text-muted-foreground mb-3">{item.description}</p>
                        )}
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{item.source}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {item.date}
                          </span>
                        </div>
                      </div>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
                        >
                          वाचा
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-xl mx-auto mt-12 text-center p-8 rounded-3xl bg-card border border-border">
            <Newspaper className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
            <p className="text-muted-foreground">अधिक बातम्या आणि प्रसारमाध्यम कव्हरेज लवकरच!</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
