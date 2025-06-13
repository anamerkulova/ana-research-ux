
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowDown, Users, Accessibility, CheckCircle } from 'lucide-react';

const ScottishTechArmy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-teal-50 to-coral-100">
        <div className="container-width section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Scottish Tech Army: 
                  <span className="text-gradient block mt-2">Inclusive Filter Design</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
                  Creating accessible volunteer role search filters while navigating 
                  technical constraints and building cross-functional team alignment.
                </p>
                <div className="flex flex-wrap justify-start gap-6 text-sm text-muted-foreground mb-8">
                  <div><strong>Timeline:</strong> Ongoing (2024)</div>
                  <div><strong>Role:</strong> UX Designer in cross-functional team</div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Accessibility</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Stakeholder Alignment</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Collaborative Design</span>
                </div>
              </div>

              {/* Mobile Interface Screenshots */}
              <div className="relative">
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                  <div className="transform rotate-2 hover:rotate-0 transition-transform duration-300">
                    <img 
                      src="/lovable-uploads/38c72600-90b8-4611-9d3b-6e63f0b28961.png"
                      alt="Mobile interface showing role filters with categories like Research, Engineering, Support, Design, Quality Assurance, and Product"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="transform -rotate-1 hover:rotate-0 transition-transform duration-300 mt-4">
                    <img 
                      src="/lovable-uploads/88ead1c2-0147-4fb6-b39f-924e187799e4.png"
                      alt="Filtered results showing Design roles including UI Designer, UX/UI Designer, and Web Designer positions"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="transform rotate-1 hover:rotate-0 transition-transform duration-300 mt-2">
                    <img 
                      src="/lovable-uploads/525de434-94e5-4a5e-b306-13cc023a0d06.png"
                      alt="Role listings showing various positions including Business Analyst, UI Designer, Product Manager, and React Developer"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 text-primary font-medium text-sm">
                  Before & After
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-width section-padding py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* The Challenge */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Good People, Hard-to-Find Opportunities
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Scottish Tech Army mobilizes UK tech talent for social good, but volunteers 
                struggled to find roles matching their skills and availability. This wasn't 
                just a UX problem—it was about helping people find meaningful ways to contribute.
              </p>
              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg">
                <p className="text-foreground font-medium">
                  <strong>The Impact:</strong> Frustrated volunteers meant less social impact and lower retention.
                </p>
              </div>
            </div>
          </section>

          {/* Team Collaboration */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">
                Designing Within Real Constraints
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  I worked with a cross-functional team to balance user needs with technical realities:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Product Owner</strong> (strategy)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Scrum Master</strong> (process)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>UX Researcher</strong> (insights)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>2 Web Developers</strong> (implementation)</span>
                  </li>
                </ul>
              </div>
              <Card className="bg-accent/30">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">My Role</h4>
                  <p className="text-muted-foreground">
                    Translate user needs into feasible solutions while building 
                    consensus across different perspectives and technical limitations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Key Insights */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Understanding Volunteer Psychology
            </h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              From our research with 17 current users, I discovered volunteers were 
              experiencing cognitive overload:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ArrowDown className="h-5 w-5 text-secondary mt-1" />
                  <span className="text-muted-foreground">Scanning long lists without clear entry points</span>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowDown className="h-5 w-5 text-secondary mt-1" />
                  <span className="text-muted-foreground">Feeling uncertain about role requirements</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ArrowDown className="h-5 w-5 text-secondary mt-1" />
                  <span className="text-muted-foreground">Abandoning searches when they couldn't quickly assess fit</span>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowDown className="h-5 w-5 text-secondary mt-1" />
                  <span className="text-muted-foreground">Not returning to browse new opportunities</span>
                </div>
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
              <p className="text-foreground font-medium">
                <strong>Psychology insight:</strong> When people volunteer, they're making an emotional 
                investment. Frustrating experiences undermine their motivation to contribute.
              </p>
            </div>
          </section>

          {/* User Testing Results Section */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Testing Results: Measurable Improvement
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              We conducted usability testing with 8 volunteers to validate our design improvements. 
              The results showed significant improvements in both task completion and user satisfaction.
            </p>
            
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/b914adac-0a19-4e66-9c35-16d1fd422cf4.png"
                alt="User testing results showing before and after comparison: Direct success improved from 75% to 83.3%, Mission unfinished decreased from 25% to 16.7%"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-primary/5 border border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Direct Success Rate</h4>
                  <div className="text-3xl font-bold text-primary mb-2">83.3%</div>
                  <p className="text-muted-foreground text-sm">Up from 75% - volunteers found relevant roles faster</p>
                </CardContent>
              </Card>
              <Card className="bg-secondary/5 border border-secondary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Task Abandonment</h4>
                  <div className="text-3xl font-bold text-secondary mb-2">16.7%</div>
                  <p className="text-muted-foreground text-sm">Down from 25% - fewer people gave up searching</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 bg-accent/20 p-6 rounded-lg">
              <p className="text-foreground font-medium italic">
                "The menu is easier to read. The menu isn't translucent and the background is 
                dimmed to draw attention to the menu." - Tester #22068776
              </p>
            </div>
          </section>

          {/* The Solution */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Accessibility className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">
                Accessible Filtering That Works
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4">Accessibility First</h4>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Made search function more prominent and discoverable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Added clear visual hierarchy for scanning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Included role count indicators to set expectations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Designed for screen readers and keyboard navigation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Psychology-Informed Interactions</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Reduced cognitive load with essential information upfront</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Used familiar design patterns (learned behavior)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Provided clear feedback about results and empty states</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Made it easy to return to "all roles" view</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Results & Impact */}
          <section className="bg-gradient-to-r from-teal-50 to-coral-100 -mx-6 md:-mx-8 lg:-mx-12 px-6 md:px-8 lg:px-12 py-12 rounded-xl">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Beyond Individual User Experience
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-foreground font-medium">Improved volunteer task completion rates</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-foreground font-medium">Reduced frustration and search abandonment</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-foreground font-medium">Better volunteer-role matching for organization</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-foreground font-medium">Established collaborative design process for team</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-foreground font-medium">Created reusable patterns for future development</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Key Learnings */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Designing for People in Complex Systems
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-foreground mb-2">Cross-functional collaboration under constraints</h4>
                <p className="text-muted-foreground">
                  Working with limited resources taught me to be creative within boundaries, not despite them.
                </p>
              </div>
              <div className="border-l-4 border-secondary pl-6">
                <h4 className="font-semibold text-foreground mb-2">Stakeholder alignment through research</h4>
                <p className="text-muted-foreground">
                  User insights helped leadership understand design decisions and build buy-in for changes.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-foreground mb-2">Accessibility as inclusion</h4>
                <p className="text-muted-foreground">
                  Designing for diverse needs made the system stronger for everyone, not just edge cases.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Demonstrated */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Skills Demonstrated</h2>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium">Cross-functional team leadership</span>
              <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium">Accessibility-first design</span>
              <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium">Stakeholder alignment</span>
              <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium">User psychology</span>
              <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium">Constraint management</span>
            </div>
            
            {/* Back to Work Button */}
            <Link to="/#work">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Back to All Work
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ScottishTechArmy;
