export default function EmotionsSection() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800",
      alt: "Football match intense moment"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800",
      alt: "Football team huddle"
    },
    {
      src: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800",
      alt: "Goalkeeper diving save"
    },
    {
      src: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800",
      alt: "Football celebration moment"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="emotions-title">
            Emotionen, die bleiben
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-4" data-testid="emotions-description">
            Der DAHSC 2026 verbindet Spitzenfußball, Gänsehaut-Momente und unvergessliche Emotionen. Ihre Marke wird nicht nur gesehen – sie wird erlebt.
          </p>
          <p className="text-lg text-primary font-bold" data-testid="emotions-hashtag">
            #DAHSC2026
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <img 
              key={index}
              src={image.src} 
              alt={image.alt}
              className="w-full h-48 object-cover shadow-sm hover:shadow-md transition-all duration-300 rounded-xl"
              data-testid={`gallery-image-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
