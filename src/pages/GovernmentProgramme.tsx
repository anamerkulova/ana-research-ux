
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Users, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const GovernmentProgramme = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container-width section-padding">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-primary hover:text-secondary mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                  Designing for Impact: From Chaos to Capability
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  How I transformed a 3-month government programme from an impossible deadline into a measurable success story—recruiting and training 30 coaches while building organizational design capability.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-primary/15 text-primary rounded-full font-medium">Government Programme</span>
                  <span className="px-4 py-2 bg-primary/15 text-primary rounded-full font-medium">Service Design</span>
                  <span className="px-4 py-2 bg-primary/15 text-primary rounded-full font-medium">People Experience</span>
                  <span className="px-4 py-2 bg-primary/15 text-primary rounded-full font-medium">Organizational Design</span>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-xl"></div>
                  <img 
                    src="/lovable-uploads/b914adac-0a19-4e66-9c35-16d1fd422cf4.png" 
                    alt="Government programme design process and team collaboration"
                    className="relative max-w-lg rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="py-16">
        <div className="container-width section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <Card className="border-none shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold text-primary mb-2">Timeline</h3>
                  <p className="text-muted-foreground">3 months</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg bg-gradient-to-br from-secondary/5 to-secondary/10">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 mx-auto mb-3 text-secondary" />
                  <h3 className="font-semibold text-secondary mb-2">Coaches Trained</h3>
                  <p className="text-muted-foreground">30 specialists</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg bg-gradient-to-br from-teal-100/50 to-teal-200/50">
                <CardContent className="p-6 text-center">
                  <Lightbulb className="h-8 w-8 mx-auto mb-3 text-teal-600" />
                  <h3 className="font-semibold text-teal-600 mb-2">My Role</h3>
                  <p className="text-muted-foreground">Lead Designer & Experience Strategist</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg bg-gradient-to-br from-coral-100/50 to-coral-200/50">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-3 text-coral-600" />
                  <h3 className="font-semibold text-coral-600 mb-2">Success Rate</h3>
                  <p className="text-muted-foreground">95% satisfaction</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">The Challenge: Mission Impossible Timeline</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6 text-lg">
                <em>January 2025.</em> We'd just won a government contract with Innovate UK and DSIT to train 30 specialist coaches in digital safety and psychology of change - and deliver it to SMEs. The catch? We had exactly 3 months to go from zero to fully operational programme.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">The brief was overwhelming:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Recruit and train 30 expert coaches from scratch</li>
                  <li>• Create an entirely new learning programme</li>
                  <li>• Design all systems, processes, and materials</li>
                  <li>• Deliver measurable results to government stakeholders</li>
                  <li>• Oh, and nobody on the team had done anything like this before</li>
                </ul>
              </div>

              <p className="text-muted-foreground text-lg">
                As the sole designer in a 12-person startup, I realised this wasn't just a design challenge - it was a complete people experience task.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">The Approach: Treating the coach as one of us</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6 text-lg">
                I reframed the challenge: <em>What if we treated our coaches like employees joining a new organisation? What would their ideal journey look like?</em>
              </p>
              <p className="text-muted-foreground mb-8 text-lg">
                So with designing a learning programme I was also creating employee experience.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-6">Discovery: Understanding Our 'Employees'</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-3">The Problem:</h4>
                  <p className="text-red-700">We had no time for traditional user research, but we needed deep insights into our coaches' needs, motivations, and pain points.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3">The Solution:</h4>
                  <p className="text-green-700">I organised live Q&A sessions with potential coaches, positioning them as "information sessions" while secretly gathering research insights.</p>
                </div>
              </div>

              <blockquote className="border-l-4 border-primary pl-6 py-4 mb-8 bg-primary/5 rounded-r-lg">
                <p className="text-muted-foreground italic">
                  "From their questions, I could understand what mattered most to them. They weren't just asking about payment - they wanted to know about support, community, and professional development."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-width section-padding">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-foreground mb-12">Key Insights</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">Coaches needed to feel confident and supported, not just trained</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-secondary" />
                  </div>
                  <p className="text-muted-foreground text-sm">They valued peer connection and ongoing mentorship</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-6 w-6 text-teal-600" />
                  </div>
                  <p className="text-muted-foreground text-sm">Clear communication was crucial - any ambiguity created anxiety</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-coral-600" />
                  </div>
                  <p className="text-muted-foreground text-sm">They wanted to understand their impact, not just their tasks</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Design Section */}
      <section className="py-16">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Service Design: Mapping the Coach Journey</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              I created a comprehensive service blueprint covering every touchpoint from recruitment to post-programme support:
            </p>

            <div className="space-y-8">
              {[
                {
                  title: "1. Attraction & Recruitment",
                  items: [
                    "Designed landing page explaining the opportunity clearly",
                    "Created assessment pathway with transparent criteria",
                    "Built in multiple touchpoints to maintain engagement"
                  ]
                },
                {
                  title: "2. Selection & Onboarding",
                  items: [
                    "Developed fair, skills-based testing process",
                    "Created legal and practical onboarding materials",
                    "Established personal communication channels (I became their main point of contact)"
                  ]
                },
                {
                  title: "3. Training & Development",
                  items: [
                    "Facilitated learning objective workshops with our psychology team",
                    "Designed feedback collection systems",
                    "Created visual learning materials to enhance engagement"
                  ]
                },
                {
                  title: "4. Ongoing Support & Community",
                  items: [
                    "Established regular check-ins and support channels",
                    "Built peer connection opportunities",
                    "Created progress tracking systems"
                  ]
                },
                {
                  title: "5. Impact & Recognition",
                  items: [
                    "Developed measurement frameworks using knowledge tests and psychological safety assessments",
                    "Created feedback loops for continuous improvement",
                    "Maintained long-term relationships for ongoing development"
                  ]
                }
              ].map((phase, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Measuring Success: Beyond Completion Rates</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Working with our psychology team, I developed measurement frameworks that went beyond typical training metrics.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">30</div>
                <p className="text-muted-foreground">Coaches successfully recruited and trained</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-muted-foreground">Reported feeling well-supported</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Government contract completion</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <p className="text-muted-foreground">Months from zero to delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-16">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">What I Learned: People Experience is Universal</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              This project taught me that whether you're designing for customers, employees, or specialised coaches, the principles remain the same:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  number: "1",
                  title: "Transparency is everything",
                  description: "To engage people in something new like a unique learning programme, we needed to interact, talk about our intentions and get ready to listen to what they have to say."
                },
                {
                  number: "2", 
                  title: "Journey thinking scales",
                  description: "Mapping experiences end-to-end reveals gaps in the processes, helps people understand what really goes into the process, develops accountability."
                },
                {
                  number: "3",
                  title: "Capability building multiplies impact",
                  description: "Teaching team members to gather information, using it to learn and improve our product made us more powerful."
                },
                {
                  number: "4",
                  title: "Measurement tells the story",
                  description: "Good metrics help stakeholders understand the human impact of design decisions."
                }
              ].map((learning, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {learning.number}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{learning.title}</h3>
                        <p className="text-muted-foreground">{learning.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-16 border-t">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
              <Link to="/" className="inline-flex items-center text-primary hover:text-secondary transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
              
              <Link to="/scottish-tech-army" className="inline-flex items-center text-primary hover:text-secondary transition-colors">
                Next Project: Scottish Tech Army
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GovernmentProgramme;
