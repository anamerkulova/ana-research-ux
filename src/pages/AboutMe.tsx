import Navigation from '@/components/Navigation';
import WorkTogetherSection from '@/components/WorkTogetherSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, GraduationCap, User } from 'lucide-react';

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
                    As a designer who bridges psychology and user experience, I'm particularly interested in responsible service design, education and storytelling. Here's my story and the learning that shapes how I approach design challenges.
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
                        I've always been interested in the learning process and behaviour science, and loved books. Gradually I went from educational psychology to language teaching, to design and research, as I worked on more projects within the education, charity and mental health sectors.
                      </p>

                      <p className="text-lg leading-relaxed mb-6">
                        I like making complex things easy for people, and spent my 20s as a language teacher, taking difficult concepts and seeing learners' confidence increase when using them. There is quite a lot of frustrating software people need to work with as teachers, and I started my path into UX by trying to find better ways to collect people's feedback and make sure they felt heard.
                      </p>

                      <p className="text-lg leading-relaxed">
                        When working on a project I begin by finding alignment with people, and understanding what we all need to learn to start moving in the desired direction. Currently I am pursuing an MA in Education and Technology to deepen my knowledge of research methodology.
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

        {/* Education & Certifications Section */}
        <section className="py-20 bg-muted/30">
          <div className="container-width section-padding">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <Award className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Education & Certifications
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Education */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-1">
                        MA Education and Technology
                      </h4>
                      <p className="text-sm text-muted-foreground">UCL, 2028</p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-1">
                        BA (Hons) Educational Psychology
                      </h4>
                      <p className="text-sm text-muted-foreground">Moscow State University, 2006–2011</p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-1">
                        Diploma in Teaching English to Adult Learners (DELTA)
                      </h4>
                      <p className="text-sm text-muted-foreground">Cambridge University Press and Assessment, 2022</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Certifications */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge className="bg-green-500 text-white">Certifications</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-1">
                        Regenerative Design Leadership
                      </h4>
                      <p className="text-sm text-muted-foreground">UX for Change, 2025</p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">UX Design Certification</h4>
                      <ul className="text-sm text-foreground space-y-1">
                        <li>- DesignLab, 2021–2022</li>
                        <li>- School of UX, 2023</li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">LinkedIn Learning</h4>
                      <ul className="text-sm text-foreground space-y-1">
                        <li>- Designing for Digital Accessibility in Online Learning, 2026</li>
                        <li>- Inclusive Typography, 2025</li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Maven</h4>
                      <ul className="text-sm text-foreground space-y-1">
                        <li>- AI Automation for Business Leaders and Operations Managers, 2025</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <WorkTogetherSection />
      </main>
    </div>
  );
};

export default AboutMe;
