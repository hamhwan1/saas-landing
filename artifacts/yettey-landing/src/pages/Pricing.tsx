import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Plus, Minus } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

/* ─── Data ─────────────────────────────────────────────── */

const whyPayCards = [
  {
    icon: "⏱️",
    title: "Save hours of editing",
    desc: "Automatically turn long videos into short-form content",
  },
  {
    icon: "🚀",
    title: "Publish faster",
    desc: "Create, edit, and distribute content in one workflow",
  },
  {
    icon: "📈",
    title: "Scale content production",
    desc: "Produce 10x more content with the same effort",
  },
];

interface Plan {
  name: string;
  badge?: string;
  price: string;
  originalPrice?: string;
  cta: string;
  hint?: string;
  label: string;
  features: string[];
  highlighted: boolean;
}

const plans: Plan[] = [
  {
    name: "Free",
    price: "Free",
    cta: "Start Free",
    label: "Perfect for getting started",
    highlighted: false,
    features: [
      "200 Credits",
      "1 Project",
      "1 User",
      "10GB Traffic / Monthly",
      "10GB Storage",
      "Generate up to 2 images",
    ],
  },
  {
    name: "Starter",
    price: "$49",
    originalPrice: "$64",
    cta: "Start Creating",
    hint: "≈ 10 videos / month",
    label: "For individuals starting content creation",
    highlighted: false,
    features: [
      "1,000 Credits",
      "3 Projects",
      "2 Users",
      "50GB Traffic / Monthly",
      "50GB Storage",
    ],
  },
  {
    name: "Growth",
    badge: "🔥 Most Popular",
    price: "$99",
    originalPrice: "$129",
    cta: "Start Creating",
    hint: "≈ 40 videos / month · Save 20% vs Starter",
    label: "",
    highlighted: true,
    features: [
      "4,000 Credits",
      "10 Projects",
      "5 Users",
      "200GB Traffic / Monthly",
      "200GB Storage",
    ],
  },
  {
    name: "Pro",
    price: "$249",
    originalPrice: "$329",
    cta: "Start Creating",
    hint: "≈ 100+ videos / month",
    label: "For high-volume teams",
    highlighted: false,
    features: [
      "10,000 Credits",
      "Unlimited Projects",
      "10 Users",
      "500GB Traffic / Monthly",
      "500GB Storage",
    ],
  },
];

const creditPacks = [
  {
    name: "Credits Pack",
    price: "$20",
    credits: "700 Credits",
    validity: "valid for 3 months",
  },
  {
    name: "Credits Mega Pack",
    price: "$40",
    credits: "1,400 Credits",
    validity: "valid for 3 months",
  },
];

const faqs = [
  {
    q: "What are the usage limits for Yettey?",
    a: "Usage limits depend on your plan. Each plan includes a set number of credits, storage, and traffic. You can always top up with additional credit packs.",
  },
  {
    q: "What are credits in Yettey?",
    a: "Credits are the currency used within Yettey for generating content. 1 short-form video costs approximately 100 credits, and 1 AI image costs approximately 10 credits.",
  },
  {
    q: "What benefits does this plan offer?",
    a: "Each plan gives you access to Yettey's full suite of AI-powered tools including digital asset management, video transformation, and collaborative workflows — scaled to your team size.",
  },
  {
    q: "Do unused credits roll over?",
    a: "Monthly plan credits do not roll over. However, credits purchased as add-on packs are valid for 3 months from the date of purchase.",
  },
  {
    q: "How is usage calculated?",
    a: "Usage is calculated based on credits consumed during content generation. Storage and traffic are measured independently per plan.",
  },
  {
    q: "What happens if I run out of credits?",
    a: "If you run out of credits, content generation will pause until you top up. You can purchase additional credit packs at any time without upgrading your plan.",
  },
  {
    q: "Can I check my remaining credits?",
    a: "Yes. Your remaining credits are always visible in the dashboard under Account > Usage.",
  },
  {
    q: "Can I change my subscription plan?",
    a: "Yes. You can upgrade or downgrade your plan at any time. Changes take effect at the start of the next billing cycle.",
  },
  {
    q: "Is Yettey scalable?",
    a: "Absolutely. Yettey is built to scale from solo creators to enterprise teams. If you need custom limits, contact us for an enterprise quote.",
  },
];

/* ─── Sub-components ─────────────────────────────────────── */

