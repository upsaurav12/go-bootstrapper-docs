import { DocsLayout } from "./DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function CLIOptions() {
  return (
    <DocsLayout>
      <article className="max-w-none">
        {/* Hero */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            CLI Options
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
            Reference documentation for all supported BootstrapCLI commands and
            flags.
          </p>
        </section>

        {/* Basic usage */}
        <section className="mb-24">
          <h2
            id="basic-usage"
            className="text-2xl font-semibold mb-4"
          >
            Basic Usage
          </h2>

          <CodeBlock code="bootstrap new <project-name> [flags]" />

          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            CLI flags are intended for quick project creation. For reproducible
            and team-based workflows, prefer the YAML-based{" "}
            <code className="font-mono">apply</code> command.
          </p>
        </section>

        {/* Options table */}
        <section className="mb-24">
          <h2
            id="available-options"
            className="text-2xl font-semibold mb-6"
          >
            Available Flags (bootstrap new)
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50 dark:bg-slate-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Flag</th>
                  <th className="px-4 py-3 text-left font-semibold">Values</th>
                  <th className="px-4 py-3 text-left font-semibold">Default</th>
                  <th className="px-4 py-3 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {[
                  {
                    opt: "--type",
                    values: "rest",
                    def: "rest",
                    desc: "Type of project to generate"
                  },
                  {
                    opt: "--router",
                    values: "gin, echo, chi, fiber",
                    def: "gin",
                    desc: "HTTP router framework"
                  },
                  {
                    opt: "--db",
                    values: "postgres, mysql, none",
                    def: "none",
                    desc: "Database integration (enables Docker support)"
                  },
                  {
                    opt: "--port",
                    values: "Any valid port",
                    def: "8080",
                    desc: "Application listening port"
                  },
                  {
                    opt: "--entities",
                    values: "comma-separated names",
                    def: "none",
                    desc: "Generate initial entities (e.g. user,order)"
                  }
                ].map((row) => (
                  <tr key={row.opt}>
                    <td className="px-4 py-3 font-mono">{row.opt}</td>
                    <td className="px-4 py-3 font-mono">{row.values}</td>
                    <td className="px-4 py-3 font-mono">{row.def}</td>
                    <td className="px-4 py-3">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Apply */}
        <section className="mb-24">
          <h2
            id="apply-command"
            className="text-2xl font-semibold mb-4"
          >
            YAML-Based Workflow (apply)
          </h2>

          <p className="mb-4 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
            BootstrapCLI supports generating projects from a declarative YAML
            configuration file. This approach is recommended for long-lived
            services and team environments.
          </p>

          <CodeBlock code="bootstrap apply --yaml=project.yaml" />

          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
            The YAML file acts as the source of truth for project configuration
            and can be reviewed, versioned, and evolved over time.
          </p>
        </section>

        {/* Examples */}
        <section className="mb-24">
          <h2
            id="examples"
            className="text-2xl font-semibold mb-6"
          >
            Examples
          </h2>

          <div className="space-y-6">
            <CodeBlock code="bootstrap new myapi --type=rest --router=gin" />
            <CodeBlock code="bootstrap new myapi --type=rest --router=gin --db=postgres" />
            <CodeBlock code="bootstrap new usersvc --router=chi --port=3000" />
            <CodeBlock code="bootstrap apply --yaml=project.yaml" />
          </div>
        </section>

        {/* Router comparison */}
        <section className="mb-24">
          <h2
            id="router-comparison"
            className="text-2xl font-semibold mb-8"
          >
            Router Comparison
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Gin",
                desc: "Popular, minimal, and widely used.",
                best: "General REST APIs"
              },
              {
                name: "Echo",
                desc: "High performance with built-in middleware.",
                best: "Structured APIs"
              },
              {
                name: "Chi",
                desc: "Lightweight and net/http friendly.",
                best: "Stdlib-focused projects"
              },
              {
                name: "Fiber",
                desc: "Fast, Express-inspired API.",
                best: "High-throughput services"
              }
            ].map((r) => (
              <div
                key={r.name}
                className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
              >
                <h3 className="font-semibold mb-2">{r.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  {r.desc}
                </p>
                <p className="text-sm">
                  <strong>Best for:</strong> {r.best}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Database options */}
        <section className="mb-24">
          <h2
            id="database-options"
            className="text-2xl font-semibold mb-6"
          >
            Database Options
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl">
            {[
              {
                name: "PostgreSQL",
                desc: "Relational database with Docker-based local setup."
              },
              {
                name: "MySQL",
                desc: "Alternative relational database option."
              }
            ].map((db) => (
              <div
                key={db.name}
                className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
              >
                <h3 className="font-semibold mb-2">{db.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {db.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Global flags */}
        <section className="mb-24">
          <h2
            id="global-flags"
            className="text-2xl font-semibold mb-4"
          >
            Global Flags
          </h2>

          <CodeBlock
            code={`--help, -h     Show help information
--version, -v  Print version number`}
            language="text"
          />
        </section>

        {/* Next steps */}
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
          <h2
            id="next-steps"
            className="text-xl font-semibold mb-2"
          >
            Next Steps
          </h2>

          <p className="text-slate-600 dark:text-slate-400">
            Learn more about the{" "}
            <a href="/docs/project-structure" className="underline">
              generated project structure
            </a>{" "}
            or explore the YAML-based workflow for managing long-lived services.
          </p>
        </section>
      </article>
    </DocsLayout>
  );
}
