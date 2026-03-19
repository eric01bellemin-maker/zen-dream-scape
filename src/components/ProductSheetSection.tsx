import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Volume2,
  Battery,
  Bluetooth,
  Moon,
  Cable,
  Truck,
  RotateCcw,
  Shield,
  Star,
  Check,
} from "lucide-react";
import lifestyleImage from "@/assets/product-lifestyle.png";
import productDevice from "@/assets/product-device.png";

const specs = [
  { icon: Volume2, label: "2 haut-parleurs à conduction osseuse" },
  { icon: Bluetooth, label: "Bluetooth 5.3 + carte TF" },
  { icon: Battery, label: "400 mAh — jusqu'à 16h d'autonomie" },
  { icon: Moon, label: "Minuterie & arrêt progressif" },
  { icon: Cable, label: "Recharge USB-C rapide" },
];

const includes = [
  "1× Palet sonore Sonora Zen",
  "1× Câble USB-C",
  "1× Guide d'utilisation",
  "1× Pochette de rangement",
];

const ProductSheetSection = () => {
  return (
    <section id="fiche-produit" className="py-16 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-2">
            Fiche produit
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
            Sonora <span className="text-gradient-zen">Zen</span>
          </h2>
        </motion.div>

        {/* Main grid: Image + Info */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-14 items-start mb-12 md:mb-20">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-2xl md:rounded-3xl overflow-hidden bg-zen-cloud">
              <img
                src={lifestyleImage}
                alt="Sonora Zen posé sur des draps blancs dans une ambiance sereine"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-xl md:rounded-2xl overflow-hidden bg-zen-cloud p-6 md:p-10 flex items-center justify-center">
              <img
                src={productDevice}
                alt="Palet sonore Sonora Zen — vue détaillée du produit"
                className="w-full max-w-[180px] md:max-w-[260px] drop-shadow-xl"
              />
            </div>
          </motion.div>

          {/* Product info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                4.9/5 — 127 avis
              </span>
            </div>

            {/* Title & subtitle */}
            <div>
              <h3 className="text-xl md:text-3xl font-bold text-foreground mb-2">
                Palet Sonore Sonora Zen
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Le compagnon de vos nuits. Ultra-plat et recouvert de tissu
                acoustique premium, il se glisse sous votre oreiller pour
                diffuser des sons apaisants par conduction osseuse — audibles
                uniquement par vous.
              </p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-sm md:text-lg text-muted-foreground line-through">
                30,00 €
              </span>
              <span className="text-3xl md:text-4xl font-bold text-foreground">
                25,00 €
              </span>
              <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                -17%
              </span>
            </div>

            {/* CTA */}
            <Button
              size="lg"
              className="rounded-full px-10 text-sm md:text-base shadow-lg shadow-primary/25 w-full sm:w-auto"
            >
              <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Commander maintenant
            </Button>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 text-xs md:text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-primary" />
                Livraison gratuite
              </div>
              <div className="flex items-center gap-1.5">
                <RotateCcw className="w-4 h-4 text-primary" />
                Retour 30 jours
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-primary" />
                Garantie 2 ans
              </div>
            </div>

            {/* Specs */}
            <div className="rounded-2xl bg-muted/50 p-5 md:p-6">
              <h4 className="font-semibold text-sm md:text-base text-foreground mb-3">
                Caractéristiques
              </h4>
              <ul className="flex flex-col gap-2.5">
                {specs.map((spec) => (
                  <li
                    key={spec.label}
                    className="flex items-center gap-3 text-xs md:text-sm text-muted-foreground"
                  >
                    <spec.icon className="w-4 h-4 text-primary shrink-0" />
                    {spec.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* What's included */}
            <div className="rounded-2xl bg-muted/50 p-5 md:p-6">
              <h4 className="font-semibold text-sm md:text-base text-foreground mb-3">
                Contenu du coffret
              </h4>
              <ul className="flex flex-col gap-2">
                {includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-xs md:text-sm text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSheetSection;
