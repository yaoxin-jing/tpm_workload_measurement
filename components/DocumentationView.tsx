import React from 'react';
import CodeBlock from './CodeBlock';
import { Terminal, Cpu, Layers, Play, Hash, ChevronRight, FileJson } from 'lucide-react';

const DocumentationView: React.FC = () => {
  return (
    <section className="min-h-screen pt-20 pb-24 px-4 md:px-8 bg-[#020202] text-neutral-300 font-mono relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-cyan-900/20 bg-gradient-to-b from-cyan-950/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16 border-b border-cyan-900/30 pb-8 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-2 text-cyan-500">
               <Terminal size={16} />
               <span className="text-xs tracking-widest uppercase font-bold">System Documentation v1.0.4</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">
              DEV_<span className="text-fuchsia-500">MANUAL</span>
            </h1>
            <p className="text-sm text-cyan-400/60 max-w-xl">
              // COMPLETE REFERENCE FOR ON-CHAIN TPM VERIFICATION PIPELINE
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex space-x-4 text-[10px] text-neutral-500 uppercase tracking-widest">
            <div className="flex items-center"><div className="w-1.5 h-1.5 bg-green-500 mr-2 animate-pulse"/>Live</div>
            <div className="flex items-center"><div className="w-1.5 h-1.5 bg-cyan-500 mr-2"/>Updated: NOW</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar / Navigation */}
            <div className="lg:col-span-3 hidden lg:block">
                <div className="sticky top-28 border border-cyan-900/30 bg-[#050505]/80 backdrop-blur p-4 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    <div className="text-[10px] text-cyan-600 uppercase tracking-widest mb-4 border-b border-cyan-900/30 pb-2 font-bold">
                        Directory_Tree
                    </div>
                    <ul className="space-y-1 text-xs font-mono">
                        <li className="text-white hover:text-cyan-400 cursor-pointer flex items-center group py-1.5 px-2 bg-white/5 border border-transparent hover:border-cyan-500/30 transition-all">
                            <ChevronRight size={12} className="mr-2 text-cyan-500" /> 01_Setup
                        </li>
                        <li className="text-neutral-500 hover:text-cyan-400 cursor-pointer flex items-center group py-1.5 px-2 hover:bg-white/5 transition-all">
                             <ChevronRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> 02_Config
                        </li>
                        <li className="text-neutral-500 hover:text-cyan-400 cursor-pointer flex items-center group py-1.5 px-2 hover:bg-white/5 transition-all">
                             <ChevronRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> 03_API_Ref
                        </li>
                         <li className="text-neutral-500 hover:text-cyan-400 cursor-pointer flex items-center group py-1.5 px-2 hover:bg-white/5 transition-all">
                             <ChevronRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> 04_Integration
                        </li>
                         <li className="text-neutral-500 hover:text-cyan-400 cursor-pointer flex items-center group py-1.5 px-2 hover:bg-white/5 transition-all">
                             <ChevronRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> 05_Testing
                        </li>
                    </ul>
                    <div className="mt-8 pt-4 border-t border-white/5">
                        <div className="text-[10px] text-neutral-600 mb-2">DEPENDENCIES</div>
                        <div className="flex flex-wrap gap-2">
                             <span className="px-1.5 py-0.5 bg-neutral-900 text-[10px] text-neutral-400 border border-neutral-800">Solidity ^0.8.20</span>
                             <span className="px-1.5 py-0.5 bg-neutral-900 text-[10px] text-neutral-400 border border-neutral-800">Foundry</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-9 space-y-24">

                {/* 7.1 Installation */}
                <section>
                    <div className="flex items-center space-x-3 mb-8">
                        <span className="text-cyan-500 font-bold text-xl">01</span>
                        <div className="h-px bg-cyan-900/50 flex-1 relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-500"></div>
                        </div>
                        <h2 className="text-xl text-white font-bold uppercase tracking-wider">Installation & Setup</h2>
                    </div>
                    
                    <div className="space-y-10 pl-2 md:pl-6 border-l border-cyan-900/20">
                        <div className="group">
                            <h3 className="text-sm text-fuchsia-400 mb-3 flex items-center font-bold">
                                <span className="mr-2 text-fuchsia-800">></span> Install via Foundry
                            </h3>
                            <CodeBlock code="forge install automata-network/automata-tpm-attestation" language="bash" />
                        </div>
                        
                        <div className="group">
                            <h3 className="text-sm text-fuchsia-400 mb-3 flex items-center font-bold">
                                <span className="mr-2 text-fuchsia-800">></span> Configure Remappings
                            </h3>
                            <CodeBlock code={`remappings = [
  "@automata-network/automata-tpm-attestation/=lib/automata-tpm-attestation/src/",
  "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
  "@solady/=lib/solady/src/"
]`} language="toml" />
                        </div>

                        <div className="group">
                            <h3 className="text-sm text-fuchsia-400 mb-3 flex items-center font-bold">
                                <span className="mr-2 text-fuchsia-800">></span> P256 Configuration
                            </h3>
                            <div className="flex items-start space-x-3 mb-4 bg-fuchsia-950/10 p-3 border-l-2 border-fuchsia-500/50">
                                <div className="text-fuchsia-500 mt-0.5">!</div>
                                <p className="text-xs text-fuchsia-200/80 leading-relaxed">
                                    CRITICAL: The contract requires P256 ECDSA support. Ensure your target chain supports the precompile or verify via a library.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <CodeBlock label="Option A: RIP-7212 (Rec)" code={`address p256Precompile = 0x100;
TpmAttestation tpm = new TpmAttestation(owner, p256Precompile);`} />
                                <CodeBlock label="Option B: Daimo Verifier" code={`address p256Verifier = 0xc2b...De4;
TpmAttestation tpm = new TpmAttestation(owner, p256Verifier);`} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7.2 Configuration */}
                <section>
                    <div className="flex items-center space-x-3 mb-8">
                         <span className="text-cyan-500 font-bold text-xl">02</span>
                        <div className="h-px bg-cyan-900/50 flex-1 relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-500"></div>
                        </div>
                        <h2 className="text-xl text-white font-bold uppercase tracking-wider">Contract Config</h2>
                    </div>
                    
                    <div className="space-y-8 pl-2 md:pl-6 border-l border-cyan-900/20">
                        <div>
                            <div className="flex items-center text-xs text-green-400 mb-3 font-bold uppercase tracking-wider">
                                <Hash size={12} className="mr-2"/> Deployment & Trust Anchors
                            </div>
                            <CodeBlock code={`import {TpmAttestation} from "@automata-tpm-attestation/TpmAttestation.sol";

// 1. Deploy Contract
TpmAttestation tpmAttestation = new TpmAttestation(owner, p256Address);

// 2. Register Trusted CAs (Root of Trust)
bytes memory caCert = /* DER-encoded CA */;
tpmAttestation.addCA(caCert);`} />
                        </div>
                    </div>
                </section>

                {/* 7.3 API Reference */}
                <section>
                    <div className="flex items-center space-x-3 mb-8">
                         <span className="text-cyan-500 font-bold text-xl">03</span>
                        <div className="h-px bg-cyan-900/50 flex-1 relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-500"></div>
                        </div>
                        <h2 className="text-xl text-white font-bold uppercase tracking-wider">API Reference</h2>
                    </div>

                    <div className="grid gap-8 pl-2 md:pl-6 border-l border-cyan-900/20">
                        {/* Function Card 1 */}
                        <div className="bg-[#080808] border border-cyan-900/30 p-6 relative overflow-hidden group hover:border-cyan-500/50 transition-colors">
                            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity"><Cpu size={64} className="text-cyan-900" /></div>
                            <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-950 text-cyan-400 mb-3 border border-cyan-900">CORE LOGIC</div>
                            <h3 className="text-cyan-400 font-bold mb-2 text-lg">verifyTpmQuote</h3>
                            <p className="text-xs text-neutral-500 mb-6 font-mono max-w-lg">
                                Validates the TPM quote signature against the certificate chain and returns the authenticated public key.
                            </p>
                            <CodeBlock code={`function verifyTpmQuote(
    bytes calldata tpmQuote,
    bytes calldata tpmSignature,
    bytes[] calldata akCertchain
) external returns (bool success, bytes memory encodedAkPub);`} />
                        </div>

                        {/* Function Card 2 */}
                        <div className="bg-[#080808] border border-fuchsia-900/30 p-6 relative overflow-hidden group hover:border-fuchsia-500/50 transition-colors">
                            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity"><Layers size={64} className="text-fuchsia-900" /></div>
                            <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-fuchsia-950 text-fuchsia-400 mb-3 border border-fuchsia-900">INTEGRITY CHECK</div>
                            <h3 className="text-fuchsia-400 font-bold mb-2 text-lg">checkPcrMeasurements</h3>
                            <p className="text-xs text-neutral-500 mb-6 font-mono max-w-lg">
                                Reconstructs the PCR digest (SHA-256) and compares it against the golden reference state.
                            </p>
                            <CodeBlock code={`function checkPcrMeasurements(
    bytes calldata tpmQuote,
    MeasureablePcr[] calldata tpmPcrs
) external pure returns (bool success, bytes memory returnData);`} />
                        </div>
                    </div>
                </section>

                {/* 7.4 Integration */}
                <section>
                     <div className="flex items-center space-x-3 mb-8">
                         <span className="text-cyan-500 font-bold text-xl">04</span>
                        <div className="h-px bg-cyan-900/50 flex-1 relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-500"></div>
                        </div>
                        <h2 className="text-xl text-white font-bold uppercase tracking-wider">Integration Example</h2>
                    </div>

                    <div className="bg-neutral-900/20 border border-neutral-800 p-8 ml-2 md:ml-6 relative overflow-hidden">
                         <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-transparent"></div>
                         <div className="flex items-center space-x-2 mb-6">
                             <div className="p-1.5 bg-green-500/10 border border-green-500/30 rounded-sm">
                                <Play size={14} className="text-green-500" fill="currentColor" />
                             </div>
                             <span className="text-sm font-bold text-white uppercase tracking-wider">End-to-End Verification Pipeline</span>
                         </div>
                         <CodeBlock code={`function verifyAndExecute(
    bytes calldata tpmQuote,
    bytes calldata tpmSignature,
    bytes[] calldata akCertchain,
    MeasureablePcr[] calldata expectedPcrs
) external {
    // 1. Verify Quote Authenticity
    (bool quoteValid,) = tpmAttestation.verifyTpmQuote(
        tpmQuote, tpmSignature, akCertchain
    );
    require(quoteValid, "Invalid TPM Signature");

    // 2. Verify System State (PCRs)
    (bool pcrValid, bytes memory userData) =
        tpmAttestation.checkPcrMeasurements(tpmQuote, expectedPcrs);

    require(pcrValid, "PCR Mismatch - Potential Tampering");

    // 3. Process Trusted Data
    _processUserData(userData);
}`} />
                    </div>
                </section>
                
                {/* 7.5 Testing */}
                 <section>
                     <div className="flex items-center space-x-3 mb-8">
                         <span className="text-cyan-500 font-bold text-xl">05</span>
                        <div className="h-px bg-cyan-900/50 flex-1 relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-500"></div>
                        </div>
                        <h2 className="text-xl text-white font-bold uppercase tracking-wider">Testing Workflow</h2>
                    </div>
                    
                    <div className="ml-2 md:pl-6 border-l border-cyan-900/20">
                        <CodeBlock label="Terminal" language="bash" code={`# Clone Repository
git clone https://github.com/automata-network/automata-tpm-attestation.git
cd automata-tpm-attestation

# Install Dependencies
forge install

# Run Verification Tests
forge test -vvv`} />
                    </div>
                 </section>

            </div>
        </div>

      </div>
    </section>
  );
};

export default DocumentationView;