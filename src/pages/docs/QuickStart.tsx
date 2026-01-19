import { DocsLayout } from "./DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function QuickStart() {
  return (
    <DocsLayout>
      <article className="max-w-none font-ascii">
        {/* Hero */}
        <section className="mb-20">
          <div className="text-xs tracking-widest text-muted-foreground mb-3">
            $ bootstrap quick-start
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Quick Start
          </h1>

          <p className="text-base text-muted-foreground max-w-2xl">
            Create, configure, and run a production-oriented Go service in a few
            minutes using BootstrapCLI.
          </p>
        </section>

        {/* Step 1 */}
        <section className="mb-24">
          <h2
            id="create-your-first-project"
            className="text-xl font-semibold mb-4"
          >
            1. Generate a Project
          </h2>

          <p className="mb-4 text-sm text-muted-foreground max-w-2xl">
            Use the CLI to scaffold a REST API using the Gin router:
          </p>

          <CodeBlock code="bootstrap new myapp --type=rest --router=gin --port=8080" />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 max-w-3xl">
            {[
              "Creates a new project directory",
              "Generates a clean, scalable structure",
              "Configures the HTTP server and routing",
              "Sets the application port to 8080",
              "Includes a Makefile for common workflows"
            ].map((item) => (
              <div
                key={item}
                className="rounded-md border border-border bg-card/60 p-4 text-xs text-muted-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Step 2 */}
        <section className="mb-24">
          <h2
            id="project-structure"
            className="text-xl font-semibold mb-4"
          >
            2. Project Structure
          </h2>

          <p className="mb-4 text-sm text-muted-foreground">
            The generated project follows a clear, production-oriented layout
            designed for long-term maintenance:
          </p>

          <CodeBlock
            code={`myapp/
├── cmd/
│   └── main.go
├── internal/
│   ├── config/
│   │   └── config.go
│   ├── handler/
│   │   └── user_handler.go
│   ├── model/
│   │   └── user_model.go
│   ├── repository/
│   │   └── user_repo.go
│   └── server/
│       ├── routes.go
│       └── server.go
├── docker-compose.yml
├── Makefile
├── go.mod
├── project.yaml
└── README.md`}
            language="text"
          />
        </section>

        {/* Step 3 */}
        <section className="mb-24">
          <h2
            id="prepare-project"
            className="text-xl font-semibold mb-4"
          >
            3. Prepare the Project
          </h2>

          <p className="mb-4 text-sm text-muted-foreground">
            Navigate into the project directory and install dependencies:
          </p>

          <CodeBlock
            code={`cd myapp
make tidy`}
            language="bash"
          />
        </section>

        {/* Step 4 */}
        <section className="mb-24">
          <h2
            id="run-with-database"
            className="text-xl font-semibold mb-4"
          >
            4. Run Required Services
          </h2>

          <p className="mb-4 text-sm text-muted-foreground">
            If your project includes a database, make sure Docker and Docker
            Compose are installed. Start the database service:
          </p>

          <CodeBlock code="docker compose up -d" language="bash" />

          <p className="mt-4 text-sm text-muted-foreground max-w-2xl">
            Ensure the database credentials match the values defined in the{" "}
            <code className="text-foreground">.env</code> file.
          </p>
        </section>

        {/* Step 5 */}
        <section className="mb-24">
          <h2
            id="run-the-service"
            className="text-xl font-semibold mb-4"
          >
            5. Run the Service
          </h2>

          <p className="mb-4 text-sm text-muted-foreground">
            Start the application using the Makefile:
          </p>

          <CodeBlock code="make run" language="bash" />

          <p className="mt-4 text-sm text-muted-foreground">
            The service will be available at{" "}
            <code className="text-foreground">http://localhost:8080</code>.
          </p>
        </section>

        {/* Step 6 */}
        <section className="mb-24">
          <h2
            id="verify-the-service"
            className="text-xl font-semibold mb-4"
          >
            6. Verify the Service
          </h2>

          <p className="mb-4 text-sm text-muted-foreground">
            Test a basic endpoint (if available):
          </p>

          <CodeBlock
            code="curl http://localhost:8080/health"
            language="bash"
          />

          <p className="mt-6 mb-4 text-sm text-muted-foreground">
            Example response:
          </p>

          <CodeBlock
            code={`{
  "status": "ok"
}`}
            language="json"
          />
        </section>

        {/* YAML / Prompt-based workflow */}
        <section className="mb-24">
          <h2
            id="yaml-workflow"
            className="text-xl font-semibold mb-4"
          >
            Alternative: YAML-Based Workflow
          </h2>

          <p className="mb-4 text-sm text-muted-foreground max-w-3xl">
            Instead of CLI flags, you can define your project declaratively using
            a YAML configuration file. This approach is recommended for
            reproducible setups and team workflows.
          </p>

          <CodeBlock
            code={`bootstrap apply --yaml=project.yaml`}
            language="bash"
          />

          <p className="mt-4 text-sm text-muted-foreground max-w-3xl">
            You can write the YAML manually, or use the{" "}
            <a
              href="/prompt"
              className="underline underline-offset-2 hover:text-foreground"
            >
              Prompt page
            </a>{" "}
            to convert a natural language description of your intent into a
            validated <code className="text-foreground">project.yaml</code>.
          </p>
        </section>

        {/* Next steps */}
        <section className="rounded-xl border border-border bg-muted/30 p-8">
          <h2
            id="next-steps"
            className="text-lg font-semibold mb-2"
          >
            Next Steps
          </h2>

          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>
              Review all{" "}
              <a
                href="/docs/cli-options"
                className="underline hover:text-foreground"
              >
                CLI options
              </a>
            </li>
            <li>
              Learn more about the{" "}
              <a
                href="/docs/project-structure"
                className="underline hover:text-foreground"
              >
                project structure
              </a>
            </li>
            <li>
              Explore the YAML-based workflow for long-term projects
            </li>
          </ul>
        </section>
      </article>
    </DocsLayout>
  );
}
