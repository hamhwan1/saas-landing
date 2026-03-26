import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, ArrowRight, LayoutGrid, Sparkles, Video, Users, Clapperboard, TrendingUp, UserCheck, BookOpen, FileText, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const productItems = [
  {
    icon: LayoutGrid,
    title: "Manage Assets",
    desc: "Organize and search all your media",
    href: "/product/asset-management",
  },
  {
    icon: Sparkles,
    title: "Create with AI",
    desc: "Generate images and content instantly",
    href: "/product/ai-creation",
  },
  {
    icon: Video,
    title: "Turn into Video",
    desc: "Convert long videos into short-form content",
    href: "/product/video-automation",
  },
  {
    icon: Users,
    title: "Work with Team",
    desc: "Collaborate and share in one workspace",
    href: "/product/team-collaboration",
  },
];

const useCaseItems = [
  {
    icon: Clapperboard,
    title: "For Creators",
    desc: "Create more content in less time",
    href: "/use-cases/creators",
    color: "#7C3AED",
  },
  {
    icon: TrendingUp,
    title: "For Marketers",
    desc: "Scale content without scaling your team",
    href: "/use-cases/marketers",
    color: "#0EA5E9",
  },
  {
    icon: UserCheck,
    title: "For Teams",
    desc: "Work together without the chaos",
    href: "/use-cases/teams",
    color: "#10B981",
  },
];

const resourceItems = [
  {
    icon: FileText,
    title: "Blog",
    desc: "Read articles and updates",
    href: "/blog",
    color: "#7C3AED",
  },
  {
    icon: BookOpen,
    title: "Guides",
    desc: "Learn how to use Yettey",
    href: "/guides",
    color: "#F97316",
  },
  {
    icon: MessageCircle,
    title: "Help Center",
    desc: "Find answers and support",
    href: "/help",
    color: "#10B981",
  },
];

const simpleDropdowns: Record<string, string[]> = {};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [location] = useLocation();
  const productRef = useRef<HTMLDivElement>(null);
  const useCasesRef = useRef<HTMLDivElement>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ucLeaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resLeaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleProductEnter = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setProductOpen(true);
  };
  const handleProductLeave = () => {
    leaveTimer.current = setTimeout(() => setProductOpen(false), 120);
  };
  const handleUseCasesEnter = () => {
    if (ucLeaveTimer.current) clearTimeout(ucLeaveTimer.current);
    setUseCasesOpen(true);
  };
  const handleUseCasesLeave = () => {
    ucLeaveTimer.current = setTimeout(() => setUseCasesOpen(false), 120);
  };
  const handleResourcesEnter = () => {
    if (resLeaveTimer.current) clearTimeout(resLeaveTimer.current);
    setResourcesOpen(true);
  };
  const handleResourcesLeave = () => {
    resLeaveTimer.current = setTimeout(() => setResourcesOpen(false), 120);
  };

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
            {/* Product mega-dropdown */}
            <div
              ref={productRef}
              className="relative"
              onMouseEnter={handleProductEnter}
              onMouseLeave={handleProductLeave}
            >
              <button
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors py-2",
                  location.startsWith("/product") ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                Product
                <ChevronDown
                  className={cn(
                    "w-3 h-3 opacity-50 transition-transform duration-200",
                    productOpen && "rotate-180 opacity-100"
                  )}
                />
              </button>

              <AnimatePresence>
                {productOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    onMouseEnter={handleProductEnter}
                    onMouseLeave={handleProductLeave}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[340px]"
                  >
                    <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl shadow-black/40 p-3 flex flex-col gap-1">
                      {productItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setProductOpen(false)}
                            className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                {item.title}
                              </p>
                              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}

                      {/* Divider + View all */}
                      <div className="h-px bg-border mx-3 my-1" />
                      <Link
                        href="/"
                        onClick={() => setProductOpen(false)}
                        className="flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <span className="text-xs font-semibold text-primary">View all features</span>
                        <ArrowRight className="w-3 h-3 text-primary group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Use Cases mega-dropdown */}
            <div
              ref={useCasesRef}
              className="relative"
              onMouseEnter={handleUseCasesEnter}
              onMouseLeave={handleUseCasesLeave}
            >
              <button
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors py-2",
                  location.startsWith("/use-cases") ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                Use Cases
                <ChevronDown
                  className={cn(
                    "w-3 h-3 opacity-50 transition-transform duration-200",
                    useCasesOpen && "rotate-180 opacity-100"
                  )}
                />
              </button>

              <AnimatePresence>
                {useCasesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    onMouseEnter={handleUseCasesEnter}
                    onMouseLeave={handleUseCasesLeave}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[300px]"
                  >
                    <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl shadow-black/40 p-3 flex flex-col gap-1">
                      {useCaseItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setUseCasesOpen(false)}
                            className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors"
                              style={{ background: `${item.color}20` }}
                            >
                              <Icon className="w-4 h-4" style={{ color: item.color }} />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                {item.title}
                              </p>
                              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources mega-dropdown */}
            <div
              className="relative"
              onMouseEnter={handleResourcesEnter}
              onMouseLeave={handleResourcesLeave}
            >
              <button
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors py-2",
                  location.startsWith("/blog") || location.startsWith("/guides") || location.startsWith("/help")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Resources
                <ChevronDown
                  className={cn(
                    "w-3 h-3 opacity-50 transition-transform duration-200",
                    resourcesOpen && "rotate-180 opacity-100"
                  )}
                />
              </button>

              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    onMouseEnter={handleResourcesEnter}
                    onMouseLeave={handleResourcesLeave}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[280px]"
                  >
                    <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl shadow-black/40 p-3 flex flex-col gap-1">
                      {resourceItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setResourcesOpen(false)}
                            className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                              style={{ background: `${item.color}20` }}
                            >
                              <Icon className="w-4 h-4" style={{ color: item.color }} />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                {item.title}
                              </p>
                              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pricing link */}
            <Link
              href="/pricing"
              className={cn(
                "text-sm font-medium transition-colors py-2",
                location === "/pricing" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Pricing
            </Link>
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
              {/* Product items */}
              <div className="flex flex-col gap-2">
                <div className="font-medium text-foreground">Product</div>
                <div className="flex flex-col gap-1 pl-4 border-l border-border">
                  {productItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Use Cases mobile */}
              <div className="flex flex-col gap-2">
                <div className="font-medium text-foreground">Use Cases</div>
                <div className="flex flex-col gap-1 pl-4 border-l border-border">
                  {useCaseItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Resources mobile */}
              <div className="flex flex-col gap-2">
                <div className="font-medium text-foreground">Resources</div>
                <div className="flex flex-col gap-1 pl-4 border-l border-border">
                  {resourceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/pricing"
                className={cn(
                  "font-medium",
                  location === "/pricing" ? "text-primary" : "text-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>

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
