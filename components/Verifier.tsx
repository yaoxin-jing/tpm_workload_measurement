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

    let currentStepIndex = 0;

    const interval = setInterval(() => {
      if (currentStepIndex >= STEPS.length) {
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

      setTimeout(() => {
        setSteps(prev => {
           const newSteps = [...prev];
           if (currentStepIndex < newSteps.length) {
             newSteps[currentStepIndex].status = 'success';
           }
           return newSteps;
        });
        currentStepIndex++;
      }, 800);

    }, 1000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto border border-cyan-500/30 bg-[#050505] relative overflow-hidden shadow-[0_0_50px_rgba(0,243,255,0.08)]">
      {/* Decorative top bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-900/0 via-cyan-500 to-cyan-900/0 opacity-60" />

      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[600px]">
        {/* Left Panel: Controls */}
        <div className="col-span-1 md:col-span-5 border-r border-white/10 p-8 flex flex-col justify-between bg-neutral-900/20">
          <div>
            <div className="flex items-center space-x-3 mb-8 border-b border-white/10 pb-4">
              <Terminal className="text-cyan-400" size={20} />
              <h2 className="text-base font-mono tracking-widest text-cyan-400 uppercase font-black">Verification Console</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-mono text-cyan-400 uppercase tracking-widest mb-3 font-bold">
                  Input Stream / Quote Blob
                </label>
                <div className="flex space-x-1 mb-3">
                  <button className="flex-1 py-2 px-3 text-sm font-mono border border-cyan-500/50 bg-cyan-500/10 text-cyan-200 hover:bg-cyan-500/20 transition font-bold tracking-tighter uppercase">
                    PASTE_BLOB
                  </button>
                  <button className="flex-1 py-2 px-3 text-sm font-mono border border-white/20 text-neutral-400 hover:text-cyan-400 hover:border-cyan-500/40 transition font-bold tracking-tighter uppercase">
                    UPLOAD_FILE
                  </button>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 to-fuchsia-500/30 rounded opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
                  <textarea
                    value={quoteInput}
                    onChange={(e) => setQuoteInput(e.target.value)}
                    placeholder="> Awaiting attestation payload..."
                    className="relative w-full h-40 bg-[#020202] border border-white/20 p-4 text-sm font-mono text-green-400 focus:outline-none focus:border-cyan-500/50 resize-none placeholder:text-neutral-600"
                    spellCheck={false}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-mono text-cyan-400 uppercase tracking-widest mb-3 font-bold">
                  Expected PCR Digest (HEX)
                </label>
                <input 
                  type="text" 
                  placeholder="0x..." 
                  className="w-full bg-[#020202] border border-white/20 p-3 text-sm font-mono text-green-400 focus:outline-none focus:border-cyan-500/50 placeholder:text-neutral-600"
                />
              </div>
            </div>
          </div>

          <button
            onClick={startVerification}
            disabled={isVerifying}
            className={`w-full py-4 mt-6 flex items-center justify-center space-x-3 text-sm font-black font-mono tracking-[0.2em] uppercase transition-all duration-300 border ${
              isVerifying 
                ? 'bg-neutral-900 border-neutral-800 text-neutral-500 cursor-wait' 
                : 'bg-cyan-500/10 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black shadow-[0_0_20px_rgba(0,243,255,0.15)] active:scale-95'
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
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
              <span className="text-sm font-mono text-neutral-400 uppercase tracking-widest font-bold">Process Output</span>
              <div className="flex items-center space-x-3">
                <div className={`w-1.5 h-1.5 rounded-none ${isVerifying ? 'bg-fuchsia-500 animate-pulse' : isComplete ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,1)]' : 'bg-neutral-800'}`} />
                <span className={`text-[13px] font-mono font-black tracking-widest ${isVerifying ? 'text-fuchsia-400' : isComplete ? 'text-green-400' : 'text-neutral-500'}`}>
                  {isVerifying ? 'SYSTEM_BUSY' : isComplete ? 'VERIFICATION_SUCCESS' : 'SYSTEM_IDLE'}
                </span>
              </div>
            </div>

            {/* Pipeline Visualizer */}
            <div className="space-y-6 mb-8">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center space-x-5 group">
                  <div className={`w-7 h-7 flex items-center justify-center border transition-all duration-300 ${
                    step.status === 'success' ? 'border-green-500 bg-green-500/10 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.3)]' :
                    step.status === 'processing' ? 'border-fuchsia-400 bg-fuchsia-500/10 text-fuchsia-400' :
                    'border-neutral-700 text-neutral-600 bg-neutral-900/50'
                  }`}>
                    {step.status === 'success' && <CheckCircle2 size={16} />}
                    {step.status === 'processing' && <Loader2 size={16} className="animate-spin" />}
                    {step.status === 'pending' && <div className="w-1.5 h-1.5 bg-current" />}
                  </div>
                  <span className={`text-sm font-mono uppercase tracking-widest transition-colors font-bold ${
                    step.status === 'success' ? 'text-white' : 
                    step.status === 'processing' ? 'text-fuchsia-200' : 
                    'text-neutral-400'
                  }`}>
                    {step.label}
                  </span>
                  {step.status === 'processing' && (
                     <span className="text-[13px] font-mono text-fuchsia-400 font-black animate-pulse ml-auto">EXECUTING</span>
                  )}
                  {step.status === 'success' && (
                     <span className="text-[13px] font-mono text-green-400 font-black ml-auto">OK</span>
                  )}
                </div>
              ))}
            </div>

            {/* Final Results */}
            {isComplete && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 border border-green-500/40 bg-green-950/20 p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-green-500 shadow-[2px_0_10px_rgba(34,197,94,0.4)]" />
                <h3 className="text-green-400 text-sm font-mono font-black uppercase tracking-[0.2em] mb-4 flex items-center">
                  <ShieldCheck size={18} className="mr-3" /> 
                  Hardware Integrity Confirmed
                </h3>
                <p className="text-green-100 text-sm leading-relaxed mb-6 font-mono whitespace-pre-line">
                  {'>'} Valid Signature (RSASSA-PKCS1-v1_5){'\n'}
                  {'>'} Certificate Chain Trusted{'\n'}
                  {'>'} PCR Digest Matches Expected State
                </p>
                
                <div className="space-y-1">
                  <span className="text-[13px] font-mono text-neutral-300 uppercase mb-3 block border-b border-green-500/20 pb-1 w-full font-bold">Measured State (PCRs)</span>
                  {SAMPLE_PCRS.map((pcr) => (
                    <div key={pcr.index} className="flex space-x-4 text-sm font-mono py-1.5 hover:bg-green-500/5 transition">
                      <span className="text-green-400 w-10 font-bold">[{pcr.index}]</span>
                      <span className="text-green-100 truncate flex-1 font-medium">{pcr.value}</span>
                      <span className="text-neutral-400 hidden sm:block italic">{pcr.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!isComplete && !isVerifying && (
              <div className="flex-1 flex flex-col items-center justify-center text-neutral-700 space-y-6">
                 <div className="w-20 h-20 border border-dashed border-neutral-700 flex items-center justify-center rounded-full">
                    <Server size={32} strokeWidth={1.5} />
                 </div>
                <p className="text-sm font-mono uppercase tracking-[0.3em] text-neutral-500 font-bold">Awaiting input stream...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verifier;