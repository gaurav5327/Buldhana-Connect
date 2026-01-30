import { Newspaper, ExternalLink, Calendar, Image, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";

// Import newspaper cuttings
import newspaperCutting1 from "@/assets/newspaper_cuttings/WhatsApp Image 2026-01-29 at 1.53.41 PM.jpeg";
import newspaperCutting2 from "@/assets/newspaper_cuttings/WhatsApp Image 2026-01-29 at 1.53.42 PM.jpeg";

const News = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const newspaperImages = [
    { src: newspaperCutting1, title: "वृत्तपत्र कव्हरेज १", description: "मंडळाच्या कार्यक्रमाचे वृत्तपत्र कव्हरेज" },
    { src: newspaperCutting2, title: "वृत्तपत्र कव्हरेज २", description: "स्नेहसंमेलन कार्यक्रमाची बातमी" }
  ];

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < newspaperImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  // Keyboard event handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, selectedImageIndex]);
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

          {/* Newspaper Cuttings Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                वृत्तपत्र कटिंग्स
              </h2>
              <p className="text-muted-foreground">
                आमच्या कार्यक्रमांचे वृत्तपत्रांमधील कव्हरेज
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newspaperImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted cursor-pointer hover-lift"
                  onClick={() => openModal(index)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="text-white font-semibold">{image.title}</p>
                    <p className="text-white/80 text-sm">क्लिक करून मोठे करा</p>
                  </div>

                  {/* Click Indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Image className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-xl mx-auto mt-12 text-center p-8 rounded-3xl bg-card border border-border">
            <Newspaper className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
            <p className="text-muted-foreground">अधिक बातम्या आणि प्रसारमाध्यम कव्हरेज लवकरच!</p>
          </div>
        </div>
      </section>

      {/* Image Viewer Modal */}
      {isModalOpen && selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            title="बंद करा (Esc)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          {selectedImageIndex > 0 && (
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              title="मागील फोटो (←)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {selectedImageIndex < newspaperImages.length - 1 && (
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              title="पुढील फोटो (→)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Image Container */}
          <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <img
              src={newspaperImages[selectedImageIndex].src}
              alt={newspaperImages[selectedImageIndex].title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Image Info */}
          <div className="absolute bottom-4 left-4 z-10 max-w-md">
            <div className="p-4 rounded-xl bg-black/50 backdrop-blur-sm text-white">
              <h3 className="font-semibold text-lg mb-1">
                {newspaperImages[selectedImageIndex].title}
              </h3>
              <p className="text-white/70 text-sm">
                {newspaperImages[selectedImageIndex].description} • {selectedImageIndex + 1} / {newspaperImages.length}
              </p>
            </div>
          </div>

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closeModal}
          />
        </div>
      )}
    </Layout>
  );
};

export default News;
