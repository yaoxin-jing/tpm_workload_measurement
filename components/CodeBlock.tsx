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
    <div className="border border-white/10 bg-[#050505] overflow-hidden my-6 group relative shadow-[0_0_20px_rgba(0,0,0,0.5)]">
      {label && (
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/5">
          <div className="flex items-center space-x-3">
            <Terminal size={14} className="text-cyan-400" />
            <span className="text-sm font-mono text-cyan-400 uppercase tracking-widest font-black">{label}</span>
          </div>
          <span className="text-[13px] font-mono text-neutral-400 font-bold uppercase">{language}</span>
        </div>
      )}
      <div className="relative p-6">
        <button 
          onClick={handleCopy}
          className="absolute top-4 right-4 p-2 rounded-none border border-white/20 bg-black/50 hover:border-cyan-500/50 hover:text-cyan-400 text-neutral-400 transition-all opacity-0 group-hover:opacity-100 z-10"
          title="Copy Code"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
        <pre className="font-mono text-sm text-white overflow-x-auto leading-relaxed scrollbar-thin">
          <code className="selection:bg-cyan-500/40 selection:text-white">
            {code.trim().split('\n').map((line, i) => (
              <div key={i} className="table-row">
                <span className="table-cell select-none text-neutral-400 text-right pr-6 text-[13px] opacity-70 font-bold">{i + 1}</span>
                <span className="table-cell">{line}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500/40 opacity-50" />
    </div>
  );
};

export default CodeBlock;