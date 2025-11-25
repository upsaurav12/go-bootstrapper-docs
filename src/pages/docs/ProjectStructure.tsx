import { DocsLayout } from "./DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function ProjectStructure() {
  return (
    <DocsLayout>
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1 id="project-structure">Project Structure</h1>
        
        <p className="lead">
          Understanding the folder structure and organization of bootstrapped projects.
        </p>

        <h2 id="overview">Overview</h2>
        
        <p>
          Go Bootstrapper follows the{" "}
          <a href="https://github.com/golang-standards/project-layout" target="_blank" rel="noreferrer">
            Standard Go Project Layout
          </a>{" "}
          with some opinionated additions for web applications.
        </p>

        <h2 id="structure">Complete Structure</h2>

        <CodeBlock 
          code={`myproject/
├── cmd/
│   └── server/
│       └── main.go              # Application entrypoint
├── internal/
│   ├── handlers/                # HTTP request handlers
│   │   ├── health.go
│   │   └── user.go
│   ├── models/                  # Data models
│   │   └── user.go
│   ├── routes/                  # Route definitions
│   │   └── routes.go
│   ├── middleware/              # Custom middleware
│   │   └── auth.go
│   ├── config/                  # Configuration
│   │   └── config.go
│   └── database/                # Database connection
│       └── db.go
├── pkg/                         # Public libraries (optional)
│   └── utils/
├── migrations/                  # Database migrations
│   └── 001_create_users.sql
├── tests/                       # Integration tests
│   └── api_test.go
├── scripts/                     # Build and utility scripts
│   └── migrate.sh
├── docs/                        # Documentation
│   └── api.md
├── .env.example                 # Environment variables template
├── .gitignore
├── .golangci.yml               # Linter configuration
├── Dockerfile                   # Docker image definition
├── docker-compose.yml          # Local development setup
├── Makefile                     # Build automation
├── go.mod
├── go.sum
└── README.md`}
          language="text"
        />

        <h2 id="directory-breakdown">Directory Breakdown</h2>

        <h3 id="cmd">cmd/</h3>
        <p>
          Contains the main application(s). Each subdirectory is a separate executable.
          Keep <code>cmd/</code> minimal — it should only initialize and run the app.
        </p>

        <CodeBlock 
          code={`// cmd/server/main.go
package main

import (
    "myproject/internal/config"
    "myproject/internal/routes"
)

func main() {
    cfg := config.Load()
    router := routes.SetupRouter()
    router.Run(cfg.Port)
}`}
          language="go"
        />

        <h3 id="internal">internal/</h3>
        <p>
          Private application code. Go enforces that code in <code>internal/</code> cannot be
          imported by external projects.
        </p>

        <h4>internal/handlers/</h4>
        <p>HTTP request handlers (controllers in MVC terms).</p>

        <CodeBlock 
          code={`// internal/handlers/user.go
package handlers

func GetUser(c *gin.Context) {
    // Handler logic
}`}
          language="go"
        />

        <h4>internal/models/</h4>
        <p>Data models and business logic.</p>

        <CodeBlock 
          code={`// internal/models/user.go
package models

type User struct {
    ID    uint   \`json:"id"\`
    Name  string \`json:"name"\`
    Email string \`json:"email"\`
}`}
          language="go"
        />

        <h4>internal/routes/</h4>
        <p>Route definitions and grouping.</p>

        <CodeBlock 
          code={`// internal/routes/routes.go
package routes

func SetupRouter() *gin.Engine {
    r := gin.Default()
    
    r.GET("/health", handlers.HealthCheck)
    
    api := r.Group("/api/v1")
    {
        api.GET("/users", handlers.GetUsers)
        api.POST("/users", handlers.CreateUser)
    }
    
    return r
}`}
          language="go"
        />

        <h4>internal/config/</h4>
        <p>Configuration loading from environment variables or files.</p>

        <h4>internal/database/</h4>
        <p>Database connection setup and helpers.</p>

        <h3 id="pkg">pkg/</h3>
        <p>
          Public libraries that can be imported by external projects. Only add code here
          if you intend to share it. Most projects can skip this directory.
        </p>

        <h3 id="migrations">migrations/</h3>
        <p>SQL or migration files for database schema changes.</p>

        <h3 id="tests">tests/</h3>
        <p>Integration and end-to-end tests. Unit tests should live alongside the code they test.</p>

        <h2 id="configuration-files">Configuration Files</h2>

        <h3 id="makefile">Makefile</h3>
        <p>Common development tasks:</p>

        <CodeBlock 
          code={`build:
\tgo build -o bin/server cmd/server/main.go

run:
\tgo run cmd/server/main.go

test:
\tgo test -v ./...

lint:
\tgolangci-lint run

migrate:
\t./scripts/migrate.sh up`}
          language="makefile"
        />

        <h3 id="golangci-yml">.golangci.yml</h3>
        <p>Linter configuration with sensible defaults for code quality.</p>

        <h3 id="docker">Docker Files</h3>
        <p>Multi-stage Dockerfile for optimized production images.</p>

        <h2 id="best-practices">Best Practices</h2>

        <ul>
          <li><strong>Keep cmd/ thin</strong> — Only initialization code</li>
          <li><strong>Use internal/</strong> — Enforce package boundaries</li>
          <li><strong>Organize by feature</strong> — Group related handlers, models, etc.</li>
          <li><strong>Avoid circular dependencies</strong> — Models shouldn't import handlers</li>
          <li><strong>Test alongside code</strong> — Unit tests in same package as code</li>
        </ul>

        <h2 id="next-steps">Next Steps</h2>

        <p>
          Ready to build something? Check out the <a href="/docs/tutorials/rest-api">REST API Tutorial</a>.
        </p>
      </article>
    </DocsLayout>
  );
}
