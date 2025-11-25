import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "bash" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6">
      <div className="flex items-center justify-between bg-code-bg border border-code-border rounded-t-lg px-4 py-2">
        <span className="text-xs font-mono text-code-foreground/60">{language}</span>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 text-code-foreground/60 hover:text-code-foreground hover:bg-code-foreground/10"
          onClick={copyToClipboard}
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        </Button>
      </div>
      <pre className="bg-code-bg border border-t-0 border-code-border rounded-b-lg p-4 overflow-x-auto">
        <code className="text-sm font-mono text-code-foreground leading-relaxed">
          {code}
        </code>
      </pre>
    </div>
  );
}
