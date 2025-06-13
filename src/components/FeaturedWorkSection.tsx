
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const FeaturedWorkSection = () => {
  const caseStudies = [
    {
      title: "Designing for Impact: From Chaos to Capability",
      description: "How I transformed a 3-month government programme from an impossible deadline into a measurable success story—recruiting and training 30 coaches while building organizational design capability.",
      tags: ["Government Programme", "Service Design", "People Experience"],
      image: "/lovable-uploads/33313e3f-ef75-47fc-9d3a-30d8db86df37.png",
      isClickable: true,
      link: "/government-programme",
      isFeatured: true,
      showComingSoon: true
    },
    {
      title: "Building Inclusive Experiences Through Team Collaboration", 
      description: "Designing accessible volunteer platform filters while navigating technical constraints and building stakeholder alignment across a cross-functional team.",
      tags: ["Scottish Tech Army", "Accessibility", "Team Collaboration"],
      image: "/lovable-uploads/645121d5-cdcb-4712-8105-50dd911f48b3.png",
      isClickable: true,
      link: "/scottish-tech-army",
      showComingSoon: true
    },
    {
      title: "Instarem UX/UI Product Internship",
      description: "Redesigning card linking experiences and developing key features for a fintech platform used by millions. Led user research, created design systems, and collaborated with engineering teams.",
      tags: ["Fintech", "Product Design", "Mobile UX"],
      image: "/lovable-uploads/8237da60-5fe4-48a0-b668-06e1169deee1.png",
      isClickable: true,
      link: "/instarem",
      showComingSoon: false
    }
  ];

  return (
    <section id="work" className="py-20">
      <div className="container-width section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            Recent Work
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => {
              if (study.isClickable) {
                return (
                  <Link key={index} to={study.link}>
                    <Card className={`border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer ${
                      study.isFeatured ? 'ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5' : ''
                    }`}>
                      <div className={`aspect-video bg-gradient-to-br rounded-t-lg flex items-center justify-center overflow-hidden p-4 ${
                        study.isFeatured 
                          ? 'from-primary/20 via-secondary/15 to-accent/20' 
                          : 'from-teal-100 to-coral-100'
                      }`}>
                        {study.showComingSoon ? (
                          <div className="flex items-center justify-center h-full">
                            <span className="text-muted-foreground text-lg font-medium">Image updating</span>
                          </div>
                        ) : (
                          <div className={study.isFeatured ? 'relative' : ''}>
                            {study.isFeatured && (
                              <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-lg blur-sm"></div>
                            )}
                            <img 
                              src={study.image} 
                              alt={study.title}
                              className={`max-w-full max-h-full object-contain rounded-lg shadow-md ${
                                study.isFeatured ? 'relative shadow-lg' : ''
                              }`}
                            />
                          </div>
                        )}
                      </div>
                      <CardContent className="p-6">
                        {study.isFeatured && (
                          <div className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                            FEATURED
                          </div>
                        )}
                        <h3 className={`text-xl font-semibold mb-3 group-hover:text-primary transition-colors ${
                          study.isFeatured ? 'text-foreground' : 'text-foreground'
                        }`}>
                          {study.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {study.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {study.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className={`px-3 py-1 text-sm rounded-full font-medium ${
                                study.isFeatured 
                                  ? 'bg-primary/15 text-primary' 
                                  : 'bg-accent/20 text-primary'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="text-primary hover:text-secondary font-medium">
                          {study.showComingSoon ? 'Image updating →' : 'View Case Study →'}
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                );
              } else {
                return (
                  <div key={index}>
                    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
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
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
