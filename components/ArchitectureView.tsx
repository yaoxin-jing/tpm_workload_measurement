import React, { useState } from 'react';
import { 
  Box, Shield, Cpu, FileCode, Terminal, 
  Workflow, ArrowRight, Layers, Key, Check, Hash, Activity
} from 'lucide-react';
import CodeBlock from './CodeBlock';

type FlowType = 'QUOTE' | 'PCR';

const DEPLOYED_ADDR = {
  testnet: "0xE9adeC0A00c7386224604b127331fEa32977Fa71",
  sepolia: "0x870B920d80Bd11BA32661348A00054F19C05a069"
};

const ArchitectureView: React.FC = () => {
  const [activeFlow, setActiveFlow] = useState<FlowType>('QUOTE');

  return (
    <section className="min-h-screen pt-24 pb-20 px-4 md:px-8 bg-[#020202] text-neutral-200 font-mono selection:bg-cyan-500/30 selection:text-white relative overflow-hidden">
      
      {/* Background Scanlines */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }}>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-6">
          <h1 className="text-3xl md:text-4xl text-white font-bold tracking-tighter mb-2">
            <span className="text-cyan-500 mr-4">//</span>
            3. Architecture <span className="text-neutral-500">—</span> On-chain TPM Attestation
          </h1>
          <p className="text-sm text-cyan-400 font-bold uppercase tracking-[0.3em] pl-12 opacity-80">
            System_Architecture_Overview :: v2.0
          </p>
        </div>

        {/* SUBSECTION A: Core Contracts */}
        <div className="mb-20">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-2.5 h-2.5 bg-cyan-400 animate-pulse"></div>
            <h3 className="text-sm font-black text-cyan-400 uppercase tracking-widest">A. Core Contracts</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-400 z-10 bg-[#020202] px-2">
              <div className="flex flex-col items-center">
                <span className="text-[13px] uppercase mb-1 text-cyan-400 font-bold">Inherits</span>
                <ArrowRight size={20} className="text-cyan-500" />
              </div>
            </div>

            {/* TpmAttestation */}
            <div className="border border-cyan-500/30 bg-cyan-950/5 p-6 relative group hover:bg-cyan-950/10 transition-colors">
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-cyan-500"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-cyan-500"></div>
              
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <Box className="text-cyan-400" size={24} />
                  <span className="text-xl font-black text-white">TpmAttestation.sol</span>
                </div>
                <span className="text-[13px] bg-cyan-900/60 text-cyan-100 px-3 py-1 border border-cyan-500/40 font-bold uppercase">PRIMARY</span>
              </div>
              <p className="text-sm leading-relaxed text-neutral-300">
                The primary entry point. Orchestrates the verification of TPM quotes and PCR measurements. Manages the high-level logic for attestation flows.
              </p>
            </div>

            {/* CertChainRegistry */}
            <div className="border border-fuchsia-500/30 bg-fuchsia-950/5 p-6 relative group hover:bg-fuchsia-950/10 transition-colors">
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-fuchsia-500"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-fuchsia-500"></div>

              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <Shield className="text-fuchsia-400" size={24} />
                  <span className="text-xl font-black text-white">CertChainRegistry.sol</span>
                </div>
                <span className="text-[13px] bg-fuchsia-900/60 text-fuchsia-100 px-3 py-1 border border-fuchsia-500/40 font-bold uppercase">BASE</span>
              </div>
              <p className="text-sm leading-relaxed text-neutral-300">
                The base contract. Manages trusted Certificate Authorities (Root of Trust) and verifies the validity of X.509 certificate chains.
              </p>
            </div>
          </div>
        </div>

        {/* SUBSECTION B: Interactions */}
        <div className="mb-20">
           <div className="flex items-center space-x-2 mb-6">
            <div className="w-2.5 h-2.5 bg-purple-400 animate-pulse"></div>
            <h3 className="text-sm font-black text-purple-400 uppercase tracking-widest">B. Contract Interactions</h3>
          </div>

          <div className="w-full h-[450px] border border-white/10 bg-[#050505] relative rounded-lg overflow-hidden select-none">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#666" />
                </marker>
                <marker id="arrow-neon" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#00f3ff" />
                </marker>
              </defs>
              <path d="M500,60 L500,140" stroke="#00f3ff" strokeWidth="2" fill="none" markerEnd="url(#arrow-neon)" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
              <path d="M420,170 L300,170 L300,220" stroke="#555" strokeWidth="1" fill="none" markerEnd="url(#arrow)" />
              <path d="M300,260 L300,300" stroke="#555" strokeWidth="1" fill="none" markerEnd="url(#arrow)" />
              <path d="M300,340 L300,350 L500,350" stroke="#555" strokeWidth="1" fill="none" markerEnd="url(#arrow)" />
              <path d="M580,170 L700,170 L700,220" stroke="#555" strokeWidth="1" fill="none" markerEnd="url(#arrow)" />
              <path d="M700,260 L640,300" stroke="#555" strokeWidth="1" fill="none" markerEnd="url(#arrow)" />
              <path d="M700,260 L760,300" stroke="#555" strokeWidth="1" fill="none" markerEnd="url(#arrow)" />
              <path d="M500,60 L900,60 L900,370 L580,370" stroke="#555" strokeWidth="1" fill="none" strokeDasharray="2 2" />
            </svg>

            <div className="absolute inset-0 font-mono text-sm">
              <div className="absolute top-[20px] left-1/2 -translate-x-1/2 w-56 p-3 border border-cyan-400 bg-cyan-950/80 text-center shadow-[0_0_15px_rgba(0,243,255,0.3)] z-10">
                <strong className="text-white block font-black uppercase tracking-tighter">TpmAttestation</strong>
                <span className="text-[13px] text-cyan-300 font-bold uppercase">Main Entry Point</span>
              </div>
              <div className="absolute top-[140px] left-1/2 -translate-x-1/2 w-56 p-3 border border-fuchsia-400 bg-fuchsia-950/80 text-center shadow-[0_0_15px_rgba(217,70,239,0.3)] z-10">
                <strong className="text-white block font-black uppercase tracking-tighter">CertChainRegistry</strong>
                <span className="text-[13px] text-fuchsia-300 font-bold uppercase">Base / Cert Manager</span>
              </div>
              <div className="absolute top-[220px] left-[300px] -translate-x-1/2 w-44 p-2.5 border border-white/20 bg-neutral-900 text-center group cursor-help">
                <strong className="text-white block uppercase tracking-tighter">LibX509</strong>
                <span className="text-[13px] text-neutral-400 group-hover:text-cyan-400 transition-colors font-bold">Parses X.509 Certs</span>
              </div>
              <div className="absolute top-[220px] left-[700px] -translate-x-1/2 w-44 p-2.5 border border-purple-400 bg-purple-950/40 text-center group cursor-help">
                <strong className="text-white block uppercase tracking-tighter">Crypto Lib</strong>
                <span className="text-[13px] text-purple-300 group-hover:text-purple-200 transition-colors font-bold">Sig Verification</span>
              </div>
              <div className="absolute top-[300px] left-[300px] -translate-x-1/2 w-40 p-2 border border-white/10 bg-neutral-950 text-center">
                <span className="text-neutral-300 block text-sm uppercase font-bold">Asn1Decode</span>
              </div>
              <div className="absolute top-[300px] left-[640px] -translate-x-1/2 w-32 p-2 border border-white/10 bg-neutral-950 text-center">
                <span className="text-neutral-300 block text-sm uppercase font-bold">RSA</span>
              </div>
              <div className="absolute top-[300px] left-[760px] -translate-x-1/2 w-32 p-2 border border-white/10 bg-neutral-950 text-center">
                <span className="text-neutral-300 block text-sm uppercase font-bold">P256</span>
              </div>
              <div className="absolute top-[380px] left-1/2 -translate-x-1/2 w-48 p-2 border border-white/10 border-dashed bg-neutral-950/50 text-center">
                <span className="text-neutral-400 block text-sm uppercase font-bold">LibBytes / Utils</span>
              </div>
            </div>
          </div>
        </div>

        {/* SUBSECTION C: Interaction Flows */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 bg-green-400 animate-pulse"></div>
              <h3 className="text-sm font-black text-green-400 uppercase tracking-widest">C. Key Interaction Flows</h3>
            </div>
            <div className="flex space-x-1 bg-neutral-900 border border-white/10 p-1">
              <button 
                onClick={() => setActiveFlow('QUOTE')}
                className={`px-6 py-2 text-sm font-mono font-black uppercase transition-all tracking-widest ${activeFlow === 'QUOTE' ? 'bg-cyan-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.5)]' : 'text-neutral-400 hover:text-white'}`}
              >
                1. TPM Quote Verify
              </button>
              <button 
                onClick={() => setActiveFlow('PCR')}
                className={`px-6 py-2 text-sm font-mono font-black uppercase transition-all tracking-widest ${activeFlow === 'PCR' ? 'bg-green-600 text-white shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'text-neutral-400 hover:text-white'}`}
              >
                2. PCR Measurement Check
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10 bg-[#050505]">
            <div className="p-8 border-r border-white/10 relative">
              <div className="absolute top-0 right-0 p-3 text-[13px] text-neutral-500 font-bold font-mono">EXECUTION_STACK</div>
              <div className="space-y-10 relative pl-2">
                <div className="absolute top-2 bottom-2 left-[15px] w-px bg-white/10"></div>
                {activeFlow === 'QUOTE' ? (
                  <>
                    <div className="relative flex items-start group">
                      <div className="w-3 h-3 mt-1.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,1)] z-10 mr-5"></div>
                      <div>
                        <div className="text-sm font-black text-white mb-2 uppercase tracking-wider">User calls verifyTpmQuote()</div>
                        <div className="text-sm text-neutral-400 font-bold font-mono">// Ingests Quote + Sig + Chain</div>
                      </div>
                    </div>
                    <div className="relative flex items-start group">
                      <div className="w-3 h-3 mt-1.5 rounded-full bg-neutral-800 border border-neutral-600 group-hover:bg-fuchsia-400 group-hover:border-fuchsia-300 transition-colors z-10 mr-5"></div>
                      <div>
                        <div className="text-sm font-black text-neutral-200 group-hover:text-fuchsia-300 transition-colors mb-2 uppercase tracking-wider">CertChainRegistry.verifyCertChain()</div>
                        <div className="text-sm text-neutral-400 font-bold font-mono">
                          ├─ Check validity dates<br/>
                          ├─ Extract PubKeys (LibX509)<br/>
                          └─ Verify chain signatures
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative flex items-start group">
                      <div className="w-3 h-3 mt-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,1)] z-10 mr-5"></div>
                      <div>
                        <div className="text-sm font-black text-white mb-2 uppercase tracking-wider">User calls checkPcrMeasurements()</div>
                        <div className="text-sm text-neutral-400 font-bold font-mono">// Quote + ExpectedPCRs</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="bg-[#080808] flex flex-col">
               <div className="flex items-center px-4 py-3 border-b border-white/10 bg-white/5">
                 <Terminal size={14} className="text-neutral-400 mr-2" />
                 <span className="text-sm text-neutral-300 uppercase font-black">Interactive_Editor</span>
               </div>
               <div className="flex-1 p-6 overflow-hidden relative group">
                  {activeFlow === 'QUOTE' ? (
<CodeBlock code={`// 1. Verify Quote & Get Attestation Key
(bool ok, bytes memory akPub) =
    tpmAttestation.verifyTpmQuote(
        tpmQuote,
        tpmSignature,
        certChain
    );

require(ok, "Invalid Quote Signature");`} language="solidity" />
                  ) : (
<CodeBlock code={`// 2. Validate PCR Integrity
(bool success, bytes memory userData) =
    tpmAttestation.checkPcrMeasurements(
        tpmQuote,
        expectedPcrs
    );

require(success, "PCR Mismatch");`} language="solidity" />
                  )}
               </div>
            </div>
          </div>
        </div>

        {/* SUBSECTION D: Supporting Libraries */}
        <div className="mb-20">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-2.5 h-2.5 bg-neutral-400"></div>
            <h3 className="text-sm font-black text-neutral-300 uppercase tracking-widest">D. Supporting Libraries</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
             {[
               { name: 'Crypto.sol', desc: 'Routes RSA/P256 logic' },
               { name: 'LibX509.sol', desc: 'Parses cert structure' },
               { name: 'Asn1Decode.sol', desc: 'DER decoding utils' },
               { name: 'BytesUtils.sol', desc: 'Low-level slicing' },
               { name: 'LibBytes.sol', desc: 'Memory manipulation' },
               { name: 'Constants.sol', desc: 'TPM Algorithms/OIDs' },
             ].map((lib, i) => (
               <div key={i} className="border border-white/10 bg-[#050505] p-4 hover:border-cyan-500/60 hover:bg-cyan-950/20 transition-all cursor-default group">
                 <div className="flex items-center space-x-2 mb-3">
                   <Layers size={14} className="text-neutral-400 group-hover:text-cyan-400" />
                   <span className="text-sm font-black text-white group-hover:text-cyan-200 uppercase tracking-tighter">{lib.name}</span>
                 </div>
                 <div className="text-sm text-neutral-300 font-bold font-mono leading-tight border-t border-white/5 pt-3">
                   {lib.desc}
                 </div>
               </div>
             ))}
          </div>
        </div>

        {/* SUBSECTION E: Features & Addresses */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-2.5 h-2.5 bg-yellow-400"></div>
              <h3 className="text-sm font-black text-yellow-400 uppercase tracking-widest">E. Capabilities</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Verifies TPM 2.0 quotes (RSA-SHA256 / ECDSA-P256)',
                'Validates X.509 Certificate Chains (Up to 4 certs)',
                'Checks PCR Measurements against golden values',
                'Calculates PCRs from event logs',
                'Extracts User Data embedded in quotes',
                'Caches Verified Certificates for gas optimization'
              ].map((feat, i) => (
                <li key={i} className="flex items-start space-x-3 text-sm md:text-base text-neutral-200 font-mono font-medium">
                   <span className="text-cyan-400 font-black mt-0.5">[OK]</span>
                   <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <div className="flex items-center space-x-2 mb-6">
              <div className="w-2.5 h-2.5 bg-red-500 animate-pulse"></div>
              <h3 className="text-sm font-black text-red-500 uppercase tracking-widest">Deployed Instances</h3>
            </div>
            
            <div className="bg-black border border-white/10 p-6 font-mono text-sm relative shadow-[0_0_40px_rgba(0,0,0,0.6)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-800 to-transparent"></div>
              <div className="mb-4 text-neutral-400 font-bold border-b border-white/5 pb-3 uppercase tracking-widest">root@automata-net:~/contracts# list_deployments</div>
              
              <div className="space-y-6">
                <div>
                   <div className="text-neutral-500 mb-2 text-[13px] uppercase font-black tracking-widest">Automata Testnet</div>
                   <div className="flex items-center justify-between group cursor-pointer hover:bg-neutral-900/50 p-2 -mx-2 rounded transition-colors">
                     <span className="text-red-400 font-black break-all">{DEPLOYED_ADDR.testnet}</span>
                     <Hash size={14} className="text-neutral-500 opacity-0 group-hover:opacity-100" />
                   </div>
                </div>
                <div>
                   <div className="text-neutral-500 mb-2 text-[13px] uppercase font-black tracking-widest">Sepolia Testnet</div>
                   <div className="flex items-center justify-between group cursor-pointer hover:bg-neutral-900/50 p-2 -mx-2 rounded transition-colors">
                     <span className="text-red-400 font-black break-all">{DEPLOYED_ADDR.sepolia}</span>
                     <Hash size={14} className="text-neutral-500 opacity-0 group-hover:opacity-100" />
                   </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center text-sm text-green-400 font-black tracking-widest">
                <div className="w-2 h-4 bg-green-500 mr-3 animate-pulse shadow-[0_0_8px_rgba(34,197,94,1)]"></div>
                CONNECTION_SECURED
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureView;