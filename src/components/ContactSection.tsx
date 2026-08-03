
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/40">
      <div className="container-width section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's Create Better Experiences Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Whether you're looking to improve employee experience, build design capability
            in your team, or create more inclusive digital products, I'd love to collaborate.
          </p>
          <p className="text-muted-foreground mb-8">
            Currently available for new opportunities in London and remote.
          </p>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="https://www.linkedin.com/in/anastasia-merkulova-165224157/" target="_blank" rel="noopener noreferrer">
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
