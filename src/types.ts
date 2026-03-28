export type WorkerType = 'W2' | '1099' | 'Contract';
export type Trade = 'Electrical' | 'Plumbing' | 'HVAC' | 'Carpentry' | 'General Labor' | 'Welding';
export type BackgroundStatus = 'Pending' | 'Passed' | 'Failed';
export type PipelineStage = 'New' | 'Screening' | 'Interview' | 'Background Check' | 'Ready for Dispatch' | 'Placed' | 'Archived';
export type ClientPipelineStage = 'Lead' | 'Negotiation' | 'Contract Signed' | 'Active' | 'Inactive';

export interface Candidate {
  id: string;
  full_name: string;
  phone: string;
  email: string;
  worker_type: WorkerType;
  trade: Trade;
  certifications: string[];
  transportation: boolean;
  availability: 'Immediate' | '1-Week' | '2-Weeks';
  preferred_shift: 'Day' | 'Night' | 'Swing';
  background_status: BackgroundStatus;
  docs_signed: boolean;
  eligible_for_dispatch: boolean;
  current_assignment?: string;
  current_client?: string;
  source: 'Indeed' | 'LinkedIn' | 'Referral' | 'Website';
  pipeline_stage: PipelineStage;
  applied_at: string;
}

export interface Client {
  id: string;
  client_name: string;
  contact_name: string;
  contact_phone: string;
  contact_email: string;
  pipeline_stage: ClientPipelineStage;
  active_placements: number;
}

export interface JobOrder {
  id: string;
  client_id: string;
  client_name: string;
  job_title: string;
  workers_needed: number;
  workers_filled: number;
  site_address: string;
  supervisor_name: string;
  supervisor_phone: string;
  pay_rate: number;
  bill_rate: number;
  assignment_status: 'Open' | 'Partially Filled' | 'Filled' | 'Closed';
  created_at: string;
}

export interface Recruiter {
  id: string;
  name: string;
  placements_this_month: number;
  interviews_booked: number;
  active_candidates: number;
}

export interface Placement {
  id: string;
  candidate_id: string;
  candidate_name: string;
  client_id: string;
  client_name: string;
  job_order_id: string;
  start_date: string;
  status: 'Active' | 'Completed' | 'Terminated';
}

export interface Activity {
  id: string;
  type: 'Interview' | 'Placement' | 'Lead' | 'Document Signed';
  description: string;
  timestamp: string;
  user: string;
}
