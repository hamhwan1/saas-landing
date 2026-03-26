import { ProductPageLayout, ProductPageData } from "@/components/product/ProductPageLayout";

const data: ProductPageData = {
  badge: "Asset Management",
  badgeColor: "#7C3AED",
  heroTitle: "Manage all your media",
  heroHighlight: "in one place.",
  heroDesc: "Store, organize, and find your files instantly — no more hunting through folders.",
  ctaText: "Start managing your assets",
  ctaHref: "/pricing",
  whatItDoes:
    "Yettey gives your team a single source of truth for every image, video, and document. Smart AI tagging means you find exactly what you need in seconds.",
  accentColor: "#7C3AED",
  features: [
    {
      icon: "🔍",
      title: "Smart Search (AI Tagging)",
      desc: "Automatically tags every asset so you can search by content, color, or context — not just filenames.",
    },
    {
      icon: "📂",
      title: "Folder & Collection System",
      desc: "Organize assets into projects, campaigns, or custom collections that make sense for your workflow.",
    },
    {
      icon: "🔄",
      title: "Duplicate Detection",
      desc: "Automatically detects and surfaces duplicate files to keep your library clean and storage costs low.",
    },
    {
      icon: "⚡",
      title: "Fast Preview",
      desc: "Stream-quality previews for images, videos, and documents without downloading the full file.",
    },
  ],
  steps: [
    { step: "📤", label: "Upload", desc: "Drag and drop any file type from your device or cloud storage." },
    { step: "🗂️", label: "Organize", desc: "AI auto-tags files; you assign them to projects or collections." },
    { step: "🔎", label: "Search", desc: "Find any asset in seconds using natural language or filters." },
    { step: "✅", label: "Use", desc: "Share, download, or push directly to your content workflow." },
  ],
  previewLabel: "Asset Library Dashboard",
};

export default function AssetManagement() {
  return <ProductPageLayout data={data} />;
}
