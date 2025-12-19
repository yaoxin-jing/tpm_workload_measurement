import React, { useState } from 'react';
import { Github, Menu } from 'lucide-react';
import HomeView from './components/HomeView';
import ArchitectureView from './components/ArchitectureView';
import DocumentationView from './components/DocumentationView';
import Verifier from './components/Verifier';
import { ViewState } from './types';

function App() {
  const [view, setView] = useState<ViewState>(ViewState.HOME);

  return (
    <div className="min-h-screen bg-[#020202] text-neutral-200 selection:bg-cyan-500 selection:text-black font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#020202]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => setView(ViewState.HOME)}>
            <div className="w-5 h-5 border border-cyan-500 bg-cyan-500/20 transform rotate-45 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(0,243,255,0.8)] transition-all duration-300" />
            <span className="font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors text-lg">AUTOMATA<span className="text-neutral-400">_TPM</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            {[
              { id: ViewState.HOME, label: 'Overview' },
              { id: ViewState.ARCHITECTURE, label: 'Architecture' },
              { id: ViewState.VERIFIER, label: 'Verifier' },
              { id: ViewState.DOCS, label: 'Documentation' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => setView(item.id)}
                className={`relative px-5 py-2 text-sm font-mono uppercase tracking-widest transition-all duration-300 font-bold ${
                  view === item.id 
                    ? 'text-cyan-400' 
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {item.label}
                {view === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 shadow-[0_0_12px_rgba(0,243,255,1)]" />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-8">
            <a href="https://github.com/automata-network/automata-tpm-attestation" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-cyan-400 transition-colors">
              <Github size={22} />
            </a>
            <button className="md:hidden text-white hover:text-cyan-400">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pt-16">
        
        {view === ViewState.HOME && <HomeView changeView={setView} />}
        
        {view === ViewState.ARCHITECTURE && <ArchitectureView />}

        {view === ViewState.VERIFIER && (
          <section className="min-h-[85vh] py-24 px-6 flex flex-col items-center relative">
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-cyan-900/20 to-transparent pointer-events-none" />
            <div className="max-w-2xl text-center mb-16 relative z-10">
              <div className="inline-flex items-center space-x-3 mb-6 px-4 py-1.5 border border-cyan-500/30 rounded-full bg-cyan-950/40">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-sm font-mono text-cyan-300 uppercase tracking-widest font-bold">Interactive Demo</span>
              </div>
              <h2 className="text-5xl font-light text-white mb-8">Live Attestation Simulator</h2>
              <p className="text-neutral-200 leading-relaxed font-mono text-base max-w-xl mx-auto">
                Test the verification logic with a sample TPM quote. 
                In a production environment, this occurs entirely within your smart contract transaction.
              </p>
            </div>
            <Verifier />
          </section>
        )}

        {view === ViewState.DOCS && <DocumentationView />}

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 mt-20 bg-[#020202]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
             <div className="w-3 h-3 bg-cyan-500 transform rotate-45" />
             <span className="text-base font-bold tracking-tight text-white uppercase">AUTOMATA NETWORK</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-10 text-sm font-mono text-neutral-400 uppercase tracking-widest font-bold">
            <button onClick={() => setView(ViewState.DOCS)} className="hover:text-cyan-400 transition-colors cursor-pointer">Documentation</button>
            <a href="https://github.com/automata-network/automata-tpm-attestation" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;