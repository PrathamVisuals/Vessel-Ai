import { Link } from "react-router-dom";
import { Activity, ArrowLeft } from "lucide-react";

const sections = [
  {
    number: "1",
    title: "Introduction",
    content: `Welcome to Vessel AI. Vessel AI is a project currently under development that aims to help users discover and explore anime wallpapers.

This Privacy Policy explains our approach to privacy and how information may be handled when you access or use the application. As the project is still in development, its features and data-handling practices may change.`,
  },
  {
    number: "2",
    title: "Information and Data",
    content: `The information processed by Vessel AI depends on the features being used and how the application is implemented. This may include information provided by users, content used within the application, and technical information required for the service to function.

The exact information collected and processed will depend on the application's current functionality and any third-party services it uses.`,
  },
  {
    number: "3",
    title: "Use of Information",
    content: `Information processed by Vessel AI may be used to operate the application, support its features, identify technical issues, and improve its functionality.

Information will be handled according to the application's actual implementation and applicable privacy requirements.`,
  },
  {
    number: "4",
    title: "Images and Content",
    content: `Vessel AI is intended to support the discovery and exploration of anime wallpapers. How images and related content are accessed, processed, or stored depends on the features available in the application.

Users should avoid submitting sensitive or confidential information through the application.`,
  },
  {
    number: "5",
    title: "Third-Party Services",
    content: `Vessel AI may use third-party platforms or services to support hosting, application functionality, or integrations.

When such services are used, their own terms and privacy policies may apply to information processed through them. The specific services involved depend on the application's implementation.`,
  },
  {
    number: "6",
    title: "Data Sharing",
    content: `Information may be processed or shared when necessary to operate the application, support integrated services, comply with applicable legal obligations, or protect the application and its users.

The handling of information will depend on the application's actual data flows and applicable requirements.`,
  },
  {
    number: "7",
    title: "Data Security and Retention",
    content: `Vessel AI is a project under development, and its security and data-retention practices may evolve as its functionality develops.

Information retention depends on the systems and services involved. No particular retention period or security guarantee is provided by this policy.`,
  },
  {
    number: "8",
    title: "Privacy Requests",
    content: `If you have questions about privacy or information associated with your use of Vessel AI, you may contact the project developer using the contact details provided on the application's website, if available.

Requests concerning personal information will be considered in accordance with applicable laws and the capabilities of the systems involved.`,
  },
  {
    number: "9",
    title: "Children's Privacy",
    content: `Vessel AI does not intentionally seek personal information from children through features designed for that purpose. If you believe a child has provided personal information in a way that raises a privacy concern, please contact the project developer using an available contact method.`,
  },
  {
    number: "10",
    title: "Changes to This Policy",
    content: `This Privacy Policy may be updated as Vessel AI develops and its features or data-handling practices change. Updates will be published on this page, together with a revised update date where appropriate.`,
  },
  {
    number: "11",
    title: "Contact",
    content: `For privacy-related questions, please use the contact method provided on the Vessel AI website, if available.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Minimal header for privacy page */}
      <header className="border-b border-panel-line bg-void/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link
            to="/"
            className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-ink transition-opacity hover:opacity-80"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-scan/30 bg-cyan-scan/10">
              <Activity className="h-4 w-4 text-cyan-scan" strokeWidth={2.25} />
            </span>
            VesselAI
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 font-mono text-sm text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </nav>
      </header>

      <main>
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-24">
          {/* Page header */}
          <div className="mb-12 border-b border-panel-line pb-10">
            <p className="eyebrow mb-4">Legal</p>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-4 font-mono text-sm text-ink-faint">
              Last updated: October 23, 2026
            </p>
          </div>

          {/* Under development notice */}
          <div className="mb-10 rounded-xl border border-amber-flag/30 bg-amber-flag/[0.06] px-5 py-4">
            <p className="font-mono text-xs leading-relaxed text-amber-flag">
              <strong className="font-semibold">Project status:</strong> Vessel AI is currently
              under development. Features, integrations, and related privacy practices may change
              as development continues.
            </p>
          </div>

          {/* Policy sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.number} aria-labelledby={`section-${section.number}`}>
                <h2
                  id={`section-${section.number}`}
                  className="mb-3 flex items-baseline gap-3 font-display text-xl font-semibold text-ink sm:text-2xl"
                >
                  <span className="font-mono text-sm font-normal text-cyan-scan/70">
                    {section.number}.
                  </span>
                  {section.title}
                </h2>
                {section.content.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="mt-3 font-body text-[15px] leading-7 text-ink-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* Back to home */}
          <div className="mt-16 border-t border-panel-line pt-10">
            <Link
              to="/"
              className="btn-secondary inline-flex gap-2 text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-panel-line">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="font-mono text-xs text-ink-faint">© 2026 VesselAI</p>
            <span className="stamp">Academic / Research Prototype</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
