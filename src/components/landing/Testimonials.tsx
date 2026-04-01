import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  { name: "Sarah M.", rating: 5, text: "Saved so much money in New York! The all-inclusive pass was a game changer for our family trip." },
  { name: "James L.", rating: 5, text: "Super easy to use. Just scan your phone and you're in. We visited 8 attractions in 3 days!" },
  { name: "Priya K.", rating: 5, text: "Paris was incredible with Go City. No queues, no fuss. Highly recommend for first-time visitors." },
  { name: "Marco T.", rating: 4, text: "Great value for money. We used it in Rome and it paid for itself by the second attraction." },
];

const Testimonials = () => (
  <section className="section-spacing bg-card">
    <div className="container-main">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-4"
      >
        We're kind of popular
      </motion.h2>
      <p className="text-muted-foreground text-center mb-12">But don't just take our word for it.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-background rounded-2xl p-6 shadow-soft hover:shadow-lifted transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex gap-0.5 mb-3">
              {[...Array(review.rating)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-star text-star" />
              ))}
            </div>
            <p className="text-foreground text-sm mb-4 leading-relaxed">"{review.text}"</p>
            <span className="text-xs font-semibold text-muted-foreground">{review.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
