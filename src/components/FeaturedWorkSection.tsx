import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Image as ImageIcon } from 'lucide-react';

const FeaturedWorkSection = () => {
  const projects = [
    {
      number: '1',
      label: 'With teachers of English as a Foreign Language.',
      question: 'When are AI-created materials helpful or harmful?',
      description:
        "This is an exploration of cognitive offloading during my Masters in Education and Technology at UCL. I created a choose-your-own adventure prototype for sense-making of teachers' language modeling in a classroom.",
      tags: ['Prototyping', 'Testing', 'Iteration'],
      link: null,
    },
    {
      number: '2',
      label: 'With vulnerable people.',
      question: 'How to move from research to ideation in an ethically sensitive field?',
      description:
        'I led three designers from research to the creation of the first prototype. After our co-imagination workshop with domestic violence survivors, we were faced with the challenge of choosing a path for designing a prototype, letting go of other possible solutions.',
      tags: ['Qualitative research', 'Workshop', 'Usability testing', 'Pattern analysis'],
      link: '/ux-for-change',
    },
    {
      number: '3',
      label: 'With non-technical trainees in a learning programme.',
      question: 'What research to choose with a new team working on a 3-month government deadline?',
      description:
        "The team started with building content for the programme, so quick understanding of the learners was needed to align the team on learners' needs and intended outcomes of this short programme.",
      tags: ['Interview', 'Survey', 'Assessment'],
      image: 'mindhug_confidence-shift.png',
      link: '/mindhug',
    },
    {
      number: '4',
      label: 'With trauma-informed workshop attendees and facilitators.',
      question: 'How to ensure a facilitation tool works for participants?',
      description:
        "I have taken the 'social battery' tool and researched how and why it works, tested it with workshop participants and created a facilitator's guide.",
      tags: ['Usability testing', 'Desk research'],
      link: null,
    },
  ];

  return (
    <section id="work" className="py-20">
      <div className="container-width section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12 max-w-2xl">
            I conduct research to inform design:
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => {
              const cardContent = (
                <Card
                  className={`h-full border border-border shadow-none transition-shadow duration-300 ${
                    project.link ? 'hover:shadow-md cursor-pointer' : ''
                  }`}
                >
                  <div className="px-6 pt-5 pb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      {project.label}
                    </span>
                  </div>
                  <div className="relative aspect-video bg-muted flex items-center justify-center overflow-hidden">
                    {project.image ? (
                      <>
                        <img
                          src={`${import.meta.env.BASE_URL}lovable-uploads/${project.image}`}
                          alt={project.question}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                      </>
                    ) : (
                      <ImageIcon className="h-8 w-8 text-muted-foreground/30" />
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3 leading-snug">
                      {project.question}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full font-medium bg-muted text-foreground border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <span className="text-foreground font-medium">
                        View Case Study →
                      </span>
                    )}
                  </CardContent>
                </Card>
              );

              return project.link ? (
                <Link key={project.number} to={project.link}>
                  {cardContent}
                </Link>
              ) : (
                <div key={project.number}>{cardContent}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
