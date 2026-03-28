import React, { useState } from 'react';
import { Sidebar, MobileNav, Section } from './Navigation';
import { KPISection } from './KPIs';
import { 
  ClientLeadsChart, 
  CandidatesByStageChart, 
  PlacementsByWeekChart, 
  RecruiterLeaderboard,
  ApplicantsBySourceChart
} from './Charts';
import { DataTable, FilterBar, StatusBadge } from './DataDisplay';
import { candidates, clients, jobOrders, activities, recruiters } from '../mockData';
import { motion, AnimatePresence } from 'motion/react';
import { MoreHorizontal, Download, Plus, Mail, Phone, MapPin } from 'lucide-react';

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState<Section>('overview');

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <KPISection />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PlacementsByWeekChart />
              <CandidatesByStageChart />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <DataTable 
                  title="New Applicants" 
                  headers={['Name', 'Trade', 'Source', 'Stage']}
                  onViewAll={() => setActiveSection('candidates')}
                >
                  {candidates.slice(0, 5).map((can) => (
                    <tr key={can.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 text-sm font-medium text-slate-900">{can.full_name}</td>
                      <td className="px-4 py-3 text-sm text-slate-600">{can.trade}</td>
                      <td className="px-4 py-3 text-sm text-slate-600">{can.source}</td>
                      <td className="px-4 py-3 text-sm">
                        <StatusBadge status={can.pipeline_stage} />
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button className="p-1 hover:bg-slate-100 rounded text-slate-400">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </DataTable>
              </div>
              
              <div className="lg:col-span-1">
                <DataTable title="Recent Activity" headers={['Activity', 'Time']}>
                  {activities.map((act) => (
                    <tr key={act.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3">
                        <p className="text-xs font-medium text-slate-900">{act.description}</p>
                        <p className="text-[10px] text-slate-500">{act.user}</p>
                      </td>
                      <td className="px-4 py-3 text-[10px] text-slate-500 whitespace-nowrap">
                        {new Date(act.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </td>
                    </tr>
                  ))}
                </DataTable>
              </div>
            </div>
          </motion.div>
        );

      case 'clients':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <ClientLeadsChart />
              </div>
              <div className="lg:col-span-2">
                <DataTable title="Client Pipeline" headers={['Client', 'Contact', 'Stage', 'Active Placements']}>
                  {clients.map((client) => (
                    <tr key={client.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 text-sm font-medium text-slate-900">{client.client_name}</td>
                      <td className="px-4 py-3 text-sm text-slate-600">{client.contact_name}</td>
                      <td className="px-4 py-3 text-sm">
                        <StatusBadge status={client.pipeline_stage} />
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-600 text-center">{client.active_placements}</td>
                      <td className="px-4 py-3 text-right">
                        <button className="p-1 hover:bg-slate-100 rounded text-slate-400">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </DataTable>
              </div>
            </div>
            
            <DataTable title="Open Job Orders" headers={['Job Title', 'Client', 'Needed', 'Filled', 'Status']}>
              {jobOrders.map((job) => (
                <tr key={job.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">{job.job_title}</td>
                  <td className="px-4 py-3 text-sm text-slate-600">{job.client_name}</td>
                  <td className="px-4 py-3 text-sm text-slate-600 text-center">{job.workers_needed}</td>
                  <td className="px-4 py-3 text-sm text-slate-600 text-center">{job.workers_filled}</td>
                  <td className="px-4 py-3 text-sm">
                    <StatusBadge status={job.assignment_status} />
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="p-1 hover:bg-slate-100 rounded text-slate-400">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </DataTable>
          </motion.div>
        );

      case 'candidates':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CandidatesByStageChart />
              <ApplicantsBySourceChart />
            </div>
            <DataTable title="Candidate Pipeline" headers={['Name', 'Trade', 'Type', 'Stage', 'Docs', 'BG Check']}>
              {candidates.map((can) => (
                <tr key={can.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-slate-900">{can.full_name}</p>
                    <p className="text-[10px] text-slate-500">{can.email}</p>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600">{can.trade}</td>
                  <td className="px-4 py-3 text-sm text-slate-600">{can.worker_type}</td>
                  <td className="px-4 py-3 text-sm">
                    <StatusBadge status={can.pipeline_stage} />
                  </td>
                  <td className="px-4 py-3 text-center">
                    {can.docs_signed ? <span className="text-green-500 text-xs font-bold">YES</span> : <span className="text-red-500 text-xs font-bold">NO</span>}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <StatusBadge status={can.background_status} />
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="p-1 hover:bg-slate-100 rounded text-slate-400">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </DataTable>
          </motion.div>
        );

      case 'recruiters':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <RecruiterLeaderboard />
            <DataTable title="Recruiter Performance" headers={['Recruiter', 'Placements (Mo)', 'Interviews (Mo)', 'Active Pool']}>
              {recruiters.map((rec) => (
                <tr key={rec.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">{rec.name}</td>
                  <td className="px-4 py-3 text-sm text-slate-600 text-center">{rec.placements_this_month}</td>
                  <td className="px-4 py-3 text-sm text-slate-600 text-center">{rec.interviews_booked}</td>
                  <td className="px-4 py-3 text-sm text-slate-600 text-center">{rec.active_candidates}</td>
                  <td className="px-4 py-3 text-right">
                    <button className="p-1 hover:bg-slate-100 rounded text-slate-400">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </DataTable>
          </motion.div>
        );

      case 'placements':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <DataTable title="Candidates Ready for Dispatch" headers={['Name', 'Trade', 'Certifications', 'Transportation', 'Availability']}>
              {candidates.filter(c => c.eligible_for_dispatch).map((can) => (
                <tr key={can.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">{can.full_name}</td>
                  <td className="px-4 py-3 text-sm text-slate-600">{can.trade}</td>
                  <td className="px-4 py-3 text-xs text-slate-500">{can.certifications.join(', ')}</td>
                  <td className="px-4 py-3 text-center">
                    {can.transportation ? <span className="text-green-500 text-xs font-bold">YES</span> : <span className="text-red-500 text-xs font-bold">NO</span>}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600">{can.availability}</td>
                  <td className="px-4 py-3 text-right">
                    <button className="p-1 hover:bg-orange-100 rounded text-orange-600 font-bold text-[10px] px-2 py-1 uppercase tracking-wider">
                      DISPATCH
                    </button>
                  </td>
                </tr>
              ))}
            </DataTable>
          </motion.div>
        );

      case 'documents':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <DataTable title="Onboarding & Document Status" headers={['Candidate', 'Docs Signed', 'BG Check', 'Certifications', 'Status']}>
              {candidates.map((can) => (
                <tr key={can.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">{can.full_name}</td>
                  <td className="px-4 py-3 text-center">
                    {can.docs_signed ? 
                      <span className="inline-flex items-center gap-1 text-green-600 text-[10px] font-bold bg-green-50 px-2 py-0.5 rounded-full border border-green-100">SIGNED</span> : 
                      <span className="inline-flex items-center gap-1 text-red-600 text-[10px] font-bold bg-red-50 px-2 py-0.5 rounded-full border border-red-100">MISSING</span>
                    }
                  </td>
                  <td className="px-4 py-3 text-center">
                    <StatusBadge status={can.background_status} />
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-500">{can.certifications.length} Verified</td>
                  <td className="px-4 py-3 text-sm">
                    <StatusBadge status={can.pipeline_stage} />
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="p-1 hover:bg-slate-100 rounded text-slate-400">
                      <Mail className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </DataTable>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} className="hidden lg:flex" />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <MobileNav activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <header className="bg-white border-b border-slate-200 px-4 py-4 sm:px-8 flex justify-between items-center shrink-0">
          <div>
            <h2 className="text-xl font-bold text-slate-900 capitalize tracking-tight">
              {activeSection.replace('-', ' ')}
            </h2>
            <p className="text-xs text-slate-500">CoreWorks Staffing Operations Portal</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 shadow-sm">
              <Download className="w-4 h-4" /> EXPORT
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-orange-500 rounded-lg text-xs font-bold text-white hover:bg-orange-600 shadow-sm shadow-orange-200 transition-all">
              <Plus className="w-4 h-4" /> NEW ENTRY
            </button>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-4 sm:p-8">
          <FilterBar />
          <AnimatePresence mode="wait">
            {renderSection()}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
