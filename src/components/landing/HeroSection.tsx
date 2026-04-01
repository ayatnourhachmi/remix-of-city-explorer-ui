import { MapPin, Ticket, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import heroBarcelona from "@/assets/hero-barcelona.jpg";
import heroAmsterdam from "@/assets/hero-amsterdam.jpg";
import heroParis from "@/assets/hero-paris.jpg";
import heroLondon from "@/assets/hero-london.jpg";

const steps = [
  { icon: MapPin, text: "Choose your destination" },
  { icon: Ticket, text: "Pick your pass" },
  { icon: Smartphone, text: "Explore top attractions with the Go City app" },
];

const HeroSection = () => (
  <section className="section-spacing">
    <div className="container-main">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
            One pass,<br />all the sights
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            Save up to 50% on the best attractions, tours and activities with Go City®
          </p>
          <div className="space-y-4 mb-10">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{step.text}</span>
              </div>
            ))}
          </div>
          <a
            href="#destinations"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold text-base hover:brightness-110 transition-all shadow-soft"
          >
            Choose a city
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-3 gap-3 h-[420px]"
        >
          <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden">
            <img src={heroBarcelona} alt="Barcelona" className="w-full h-full object-cover" width={640} height={800} />
          </div>
          <div className="col-span-1 rounded-2xl overflow-hidden">
            <img src={heroAmsterdam} alt="Amsterdam" className="w-full h-full object-cover" loading="lazy" width={640} height={512} />
          </div>
          <div className="col-span-1 rounded-2xl overflow-hidden">
            <img src={heroParis} alt="Paris" className="w-full h-full object-cover" loading="lazy" width={640} height={640} />
          </div>
          <div className="col-span-2 rounded-2xl overflow-hidden">
            <img src={heroLondon} alt="London" className="w-full h-full object-cover" loading="lazy" width={640} height={512} />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
