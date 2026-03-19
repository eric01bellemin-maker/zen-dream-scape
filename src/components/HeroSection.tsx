import { motion } from "framer-motion";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section id="hero" style={{ 
      position: 'relative', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      background: '#121212',
      overflow: 'hidden' 
    }}>
      
      {/* L'image de fond */}
      <img 
        src="woman-sleeping.jpg" 
        alt="Sommeil"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 1
        }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          if (!target.src.includes('zen-dream-scape')) {
            target.src = "/zen-dream-scape/woman-sleeping.jpg";
          }
        }}
      />

      {/* Le bouton simple en bas (sans composants externes) */}
      <div style={{ position: 'relative', zIndex: 20, marginTop: '70vh' }}>
        <button 
          onClick={() => document.getElementById('sounds')?.scrollIntoView({ behavior: 'smooth' })}
          style={{
            background: 'white',
            color: 'black',
            padding: '15px 30px',
            borderRadius: '50px',
            border: 'none',
            fontWeight: 'bold',
            cursor: 'pointer',
            letterSpacing: '2px'
          }}
        >
          COMMENCER L'EXPÉRIENCE
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
