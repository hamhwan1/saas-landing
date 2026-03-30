import { ProductPageLayout, ProductPageData } from "@/components/product/ProductPageLayout";

const data: ProductPageData = {
  badge: "AI Creation",
  badgeColor: "#8B5CF6",
  heroTitle: "Create multiple assets",
  heroHighlight: " from a single prompt.",
  heroDesc: "Generate, refine, and export content — all in one place.",
  ctaText: "Start creating with AI",
  ctaHref: "/pricing",
  whatItDoes:
    "Yettey's AI Creation suite lets anyone produce professional-quality visuals without design skills. Type a prompt, get a result — then refine it in one click.",
  accentColor: "#8B5CF6",
  features: [
    {
      icon: "🎨",
      title: "AI Image Generation",
      desc: "Turn a text prompt into a high-quality image in seconds. Multiple styles, ratios, and resolutions.",
    },
    {
      icon: "✂️",
      title: "Background Removal",
      desc: "Remove or replace image backgrounds instantly — no Photoshop required.",
    },
    {
      icon: "🔼",
      title: "Upscale & Enhancement",
      desc: "Increase image resolution up to 4× and sharpen details with one click.",
    },
    {
      icon: "✏️",
      title: "Prompt-Based Editing",
      desc: "Describe changes in plain text and watch your image update in real time.",
    },
  ],
  steps: [
    { step: "💬", label: "Input", desc: "Type a prompt or upload a reference image to get started." },
    { step: "✨", label: "Generate", desc: "AI produces multiple variations in seconds." },
    { step: "🖊️", label: "Edit", desc: "Refine with prompts, crop, upscale, or swap backgrounds." },
    { step: "⬇️", label: "Download", desc: "Export in any format and push directly to your asset library." },
  ],
  previewLabel: "AI Transform Studio",
  previewImage: "/images/ai-creation-ui.png",
};

export default function AiCreation() {
  return <ProductPageLayout data={data} />;
}
