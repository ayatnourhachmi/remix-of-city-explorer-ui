import { Globe, Users, Wallet, Compass, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "1,500+", label: "Attractions worldwide", desc: "Access top-rated attractions, tours & activities in every destination.", icon: Globe },
  { value: "7.5M", label: "Active users", desc: "Join millions of travelers who trust Go City for unforgettable experiences.", icon: Users },
];

const benefits = [
  { title: "Save more", desc: "Up to 50% vs buying tickets separately.", icon: Wallet },
  { title: "Experience more", desc: "One pass unlocks hundreds of attractions.", icon: Compass },
  { title: "Always easy", desc: "Digital pass on your phone — no paper needed.", icon: ThumbsUp },
];

const WhyChoose = () => (
  <section className="bg-primary text-primary-foreground section-spacing">
    <div className="container-main">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-16"
      >
        Why choose Go City®?
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-teal-mid/40 rounded-2xl p-8 text-center"
          >
            <stat.icon className="w-10 h-10 mx-auto mb-4 text-teal-light" />
            <div className="text-4xl font-extrabold mb-2">{stat.value}</div>
            <div className="font-semibold text-lg mb-2">{stat.label}</div>
            <p className="text-sm opacity-80">{stat.desc}</p>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {benefits.map((b) => (
            <div key={b.title} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-mid/40 flex items-center justify-center shrink-0">
                <b.icon className="w-5 h-5 text-teal-light" />
              </div>
              <div>
                <div className="font-semibold text-base">{b.title}</div>
                <p className="text-sm opacity-80">{b.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyChoose;
