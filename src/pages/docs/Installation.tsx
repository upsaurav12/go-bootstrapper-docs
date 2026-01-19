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
            Install BootstrapCLI using the Go toolchain or a prebuilt binary and
            prepare your local environment for creating and managing
            production-ready Go services.
          </p>
        </section>

        {/* Prerequisites */}
        <section className="mb-24 max-w-3xl">
          <h2 className="text-xl font-semibold mb-6">Prerequisites</h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card/60 p-5">
              <h3 className="text-sm uppercase tracking-widest font-medium mb-1">
                Go 1.20 or newer
              </h3>
              <p className="text-xs text-muted-foreground">
                Required when installing via the Go toolchain.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card/60 p-5">
              <h3 className="text-sm uppercase tracking-widest font-medium mb-1">
                PATH configured
              </h3>
              <p className="text-xs text-muted-foreground">
                Ensures the{" "}
                <code className="text-foreground">bootstrap</code> command is
                available globally.
              </p>
            </div>
          </div>
        </section>

        {/* Install via go install */}
        <section className="mb-24 max-w-3xl">
          <h2 className="text-xl font-semibold mb-4">
            Install via go install (recommended)
          </h2>

          <p className="mb-4 text-sm text-muted-foreground">
            This method uses the official Go toolchain and automatically builds
            the CLI from source.
          </p>

          <CodeBlock code="go install github.com/upsaurav12/bootstrap@latest" />

          <p className="mt-4 text-sm text-muted-foreground">
            The binary is installed to{" "}
            <code className="text-foreground">$(go env GOPATH)/bin</code>.
          </p>
        </section>

        {/* Install via binary */}
        <section className="mb-24 max-w-3xl">
          <h2 className="text-xl font-semibold mb-4">
            Install via Prebuilt Binary
          </h2>

          <p className="mb-6 text-sm text-muted-foreground">
            If you do not have Go installed, you can download a prebuilt binary
            from GitHub Releases. Choose the binary that matches your operating
            system and CPU architecture.
          </p>

          <div className="space-y-8">
            {/* Linux */}
            <div>
              <h3 className="text-sm uppercase tracking-widest font-medium mb-2">
                Linux (amd64)
              </h3>
              <CodeBlock
                language="bash"
                code={`curl -L https://github.com/upsaurav12/bootstrap/releases/download/v0.1.4/bootstrap-linux-amd64 \\
  -o bootstrap
chmod +x bootstrap
sudo mv bootstrap /usr/local/bin/bootstrap`}
              />
            </div>

            {/* macOS Intel */}
            <div>
              <h3 className="text-sm uppercase tracking-widest font-medium mb-2">
                macOS (Intel)
              </h3>
              <CodeBlock
                language="bash"
                code={`curl -L https://github.com/upsaurav12/bootstrap/releases/download/v0.1.4/bootstrap-darwin-amd64 \\
  -o bootstrap
chmod +x bootstrap
sudo mv bootstrap /usr/local/bin/bootstrap`}
              />
            </div>

            {/* macOS Apple Silicon */}
            <div>
              <h3 className="text-sm uppercase tracking-widest font-medium mb-2">
                macOS (Apple Silicon)
              </h3>
              <CodeBlock
                language="bash"
                code={`curl -L https://github.com/upsaurav12/bootstrap/releases/download/v0.1.4/bootstrap-darwin-arm64 \\
  -o bootstrap
chmod +x bootstrap
sudo mv bootstrap /usr/local/bin/bootstrap`}
              />
            </div>
          </div>
        </section>

        {/* Verify */}
        <section className="mb-24 max-w-3xl">
          <h2 className="text-xl font-semibold mb-4">
            Verify Installation
          </h2>

          <CodeBlock code="bootstrap --version" />

          <p className="mt-4 text-sm text-muted-foreground">
            A version string confirms that BootstrapCLI is installed correctly.
          </p>
        </section>

        {/* Next steps */}
        <section className="rounded-xl border border-border bg-muted/30 p-8">
          <h2 className="text-lg font-semibold mb-2">Next Steps</h2>

          <p className="text-sm text-muted-foreground">
            Continue with the{" "}
            <a
              href="/docs/quick-start"
              className="underline hover:text-foreground"
            >
              Quick Start Guide
            </a>{" "}
            to scaffold your first project.
          </p>
        </section>
      </article>
    </DocsLayout>
  );
}
