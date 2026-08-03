
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedWorkSection from '@/components/FeaturedWorkSection';
import OverviewSection from '@/components/OverviewSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedWorkSection />
        <OverviewSection />
      </main>
    </div>
  );
};

export default Index;