function PlanCard({ plan, billing, index }: { plan: Plan; billing: "monthly" | "yearly"; index: number }) {
  const yearlyDiscount = billing === "yearly" ? 0.8 : 1;
  const priceNum = parseInt(plan.price.replace(/[^0-9]/g, ""), 10);
  const displayPrice =
    plan.price === "Free"
      ? "Free"
      : `$${Math.round(priceNum * yearlyDiscount)}`;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      custom={index}
      viewport={{ once: true }}
      className={cn(
        "relative rounded-2xl border p-8 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl",
        plan.highlighted
          ? "bg-gradient-to-b from-primary/20 to-primary/5 border-primary shadow-xl shadow-primary/20"
          : "bg-card border-border hover:border-primary/30"
      )}
    >
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-lg shadow-primary/30 whitespace-nowrap">
            {plan.badge}
          </span>
        </div>
      )}

      <div>
        <p className="text-sm font-medium text-muted-foreground mb-1">{plan.name}</p>
        <div className="flex items-end gap-2 mb-1">
          <span className="text-4xl font-display font-bold text-foreground">{displayPrice}</span>
          {plan.price !== "Free" && (
            <span className="text-base text-muted-foreground mb-1">/mo</span>
          )}
        </div>
        {plan.originalPrice && billing === "monthly" && (
          <p className="text-sm text-muted-foreground line-through">{plan.originalPrice}</p>
        )}
        {billing === "yearly" && plan.price !== "Free" && (
          <p className="text-xs text-primary font-medium">연간 결제 시 20% 절약</p>
        )}
        {plan.hint && (
          <p className="text-xs text-muted-foreground mt-2">{plan.hint}</p>
        )}
        {plan.label && (
          <p className="text-xs text-muted-foreground mt-1">{plan.label}</p>
        )}
      </div>

      <button
        className={cn(
          "w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200",
          plan.highlighted
            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
            : "bg-white/5 text-foreground border border-border hover:bg-white/10 hover:border-primary/40"
        )}
      >
        {plan.cta}
      </button>

      <div className="flex flex-col gap-3">
        {plan.features.map((f) => (
          <div key={f} className="flex items-center gap-3">
            <div className={cn(
              "w-4 h-4 rounded-full flex items-center justify-center shrink-0",
              plan.highlighted ? "bg-primary/20 text-primary" : "bg-white/10 text-muted-foreground"
            )}>
              <Check className="w-2.5 h-2.5" />
            </div>
            <span className="text-sm text-muted-foreground">{f}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      custom={index * 0.5}
      viewport={{ once: true }}
      className="border-b border-border last:border-0"
    >
      <button
        className="w-full py-5 flex items-center justify-between gap-4 text-left group"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{q}</span>
        <span className="shrink-0 w-5 h-5 rounded-full border border-border flex items-center justify-center text-muted-foreground">
          {open ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
        </span>
      </button>
      <AnimateHeight open={open}>
        <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
      </AnimateHeight>
    </motion.div>
  );
}

function AnimateHeight({ open, children }: { open: boolean; children: React.ReactNode }) {
  return (
    <motion.div
      initial={false}
      animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
      transition={{ duration: 0.25 }}
      style={{ overflow: "hidden" }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Page ───────────────────────────────────────────────── */

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero ─────────────────────────────── */}
      <section className="relative pt-40 pb-20 text-center overflow-hidden">
        {/* glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-6">
              <Zap className="w-3 h-3" />
              Pricing
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-5 leading-tight"
          >
            Simple pricing.{" "}
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Built for creators.
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-lg text-muted-foreground mb-10"
          >
            Start free. Scale when you grow.
          </motion.p>

          {/* Monthly / Yearly toggle */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="inline-flex items-center gap-1 p-1 rounded-xl bg-card border border-border">
            <button
              onClick={() => setBilling("monthly")}
              className={cn(
                "px-5 py-2 rounded-lg text-sm font-medium transition-all",
                billing === "monthly"
                  ? "bg-primary text-primary-foreground shadow"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={cn(
                "px-5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                billing === "yearly"
                  ? "bg-primary text-primary-foreground shadow"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Yearly
              <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full font-semibold">
                -20%
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Why Pay ──────────────────────────── */}
      <section className="py-12 max-w-5xl mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-5">
          {whyPayCards.map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }}
              className="rounded-2xl bg-card border border-border p-6 hover:border-primary/30 transition-colors"
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Pricing Cards ────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} billing={billing} index={i} />
          ))}
        </div>
      </section>

      {/* ── Credits Explanation ──────────────── */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl bg-card border border-border p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold text-foreground">What are credits?</h2>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Credits are used when generating content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 rounded-xl bg-white/5 border border-border p-4 flex items-center gap-3">
                <span className="text-2xl">🎬</span>
                <div>
                  <p className="text-sm font-semibold text-foreground">1 short-form video</p>
                  <p className="text-xs text-primary font-medium">≈ 100 credits</p>
                </div>
              </div>
              <div className="flex-1 rounded-xl bg-white/5 border border-border p-4 flex items-center gap-3">
                <span className="text-2xl">🖼️</span>
                <div>
                  <p className="text-sm font-semibold text-foreground">1 AI image</p>
                  <p className="text-xs text-primary font-medium">≈ 10 credits</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              You only pay for what you use.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── Credits Packs ────────────────────── */}
      <section className="py-12 max-w-4xl mx-auto px-4">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
            Need more credits?{" "}
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Top up anytime.
            </span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-5">
          {creditPacks.map((pack, i) => (
            <motion.div
              key={pack.name}
              variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }}
              className="rounded-2xl bg-card border border-border p-8 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-4"
            >
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{pack.name}</p>
                <p className="text-3xl font-display font-bold text-foreground">{pack.price}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-foreground">{pack.credits}</p>
                <p className="text-xs text-muted-foreground">{pack.validity}</p>
              </div>
              <button className="w-full py-3 rounded-xl text-sm font-semibold bg-white/5 border border-border hover:bg-primary/10 hover:border-primary/40 text-foreground transition-all duration-200">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────── */}
      <section className="py-16 max-w-3xl mx-auto px-4">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground">Everything you need to know about Yettey pricing.</p>
        </motion.div>
        <div className="bg-card border border-border rounded-2xl px-6 divide-y-0">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </section>

      {/* ── Final CTA ────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/10 rounded-full blur-[130px]" />
        </div>
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="relative max-w-2xl mx-auto px-4 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Start creating content{" "}
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              in minutes
            </span>
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">No editing skills required</p>
          <Link href="/">
            <button className="px-10 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-200">
              Start Free
            </button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
