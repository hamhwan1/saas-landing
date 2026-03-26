import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Product",
      dropdown: ["Digital Asset Management", "AI Content Creation", "Video Transformation", "Collaboration"],
    },
    {
      name: "Use Cases",
      dropdown: ["For Creators", "For Marketers", "For Teams"],
    },
    {
      name: "Resources",
      dropdown: ["Blog", "Guides", "Help Center"],
    },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-xl border-border shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-purple-400 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all">
              <span className="text-white font-display font-bold text-lg">Y</span>
            </div>
            <span className="font-display font-bold text-xl tracking-wide text-foreground">
              Yettey
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {"href" in link && link.href ? (
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 text-sm font-medium transition-colors py-2",
                      location === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                    {link.name}
                    {link.dropdown && <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-transform group-hover:rotate-180" />}
                  </button>
                )}

                {link.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200">
                    <div className="bg-card border border-border rounded-xl shadow-xl p-2 w-52 flex flex-col gap-1">
                      {link.dropdown.map((item) => (
                        <button key={item} className="text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-colors">
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Login
            </button>
            <button className="px-5 py-2.5 text-sm font-medium rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200">
              Start for free
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-2">
                  {"href" in link && link.href ? (
                    <Link
                      href={link.href}
                      className={cn(
                        "font-medium",
                        location === link.href ? "text-primary" : "text-foreground"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <div className="font-medium text-foreground">{link.name}</div>
                  )}
                  {link.dropdown && (
                    <div className="flex flex-col gap-2 pl-4 border-l border-border">
                      {link.dropdown.map((item) => (
                        <button key={item} className="text-left text-sm text-muted-foreground">
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="h-px bg-border my-2" />
              <button className="text-left font-medium text-foreground">Login</button>
              <button className="w-full py-3 text-center font-medium rounded-xl bg-primary text-primary-foreground mt-2">
                Start for free
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
