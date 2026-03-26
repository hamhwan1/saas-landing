import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, ChevronDown, ChevronUp, MessageCircle, Zap, CreditCard, Video, Sparkles, Users } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

const helpCategories = [
  { icon: Zap, label: "Getting Started", color: "#7C3AED", count: 8 },
  { icon: CreditCard, label: "Pricing & Billing", color: "#0EA5E9", count: 6 },
  { icon: Sparkles, label: "Credits", color: "#F97316", count: 5 },
  { icon: Video, label: "Video Creation", color: "#EC4899", count: 7 },
  { icon: Sparkles, label: "AI Features", color: "#8B5CF6", count: 6 },
  { icon: Users, label: "Team & Sharing", color: "#10B981", count: 4 },
];

const faqs = [
  {
    category: "Credits",
    q: "What are credits?",
    a: "Credits are Yettey's internal currency for generating content. Every time you create a video clip, AI image, or other generated content, credits are deducted from your balance. 1 short-form video ≈ 100 credits · 1 AI image ≈ 10 credits.",
  },
  {
    category: "Video Creation",
    q: "How do I create videos?",
    a: "Upload any long-form video (mp4, mov, etc.) to your project. Yettey's AI will automatically analyze the content, detect highlights, and generate short-form clips. You can then review, trim, add captions, and export each clip individually.",
  },
  {
    category: "Pricing & Billing",
    q: "How does billing work?",
    a: "Yettey uses monthly subscription billing. Your plan renews automatically on the same date each month. Credits reset every billing cycle. You can also purchase additional credit packs at any time that last 3 months.",
  },
  {
    category: "Pricing & Billing",
    q: "Can I upgrade my plan?",
    a: "Yes — you can upgrade or downgrade your plan at any time from your Account Settings. Upgrades take effect immediately. Downgrades take effect at the start of your next billing cycle.",
  },
  {
    category: "Team & Sharing",
    q: "How do I invite team members?",
    a: "Go to Settings → Team → Invite Members. Enter your teammate's email address and select their role (Admin, Editor, or Viewer). They'll receive an email invitation to join your workspace.",
  },
  {
    category: "Getting Started",
    q: "How do I get started with Yettey?",
    a: "Sign up for a free account — no credit card required. You'll receive 200 free credits to try out the platform. Upload a video or image to see Yettey's AI features in action right away.",
  },
  {
    category: "Credits",
    q: "What happens if I run out of credits?",
    a: "Content generation will pause until you top up. You can purchase a Credits Pack (₩20,000 / 700 credits) or Credits Mega Pack (₩40,000 / 1,400 credits) anytime without changing your plan.",
  },
  {
    category: "AI Features",
    q: "What AI features does Yettey offer?",
    a: "Yettey includes: AI video highlight detection & short-form clip generation, AI image generation from text prompts, background removal, image upscaling, and smart asset tagging for your media library.",
  },
];

function FaqItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeUp} initial="hidden" whileInView="show" custom={index * 0.4} viewport={{ once: true }}
      className="border-b border-border last:border-0"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full py-5 flex items-start justify-between gap-4 text-left group"
      >
        <div>
          <span className="text-xs font-semibold text-primary/70 mb-1 block">{item.category}</span>
          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
            {item.q}
          </span>
        </div>
        <span className="mt-1 shrink-0 w-5 h-5 rounded-full border border-border flex items-center justify-center text-muted-foreground">
          {open ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ overflow: "hidden" }}
      >
        <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
      </motion.div>
    </motion.div>
  );
}

export default function HelpCenter() {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? faqs.filter(
        (f) =>
          f.q.toLowerCase().includes(query.toLowerCase()) ||
          f.a.toLowerCase().includes(query.toLowerCase())
      )
    : faqs;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero + Search ───────────────────── */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/8 rounded-full blur-[130px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-6">
              <MessageCircle className="w-3 h-3" />
              Help Center
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-5 leading-tight"
          >
            How can we{" "}
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              help?
            </span>
          </motion.h1>

          {/* Search */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="relative max-w-xl mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-4 rounded-2xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Categories ─────────────────────── */}
      {!query && (
        <section className="max-w-4xl mx-auto px-4 mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {helpCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.button
                  key={cat.label}
                  variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }}
                  className="rounded-2xl bg-card border border-border p-5 flex items-start gap-4 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 text-left group"
                  onClick={() => setQuery(cat.label)}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${cat.color}18` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: cat.color }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {cat.label}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{cat.count} articles</p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </section>
      )}

      {/* ── FAQ List ───────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-display font-bold text-foreground">
            {query ? `Results for "${query}"` : "Frequently Asked Questions"}
          </h2>
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Clear search
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl bg-card border border-border p-12 text-center">
            <p className="text-muted-foreground text-sm mb-4">No results found for "{query}"</p>
            <button
              onClick={() => setQuery("")}
              className="text-sm font-medium text-primary hover:underline"
            >
              Browse all questions →
            </button>
          </div>
        ) : (
          <div className="bg-card border border-border rounded-2xl px-6">
            {filtered.map((faq, i) => (
              <FaqItem key={faq.q} item={faq} index={i} />
            ))}
          </div>
        )}
      </section>

      {/* ── Contact CTA ────────────────────── */}
      <section className="py-20 max-w-4xl mx-auto px-4">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl bg-card border border-border p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground text-lg">Still need help?</h3>
              <p className="text-sm text-muted-foreground">Our team typically responds within a few hours.</p>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap">
            Contact support
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
