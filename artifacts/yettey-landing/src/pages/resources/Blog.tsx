import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

const categories = ["All", "AI Content", "Video Editing", "Social Media", "Product Updates"];

const posts = [
  {
    category: "Video Editing",
    title: "How to Turn Long Videos into Viral Shorts (Without Editing)",
    desc: "Discover how AI-powered tools can automatically detect your best moments and turn a 60-minute recording into 10 shareable clips — in minutes.",
    date: "March 20, 2026",
    readTime: "5 min read",
    emoji: "🎬",
    accent: "#7C3AED",
  },
  {
    category: "AI Content",
    title: "Best AI Tools for Content Creators in 2026",
    desc: "We tested 20+ AI tools so you don't have to. Here's what actually works for creators who want to produce more without burning out.",
    date: "March 15, 2026",
    readTime: "8 min read",
    emoji: "✨",
    accent: "#8B5CF6",
  },
  {
    category: "Social Media",
    title: "How to Create Viral Short-Form Videos (The Framework)",
    desc: "Short-form content has a formula. Learn the hook-body-CTA structure that top creators use to consistently hit millions of views.",
    date: "March 10, 2026",
    readTime: "6 min read",
    emoji: "📱",
    accent: "#F97316",
  },
  {
    category: "AI Content",
    title: "Content Marketing with AI: What Actually Works",
    desc: "AI won't replace your creative strategy — but it will 10× your output. Here's how smart marketers are using AI in their workflow right now.",
    date: "March 5, 2026",
    readTime: "7 min read",
    emoji: "🚀",
    accent: "#0EA5E9",
  },
  {
    category: "Video Editing",
    title: "Video Editing Automation: The Future Is Already Here",
    desc: "Manual video editing is becoming obsolete. We break down the automation trends that are changing how content teams work in 2026.",
    date: "February 28, 2026",
    readTime: "6 min read",
    emoji: "⚡",
    accent: "#10B981",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero ───────────────────────────── */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/8 rounded-full blur-[130px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-6">
              Blog
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-5 leading-tight"
          >
            Insights, tips, and{" "}
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              updates
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-lg text-muted-foreground"
          >
            Learn how to create more content, faster — with practical guides from the Yettey team.
          </motion.p>
        </div>
      </section>

      {/* ── Categories ─────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 mb-12">
        <motion.div
          variants={fadeUp} initial="hidden" animate="show" custom={3}
          className="flex items-center gap-2 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow shadow-primary/30"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* ── Post List ──────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((post, i) => (
            <motion.article
              key={post.title}
              variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }}
              className="rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 hover:-translate-y-1 transition-all duration-200 cursor-pointer group flex flex-col"
            >
              {/* Thumbnail */}
              <div
                className="h-44 flex items-center justify-center relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${post.accent}18, transparent)` }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{ background: `radial-gradient(circle at 70% 30%, ${post.accent}, transparent 60%)` }}
                />
                <span className="text-5xl relative z-10">{post.emoji}</span>
                <span
                  className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: `${post.accent}25`, color: post.accent }}
                >
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h2 className="font-display font-bold text-foreground text-lg leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{post.desc}</p>
                <div className="flex items-center justify-between pt-2 border-t border-border mt-auto">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── CTA ────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />
        </div>
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="relative max-w-2xl mx-auto px-4 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Ready to start creating?
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">Stop reading. Start creating your own content.</p>
          <Link href="/pricing">
            <button className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-200">
              Start creating your own content
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
