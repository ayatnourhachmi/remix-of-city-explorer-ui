import { Globe, Menu, ShoppingCart, User } from "lucide-react";

const Navbar = () => (
  <nav className="bg-card border-b border-border sticky top-0 z-50">
    <div className="container-main flex items-center justify-between h-16">
      <div className="flex items-center gap-8">
        <span className="text-2xl font-extrabold text-primary tracking-tight">Go City</span>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground">
          <a href="#destinations" className="hover:text-accent transition-colors">Destinations</a>
          <a href="#how-it-works" className="hover:text-accent transition-colors">How it works</a>
          <a href="#help" className="hover:text-accent transition-colors">Help</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="hidden md:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <Globe className="w-4 h-4" /> EN
        </button>
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <User className="w-5 h-5" />
        </button>
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <ShoppingCart className="w-5 h-5" />
        </button>
        <button className="md:hidden text-foreground">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
