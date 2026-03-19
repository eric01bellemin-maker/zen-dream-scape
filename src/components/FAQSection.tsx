import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Comment fonctionne le Sonora Zen ?", a: "Placez le palet sous votre oreiller. Il diffuse des sons par vibrations douces, audibles uniquement par vous grâce à la conduction osseuse." },
  { q: "Est-ce que mon partenaire peut l'entendre ?", a: "Non. La technologie de conduction permet un son localisé. Votre partenaire ne sera pas dérangé." },
  { q: "Quelle est l'autonomie de la batterie ?", a: "Jusqu'à 8 heures d'utilisation continue, soit une nuit complète. Rechargement en 2h via USB-C." },
  { q: "Puis-je utiliser mes propres sons ?", a: "Oui, via l'application Sonora Zen (iOS & Android), vous pouvez importer vos propres fichiers audio." },
  { q: "Le produit émet-il des ondes pendant le sommeil ?", a: "Non. Un mode avion intégré coupe toute émission Bluetooth une fois la lecture lancée." },
  { q: "Quelle est la politique de retour ?", a: "Satisfait ou remboursé sous 30 jours. Nous prenons en charge les frais de retour." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-12 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-2">FAQ</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
            Questions <span className="text-gradient-zen">fréquentes</span>
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border/50 rounded-xl px-4 md:px-6 bg-card">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium text-foreground hover:no-underline py-3 md:py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-base text-muted-foreground leading-relaxed pb-3 md:pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
