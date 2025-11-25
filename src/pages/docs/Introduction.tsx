import { DocsLayout } from "./DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function Introduction() {
  return (
    <DocsLayout>
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1 id="introduction">Introduction</h1>
        
        <p className="lead">
          Go Bootstrapper is a CLI tool that scaffolds production-ready Golang projects with zero setup headaches.
        </p>

        <h2 id="what-is-go-bootstrapper">What is Go Bootstrapper?</h2>
        
        <p>
          Go Bootstrapper generates complete project structures with routers, linters, database integrations,
          configurations, and more — similar to create-react-app, but for Golang.
        </p>

        <h3 id="key-features">Key Features</h3>

        <ul>
          <li><strong>Zero Configuration</strong> — Start coding immediately with sensible defaults</li>
          <li><strong>Production Ready</strong> — Includes linters, formatters, and Makefiles</li>
          <li><strong>Multiple Routers</strong> — Support for Gin, Echo, Chi, and more</li>
          <li><strong>Database Support</strong> — PostgreSQL, MySQL, MongoDB integrations</li>
          <li><strong>Extensible</strong> — Easy to customize and add your own templates</li>
        </ul>

        <h2 id="why-go-bootstrapper">Why Go Bootstrapper?</h2>

        <p>
          Setting up a new Go project often means:
        </p>

        <ul>
          <li>Manually creating folder structures</li>
          <li>Configuring linters and formatters</li>
          <li>Setting up routers and middleware</li>
          <li>Integrating databases with proper connection pooling</li>
          <li>Writing Makefiles for common tasks</li>
        </ul>

        <p>
          <strong>Go Bootstrapper eliminates this repetitive work.</strong> Just run one command and get a
          production-ready project structure that follows best practices.
        </p>

        <h2 id="quick-example">Quick Example</h2>

        <p>Create a REST API project with Gin router and PostgreSQL:</p>

        <CodeBlock code="bootstrap new myapp --type=rest --router=gin --db=postgres" />

        <p>This generates a complete project with:</p>

        <ul>
          <li>Structured folder layout (handlers, models, routes, config)</li>
          <li>Gin router configured with common middleware</li>
          <li>PostgreSQL connection with GORM</li>
          <li>Environment variable configuration</li>
          <li>Makefile for building, testing, and running</li>
          <li>Pre-configured linters (golangci-lint)</li>
        </ul>

        <h2 id="next-steps">Next Steps</h2>

        <p>
          Ready to get started? Check out the{" "}
          <a href="/docs/installation">Installation Guide</a> or jump straight to the{" "}
          <a href="/docs/quick-start">Quick Start</a>.
        </p>
      </article>
    </DocsLayout>
  );
}
