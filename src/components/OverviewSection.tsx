
const OverviewSection = () => {
  const features = [
    {
      title: "Psychology Foundation",
      description: "Deep understanding of human behavior, cognitive processes, and emotional responses informs every design decision.",
      icon: "🧠"
    },
    {
      title: "Human-Centered Design",
      description: "Research-driven approach that puts real user needs and experiences at the center of the design process.",
      icon: "❤️"
    },
    {
      title: "Empathetic Solutions",
      description: "Creating interfaces that not only function beautifully but truly understand and respond to human emotions.",
      icon: "🤝"
    }
  ];

  return (
    <section className="py-20 bg-muted/40">
      <div className="container-width section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Where Psychology Meets Design
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My unique background in psychology provides the foundation for creating digital experiences
              that truly understand and serve human needs. Every pixel is placed with intention,
              every interaction designed with empathy.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats or highlight */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-accent px-6 py-3 rounded-full">
              <span className="text-primary font-medium">✨ Psychology + Design = </span>
              <span className="text-primary font-semibold">Meaningful User Experiences</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
