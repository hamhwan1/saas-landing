import { ProductPageLayout, ProductPageData } from "@/components/product/ProductPageLayout";

const data: ProductPageData = {
  badge: "🔥 Video Automation",
  badgeColor: "#F97316",
  heroTitle: "Turn long videos into",
  heroHighlight: "short-form content.",
  heroDesc: "Automatically convert full-length videos into viral Reels, Shorts, and TikToks — in minutes, not hours.",
  ctaText: "Start creating videos",
  ctaHref: "/pricing",
  whatItDoes:
    "Yettey's Video Automation engine analyzes your footage, detects the best moments, and outputs platform-ready clips with captions — so you can publish 10× more without editing manually.",
  accentColor: "#F97316",
  features: [
    {
      icon: "🎯",
      title: "Auto Highlight Detection",
      desc: "AI scans your video and identifies the most engaging moments — hooks, peaks, and key quotes.",
    },
    {
      icon: "📱",
      title: "Short-Form Generation",
      desc: "One upload creates multiple clips optimized for Reels, YouTube Shorts, and TikTok automatically.",
    },
    {
      icon: "💬",
      title: "Subtitle & Caption Auto-Creation",
      desc: "Accurate, styled subtitles generated and burned in automatically — no manual syncing.",
    },
    {
      icon: "🎬",
      title: "Scene-Based Editing",
      desc: "Split, reorder, and trim scenes with a visual timeline — no professional editing experience needed.",
    },
  ],
  steps: [
    { step: "📤", label: "Upload Video", desc: "Upload any long-form video — interviews, podcasts, webinars, tutorials." },
    { step: "🤖", label: "AI Analysis", desc: "Our engine detects highlights, emotions, and scene transitions automatically." },
    { step: "✂️", label: "Clip Generation", desc: "Multiple short clips are generated and formatted for each platform." },
    { step: "🚀", label: "Export", desc: "Download clips or publish directly to your connected social channels." },
  ],
  previewLabel: "Video Editor Timeline",
};

export default function VideoAutomation() {
  return <ProductPageLayout data={data} />;
}
