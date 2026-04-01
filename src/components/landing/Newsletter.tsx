import { motion } from "framer-motion";

const Newsletter = () => (
  <section className="section-spacing bg-card">
    <div className="container-main">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center"
      >
        <h3 className="text-2xl font-extrabold text-foreground mb-3">Stay in the loop</h3>
        <p className="text-muted-foreground mb-8">Get exclusive deals, travel tips, and destination guides straight to your inbox.</p>
        <div className="flex gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button className="px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold text-sm hover:brightness-110 transition-all shrink-0">
            Subscribe now
          </button>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          By subscribing, you agree to our privacy policy. Unsubscribe anytime.
        </p>
      </motion.div>
    </div>
  </section>
);

export default Newsletter;
