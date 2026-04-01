import heroBarcelona from "@/assets/hero-barcelona.jpg";
import heroAmsterdam from "@/assets/hero-amsterdam.jpg";
import heroParis from "@/assets/hero-paris.jpg";
import heroLondon from "@/assets/hero-london.jpg";
import destDubai from "@/assets/dest-dubai.jpg";
import destRome from "@/assets/dest-rome.jpg";

const images = [heroBarcelona, heroAmsterdam, heroParis, heroLondon, destDubai, destRome];

const ImageGallery = () => (
  <section className="py-10 overflow-hidden">
    <div className="flex gap-3 px-4">
      {images.map((src, i) => (
        <div key={i} className="shrink-0 w-56 h-40 rounded-2xl overflow-hidden">
          <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
      ))}
    </div>
  </section>
);

export default ImageGallery;
