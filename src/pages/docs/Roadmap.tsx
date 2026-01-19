import { DocsLayout } from "./DocsLayout";

export default function Roadmap() {
  return (
    <DocsLayout>
      <article className="max-w-none">
        {/* Hero */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Roadmap
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
            A transparent view of how BootstrapCLI will evolve over time.
          </p>

          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
            The roadmap prioritizes stability, reproducibility, and long-term
            maintainability over rapid feature expansion.
          </p>
        </section>

        {/* In Progress */}
        <section className="mb-24">
          <h2
            id="in-progress"
            className="text-2xl font-semibold mb-6"
          >
            In Progress
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 max-w-4xl">
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
              <h3 className="font-semibold mb-2">
                YAML-First Project Evolution
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Improving the <code>apply</code> workflow so projects can be
                safely evolved over time by modifying the YAML configuration
                and re-applying changes deterministically.
              </p>
            </div>

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
              <h3 className="font-semibold mb-2">
                Clear Ownership Boundaries
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Formalizing which files are tool-owned versus user-owned, and
                documenting guarantees around what BootstrapCLI will never
                overwrite.
              </p>
            </div>
          </div>
        </section>

        {/* Planned */}
        <section className="mb-24">
          <h2
            id="planned"
            className="text-2xl font-semibold mb-10"
          >
            Planned
          </h2>

          <div className="space-y-16 max-w-5xl">
            {/* Add / Modify Commands */}
            <div>
              <h3
                id="incremental-commands"
                className="text-lg font-semibold mb-4"
              >
                Incremental Project Commands
              </h3>

              <ul className="list-disc pl-5 text-slate-600 dark:text-slate-400 space-y-1">
                <li>
                  <code>bootstrap add entity user</code>
                </li>
                <li>
                  <code>bootstrap add repository order</code>
                </li>
                <li>
                  <code>bootstrap add service auth</code>
                </li>
                <li>
                  <code>bootstrap diff</code> — Preview changes before applying
                </li>
              </ul>

              <p className="mt-3 text-sm text-slate-500 dark:text-slate-500">
                All commands will update YAML first and apply changes
                deterministically.
              </p>
            </div>

            {/* Assistive AI */}
            <div>
              <h3
                id="assistive-ai"
                className="text-lg font-semibold mb-4"
              >
                Assistive AI (Optional)
              </h3>

              <ul className="list-disc pl-5 text-slate-600 dark:text-slate-400 space-y-1">
                <li>Explain generated files and structure</li>
                <li>Review YAML configuration for best practices</li>
                <li>Help diagnose build or runtime errors</li>
                <li>Convert natural language into YAML configuration</li>
              </ul>

              <p className="mt-3 text-sm text-slate-500 dark:text-slate-500">
                AI will never modify code automatically and will always remain
                optional and review-driven.
              </p>
            </div>

            {/* Development Workflow */}
            <div>
              <h3
                id="developer-workflow"
                className="text-lg font-semibold mb-4"
              >
                Developer Workflow Improvements
              </h3>

              <ul className="list-disc pl-5 text-slate-600 dark:text-slate-400 space-y-1">
                <li>Unified dev, test, and lint commands</li>
                <li>Improved error messages and diagnostics</li>
                <li>Better validation and failure explanations</li>
              </ul>
            </div>

            {/* Runtime & Infra */}
            <div>
              <h3
                id="runtime-integration"
                className="text-lg font-semibold mb-4"
              >
                Runtime & Infrastructure Support
              </h3>

              <ul className="list-disc pl-5 text-slate-600 dark:text-slate-400 space-y-1">
                <li>Optional observability hooks (logging, metrics)</li>
                <li>Standardized health and readiness endpoints</li>
                <li>Improved Docker defaults for local development</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Future */}
        <section className="mb-24">
          <h2
            id="future-ideas"
            className="text-2xl font-semibold mb-6"
          >
            Future Ideas
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 max-w-4xl">
            {[
              "Plugin system for custom generators",
              "Multiple service support (monorepo)",
              "Configurable conventions for teams",
              "Stronger validation and schema tooling",
              "Web UI for YAML editing and review"
            ].map((idea) => (
              <div
                key={idea}
                className="rounded-lg border border-slate-200 bg-white p-4 text-sm dark:border-slate-800 dark:bg-slate-900"
              >
                {idea}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
          <h2
            id="request-features"
            className="text-xl font-semibold mb-2"
          >
            Have a Feature in Mind?
          </h2>

          <p className="text-slate-600 dark:text-slate-400 mb-4">
            BootstrapCLI is community-driven, and thoughtful feature requests
            help guide its direction.
          </p>

          <p className="text-slate-600 dark:text-slate-400">
            Open a{" "}
            <a
              href="https://github.com/upsaurav12/bootstrap/issues"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              GitHub issue
            </a>{" "}
            with context and motivation, or review the{" "}
            <a href="/docs/contributing" className="underline">
              Contributing Guide
            </a>{" "}
            to get involved.
          </p>
        </section>
      </article>
    </DocsLayout>
  );
}
