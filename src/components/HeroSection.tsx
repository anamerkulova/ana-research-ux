
const HeroSection = () => {
  return (
    <section className="py-24 md:py-28">
      <div className="container-width section-padding">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight max-w-3xl">
          Build with people.
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground mb-16 leading-relaxed max-w-3xl">
          This is what we are here for.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex lg:items-end">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              I conduct research to inform design:
            </h2>
          </div>

          <div>
            <div className="border-t border-border pt-8">
              <p className="text-xl font-semibold text-foreground mb-1">
                Ana Merkulova
              </p>
              <p className="text-lg text-muted-foreground">
                UX researcher specialising in trauma-informed design with learners and educators.
              </p>
            </div>

            <div className="mt-8 rounded-lg overflow-hidden shadow-md">
              <img
                src={`${import.meta.env.BASE_URL}lovable-uploads/ana_workshop_image.jpeg`}
                alt="Ana facilitating a UX for Change London workshop"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
