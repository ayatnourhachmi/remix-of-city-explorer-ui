import { motion } from "framer-motion";
import destDubai from "@/assets/dest-dubai.jpg";
import destNewYork from "@/assets/dest-newyork.jpg";
import destSydney from "@/assets/dest-sydney.jpg";
import destRome from "@/assets/dest-rome.jpg";
import destIstanbul from "@/assets/dest-istanbul.jpg";
import destSanFrancisco from "@/assets/dest-sanfrancisco.jpg";
import heroBarcelona from "@/assets/hero-barcelona.jpg";
import heroAmsterdam from "@/assets/hero-amsterdam.jpg";
import heroParis from "@/assets/hero-paris.jpg";
import heroLondon from "@/assets/hero-london.jpg";

const destinations = [
  { name: "Dubai", img: destDubai },
  { name: "New York", img: destNewYork },
  { name: "Sydney", img: destSydney },
  { name: "Rome", img: destRome },
  { name: "Istanbul", img: destIstanbul },
  { name: "San Francisco", img: destSanFrancisco },
  { name: "Barcelona", img: heroBarcelona },
  { name: "Amsterdam", img: heroAmsterdam },
  { name: "Paris", img: heroParis },
  { name: "London", img: heroLondon },
];

const DestinationsGrid = () => (
  <section id="destinations" className="section-spacing">
    <div className="container-main">
      <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-12">
        Choose from 25+ exciting destinations
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {destinations.map((dest, i) => (
          <motion.a
            key={dest.name}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-lifted transition-all duration-300 hover:-translate-y-1"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={dest.img}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                width={512}
                height={512}
              />
            </div>
            <div className="p-3">
              <span className="font-semibold text-foreground text-sm">{dest.name}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default DestinationsGrid;
