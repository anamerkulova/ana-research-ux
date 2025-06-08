
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ValuePropsSection from '@/components/ValuePropsSection';
import FeaturedWorkSection from '@/components/FeaturedWorkSection';
import SocialProofSection from '@/components/SocialProofSection';
import OverviewSection from '@/components/OverviewSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ValuePropsSection />
        <FeaturedWorkSection />
        <SocialProofSection />
        <OverviewSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
