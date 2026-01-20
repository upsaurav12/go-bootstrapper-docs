import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles, Bot, FileDown } from "lucide-react";
import { DocsLayout } from "./DocsLayout";
import axios  from 'axios'
const MOCK_RESPONSE = `
I will generate a REST API project with the following characteristics:

• Gin router with versioned routes
• PostgreSQL database integration
• Environment-based configuration
• Docker & Docker Compose setup
• Structured project layout following Go best practices

Once generated, you can immediately run the API locally or extend it with authentication, middleware, or additional services.
`;



const prompt = `
You are a backend project generator assistant.

The user will describe the type of project they want to build.

Your task has TWO sections only, in this exact order:


- Briefly explain what kind of project will be created.
- List the major components that will be included (architecture, router, database, entities).
- Keep this section concise and technical.
- Do NOT include any code or YAML here.





- Output a single YAML block wrapped in triple backticks with language tag 'yaml' or 'yml'
- The YAML must be VALID and STRICTLY follow this schema:

\\\`\\\`\\\`yaml
project:
  name: string
  port: number
  arch: string
  router: one of [gin, echo, fiber]
  db: one of [postgres, mongo, mysql]

entities:
  - entity_name
  - entity_name

Rules for YAML:
- The YAML block must contain ONLY \\\`YAML\\\` OR \\\`YML\\\` (no comments, no explanations).
- The keys \\\`name\\\`, \\\`port\\\`, \\\`router\\\`, \\\`db\\\`, and \\\`entities\\\` are REQUIRED.
- \\\`entities\\\` must be strictly related to the user’s project intent.
- Do NOT invent unrelated entities.
- Do NOT include any extra keys.
- Use reasonable defaults if the user does not specify something.
- Ensure proper YAML indentation.

Below is the user's input:


`

const apiUrl = import.meta.env.VITE_RENDER_URL;

function colorizeYaml(yaml: string) {
  return yaml.split("\n").map((line, i) => {
    // comments
    if (line.trim().startsWith("#")) {
      return (
        <div key={i} className="text-muted-foreground italic">
          {line}
        </div>
      );
    }

    const match = line.match(/^(\s*)([^:]+):(.*)$/);
    if (!match) {
      return (
        <div key={i} className="text-muted-foreground">
          {line}
        </div>
      );
    }

    const [, indent, key, value] = match;

    return (
      <div key={i}>
        <span className="text-muted-foreground">{indent}</span>
        <span className="text-sky-400">{key}</span>
        <span className="text-muted-foreground">:</span>
        <span className="text-emerald-400">
          {value}
        </span>
      </div>
    );
  });
}

function extractYaml(text: string): string | null {
  const match = text.match(/```ya?ml\s*([\s\S]*?)\s*```/i);
  return match ? match[1].trim() : null;
}


function extractNonYaml(text: string): string {
  return text
    .replace(/```ya?ml[\s\S]*?```/gi, "")
    .trim();
}




