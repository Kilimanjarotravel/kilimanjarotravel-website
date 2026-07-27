type PageHeroProps = {
title: string;
subtitle: string;
image: string;
position?: string;
};

export default function PageHero({
title,
subtitle,
image,
position = "center",
}: PageHeroProps) {
return (
<section
className="relative min-h-[680px] bg-contain bg-top bg-no-repeat md:min-h-screen md:bg-cover"
style={{
backgroundImage: `url(${image})`,
backgroundPosition: position,
}}
>
<div className="absolute inset-0 bg-black/35" />

<div className="relative mx-auto flex min-h-[680px] max-w-7xl flex-col justify-center px-6 pb-16 pt-24 text-white md:min-h-screen">
<p className="font-bold tracking-[0.35em] text-gold">
KILIMANJARO TRAVEL
</p>
<h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-tight md:text-7xl">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}