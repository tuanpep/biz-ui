import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group mb-6">
      <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          type="button"
          onClick={copy}
          className="px-2 py-1 text-xs rounded bg-zinc-700 hover:bg-zinc-600 text-zinc-300"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg overflow-x-auto text-sm">
        <code className={`language-${language} text-zinc-300`}>{code}</code>
      </pre>
    </div>
  );
}
