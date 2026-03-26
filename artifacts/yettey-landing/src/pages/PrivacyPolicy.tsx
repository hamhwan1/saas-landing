import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPolicy() {
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
          Yettey Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: 7 May 2025</p>

        <div className="prose prose-invert prose-sm sm:prose-base max-w-none space-y-10">

          <Section title="1. Who We Are">
            <p>
              Yettey is a cloud-based digital asset management web application operated by CLOUDIKE Inc.
            </p>
            <p className="mt-4 font-medium text-foreground">Registered office (본사):</p>
            <address className="not-italic text-muted-foreground mt-1 leading-relaxed">
              경기 성남시 수정구 창업로 43, 글로벌비즈센터 B동 809호, CLOUDIKE Inc.<br />
              TEL: 1811-9881 &nbsp; FAX: 02-554-1887
            </address>
            <p className="mt-4 font-medium text-foreground">Personal-Information Officer:</p>
            <ul className="mt-1 space-y-1">
              <li>Name: Hoseok Lee (COO)</li>
              <li>Phone: +82 2 1811-9881</li>
              <li>Email: <a href="mailto:support@cloudike.io" className="text-primary hover:underline">support@cloudike.io</a></li>
            </ul>
            <p className="mt-4">We comply with:</p>
            <ul className="mt-1 space-y-1">
              <li>Korean Personal Information Protection Act (PIPA)</li>
              <li>EU General Data Protection Regulation (GDPR)</li>
              <li>California CCPA/CPRA</li>
              <li>Google API Services User Data Policy</li>
            </ul>
          </Section>

          <Section title="2. Scope of This Policy">
            <p>
              This Privacy Policy explains what data we collect when you use Yettey, why we collect it,
              how we use and share it, how long we keep it, and your choices. It covers all versions of
              Yettey at yettey.cloudike.io and any related mobile/desktop clients, plug-ins, or APIs.
            </p>
          </Section>

          <Section title="3. What We Collect">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-semibold text-foreground">Category</th>
                    <th className="text-left py-2 pr-4 font-semibold text-foreground">Details</th>
                    <th className="text-left py-2 pr-4 font-semibold text-foreground">Purpose</th>
                    <th className="text-left py-2 font-semibold text-foreground">Legal Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Google Account data", "OAuth scopes: openid, email, profile (name, photo)", "Sign-up, sign-in, display profile", "Performance of contract"],
                    ["Assets & metadata", "Files you upload; filename, size, type, timestamps, tags", "Core features: store, preview, share, version", "Performance of contract"],
                    ["Billing data", "Name, company, tax/VAT ID, payment tokens (card data with PCI-DSS)", "Invoicing, fraud prevention", "Legal obligation; contract"],
                    ["Usage & device data", "IP address, browser/OS version, device IDs, clickstream, cookies", "Service operation, analytics, security", "Legitimate interest"],
                    ["Support communications", "Emails, chat logs, feedback forms", "Customer support", "Contract; legitimate interest"],
                  ].map(([cat, details, purpose, basis]) => (
                    <tr key={cat}>
                      <td className="py-3 pr-4 font-medium text-foreground align-top whitespace-nowrap">{cat}</td>
                      <td className="py-3 pr-4 align-top">{details}</td>
                      <td className="py-3 pr-4 align-top">{purpose}</td>
                      <td className="py-3 align-top">{basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="4. Cookies & Similar Technologies">
            <p>We use:</p>
            <ul className="mt-2 space-y-1">
              <li>First-party cookies for session management and CSRF protection.</li>
              <li>Third-party analytics cookies (see Section 5).</li>
            </ul>
            <p className="mt-3">Disabling cookies may impair service functionality.</p>
          </Section>

          <Section title="5. How We Share Information">
            <p>
              We never sell personal data. We disclose only what's necessary to these subprocessors:
            </p>
            <div className="mt-4 space-y-4">
              {[
                { name: "Naver Cloud", loc: "Republic of Korea", role: "ISO 27001-certified hosting, storage, backup" },
                { name: "Payment processor (in-country card gateway)", loc: "Republic of Korea", role: "Billing and fraud prevention" },
                { name: "Analytics provider (Naver Cloud)", loc: "Republic of Korea", role: "Pseudonymised usage analytics" },
              ].map((sp) => (
                <div key={sp.name} className="pl-4 border-l-2 border-primary/30">
                  <p className="font-semibold text-foreground">{sp.name}</p>
                  <p className="text-sm">Location: {sp.loc}</p>
                  <p className="text-sm">Role: {sp.role}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">
              All subprocessors are contract-bound to GDPR- and PIPA-level protections and prohibited
              from independent data use.
            </p>
          </Section>

          <Section title="6. How We Use Google User Data">
            <ul className="space-y-2">
              <li>Request only the openid, email, and profile scopes.</li>
              <li>Use data solely for account creation/authentication and displaying your name/avatar.</li>
              <li>Do not combine with marketing databases, show ads, or transfer beyond listed subprocessors.</li>
              <li>On Google disconnect, OAuth token and profile data are deleted within 30 days.</li>
            </ul>
            <p className="mt-3">
              This complies with Google API Services User Data Policy (Limited-Use).
            </p>
          </Section>

          <Section title="7. Retention & Deletion">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-semibold text-foreground">Data type</th>
                    <th className="text-left py-2 pr-4 font-semibold text-foreground">Retention rule</th>
                    <th className="text-left py-2 font-semibold text-foreground">Deletion timeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Account & Google profile data", "While account is active", "Immediate on deletion; backups purged within 30 days"],
                    ["Asset files & metadata", "While stored by user", "Same as above"],
                    ["Billing records", "7 years (tax/regulatory)", "Automatic purge after retention term"],
                    ["System logs & IP addresses", "12 months", "Rolling deletion"],
                    ["Support tickets", "3 years", "Automatic purge"],
                  ].map(([type, rule, timeline]) => (
                    <tr key={type}>
                      <td className="py-3 pr-4 font-medium text-foreground align-top">{type}</td>
                      <td className="py-3 pr-4 align-top">{rule}</td>
                      <td className="py-3 align-top">{timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-medium text-foreground">How to delete your data:</p>
            <ul className="mt-2 space-y-1">
              <li>Go to Settings ▸ Account ▸ Delete Account.</li>
              <li>Confirm via email; we schedule irrevocable deletion as above.</li>
              <li>Or email <a href="mailto:support@cloudike.io" className="text-primary hover:underline">support@cloudike.io</a> with the subject "Delete My Data" from your account email.</li>
            </ul>
          </Section>

          <Section title="8. Security Measures">
            <ul className="space-y-2">
              <li><span className="font-medium text-foreground">Data at rest:</span> AES-256 encryption in Naver Cloud's Seoul region.</li>
              <li><span className="font-medium text-foreground">In transit:</span> TLS 1.2/1.3.</li>
              <li><span className="font-medium text-foreground">IAM:</span> least-privilege access; MFA for admins.</li>
              <li>Annual penetration testing; ISO 27001-aligned policies; 24-h breach notification plan.</li>
            </ul>
          </Section>

          <Section title="9. International Transfers">
            <p>For transfers outside Korea/EU, we rely on:</p>
            <ul className="mt-2 space-y-1">
              <li>Standard Contractual Clauses</li>
              <li>Korea-EU adequacy decisions</li>
            </ul>
            <p className="mt-3">Copies of safeguards available upon request.</p>
          </Section>

          <Section title="10. Your Rights">
            <p>Depending on jurisdiction, you may:</p>
            <ul className="mt-2 space-y-1">
              <li>Access, correct, or delete personal data</li>
              <li>Object to or restrict processing</li>
              <li>Receive portable data copies</li>
              <li>Withdraw consent at any time (e.g., disconnect Google)</li>
              <li>Lodge complaints with supervisory authorities</li>
            </ul>
            <p className="mt-3">
              Use in-app controls or contact{" "}
              <a href="mailto:support@cloudike.io" className="text-primary hover:underline">
                support@cloudike.io
              </a>.
            </p>
          </Section>

          <Section title="11. Children's Privacy">
            <p>
              Yettey is not directed to children under 13 (or local age of consent).
            </p>
            <p className="mt-3">
              If under that age, parental permission is required. We will delete data collected without
              valid consent upon discovery.
            </p>
          </Section>

          <Section title="12. Changes to This Policy">
            <p>
              Material updates will be posted here and notified via email or in-app at least 14 days
              before effect.
            </p>
            <p className="mt-3">Previous versions archived at /privacy/history.</p>
          </Section>

          <Section title="13. Contact Us">
            <ul className="space-y-1">
              <li><span className="font-medium text-foreground">Data Protection Officer:</span> Hoseok Lee</li>
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
