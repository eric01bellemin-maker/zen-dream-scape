import React from 'react';
import { motion } from "framer-motion";
import { Headphones, Waves, Zap, Moon, ShieldCheck, Bluetooth } from "lucide-react";
import { Link } from "react-router-dom"; // On utilise react-router-dom pour cette structure

const Caracteristiques = () => {
  const details = [
    {
      icon: Waves,
      title: "Conduction Osseuse",
      desc: "Technologie de pointe qui transmet le son par vibrations. Pas besoin d'écouteurs dans les oreilles, le son voyage à travers votre oreiller."
    },
    {
      icon: Bluetooth,
      title: "Bluetooth 5.3 & Carte TF",
      desc: "Une connexion sans fil ultra-stable avec votre téléphone, ou une autonomie totale en utilisant une carte mémoire chargée de vos musiques."
    },
    {
      icon: Moon,
      title: "Sommeil Profond",
      desc: "Aide à l'endormissement grâce à des fréquences apaisantes. L'affichage LED vous permet de gérer votre temps de sommeil."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-20 pb-10">
      <div className="container mx-auto px-4">
        
        {/* En-tête de la page */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800">
            Fiche Technique <span className="text-blue-400">Sonora Zen</span>
          </h1>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Découvrez comment notre technologie transforme vos nuits en une expérience de relaxation profonde.
          </p>
        </div>

        {/* Section Grille de Détails */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {details.map((item, index) => (
            <div key={index} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 text-blue-500">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Note de réassurance */}
        <div className="bg-blue-50 rounded-3xl p-8 text-center border border-blue-100">
          <ShieldCheck className="mx-auto text-blue-500 mb-4" size={40} />
          <h2 className="text-2xl font-bold mb-2">Sécurité & Confort</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Le Sonora Zen est conçu avec des matériaux hypoallergéniques et une batterie sécurisée contre la surchauffe. Profitez d'une nuit sereine en toute confiance.
          </p>
          <div className="mt-8">
             <Link to="/" className="bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-all">
                Retour à l'accueil
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caracteristiques;
