import React from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  label?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'solidity', label }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border border-cyan-500/20 bg-[#050505] overflow-hidden my-6 group relative shadow-[0_0_15px_rgba(0,243,255,0.05)]">
      {label && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-cyan-500/20 bg-cyan-950/10">
          <div className="flex items-center space-x-2">
            <Terminal size={12} className="text-cyan-500" />
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">{label}</span>
          </div>
          <span className="text-[10px] font-mono text-neutral-500">{language}</span>
        </div>
      )}
      <div className="relative p-4">
        <button 
          onClick={handleCopy}
          className="absolute top-4 right-4 p-2 rounded-none border border-cyan-500/20 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-cyan-500 transition-all opacity-0 group-hover:opacity-100 z-10"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
        <pre className="font-mono text-xs sm:text-sm text-neutral-300 overflow-x-auto leading-relaxed">
          <code className="selection:bg-fuchsia-500/30 selection:text-white">
            {code.trim().split('\n').map((line, i) => (
              <div key={i} className="table-row">
                <span className="table-cell select-none text-neutral-700 text-right pr-4 text-xs">{i + 1}</span>
                <span className="table-cell">{line}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-500 opacity-50" />
    </div>
  );
};

export default CodeBlock;