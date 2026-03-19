import { motion } from "framer-motion";
// on utilise le nom exact avec le "cache buster" ?v=2 pour forcer le changement
import productImage from "@/assets/palet-final-v1.png"; 
  
const FeaturesImageSection = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-12"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-2">
            Caractéristiques
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Conçu pour votre <span className="text-gradient-zen">bien-être</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={productImage}
            alt="Sonora Zen — caractéristiques : Bluetooth/TF, conduction osseuse, affichage LED, double mode audio, aide au sommeil, arrêt programmé"
            className="w-full max-w-sm md:max-w-lg drop-shadow-xl rounded-xl md:rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesImageSection;
