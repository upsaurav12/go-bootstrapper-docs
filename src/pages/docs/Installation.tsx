import { DocsLayout } from "./DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function Installation() {
  return (
    <DocsLayout>
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1 id="installation">Installation</h1>
        
        <p className="lead">
          Learn how to install Go Bootstrapper on your system.
        </p>

        <h2 id="prerequisites">Prerequisites</h2>
        
        <p>Before installing Go Bootstrapper, ensure you have:</p>

        <ul>
          <li><strong>Go 1.20+</strong> installed on your system</li>
          <li><strong>GOPATH/bin</strong> in your system PATH</li>
        </ul>

        <h2 id="install-via-go-install">Install via go install</h2>

        <p>The easiest way to install Go Bootstrapper is using <code>go install</code>:</p>

        <CodeBlock code="go install github.com/upsaurav12/bootstrap@latest" />

        <p>This will download and install the latest version of the CLI tool.</p>

        <h2 id="verify-installation">Verify Installation</h2>

        <p>Check that the installation was successful:</p>

        <CodeBlock code="bootstrap --version" />

        <p>You should see the version number printed to your terminal.</p>

        <h2 id="getting-help">Getting Help</h2>

        <p>To see all available commands and options:</p>

        <CodeBlock code="bootstrap --help" />

        <h2 id="troubleshooting">Troubleshooting</h2>

        <h3 id="command-not-found">Command not found</h3>

        <p>
          If you get a "command not found" error, make sure <code>$GOPATH/bin</code> is in your PATH:
        </p>

        <CodeBlock 
          code={`# Add to your .bashrc, .zshrc, or equivalent
export PATH=$PATH:$(go env GOPATH)/bin`}
          language="bash"
        />

        <h3 id="permission-denied">Permission denied</h3>

        <p>
          If you encounter permission errors, ensure you have write access to your GOPATH directory.
        </p>

        <h2 id="next-steps">Next Steps</h2>

        <p>
          Now that you have Go Bootstrapper installed, head over to the{" "}
          <a href="/docs/quick-start">Quick Start Guide</a> to create your first project!
        </p>
      </article>
    </DocsLayout>
  );
}
