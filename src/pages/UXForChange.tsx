import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Clock, Target, Compass, Shuffle, RefreshCw, GraduationCap } from 'lucide-react';

const UXForChange = () => {
  const tags = ['Service design', 'UX', 'design leadership', 'regenerative and trauma-informed design'];

  const whatIWouldChange = [
    "The workshop script was too detailed and didn't give facilitators enough room to respond to the moment.",
    'The analysis plan should have been agreed before the workshop, not after.',
    "The team sometimes didn't know why they were doing what I was asking. I was operating from urgency rather than clarity.",
  ];

  const learnings = [
    'It expanded my knowledge in service design methodology, and encouraged use of tools like ecosystem and harms mapping.',
    'It taught me to see that clarity is what teams need from a leader. There will always be pull for urgency, and now I know how to resist it.',
  ];

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
                UX for Change Fellowship
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
                Leading design through ambiguity.
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
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                UX for Change pairs designers with organisations serving vulnerable populations. I joined as
                team lead for a project designing a digital mental health platform for women who had
                experienced domestic abuse.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-10">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6 text-center">
                    <Users className="h-7 w-7 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold text-foreground mb-1">Team</h3>
                    <p className="text-sm text-muted-foreground">
                      Three designers, one responsible design mentor
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md">
                  <CardContent className="p-6 text-center">
                    <Clock className="h-7 w-7 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold text-foreground mb-1">Duration</h3>
                    <p className="text-sm text-muted-foreground">Three months</p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md">
                  <CardContent className="p-6 text-center">
                    <Target className="h-7 w-7 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold text-foreground mb-1">Outcomes</h3>
                    <p className="text-sm text-muted-foreground">
                      A tested prototype and storyboard delivered to the CEO
                    </p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg text-foreground leading-relaxed mb-6">
                I led a team of three designers through a three-month co-design project, responsible for
                shaping our design process, facilitating team decision-making, and ensuring we closed the
                loop with the survivors who participated.
              </p>

              <p className="text-lg text-foreground leading-relaxed">
                My contribution wasn't always the most visible. I held the process together when we needed
                to readjust.
              </p>
            </div>
          </div>
        </section>

        {/* Finding the anchor */}
        <section className="py-20 bg-muted/40">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Compass className="h-7 w-7 text-primary" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Finding the anchor when the process loses direction
                    </h2>
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">
                    When the team hit a wall generating How Might We statements for ideations, I redirected
                    us toward the three themes that kept surfacing in research: safety, community, support —
                    and used those as anchors for ideation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Turning ambiguity into a decision */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Shuffle className="h-7 w-7 text-primary" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Turning ambiguity into a decision
                    </h2>
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">
                    When we had raw outputs and no clear analysis framework, I pulled together a filtering
                    approach that combined evidence weighting and team voting to get us to a testable idea.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What I would change */}
        <section className="py-20 bg-muted/40">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <RefreshCw className="h-7 w-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  What I would change
                </h2>
              </div>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                I made decisions I'd make differently now.
              </p>
              <ol className="space-y-4">
                {whatIWouldChange.map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </span>
                    <p className="text-foreground leading-relaxed pt-1">{item}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Learnings */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-7 w-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Learnings
                </h2>
              </div>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                This project surfaced some of my unconscious instincts. Mostly it showed me that leading
                through ambiguity doesn't mean having all the answers.
              </p>
              <ul className="space-y-3">
                {learnings.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
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
