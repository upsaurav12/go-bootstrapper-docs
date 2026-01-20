import { DocsLayout } from "./DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function ProjectStructure() {
  return (
    <DocsLayout>
      <article className="max-w-none font-ascii">
        {/* Hero */}
        <section className="mb-20">
          <div className="text-xs tracking-widest text-muted-foreground mb-3">
            $ bootstrap layout
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Project Structure
          </h1>

          <p className="text-base text-muted-foreground max-w-3xl">
            Learn how BootstrapCLI organizes projects and why this structure
            scales effectively for production-grade Go services.
          </p>
        </section>

        {/* Overview */}
        <section className="mb-24 max-w-3xl">
          <h2 id="overview" className="text-xl font-semibold mb-4">
            Overview
          </h2>

          <p className="text-sm leading-relaxed text-muted-foreground">
            BootstrapCLI follows the{" "}
            <a
              href="https://github.com/golang-standards/project-layout"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-foreground"
            >
              Standard Go Project Layout
            </a>{" "}
            with opinionated extensions for HTTP APIs, background services, and
            containerized deployments.
          </p>
        </section>

        {/* Tree */}
        <section className="mb-24">
          <h2 id="structure" className="text-xl font-semibold mb-4">
            Complete Layout
          </h2>

          <CodeBlock
            code={`myproject/
├── cmd/
│   └── server/
│       └── main.go
├── internal/
│   ├── handlers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── database/
├── pkg/
├── migrations/
├── tests/
├── scripts/
├── docs/
├── .env.example
├── .golangci.yml
├── Dockerfile
├── docker-compose.yml
├── Makefile
├── go.mod
├── go.sum
└── README.md`}
            language="text"
          />
        </section>

        {/* cmd */}
        <section className="mb-24 max-w-4xl">
          <h2 id="cmd" className="text-xl font-semibold mb-4">
            cmd/
          </h2>

          <p className="text-sm text-muted-foreground mb-4">
            Application entrypoints. Each subdirectory produces a standalone
            binary. Keep this layer minimal and free of business logic.
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
        </section>

        {/* internal */}
        <section className="mb-24 max-w-4xl">
          <h2 id="internal" className="text-xl font-semibold mb-6">
            internal/
          </h2>

          <p className="text-sm text-muted-foreground mb-10">
            Private application code. Packages under{" "}
            <code className="text-foreground">internal/</code> cannot be imported
            by external modules, enforcing clean architectural boundaries.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-sm uppercase tracking-widest font-medium mb-2">
                handlers/
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                HTTP request handlers (controllers).
              </p>

              <CodeBlock
                code={`package handlers

func GetUser(c *gin.Context) {
  // Handler logic
}`}
                language="go"
              />
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest font-medium mb-2">
                models/
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Domain models and business logic.
              </p>

              <CodeBlock
                code={`package models

type User struct {
  ID    uint
  Name  string
  Email string
}`}
                language="go"
              />
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest font-medium mb-2">
                routes/
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Route registration and grouping.
              </p>

              <CodeBlock
                code={`package routes

func SetupRouter() *gin.Engine {
  r := gin.Default()
  r.GET("/health", handlers.HealthCheck)
  return r
}`}
                language="go"
              />
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest font-medium mb-2">
                config/
              </h3>
              <p className="text-sm text-muted-foreground">
                Environment and configuration loading.
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest font-medium mb-2">
                database/
              </h3>
              <p className="text-sm text-muted-foreground">
                Database initialization and connection helpers.
              </p>
            </div>
          </div>
        </section>

        {/* pkg */}
        <section className="mb-24 max-w-3xl">
          <h2 id="pkg" className="text-xl font-semibold mb-4">
            pkg/
          </h2>

          <p className="text-sm text-muted-foreground">
            Optional public libraries. Only use this directory for code intended
            to be imported by external projects.
          </p>
        </section>

        {/* Tooling */}
        <section className="mb-24 max-w-4xl">
          <h2
            id="configuration-files"
            className="text-xl font-semibold mb-6"
          >
            Tooling & Configuration
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-sm uppercase tracking-widest font-medium mb-2">
                Makefile
              </h3>
              <CodeBlock
                code={`# Project variables
APP_NAME := test
BIN_DIR := bin
MAIN_FILE := ./cmd/main.go
PKG := ./...

# Go parameters
GO ?= go
LINTER := golangci-lint

.PHONY: all run build clean lint test tidy deps help

all: build

## Run the application
run:
	@echo ">> Running $(APP_NAME)..."
	@$(GO) run $(MAIN_FILE)

## Build the binary
build:
	@echo ">> Building binary..."
	@mkdir -p $(BIN_DIR)
	@$(GO) build -o $(BIN_DIR)/$(APP_NAME) $(MAIN_FILE)
	@echo "✅ Build complete: $(BIN_DIR)/$(APP_NAME)"

## Clean build artifacts
clean:
	@echo ">> Cleaning..."
	@rm -rf $(BIN_DIR)
	@$(GO) clean
	@echo "🧹 Clean complete"

## Lint the codebase
lint:
	@echo ">> Running linter..."
	@$(LINTER) run $(PKG)

## Run unit tests with coverage
test:
	@echo ">> Running tests..."
	@$(GO) test -v -cover $(PKG)

## Format and tidy modules
tidy:
	@echo ">> Tidying up..."
	@$(GO) fmt $(PKG)
	@$(GO) mod tidy

## Install dependencies
deps:
	@echo ">> Installing dependencies..."
	@$(GO) mod download
                  `}
                language="makefile"
              />
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest font-medium mb-2">
                Docker
              </h3>
              <p className="text-sm text-muted-foreground">
                Multi-stage Dockerfile and docker-compose configuration for
                development and production builds.
              </p>
            </div>
          </div>
        </section>

        {/* Best practices */}
        <section className="mb-24 max-w-4xl">
          <h2 id="best-practices" className="text-xl font-semibold mb-6">
            Best Practices
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Keep cmd/ thin",
              "Enforce boundaries with internal/",
              "Organize by feature, not layer",
              "Avoid circular dependencies",
              "Place tests close to implementation"
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

        {/* Next steps */}
        <section className="rounded-xl border border-border bg-muted/30 p-8">
          <h2 id="next-steps" className="text-lg font-semibold mb-2">
            Next Steps
          </h2>

          <p className="text-sm text-muted-foreground">
            Continue with the{" "}
            <a
              href="/docs/tutorials/rest-api"
              className="underline hover:text-foreground"
            >
              REST API tutorial
            </a>{" "}
            to see how this structure is applied in practice.
          </p>
        </section>
      </article>
    </DocsLayout>
  );
}
