import { Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const AppDownload = () => (
  <section className="bg-accent text-accent-foreground section-spacing">
    <div className="container-main">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Download the Go City app</h2>
          <p className="text-lg opacity-90 mb-8 max-w-md">
            Your digital pass, interactive maps, and attraction info — all in one place. Available on iOS and Android.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:brightness-110 transition-all">
              App Store
            </button>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:brightness-110 transition-all">
              Google Play
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-48 h-96 bg-primary/30 rounded-[2rem] border-4 border-primary-foreground/20 flex items-center justify-center">
              <Smartphone className="w-16 h-16 opacity-40" />
            </div>
            <div className="absolute -right-8 top-8 w-48 h-96 bg-primary/20 rounded-[2rem] border-4 border-primary-foreground/10 flex items-center justify-center -z-10">
              <Smartphone className="w-16 h-16 opacity-20" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AppDownload;
