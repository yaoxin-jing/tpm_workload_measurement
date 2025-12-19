import React, { useState } from 'react';
import { 
  Box, Shield, Cpu, FileCode, Terminal, 
  Workflow, ArrowRight, Layers, Key, Check, Hash, Activity
} from 'lucide-react';
import CodeBlock from './CodeBlock';

// --- Types & Constants ---

type FlowType = 'QUOTE' | 'PCR';

const DEPLOYED_ADDR = {
  testnet: "0xE9adeC0A00c7386224604b127331fEa32977Fa71",
  sepolia: "0x870B920d80Bd11BA32661348A00054F19C05a069"
};

const ArchitectureView: React.FC = () => {
  const [activeFlow, setActiveFlow] = useState<FlowType>('QUOTE');

  return (
    <section className="min-h-screen pt-24 pb-20 px-4 md:px-8 bg-[#020202] text-neutral-300 font-mono selection:bg-cyan-500/30 selection:text-white relative overflow-hidden">
      
      {/* Background Scanlines */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }}>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16 border-b border-cyan-500/30 pb-6">
          <h1 className="text-3xl md:text-4xl text-white font-bold tracking-tighter mb-2">
            <span className="text-cyan-500 mr-4">//</span>
            3. Architecture <span className="text-neutral-600">—</span> On-chain TPM Attestation
          </h1>
          <p className="text-sm text-cyan-400/60 pl-12 uppercase tracking-widest">
            System_Architecture_Overview :: v2.0
          </p>
        </div>

        {/* SUBSECTION A: Core Contracts */}
        <div className="mb-20">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-cyan-500 animate-pulse"></div>
            <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest">A. Core Contracts</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* Connection Line (Visual only for desktop) */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-600 z-10 bg-[#020202] px-2">
              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase mb-1 text-cyan-500/50">Inherits</span>
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
                  <span className="text-lg font-bold text-white">TpmAttestation.sol</span>
                </div>
                <span className="text-[10px] bg-cyan-900/40 text-cyan-300 px-2 py-1 border border-cyan-500/20">PRIMARY</span>
              </div>
              <p className="text-xs leading-relaxed text-neutral-400">
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
                  <span className="text-lg font-bold text-white">CertChainRegistry.sol</span>
                </div>
                <span className="text-[10px] bg-fuchsia-900/40 text-fuchsia-300 px-2 py-1 border border-fuchsia-500/20">BASE</span>
              </div>
              <p className="text-xs leading-relaxed text-neutral-400">
                The base contract. Manages trusted Certificate Authorities (Root of Trust) and verifies the validity of X.509 certificate chains.
              </p>
            </div>
          </div>
        </div>

        {/* SUBSECTION B: Interactions */}
        <div className="mb-20">
           <div className="flex items-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-purple-500 animate-pulse"></div>
            <h3 className="text-sm font-bold text-purple-400 uppercase tracking-widest">B. Contract Interactions</h3>
          </div>

          <div className="w-full h-[400px] border border-neutral-800 bg-[#050505] relative rounded-lg overflow-hidden select-none">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            {/* SVG Layer for Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#333" />
                </marker>
                <marker id="arrow-neon" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#00f3ff" />
                </marker>
              </defs>
              
              {/* Inheritance Path */}
              <path d="M500,60 L500,140" stroke="#00f3ff" strokeWidth="2" fill="none" markerEnd="url(#arrow-neon)" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
              
              {/* CertChain to LibX509 */}
              <path d="M420,170 L300,170 L300,220" stroke="#444" strokeWidth="1" fill="none" markerEnd="url(#arrow)" />
              
              {/* LibX509 to Asn1 */}
              <path d="M300,260 L300,300" stroke="#444" strokeWidth="1" fill="none" markerEnd="url(#arrow)" />
              
              {/* Asn1 to Bytes */}
              <path d="M300,340 L300,350 L500,350" stroke="#444" strokeWidth="1" fill="none" markerEnd="url(#arrow)" />

              {/* Tpm to Crypto */}
              <path d="M580,170 L700,170 L700,220" stroke="#444" strokeWidth="1" fill="none" markerEnd="url(#arrow)" />
              
              {/* Crypto to RSA/P256 */}
              <path d="M700,260 L640,300" stroke="#444" strokeWidth="1" fill="none" markerEnd="url(#arrow)" />
              <path d="M700,260 L760,300" stroke="#444" strokeWidth="1" fill="none" markerEnd="url(#arrow)" />

              {/* Tpm to Utils */}
              <path d="M500,60 L900,60 L900,370 L580,370" stroke="#444" strokeWidth="1" fill="none" strokeDasharray="2 2" />

            </svg>

            {/* Nodes Layout (Absolute for precise diagram mapping) */}
            <div className="absolute inset-0 font-mono text-xs">
              
              {/* Top Node */}
              <div className="absolute top-[20px] left-1/2 -translate-x-1/2 w-48 p-2 border border-cyan-500 bg-cyan-950/80 text-center shadow-[0_0_15px_rgba(0,243,255,0.2)] z-10">
                <strong className="text-cyan-300 block">TpmAttestation</strong>
                <span className="text-[9px] text-cyan-600">Main Entry Point</span>
              </div>

              {/* Level 2 */}
              <div className="absolute top-[140px] left-1/2 -translate-x-1/2 w-48 p-2 border border-fuchsia-500 bg-fuchsia-950/80 text-center shadow-[0_0_15px_rgba(217,70,239,0.2)] z-10">
                <strong className="text-fuchsia-300 block">CertChainRegistry</strong>
                <span className="text-[9px] text-fuchsia-600">Base / Cert Manager</span>
              </div>

              {/* Level 3 Left */}
              <div className="absolute top-[220px] left-[300px] -translate-x-1/2 w-36 p-1.5 border border-neutral-700 bg-neutral-900 text-center group cursor-help">
                <strong className="text-white block">LibX509</strong>
                <span className="text-[9px] text-neutral-500 group-hover:text-white transition-colors">Parses X.509 Certs</span>
              </div>

              {/* Level 3 Right */}
              <div className="absolute top-[220px] left-[700px] -translate-x-1/2 w-36 p-1.5 border border-purple-500/50 bg-purple-950/20 text-center group cursor-help">
                <strong className="text-purple-300 block">Crypto Lib</strong>
                <span className="text-[9px] text-purple-500 group-hover:text-purple-300 transition-colors">Sig Verification</span>
              </div>

              {/* Level 4 Left */}
              <div className="absolute top-[300px] left-[300px] -translate-x-1/2 w-32 p-1.5 border border-neutral-800 bg-neutral-950 text-center opacity-80">
                <span className="text-neutral-400 block">Asn1Decode</span>
              </div>

              {/* Level 4 Right */}
              <div className="absolute top-[300px] left-[640px] -translate-x-1/2 w-24 p-1.5 border border-neutral-800 bg-neutral-950 text-center opacity-80">
                <span className="text-neutral-400 block">RSA</span>
              </div>
              <div className="absolute top-[300px] left-[760px] -translate-x-1/2 w-24 p-1.5 border border-neutral-800 bg-neutral-950 text-center opacity-80">
                <span className="text-neutral-400 block">P256</span>
              </div>

              {/* Bottom Level */}
              <div className="absolute top-[350px] left-1/2 -translate-x-1/2 w-40 p-1.5 border border-neutral-800 border-dashed bg-neutral-950/50 text-center">
                <span className="text-neutral-500 block">LibBytes / Utils</span>
              </div>

            </div>
          </div>
        </div>

        {/* SUBSECTION C: Interaction Flows */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 animate-pulse"></div>
              <h3 className="text-sm font-bold text-green-400 uppercase tracking-widest">C. Key Interaction Flows</h3>
            </div>
            {/* Tabs */}
            <div className="flex space-x-1 bg-neutral-900 border border-neutral-800 p-1">
              <button 
                onClick={() => setActiveFlow('QUOTE')}
                className={`px-4 py-1.5 text-xs font-mono font-bold uppercase transition-all ${activeFlow === 'QUOTE' ? 'bg-cyan-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.5)]' : 'text-neutral-500 hover:text-white'}`}
              >
                1. TPM Quote Verify
              </button>
              <button 
                onClick={() => setActiveFlow('PCR')}
                className={`px-4 py-1.5 text-xs font-mono font-bold uppercase transition-all ${activeFlow === 'PCR' ? 'bg-green-600 text-white shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'text-neutral-500 hover:text-white'}`}
              >
                2. PCR Measurement Check
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-neutral-800 bg-[#050505]">
            
            {/* Left: Stepper */}
            <div className="p-8 border-r border-neutral-800 relative">
              <div className="absolute top-0 right-0 p-2 text-[10px] text-neutral-600 font-mono">EXECUTION_STACK</div>
              
              <div className="space-y-8 relative pl-2">
                {/* Vertical Line */}
                <div className="absolute top-2 bottom-2 left-[15px] w-px bg-neutral-800"></div>

                {activeFlow === 'QUOTE' ? (
                  <>
                    <div className="relative flex items-start group">
                      <div className="w-2 h-2 mt-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] z-10 mr-4"></div>
                      <div>
                        <div className="text-xs font-bold text-white mb-1 uppercase">User calls verifyTpmQuote()</div>
                        <div className="text-[10px] text-neutral-500 font-mono">// Ingests Quote + Sig + Chain</div>
                      </div>
                    </div>
                    <div className="relative flex items-start group">
                      <div className="w-2 h-2 mt-1.5 rounded-full bg-neutral-700 border border-neutral-500 group-hover:bg-fuchsia-500 group-hover:border-fuchsia-400 transition-colors z-10 mr-4"></div>
                      <div>
                        <div className="text-xs font-bold text-neutral-300 group-hover:text-fuchsia-400 transition-colors mb-1 uppercase">CertChainRegistry.verifyCertChain()</div>
                        <div className="text-[10px] text-neutral-500 font-mono">
                          ├─ Check validity dates<br/>
                          ├─ Extract PubKeys (LibX509)<br/>
                          └─ Verify chain signatures
                        </div>
                      </div>
                    </div>
                    <div className="relative flex items-start group">
                      <div className="w-2 h-2 mt-1.5 rounded-full bg-neutral-700 border border-neutral-500 group-hover:bg-purple-500 group-hover:border-purple-400 transition-colors z-10 mr-4"></div>
                      <div>
                        <div className="text-xs font-bold text-neutral-300 group-hover:text-purple-400 transition-colors mb-1 uppercase">_verifyTpmQuoteSignature()</div>
                        <div className="text-[10px] text-neutral-500 font-mono">
                          └─ Validate via RSA or P256
                        </div>
                      </div>
                    </div>
                    <div className="relative flex items-start group">
                      <div className="w-2 h-2 mt-1.5 rounded-full bg-cyan-900 border border-cyan-500 z-10 mr-4"></div>
                      <div>
                        <div className="text-xs font-bold text-cyan-400 mb-1 uppercase">Return Success</div>
                        <div className="text-[10px] text-neutral-500 font-mono">// Returns authenticated AK PubKey</div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative flex items-start group">
                      <div className="w-2 h-2 mt-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] z-10 mr-4"></div>
                      <div>
                        <div className="text-xs font-bold text-white mb-1 uppercase">User calls checkPcrMeasurements()</div>
                        <div className="text-[10px] text-neutral-500 font-mono">// Quote + ExpectedPCRs</div>
                      </div>
                    </div>
                    <div className="relative flex items-start group">
                      <div className="w-2 h-2 mt-1.5 rounded-full bg-neutral-700 border border-neutral-500 group-hover:bg-green-400 transition-colors z-10 mr-4"></div>
                      <div>
                        <div className="text-xs font-bold text-neutral-300 group-hover:text-green-300 transition-colors mb-1 uppercase">Parse Quote Structure</div>
                        <div className="text-[10px] text-neutral-500 font-mono">
                           ├─ Extract PCR Digest<br/>
                           └─ Extract Embedded User Data
                        </div>
                      </div>
                    </div>
                    <div className="relative flex items-start group">
                      <div className="w-2 h-2 mt-1.5 rounded-full bg-neutral-700 border border-neutral-500 group-hover:bg-green-400 transition-colors z-10 mr-4"></div>
                      <div>
                        <div className="text-xs font-bold text-neutral-300 group-hover:text-green-300 transition-colors mb-1 uppercase">Compute Expected Digest</div>
                        <div className="text-[10px] text-neutral-500 font-mono">
                           ├─ Rebuild PCR Bitmap<br/>
                           └─ Hash(Value_0 || Value_1...)
                        </div>
                      </div>
                    </div>
                    <div className="relative flex items-start group">
                      <div className="w-2 h-2 mt-1.5 rounded-full bg-green-900 border border-green-500 z-10 mr-4"></div>
                      <div>
                        <div className="text-xs font-bold text-green-400 mb-1 uppercase">Compare & Return</div>
                        <div className="text-[10px] text-neutral-500 font-mono">// Success + User Data</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right: Code Snippet */}
            <div className="bg-[#080808] flex flex-col">
               <div className="flex items-center px-4 py-2 border-b border-white/5 bg-white/5">
                 <Terminal size={12} className="text-neutral-500 mr-2" />
                 <span className="text-[10px] text-neutral-400 uppercase">Interactive_Editor</span>
               </div>
               <div className="flex-1 p-6 overflow-hidden relative group">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  
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
            <div className="w-2 h-2 bg-neutral-500"></div>
            <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest">D. Supporting Libraries</h3>
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
               <div key={i} className="border border-neutral-800 bg-[#050505] p-3 hover:border-cyan-500/50 hover:bg-cyan-950/10 transition-all cursor-default group">
                 <div className="flex items-center space-x-2 mb-2">
                   <Layers size={14} className="text-neutral-600 group-hover:text-cyan-400" />
                   <span className="text-xs font-bold text-white group-hover:text-cyan-300">{lib.name}</span>
                 </div>
                 <div className="text-[9px] text-neutral-500 font-mono leading-tight border-t border-neutral-900 pt-2">
                   {lib.desc}
                 </div>
               </div>
             ))}
          </div>
        </div>

        {/* SUBSECTION E: Features & Addresses */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Features Checklist */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-yellow-500"></div>
              <h3 className="text-sm font-bold text-yellow-500 uppercase tracking-widest">E. Capabilities</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Verifies TPM 2.0 quotes (RSA-SHA256 / ECDSA-P256)',
                'Validates X.509 Certificate Chains (Up to 4 certs)',
                'Checks PCR Measurements against golden values',
                'Calculates PCRs from event logs',
                'Extracts User Data embedded in quotes',
                'Caches Verified Certificates for gas optimization'
              ].map((feat, i) => (
                <li key={i} className="flex items-start space-x-3 text-xs md:text-sm text-neutral-400 font-mono">
                   <span className="text-cyan-500 font-bold mt-0.5">[OK]</span>
                   <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deployed Addresses Terminal */}
          <div>
             <div className="flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-red-500 animate-pulse"></div>
              <h3 className="text-sm font-bold text-red-500 uppercase tracking-widest">Deployed Instances</h3>
            </div>
            
            <div className="bg-black border border-neutral-800 p-4 font-mono text-xs relative shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-900 to-transparent"></div>
              <div className="mb-4 text-neutral-500 border-b border-neutral-900 pb-2">root@automata-net:~/contracts# list_deployments</div>
              
              <div className="space-y-4">
                <div>
                   <div className="text-neutral-500 mb-1 text-[10px] uppercase">Automata Testnet</div>
                   <div className="flex items-center justify-between group cursor-pointer hover:bg-neutral-900/50 p-1 -mx-1 rounded">
                     <span className="text-red-400 font-bold break-all">{DEPLOYED_ADDR.testnet}</span>
                     <Hash size={12} className="text-neutral-700 opacity-0 group-hover:opacity-100" />
                   </div>
                </div>
                <div>
                   <div className="text-neutral-500 mb-1 text-[10px] uppercase">Sepolia Testnet</div>
                   <div className="flex items-center justify-between group cursor-pointer hover:bg-neutral-900/50 p-1 -mx-1 rounded">
                     <span className="text-red-400 font-bold break-all">{DEPLOYED_ADDR.sepolia}</span>
                     <Hash size={12} className="text-neutral-700 opacity-0 group-hover:opacity-100" />
                   </div>
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-neutral-900 flex items-center text-[10px] text-green-500">
                <div className="w-1.5 h-3 bg-green-500 mr-2 animate-pulse"></div>
                Connection Established
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ArchitectureView;