import { DocsLayout } from "./DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function Contributing() {
  return (
    <DocsLayout>
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1 id="contributing">Contributing</h1>
        
        <p className="lead">
          Thank you for considering contributing to Go Bootstrapper! Here's how you can help.
        </p>

        <h2 id="ways-to-contribute">Ways to Contribute</h2>

        <ul>
          <li>🐛 Report bugs and issues</li>
          <li>💡 Suggest new features</li>
          <li>📝 Improve documentation</li>
          <li>🔧 Submit bug fixes</li>
          <li>✨ Add new features</li>
          <li>🧪 Write tests</li>
        </ul>

        <h2 id="getting-started">Getting Started</h2>

        <h3 id="fork-and-clone">1. Fork and Clone</h3>

        <CodeBlock 
          code={`# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/bootstrap.git
cd bootstrap`}
        />

        <h3 id="setup">2. Set Up Development Environment</h3>

        <CodeBlock 
          code={`# Install dependencies
go mod download

# Build the project
go build -o bin/bootstrap cmd/bootstrap/main.go

# Run tests
go test ./...`}
        />

        <h3 id="create-branch">3. Create a Branch</h3>

        <CodeBlock 
          code={`git checkout -b feature/your-feature-name`}
        />

        <h2 id="development-workflow">Development Workflow</h2>

        <h3 id="running-locally">Running Locally</h3>

        <CodeBlock 
          code={`# Run from source
go run cmd/bootstrap/main.go new testproject --type=rest

# Or use the built binary
./bin/bootstrap new testproject --type=rest`}
        />

        <h3 id="running-tests">Running Tests</h3>

        <CodeBlock 
          code={`# Run all tests
go test ./...

# Run with coverage
go test -cover ./...

# Run specific package tests
go test ./internal/generator/...`}
        />

        <h3 id="linting">Code Quality</h3>

        <CodeBlock 
          code={`# Install golangci-lint
go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest

# Run linter
golangci-lint run

# Format code
go fmt ./...`}
        />

        <h2 id="pull-requests">Submitting Pull Requests</h2>

        <h3 id="before-submitting">Before Submitting</h3>

        <ul>
          <li>✅ Code passes all tests</li>
          <li>✅ Code is properly formatted (<code>go fmt</code>)</li>
          <li>✅ Linter checks pass (<code>golangci-lint run</code>)</li>
          <li>✅ Commit messages are clear and descriptive</li>
          <li>✅ Documentation is updated if needed</li>
        </ul>

        <h3 id="commit-guidelines">Commit Message Guidelines</h3>

        <p>Use conventional commit format:</p>

        <CodeBlock 
          code={`feat: add support for MongoDB database
fix: correct router initialization bug
docs: update CLI options documentation
test: add tests for config loader
chore: update dependencies`}
          language="text"
        />

        <h3 id="submit-pr">Submit Your PR</h3>

        <CodeBlock 
          code={`# Push your changes
git push origin feature/your-feature-name

# Then open a Pull Request on GitHub`}
        />

        <p>In your PR description, include:</p>

        <ul>
          <li>What changes you made and why</li>
          <li>Link to related issues (if any)</li>
          <li>Screenshots (if UI changes)</li>
          <li>Testing steps</li>
        </ul>

        <h2 id="code-style">Code Style Guidelines</h2>

        <ul>
          <li>Follow the official <a href="https://go.dev/doc/effective_go" target="_blank" rel="noreferrer">Effective Go</a> guidelines</li>
          <li>Use meaningful variable and function names</li>
          <li>Add comments for exported functions and types</li>
          <li>Keep functions small and focused</li>
          <li>Write tests for new functionality</li>
        </ul>

        <h2 id="project-structure-contrib">Project Structure</h2>

        <CodeBlock 
          code={`bootstrap/
├── cmd/
│   └── bootstrap/           # CLI entrypoint
├── internal/
│   ├── generator/          # Project generation logic
│   ├── templates/          # Project templates
│   └── config/             # CLI configuration
├── pkg/                    # Public libraries
├── tests/                  # Integration tests
└── docs/                   # Documentation`}
          language="text"
        />

        <h2 id="adding-features">Adding New Features</h2>

        <h3 id="add-router">Example: Adding a New Router</h3>

        <ol>
          <li>Add template files in <code>internal/templates/routers/newrouter/</code></li>
          <li>Update router enum in <code>internal/config/types.go</code></li>
          <li>Add generation logic in <code>internal/generator/router.go</code></li>
          <li>Add tests in <code>internal/generator/router_test.go</code></li>
          <li>Update documentation in <code>docs/</code></li>
        </ol>

        <h2 id="reporting-bugs">Reporting Bugs</h2>

        <p>When reporting bugs, please include:</p>

        <ul>
          <li>Go version (<code>go version</code>)</li>
          <li>Bootstrap version (<code>bootstrap --version</code>)</li>
          <li>Operating system</li>
          <li>Command you ran</li>
          <li>Expected vs actual behavior</li>
          <li>Error messages or logs</li>
        </ul>

        <h2 id="need-help">Need Help?</h2>

        <p>
          If you have questions about contributing:
        </p>

        <ul>
          <li>
            Open a{" "}
            <a href="https://github.com/upsaurav12/bootstrap/discussions" target="_blank" rel="noreferrer">
              GitHub Discussion
            </a>
          </li>
          <li>
            Check existing{" "}
            <a href="https://github.com/upsaurav12/bootstrap/issues" target="_blank" rel="noreferrer">
              GitHub Issues
            </a>
          </li>
        </ul>

        <h2 id="code-of-conduct">Code of Conduct</h2>

        <p>
          Be respectful, inclusive, and professional. We're all here to build something great together.
        </p>

        <h2 id="license-contrib">License</h2>

        <p>
          By contributing, you agree that your contributions will be licensed under the MIT License.
        </p>
      </article>
    </DocsLayout>
  );
}
