import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowRight,
  Code,
  Zap,
  Shield,
  Package,
  Terminal,
  Github,
  Check
} from "lucide-react";

/* ---------------- Motion Variants ---------------- */

const typeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.035
    }
  }
};

const char = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 }
};


function TypeText({ text }: { text: string }) {
  return (
    <motion.span variants={typeIn} initial="hidden" animate="visible">
      {text.split("").map((c, i) => (
        <motion.span key={i} variants={char}>
          {c === " " ? "\u00A0" : c}
        </motion.span>
      ))}
    </motion.span>
  );
}


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const hoverLift = {
  whileHover: {
    y: -4,
    transition: { duration: 0.2 }
  }
};

/* ---------------- Page ---------------- */

const Index = () => {
  return (
<div className="min-h-screen flex flex-col font-ascii">
      <Header />

      {/* Hero */}
<section className="gradient-hero py-24 md:py-32 overflow-hidden font-ascii tracking-tight">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm mb-8"
            >
              <Terminal className="h-4 w-4 text-primary" />
              <motion.div className="font-ascii uppercase tracking-widest text-xs">
  Opinionated • Production-ready • Go-first
</motion.div>

            </motion.div>

<motion.h1
  variants={fadeUp}
  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-[-0.04em]"
>
  <TypeText text="Ship Go Projects" />
  <span className="block text-primary mt-2">
    <TypeText text="Without Setup Friction" />
  </span>
</motion.h1>


            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Scaffold real-world Go applications with routers, databases,
              linters, Docker, and best practices — instantly.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="shadow-glow" asChild>
                <Link to="/docs/prompt">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://github.com/upsaurav12/bootstrap"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start */}
      {/* Quick Start */}
<section className="py-24 border-t border-border">
  <div className="container">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
      className="mx-auto max-w-4xl"
    >
      <motion.h2
        variants={fadeUp}
        className="font-ascii text-2xl md:text-3xl font-semibold tracking-tight text-center mb-4"
      >
        From Zero to Running API
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="font-ascii text-sm md:text-base tracking-wide text-muted-foreground text-center mb-12"
      >
        Single install. Single command. Running API.
      </motion.p>

      <div className="space-y-12 font-ascii">
        <Step
          title="install"
          code="go install github.com/upsaurav12/bootstrap@latest"
        />
        <Step
          title="generate"
          code="bootstrap new myapp --type=rest --router=gin --port=8080"
        />
        <Step
          title="run"
          code={`cd myapp\ngo run cmd/server/main.go`}
        />
      </div>
    </motion.div>
  </div>
</section>


      {/* Features */}
      {/* Features */}
<section className="py-24 bg-muted/30">
  <div className="container">
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="font-ascii text-2xl md:text-3xl font-semibold tracking-tight text-center mb-12"
    >
      Built for Production Use
    </motion.h2>

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto font-ascii"
    >
      <FeatureCard icon={<Zap />} title="Zero Configuration" />
      <FeatureCard icon={<Code />} title="Production Ready" />
      <FeatureCard icon={<Shield />} title="Opinionated & Safe" />
      <FeatureCard icon={<Package />} title="Router & DB Support" />
      <FeatureCard icon={<Terminal />} title="CLI-First Workflow" />
      <FeatureCard icon={<Check />} title="Extensible" />
    </motion.div>
  </div>
</section>


      {/* CTA */}
      <section className="py-24 border-t border-border">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="container"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stop Rewriting the Same Setup
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Focus on features. Let Go Bootstrapper handle the scaffolding.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/docs">
                  Read the Docs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://github.com/upsaurav12/bootstrap"
                  target="_blank"
                  rel="noreferrer"
                >
                  ⭐ Star on GitHub
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

/* ---------------- Components ---------------- */

function Step({ title, code }: { title: string; code: string }) {
  return (
    <motion.div variants={fadeUp}>
      <div className="text-sm font-semibold text-muted-foreground mb-3">
        {title}
      </div>
      <CodeBlock  code={code} />
    </motion.div>
  );
}

function FeatureCard({
  icon,
  title
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      {...hoverLift}
      className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-medium transition-all"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          {icon}
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">
        Designed to scale from prototype to production.
      </p>
    </motion.div>
  );
}

export default Index;