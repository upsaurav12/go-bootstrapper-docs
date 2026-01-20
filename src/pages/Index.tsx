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

/* ---------------- Motion ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
};

const hoverLift = {
  whileHover: { y: -4, transition: { duration: 0.2 } }
};

/* ---------------- Typewriter ---------------- */

const typeIn = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } }
};

const char = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0 }
};

function TypeText({ text }: { text: string }) {
  return (
    <motion.span
      variants={typeIn}
      initial="hidden"
      animate="visible"
      className="inline-block break-words"
    >
      {text.split("").map((c, i) => (
        <motion.span key={i} variants={char}>
          {c === " " ? "\u00A0" : c}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* ---------------- Page ---------------- */

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col font-ascii">
      <Header />

      {/* Hero */}
      <section className="gradient-hero py-16 sm:py-24 overflow-hidden">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs mb-6"
            >
              <Terminal className="h-4 w-4 text-primary" />
              <span className="uppercase tracking-widest">
                Opinionated • Production-ready • Go-first
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="
                font-bold tracking-tight
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                leading-tight mb-6
              "
            >
              <TypeText text="Ship Go Projects" />
<span className="block text-primary mt-2">
  {/* Mobile */}
  <span className="block sm:hidden">
    <TypeText text="Without Setup" />
    <br />
    <TypeText text="Friction" />
  </span>

  {/* Desktop */}
  <span className="hidden sm:block">
    <TypeText text="Without Setup Friction" />
  </span>
</span>

            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="
                text-sm sm:text-base md:text-lg
                text-muted-foreground
                max-w-xl mx-auto mb-8
              "
            >
              Scaffold real-world Go applications with routers, databases,
              linters, Docker, and best practices — instantly.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Button size="lg" asChild>
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
      <section className="py-16 border-t border-border">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mx-auto max-w-3xl"
          >
            <motion.h2
              variants={fadeUp}
              className="text-xl sm:text-2xl font-semibold text-center mb-3"
            >
              From Zero to Running API
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-xs sm:text-sm text-muted-foreground text-center mb-10"
            >
              Single install. Single command. Running API.
            </motion.p>

            <div className="space-y-8">
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
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-xl sm:text-2xl font-semibold text-center mb-10"
          >
            Built for Production Use
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="
              grid gap-4
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              max-w-5xl mx-auto
            "
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
      <section className="py-16 border-t border-border">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Stop Rewriting the Same Setup
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-8">
              Focus on features. Let BootstrapCLI handle the scaffolding.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ---------------- Components ---------------- */

function Step({ title, code }: { title: string; code: string }) {
  return (
    <motion.div variants={fadeUp}>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {title}
      </div>
      <CodeBlock code={code} />
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
      className="
        p-5 rounded-xl border border-border bg-card
        hover:border-primary/50 transition-all
      "
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="h-9 w-9 flex items-center justify-center rounded-md bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
      <p className="text-xs text-muted-foreground">
        Designed to scale from prototype to production.
      </p>
    </motion.div>
  );
}
