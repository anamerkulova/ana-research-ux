
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import OverviewSection from '@/components/OverviewSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <OverviewSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
