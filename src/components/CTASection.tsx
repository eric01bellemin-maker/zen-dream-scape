import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Truck, RotateCcw, Shield } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-zen-glow/5" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4">
            Prêt à <span className="text-gradient-zen">mieux dormir</span> ?
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground mb-6 md:mb-8">
            Offrez-vous le sommeil que vous méritez. Livraison gratuite et retour sous 30 jours.
          </p>

          <div className="bg-card border border-border/50 rounded-2xl md:rounded-3xl p-5 md:p-8 mb-6 md:mb-8 shadow-xl shadow-primary/5">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-base md:text-2xl text-muted-foreground line-through">30,00 €</span>
                <span className="text-3xl md:text-5xl font-bold text-foreground">25,00 €</span>
              </div>
              <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">-17%</span>
            </div>

            <Button size="lg" className="rounded-full px-8 md:px-12 text-sm md:text-lg shadow-lg shadow-primary/25 w-full sm:w-auto">
              <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Ajouter au panier
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
              Livraison gratuite
            </div>
            <div className="flex items-center gap-1.5">
              <RotateCcw className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
              Retour 30 jours
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
              Garantie 2 ans
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
