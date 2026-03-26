import { UseCasePageLayout, UseCasePageData } from "@/components/use-cases/UseCasePageLayout";

const data: UseCasePageData = {
  badge: "For Creators",
  accentColor: "#7C3AED",
  heroTitle: "Create more content.",
  heroHighlight: "In less time.",
  heroSubtitle: "Turn long videos into short-form content automatically with AI.",
  heroCta: "Start creating",
  heroCtaHref: "/pricing?plan=growth",

  problemTitle: "Content creation is slow and exhausting",
  problemPoints: [
    "Editing takes hours just to produce a single clip",
    "You miss viral moments buried in long recordings",
    "Hard to stay consistent when production is this slow",
  ],

  solutionTitle: "One video becomes multiple clips",
  solutionDesc:
    "Upload your content once and let AI generate multiple short-form videos ready to post — no editing skills required.",

  steps: [
    { icon: "📤", label: "Upload your video", desc: "Drop in any long-form video — podcast, stream, webinar, or vlog." },
    { icon: "🤖", label: "AI detects highlights", desc: "Our AI finds the most engaging moments and viral hooks automatically." },
    { icon: "✂️", label: "Generate short clips", desc: "Multiple platform-ready clips are created with captions in minutes." },
    { icon: "🚀", label: "Export and publish", desc: "Download or publish directly to your social channels instantly." },
  ],

  benefits: [
    "Save hours of editing time",
    "Create 10x more content",
    "Never miss viral moments",
    "Focus on creativity, not editing",
  ],

  finalCtaTitle: "Start creating content today",
  finalCtaBtn: "Start Free",
  finalCtaHref: "/pricing?plan=growth",
};

export default function ForCreators() {
  return <UseCasePageLayout data={data} />;
}
