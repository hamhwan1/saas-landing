import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

export interface ProductFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface ProductStep {
  step: string;
  label: string;
  desc: string;
}

export interface ProductPageData {
  badge: string;
  badgeColor: string;
  heroTitle: string;
  heroHighlight: string;
  heroDesc: string;
  ctaText: string;
  ctaHref: string;
  whatItDoes: string;
  features: ProductFeature[];
  steps: ProductStep[];
  previewLabel?: string;
  previewImage?: string;
  accentColor: string;
}

export function ProductPageLayout({ data }: { data: ProductPageData }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero ───────────────────────────── */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/8 rounded-full blur-[140px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border"
              style={{ background: `${data.accentColor}18`, borderColor: `${data.accentColor}40`, color: data.accentColor }}
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
            className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
          >
            {data.heroDesc}
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3}>
            <Link href={data.ctaHref}>
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-200">
                {data.ctaText}
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── What it does ───────────────────── */}
      <section className="py-16 max-w-3xl mx-auto px-4 text-center">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl bg-card border border-border p-10 relative overflow-hidden"
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-20"
            style={{ background: data.accentColor }}
          />
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            What it does
          </p>
          <p className="text-xl md:text-2xl font-display font-semibold text-foreground leading-relaxed">
            {data.whatItDoes}
          </p>
        </motion.div>
      </section>

      {/* ── Key Features ───────────────────── */}
      <section className="py-16 max-w-5xl mx-auto px-4">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">Key Features</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {data.features.map((feat, i) => (
            <motion.div
              key={feat.title}
              variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }}
              className="rounded-2xl bg-card border border-border p-7 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 flex items-start gap-4"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-xl"
                style={{ background: `${data.accentColor}18` }}
              >
                {feat.icon}
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{feat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
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
          {/* connector line */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {data.steps.map((s, i) => (
            <motion.div
              key={s.step}
              variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }}
              className="flex flex-col items-center text-center gap-4 relative"
            >
              <div
                className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center border border-border bg-card relative z-10 shadow-sm"
              >
                <span className="text-xs font-bold text-primary mb-0.5">0{i + 1}</span>
                <span className="text-xl">{s.step}</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{s.label}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── UI Preview ─────────────────────── */}
      <section className="py-16 max-w-5xl mx-auto px-4">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card overflow-hidden shadow-2xl shadow-black/40"
        >
          {/* Mac-style title bar */}
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border bg-card/80">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="text-xs text-muted-foreground ml-3 font-medium">
              {data.previewLabel ?? "UI Preview"}
            </span>
          </div>

          {data.previewImage ? (
            /* Real screenshot */
            <div
              className="relative w-full overflow-hidden"
              style={{ background: `linear-gradient(160deg, ${data.accentColor}08, #0d0d14)` }}
            >
              <img
                src={data.previewImage}
                alt={data.previewLabel ?? "UI Preview"}
                className="w-full h-auto object-cover block"
                loading="lazy"
              />
            </div>
          ) : (
            /* Placeholder */
            <div
              className="h-64 md:h-80 flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${data.accentColor}10, transparent)` }}
            >
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl"
                  style={{ background: `${data.accentColor}20` }}
                >
                  {data.features[0]?.icon}
                </div>
                <p className="text-sm text-muted-foreground">
                  {data.previewLabel ?? "UI Preview"} — screenshot goes here
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </section>

      {/* ── Final CTA ──────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />
        </div>
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="relative max-w-2xl mx-auto px-4 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Join thousands of creators already using Yettey.
          </p>
          <Link href={data.ctaHref}>
            <button className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-200">
              {data.ctaText}
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
