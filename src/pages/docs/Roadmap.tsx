import { DocsLayout } from "./DocsLayout";

export default function Roadmap() {
  return (
    <DocsLayout>
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1 id="roadmap">Roadmap</h1>
        
        <p className="lead">
          Upcoming features and improvements for Go Bootstrapper.
        </p>

        <h2 id="in-progress">🚧 In Progress</h2>

        <ul>
          <li>
            <strong>Authentication Templates</strong> — Add <code>--with-auth</code> flag to generate
            JWT authentication, session management, and OAuth integration
          </li>
          <li>
            <strong>Interactive TUI</strong> — Terminal UI for project initialization with step-by-step
            configuration instead of CLI flags
          </li>
        </ul>

        <h2 id="planned">📋 Planned</h2>

        <h3 id="code-generators">Code Generators</h3>
        <ul>
          <li>Generate new handlers: <code>bootstrap generate handler UserHandler</code></li>
          <li>Generate models: <code>bootstrap generate model User</code></li>
          <li>Generate services: <code>bootstrap generate service AuthService</code></li>
          <li>Generate middleware: <code>bootstrap generate middleware RateLimit</code></li>
        </ul>

        <h3 id="build-commands">Build & Development Commands</h3>
        <ul>
          <li><code>bootstrap build</code> — Build optimized production binary</li>
          <li><code>bootstrap dev</code> — Hot reload development server</li>
          <li><code>bootstrap test</code> — Run tests with coverage</li>
        </ul>

        <h3 id="deployment">Deployment Tools</h3>
        <ul>
          <li>Kubernetes manifests generation</li>
          <li>Terraform templates for cloud deployment</li>
          <li>GitHub Actions / GitLab CI templates</li>
        </ul>

        <h3 id="additional-frameworks">Additional Framework Support</h3>
        <ul>
          <li>GraphQL with gqlgen</li>
          <li>gRPC with protobuf generation</li>
          <li>WebSocket support</li>
        </ul>

        <h3 id="monitoring">Observability</h3>
        <ul>
          <li>Prometheus metrics integration</li>
          <li>Structured logging setup (zerolog, zap)</li>
          <li>OpenTelemetry tracing</li>
        </ul>

        <h2 id="future-ideas">💡 Future Ideas</h2>

        <ul>
          <li>Plugin system for custom generators</li>
          <li>Project templates marketplace</li>
          <li>Multi-service project scaffolding (monorepo support)</li>
          <li>Database seeding utilities</li>
          <li>API documentation auto-generation</li>
        </ul>

        <h2 id="request-features">Request a Feature</h2>

        <p>
          Have an idea for Go Bootstrapper? We'd love to hear it!
        </p>

        <p>
          Open a{" "}
          <a href="https://github.com/upsaurav12/bootstrap/issues" target="_blank" rel="noreferrer">
            GitHub Issue
          </a>{" "}
          with the <code>feature-request</code> label.
        </p>

        <h2 id="contributing">Want to Help?</h2>

        <p>
          Check out the <a href="/docs/contributing">Contributing Guide</a> to get started with
          development.
        </p>
      </article>
    </DocsLayout>
  );
}
