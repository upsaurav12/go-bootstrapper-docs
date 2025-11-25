import { DocsLayout } from "./DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function QuickStart() {
  return (
    <DocsLayout>
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1 id="quick-start">Quick Start</h1>
        
        <p className="lead">
          Create your first Go project in under a minute.
        </p>

        <h2 id="create-your-first-project">Create Your First Project</h2>
        
        <p>Let's create a simple REST API project with the Gin router:</p>

        <CodeBlock code="bootstrap new myapp --type=rest --router=gin --port=8080" />

        <p>This command will:</p>

        <ul>
          <li>Create a new directory called <code>myapp</code></li>
          <li>Generate a complete project structure</li>
          <li>Set up Gin router with basic middleware</li>
          <li>Configure the server to run on port 8080</li>
          <li>Include a Makefile for common tasks</li>
        </ul>

        <h2 id="project-structure">What Gets Generated</h2>

        <p>After running the command, you'll have this structure:</p>

        <CodeBlock 
          code={`myapp/
├── cmd/
│   └── server/
│       └── main.go
├── internal/
│   ├── handlers/
│   │   └── health.go
│   ├── models/
│   ├── routes/
│   │   └── routes.go
│   └── config/
│       └── config.go
├── pkg/
├── .gitignore
├── .golangci.yml
├── Makefile
├── go.mod
└── README.md`}
          language="text"
        />

        <h2 id="run-your-project">Run Your Project</h2>

        <p>Navigate to your project directory and start the server:</p>

        <CodeBlock 
          code={`cd myapp
go run cmd/server/main.go`}
          language="bash"
        />

        <p>Or use the Makefile:</p>

        <CodeBlock code="make run" language="bash" />

        <p>Your server should now be running at <code>http://localhost:8080</code>!</p>

        <h2 id="test-the-api">Test the API</h2>

        <p>Test the health endpoint:</p>

        <CodeBlock code="curl http://localhost:8080/health" language="bash" />

        <p>You should see a response like:</p>

        <CodeBlock 
          code={`{
  "status": "ok",
  "timestamp": "2025-01-15T10:30:00Z"
}`}
          language="json"
        />

        <h2 id="add-database">Add Database Support</h2>

        <p>Want to add PostgreSQL to your project?</p>

        <CodeBlock code="bootstrap new myapp --type=rest --router=gin --db=postgres" />

        <p>This will additionally generate:</p>

        <ul>
          <li>Database configuration in <code>internal/config/</code></li>
          <li>Connection pooling setup</li>
          <li>GORM integration</li>
          <li>Migration helpers</li>
        </ul>

        <h2 id="next-steps">Next Steps</h2>

        <p>Now that you have a running project:</p>

        <ul>
          <li>Explore all <a href="/docs/cli-options">CLI Options</a></li>
          <li>Learn about the <a href="/docs/project-structure">Project Structure</a></li>
          <li>Follow <a href="/docs/tutorials/rest-api">Tutorial: Building a REST API</a></li>
        </ul>
      </article>
    </DocsLayout>
  );
}
