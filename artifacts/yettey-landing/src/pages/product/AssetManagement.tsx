import { ProductPageLayout, ProductPageData } from "@/components/product/ProductPageLayout";

const data: ProductPageData = {
  badge: "Asset Management",
  badgeColor: "#7C3AED",
  heroTitle: "Work with all your media in one place.",
  heroHighlight: "in one place.",
  heroDesc: "Organize, find, and use your content — all in one system.",
  ctaText: "Start managing your assets",
  ctaHref: "/pricing",
  whatItDoes: (
    <>
      All your media — organized and ready to use.
      <br />
      Find anything in seconds.
    </>
  ),
  accentColor: "#7C3AED",
  features: [
    {
      icon: "🔍",
      title: "Smart Search",
      desc:
        <>
          Find anything instantly. 
          <br />
          Search your media by content, context, or keywords — not just filenames.
        </>,
    },
    {
      icon: "📂",
      title: "Organize your media",
      desc: "Organize your media your way Group files into projects, campaigns, or collections that fit your workflow.",
    },
    {
      icon: "🔄",
      title: "Duplicate",
      desc:
        <>
          Keep your library clean.
          <br />
          Detect duplicates automatically and reduce clutter.
        </>,
    },
    {
      icon: "⚡",
      title: "Preview",
      desc:
        <>
          Preview instantly.
          <br />
          View images, videos, and files without downloading anything.
        </>,
    },
  ],
  steps: [
    { step: "📤", label: "Upload", desc: "Bring all your media into one place." },
    { step: "🗂️", label: "Organize", desc: "Keep everything structured and easy to manage." },
    { step: "🔎", label: "Search", desc: "Find anything instantly when you need it." },
    { step: "✅", label: "Use", desc: "Share, download, or use your media anywhere." },
  ],
  previewLabel: "Asset Library Dashboard",
  previewImage: "/images/asset-management-ui.png",
};

export default function AssetManagement() {
  return <ProductPageLayout data={data} />;
}
