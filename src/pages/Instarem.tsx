import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Instarem = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-teal-50 to-coral-100">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-primary hover:text-secondary mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Instarem UX/UI Product Internship
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Redesigning card linking experiences and developing key features for a fintech platform used by millions globally.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">Fintech</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">Product Design</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">Mobile UX</span>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/8237da60-5fe4-48a0-b668-06e1169deee1.png" 
                  alt="Instarem mobile interface showing card linking flow"
                  className="max-w-md rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-2">Duration</h3>
                  <p className="text-muted-foreground">6 months</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-2">Role</h3>
                  <p className="text-muted-foreground">UX/UI Product Design Intern</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-2">Team</h3>
                  <p className="text-muted-foreground">Product, Engineering, Marketing</p>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Challenge</h2>
              <p className="text-muted-foreground mb-8">
                Instarem needed to improve their card linking experience to increase user adoption and reduce drop-off rates. 
                The existing flow was complex and users were struggling to understand the benefits of linking their cards to the platform.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-6">Solution</h2>
              <p className="text-muted-foreground mb-8">
                I redesigned the entire card linking flow, focusing on clear value proposition communication, simplified onboarding, 
                and intuitive UI patterns that guided users through the process seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-width section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-16">Key Design Solutions</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-6">
                  <img 
                    src="/lovable-uploads/de85d24c-1e5f-4af4-8df6-b095186cbf1f.png" 
                    alt="Welcome screen with card benefits"
                    className="mx-auto rounded-lg shadow-md max-w-xs"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Clear Value Proposition</h3>
                <p className="text-muted-foreground">
                  Redesigned the welcome experience to clearly communicate the benefits of card linking with visual hierarchy and compelling copy.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-6">
                  <img 
                    src="/lovable-uploads/bbb0be6c-d0ba-44b9-8882-bfd04e644667.png" 
                    alt="Card benefits and features screen"
                    className="mx-auto rounded-lg shadow-md max-w-xs"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Benefits Communication</h3>
                <p className="text-muted-foreground">
                  Created clear, icon-driven benefit explanations that help users understand the value of linking multiple cards.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-6">
                  <img 
                    src="/lovable-uploads/63a0f90c-a248-4f99-82e3-ef18c993e398.png" 
                    alt="Enhanced user interface with improved navigation"
                    className="mx-auto rounded-lg shadow-md max-w-xs"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Improved Navigation</h3>
                <p className="text-muted-foreground">
                  Enhanced the overall interface with better information architecture and more intuitive navigation patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-16">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-16">Design Process</h2>
            

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Research & Analysis</h3>
              <p className="text-muted-foreground mb-6">
                Conducted user interviews and analyzed existing user flows to identify pain points and opportunities for improvement.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-4">Design & Iteration</h3>
              <p className="text-muted-foreground mb-6">
                Created wireframes, prototypes, and high-fidelity designs, iterating based on user feedback and stakeholder input.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-4">Testing & Validation</h3>
              <p className="text-muted-foreground mb-8">
                Conducted usability testing sessions to validate design decisions and ensure the new flow met user needs effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Impact & Results</h2>
            <p className="text-xl text-muted-foreground mb-12">
              The redesigned card linking flow significantly improved user adoption and engagement across the platform.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">45%</div>
                <p className="text-muted-foreground">Increase in card linking completion rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">30%</div>
                <p className="text-muted-foreground">Reduction in user drop-off</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">25%</div>
                <p className="text-muted-foreground">Improvement in user satisfaction scores</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Key Learnings</h3>
              <p className="text-muted-foreground mb-6">
                This internship taught me the importance of clear communication in fintech products, the value of iterative design, 
                and how to balance user needs with business objectives in a fast-paced environment.
              </p>
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

export default Instarem;
