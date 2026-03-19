import React, { useState } from "react";

const Index = () => {
  // On utilise les images du dossier public
  const [currentImage, setCurrentImage] = useState("Product-blue.png");

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-slate-900">
      {/* HEADER SONORA STYLE */}
      <nav className="p-8 flex justify-between items-center bg-transparent">
        <span className="font-serif text-2xl tracking-[0.2em] uppercase font-light">Sonora</span>
        <div className="flex gap-10 text-[11px] uppercase tracking-[0.3em] font-medium opacity-40">
          <span className="cursor-pointer hover:opacity-100 transition-opacity">Univers</span>
          <span className="cursor-pointer hover:opacity-100 transition-opacity">Collection</span>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* VISUEL PRINCIPAL (Style Galerie) */}
          <div className="relative group aspect-[4/5] bg-[#F7F5F2] rounded-sm overflow-hidden flex items-center justify-center p-12 shadow-sm">
            <img 
              src={currentImage} 
              alt="ZenDream" 
              className="max-h-full w-auto object-contain transition-all duration-1000 ease-in-out scale-95 group-hover:scale-100"
              key={currentImage}
            />
            <div className="absolute bottom-8 left-8">
              <p className="text-[10px] uppercase tracking-[0.4em] opacity-30">Artisanat Français</p>
            </div>
          </div>

          {/* DÉTAILS PRODUIT */}
          <div className="space-y-12">
            <header className="space-y-6">
              <h2 className="text-[12px] uppercase tracking-[0.5em] text-emerald-700 font-bold">L'expérience ZenDream</h2>
              <h1 className="text-7xl font-serif font-light leading-tight tracking-tight text-slate-800">
                Brume de <br/>Sérénité
              </h1>
              <div className="h-px w-20 bg-slate-200 my-8"></div>
              <p className="text-3xl font-light text-slate-400 italic">79.00 €</p>
            </header>

            <div className="space-y-8">
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400 font-bold">Nuancier de l'âme</p>
              
              <div className="flex gap-10">
                {/* Choix Bleu */}
                <button 
                  onClick={() => setCurrentImage("Product-blue.png")}
                  className="group flex flex-col items-center gap-4 outline-none"
                >
                  <div className={`w-12 h-12 rounded-full bg-[#B5C7D3] transition-all duration-500 ${currentImage === "Product-blue.png" ? 'ring-1 ring-slate-800 ring-offset-8 scale-110' : 'hover:scale-105 opacity-70'}`}></div>
                  <span className={`text-[9px] uppercase tracking-[0.2em] transition-opacity ${currentImage === "Product-blue.png" ? 'opacity-100' : 'opacity-0'}`}>Bleu Azur</span>
                </button>

                {/* Choix Gris */}
                <button 
                  onClick={() => setCurrentImage("Product-grey.png")}
                  className="group flex flex-col items-center gap-4 outline-none"
                >
                  <div className={`w-12 h-12 rounded-full bg-[#9DA3A9] transition-all duration-500 ${currentImage === "Product-grey.png" ? 'ring-1 ring-slate-800 ring-offset-8 scale-110' : 'hover:scale-105 opacity-70'}`}></div>
                  <span className={`text-[9px] uppercase tracking-[0.2em] transition-opacity ${currentImage === "Product-grey.png" ? 'opacity-100' : 'opacity-0'}`}>Gris Minéral</span>
                </button>
              </div>
            </div>

            <div className="pt-10">
              <button className="w-full border border-slate-900 text-slate-900 py-6 rounded-none text-[12px] uppercase tracking-[0.4em] hover:bg-slate-900 hover:text-white transition-all duration-500 font-light">
                Ajouter à votre rituel
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-20 text-center">
        <p className="text-[9px] uppercase tracking-[0.8em] opacity-20">Sonora Zen — Harmonie & Design</p>
      </footer>
    </div>
  );
};

export default Index;
