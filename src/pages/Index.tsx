
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedWorkSection from '@/components/FeaturedWorkSection';
import WorkTogetherSection from '@/components/WorkTogetherSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedWorkSection />
        <WorkTogetherSection />
      </main>
    </div>
  );
};

export default Index;
