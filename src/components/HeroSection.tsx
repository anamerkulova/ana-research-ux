
const HeroSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container-width section-padding">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            Build with people.
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-12 leading-relaxed">
            This is what we are here for.
          </p>

          <div className="border-t border-border pt-8">
            <p className="text-xl font-semibold text-foreground mb-1">
              Ana Merkulova
            </p>
            <p className="text-lg text-muted-foreground">
              UX researcher specialising in trauma-informed design with learners and educators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
