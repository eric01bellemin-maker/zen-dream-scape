const Footer = () => {
  return (
    <footer className="py-8 md:py-12 border-t border-border/50 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <h3 className="text-lg md:text-xl font-bold font-['Cormorant_Garamond'] text-gradient-zen mb-2">Sonora Zen</h3>
            <p className="text-xs md:text-sm text-muted-foreground">Le palet sonore qui vous guide vers un sommeil doux et serein.</p>
          </div>
          <div>
            <h4 className="font-semibold text-xs md:text-sm text-foreground mb-2">Liens utiles</h4>
            <div className="flex flex-col gap-1.5 text-xs md:text-sm text-muted-foreground">
              <a href="#produit" className="hover:text-primary transition-colors">Le produit</a>
              <a href="#sons" className="hover:text-primary transition-colors">Les sons</a>
              <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-xs md:text-sm text-foreground mb-2">Contact</h4>
            <div className="flex flex-col gap-1.5 text-xs md:text-sm text-muted-foreground">
              <a href="mailto:contact@sonorazen.fr" className="hover:text-primary transition-colors">contact@sonorazen.fr</a>
              <span>Support 7j/7</span>
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 pt-4 md:pt-6 text-center text-[10px] md:text-xs text-muted-foreground">
          © 2026 Sonora Zen. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
