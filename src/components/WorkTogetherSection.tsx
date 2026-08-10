import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const WorkTogetherSection = () => {
  return (
    <section className="py-20 bg-muted/40">
      <div className="container-width section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            If you're designing something that matters, I'd love to be part of it.
          </p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/anastasia-merkulova-165224157/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Find me on LinkedIn
              <ExternalLink className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkTogetherSection;
