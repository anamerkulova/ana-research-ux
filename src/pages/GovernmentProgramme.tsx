
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
                  Designing for Impact
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  How I transformed a 3-month government programme from an impossible deadline into a measurable success story
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-primary/15 text-primary rounded-full font-medium">Government Programme</span>
                  <span className="px-4 py-2 bg-primary/15 text-primary rounded-full font-medium">Service Design</span>
                  <span className="px-4 py-2 bg-primary/15 text-primary rounded-full font-medium">People Experience</span>
                  <span className="px-4 py-2 bg-primary/15 text-primary rounded-full font-medium">Organizational Design</span>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-16 flex items-center justify-center min-h-[300px]">
                  <span className="text-muted-foreground text-xl font-medium">Image updating</span>
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
                  <h3 className="font-semibold text-teal-600 mb-2">Team Size</h3>
                  <p className="text-muted-foreground">8 people total</p>
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
                <em>January 2025.</em> We'd just won a government contract with Innovate UK to train 30 specialist coaches in digital safety and psychology of change. The catch? We had exactly 3 months to go from zero to fully operational programme. I was the sole designer and there were 8 of us.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">The brief was overwhelming:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Recruit and train 30 expert coaches from scratch</li>
                  <li>• Completely redesign the website</li>
                  <li>• Design all systems, processes, and materials</li>
                  <li>• Deliver measurable results to government stakeholders</li>
                  <li>• Oh, and nobody on the team had done anything like this before</li>
                </ul>
              </div>
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
              <p className="text-muted-foreground mb-8 text-lg">
                I reframed the challenge: <em>What if we treated our coaches like employees joining a new organisation? What would their ideal journey look like?</em>
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-6">Discovery: Improvise on research within the deadline</h3>
              
              <p className="text-muted-foreground mb-6 text-lg">
                With limited time like this, how do we make sure we understand our customers?
              </p>

              <p className="text-muted-foreground mb-8 text-lg">
                I organised live Q&A sessions with potential coaches, positioning them as "information sessions" while secretly gathering research insights.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 py-4 mb-8 bg-primary/5 rounded-r-lg">
                <p className="text-muted-foreground italic">
                  "How will I be able to use this in my practice?"
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
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">Coaches needed to feel confident and supported</p>
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
                  <p className="text-muted-foreground text-sm">A lot of them had learning needs we needed to accommodate</p>
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
            <h2 className="text-3xl font-bold text-foreground mb-8">Service Design: Make sure everyone looks behind the scenes</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              I created a service blueprint covering every touchpoint from recruitment to post-programme support:
            </p>

            <div className="space-y-8">
              {[
                {
                  title: "1. Attraction & Recruitment",
                  items: [
                    "Designed the landing page",
                    "Created assessment pathway with transparent criteria",
                    "Made sure the course content is clear"
                  ]
                },
                {
                  title: "2. Selection & Onboarding",
                  items: [
                    "Created practical onboarding materials",
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
                    "Ensured anonymous feedback collection",
                    "Made sure we stay mindful of learning requirements"
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

      {/* Working Together Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Working together when you've only just met</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Almost everyone had just started and was keen to get going without spending time in meetings.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">My Approach:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Led weekly alignment workshops using design thinking methods
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Taught team members to use collaborative tools so that we could work asynchronously where possible
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Facilitated decision-making sessions where we assessed our assumptions
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/1caedb03-87f6-4e26-8a19-e5b49ea5b793.png" 
                  alt="Concept story diagram showing customer journey and pain points"
                  className="w-full rounded-lg"
                />
              </div>
              <p className="text-muted-foreground text-center italic">
                Example of a concept story I created to align the team on what is important to our customers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Measurement Section */}
      <section className="py-16">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Measure success beyond 'Yes we completed the training'</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Working with our psychology team, I developed measurement frameworks that went beyond typical training metrics:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Quantitative Measures:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Knowledge assessment scores (pre and post training)
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Practical task assessments
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Qualitative Measures:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Psychological safety improvements (measured through validated scales)
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Confidence levels in delivering content
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Peer connection and community building
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Long-term application of learning
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">The Results</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">30</div>
                <p className="text-muted-foreground">Coaches successfully recruited and trained in 3 months</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-muted-foreground">Reported feeling "well-supported throughout the process"</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Government contract completed successfully</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">✓</div>
                <p className="text-muted-foreground">Measurable improvements in knowledge and psychological safety</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">∞</div>
                <p className="text-muted-foreground">Ongoing relationships maintained for continuous feedback</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-16">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">I learned to let go, measure, and stay true to my values</h2>
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
