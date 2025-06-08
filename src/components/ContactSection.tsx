
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container-width section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Ready to bring psychology-informed design to your next project? 
            I'd love to hear about your challenges and explore how we can create 
            experiences that truly connect with your users.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-coral-600 text-white px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg font-medium transition-all duration-300"
            >
              View LinkedIn
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/70">
              Based in [Your Location] • Available for freelance and full-time opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
