import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function SponsoringSection() {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sponsorshipHighlights = [
    {
      image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      alt: "Professional footballer with trophy",
      title: "Die große Auslosung mit Cacau",
      features: [
        "Namensrechte für Gruppen",
        "Sponsorentafel & Mikrofon-Branding",
        "Offizielle Erwähnungen & Social Media Integration"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      alt: "Football tournament action",
      title: "Turnierwochenende (12.–13. Juni 2026)",
      features: [
        "Branding vor Ort: Banner, Beachflags, Stadionheft, Turnierplan",
        "200.000+ Social Media Views (Instagram-Reichweite beim letzten Turnier)",
        "Livestream & Highlight-Videos mit Sponsorenlogo",
        "VIP-Bereich, Promotion-Stände",
        "Interviewwand & Mikrofon-Sponsoring"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      alt: "Team celebration with trophy",
      title: "Siegerehrung & Abendveranstaltung mit DJ Robin",
      features: [
        "Branding auf Pokalen, Medaillen, Bühnenhintergrund",
        "Erwähnungen durch Moderation",
        "Aftermovies & Social Clips mit Sponsorenlogo",
        "Emotionale Markenbindung bei Siegerehrung & Party"
      ]
    }
  ];

  return (
    <section id="sponsoring" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="sponsoring-title">
            Ihre Marke im Rampenlicht
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="sponsoring-subtitle">
            Drei Event-Highlights – Ihre Bühne für starke Markenbotschaften
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {sponsorshipHighlights.map((highlight, index) => (
            <Card 
              key={index}
              className="p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 bg-white border-0"
              data-testid={`sponsoring-card-${index}`}
            >
              <img 
                src={highlight.image} 
                alt={highlight.alt}
                className="w-full h-48 object-cover mb-6 shadow-sm rounded-xl"
                data-testid={`sponsoring-image-${index}`}
              />
              
              <h3 className="text-2xl font-bold mb-4" data-testid={`sponsoring-title-${index}`}>
                {highlight.title}
              </h3>
              <ul className="text-muted-foreground space-y-2">
                {highlight.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center"
                    data-testid={`sponsoring-feature-${index}-${featureIndex}`}
                  >
                    <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto" data-testid="sponsoring-cta-text">
            Nutzen Sie dieses Event, um Ihre Marke emotional, authentisch und direkt erlebbar zu machen.
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground px-12 py-4 text-xl font-bold hover:bg-gray-800 transition-all duration-300 shadow-lg rounded-xl"
            data-testid="button-sponsoring-inquiry"
          >
            Sponsoring anfragen
          </Button>
        </div>
      </div>
    </section>
  );
}
