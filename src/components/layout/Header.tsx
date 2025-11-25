import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Github, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { docsConfig } from "@/lib/docs-config";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <span className="text-lg font-bold text-primary-foreground">Go</span>
            </div>
            <span className="hidden font-bold sm:inline-block">
              Go Bootstrapper
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </Link>
            <a
              href="https://github.com/upsaurav12/bootstrap"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex" asChild>
            <a
              href="https://github.com/upsaurav12/bootstrap"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <ThemeToggle />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  to="/"
                  className="text-sm font-medium"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/docs"
                  className="text-sm font-medium"
                  onClick={() => setOpen(false)}
                >
                  Documentation
                </Link>
                {docsConfig.map((section) => (
                  <div key={section.title} className="flex flex-col gap-2">
                    <p className="text-sm font-semibold text-muted-foreground">
                      {section.title}
                    </p>
                    {section.items?.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href!}
                        className="text-sm pl-4 text-muted-foreground hover:text-foreground"
                        onClick={() => setOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
