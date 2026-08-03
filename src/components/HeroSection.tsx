
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const handleViewWorkClick = () => {
    const workSection = document.querySelector('#work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent rounded-full opacity-70 animate-float"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-secondary rounded-full opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-accent rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-width section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in order-2 lg:order-1">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Hi, I'm Ana Merkulova
              </h1>
              
              <p className="text-xl md:text-2xl text-primary font-semibold mb-8 leading-relaxed">
                Experience Designer · Educational Psychology · Service Design
              </p>

              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                I came to design by watching teachers and students struggle with tools that
                weren't built for them. Since then I've worked across UX, service design, and
                research, designing for learners, vulnerable populations, and professional
                communities. I'm drawn to complex systems and the people inside them.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105"
                  onClick={handleViewWorkClick}
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-medium transition-all duration-300"
                  asChild
                >
                  <Link to="/about">About Me</Link>
                </Button>
              </div>
            </div>

            {/* Professional headshot */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg">
                <img 
                  src={`${import.meta.env.BASE_URL}lovable-uploads/9dfa6111-94fa-4c6c-985c-fc3687c5055e.png`}
                  alt="Ana Merkulova professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
