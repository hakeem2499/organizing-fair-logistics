import { Bounded } from "@/components/Bounded";

type PageHeroProps = {
  kicker?: string;
  title: string;
  description: string;
};

export function PageHero({ kicker, title, description }: PageHeroProps) {
  return (
    <Bounded y="lg" className="bg-navy text-white">
      {kicker ? (
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
          {kicker}
        </p>
      ) : null}
      <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight break-words sm:text-4xl md:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
        {description}
      </p>
    </Bounded>
  );
}
