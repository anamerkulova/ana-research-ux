import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Clock, Target, Search, RefreshCw, GraduationCap, BarChart3 } from 'lucide-react';

const MindHug = () => {
  const tags = ['Government Programme', 'Service Design', 'UX and Learning Design'];

  const whatIWouldChange = [
    {
      title: 'Introduce structure before tools',
      body: "I reached for the service blueprint at the right moment, but without enough context for why it mattered. In a team with varying familiarity with design methods, the tool itself isn't enough. What the team needed first was a shared understanding of why making the system visible would help them. I'd spend more time now establishing that shared language and relationship before introducing any method — so that when the blueprint appeared, it felt like a solution to a problem the team already recognised, not a framework imposed from outside.",
    },
    {
      title: 'Establish the connection between research and design earlier',
      body: "I came in positioned at the edges — website, landing pages, visuals. Getting closer to the programme content required building trust and finding the right question to open the door. I did that, but it took time I didn't have to spare. What I'd do differently is name that connection explicitly from the start — not just do the research work, but make visible to the team why understanding the audience before writing content would make the programme stronger.",
    },
  ];

  const learnings = [
    {
      title: "Research doesn't need to be perfect to be useful",
      body: "The Q&A sessions weren't rigorous user interviews. We didn't have time for that. But they gave us enough signal to design something real rather than something assumed.",
    },
    {
      title: "The hardest design problem wasn't the design",
      body: "It was helping a team already in motion slow down long enough to look at who they were designing for. That required influence without authority — finding the right question, the right moment, the right person to bring alongside. That's a skill I didn't know I lacked at the start of the project, and the reason I went on to take part in UX for Change fellowship.",
    },
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
                MindHug
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
                Building design influence from scratch.
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
                MindHug had a vision for a professional development programme training specialist coaches
                to support organisations through cybersecurity incidents. I joined as a UX designer and
                programme manager responsible for end-to-end design and programme delivery.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-10">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6 text-center">
                    <Users className="h-7 w-7 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold text-foreground mb-1">Team</h3>
                    <p className="text-sm text-muted-foreground">
                      Subject matter experts, marketing, operations
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md">
                  <CardContent className="p-6 text-center">
                    <Clock className="h-7 w-7 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold text-foreground mb-1">Time</h3>
                    <p className="text-sm text-muted-foreground">3 month government deadline</p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md">
                  <CardContent className="p-6 text-center">
                    <Target className="h-7 w-7 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold text-foreground mb-1">Outcomes</h3>
                    <p className="text-sm text-muted-foreground">
                      Website and landing pages, design system, team coordination, and successful
                      programme delivery measured beyond completion
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding the customer */}
        <section className="py-20 bg-muted/40">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Search className="h-7 w-7 text-primary" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Understanding the customer
                    </h2>
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">
                    Subject matter experts were writing materials based on experience with university
                    students — not the corporate coaches we were actually designing for. I mapped what the
                    team thought they knew, identified the critical gaps, and designed Q&A sessions with
                    prospective participants so the experts could hear directly from the people they'd
                    never met. What we learned changed the content direction. Primarily, the coaches needed
                    to navigate crisis conversations with clients, not absorb technical knowledge. This
                    became the core need and informed the whole training.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Coordinating a remote team */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="h-7 w-7 text-primary" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Coordinating a remote team
                    </h2>
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">
                    I was part of a team distributed across different countries, new to each other, with
                    often unclear responsibilities. I started with a customer journey map to make the
                    programme visible. Then I added layers until it became a service blueprint, mapping
                    what participants experienced front stage against what each team member needed to
                    deliver backstage and by when. That blueprint became the team's shared reference point.
                    With roles becoming clearer, the three-month deadline felt more manageable. The
                    programme was delivered to thirty coaches on time, achieving high satisfaction scores.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Measuring success beyond completion */}
        <section className="py-20 bg-muted/40">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="h-7 w-7 text-primary" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Measuring success beyond completion
                    </h2>
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">
                    Standard completion metrics wouldn't tell us whether the programme had actually worked.
                    I built an evaluation framework combining knowledge assessments and qualitative
                    interviews. This measured what participants knew, how confident they felt, and whether
                    that confidence held beyond the programme. The coaches described themselves differently
                    afterwards: less technophobic, more capable of navigating the conversations their
                    clients needed them to have.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What I would change */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <RefreshCw className="h-7 w-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  What I would change
                </h2>
              </div>
              <div className="space-y-6">
                {whatIWouldChange.map((item) => (
                  <Card key={item.title} className="border-none shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-foreground leading-relaxed">{item.body}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Learnings */}
        <section className="py-20 bg-muted/40">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="h-7 w-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Learnings
                </h2>
              </div>
              <div className="space-y-6">
                {learnings.map((item) => (
                  <Card key={item.title} className="border-none shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-foreground leading-relaxed">{item.body}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Back to home */}
        <section className="py-16">
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
