export interface PcrMeasurement {
  index: number;
  value: string;
  description: string;
}

export interface VerificationStep {
  id: string;
  label: string;
  status: 'pending' | 'processing' | 'success' | 'error';
  details?: string;
}

export enum ViewState {
  HOME,
  ARCHITECTURE,
  VERIFIER,
  DOCS
}