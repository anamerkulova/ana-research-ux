
const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-28 pb-16">
      <div className="container-width section-padding">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight max-w-3xl">
            Build with people.
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-16 leading-relaxed max-w-3xl">
            This is what we are here for.
          </p>

          <div className="flex justify-end">
            <div className="w-full lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={`${import.meta.env.BASE_URL}lovable-uploads/ana_workshop_image.jpeg`}
                  alt="Ana facilitating a UX for Change London workshop"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="mt-6">
                <p className="text-lg text-muted-foreground">
                  Ana is a UX researcher specialising in trauma-informed design with learners and educators.
                </p>
              </div>
            </div>
          </div>

          <h2 className="mt-10 max-w-xl text-2xl md:text-3xl font-semibold text-foreground">
            Research that informs design:
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
