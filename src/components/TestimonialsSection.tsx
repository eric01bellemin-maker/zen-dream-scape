import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Marie L.", text: "Je m'endors en 10 minutes maintenant. Le son des vagues est incroyablement réaliste.", rating: 5 },
  { name: "Thomas D.", text: "Après des années d'insomnie, j'ai enfin retrouvé un sommeil réparateur.", rating: 5 },
  { name: "Sophie M.", text: "Design magnifique et qualité sonore exceptionnelle. Indispensable.", rating: 5 },
  { name: "Laurent B.", text: "Le mode minuterie est parfait. Je programme 30 min et je m'endors bien avant la fin.", rating: 4 },
];

const TestimonialsSection = () => {
  return (
    <section id="temoignages" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-2">Témoignages</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
            Ils ont retrouvé le <span className="text-gradient-zen">sommeil</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-3 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border/50"
            >
              <div className="flex gap-0.5 mb-2 md:mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3 h-3 md:w-4 md:h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-[10px] md:text-sm text-muted-foreground leading-relaxed mb-2 md:mb-4">"{t.text}"</p>
              <p className="text-xs md:text-sm font-semibold text-foreground">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