export default function Prompt() {
  const [value, setValue] = useState("");
  const [response, setResponse] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [yaml, setYaml] = useState<string | null>(null);
  const [yamlName, setYamlName] = useState<string | null>(null);
  const [globalYaml, setGlobalYaml] = useState<string | null>(null)

  const streamResponse = async (text: string, yaml: string | null) => {
  setResponse("");
  setYaml(null);
  setYamlName(null);
  setIsGenerating(true);

  const tokens = text.split(" ");
  for (let i = 0; i < tokens.length; i++) {
    await new Promise((r) => setTimeout(r, 35));
    setResponse((prev) => prev + tokens[i] + " ");
  }

  const filename = `bootstrap-${Math.random()
    .toString(36)
    .slice(2, 7)}.yaml`;

  setYaml(yaml);
  setYamlName(filename);
  setIsGenerating(false);
};

const handleSubmit = async () => {
  if (!value.trim() || isGenerating) return;

  setIsGenerating(true);
  setResponse("");
  setYaml(null);
  setYamlName(null);

  try {
    const res = await axios.post(`${apiUrl}/api/generate/`, {
      prompt: prompt + value,
    });
    const nonYaml = extractNonYaml(res.data.text);
    const yaml = extractYaml(res.data.text);

    await streamResponse(nonYaml, yaml);
  } catch (error) {
    console.error("error while generating from AI:", error);
    setIsGenerating(false);
  }

  setValue("");
};


  const downloadYaml = () => {
    if (!yaml || !yamlName) return;
    const blob = new Blob([yaml], { type: "text/yaml" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = yamlName;
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <DocsLayout>
      <div className="w-full max-w-4xl mx-auto py-12 min-h-[calc(100vh-6rem)] flex flex-col">
        {/* Header */}
        <motion.div
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  className="mb-16 text-center"
>
    <div className="font-ascii text-xs tracking-widest text-muted-foreground mb-2">
        $ bootstrap prompt
    </div>

    <h1 className="font-ascii text-3xl md:text-4xl font-semibold tracking-tight mb-3">
        Describe Your Desired Project
    </h1>

    <p className="font-ascii text-sm tracking-wide text-muted-foreground max-w-xl mx-auto">
        Provide a prompt. The project structure will be generated automatically.
    </p>
    </motion.div>

        {/* Streaming Answer */}

{isGenerating && !response && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="mb-10"
  >
    <div className="glass rounded-xl border border-border p-6">
      <div className="flex items-center gap-2 mb-3 text-xs font-mono tracking-widest uppercase text-muted-foreground">
        <Bot className="h-4 w-4 text-primary" />
        BootstrapCLI
      </div>

      <pre className="text-sm font-ascii text-muted-foreground leading-relaxed">
        Generating project specification…
        <span className="ml-1 animate-pulse">▍</span>
      </pre>
    </div>
  </motion.div>
)}


        {/* YAML Output */}
{yaml && yamlName && (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="mb-16"
  >
    <div className="rounded-xl border border-border bg-background/40 backdrop-blur overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
            Generated File
          </div>
          <span className="text-xs font-mono text-primary">
            {yamlName}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigator.clipboard.writeText(yaml)}
            className="text-xs text-muted-foreground hover:text-foreground transition"
          >
            Copy
          </button>
          <button
            onClick={downloadYaml}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground hover:opacity-90 transition"
          >
            <FileDown className="h-4 w-4" />
            Download
          </button>
        </div>
      </div>

      {/* Code Area */}
      <div className="relative">
        {/* subtle left gutter */}
        <div className="absolute left-0 top-0 h-full w-10 bg-background/60 border-r border-border" />

        <div
  className="
    pl-14 pr-6 py-4
    text-sm font-mono leading-relaxed
    overflow-x-auto
    whitespace-pre
  "
>
  {colorizeYaml(yaml)}
</div>

      </div>
    </div>
  </motion.div>
)}


        {/* Prompt Input */}
        <div className="mt-auto">
          <div className="glass rounded-2xl border border-border focus-within:border-primary transition-all">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border text-xs font-mono tracking-widest uppercase text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              Prompt
            </div>


            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              rows={4}
              disabled={isGenerating}
              placeholder="create rest api with authentication, postgresql, docker"
              className="
  w-full resize-none bg-transparent
  px-4 py-4 text-base
  font-ascii
  outline-none
  placeholder:font-ascii
  placeholder:text-muted-foreground/60
  disabled:opacity-50
"

            />

            <div className="flex items-center justify-between px-4 py-3 border-t border-border text-xs text-muted-foreground">
              <span>
                {isGenerating
                  ? "Generating…"
                  : "Press Enter to submit · Shift+Enter for new line"}
              </span>
              <button
                onClick={handleSubmit}
                disabled={isGenerating}
                className="
                  inline-flex items-center gap-2
                  rounded-md bg-primary px-4 py-2
                  text-primary-foreground
                  hover:opacity-90 transition
                  disabled:opacity-50
                "
              >
                {isGenerating ? "Generating" : "Generate"}
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
