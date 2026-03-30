import { ProductPageLayout, ProductPageData } from "@/components/product/ProductPageLayout";

const data: ProductPageData = {
  badge: "Team Collaboration",
  badgeColor: "#10B981",
  heroTitle: "Work on content together",
  heroHighlight: "— without switching tools.",
  heroDesc: "Invite your team, collaborate in real-time, and ship content faster — without Slack, email, or chaos.",
  ctaText: "Start collaborating",
  ctaHref: "/pricing",
  whatItDoes:
    "All your content, feedback, and team workflows — in one place. No more Slack threads, emails, or version confusion.",
  accentColor: "#10B981",
  features: [
    {
      icon: "👥",
      title: "Multi-User Workspace",
      desc: "Work together in real time with your team.",
    },
    {
      icon: "🔐",
      title: "Role & Permission Control",
      desc: "Work together in real time with your team.",
    },
    {
      icon: "📁",
      title: "Shared Assets & Projects",
      desc: "Access all files and projects in one shared workspace.",
    },
    {
      icon: "💬",
      title: "Comment & Feedback",
      desc: "Leave feedback directly on assets — no more back-and-forth.",
    },
  ],
  steps: [
    { step: "📧", label: "Invite", desc: "Invite your team in seconds." },
    { step: "🔗", label: "Share", desc: "Share assets and projects instantly." },
    { step: "✏️", label: "Edit", desc: "Work together and leave feedback in real time." },
    { step: "📢", label: "Publish", desc: "Export or publish content faster." },
  ],
  previewLabel: "Team Workspace Dashboard",
};

export default function TeamCollaboration() {
  return <ProductPageLayout data={data} />;
}
