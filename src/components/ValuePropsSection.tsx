
import { Card, CardContent } from '@/components/ui/card';

const ValuePropsSection = () => {
  const valueProps = [
    {
      icon: "🧠",
      title: "Psychology-Informed Design",
      description: "My educational psychology background helps me understand not just what people do, but why they do it—and how to design experiences that truly support their needs."
    },
    {
      icon: "🤝",
      title: "People Experience Focus", 
      description: "I specialize in designing employee experiences, organizational change, and building design capability within teams—bridging the gap between UX and HR."
    },
    {
      icon: "📈",
      title: "Proven Impact at Scale",
      description: "From recruiting 30 government coaches in 3 months to building design capability across organizations, I deliver measurable results under pressure."
    },
    {
      icon: "🌍",
      title: "Cross-Cultural Collaboration",
      description: "Fluent in English and Russian, with experience working across diverse teams and stakeholder groups to build inclusive, accessible solutions."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container-width section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            What Makes Me Different
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {valueProps.map((prop, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{prop.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {prop.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {prop.description}
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

export default ValuePropsSection;
