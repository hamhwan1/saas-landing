import { ProductPageLayout, ProductPageData } from "@/components/product/ProductPageLayout";

const data: ProductPageData = {
  badge: "Team Collaboration",
  badgeColor: "#10B981",
  heroTitle: "Work together like",
  heroHighlight: "a shared workspace.",
  heroDesc: "Invite your team, share assets, leave feedback, and ship content — all in one place.",
  ctaText: "Start collaborating",
  ctaHref: "/pricing",
  whatItDoes:
    "Yettey turns solo workflows into team superpowers. Manage roles, share projects, and keep everyone aligned without the back-and-forth of emails and Slack threads.",
  accentColor: "#10B981",
  features: [
    {
      icon: "👥",
      title: "Multi-User Workspace",
      desc: "Invite unlimited team members and work on shared projects in real time.",
    },
    {
      icon: "🔐",
      title: "Role & Permission Control",
      desc: "Assign Admin, Editor, or Viewer roles to control exactly who can see and change what.",
    },
    {
      icon: "📁",
      title: "Shared Assets & Projects",
      desc: "One library, zero duplication. Everyone accesses the same up-to-date assets and projects.",
    },
    {
      icon: "💬",
      title: "Comment & Feedback",
      desc: "Pin comments directly on assets or video frames — keep feedback contextual and actionable.",
    },
  ],
  steps: [
    { step: "📧", label: "Invite", desc: "Invite teammates by email and assign their role in seconds." },
    { step: "🔗", label: "Share", desc: "Share projects, assets, or specific folders with your team." },
    { step: "✏️", label: "Edit", desc: "Collaborate in real time — changes sync instantly across the team." },
    { step: "📢", label: "Publish", desc: "Approve and publish finished content directly from the workspace." },
  ],
  previewLabel: "Team Workspace Dashboard",
};

export default function TeamCollaboration() {
  return <ProductPageLayout data={data} />;
}
