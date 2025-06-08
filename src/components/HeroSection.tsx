
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-100 rounded-full opacity-50 animate-float"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-coral-100 rounded-full opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-accent rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-width section-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-custom-gray-900 mb-6 leading-tight">
              Ana Merkulova
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl text-primary font-medium mb-8 leading-relaxed">
              UX Designer who bridges psychology and people experience
            </p>
            
            {/* Brief intro */}
            <p className="text-lg md:text-xl text-custom-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Combining a deep understanding of human psychology with innovative design thinking, 
              I create digital experiences that truly resonate with people. My approach centers on 
              empathy, research, and the belief that great design starts with understanding human behavior.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-teal-700 text-primary-foreground px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                View Case Studies
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 text-lg font-medium transition-all duration-300"
              >
                Learn About Me
              </Button>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-custom-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-custom-gray-400 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
