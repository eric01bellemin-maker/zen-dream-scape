import { ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "Pour vos voyages",
    description: "Retrouvez le sommeil même en avion ou à l'hôtel.",
    image: "/zen-dream-scape/voyage.jpg",
  },
  {
    title: "Contre l'insomnie",
    description: "Apaisez votre esprit avec des fréquences relaxantes.",
    image: "/zen-dream-scape/insomnie.jpg",
  },
  {
    title: "Pour les enfants",
    description: "Une aide douce pour des nuits calmes et sereines.",
    image: "/zen-dream-scape/enfant.jpg",
  },
];

const testimonials = [
  { name: "Sophie L.", text: "Une immersion totale. Je m'endors enfin paisiblement.", stars: 5 },
  { name: "Marc A.", text: "Le son de la rivière est d'un réalisme bluffant. Merci !", stars: 5 },
  { name: "Elena R.", text: "Un design épuré et des sons d'une grande qualité.", stars: 5 }
];

export default function ThirdPageSection() {
  return (
    <section id="testimonials" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        
        {/* Section Solutions */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {solutions.map((sol, index) => (
            <div key={index} className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-sm">
              <img src={sol.image} alt={sol.title} className="w-full h-48 object-cover opacity-80" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{sol.title}</h3>
                <p className="text-zinc-400 text-sm">{sol.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Section Vidéo */}
        <div id="bienfaits" className="bg-zinc-900/50 rounded-3xl p-8 mb-20 text-center border border-zinc-800">
          <h2 className="text-3xl font-light mb-6 tracking-widest uppercase">Découvrez Sonora Zen</h2>
          <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-xl bg-black aspect-video border border-zinc-700">
            <video className="w-full h-full" controls playsInline>
              <source src="/zen-dream-scape/videos/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* NOUVELLE SECTION : AVIS CLIENTS */}
        <div className="mb-20">
          <h2 className="text-3xl font-light text-center mb-12 tracking-widest uppercase">Avis Clients</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-zinc-900/30 p-6 rounded-xl border border-zinc-800">
                <div className="flex mb-2">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 italic mb-4">"{item.text}"</p>
                <p className="text-white font-medium text-sm">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Prix / Achat */}
        <div id="product" className="max-w-xl mx-auto bg-zinc-900 border-2 border-white/20 rounded-3xl p-8 shadow-2xl text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
          </div>
          <h2 className="text-3xl font-bold mb-2 text-white">Votre Sonora Zen</h2>
          <p className="text-zinc-400 mb-6 font-light">Offre de lancement exclusive</p>
          <div className="flex justify-center items-baseline gap-3 mb-8">
            <span className="text-6xl font-black text-white">35€</span>
            <span className="text-2xl text-zinc-500 line-through">42€90</span>
          </div>
          <button className="w-full bg-white text-black text-xl font-bold py-5 rounded-2xl hover:bg-zinc-200 transition-all shadow-lg flex items-center justify-center gap-2">
            <ShoppingCart className="w-6 h-6" />
            COMMANDER MAINTENANT
          </button>
        </div>

      </div>
    </section>
  );
}
