import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Stadium aerial view with dramatic lighting showing multiple football pitches */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`
        }}
        data-testid="hero-background"
      />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" data-testid="hero-title">
          DAHSC 2026
        </h1>
        <h2 className="text-2xl md:text-4xl mb-4 font-semibold" data-testid="hero-subtitle">
          Ein Turnier der Extraklasse
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-200" data-testid="hero-description">
          40 Teams. Über 800 Spieler. 5000+ Besucher. 200.000+ Social Media Views – Ihre Marke im Rampenlicht.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection('sponsoring')}
            className="bg-white text-primary px-8 py-4 text-lg font-bold hover:bg-gray-200 transition-all duration-300 shadow-lg"
            data-testid="button-sponsor"
          >
            Jetzt Sponsor werden
          </Button>
          <Button 
            onClick={() => scrollToSection('teams')}
            variant="outline"
            className="border-2 border-white text-white px-8 py-4 text-lg font-bold hover:bg-white hover:text-primary transition-all duration-300"
            data-testid="button-team-info"
          >
            Infos für Teams
          </Button>
        </div>
      </div>
    </section>
  );
}
