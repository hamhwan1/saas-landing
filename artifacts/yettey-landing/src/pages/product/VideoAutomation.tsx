import { ProductPageLayout, ProductPageData } from "@/components/product/ProductPageLayout";

const data: ProductPageData = {
  badge: "🔥 Video Automation",
  badgeColor: "#F97316",
  heroTitle: "Turn one long video into ",
  heroHighlight: "multiple viral clips.",
  heroDesc: "Generate multiple ready-to-post clips for Reels, Shorts, and TikTok — in minutes, not hours.",
  ctaText: "Start creating videos",
  ctaHref: "/pricing",
  whatItDoes:
    "Create multiple ready-to-post clips with captions — and publish 10x more content without editing.",
  accentColor: "#F97316",
  features: [
    {
      icon: "🎯",
      title: "Auto Highlight Detection",
      desc: "Automatically find the best moments in your video — ready to turn into clips.",
    },
    {
      icon: "📱",
      title: "Short-Form Generation",
      desc: "Turn one video into multiple ready-to-post clips for Reels, Shorts, and TikTok.",
    },
    {
      icon: "💬",
      title: "Subtitle & Caption Auto-Creation",
      desc: "Generate captions automatically — no syncing, no manual work.",
    },
    {
      icon: "🎬",
      title: "Scene-Based Editing",
      desc: "Edit clips visually with a simple timeline — no editing skills needed.",
    },
  ],
  steps: [
    { step: "📤", label: "Upload Video", desc: "Any long video works — podcasts, interviews, tutorials." },
    { step: "🤖", label: "AI Analysis", desc: "Highlights, hooks, and key scenes — automatically." },
    { step: "✂️", label: "Clip Generation", desc: "Ready-to-post clips optimized for every platform." },
    { step: "🚀", label: "Export", desc: "Download or post directly to your social channels." },
  ],
  previewLabel: "Video Editor Timeline",
  previewImage: "/images/video-automation-ui.png",
};

export default function VideoAutomation() {
  return <ProductPageLayout data={data} />;
}
