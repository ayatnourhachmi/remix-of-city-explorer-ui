import { motion } from "framer-motion";
import heroBarcelona from "@/assets/hero-barcelona.jpg";
import heroAmsterdam from "@/assets/hero-amsterdam.jpg";
import heroParis from "@/assets/hero-paris.jpg";
import heroLondon from "@/assets/hero-london.jpg";
import destDubai from "@/assets/dest-dubai.jpg";
import destRome from "@/assets/dest-rome.jpg";
import destNewYork from "@/assets/dest-newyork.jpg";
import destIstanbul from "@/assets/dest-istanbul.jpg";
import destSydney from "@/assets/dest-sydney.jpg";
import destSanFrancisco from "@/assets/dest-sanfrancisco.jpg";

const mosaicImages = [
  { src: heroLondon, alt: "London", className: "w-28 h-36 self-end -mb-4" },
  { src: destDubai, alt: "Dubai", className: "w-32 h-44 self-center" },
  { src: destNewYork, alt: "New York", className: "w-24 h-28 self-start mt-6" },
  { src: destSanFrancisco, alt: "San Francisco", className: "w-36 h-48 self-center -mt-2" },
  { src: heroAmsterdam, alt: "Amsterdam", className: "w-28 h-40 self-start" },
  { src: destIstanbul, alt: "Istanbul", className: "w-24 h-28 self-end mb-4" },
  { src: heroParis, alt: "Paris", className: "w-32 h-36 self-center mt-4" },
  { src: destRome, alt: "Rome", className: "w-28 h-32 self-start -mt-2" },
  { src: destSydney, alt: "Sydney", className: "w-36 h-44 self-center" },
  { src: heroBarcelona, alt: "Barcelona", className: "w-24 h-32 self-end -mb-2" },
];

const passes = [
  { city: "NEW YORK", label: "THE" },
  { city: "LONDON", label: "THE" },
  { city: "PARIS", label: "THE" },
];

const CityPassFamily = () => (
  <section className="py-16 md:py-24 bg-muted/50 overflow-hidden">
    {/* Mosaic collage */}
    <div className="flex items-center justify-center gap-3 md:gap-4 px-4 mb-16">
      {mosaicImages.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className={`shrink-0 rounded-2xl overflow-hidden shadow-soft hidden sm:block ${img.className}`}
          style={{ display: i < 5 ? undefined : undefined }}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      ))}
      {/* Show fewer on mobile */}
      {mosaicImages.slice(0, 5).map((img, i) => (
        <motion.div
          key={`mobile-${i}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className={`shrink-0 rounded-2xl overflow-hidden shadow-soft sm:hidden ${img.className}`}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>

    {/* City Pass Family */}
    <div className="container-main">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
      >
        <p className="text-lg md:text-xl font-semibold text-foreground text-center md:text-left max-w-[200px]">
          Meet the rest of the<br />Go City® family
        </p>
        {passes.map((pass) => (
          <a
            key={pass.city}
            href="#"
            className="flex items-baseline gap-2 group hover:opacity-80 transition-opacity"
          >
            <div className="border-2 border-primary px-2 py-1 leading-none">
              <span className="block text-xs font-bold text-primary uppercase">{pass.label}</span>
              <span className="block text-lg md:text-xl font-extrabold text-primary uppercase tracking-tight">
                {pass.city}
              </span>
              <span className="block text-xs font-bold text-primary uppercase">PASS®</span>
            </div>
            <span className="text-sm text-muted-foreground font-medium">by Go City</span>
          </a>
        ))}
      </motion.div>
    </div>
  </section>
);

export default CityPassFamily;
