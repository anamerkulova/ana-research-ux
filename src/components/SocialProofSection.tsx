
import { Card, CardContent } from '@/components/ui/card';

const SocialProofSection = () => {
  const achievements = [
    {
      icon: "🎓",
      title: "School of UX Certified (2023)",
      description: "Completed intensive 7-week UX Skills Bootcamp funded by UK government, plus ongoing UXcel certifications in Accessibility and Product Management"
    },
    {
      icon: "🏆", 
      title: "Government Contract Success",
      description: "Successfully delivered Innovate UK/DSIT programme serving 30+ coaches with measurable knowledge and psychological safety improvements"
    },
    {
      icon: "🌟",
      title: "Social Impact Design",
      description: "Participated in UX for Change hackathon focusing on trauma-informed design for domestic abuse survivors—presented team solutions across 2-stage competition"
    },
    {
      icon: "📚",
      title: "Continuous Learning",
      description: "Currently leading team through CPD certification process while expanding my knowledge in storytelling, value proposition design, and learning experience design"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container-width section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            Recognition & Growth
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
