
import React from 'react';
import HalftoneMonolith from './HalftoneMonolith';
import { Shield, Server, Cpu, Database, CheckCircle2, XCircle, ArrowRight, Zap, Lock, Terminal } from 'lucide-react';
import { ViewState } from '../types';

interface HomeViewProps {
  changeView: (view: ViewState) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ changeView }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-white/5 bg-[#020202]">
        {/* Background Visual Element - Computational Monolith on Right */}
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2 lg:w-[45%] z-0 pointer-events-none select-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* The Monolith */}
            <div className="w-full h-full opacity-40 md:opacity-100">
               <HalftoneMonolith />
            </div>
            {/* Blending Gradient - Fades from solid background on left to transparent on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-[#020202]/80 md:via-[#020202]/40 to-transparent z-10" />
            {/* Vertical Splitter Light Edge (Optional aesthetic) */}
            <div className="absolute left-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent hidden md:block" />
          </div>
        </div>
        
        {/* Text Content - Left Aligned */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1 mb-8 border border-cyan-500/30 rounded-full bg-cyan-950/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,243,255,0.05)]">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-400 font-bold">
                Automata Network Research
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8 leading-[0.95] md:leading-[0.9]">
              BRINGING TPM<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                ATTESTATION<br />ON-CHAIN
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-300 font-normal leading-relaxed mb-12 max-w-xl">
              Verifying Hardware Integrity in Smart Contracts. <br className="hidden md:block" />
              Establishing <span className="text-white border-b border-cyan-500/50 pb-0.5 shadow-[0_0_10px_rgba(0,243,255,0.1)]">hardware-rooted trust</span> as a native capability of decentralized systems.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button 
                onClick={() => changeView(ViewState.VERIFIER)}
                className="group h-14 px-10 bg-cyan-500 text-black font-bold font-mono text-xs tracking-widest uppercase hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(0,243,255,0.2)] hover:shadow-[0_0_40px_rgba(0,243,255,0.5)] w-full sm:w-auto flex items-center justify-center space-x-3"
              >
                <span>Launch Verifier</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => changeView(ViewState.ARCHITECTURE)}
                className="h-14 px-10 bg-transparent border border-white/10 text-neutral-400 font-mono font-bold text-xs tracking-widest uppercase hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-950/5 transition-all w-full sm:w-auto"
              >
                Architecture
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction: Problem of Trust */}
      <section className="py-24 border-b border-white/5 bg-[#020202]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-baseline space-x-4 mb-16">
            <span className="text-xs font-mono text-cyan-600 uppercase tracking-widest">01 / Introduction</span>
            <h2 className="text-3xl font-light text-white">The Problem of Trust</h2>
          </div>
          
          <div className="prose prose-invert max-w-none text-neutral-300 font-normal leading-relaxed">
            <p className="mb-6 text-xl">
              As decentralized applications increasingly depend on real-world data and complex off-chain infrastructure, the question of trust becomes central: <span className="text-cyan-400 font-bold">how can a smart contract verify that a remote machine is running the software it claims to be running?</span>
            </p>
            <p className="mb-8">
              Historically, developers have relied on trusting node operators, blind trust in cloud providers, or off-chain attestation validation servers. All of these introduce centralized points of failure, fundamentally misaligned with the goals of trustless, decentralized systems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="p-8 border border-red-900/30 bg-red-950/5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-red-600/50" />
                <XCircle className="text-red-500 mb-6 group-hover:scale-110 transition-transform duration-500" size={32} />
                <h3 className="text-sm font-bold font-mono text-white mb-2 uppercase tracking-wide">Node Operator Trust</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">Requires blind faith that the operator isn't manipulating the execution environment.</p>
              </div>
              <div className="p-8 border border-red-900/30 bg-red-950/5 relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-full h-1 bg-red-600/50" />
                <XCircle className="text-red-500 mb-6 group-hover:scale-110 transition-transform duration-500" size={32} />
                <h3 className="text-sm font-bold font-mono text-white mb-2 uppercase tracking-wide">Cloud Provider Trust</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">Assumes the underlying cloud infrastructure is secure and uncompromised.</p>
              </div>
              <div className="p-8 border border-red-900/30 bg-red-950/5 relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-full h-1 bg-red-600/50" />
                <XCircle className="text-red-500 mb-6 group-hover:scale-110 transition-transform duration-500" size={32} />
                <h3 className="text-sm font-bold font-mono text-white mb-2 uppercase tracking-wide">Off-Chain Servers</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">Reintroduces centralization by delegating verification to opaque servers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="py-24 bg-[#030303] border-b border-white/5 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
           <div className="flex items-baseline space-x-4 mb-16">
            <span className="text-xs font-mono text-fuchsia-500 uppercase tracking-widest">02 / Solution</span>
            <h2 className="text-3xl font-light text-white">Automata TPM Attestation</h2>
          </div>
          
          <p className="text-2xl text-white font-light mb-16 leading-normal max-w-4xl">
            A Solidity library providing complete <span className="text-cyan-400 font-normal">TPM quote verification inside the EVM</span>. It challenges the legacy model by enabling hardware-rooted attestation proofs to be verified directly inside smart contracts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 flex items-center justify-center border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 group-hover:border-cyan-500 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 className="text-white font-mono uppercase tracking-wide mb-2 text-sm">X.509 Certificate Validation</h4>
                <p className="text-sm text-neutral-300 leading-relaxed">Verifies the chain of trust from the hardware vendor to the specific device.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 group">
               <div className="w-12 h-12 flex items-center justify-center border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 group-hover:border-cyan-500 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 className="text-white font-mono uppercase tracking-wide mb-2 text-sm">PCR Measurement Verification</h4>
                <p className="text-sm text-neutral-300 leading-relaxed">Validates the boot state, kernel, and application integrity against golden values.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 group">
               <div className="w-12 h-12 flex items-center justify-center border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 group-hover:border-cyan-500 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 className="text-white font-mono uppercase tracking-wide mb-2 text-sm">RSA & P256 Signatures</h4>
                <p className="text-sm text-neutral-300 leading-relaxed">Supports industry-standard cryptographic primitives for broad hardware compatibility.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 group">
               <div className="w-12 h-12 flex items-center justify-center border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 group-hover:border-cyan-500 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 className="text-white font-mono uppercase tracking-wide mb-2 text-sm">User Data Extraction</h4>
                <p className="text-sm text-neutral-300 leading-relaxed">Securely extracts embedded data (nonces, public keys) from the signed quote.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real World Scenario */}
      <section className="py-24 border-b border-white/5 relative overflow-hidden bg-[#020202]">
        <div className="absolute top-0 right-0 w-2/3 h-full halftone-grid opacity-20 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex items-baseline space-x-4 mb-16">
            <span className="text-xs font-mono text-green-500 uppercase tracking-widest">03 / Use Case</span>
            <h2 className="text-3xl font-light text-white">Trustless Oracle Nodes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-neutral-300 mb-10 leading-relaxed text-lg">
                In a decentralized oracle network, nodes traditionally submit values to smart contracts without any hardware-verified guarantee about what software produced those values. With TPM attestation, this changes fundamental trust assumptions.
              </p>
              
              <div className="space-y-4">
                <div className="group border-l-2 border-neutral-800 hover:border-cyan-500 pl-6 py-2 transition-colors">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase mb-1 group-hover:text-cyan-400">Step 1: Measurement</div>
                  <p className="text-sm text-white font-normal">TPM measures firmware, bootloader, kernel, and application state into PCRs.</p>
                </div>
                <div className="group border-l-2 border-neutral-800 hover:border-cyan-500 pl-6 py-2 transition-colors">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase mb-1 group-hover:text-cyan-400">Step 2: Quote Generation</div>
                  <p className="text-sm text-white font-normal">The application requests a TPM quote signed by a hardware-protected Attestation Key.</p>
                </div>
                <div className="group border-l-2 border-neutral-800 hover:border-cyan-500 pl-6 py-2 transition-colors">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase mb-1 group-hover:text-cyan-400">Step 3: Submission</div>
                  <p className="text-sm text-white font-normal">The node submits Oracle Result + TPM Quote + TPM Signature + Certificate Chain.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#050505] p-8 border border-neutral-800 relative shadow-2xl">
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-cyan-500" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-cyan-500" />
              
              <h3 className="text-xs font-mono text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-4 flex items-center">
                <Terminal size={14} className="mr-2 text-cyan-500" />
                Smart Contract Verification
              </h3>
              <ul className="space-y-6 font-mono text-xs">
                <li className="flex items-center justify-between">
                  <span className="text-neutral-500">Certificate Chain</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-cyan-900">--------&gt;</span>
                    <span className="text-green-400">Trusted TPM</span>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-neutral-500">Quote Signature</span>
                  <div className="flex items-center space-x-2">
                     <span className="text-cyan-900">--------&gt;</span>
                    <span className="text-green-400">Authenticity</span>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-neutral-500">PCR Values</span>
                  <div className="flex items-center space-x-2">
                     <span className="text-cyan-900">--------&gt;</span>
                    <span className="text-green-400">Runtime Integrity</span>
                  </div>
                </li>
                 <li className="flex items-center justify-between">
                  <span className="text-neutral-500">User Data</span>
                  <div className="flex items-center space-x-2">
                     <span className="text-cyan-900">--------&gt;</span>
                    <span className="text-green-400">Payload Validity</span>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-green-950/20 border border-green-500/20 text-green-400 text-xs text-center font-mono">
                [SUCCESS] No oracle node can forge its execution environment.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role of TPM */}
      <section className="py-24 border-b border-white/5 bg-[#030303]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-baseline space-x-4 mb-16">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">04 / Hardware</span>
            <h2 className="text-3xl font-light text-white">The Role of the TPM</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-white/10 p-10 hover:border-fuchsia-500/50 transition duration-500 group bg-neutral-900/10">
              <Database className="text-neutral-400 mb-8 group-hover:text-fuchsia-500 transition-colors" size={32} strokeWidth={1} />
              <h3 className="text-xl font-medium text-white mb-4">Platform Configuration Registers (PCRs)</h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                PCRs store measurements of every component in the boot chain. They act as a digital fingerprint of the system state.
              </p>
              <div className="text-xs font-mono text-fuchsia-400 border-l border-fuchsia-500/50 pl-4 py-1">
                Any tampering with the software stack results in different PCR values, invalidating the proof.
              </div>
            </div>
            
            <div className="border border-white/10 p-10 hover:border-cyan-500/50 transition duration-500 group bg-neutral-900/10">
              <Lock className="text-neutral-400 mb-8 group-hover:text-cyan-500 transition-colors" size={32} strokeWidth={1} />
              <h3 className="text-xl font-medium text-white mb-4">Attestation Keys (AK)</h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                A non-exportable signing key generated inside the TPM used specifically to sign quotes.
              </p>
              <ul className="text-xs font-mono text-cyan-400 space-y-2">
                <li>&gt; Cryptographically bound to hardware</li>
                <li>&gt; Cannot be extracted or cloned</li>
                <li>&gt; Provides non-repudiation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why On-Chain Verification Matters */}
      <section className="py-24 mb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-baseline space-x-4 mb-16">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">05 / Impact</span>
            <h2 className="text-3xl font-light text-white">Why On-Chain Verification Matters</h2>
          </div>
          
          <div className="text-center mb-16">
             <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Traditional attestation flows depend on centralized verification servers. 
              Automata TPM Attestation yields:
             </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center mb-20">
             {[
               {text: 'Public Verifiability', icon: <CheckCircle2 size={16}/>}, 
               {text: 'Full Reproducibility', icon: <CheckCircle2 size={16}/>}, 
               {text: 'No Intermediaries', icon: <CheckCircle2 size={16}/>}, 
               {text: 'Immutable Results', icon: <CheckCircle2 size={16}/>}, 
               {text: 'On-Chain Auditability', icon: <CheckCircle2 size={16}/>}
             ].map((item, i) => (
               <div key={i} className="p-4 border border-white/10 bg-white/5 flex flex-col items-center justify-center min-h-[120px] hover:bg-cyan-950/20 hover:border-cyan-500/30 transition-all group">
                 <div className="text-neutral-600 mb-3 group-hover:text-cyan-400 transition-colors">{item.icon}</div>
                 <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">{item.text}</span>
               </div>
             ))}
          </div>

          <div className="text-center">
             <div className="inline-block p-[1px] bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 rounded">
               <button 
                  onClick={() => changeView(ViewState.DOCS)}
                  className="px-10 py-5 bg-[#020202] text-white hover:bg-neutral-900 transition-all duration-300 text-sm font-bold font-mono tracking-widest uppercase rounded-sm"
                >
                  Start Integration
                </button>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeView;
