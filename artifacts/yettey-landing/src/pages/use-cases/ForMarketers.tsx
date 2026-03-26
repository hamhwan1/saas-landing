import { UseCasePageLayout, UseCasePageData } from "@/components/use-cases/UseCasePageLayout";

const data: UseCasePageData = {
  badge: "For Marketers",
  accentColor: "#0EA5E9",
  heroTitle: "Scale your content",
  heroHighlight: "without scaling your team.",
  heroSubtitle: "Automate content creation and asset management in one platform.",
  heroCta: "Start scaling",
  heroCtaHref: "/pricing?plan=pro",

  problemTitle: "Content production is expensive and slow",
  problemPoints: [
    "High video production costs eat into your budget",
    "Too many tools and workflows slowing everyone down",
    "Hard to maintain brand consistency across channels",
  ],

  solutionTitle: "All your content in one system",
  solutionDesc:
    "Manage assets, generate content, and distribute faster with AI-powered workflows — one platform replaces your entire content stack.",

  steps: [
    { icon: "📁", label: "Upload & organize assets", desc: "Centralize all brand assets, templates, and media in one library." },
    { icon: "✨", label: "Generate content with AI", desc: "Create on-brand visuals and videos at scale using AI tools." },
    { icon: "✏️", label: "Edit and refine", desc: "Review, tweak, and approve content without leaving the platform." },
    { icon: "📡", label: "Distribute across channels", desc: "Push finished content to every channel from a single dashboard." },
  ],

  benefits: [
    "Reduce production costs",
    "Increase content output",
    "Maintain brand consistency",
    "Speed up campaign execution",
  ],

  finalCtaTitle: "Scale your content production",
  finalCtaBtn: "Start scaling",
  finalCtaHref: "/pricing?plan=pro",
};

export default function ForMarketers() {
  return <UseCasePageLayout data={data} />;
}
