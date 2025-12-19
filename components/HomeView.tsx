import React from 'react';
import HalftoneMonolith from './HalftoneMonolith';
import { CheckCircle2, XCircle, ArrowRight, Terminal } from 'lucide-react';
import { ViewState } from '../types';

interface HomeViewProps {
  changeView: (view: ViewState) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ changeView }) => {
  return (
    <>
      {/* Hero Section - Balanced Centered-Left Design */}
      <section className="relative min-h-screen flex flex-col md:flex-row bg-[#020202] overflow-hidden">
        
        {/* Left Panel: Content Area (58% width) */}
        <div className="w-full md:w-[58%] flex items-center justify-center md:justify-end px-6 py-24 relative z-20 bg-[#020202]">
          <div className="max-w-2xl w-full md:mr-16 lg:mr-24 xl:mr-32">
            <div className="inline-block px-3 py-1 mb-8 border border-cyan-400/30 bg-cyan-400/5 rounded-sm">
              <span className="text-sm font-mono uppercase tracking-[0.4em] text-cyan-400 font-bold">
                Hardware_Level_Verification
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-10 leading-[0.85] uppercase">
              BRINGING<br />TPM<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-neutral-100 to-fuchsia-500">
                ATTESTATION<br />ON-CHAIN
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-100 font-normal leading-relaxed mb-12 font-mono max-w-lg">
              [CMD]: Establish_Remote_Trust<br />
              [STS]: Validating <span className="text-white border-b-2 border-cyan-400 font-medium">hardware integrity</span> as a native capability of decentralized protocols.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button 
                onClick={() => changeView(ViewState.VERIFIER)}
                className="group h-14 px-10 bg-cyan-500 text-black font-bold font-mono text-sm tracking-[0.2em] uppercase hover:bg-cyan-400 transition-all duration-300 w-full sm:w-auto flex items-center justify-center space-x-3 rounded-sm shadow-[0_0_20px_rgba(6,182,212,0.2)]"
              >
                <span>Initialize_Verifier</span>
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
              
              <button 
                onClick={() => changeView(ViewState.ARCHITECTURE)}
                className="h-14 px-10 bg-transparent border border-white/30 text-neutral-200 font-mono font-bold text-sm tracking-widest uppercase hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all w-full sm:w-auto flex items-center justify-center rounded-sm"
              >
                <span>Architecture</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel: Computational Visual (42% width) */}
        <div className="w-full md:w-[42%] relative bg-[#050505] flex items-center justify-center border-l border-white/5 overflow-hidden">
          
          {/* Transition Gradient */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#020202] to-transparent z-10 hidden md:block" />

          <div className="w-full h-full relative group">
            {/* The Monolith Component - Clean version without text overlays */}
            <div className="w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-1000">
               <HalftoneMonolith />
            </div>

            {/* Subtle decorative scanline/grid only, no text */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 border-b border-white/5 bg-[#020202]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-baseline space-x-6 mb-16">
            <span className="text-sm font-mono text-cyan-400 uppercase tracking-[0.4em] font-bold">01 / Challenge</span>
            <h2 className="text-3xl font-light text-white font-mono uppercase tracking-tighter">Remote Integrity Problem</h2>
          </div>
          
          <div className="prose prose-invert max-w-none text-neutral-200 font-mono text-base leading-relaxed">
            <p className="mb-8 text-xl text-neutral-100 leading-normal">
              [ANALYSIS]: Decentralized protocols require a definitive mechanism to verify that a remote machine is physically secure and running untampered software.
            </p>
            <p className="mb-10 border-l-2 border-cyan-500/60 pl-8 text-neutral-300 italic text-lg">
              Automata TPM allows hardware to prove its own state directly to the blockchain, removing the need for intermediary trust anchors or opaque oracle networks.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
              {[
                { title: 'Opaque Nodes', icon: <XCircle className="text-red-500/60" size={32} />, risk: 'State manipulation' },
                { title: 'Cloud Control', icon: <XCircle className="text-red-500/60" size={32} />, risk: 'Platform lock-in' },
                { title: 'Oracle Trust', icon: <XCircle className="text-red-500/60" size={32} />, risk: 'Single point of failure' }
              ].map((item, i) => (
                <div key={i} className="p-8 border border-white/10 bg-[#050505] hover:border-cyan-500/50 transition-all duration-500 rounded-sm group">
                  <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-sm font-bold font-mono text-white mb-3 uppercase tracking-[0.2em]">{item.title}</h3>
                  <p className="text-sm text-red-400 leading-relaxed font-mono uppercase font-bold">{item.risk}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Primatives Section */}
      <section className="py-32 bg-[#030303] border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-baseline space-x-6 mb-16">
            <span className="text-sm font-mono text-fuchsia-400 uppercase tracking-[0.4em] font-bold">02 / Automata Tech</span>
            <h2 className="text-3xl font-light text-white font-mono uppercase tracking-tighter">On-Chain Primitives</h2>
          </div>
          
          <p className="text-2xl text-white font-mono mb-20 leading-tight max-w-4xl">
            [SYS_UNIT]: Direct <span className="text-cyan-400 font-bold">TPM Quote Verification</span> and <span className="text-cyan-400 font-bold">PCR Validation</span> implemented as gas-optimized Solidity kernels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-20">
            {[
              { label: 'Cert Chain Anchoring', desc: 'Validates DER-encoded hardware certificates against trusted CAs.' },
              { label: 'PCR Measurement Rebuild', desc: 'Reconstructs runtime integrity states from verifiable event logs.' },
              { label: 'RSA & P256 Crypto', desc: 'Hardware-agnostic signature verification via optimized math libraries.' },
              { label: 'Secure Data Extraction', desc: 'Retrieves nonces and keys directly from signed attestation blobs.' }
            ].map((feature, i) => (
              <div key={i} className="flex items-start space-x-8 group">
                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center border border-cyan-500/40 bg-cyan-400/5 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300 rounded-sm">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-white font-mono uppercase tracking-[0.2em] mb-3 text-sm font-black">{feature.label}</h4>
                  <p className="text-sm text-neutral-300 leading-relaxed font-mono">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 mb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-baseline justify-center space-x-6 mb-16">
            <span className="text-sm font-mono text-neutral-400 uppercase tracking-[0.4em] font-bold">03 / Implementation</span>
            <h2 className="text-3xl font-light text-white font-mono uppercase tracking-tighter">Ready for Deployment</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center mb-24">
             {[
               'Public Verifiability', 'Full Reproducibility', 'No Intermediaries', 'Immutable Proofs', 'Auditability'
             ].map((text, i) => (
               <div key={i} className="p-4 border border-white/20 bg-[#050505] flex flex-col items-center justify-center min-h-[140px] hover:border-cyan-500/50 hover:bg-cyan-400/5 transition-all group rounded-sm">
                 <div className="text-neutral-500 mb-4 group-hover:text-cyan-400 transition-colors"><CheckCircle2 size={20}/></div>
                 <span className="text-sm font-mono font-bold text-neutral-300 group-hover:text-neutral-100 transition-colors uppercase tracking-[0.2em]">{text}</span>
               </div>
             ))}
          </div>

          <button 
            onClick={() => changeView(ViewState.DOCS)}
            className="px-20 py-6 bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300 text-sm font-bold font-mono tracking-[0.3em] uppercase rounded-sm shadow-[0_0_25px_rgba(6,182,212,0.1)] active:scale-95"
          >
            Start_Integration
          </button>
        </div>
      </section>
    </>
  );
};

export default HomeView;