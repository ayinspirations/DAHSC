import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hotel, Calendar, Users, HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function TeamsSection() {
  const { toast } = useToast();

  const handleTeamInfoDownload = async () => {
    try {
      const response = await fetch('/api/team-info');
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Download gestartet",
          description: data.message,
        });
      } else {
        toast({
          title: "Fehler",
          description: data.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Download konnte nicht gestartet werden.",
        variant: "destructive",
      });
    }
  };

  const teamInfo = [
    {
      icon: Hotel,
      title: "Hotels & Unterkünfte",
      description: "Partnerhotels mit exklusiven Konditionen"
    },
    {
      icon: Calendar,
      title: "Ablaufplan",
      description: "Detaillierter Zeitplan für das Turnierwochenende"
    },
    {
      icon: Users,
      title: "Gruppenübersicht",
      description: "8 Gruppen mit allen teilnehmenden Teams"
    },
    {
      icon: HelpCircle,
      title: "FAQ",
      description: "Häufige Fragen zu Anreise & Verpflegung"
    }
  ];

  return (
    <section id="teams" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="teams-title">
            Für Teams
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card 
                key={index}
                className="p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 bg-white border-0"
                data-testid={`team-info-card-${index}`}
              >
                <div className="text-center">
                  <IconComponent className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <h3 className="text-xl font-bold mb-2" data-testid={`team-info-title-${index}`}>
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground whitespace-pre-line" data-testid={`team-info-description-${index}`}>
                    {info.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={handleTeamInfoDownload}
            className="bg-primary text-primary-foreground px-12 py-4 text-xl font-bold hover:bg-gray-800 transition-all duration-300 shadow-lg rounded-xl"
            data-testid="button-team-download"
          >
            Zu den Team-Infos
          </Button>
        </div>
      </div>
    </section>
  );
}
