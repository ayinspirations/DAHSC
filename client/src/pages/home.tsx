import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import TournamentSection from "@/components/tournament-section";
import SponsoringSection from "@/components/sponsoring-section";
import TeamsSection from "@/components/teams-section";
import EmotionsSection from "@/components/emotions-section";
import SponsorsSection from "@/components/sponsors-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TournamentSection />
      <SponsoringSection />
      <TeamsSection />
      <EmotionsSection />
      <SponsorsSection />
      <ContactSection />
    </div>
  );
}
