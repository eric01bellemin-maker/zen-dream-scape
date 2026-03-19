import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";

const ProductSection = () => {
  const [selectedColor, setSelectedColor] = useState("blue");

  const productData = {
    blue: {
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800",
      name: "ZenDream - Édition Bleu Brume",
    },
    gray: {
      image: "https://images.unsplash.com/photo-1511295744344-09773e682817?q=80&w=800",
      name: "ZenDream - Édition Gris Galet",
    }
  };

  return (
    <section className="py-24 bg-white/60 backdrop-blur-xl transition-colors duration-1000">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          
          {/* ZONE IMAGE */}
          <div className="w-full md:w-1/2">
            <div className="aspect-square rounded-[2.5rem] overflow-hidden bg-slate-50 shadow-2xl shadow-emerald-900/5 border-[12px] border-white">
              <img 
                src={productData[selectedColor].image} 
                alt="ZenDream"
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              />
            </div>
          </div>

          {/* ZONE TEXTE */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl font-light tracking-tight text-slate-800 italic">
                {productData[selectedColor].name}
              </h2>
              <p className="text-3xl font-semibold text-emerald-600">79.00 €</p>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Plongez dans un sommeil réparateur avec notre technologie de réduction du stress. 
              Un design épuré qui s'accorde avec votre quête de sérénité.
            </p>

            {/* SÉLECTEUR DE COULEUR */}
            <div className="flex items-center gap-6 p-4 bg-white/40 rounded-2xl w-fit border border-white/50">
              <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">Finition</span>
              <div className="flex gap-4">
                <button 
                  onClick={() => setSelectedColor("blue")}
                  className={`group relative w-12 h-12 rounded-full transition-all duration-300 ${selectedColor === "blue" ? "ring-2 ring-emerald-500 ring-offset-4 scale-110" : "hover:scale-105"} bg-blue-400`}
                >
                  {selectedColor === "blue" && <Check className="text-white absolute inset-0 m-auto h-6 w-6" />}
                </button>

                <button 
                  onClick={() => setSelectedColor("gray")}
                  className={`group relative w-12 h-12 rounded-full transition-all duration-300 ${selectedColor === "gray" ? "ring-2 ring-emerald-500 ring-offset-4 scale-110" : "hover:scale-105"} bg-gray-400`}
                >
                  {selectedColor === "gray" && <Check className="text-white absolute inset-0 m-auto h-6 w-6" />}
                </button>
              </div>
            </div>

            {/* BOUTON HTML STANDARD (Évite l'erreur d'import) */}
            <button className="flex items-center justify-center w-full md:w-auto px-10 py-7 bg-slate-900 hover:bg-emerald-700 text-white text-lg rounded-2xl shadow-lg transition-all transform hover:-translate-y-1">
              <ShoppingCart className="mr-3 h-6 w-6" /> Ajouter à ma chambre
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
