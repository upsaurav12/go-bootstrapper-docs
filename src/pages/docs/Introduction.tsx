import { DocsLayout } from "./DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function Introduction() {
  return (
    <DocsLayout>
      <article className="max-w-none font-ascii">
        {/* Hero */}
        <section className="mb-20">
          <div className="text-xs tracking-widest text-muted-foreground mb-3">
            $ bootstrap --help
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            BootstrapCLI
          </h1>

          <p className="text-base text-muted-foreground max-w-2xl">
            A CLI tool for scaffolding{" "}
            <strong className="text-foreground">
              production-ready Golang services
            </strong>{" "}
            with opinionated defaults, consistent structure, and minimal setup
            overhead.
          </p>

          <p className="mt-4 text-sm text-muted-foreground max-w-2xl">
            BootstrapCLI is more than a one-time code generator. It is designed
            to help developers follow best practices throughout the project
            lifecycle, with configuration-first workflows and assistive tooling.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/docs/quick-start"
              className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:opacity-90 transition"
            >
              Quick Start
            </a>
            <a
              href="/docs/installation"
              className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/40 transition"
            >
              Installation
            </a>
          </div>
        </section>

        {/* What is */}
        <section className="mb-20 max-w-3xl">
          <h2
            id="what-is-bootstrapcli"
            className="text-xl font-semibold mb-4"
          >
            What is BootstrapCLI?
          </h2>

          <p className="text-sm leading-relaxed text-muted-foreground">
            BootstrapCLI helps you bootstrap and evolve Go backend services in a
            structured, repeatable way. It generates a complete project
            foundation including routing, database wiring, configuration
            loading, Docker setup, and development tooling.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Projects can be created using CLI flags or a declarative{" "}
            <code className="text-foreground">project.yaml</code> file, making
            the setup reproducible, reviewable, and easy to extend over time.
          </p>
        </section>

        {/* Features */}
        <section className="mb-24">
          <h2 className="text-xl font-semibold mb-8">
            Key Features
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Configuration-First",
                desc: "Supports YAML-based project definitions for reproducible and reviewable setups."
              },
              {
                title: "Production-Oriented",
                desc: "Includes Makefiles, environment handling, Docker, and Go best practices."
              },
              {
                title: "Router Support",
                desc: "Works with popular Go routers such as Gin, Chi, Echo, and Fiber."
              },
              {
                title: "Database Integration",
                desc: "Built-in support for relational databases with structured access patterns."
              },
              {
                title: "Extensible CLI (Future)",
                desc: "Designed to grow beyond scaffolding with progressive commands like apply, explain, and upgrade."
              },
              {
                title: "Assistive AI (Future)",
                desc: "Future versions will include AI for explanation, debugging, and guidance — not uncontrolled code generation."
              }
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-lg border border-border bg-card/60 p-5"
              >
                <h3 className="text-sm uppercase tracking-widest font-medium mb-2">
                  {f.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why */}
        <section className="mb-24">
          <h2
            id="why-bootstrapcli"
            className="text-xl font-semibold mb-8"
          >
            Why BootstrapCLI?
          </h2>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl">
            {/* Pain */}
            <div className="rounded-lg border border-border bg-card/60 p-6">
              <h3 className="text-sm uppercase tracking-widest font-medium mb-4">
                Typical Go Project Setup
              </h3>

              <ul className="space-y-2 text-xs text-muted-foreground list-disc list-inside">
                <li>Repeated folder and package setup</li>
                <li>Manual wiring of routers and databases</li>
                <li>Inconsistent project structures across services</li>
                <li>Ad-hoc environment and Docker configuration</li>
                <li>Tribal knowledge instead of documented conventions</li>
              </ul>
            </div>

            {/* Solution */}
            <div className="rounded-lg border border-primary/30 bg-primary/5 p-6">
              <h3 className="text-sm uppercase tracking-widest font-medium mb-4 text-primary">
                With BootstrapCLI
              </h3>

              <ul className="space-y-2 text-xs list-disc list-inside">
                <li>Single command or YAML-based project creation</li>
                <li>Opinionated but practical defaults</li>
                <li>Consistent structure across services</li>
                <li>Clear separation between generated and user code</li>
                <li>Foundation that supports long-term maintenance</li>
              </ul>
            </div>
          </div>

          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">
              BootstrapCLI reduces setup friction without hiding complexity.
            </strong>{" "}
            You start with a solid foundation and retain full control over how
            your service evolves.
          </p>
        </section>

        {/* Example */}
        <section className="mb-24">
          <h2 className="text-xl font-semibold mb-4">
            Quick Example
          </h2>

          <p className="mb-4 text-sm text-muted-foreground">
            Generate a REST API service using Gin and PostgreSQL:
          </p>

          <CodeBlock code="bootstrap new myapp --type=rest --router=gin --db=postgres" />
        </section>

        {/* Next steps */}
        <section className="rounded-xl border border-border bg-muted/30 p-8">
          <h2 className="text-lg font-semibold mb-2">
            Next Steps
          </h2>

          <p className="text-sm text-muted-foreground">
            Continue with the{" "}
            <a href="/docs/installation" className="underline hover:text-foreground">
              Installation Guide
            </a>{" "}
            or jump directly to the{" "}
            <a href="/docs/quick-start" className="underline hover:text-foreground">
              Quick Start
            </a>{" "}
            to build your first service.
          </p>
        </section>
      </article>
    </DocsLayout>
  );
}
