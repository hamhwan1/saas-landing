import { UseCasePageLayout, UseCasePageData } from "@/components/use-cases/UseCasePageLayout";

const data: UseCasePageData = {
  badge: "For Teams",
  accentColor: "#10B981",
  heroTitle: "Work together",
  heroHighlight: "without the chaos.",
  heroSubtitle: "Centralize your assets, workflows, and collaboration in one place.",
  heroCta: "Start collaborating",
  heroCtaHref: "/pricing?plan=pro",

  problemTitle: "Your team is disconnected",
  problemPoints: [
    "Files are scattered across drives, Slack, and email",
    "No clear workflow — everyone does things differently",
    "Hard to collaborate efficiently across time zones",
  ],

  solutionTitle: "One workspace for everything",
  solutionDesc:
    "Bring your team, assets, and workflows together into a single platform — so everyone is always on the same page.",

  steps: [
    { icon: "📧", label: "Invite your team", desc: "Add teammates and assign roles — Admin, Editor, or Viewer — in seconds." },
    { icon: "🔗", label: "Share assets", desc: "Share projects, folders, or specific files with the right people." },
    { icon: "✏️", label: "Collaborate and edit", desc: "Leave comments, give feedback, and make changes in real time." },
    { icon: "📢", label: "Publish together", desc: "Approve and publish content directly from the shared workspace." },
  ],

  benefits: [
    "Centralized asset management",
    "Clear team workflows",
    "Better collaboration",
    "Faster execution",
  ],

  finalCtaTitle: "Start working together",
  finalCtaBtn: "Start collaborating",
  finalCtaHref: "/pricing?plan=pro",
};

export default function ForTeams() {
  return <UseCasePageLayout data={data} />;
}
