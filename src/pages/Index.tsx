import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Code, Zap, Shield, Package, Terminal, Github } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-hero py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-border bg-background/50 px-4 py-2 text-sm mb-8 animate-fade-in">
              <Terminal className="h-4 w-4 mr-2 text-primary" />
              Production-ready Golang scaffolding
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance animate-fade-in">
              Bootstrap Go Projects
              <span className="block text-primary mt-2">In Seconds</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
              A CLI tool that scaffolds production-ready Golang projects with routers, linters, configs, database integrations, and more — just like create-react-app, but for Go.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Button size="lg" className="shadow-glow" asChild>
                <Link to="/docs/quick-start">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/upsaurav12/bootstrap" target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Get Started in 30 Seconds
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">1. Install</h3>
                <CodeBlock code="go install github.com/upsaurav12/bootstrap@latest" />
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">2. Create Project</h3>
                <CodeBlock code="bootstrap new myapp --type=rest --router=gin --port=8080" />
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">3. Start Coding</h3>
                <CodeBlock code={`cd myapp\ngo run main.go`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Go Bootstrapper?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Zero Configuration"
              description="Get started instantly with sensible defaults. No configuration files to write or dependencies to manage manually."
            />
            <FeatureCard
              icon={<Code className="h-6 w-6" />}
              title="Production Ready"
              description="Includes linters, formatters, Makefiles, and best practices out of the box. Start with quality code from day one."
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Battle Tested"
              description="Built on industry-standard tools and patterns. Focus on features, not setup."
            />
            <FeatureCard
              icon={<Package className="h-6 w-6" />}
              title="Multiple Routers"
              description="Support for Gin, Echo, Chi, and more. Choose the router that fits your project."
            />
            <FeatureCard
              icon={<Terminal className="h-6 w-6" />}
              title="Database Ready"
              description="Integrated support for PostgreSQL, MySQL, MongoDB with proper connection pooling and migrations."
            />
            <FeatureCard
              icon={<ArrowRight className="h-6 w-6" />}
              title="Extensible"
              description="Easy to customize and extend. Add your own generators and templates as your needs grow."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Something Great?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join developers who are shipping Go projects faster with Go Bootstrapper.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/docs">
                  Read the Docs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/upsaurav12/bootstrap" target="_blank" rel="noreferrer">
                  ⭐ Star on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-medium transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          {icon}
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

export default Index;
