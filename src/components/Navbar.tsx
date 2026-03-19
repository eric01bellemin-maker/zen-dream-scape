import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button"; // Vérifie bien que le chemin vers UI Button est bon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // J'ai modifié les 'href' pour qu'ils correspondent aux 'id' de ton Index.tsx
  const links = [
    { label: "Accueil", href: "#hero" },
    { label: "Sons", href: "#sounds" },
    { label: "Produit", href: "#product" },
    { label: "Témoignages", href: "#testimonials" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        
        {/* Logo à gauche */}
        <a href="#hero" className="font-bold text-2xl tracking-widest text-white">
          SONORA ZEN
        </a>

        {/* Liens au centre (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-light text-gray-300 hover:text-white transition-colors tracking-widest uppercase"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="rounded-full px-6 bg-white text-black hover:bg-gray-200">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Commander
          </Button>
        </div>

        {/* Bouton Menu (Mobile) */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Déroulant (Mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-light text-gray-300 hover:text-white py-2 tracking-widest"
                  onClick={() => setIsOpen(false)} // Ferme le menu au clic
                >
                  {link.label}
                </a>
              ))}
              <Button size="lg" className="rounded-full mt-4 bg-white text-black">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Commander
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
