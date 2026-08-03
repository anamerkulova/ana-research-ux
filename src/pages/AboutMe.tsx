import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Award, Target, Users, ExternalLink, User } from 'lucide-react';

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section with Photo */}
        <section className="py-20 bg-muted/30">
          <div className="container-width section-padding">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    About Me
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    As a designer who bridges psychology and user experience, I'm particularly interested in responsible service design, instructional design and storytelling. Here's my story and the learning that shapes how I approach design challenges.
                  </p>
                </div>
                
                {/* Photo */}
                <div className="flex justify-center lg:justify-end">
                  <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg">
                    <img 
                      src={`${import.meta.env.BASE_URL}lovable-uploads/ae33615f-fc4f-4e31-9b17-0ff3d314310d.png`}
                      alt="Ana Merkulova outdoors with scarf"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Story Section with Photo */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <User className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  My Journey into Design
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="prose prose-lg max-w-none text-foreground">
                      <p className="text-lg leading-relaxed mb-6">
                        I've always been interested in the learning process in people behaviour, and loved books. So my transition to experience design has not been typical, as I didn't really draw up until a couple of years ago.
                      </p>
                      
                      <p className="text-lg leading-relaxed mb-6">
                        However, I liked working with people and making complex things easy for them, and I spent my 20s as a language teacher. There is quite a lot of frustrating software people need to work with as teachers, and somehow I became a go-to person for that. I'd create surveys, find efficient ways to collect people's feedback to make sure people feel heard.
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        I'm keen on hearing all sides of the story and approaching problems from the 'why' side. People and Learning experience still interests me most, so every project I begin with finding alignment with people, and understanding what we all need to learn to start moving in the right direction.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Working Photo */}
                <div className="flex justify-center">
                  <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={`${import.meta.env.BASE_URL}lovable-uploads/f18bddae-3053-4b9b-aa65-b5ce8b6cb2ef.png`} 
                      alt="Ana working on design sketches"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Books Section */}
        <section className="py-20 bg-muted/30">
          <div className="container-width section-padding">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <BookOpen className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Books That Shape My Practice
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {/* Currently Reading */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="secondary">Currently Reading</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Learning design</h4>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="font-medium text-foreground mb-2">Design for How People Learn</h5>
                        <p className="text-sm text-muted-foreground mb-2">By Julie Dirksen</p>
                        <p className="text-sm text-foreground">
                          Transitioning from educational psychology to UX, this book helped me apply learning science principles to digital product design. Essential for creating training programs and user onboarding.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Storytelling & Communication</h4>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="font-medium text-foreground mb-2">Value Proposition Design</h5>
                        <p className="text-sm text-muted-foreground mb-2">By Alexander Osterwalder</p>
                        <p className="text-sm text-foreground mb-3">
                          The value proposition canvas helps me articulate user needs in business language.
                        </p>
                        <p className="text-sm text-foreground mb-2">
                          <strong>Applied to:</strong> Government programme proposals, B2B pitch decks at startup
                        </p>
                        <p className="text-sm text-foreground italic">
                          <strong>Key takeaway:</strong> "Before you design a solution, understand the job the customer needs to get done."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Other Books */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Other Books</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">📚 Read</Badge>
                      </div>
                      <ul className="space-y-2 text-sm text-foreground">
                        <li>• Atomic Habits by James Clear (behaviour change for UX)</li>
                        <li>• Universal Principles of Design by William Lidwell</li>
                        <li>• The Lean Startup by Eric Ries</li>
                        <li>• Made to Stick by Chip Heath & Dan Heath</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">📚 On the list</Badge>
                      </div>
                      <ul className="space-y-2 text-sm text-foreground">
                        <li>• Universal Principles of Design by William Lidwell</li>
                        <li>• Emotional Design by Don Norman</li>
                      </ul>
                    </div>

                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-sm text-foreground">
                        Have a book recommendation? I'd love to hear it!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <Award className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Certifications & Courses
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Completed Certifications */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge className="bg-green-500 text-white">Completed</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        🏆 School of UX - 7-Week UX Skills Bootcamp (2023)
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Government-funded intensive program covering:
                      </p>
                      <ul className="text-sm text-foreground space-y-1">
                        <li>• User research methods</li>
                        <li>• Wireframing and prototyping</li>
                        <li>• Usability testing</li>
                        <li>• Design systems</li>
                        <li>• Behavioral psychology in UX</li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">✅ UXcel</h4>
                      <ul className="text-sm text-foreground space-y-1">
                        <li>- Product Management course (2025)</li>
                        <li>- Accessibility course (2024)</li>
                        <li>- Service Design course (2024)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* In Progress */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="secondary">In Progress</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">🎯 CPD Accreditation Process (Leading team through)</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Learning to structure professional development programs:
                      </p>
                      <ul className="text-sm text-foreground space-y-1 mb-3">
                        <li>• Learning objectives and outcomes design</li>
                        <li>• Impact measurement frameworks</li>
                        <li>• Adult learning best practices</li>
                        <li>• Quality assurance for educational content</li>
                      </ul>
                      <p className="text-sm text-primary font-medium">
                        Expected completion: July 2025
                      </p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm text-foreground">
                        Currently working with a UX mentor and participating in Bolt hackathon
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Hackathons Section */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <Users className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Hackathons & Social Impact
                </h2>
              </div>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>UX for Change - Trauma-Informed Design Hackathon</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Design Solutions for Domestic Abuse Survivors</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong>Role:</strong> Team Presenter & UX Strategist
                        </div>
                        <div>
                          <strong>Duration:</strong> 2-day ideation hackathon
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-foreground mb-2">What I learned:</h5>
                      <ul className="text-sm text-foreground space-y-1">
                        <li>• Trauma-informed design principles</li>
                        <li>• Designing for vulnerable populations</li>
                        <li>• Collaborative ideation</li>
                        <li>• Presenting sensitive solutions to diverse stakeholders</li>
                      </ul>
                    </div>

                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-sm text-foreground italic">
                        <strong>Key insight:</strong> When designing for trauma survivors, safety isn't just about data security—it's about emotional safety, cognitive load, and user agency at every interaction.
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-foreground mb-2">
                        <strong>Team achievement:</strong> Successfully presented final solution flow addressing both immediate safety needs and long-term recovery support.
                      </p>
                      <p className="text-sm text-foreground">
                        <strong>Skills developed:</strong> Empathy mapping, rapid ideation techniques, collaborative facilitation with diverse perspectives.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Learning Goals Section */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Learning Goals & Future Development
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* 2025 Learning Objectives */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>2025 Learning Objectives</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        💼 Business Acumen
                      </h4>
                      <ul className="text-sm text-foreground space-y-1">
                        <li>• Implement more service design methodology</li>
                        <li>• Storytelling techniques and stakeholder presentations</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        🌍 Global Perspective
                      </h4>
                      <ul className="text-sm text-foreground space-y-1">
                        <li>• Continue learning about trauma-informed design</li>
                        <li>• Learn about international accessibility standards</li>
                        <li>• Explore inclusive design for diverse populations</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        🛠️ Technical Skills
                      </h4>
                      <ul className="text-sm text-foreground space-y-1">
                        <li>• Try out coding with AI</li>
                        <li>• Basic front-end development (HTML/CSS)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Mentorship & Community */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Mentorship & Community</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        🤝 Current Mentors
                      </h4>
                      <p className="text-sm text-foreground mb-2">
                        Currently mentored by a Senior UX & Staff Designer
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Focus: Career progression and portfolio development
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        📱 Learning Communities
                      </h4>
                      <ul className="text-sm text-foreground space-y-1">
                        <li>- IntoUX design (active participant)</li>
                        <li>- UX for Change (fellowship member)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How Learning Shapes My Practice Section */}
        <section className="py-20 bg-muted/30">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                How Learning Shapes My Practice
              </h2>

              <div className="space-y-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Recent Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="text-sm text-foreground">
                          <strong>📖 Value Proposition Design → Government proposal writing</strong><br />
                          Used canvas framework to make decisions on design strategy within the company
                        </p>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="text-sm text-foreground">
                          <strong>📖 Trauma-Informed Design principles → Employee onboarding</strong><br />
                          Applied safety-first principles to coach recruitment and training flow
                        </p>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="text-sm text-foreground">
                          <strong>📖 Learning Science research → Training material design</strong><br />
                          Improved visual hierarchy and cognitive load in educational content
                        </p>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="text-sm text-foreground">
                          <strong>📖 Storytelling techniques → Stakeholder presentations</strong><br />
                          Better narrative structure for design rationale and business impact
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-muted/40">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Let's Learn Together
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I love talking about books, sharing learning resources, and discussing how psychology principles apply to design challenges.
              </p>

              <div className="space-y-4 text-muted-foreground mb-8">
                <p>📚 Book recommendations? Send them my way!</p>
                <p>🎓 Learning goals discussion? Let's chat!</p>
                <p>🧠 Psychology + UX questions? Happy to explore together!</p>
              </div>

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
      </main>
    </div>
  );
};

export default AboutMe;
