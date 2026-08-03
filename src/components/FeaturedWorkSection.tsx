import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

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
      title: 'Project Two',
      subheading: 'Coming soon.',
      tags: [],
      link: null,
      isComingSoon: true,
    },
    {
      title: 'Project Three',
      subheading: 'Coming soon.',
      tags: [],
      link: null,
      isComingSoon: true,
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
                      : 'hover:shadow-xl transform hover:-translate-y-1 group cursor-pointer ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-accent'
                  }`}
                >
                  <div
                    className={`aspect-video rounded-t-lg flex items-center justify-center ${
                      project.isComingSoon ? 'bg-muted' : 'bg-gradient-to-br from-primary/15 via-accent to-secondary/40'
                    }`}
                  >
                    {project.isComingSoon ? (
                      <span className="text-muted-foreground text-lg font-medium">Coming soon</span>
                    ) : (
                      <span className="text-primary text-lg font-semibold px-6 text-center">
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
                      <span className="text-primary font-medium">
                        View Case Study →
                      </span>
                    )}
                  </CardContent>
                </Card>
              );

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
