
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FeaturedWorkSection = () => {
  const caseStudies = [
    {
      title: "Designing at Scale: From Chaos to Capability",
      description: "How I transformed a 3-month government programme from an impossible deadline into a measurable success story—recruiting and training 30 coaches while building organizational design capability.",
      tags: ["Government Programme", "Service Design", "People Experience"],
      image: "placeholder-image-1"
    },
    {
      title: "Building Inclusive Experiences Through Team Collaboration", 
      description: "Designing accessible volunteer platform filters while navigating technical constraints and building stakeholder alignment across a cross-functional team.",
      tags: ["Scottish Tech Army", "Accessibility", "Team Collaboration"],
      image: "placeholder-image-2"
    },
    {
      title: "Designing for Parents Under Pressure",
      description: "Understanding the psychology of busy parents to create clearer, more intuitive school communication experiences through iterative testing and behavioral insights.",
      tags: ["ParentHub", "Psychology", "Iterative Design"],
      image: "placeholder-image-3"
    }
  ];

  return (
    <section className="py-20">
      <div className="container-width section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            Recent Work
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="aspect-video bg-gradient-to-br from-teal-100 to-coral-100 rounded-t-lg flex items-center justify-center">
                  <span className="text-muted-foreground font-medium">Project Visual</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-accent/20 text-primary text-sm rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-primary hover:text-secondary font-medium"
                  >
                    View Case Study →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
