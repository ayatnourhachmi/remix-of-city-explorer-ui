const partners = ["Barcelona", "Big Bus", "Legoland", "Madame Tussauds", "SEA LIFE", "The View"];

const PartnerLogos = () => (
  <section className="py-10 border-y border-border bg-card">
    <div className="container-main">
      <div className="flex items-center justify-center gap-8 md:gap-14 flex-wrap">
        {partners.map((name) => (
          <span key={name} className="text-sm font-semibold text-muted-foreground tracking-wider uppercase opacity-60">
            {name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default PartnerLogos;
