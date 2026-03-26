import { motion } from "framer-motion";
import { ArrowRight, Check, XCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

export interface UseCasePageData {
  badge: string;
  accentColor: string;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  heroCta: string;
  heroCtaHref: string;

  problemTitle: string;
  problemPoints: string[];

  solutionTitle: string;
  solutionDesc: string;

  steps: { icon: string; label: string; desc: string }[];

  benefits: string[];

  finalCtaTitle: string;
  finalCtaBtn: string;
  finalCtaHref: string;
}

export function UseCasePageLayout({ data }: { data: UseCasePageData }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero ───────────────────────────── */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[140px] opacity-30"
            style={{ background: data.accentColor }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border"
              style={{
                background: `${data.accentColor}18`,
                borderColor: `${data.accentColor}40`,
                color: data.accentColor,
              }}
            >
              {data.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
          >
            {data.heroTitle}{" "}
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              {data.heroHighlight}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed"
          >
            {data.heroSubtitle}
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3}>
            <Link href={data.heroCtaHref}>
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm text-white shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                style={{
                  background: data.accentColor,
                  boxShadow: `0 20px 40px ${data.accentColor}40`,
                }}
              >
                {data.heroCta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Problem ────────────────────────── */}
      <section className="py-16 max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-3">The Problem</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 leading-snug">
              {data.problemTitle}
            </h2>
            <div className="flex flex-col gap-4">
              {data.problemPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="w-3 h-3 text-red-400" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" custom={1} viewport={{ once: true }}
            className="rounded-2xl border p-8 relative overflow-hidden"
            style={{ borderColor: `${data.accentColor}30`, background: `${data.accentColor}08` }}
          >
            <div
              className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl pointer-events-none opacity-20"
              style={{ background: data.accentColor }}
            />
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: data.accentColor }}>
              The Solution
            </p>
            <h3 className="text-xl font-display font-bold text-foreground mb-4">{data.solutionTitle}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{data.solutionDesc}</p>
          </motion.div>
        </div>
      </section>

      {/* ── How it works ───────────────────── */}
      <section className="py-16 max-w-5xl mx-auto px-4">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">How it works</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {data.steps.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }}
              className="flex flex-col items-center text-center gap-4 relative"
            >
              <div className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center border border-border bg-card relative z-10 shadow-sm">
                <span className="text-xs font-bold text-primary mb-0.5">0{i + 1}</span>
                <span className="text-2xl">{s.icon}</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{s.label}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Key Benefits ───────────────────── */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl bg-card border border-border p-10"
        >
          <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">Key Benefits</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.benefits.map((b, i) => (
              <motion.div
                key={b}
                variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-border"
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: `${data.accentColor}20` }}
                >
                  <Check className="w-3.5 h-3.5" style={{ color: data.accentColor }} />
                </div>
                <p className="text-sm font-medium text-foreground">{b}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Final CTA ──────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-20"
            style={{ background: data.accentColor }}
          />
        </div>
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="relative max-w-2xl mx-auto px-4 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {data.finalCtaTitle}
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">No credit card required.</p>
          <Link href={data.finalCtaHref}>
            <button
              className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl font-semibold text-base text-white shadow-xl hover:-translate-y-1 transition-all duration-200"
              style={{
                background: data.accentColor,
                boxShadow: `0 20px 40px ${data.accentColor}40`,
              }}
            >
              {data.finalCtaBtn}
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
