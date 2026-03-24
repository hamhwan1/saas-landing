import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  ArrowRight, 
  Search, 
  Sparkles, 
  Video, 
  Users, 
  FolderTree, 
  Zap, 
  Image as ImageIcon,
  MessageSquare,
  UploadCloud,
  Cpu,
  Scissors,
  Share2
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { cn } from "@/lib/utils";

// --- Sub-components for Sections ---

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-primary/15 via-background to-background"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white/80">Introducing Yettey 2.0</span>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-6">
            Manage your media like data.<br />
            <span className="text-gradient-primary">Create content with AI.</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Turn long videos into short-form, organize scattered files, and build a unified media engine for your entire team. All in one platform.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg shadow-[0_0_40px_rgba(124,58,237,0.3)] hover:shadow-[0_0_60px_rgba(124,58,237,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
            Get Started Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-lg border border-white/10 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2">
            <Play className="w-5 h-5" />
            Book a Demo
          </button>
        </FadeIn>

        {/* Abstract UI Preview in Hero */}
        <FadeIn delay={0.5} className="mt-20 mx-auto max-w-5xl relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-mesh.png`} 
            alt="Yettey Platform Visualization" 
            className="w-full rounded-2xl border border-white/10 shadow-2xl opacity-80"
          />
        </FadeIn>
      </div>
    </section>
  );
}

