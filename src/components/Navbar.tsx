import { Link, useLocation } from "react-router-dom";
import { Activity, Home, Search, AlertTriangle, Package, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/search", label: "Disease Search", icon: Search },
    { path: "/danger-zone", label: "Danger Zones", icon: AlertTriangle },
    { path: "/vaccine-dashboard", label: "Vaccine Dashboard", icon: Package },
    { path: "/about", label: "About", icon: Info },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:text-primary/90 transition-colors">
            <Activity className="h-6 w-6" />
            <span className="hidden sm:inline">UP Vaccine System</span>
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-accent/50",
                    isActive ? "bg-primary text-primary-foreground hover:bg-primary/90" : "text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden md:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
