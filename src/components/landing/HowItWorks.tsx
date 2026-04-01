import { ScanLine, Eye, PiggyBank } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Scan", desc: "Show your digital pass at each attraction entrance.", icon: ScanLine },
  { num: "02", title: "See", desc: "Enjoy world-class attractions, tours, and activities.", icon: Eye },
  { num: "03", title: "Save", desc: "Save up to 50% compared to buying separately.", icon: PiggyBank },
];

const HowItWorks = () => (
  <section id="how-it-works" className="section-spacing">
    <div className="container-main text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-foreground mb-4"
      >
        We're how the best city breaks happen…
      </motion.h2>
      <p className="text-muted-foreground mb-16 max-w-lg mx-auto">
        Three simple steps to unlock incredible savings on your next trip.
      </p>
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex flex-col items-center"
          >
            <span className="text-5xl font-extrabold text-accent/20 mb-4">{step.num}</span>
            <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-4">
              <step.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm max-w-xs">{step.desc}</p>
          </motion.div>
        ))}
      </div>
      <a
        href="#destinations"
        className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold hover:brightness-110 transition-all shadow-soft"
      >
        Get started
      </a>
    </div>
  </section>
);

export default HowItWorks;
