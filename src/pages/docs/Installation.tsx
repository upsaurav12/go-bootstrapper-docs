import { DocsLayout } from "./DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function Installation() {
  return (
    <DocsLayout>
      <article className="max-w-none font-ascii">
        {/* Hero */}
        <section className="mb-20">
          <div className="text-xs tracking-widest text-muted-foreground mb-3">
            $ bootstrap install
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Installation
          </h1>

          <p className="text-base text-muted-foreground max-w-2xl">
            Install BootstrapCLI using the Go toolchain and prepare your local
            environment for creating and managing production-ready Go services.
          </p>
        </section>

        {/* Prerequisites */}
        <section className="mb-24 max-w-3xl">
          <h2
            id="prerequisites"
            className="text-xl font-semibold mb-6"
          >
            Prerequisites
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card/60 p-5">
              <h3 className="text-sm uppercase tracking-widest font-medium mb-1">
                Go 1.20 or newer
              </h3>
              <p className="text-xs text-muted-foreground">
                Required to build and install the CLI using the official Go
                toolchain.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card/60 p-5">
              <h3 className="text-sm uppercase tracking-widest font-medium mb-1">
                GOPATH/bin in PATH
              </h3>
              <p className="text-xs text-muted-foreground">
                Ensures the{" "}
                <code className="text-foreground">bootstrap</code> command is
                accessible from your terminal.
              </p>
            </div>
          </div>
        </section>

        {/* Install */}
        <section className="mb-24 max-w-3xl">
          <h2
            id="install-via-go-install"
            className="text-xl font-semibold mb-4"
          >
            Install via go install
          </h2>

          <p className="mb-4 text-sm text-muted-foreground">
            The recommended way to install BootstrapCLI is using{" "}
            <code className="text-foreground">go install</code>, which fetches
            the source code, builds the binary, and installs it into your Go
            workspace.
          </p>

          <CodeBlock code="go install github.com/upsaurav12/bootstrap@latest" />

          <p className="mt-4 text-sm text-muted-foreground">
            This installs the latest stable version of the CLI. The binary will
            be placed in{" "}
            <code className="text-foreground">$(go env GOPATH)/bin</code>.
          </p>
        </section>

        {/* Verify */}
        <section className="mb-24 max-w-3xl">
          <h2
            id="verify-installation"
            className="text-xl font-semibold mb-4"
          >
            Verify Installation
          </h2>

          <p className="mb-4 text-sm text-muted-foreground">
            After installation, verify that the CLI is available:
          </p>

          <CodeBlock code="bootstrap --version" />

          <p className="mt-4 text-sm text-muted-foreground">
            If a version string is printed, BootstrapCLI has been installed
            successfully.
          </p>
        </section>

        {/* Help */}
        <section className="mb-24 max-w-3xl">
          <h2
            id="getting-help"
            className="text-xl font-semibold mb-4"
          >
            Getting Help
          </h2>

          <p className="mb-4 text-sm text-muted-foreground">
            To see all available commands, flags, and descriptions:
          </p>

          <CodeBlock code="bootstrap --help" />
        </section>

        {/* Troubleshooting */}
        <section className="mb-24 max-w-3xl">
          <h2
            id="troubleshooting"
            className="text-xl font-semibold mb-8"
          >
            Troubleshooting
          </h2>

          <div className="space-y-12">
            <div>
              <h3
                id="command-not-found"
                className="text-sm uppercase tracking-widest font-medium mb-2"
              >
                Command not found
              </h3>

              <p className="mb-4 text-sm text-muted-foreground">
                If your shell cannot find the{" "}
                <code className="text-foreground">bootstrap</code> command,
                ensure that your Go bin directory is included in your PATH:
              </p>

              <CodeBlock
                code={`# Add to your shell config (.bashrc, .zshrc, etc.)
export PATH="$PATH:$(go env GOPATH)/bin"`}
                language="bash"
              />
            </div>

            <div>
              <h3
                id="permission-denied"
                className="text-sm uppercase tracking-widest font-medium mb-2"
              >
                Permission denied
              </h3>

              <p className="text-sm text-muted-foreground">
                Make sure your user account has write permissions for the Go
                workspace directory. Avoid running{" "}
                <code className="text-foreground">go install</code> with{" "}
                <code className="text-foreground">sudo</code>.
              </p>
            </div>
          </div>
        </section>

        {/* Next steps */}
        <section className="rounded-xl border border-border bg-muted/30 p-8">
          <h2
            id="next-steps"
            className="text-lg font-semibold mb-2"
          >
            Next Steps
          </h2>

          <p className="text-sm text-muted-foreground">
            Continue with the{" "}
            <a
              href="/docs/quick-start"
              className="underline hover:text-foreground"
            >
              Quick Start Guide
            </a>{" "}
            to scaffold your first project using BootstrapCLI.
          </p>
        </section>
      </article>
    </DocsLayout>
  );
}
