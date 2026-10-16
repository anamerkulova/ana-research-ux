import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Users,
  Clock,
  FileText,
  Map,
  Filter,
  BookOpen,
  Lightbulb,
  RefreshCw,
  GraduationCap,
  Quote,
} from 'lucide-react';

const UXForChange = () => {
  const tags = ['Qualitative research', 'Workshop', 'Usability testing', 'Pattern analysis'];

  const stakeholders = [
    'Cecilia Scolaro, Responsible Design Coach',
    'Lesley Sackey, founder of Pillow',
    'Survivors',
  ];

  const preparationLearnings = [
    'As designers we often might come into the system with the intention to solve, not to understand.',
    'When centering the user in the ecosystem we are overlooking broader stakeholders.',
  ];

  const workshopQuestions = [
    'What does the future look, feel, and sound like for survivors? (Experience Map)',
    'How do people navigate that future? (Pathway Map, or future-state journey map)',
  ];

  const workshopThemes = [
    {
      roman: 'I',
      title: 'Support that involves with survivors',
      body: 'Imagine a world where support truly evolves with you – from crisis through healing to contribution.',
    },
    {
      roman: 'II',
      title: 'Finding and navigating resources',
      body: 'Imagine a world where finding trustworthy resources and opportunities is easy and empowering.',
    },
    {
      roman: 'III',
      title: 'Community dynamics and connections',
      body: 'Explore what kinds of things survivors want to share (emotions, resources, skills, stories) and with whom.',
    },
  ];

  const filteringSteps = [
    {
      title: 'High evidence',
      body: 'We marked the ideas that repeatedly came up in the co-imagine workshop.',
    },
    {
      title: 'Type of insight (research question, feature, or guiding principle)',
      body: 'We sorted ideas that can be built, and ideas that should act as a guiding principle.',
    },
    {
      title: 'Three established themes',
      body: 'We matched the remaining "buildable" ideas to the themes established in the workshop.',
    },
    {
      title: "Team's vote",
      body: 'The team members selected the idea they would be working on in the remaining two weeks.',
    },
  ];

  const whatIWouldChange = [
    "As we hadn't aligned on analysis methods prior to the workshop, the filtering framework felt rushed, and I was operating from urgency rather than clarity. The analysis plan should have been agreed before the workshop, not after.",
    "I would communicate with the team the values, the goal and the methods we use and reasons we use them. With time constraints I wanted to adapt to team members and keep the stakeholder's goals prioritised, too. This project taught me the importance of articulating decisions.",
  ];

  const learnings = [
    'It expanded my knowledge in service design methodology, and encouraged use of tools like ecosystem and harms mapping.',
    'It taught me to see that clarity is what teams need from a leader. There will always be a pull for urgency, and now I know how to resist it.',
  ];

  const testimonials = [
    {
      quote:
        "It's been a pleasure working with Ana and seeing her leadership growth has been so rewarding. Her dedication and note taking skills are bar none. She's one of the most considerate and inclusive people I've worked with.",
      author: 'Christina, team member',
    },
    {
      quote:
        "She's been a fantastic leader with a great ability to steer and adapt the design process at every stage.",
      author: 'Khushbu, team member',
    },
  ];

  const img = (name: string) => `${import.meta.env.BASE_URL}lovable-uploads/${encodeURIComponent(name)}`;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 bg-muted/40">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto">
              <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to home
              </Link>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Pillow
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
                How to move from research to ideation in an ethically sensitive field?
              </p>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full font-medium bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <FileText className="h-7 w-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Overview
                </h2>
              </div>

              <div className="grid lg:grid-cols-3 gap-10">
                {/* Sidebar */}
                <div className="order-2 lg:order-1 lg:col-span-1 space-y-6">
                  <Card className="border-none shadow-md">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-foreground">Team</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        3 UX practitioners, including a service designer, a senior engineer and a senior
                        designer.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-foreground">Stakeholders</h3>
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1.5">
                        {stakeholders.map((person) => (
                          <li key={person}>{person}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-foreground">Time</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">2 months</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Main content */}
                <div className="order-1 lg:order-2 lg:col-span-2 space-y-6">
                  <p className="text-lg text-foreground leading-relaxed">
                    Upon leaving the crisis of domestic abuse, women have to go to multiple services to get
                    support, navigate complex legal systems, all whilst re-telling their story over and over
                    again.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    Lesley Sackey founded Fight Forward, a boxing training programme for female survivors of
                    domestic violence. Together with Sandra Gonzales, Director of UX for Change, they
                    envisioned Pillow, a community-led support service helping women in their post-crisis
                    stage.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    In September 2025, UX for Change launched the second cohort of Responsible Design
                    Fellowship, bringing together 8 fellows: 2 team leaders and 6 individual contributors
                    with the intent of co-creating Pillow using responsible design practices. I was one of
                    the two leaders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Preparation */}
        <section className="py-20 bg-muted/40">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Map className="h-7 w-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Preparation
                </h2>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-lg text-foreground leading-relaxed">
                  As part of my learnings, I mapped the ecosystem and thought about the systemic influence
                  of our design contributions through the regenerative lens.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Reading <em>Thinking in Systems</em> by D. Meadows and applying the learnings to these
                  maps under the coach's guidance showed me that:
                </p>
              </div>

              <ul className="space-y-3 mb-10">
                {preparationLearnings.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>

              <div className="space-y-6">
                <div className="rounded-lg overflow-hidden shadow-md border border-border bg-white">
                  <img
                    src={img('UXforChange-Sept2025 - Pillow_system.jpg')}
                    alt="Diagram: Design operates on many levels, from physical to conscious"
                    className="w-full h-auto"
                  />
                </div>
                <div className="max-w-xl mx-auto rounded-lg overflow-hidden shadow-md border border-border bg-white">
                  <img
                    src={img('UXforChange-Sept2025 - ecosystem.jpg')}
                    alt="Social ecosystem map of a domestic abuse survivor's support system"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Co-design with participants */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-7 w-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Co-design with participants
                </h2>
              </div>

              <p className="text-lg text-foreground leading-relaxed mb-4">
                While analysing data from the previous cohort of researchers and designers, particular
                themes came out strongly. To understand them more, we prepared a generative workshop which
                would help the participants to envision:
              </p>

              <ul className="space-y-2 mb-6">
                {workshopQuestions.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>

              <p className="text-lg text-foreground leading-relaxed mb-10">
                As a leader I gathered contributors' ideas for the activities, and created the workshop's
                script, aligning the teams on the values and procedure of the workshop.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {workshopThemes.map((theme) => (
                  <Card key={theme.roman} className="border-none shadow-md">
                    <CardContent className="p-6">
                      <p className="text-sm font-semibold text-primary mb-2">{theme.roman}</p>
                      <h3 className="font-semibold text-foreground mb-2">{theme.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{theme.body}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Analysis */}
        <section className="py-20 bg-muted/40">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Filter className="h-7 w-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Analysis
                </h2>
              </div>

              <p className="text-lg text-foreground leading-relaxed mb-8">
                After the workshop we faced an array of raw outputs and no obvious way to cluster them. I
                proposed a filtering framework for sorting the ideas we had:
              </p>

              <ol className="space-y-4 mb-8">
                {filteringSteps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </span>
                    <p className="text-foreground leading-relaxed pt-1">
                      <strong>{step.title}:</strong> {step.body}
                    </p>
                  </li>
                ))}
              </ol>

              <div className="space-y-4">
                <p className="text-lg text-foreground leading-relaxed">
                  This filtering system helped us narrow down and start with two concepts to test both the
                  hypothetical value and the real-world application of the idea.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  As a leader I had discussions with the team about the hypothesis we would test, and
                  documented the value propositions for both prototypes. I also led the team in creating the
                  testing script, and having a trial run of the testing before inviting the participants.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Storyboard / Hypothesis 1 */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="h-7 w-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Storyboard: How might the story be told once?
                </h2>
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                <strong>Hypothesis:</strong> survivors want to control disclosure differently depending on
                who they're sharing with and why.
              </p>

              <div className="rounded-lg overflow-hidden shadow-md border border-border bg-white mb-8">
                <img
                  src={img('pillow_storyboard.jpg')}
                  alt="Ten-panel storyboard of a survivor using Pillow to record and share her story once"
                  className="w-full h-auto"
                />
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-foreground leading-relaxed">
                  <strong>Findings:</strong> Testers explicitly valued deciding what to document, how to
                  frame it, and who sees it; and wanted to share different levels of detail with different
                  organisations.
                </p>
                <p className="text-foreground leading-relaxed">
                  <strong>Direction after testing:</strong> Although the survivors confirmed the need to
                  control the disclosure, testing of the concept should be carried out with other members of
                  the ecosystem.
                </p>
              </div>

              <blockquote className="border-l-4 border-primary pl-6 italic text-foreground leading-relaxed mb-6">
                "I see if I pick an organisation, then I'd see the questions for this org, right? What's
                more relevant to who I'm talking to - even if some questions are the same."
                <footer className="mt-2 text-sm not-italic font-medium text-muted-foreground">
                  — Tester
                </footer>
              </blockquote>

              <p className="text-sm text-muted-foreground">
                Tested with 4 participants, online synchronous testing. Storyboard by Saranya Satheesh,
                Therese Nkadi, Christina Lai, and Shamika Sriram.
              </p>
            </div>
          </div>
        </section>

        {/* Prototype / Hypothesis 2 */}
        <section className="py-20 bg-muted/40">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="h-7 w-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Prototype: How might we offer survivors contextual and personalised experiences to browse
                  resources?
                </h2>
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                <strong>Hypothesis:</strong> personalised resource recommendations, matched to
                situation/need/readiness, would outperform a standard directory on engagement and
                usefulness.
              </p>

              <div className="rounded-lg overflow-hidden shadow-md border border-border bg-white mb-8">
                <img
                  src={img('Pillow prototype.png')}
                  alt="Pillow prototype screens showing the journaling and story-sharing flow"
                  className="w-full h-auto"
                />
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-foreground leading-relaxed">
                  <strong>Findings:</strong> Testers valued relevance and control over what they saw: a
                  focused, fitting set of resources. They responded well to the idea of resources adapting
                  to what they shared. However, autonomy and control mattered more than personalisation, and
                  testers expressed caution about personalisation.
                </p>
                <p className="text-foreground leading-relaxed">
                  <strong>Direction after testing:</strong> Although the participants responded well to the
                  idea of adapting resources, they found it most valuable to be in control of the
                  information they share. This redirects our initial hypothesis: the concept of
                  personalisation needs to be defined further and tested with participants.
                </p>
              </div>

              <blockquote className="border-l-4 border-primary pl-6 italic text-foreground leading-relaxed mb-6">
                "It's good that resources are in categories. I think [personalisation]'s important, because
                you don't want to be scrolling through this. What smart system will you be using? How do I
                know that the resources are valuable?"
                <footer className="mt-2 text-sm not-italic font-medium text-muted-foreground">
                  — Tester
                </footer>
              </blockquote>

              <p className="text-sm text-muted-foreground">
                Tested with 4 participants, online synchronous testing. Prototype by Khushbu Kapadia and
                Julia Romanova.
              </p>
            </div>
          </div>
        </section>

        {/* What I would change */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <RefreshCw className="h-7 w-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  What I would change
                </h2>
              </div>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                During my collaboration with the design team in these two months, I made decisions I would
                make differently now.
              </p>
              <ul className="space-y-3">
                {whatIWouldChange.map((item) => (
                  <li key={item.slice(0, 20)} className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Learnings */}
        <section className="py-20 bg-muted/40">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-7 w-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Learnings
                </h2>
              </div>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Working as a leader of this team surfaced some of my unconscious instincts. It showed me
                that leading through ambiguity doesn't mean having all the answers.
              </p>
              <ul className="space-y-3">
                {learnings.map((item) => (
                  <li key={item.slice(0, 20)} className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Quote className="h-7 w-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Testimonials
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((t) => (
                  <Card key={t.author} className="border-none shadow-md">
                    <CardContent className="p-6">
                      <p className="text-foreground leading-relaxed italic mb-4">"{t.quote}"</p>
                      <p className="text-sm font-medium text-muted-foreground">{t.author}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Back to home */}
        <section className="py-16 bg-muted/40">
          <div className="container-width section-padding text-center">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to home
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UXForChange;
