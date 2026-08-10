import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const FeaturedWorkSection = () => {
  const projects = [
    {
      title: 'UX for Change Fellowship',
      subheading: 'Leading design through ambiguity.',
      tags: ['Service design', 'UX', 'design leadership', 'regenerative and trauma-informed design'],
      link: '/ux-for-change',
      isComingSoon: false,
    },
    {
      title: 'MindHug',
      subheading: 'Building design influence from scratch.',
      tags: ['Government Programme', 'Service Design', 'UX and Learning Design'],
      link: '/mindhug',
      isComingSoon: false,
    },
    {
      title: 'Other UX Projects',
      subheading: 'More of my case studies and visual work.',
      tags: ['UX/UI', 'Framer', 'volunteering and education'],
      link: 'https://anamerkulovaux.framer.website/',
      isExternal: true,
      isComingSoon: false,
      ctaLabel: 'Visit',
    },
  ];

  return (
    <section id="work" className="py-20">
      <div className="container-width section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16 max-w-3xl mx-auto leading-tight">
            UX and service design for systems that help people learn and grow.
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const cardContent = (
                <Card
                  className={`h-full border-none shadow-lg transition-all duration-300 ${
                    project.isComingSoon
                      ? 'opacity-70'
                      : project.isExternal
                      ? 'hover:shadow-xl transform hover:-translate-y-1 group cursor-pointer bg-card border border-border'
                      : 'hover:shadow-xl transform hover:-translate-y-1 group cursor-pointer ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-accent'
                  }`}
                >
                  <div
                    className={`aspect-video rounded-t-lg flex items-center justify-center ${
                      project.isComingSoon || project.isExternal
                        ? 'bg-muted'
                        : 'bg-gradient-to-br from-primary/15 via-accent to-secondary/40'
                    }`}
                  >
                    {project.isComingSoon ? (
                      <span className="text-muted-foreground text-lg font-medium">Coming soon</span>
                    ) : (
                      <span
                        className={`text-lg font-semibold px-6 text-center ${
                          project.isExternal ? 'text-foreground' : 'text-primary'
                        }`}
                      >
                        {project.title}
                      </span>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3
                      className={`text-xl font-semibold mb-2 ${
                        project.isComingSoon ? 'text-muted-foreground' : 'text-foreground group-hover:text-primary transition-colors'
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.subheading}
                    </p>
                    {project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-sm rounded-full font-medium bg-secondary text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    {!project.isComingSoon && (
                      <span className="text-primary font-medium inline-flex items-center gap-1.5">
                        {project.ctaLabel ?? 'View Case Study'}
                        {project.isExternal ? (
                          <>
                            <ExternalLink className="h-4 w-4" />
                            <span className="text-muted-foreground font-normal text-sm">
                              (opens in a new window)
                            </span>
                          </>
                        ) : (
                          ' →'
                        )}
                      </span>
                    )}
                  </CardContent>
                </Card>
              );

              if (project.isExternal && project.link) {
                return (
                  <a key={index} href={project.link} target="_blank" rel="noopener noreferrer">
                    {cardContent}
                  </a>
                );
              }

              return project.link ? (
                <Link key={index} to={project.link}>
                  {cardContent}
                </Link>
              ) : (
                <div key={index}>{cardContent}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