function Problems() {
  const problems = [
    {
      icon: Search,
      title: "Scattered Files",
      desc: "Media stored across hard drives, chat apps, and generic cloud tools makes finding the right asset impossible."
    },
    {
      icon: Video,
      title: "Slow Editing",
      desc: "Manual editing workflows kill your team's productivity and delay your content calendar by weeks."
    },
    {
      icon: Users,
      title: "Version Chaos",
      desc: "No shared workspace means endless feedback loops, duplicate files, and someone asking 'is this final_v4?'"
    }
  ];

  return (
    <section className="py-24 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Creating content shouldn't be this complicated.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Traditional DAMs are just digital lockers. Video editors are too complex. You need a system that does both.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors duration-300 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <problem.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">{problem.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      title: "Centralize, structure, and instantly find your media",
      tag: "Digital Asset Management",
      icon: FolderTree,
      bullets: ["Smart search & auto-tagging", "Custom folder hierarchies", "Support for RAW, 4K, and 3D files"],
      align: "left"
    },
    {
      title: "Generate images and content instantly",
      tag: "AI Content Creation",
      icon: Sparkles,
      bullets: ["Text-to-image generation", "Context-aware copy suggestions", "Auto-enhance image quality"],
      align: "right"
    },
    {
      title: "Turn long videos into short-form content",
      tag: "Video Transformation",
      icon: Scissors,
      bullets: ["Auto-detect viral moments", "Burn-in dynamic captions", "1-click export for TikTok & Reels"],
      align: "left"
    },
    {
      title: "Work together like a shared workspace",
      tag: "Collaboration",
      icon: MessageSquare,
      bullets: ["Frame-accurate video comments", "Granular role-based access", "Shared brand asset libraries"],
      align: "right"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-32">
        {features.map((feature, i) => (
          <div key={i} className={cn("flex flex-col lg:flex-row items-center gap-16", feature.align === 'right' && "lg:flex-row-reverse")}>
            
            {/* Text Content */}
            <div className="flex-1 lg:w-1/2">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
                  <feature.icon className="w-4 h-4" />
                  {feature.tag}
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
                  {feature.title}
                </h2>
                <ul className="space-y-4 mb-8">
                  {feature.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinelinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-lg">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            {/* Abstract UI Visual */}
            <div className="flex-1 lg:w-1/2 w-full">
              <FadeIn delay={0.2}>
                <div className="aspect-[4/3] rounded-2xl glass-panel relative overflow-hidden flex items-center justify-center group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent z-0"></div>
                  {/* Decorative elements representing the feature */}
                  <div className="relative z-10 w-3/4 h-3/4 bg-background/50 rounded-xl border border-white/5 shadow-xl flex flex-col p-4 gap-4 overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="h-6 w-1/3 bg-white/10 rounded-md"></div>
                    <div className="flex-1 flex gap-4">
                      <div className="w-1/3 h-full bg-white/5 rounded-lg"></div>
                      <div className="w-2/3 h-full flex flex-col gap-2">
                        <div className="h-2/3 w-full bg-white/10 rounded-lg"></div>
                        <div className="h-1/3 w-full bg-primary/20 rounded-lg border border-primary/30"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Workflow() {
  const steps = [
    { icon: UploadCloud, title: "Upload", desc: "Drop your raw files" },
    { icon: Cpu, title: "AI Analysis", desc: "Auto-tags & transcribes" },
    { icon: Scissors, title: "Edit", desc: "Refine on timeline" },
    { icon: Sparkles, title: "Transform", desc: "Generate formats" },
    { icon: Share2, title: "Publish", desc: "Send to channels" },
  ];

  return (
    <section className="py-24 bg-card/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn mb-16>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            From raw media to published content — in minutes.
          </h2>
          <p className="text-muted-foreground text-lg">A streamlined pipeline built for modern speeds.</p>
        </FadeIn>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-0"></div>

          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1} className="relative z-10 flex flex-col items-center w-full md:w-1/5 mb-8 md:mb-0">
              <div className="w-24 h-24 rounded-2xl bg-background border border-border flex items-center justify-center shadow-xl shadow-black/50 mb-6 group hover:-translate-y-2 transition-transform duration-300">
                <step.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
              <p className="text-sm text-muted-foreground text-center px-4">{step.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      quote: "Yettey cut our content production time in half. The AI clipping tools are genuinely incredible, finding moments I would have missed manually.",
      name: "Sarah Jenkins",
      role: "Head of Content at CreativeCo",
      initials: "SJ"
    },
    {
      quote: "Finally, a DAM that actually understands modern marketing workflows. Searching for assets used to take hours, now it takes seconds.",
      name: "Marcus Thorne",
      role: "Marketing Director",
      initials: "MT"
    },
    {
      quote: "From raw footage to 5 different social clips in under 10 minutes. This is the future of content creation for lean teams.",
      name: "Lisa Wei",
      role: "Founder at Studio44",
      initials: "LW"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Loved by modern content teams
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 rounded-2xl bg-card border border-border h-full flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-foreground mb-8 flex-grow leading-relaxed">
                  "{review.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-lg border border-primary/30">
                    {review.initials}
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground">{review.name}</h5>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const faqs = [
    {
      q: "What exactly is Yettey?",
      a: "Yettey is an AI-powered Digital Asset Management (DAM) platform. It doesn't just store your files; it analyzes them, tags them automatically, and provides AI tools to transform long-form media into short-form content directly within the platform."
    },
    {
      q: "How does the AI work?",
      a: "When you upload media, our AI models analyze the audio and visual elements to generate searchable metadata. For video transformation, it identifies engaging moments, crops to vertical formats, and generates dynamic subtitles automatically."
    },
    {
      q: "Who is Yettey built for?",
      a: "Yettey is designed for marketing teams, content creators, and digital agencies who handle large volumes of media and need to quickly repurpose assets across different channels without relying on complex video editing software."
    },
    {
      q: "How is pricing structured?",
      a: "We offer simple, usage-based tiers. Our Starter plan is perfect for individual creators, while our Pro and Enterprise plans offer advanced collaboration features, custom AI model training, and increased storage/export limits."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-card/30 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div 
                className={cn(
                  "border rounded-xl overflow-hidden transition-colors duration-300",
                  openIndex === i ? "bg-card border-primary/30 shadow-lg shadow-primary/5" : "bg-transparent border-border hover:border-white/20"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                >
                  <span className="font-semibold text-lg text-foreground">{faq.q}</span>
                  <ChevronDown className={cn("w-5 h-5 text-muted-foreground transition-transform duration-300", openIndex === i ? "rotate-180 text-primary" : "")} />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}

function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/10"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            Turn your media into content today.
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join thousands of teams shipping better content, faster. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg shadow-[0_0_40px_rgba(124,58,237,0.3)] hover:shadow-[0_0_60px_rgba(124,58,237,0.5)] hover:-translate-y-1 transition-all duration-300">
              Get Started for Free
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-card hover:bg-white/5 text-foreground font-semibold text-lg border border-border transition-all duration-300">
              Book a Demo
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Features />
        <Workflow />
        <Testimonials />
        <Faq />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
