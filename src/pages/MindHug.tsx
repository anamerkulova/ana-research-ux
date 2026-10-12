import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Users,
  Clock,
  FileText,
  Search,
  Lightbulb,
  TrendingUp,
  GraduationCap,
} from 'lucide-react';

const MindHug = () => {
  const tags = ['Interview', 'Survey', 'Assessment'];

  const team = [
    'Subject matter experts in psychology and cybersecurity',
    'Marketing',
    'Operations',
    'CEO',
  ];

  const uncoveringMethods = [
    'User interviews with experienced coaches: 5',
    'Competitive landscape analysis',
    'Q&A with potential participants',
    'Screener survey',
    "Consent forms: Informing explicitly about the use of people's data.",
  ];

  const designingMethods = [
    'SME interviews in two fields: Cybersecurity and Psychology',
    'Diagnostic knowledge assessment: multiple-choice test',
    'Likert scale: confidence self-assessment',
    "Consent forms: Non-anonymous participants' data deleted after the programme.",
  ];

  const img = (name: string) => `${import.meta.env.BASE_URL}lovable-uploads/${name}`;

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
                MindHug
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
                What research to choose with a new team working on a 3-month government deadline?
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full font-medium bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="rounded-lg overflow-hidden shadow-md border border-border">
                <img
                  src={img('mindhug_workshop_photo.jpg')}
                  alt="Team workshop session, faces anonymised, surrounded by notes and research materials"
                  className="w-full h-auto object-cover"
                />
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
                      <ul className="text-sm text-muted-foreground space-y-1.5">
                        {team.map((member) => (
                          <li key={member}>{member}</li>
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
                      <p className="text-sm text-muted-foreground">
                        3-month government deadline.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Main content */}
                <div className="order-1 lg:order-2 lg:col-span-2 space-y-6">
                  <p className="text-lg text-foreground leading-relaxed">
                    MindHug had a vision for a professional development programme training
                    specialist coaches to support organisations through cybersecurity incidents.
                    Innovate UK (DSIT) acted as stakeholders on this project.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    I joined as a UX designer and researcher responsible for the programme's
                    end-to-end design. MindHug needed a tested pilot programme that they could
                    learn from and deliver to further cohorts of trainees.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    I worked with the subject matter experts and programme trainees. My work
                    combined user research under a tight deadline, creating an assessment
                    framework, and gathering feedback from the programme to iterate on its
                    learning outcomes. This carried the programme from pilot to CPD accreditation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Uncovering the problem */}
        <section className="py-20 bg-muted/40">
          <div className="container-width section-padding">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-10">
                {/* Sidebar */}
                <div className="order-2 lg:order-1 lg:col-span-1">
                  <Card className="border-none shadow-md">
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-foreground mb-3">Research activities</h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        {uncoveringMethods.map((method) => (
                          <li key={method}>{method}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Main content */}
                <div className="order-1 lg:order-2 lg:col-span-2">
                  <div className="flex items-center gap-3 mb-6">
                    <Search className="h-7 w-7 text-primary" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Uncovering the problem
                    </h2>
                  </div>

                  <div className="space-y-6 mb-8">
                    <p className="text-lg text-foreground leading-relaxed">
                      Subject matter experts already had content based on experience with
                      university students. For this particular programme, however, we were
                      designing for corporate coaches.
                    </p>
                    <p className="text-lg text-foreground leading-relaxed">
                      I led the team to map what we already knew and identify the critical gaps.
                      Then I designed Q&A sessions with prospective participants so the experts
                      could hear directly from the people they'd never met, what they were hoping
                      to achieve with this training.
                    </p>
                    <p className="text-lg text-foreground leading-relaxed">
                      Additionally, I conducted user interviews with experienced coaches who went
                      through training in the past. What we learned helped us narrow down the
                      content direction. The coaches needed to navigate conversations with clients
                      around prevention or aftermath of cybersecurity incidents. They found it
                      effective to learn through doing, in a discussion of real use-cases. This
                      shaped the goal of the programme, as I illustrated in the storyboard for the
                      team.
                    </p>
                  </div>

                  <div className="rounded-lg overflow-hidden shadow-md border border-border bg-white">
                    <img
                      src={img('mindhug_storyboard.png')}
                      alt="Concept story storyboard mapping the target coach's journey from worry to confidence"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Designing an experience for knowledge and confidence */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-10">
                {/* Sidebar */}
                <div className="order-2 lg:order-1 lg:col-span-1">
                  <Card className="border-none shadow-md">
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-foreground mb-3">Research activities</h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        {designingMethods.map((method) => (
                          <li key={method}>{method}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Main content */}
                <div className="order-1 lg:order-2 lg:col-span-2">
                  <div className="flex items-center gap-3 mb-6">
                    <Lightbulb className="h-7 w-7 text-primary" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Designing an experience for knowledge and confidence
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <p className="text-lg text-foreground leading-relaxed">
                      To recruit representative participants, I designed a screener for 70
                      applicants, selecting 20 who worked as coaches, had a background in
                      psychology, and had business clients who had raised concerns about cyber
                      incidents.
                    </p>
                    <p className="text-lg text-foreground leading-relaxed">
                      The coaches that joined our training already had some knowledge in
                      psychology. Some of them understood the main cybersecurity principles.
                      Before and after the programme, trainees rated their confidence (1–5) in
                      working with clients in situations that required knowledge of
                      cybersecurity. Additionally, we tested their knowledge of key principles of
                      cybersecurity and psychology.
                    </p>
                    <p className="text-lg text-foreground leading-relaxed">
                      I worked together with Subject Matter Experts in both fields, to create
                      tasks for the trainees where they would apply their knowledge of the
                      conflict-resolution psychology model for a variety of real-life situations
                      involving cybersecurity incidents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Changing the trainees' mindset */}
        <section className="py-20 bg-muted/40">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-7 w-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Changing the trainees' mindset
                </h2>
              </div>

              <p className="text-lg text-foreground leading-relaxed mb-8">
                Both tests of the trainees' knowledge in cybersecurity and psychology principles
                showed improvements. More importantly, their feedback has demonstrated a shifted
                mindset: Some of the trainees that have never seen themselves as 'a techie', found
                themselves using complex terms while solving a case-study. A trainee that had
                previously found cybersecurity compliance training a chore, later incorporated
                the experience he received into a training for his colleagues, keen to spread
                this knowledge.
              </p>

              <div className="rounded-lg overflow-hidden shadow-md border border-border bg-white mb-8">
                <img
                  src={img('mindhug_confidence-shift.png')}
                  alt="Chart showing every trainee reported higher confidence after the programme"
                  className="w-full h-auto"
                />
              </div>

              <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-foreground leading-relaxed">
                "All the time I had to deal with cyber training I was bored of it or saw it as a
                pain, and now with the training I am now advocating for it, asking more
                questions."
                <footer className="mt-3 text-base not-italic font-medium text-muted-foreground">
                  — Programme participant
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* What we learned */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-7 w-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  What we learned
                </h2>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                This programme pilot has taught us to uncover trainee's needs and desirable
                actions early in the programme design. Due to the time constraints, we risked
                delivering training with content that would not have been effective for this
                audience. There were still gaps to address, as the objectives of the programme
                were later revisited and refined for this audience. Later on, this programme
                received CPD accreditation and became a flagship product for MindHug.
              </p>
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

export default MindHug;
