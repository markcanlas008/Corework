import { Candidate, Client, JobOrder, Recruiter, Placement, Activity } from './types';

export const recruiters: Recruiter[] = [
  { id: 'r1', name: 'Sarah Miller', placements_this_month: 12, interviews_booked: 24, active_candidates: 45 },
  { id: 'r2', name: 'James Wilson', placements_this_month: 8, interviews_booked: 18, active_candidates: 32 },
  { id: 'r3', name: 'Elena Rodriguez', placements_this_month: 15, interviews_booked: 30, active_candidates: 50 },
];

export const clients: Client[] = [
  { id: 'c1', client_name: 'BuildRight Construction', contact_name: 'Bob Builder', contact_phone: '555-0101', contact_email: 'bob@buildright.com', pipeline_stage: 'Active', active_placements: 8 },
  { id: 'c2', client_name: 'Metro Electric', contact_name: 'Alice Sparks', contact_phone: '555-0102', contact_email: 'alice@metro.com', pipeline_stage: 'Active', active_placements: 5 },
  { id: 'c3', client_name: 'Skyline HVAC', contact_name: 'Charlie Cold', contact_phone: '555-0103', contact_email: 'charlie@skyline.com', pipeline_stage: 'Negotiation', active_placements: 0 },
  { id: 'c4', client_name: 'Greenwood Plumbing', contact_name: 'David Drip', contact_phone: '555-0104', contact_email: 'david@greenwood.com', pipeline_stage: 'Lead', active_placements: 0 },
];

export const candidates: Candidate[] = [
  {
    id: 'can1',
    full_name: 'John Doe',
    phone: '555-1001',
    email: 'john.doe@email.com',
    worker_type: 'W2',
    trade: 'Electrical',
    certifications: ['Journeyman License', 'OSHA 10'],
    transportation: true,
    availability: 'Immediate',
    preferred_shift: 'Day',
    background_status: 'Passed',
    docs_signed: true,
    eligible_for_dispatch: true,
    source: 'Indeed',
    pipeline_stage: 'Ready for Dispatch',
    applied_at: '2026-03-20T10:00:00Z'
  },
  {
    id: 'can2',
    full_name: 'Jane Smith',
    phone: '555-1002',
    email: 'jane.smith@email.com',
    worker_type: '1099',
    trade: 'Plumbing',
    certifications: ['Master Plumber'],
    transportation: true,
    availability: '1-Week',
    preferred_shift: 'Day',
    background_status: 'Pending',
    docs_signed: true,
    eligible_for_dispatch: false,
    source: 'LinkedIn',
    pipeline_stage: 'Background Check',
    applied_at: '2026-03-22T14:30:00Z'
  },
  {
    id: 'can3',
    full_name: 'Mike Ross',
    phone: '555-1003',
    email: 'mike.ross@email.com',
    worker_type: 'Contract',
    trade: 'General Labor',
    certifications: [],
    transportation: false,
    availability: 'Immediate',
    preferred_shift: 'Night',
    background_status: 'Passed',
    docs_signed: true,
    eligible_for_dispatch: true,
    current_assignment: 'Site Prep',
    current_client: 'BuildRight Construction',
    source: 'Referral',
    pipeline_stage: 'Placed',
    applied_at: '2026-03-15T09:00:00Z'
  },
  {
    id: 'can4',
    full_name: 'Sarah Connor',
    phone: '555-1004',
    email: 'sarah.c@email.com',
    worker_type: 'W2',
    trade: 'Welding',
    certifications: ['AWS Certified'],
    transportation: true,
    availability: 'Immediate',
    preferred_shift: 'Swing',
    background_status: 'Passed',
    docs_signed: false,
    eligible_for_dispatch: false,
    source: 'Website',
    pipeline_stage: 'Interview',
    applied_at: '2026-03-25T11:00:00Z'
  }
];

export const jobOrders: JobOrder[] = [
  {
    id: 'j1',
    client_id: 'c1',
    client_name: 'BuildRight Construction',
    job_title: 'Journeyman Electrician',
    workers_needed: 5,
    workers_filled: 3,
    site_address: '123 Main St, Downtown',
    supervisor_name: 'Mark Site',
    supervisor_phone: '555-2001',
    pay_rate: 35,
    bill_rate: 55,
    assignment_status: 'Partially Filled',
    created_at: '2026-03-18T08:00:00Z'
  },
  {
    id: 'j2',
    client_id: 'c2',
    client_name: 'Metro Electric',
    job_title: 'Apprentice Plumber',
    workers_needed: 2,
    workers_filled: 2,
    site_address: '456 Industrial Way',
    supervisor_name: 'Steve Pipe',
    supervisor_phone: '555-2002',
    pay_rate: 22,
    bill_rate: 38,
    assignment_status: 'Filled',
    created_at: '2026-03-21T10:00:00Z'
  },
  {
    id: 'j3',
    client_id: 'c1',
    client_name: 'BuildRight Construction',
    job_title: 'General Laborer',
    workers_needed: 10,
    workers_filled: 4,
    site_address: '789 Oak Lane',
    supervisor_name: 'Jane Foreman',
    supervisor_phone: '555-2003',
    pay_rate: 18,
    bill_rate: 28,
    assignment_status: 'Partially Filled',
    created_at: '2026-03-24T13:00:00Z'
  }
];

export const placements: Placement[] = [
  { id: 'p1', candidate_id: 'can3', candidate_name: 'Mike Ross', client_id: 'c1', client_name: 'BuildRight Construction', job_order_id: 'j3', start_date: '2026-03-20', status: 'Active' }
];

export const activities: Activity[] = [
  { id: 'a1', type: 'Placement', description: 'Mike Ross placed at BuildRight Construction', timestamp: '2026-03-20T10:00:00Z', user: 'Elena Rodriguez' },
  { id: 'a2', type: 'Interview', description: 'Interview scheduled for Sarah Connor', timestamp: '2026-03-26T15:00:00Z', user: 'Sarah Miller' },
  { id: 'a3', type: 'Lead', description: 'New client lead: Skyline HVAC', timestamp: '2026-03-27T09:30:00Z', user: 'James Wilson' },
  { id: 'a4', type: 'Document Signed', description: 'John Doe signed onboarding documents', timestamp: '2026-03-28T11:15:00Z', user: 'System' }
];
