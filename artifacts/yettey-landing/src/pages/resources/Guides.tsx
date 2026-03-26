import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const guides = [
  {
    emoji: "🎬",
    accent: "#F97316",
    tag: "Video Automation",
    title: "Create short-form videos in minutes",
    desc: "Learn how to upload a long video, let Yettey's AI detect the best moments, and export multiple short-form clips ready to post on Reels, Shorts, and TikTok.",
    steps: ["Upload your video", "AI detects highlights", "Export clips"],
    outcome: "Go from 1 hour of footage to 10 clips — in under 5 minutes.",
  },
  {
    emoji: "🖼️",
    accent: "#8B5CF6",
    tag: "AI Creation",
    title: "Generate AI images for social media",
    desc: "Discover how to use Yettey's AI image generator to create on-brand visuals, remove backgrounds, and upscale images — no design skills needed.",
    steps: ["Write a prompt", "Generate variations", "Edit & export"],
    outcome: "Produce a week of social media visuals in 30 minutes.",
  },
  {
    emoji: "📁",
    accent: "#7C3AED",
    tag: "Asset Management",
    title: "Organize your media with DAM",
    desc: "Set up your digital asset library so every file is findable in seconds. Learn smart folders, AI tagging, and how to eliminate duplicate assets.",
    steps: ["Upload & tag assets", "Build collections", "Search instantly"],
    outcome: "Never lose a file again — find anything in under 10 seconds.",
  },
  {
    emoji: "👥",
    accent: "#10B981",
    tag: "Team Collaboration",
    title: "Build a content workflow with your team",
    desc: "Walk through how to invite your team, set permissions, create a shared asset library, and build a repeatable publish workflow from scratch.",
    steps: ["Invite teammates", "Assign roles", "Build your workflow"],
    outcome: "Cut back-and-forth by 80% and ship content twice as fast.",
  },
];

export default function Guides() {
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
              <BookOpen className="w-3 h-3" />
              Guides
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-5 leading-tight"
          >
            Learn how to create content{" "}
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              faster with Yettey
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Step-by-step guides that show you exactly what's possible — and how to get there.
          </motion.p>
        </div>
      </section>

      {/* ── Guide List ─────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 pb-16 flex flex-col gap-6">
        {guides.map((guide, i) => (
          <motion.div
            key={guide.title}
            variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }}
            className="rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <div className="flex flex-col md:flex-row">
              {/* Left accent */}
              <div
                className="md:w-56 flex-shrink-0 flex flex-col items-center justify-center py-10 px-6 gap-3"
                style={{ background: `${guide.accent}12` }}
              >
                <span className="text-4xl">{guide.emoji}</span>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: `${guide.accent}25`, color: guide.accent }}
                >
                  {guide.tag}
                </span>
              </div>

              {/* Right content */}
              <div className="p-8 flex flex-col gap-4 flex-1">
                <h2 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                  {guide.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{guide.desc}</p>

                {/* Steps */}
                <div className="flex items-center gap-2 flex-wrap">
                  {guide.steps.map((step, si) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className="text-xs font-medium px-3 py-1 rounded-lg bg-white/5 border border-border text-muted-foreground">
                        {step}
                      </span>
                      {si < guide.steps.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-muted-foreground/40 shrink-0" />
                      )}
                    </span>
                  ))}
                </div>

                {/* Outcome */}
                <div
                  className="flex items-start gap-2 p-3 rounded-xl text-sm"
                  style={{ background: `${guide.accent}10`, borderLeft: `3px solid ${guide.accent}` }}
                >
                  <span className="text-xs font-medium" style={{ color: guide.accent }}>
                    Result: {guide.outcome}
                  </span>
                </div>

                <Link href="/pricing">
                  <button
                    className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 mt-1"
                    style={{
                      background: guide.accent,
                      boxShadow: `0 8px 24px ${guide.accent}30`,
                    }}
                  >
                    Read guide
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
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
            Ready to put this into practice?
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">Start using Yettey for free — no credit card required.</p>
          <Link href="/pricing">
            <button className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-200">
              Start free
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
