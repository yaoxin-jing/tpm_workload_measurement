import React from 'react';
import CodeBlock from './CodeBlock';
import { Terminal, Cpu, Layers, Play, Hash, ChevronRight, FileJson } from 'lucide-react';

const DocumentationView: React.FC = () => {
  return (
    <section className="min-h-screen pt-20 pb-24 px-4 md:px-8 bg-[#020202] text-neutral-200 font-mono relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-white/5 bg-gradient-to-b from-cyan-950/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-3 text-cyan-400">
               <Terminal size={18} />
               <span className="text-sm tracking-[0.3em] uppercase font-black">System Documentation v1.0.4</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">
              DEV_<span className="text-fuchsia-400">MANUAL</span>
            </h1>
            <p className="text-sm text-cyan-300/80 max-w-xl font-bold uppercase tracking-widest leading-relaxed">
              // COMPLETE REFERENCE FOR ON-CHAIN TPM VERIFICATION PIPELINE
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex space-x-6 text-sm text-neutral-400 uppercase tracking-widest font-black">
            <div className="flex items-center"><div className="w-2 h-2 bg-green-500 mr-2 animate-pulse shadow-[0_0_8px_rgba(34,197,94,1)]"/>Live</div>
            <div className="flex items-center"><div className="w-2 h-2 bg-cyan-400 mr-2 shadow-[0_0_8px_rgba(6,182,212,1)]"/>Updated: NOW</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar / Navigation */}
            <div className="lg:col-span-3 hidden lg:block">
                <div className="sticky top-28 border border-white/10 bg-[#050505]/90 backdrop-blur-md p-5 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                    <div className="text-sm text-cyan-400 uppercase tracking-[0.3em] mb-5 border-b border-white/10 pb-4 font-black">
                        Directory_Tree
                    </div>
                    <ul className="space-y-2 text-sm font-mono font-bold uppercase">
                        <li className="text-white hover:text-cyan-400 cursor-pointer flex items-center group py-3 px-3 bg-white/10 border border-white/5 transition-all">
                            <ChevronRight size={16} className="mr-2 text-cyan-400" /> 01_Setup
                        </li>
                        <li className="text-neutral-400 hover:text-cyan-400 cursor-pointer flex items-center group py-3 px-3 hover:bg-white/5 transition-all">
                             <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> 02_Config
                        </li>
                        <li className="text-neutral-400 hover:text-cyan-400 cursor-pointer flex items-center group py-3 px-3 hover:bg-white/5 transition-all">
                             <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> 03_API_Ref
                        </li>
                         <li className="text-neutral-400 hover:text-cyan-400 cursor-pointer flex items-center group py-3 px-3 hover:bg-white/5 transition-all">
                             <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> 04_Integration
                        </li>
                    </ul>
                    <div className="mt-10 pt-5 border-t border-white/10">
                        <div className="text-[13px] text-neutral-500 mb-3 font-black tracking-widest uppercase">DEPENDENCIES</div>
                        <div className="flex flex-wrap gap-3">
                             <span className="px-2 py-1 bg-neutral-900 text-[13px] text-neutral-300 border border-white/10 font-black">Solidity ^0.8.20</span>
                             <span className="px-2 py-1 bg-neutral-900 text-[13px] text-neutral-300 border border-white/10 font-black">Foundry</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-9 space-y-24">

                {/* 01 Installation */}
                <section>
                    <div className="flex items-center space-x-5 mb-10">
                        <span className="text-cyan-400 font-black text-2xl">01</span>
                        <div className="h-px bg-white/10 flex-1 relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,1)]"></div>
                        </div>
                        <h2 className="text-2xl text-white font-black uppercase tracking-[0.1em]">Installation & Setup</h2>
                    </div>
                    
                    <div className="space-y-12 pl-4 md:pl-8 border-l border-white/10">
                        <div className="group">
                            <h3 className="text-sm text-fuchsia-400 mb-4 flex items-center font-black uppercase tracking-widest">
                                <span className="mr-3 text-fuchsia-600 font-black animate-pulse">{'>'}</span> Install via Foundry
                            </h3>
                            <CodeBlock code="forge install automata-network/automata-tpm-attestation" language="bash" />
                        </div>
                        
                        <div className="group">
                            <h3 className="text-sm text-fuchsia-400 mb-4 flex items-center font-black uppercase tracking-widest">
                                <span className="mr-3 text-fuchsia-600 font-black">{'>'}</span> Configure Remappings
                            </h3>
                            <CodeBlock code={`remappings = [
  "@automata-network/automata-tpm-attestation/=lib/automata-tpm-attestation/src/",
  "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
  "@solady/=lib/solady/src/"
]`} language="toml" />
                        </div>

                        <div className="group">
                            <h3 className="text-sm text-fuchsia-400 mb-4 flex items-center font-black uppercase tracking-widest">
                                <span className="mr-3 text-fuchsia-600 font-black">{'>'}</span> P256 Configuration
                            </h3>
                            <div className="flex items-start space-x-4 mb-6 bg-fuchsia-400/5 p-5 border-l-2 border-fuchsia-500 shadow-[0_0_20px_rgba(217,70,239,0.05)]">
                                <div className="text-fuchsia-400 mt-1 font-black text-lg">!</div>
                                <p className="text-sm text-fuchsia-100 leading-relaxed font-bold uppercase tracking-tight">
                                    CRITICAL: The contract requires P256 ECDSA support. Ensure your target chain supports the precompile or verify via a library.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <CodeBlock label="Option A: RIP-7212 (Rec)" code={`address p256Precompile = 0x100;
TpmAttestation tpm = new TpmAttestation(owner, p256Precompile);`} />
                                <CodeBlock label="Option B: Daimo Verifier" code={`address p256Verifier = 0xc2b...De4;
TpmAttestation tpm = new TpmAttestation(owner, p256Verifier);`} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 03 API Reference */}
                <section>
                    <div className="flex items-center space-x-5 mb-10">
                         <span className="text-cyan-400 font-black text-2xl">03</span>
                        <div className="h-px bg-white/10 flex-1 relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400"></div>
                        </div>
                        <h2 className="text-2xl text-white font-black uppercase tracking-[0.1em]">API Reference</h2>
                    </div>

                    <div className="grid gap-10 pl-4 md:pl-8 border-l border-white/10">
                        <div className="bg-[#080808] border border-white/10 p-8 relative overflow-hidden group hover:border-cyan-500/50 transition-colors">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity"><Cpu size={72} className="text-cyan-500" /></div>
                            <div className="inline-flex items-center px-3 py-1 rounded text-sm font-black bg-cyan-950 text-cyan-300 mb-5 border border-cyan-400/40 uppercase tracking-widest">CORE LOGIC</div>
                            <h3 className="text-cyan-400 font-black mb-3 text-xl uppercase tracking-tight">verifyTpmQuote</h3>
                            <p className="text-sm text-neutral-200 mb-8 font-mono font-medium max-w-xl leading-relaxed">
                                Validates the TPM quote signature against the certificate chain and returns the authenticated public key.
                            </p>
                            <CodeBlock code={`function verifyTpmQuote(
    bytes calldata tpmQuote,
    bytes calldata tpmSignature,
    bytes[] calldata akCertchain
) external returns (bool success, bytes memory encodedAkPub);`} />
                        </div>

                        <div className="bg-[#080808] border border-white/10 p-8 relative overflow-hidden group hover:border-fuchsia-500/50 transition-colors">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity"><Layers size={72} className="text-fuchsia-500" /></div>
                            <div className="inline-flex items-center px-3 py-1 rounded text-sm font-black bg-fuchsia-950 text-fuchsia-300 mb-5 border border-fuchsia-400/40 uppercase tracking-widest">INTEGRITY CHECK</div>
                            <h3 className="text-fuchsia-400 font-black mb-3 text-xl uppercase tracking-tight">checkPcrMeasurements</h3>
                            <p className="text-sm text-neutral-200 mb-8 font-mono font-medium max-w-xl leading-relaxed">
                                Reconstructs the PCR digest (SHA-256) and compares it against the golden reference state.
                            </p>
                            <CodeBlock code={`function checkPcrMeasurements(
    bytes calldata tpmQuote,
    MeasureablePcr[] calldata tpmPcrs
) external pure returns (bool success, bytes memory returnData);`} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentationView;