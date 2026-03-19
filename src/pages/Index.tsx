import React, { useState } from "react";

const Index = () => {
  // Sur Vercel, pour les fichiers dans /public, on utilise "./nom"
  const [currentImage, setCurrentImage] = useState("./Product-blue.png");

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <nav className="p-8 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <span className="font-serif text-3xl font-bold tracking-tighter italic">ZenDream</span>
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.4em] font-black opacity-30">
          <span>Shop</span>
          <span>About</span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-10 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* L'IMAGE DU PRODUIT */}
          <div className="relative group bg-slate-50 rounded-[50px] aspect-square flex items-center justify-center p-12 overflow-hidden shadow-inner border border-slate-100">
            <img 
              src={currentImage} 
              alt="ZenDream" 
              className="max-h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-700 ease-out hover:scale-105"
              key={currentImage}
              onError={(e) => {
                // Secours ultime si l'image ne s'affiche pas
                const target = e.target as HTMLImageElement;
                if (target.src.startsWith('./')) {
                  target.src = currentImage.replace('./', '');
                }
              }}
            />
          </div>

          {/* LE TEXTE ET LES BOUTONS */}
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-[0.3em] rounded-full">New Collection</span>
              <h1 className="text-7xl font-serif leading-[1.1] text-slate-900">ZenDream</h1>
              <p className="text-3xl text-slate-400 font-light italic">79.00 €</p>
            </div>

            <div className="space-y-6 pt-8 border-t border-slate-100">
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-300">Couleur de la brume</p>
              <div className="flex gap-8">
                {/* Bleu */}
                <button 
                  onClick={() => setCurrentImage("./Product-blue.png")}
                  className={`w-14 h-14 rounded-full bg-[#93c5fd] transition-all duration-500 ${currentImage.includes("blue") ? 'ring-4 ring-emerald-500 ring-offset-4 scale-110 shadow-lg' : 'opacity-60 hover:opacity-100'}`}
                ></button>

                {/* Gris */}
                <button 
                  onClick={() => setCurrentImage("./Product-grey.png")}
                  className={`w-14 h-14 rounded-full bg-[#94a3b8] transition-all duration-500 ${currentImage.includes("grey") ? 'ring-4 ring-emerald-500 ring-offset-4 scale-110 shadow-lg' : 'opacity-60 hover:opacity-100'}`}
                ></button>
              </div>
            </div>

            <button className="w-full bg-slate-900 text-white py-6 rounded-3xl font-bold uppercase tracking-[0.3em] shadow-2xl hover:bg-black transition-all active:scale-[0.97]">
              Ajouter au panier
            </button>
          </div>
        </div>
      </main>
      
      <footer className="py-20 text-center opacity-10">
        <p className="text-[8px] uppercase tracking-[1em]">ZenDream Maker Edition 2026</p>
      </footer>
    </div>
  );
};

export default Index;
