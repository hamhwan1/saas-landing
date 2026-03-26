import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">
          Yettey Terms of Use
        </h1>
        <p className="text-sm text-muted-foreground mb-4">Last updated: 7 May 2025</p>

        <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-4 mb-12">
          <p className="text-sm text-amber-400 leading-relaxed">
            <span className="font-semibold">IMPORTANT – READ CAREFULLY: </span>
            By creating an account, accessing, or using Yettey, you agree to these Terms and our{" "}
            <Link href="/privacy" className="underline hover:text-amber-300 transition-colors">
              Privacy Policy
            </Link>
            . If you disagree, do not use the Service.
          </p>
        </div>

        <div className="space-y-10">

          <Section title="1. Service Description">
            <p>
              Yettey enables you to upload, store, organize, and share digital files ("Assets") in
              the cloud, with metadata, collaboration tools, and integrations.
            </p>
          </Section>

          <Section title="2. Eligibility">
            <ul>
              <li>Must be at least 13 years old (or higher local age of digital consent).</li>
              <li>Minors must have parental or guardian permission.</li>
              <li>You must have legal capacity to contract and not be barred by law.</li>
            </ul>
          </Section>

          <Section title="3. Account Registration & Security">
            <ul>
              <li>Provide accurate, complete, and current information; keep it updated.</li>
              <li>Safeguard your password and OAuth credentials.</li>
              <li>
                Notify us immediately at{" "}
                <a href="mailto:support@cloudike.io" className="text-primary hover:underline">
                  support@cloudike.io
                </a>{" "}
                of unauthorized use or breaches.
              </li>
              <li>You are liable for account activities, except when caused by our negligence.</li>
            </ul>
          </Section>

          <Section title="4. User Content">
            <p>
              All "User Content" (Assets, text, graphics, etc.) you upload remains your property.
            </p>
          </Section>

          <Section title="5. License to CLOUDIKE Inc.">
            <p>
              You grant CLOUDIKE and subprocessors a worldwide, non-exclusive, royalty-free license
              to host, process, transmit, display, and back up your User Content solely to operate
              and improve the Service, per our Privacy Policy.
            </p>
          </Section>

          <Section title="6. Prohibited Conduct">
            <p>You must not:</p>
            <ul className="mt-2">
              <li>Upload/share illegal, infringing, defamatory, or unlawful content.</li>
              <li>Violate or attempt to violate Service security.</li>
              <li>Reverse engineer, decompile, or disassemble the Service.</li>
              <li>Use the Service for spam or malware distribution.</li>
              <li>Share login credentials or bypass usage limits.</li>
              <li>Disrupt the Service or servers.</li>
              <li>Violate export control or sanctions laws.</li>
            </ul>
          </Section>

          <Section title="7. Intellectual Property">
            <p>
              Except for your User Content, all software, logos, trademarks, and materials
              ("CLOUDIKE Materials") are owned or licensed by CLOUDIKE and are protected by law.
              No ownership rights are transferred. Trademarks require our prior written consent.
            </p>
          </Section>

          <Section title="8. Fees & Payment">
            <ul>
              <li>Pricing and storage limits are on our website or order forms.</li>
              <li>By subscribing, you authorize charges to your payment method.</li>
              <li>Fees are non-refundable except as required by law or stated.</li>
              <li>Fee changes require 30 days' notice.</li>
            </ul>
          </Section>

          <Section title="9. Third-Party Services">
            <p>
              Integrations (e.g., Google OAuth) are subject to third-party terms. CLOUDIKE isn't
              responsible for those services.
            </p>
          </Section>

          <Section title="10. Privacy">
            <p>
              Your data usage is governed by the{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Yettey Privacy Policy
              </Link>
              , which you acknowledge having read.
            </p>
          </Section>

          <Section title="11. Termination & Suspension">
            <p>We may suspend or terminate access if you:</p>
            <ul className="mt-2">
              <li>Breach these Terms</li>
              <li>Are legally required to be suspended</li>
              <li>Pose an emergency risk to Service integrity</li>
            </ul>
            <p className="mt-3">
              You may cancel your account anytime in-app. Upon termination, your license ends;
              sections 7 and 12–15 survive.
            </p>
          </Section>

          <Section title="12. Disclaimers">
            <p className="font-semibold text-foreground">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE."
            </p>
            <p className="mt-3">
              CLOUDIKE DISCLAIMS ALL WARRANTIES — express or implied — including merchantability,
              fitness for a particular purpose, and non-infringement. We do not guarantee
              uninterrupted, error-free, or fully secure operation.
            </p>
          </Section>

          <Section title="13. Limitation of Liability">
            <p>
              To the fullest extent allowed by law, CLOUDIKE and its affiliates are not liable for
              indirect, incidental, special, consequential, or punitive damages, or any loss of
              profits, data, or goodwill — even if advised of the possibility.
            </p>
            <p className="mt-3">
              Aggregate liability capped at the greater of USD 100 or amounts paid to CLOUDIKE in
              the preceding 12 months.
            </p>
            <p className="mt-3 text-sm">
              (Some jurisdictions limit warranty exclusions; liability then limited to the maximum
              permitted.)
            </p>
          </Section>

          <Section title="14. Indemnification">
            <p>
              You agree to indemnify and hold harmless CLOUDIKE and affiliates from any claim,
              loss, or expense (including attorneys' fees) arising from:
            </p>
            <ul className="mt-2">
              <li>Your User Content</li>
              <li>Your breach of these Terms</li>
              <li>Your violation of laws or third-party rights</li>
            </ul>
          </Section>

          <Section title="15. Governing Law & Dispute Resolution">
            <ul>
              <li>
                Governed by the laws of the Republic of Korea (no conflict-of-law rules).
              </li>
              <li>
                Exclusive jurisdiction: Seoul Central District Court (unless mandatory venue
                differs).
              </li>
              <li>
                EU/EEA consumers may use the EU online dispute-resolution platform:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </li>
            </ul>
          </Section>

          <Section title="16. Modifications">
            <p>
              We may update these Terms occasionally. Revised Terms will show a new "Last updated"
              date, with 14 days' notice for material changes. Continued use after effective date
              constitutes acceptance.
            </p>
          </Section>

          <Section title="17. Miscellaneous">
            <ul>
              <li><span className="font-medium text-foreground">Entire Agreement:</span> Supersedes prior agreements.</li>
              <li><span className="font-medium text-foreground">Severability:</span> Unenforceable provisions don't affect others.</li>
              <li><span className="font-medium text-foreground">Assignment:</span> CLOUDIKE may assign; you may not without consent.</li>
              <li><span className="font-medium text-foreground">Force Majeure:</span> No liability for causes beyond reasonable control.</li>
              <li><span className="font-medium text-foreground">No Waiver:</span> Failure to enforce a right doesn't waive future enforcement.</li>
            </ul>
          </Section>

          <Section title="18. Contact">
            <p className="font-medium text-foreground mb-2">CLOUDIKE Inc.</p>
            <ul>
              <li>
                <span className="font-medium text-foreground">Email:</span>{" "}
                <a href="mailto:support@cloudike.io" className="text-primary hover:underline">
                  support@cloudike.io
                </a>
              </li>
              <li><span className="font-medium text-foreground">Phone:</span> +82 2 1811-9881</li>
              <li>
                <span className="font-medium text-foreground">Address:</span>{" "}
                경기 성남시 수정구 창업로 43, 글로벌비즈센터 B동 809호, CLOUDIKE Inc.
              </li>
            </ul>
          </Section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display font-bold text-xl text-foreground mb-4 pb-2 border-b border-border">
        {title}
      </h2>
      <div className="text-muted-foreground leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_li]:pl-1">
        {children}
      </div>
    </section>
  );
}
