import { Card } from "@/components/ui/card";

export default function SponsorsSection() {
  const sponsors = [
    { name: "Sponsor 1" },
    { name: "Sponsor 2" },
    { name: "Sponsor 3" },
    { name: "Sponsor 4" }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="sponsors-title">
            Unsere Partner
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="sponsors-description">
            Werden Sie Teil dieser starken Partnerfamilie.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <Card 
              key={index}
              className="p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center h-32 bg-white border-0"
              data-testid={`sponsor-card-${index}`}
            >
              <div className="text-2xl font-bold text-muted-foreground" data-testid={`sponsor-name-${index}`}>
                {sponsor.name}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
