import { Card } from "@/components/ui/card";

export default function TournamentSection() {
  const stats = [
    { number: "40", label: "Teams" },
    { number: "800+", label: "Spieler" },
    { number: "5000+", label: "Besucher" },
    { number: "8", label: "Gruppen\n(sponsorbar)" }
  ];

  return (
    <section id="turnier" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="tournament-title">Das Turnier</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="tournament-description">
            Das renommierteste Ü32-Turnier Deutschlands mit Landesmeistern & Titelverteidigern. 
            Gastgeber SKV Rutesheim mit über 1000 Mitgliedern.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              data-testid={`stat-card-${index}`}
            >
              <div className="text-4xl font-bold text-primary mb-2" data-testid={`stat-number-${index}`}>
                {stat.number}
              </div>
              <div className="text-muted-foreground whitespace-pre-line" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
