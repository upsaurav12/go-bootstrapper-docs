import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-2">BootstrapCLI</h3>
            <p className="text-sm text-muted-foreground">
              Scaffold production-ready Golang projects with zero setup.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/docs/roadmap" className="text-muted-foreground hover:text-foreground transition-colors">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="/docs/contributing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contributing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/upsaurav12/bootstrap"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            MIT License © 2025 Saurav Upadhyay. Built with ❤️ for the Go community.
          </p>
        </div>
      </div>
    </footer>
  );
}
