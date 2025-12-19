import React, { useState, useEffect } from 'react';
import { ShieldCheck, Server, Cpu, FileJson, CheckCircle2, AlertCircle, Loader2, Play, Terminal } from 'lucide-react';
import { VerificationStep, PcrMeasurement } from '../types';

const SAMPLE_PCRS: PcrMeasurement[] = [
  { index: 0, value: '0x3a...e8b1', description: 'Core System Firmware (BIOS)' },
  { index: 1, value: '0x9f...a2c4', description: 'Host Platform Config' },
  { index: 2, value: '0x1d...f77a', description: 'UEFI Driver Chain' },
  { index: 7, value: '0xb2...9901', description: 'Secure Boot State' },
];

const STEPS: VerificationStep[] = [
  { id: 'parse', label: 'Parse ASN.1 Structure', status: 'pending' },
  { id: 'cert', label: 'Verify X.509 Certificate Chain', status: 'pending' },
  { id: 'sig', label: 'Verify RSA-2048/P256 Signature', status: 'pending' },
  { id: 'pcr', label: 'Validate PCR Integrity', status: 'pending' },
  { id: 'data', label: 'Extract Enclave User Data', status: 'pending' },
];

const Verifier: React.FC = () => {
  const [steps, setSteps] = useState<VerificationStep[]>(STEPS);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [quoteInput, setQuoteInput] = useState('');

  const startVerification = () => {
    setIsVerifying(true);
    setIsComplete(false);
    setSteps(STEPS.map(s => ({ ...s, status: 'pending' })));

    // Simulate the verification pipeline
    let currentStepIndex = 0;

    const interval = setInterval(() => {
      if (currentStepIndex >= steps.length) {
        clearInterval(interval);
        setIsVerifying(false);
        setIsComplete(true);
        return;
      }

      setSteps(prev => prev.map((step, idx) => {
        if (idx === currentStepIndex) return { ...step, status: 'processing' };
        if (idx < currentStepIndex) return { ...step, status: 'success' };
        return step;
      }));

      // Simulate step completion
      setTimeout(() => {
        setSteps(prev => {
           const newSteps = [...prev];
           newSteps[currentStepIndex].status = 'success';
           return newSteps;
        });
        currentStepIndex++;
      }, 800); 

    }, 1000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto border border-cyan-500/20 bg-[#050505] relative overflow-hidden shadow-[0_0_40px_rgba(0,243,255,0.05)]">
      {/* Decorative top bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-900/0 via-cyan-500 to-cyan-900/0 opacity-50" />
      <div className="absolute top-1 right-1 w-2 h-2 bg-cyan-500/50" />
      <div className="absolute bottom-1 left-1 w-2 h-2 bg-cyan-500/50" />

      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[600px]">
        {/* Left Panel: Controls */}
        <div className="col-span-1 md:col-span-5 border-r border-cyan-500/10 p-8 flex flex-col justify-between bg-neutral-900/20">
          <div>
            <div className="flex items-center space-x-3 mb-8 border-b border-cyan-500/10 pb-4">
              <Terminal className="text-cyan-400" size={20} />
              <h2 className="text-sm font-mono tracking-widest text-cyan-400 uppercase font-bold">Verification Console</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-mono text-cyan-600 uppercase tracking-widest mb-2">
                  Input Stream / Quote Blob
                </label>
                <div className="flex space-x-1 mb-2">
                  <button className="flex-1 py-1.5 px-3 text-xs font-mono border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition">
                    PASTE_BLOB
                  </button>
                  <button className="flex-1 py-1.5 px-3 text-xs font-mono border border-white/5 text-neutral-600 hover:text-cyan-400 hover:border-cyan-500/20 transition">
                    UPLOAD_FILE
                  </button>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
                  <textarea
                    value={quoteInput}
                    onChange={(e) => setQuoteInput(e.target.value)}
                    placeholder="> Waiting for TPM Quote data..."
                    className="relative w-full h-40 bg-[#020202] border border-cyan-500/20 p-4 text-xs font-mono text-green-400 focus:outline-none focus:border-cyan-500/50 resize-none placeholder:text-neutral-800"
                    spellCheck={false}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-cyan-600 uppercase tracking-widest mb-2">
                  Expected PCR Digest (HEX)
                </label>
                <input 
                  type="text" 
                  placeholder="0x..." 
                  className="w-full bg-[#020202] border border-cyan-500/20 p-3 text-xs font-mono text-green-400 focus:outline-none focus:border-cyan-500/50 placeholder:text-neutral-800"
                />
              </div>
            </div>
          </div>

          <button
            onClick={startVerification}
            disabled={isVerifying}
            className={`w-full py-4 mt-6 flex items-center justify-center space-x-3 text-sm font-bold font-mono tracking-wider uppercase transition-all duration-300 border ${
              isVerifying 
                ? 'bg-neutral-900 border-neutral-800 text-neutral-600 cursor-wait' 
                : 'bg-cyan-500/10 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black shadow-[0_0_20px_rgba(0,243,255,0.15)] hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]'
            }`}
          >
            {isVerifying ? (
              <>
                <Loader2 className="animate-spin" size={16} />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <Play size={16} fill="currentColor" />
                <span>Execute Verify</span>
              </>
            )}
          </button>
        </div>

        {/* Right Panel: Output */}
        <div className="col-span-1 md:col-span-7 bg-[#020202] p-8 relative">
          <div className="absolute inset-0 halftone-grid opacity-30 pointer-events-none" />
          
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-8">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Process Output</span>
              <div className="flex items-center space-x-3">
                <div className={`w-1.5 h-1.5 rounded-none ${isVerifying ? 'bg-fuchsia-500 animate-ping' : isComplete ? 'bg-green-500' : 'bg-neutral-800'}`} />
                <span className={`text-[10px] font-mono font-bold ${isVerifying ? 'text-fuchsia-400' : isComplete ? 'text-green-400' : 'text-neutral-600'}`}>
                  {isVerifying ? 'SYSTEM_BUSY' : isComplete ? 'VERIFICATION_SUCCESS' : 'SYSTEM_IDLE'}
                </span>
              </div>
            </div>

            {/* Pipeline Visualizer */}
            <div className="space-y-5 mb-8">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center space-x-4 group">
                  <div className={`w-6 h-6 flex items-center justify-center border transition-all duration-300 ${
                    step.status === 'success' ? 'border-green-500 bg-green-500/10 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.2)]' :
                    step.status === 'processing' ? 'border-fuchsia-500 bg-fuchsia-500/10 text-fuchsia-400 animate-pulse' :
                    'border-neutral-800 text-neutral-800 bg-neutral-900/50'
                  }`}>
                    {step.status === 'success' && <CheckCircle2 size={14} />}
                    {step.status === 'processing' && <Loader2 size={14} className="animate-spin" />}
                    {step.status === 'pending' && <div className="w-1 h-1 bg-current" />}
                  </div>
                  <span className={`text-xs font-mono uppercase tracking-wide transition-colors ${
                    step.status === 'success' ? 'text-white' : 
                    step.status === 'processing' ? 'text-fuchsia-200' : 
                    'text-neutral-600'
                  }`}>
                    {step.label}
                  </span>
                  {step.status === 'processing' && (
                     <span className="text-[10px] font-mono text-fuchsia-500 animate-pulse ml-auto">EXECUTING</span>
                  )}
                  {step.status === 'success' && (
                     <span className="text-[10px] font-mono text-green-500 ml-auto">OK</span>
                  )}
                </div>
              ))}
            </div>

            {/* Final Results (Only show if complete) */}
            {isComplete && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 border border-green-500/30 bg-green-950/10 p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-green-500" />
                <h3 className="text-green-400 text-xs font-mono font-bold uppercase tracking-widest mb-4 flex items-center">
                  <ShieldCheck size={16} className="mr-3" /> 
                  Hardware Integrity Confirmed
                </h3>
                <p className="text-green-200/70 text-xs leading-relaxed mb-6 font-mono">
                  > Valid Signature (RSASSA-PKCS1-v1_5)<br/>
                  > Certificate Chain Trusted<br/>
                  > PCR Digest Matches Expected State
                </p>
                
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase mb-3 block border-b border-green-500/20 pb-1 w-full">Measured State (PCRs)</span>
                  {SAMPLE_PCRS.map((pcr) => (
                    <div key={pcr.index} className="flex space-x-4 text-[10px] font-mono py-1 hover:bg-green-500/5 transition">
                      <span className="text-green-600 w-8">[{pcr.index}]</span>
                      <span className="text-green-300 truncate flex-1">{pcr.value}</span>
                      <span className="text-neutral-500 hidden sm:block">{pcr.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!isComplete && !isVerifying && (
              <div className="flex-1 flex flex-col items-center justify-center text-neutral-800 space-y-4">
                 <div className="w-16 h-16 border border-dashed border-neutral-800 flex items-center justify-center rounded-full">
                    <Server size={24} strokeWidth={1.5} />
                 </div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-600">Awaiting input stream...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verifier;