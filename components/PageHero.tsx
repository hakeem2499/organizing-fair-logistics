type PageHeroProps = {
  kicker?: string;
  title: string;
  description: string;
};

export function PageHero({ kicker, title, description }: PageHeroProps) {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        {kicker ? (
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            {kicker}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
