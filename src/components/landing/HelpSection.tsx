import { Headphones } from "lucide-react";
import { motion } from "framer-motion";

const HelpSection = () => (
  <section id="help" className="section-spacing">
    <div className="container-main">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-primary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
      >
        <div className="w-24 h-24 rounded-full bg-teal-mid/40 flex items-center justify-center shrink-0">
          <Headphones className="w-12 h-12 text-primary-foreground" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-extrabold text-primary-foreground mb-2">Got a question?</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-md">
            Our friendly support team is here to help you plan the perfect trip, 7 days a week.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:brightness-110 transition-all"
          >
            Get help now
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HelpSection;
