import { DocsLayout } from "./DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function Contributing() {
  return (
    <DocsLayout>
      <article className="max-w-none">
        {/* Hero */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Contributing
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
            Thank you for your interest in contributing to BootstrapCLI.
            Every contribution—big or small—helps move the project forward.
          </p>
        </section>

        {/* Ways to contribute */}
        <section className="mb-24">
          <h2
            id="ways-to-contribute"
            className="text-2xl font-semibold mb-8"
          >
            Ways to Contribute
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
            {[
              "Report bugs and issues",
              "Suggest new features",
              "Improve documentation",
              "Submit bug fixes",
              "Add new features",
              "Write or improve tests"
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-slate-200 bg-white p-4 text-sm dark:border-slate-800 dark:bg-slate-900"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Getting started */}
        <section className="mb-24">
          <h2
            id="getting-started"
            className="text-2xl font-semibold mb-8"
          >
            Getting Started
          </h2>

          <div className="space-y-16 max-w-4xl">
            <div>
              <h3
                id="fork-and-clone"
                className="text-lg font-semibold mb-4"
              >
                1. Fork and Clone
              </h3>

              <CodeBlock
                code={`git clone https://github.com/YOUR_USERNAME/bootstrap.git
cd bootstrap`}
              />
            </div>

            <div>
              <h3
                id="setup"
                className="text-lg font-semibold mb-4"
              >
                2. Set Up the Development Environment
              </h3>

              <CodeBlock
                code={`go mod download
go build -o bin/bootstrap cmd/bootstrap/main.go
go test ./...`}
              />
            </div>

            <div>
              <h3
                id="create-branch"
                className="text-lg font-semibold mb-4"
              >
                3. Create a Feature Branch
              </h3>

              <CodeBlock
                code={`git checkout -b feature/your-feature-name`}
              />
            </div>
          </div>
        </section>

        {/* Development workflow */}
        <section className="mb-24">
          <h2
            id="development-workflow"
            className="text-2xl font-semibold mb-8"
          >
            Development Workflow
          </h2>

          <div className="space-y-12 max-w-4xl">
            <div>
              <h3
                id="running-locally"
                className="font-semibold mb-3"
              >
                Running Locally
              </h3>

              <CodeBlock
                code={`go run cmd/bootstrap/main.go new testproject --type=rest

./bin/bootstrap new testproject --type=rest`}
              />
            </div>

            <div>
              <h3
                id="running-tests"
                className="font-semibold mb-3"
              >
                Running Tests
              </h3>

              <CodeBlock
                code={`go test ./...
go test -cover ./...
go test ./internal/generator/...`}
              />
            </div>

            <div>
              <h3
                id="linting"
                className="font-semibold mb-3"
              >
                Code Quality
              </h3>

              <CodeBlock
                code={`go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest
golangci-lint run
go fmt ./...`}
              />
            </div>
          </div>
        </section>

        {/* Pull requests */}
        <section className="mb-24">
          <h2
            id="pull-requests"
            className="text-2xl font-semibold mb-8"
          >
            Submitting Pull Requests
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 max-w-4xl">
            <div>
              <h3
                id="before-submitting"
                className="font-semibold mb-4"
              >
                Before Submitting
              </h3>

              <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
                <li>All tests pass</li>
                <li>Code is formatted (<code>go fmt</code>)</li>
                <li>Linter checks pass</li>
                <li>Commits are clear and descriptive</li>
                <li>Docs updated if necessary</li>
              </ul>
            </div>

            <div>
              <h3
                id="commit-guidelines"
                className="font-semibold mb-4"
              >
                Commit Message Guidelines
              </h3>

              <CodeBlock
                code={`feat: add MongoDB support
fix: correct router initialization
docs: update CLI options
test: add config loader tests
chore: update dependencies`}
                language="text"
              />
            </div>
          </div>

          <div className="mt-12 max-w-4xl">
            <h3
              id="submit-pr"
              className="font-semibold mb-4"
            >
              Submit Your PR
            </h3>

            <CodeBlock
              code={`git push origin feature/your-feature-name`}
            />
          </div>
        </section>

        {/* Project structure */}
        <section className="mb-24">
          <h2
            id="project-structure-contrib"
            className="text-2xl font-semibold mb-6"
          >
            Project Structure
          </h2>

          <CodeBlock
            code={`bootstrap/
├── cmd/
├── internal/
│   ├── generator/
│   ├── templates/
│   └── config/
├── pkg/
├── tests/
└── docs/`}
            language="text"
          />
        </section>

        {/* Adding features */}
        <section className="mb-24">
          <h2
            id="adding-features"
            className="text-2xl font-semibold mb-6"
          >
            Adding New Features
          </h2>

          <h3
            id="add-router"
            className="font-semibold mb-4"
          >
            Example: Adding a New Router
          </h3>

          <ol className="list-decimal pl-5 space-y-1 text-slate-600 dark:text-slate-400 max-w-3xl">
            <li>Add templates in <code>internal/templates/routers/</code></li>
            <li>Update router enum in <code>internal/config/types.go</code></li>
            <li>Add generator logic</li>
            <li>Add tests</li>
            <li>Update documentation</li>
          </ol>
        </section>

        {/* Help & conduct */}
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
          <h2
            id="need-help"
            className="text-xl font-semibold mb-2"
          >
            Need Help?
          </h2>

          <p className="text-slate-600 dark:text-slate-400 mb-4">
            If you’re unsure where to start or have questions:
          </p>

          <ul className="list-disc pl-5 text-slate-600 dark:text-slate-400 space-y-1">
            <li>
              Join the{" "}
              <a
                href="https://github.com/upsaurav12/bootstrap/discussions"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                GitHub Discussions
              </a>
            </li>
            <li>
              Review existing{" "}
              <a
                href="https://github.com/upsaurav12/bootstrap/issues"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                issues
              </a>
            </li>
          </ul>

          <p className="mt-6 text-slate-600 dark:text-slate-400">
            By contributing, you agree to follow the project’s code of conduct
            and license your contributions under the MIT License.
          </p>
        </section>
      </article>
    </DocsLayout>
  );
}
