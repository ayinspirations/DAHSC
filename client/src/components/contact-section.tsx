import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name ist erforderlich"),
  company: z.string().optional(),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      message: "",
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Nachricht gesendet",
          description: result.message,
        });
        reset();
      } else {
        toast({
          title: "Fehler",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSponsorMaterialsDownload = async () => {
    try {
      const response = await fetch('/api/sponsor-materials');
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

  return (
    <section id="kontakt" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="contact-title">
            Jetzt Sponsor werden
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="contact-description">
            Interessiert an einer Partnerschaft? Schreiben Sie uns – wir melden uns mit individuellen Sponsoring-Möglichkeiten.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 rounded-2xl shadow-md bg-white border-0">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-bold mb-2">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    {...register("name")}
                    className="w-full"
                    data-testid="input-name"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1" data-testid="error-name">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="company" className="block text-sm font-bold mb-2">
                    Firma
                  </Label>
                  <Input
                    id="company"
                    {...register("company")}
                    className="w-full"
                    data-testid="input-company"
                  />
                  {errors.company && (
                    <p className="text-destructive text-sm mt-1" data-testid="error-company">
                      {errors.company.message}
                    </p>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-bold mb-2">
                  E-Mail *
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="w-full"
                  data-testid="input-email"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1" data-testid="error-email">
                    {errors.email.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-bold mb-2">
                  Nachricht *
                </Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  className="w-full h-32"
                  data-testid="input-message"
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1" data-testid="error-message">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-primary-foreground px-12 py-4 text-xl font-bold hover:bg-gray-800 transition-all duration-300 shadow-lg rounded-xl"
                  data-testid="button-submit"
                >
                  {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                </Button>
                <Button 
                  type="button"
                  variant="outline"
                  onClick={handleSponsorMaterialsDownload}
                  className="border-2 border-primary text-primary px-12 py-4 text-xl font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-xl"
                  data-testid="button-pdf-download"
                >
                  Sponsorenmappe herunterladen
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4" data-testid="footer-logo">DAHSC 2026</div>
            <p className="text-gray-300 mb-4" data-testid="footer-subtitle">
              Deutscher Altherren Supercup Ü32
            </p>
            <p className="text-gray-400 mb-6" data-testid="footer-date">
              12.-13. Juni 2026 • SKV Rutesheim
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-gray-300 transition-colors" data-testid="footer-impressum">Impressum</a>
              <a href="#" className="hover:text-gray-300 transition-colors" data-testid="footer-datenschutz">Datenschutz</a>
              <a href="#" className="hover:text-gray-300 transition-colors" data-testid="footer-instagram">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
