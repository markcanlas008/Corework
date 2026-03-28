import React from 'react';
import { Search, Filter, ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '../lib/utils';

interface TableProps {
  title: string;
  headers: string[];
  children: React.ReactNode;
  onViewAll?: () => void;
}

export function DataTable({ title, headers, children, onViewAll }: TableProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-4 border-b border-slate-100 flex justify-between items-center">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{title}</h3>
        {onViewAll && (
          <button onClick={onViewAll} className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1">
            VIEW ALL <ChevronRight className="w-3 h-3" />
          </button>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              {headers.map((header, i) => (
                <th key={i} className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  {header}
                </th>
              ))}
              <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest w-10"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {children}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function FilterBar() {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      <div className="relative flex-1 min-w-[240px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input 
          type="text" 
          placeholder="Search candidates, clients, or jobs..." 
          className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-sm"
        />
      </div>
      
      <div className="flex items-center gap-2">
        <select className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 shadow-sm">
          <option>All Recruiters</option>
          <option>Sarah Miller</option>
          <option>James Wilson</option>
          <option>Elena Rodriguez</option>
        </select>
        
        <select className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 shadow-sm">
          <option>All Trades</option>
          <option>Electrical</option>
          <option>Plumbing</option>
          <option>HVAC</option>
          <option>General Labor</option>
        </select>

        <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 shadow-sm">
          <Filter className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    'Ready for Dispatch': 'bg-blue-50 text-blue-700 border-blue-100',
    'Placed': 'bg-green-50 text-green-700 border-green-100',
    'Interview': 'bg-orange-50 text-orange-700 border-orange-100',
    'Background Check': 'bg-purple-50 text-purple-700 border-purple-100',
    'New': 'bg-slate-50 text-slate-700 border-slate-100',
    'Active': 'bg-green-50 text-green-700 border-green-100',
    'Negotiation': 'bg-orange-50 text-orange-700 border-orange-100',
    'Lead': 'bg-slate-50 text-slate-700 border-slate-100',
    'Partially Filled': 'bg-orange-50 text-orange-700 border-orange-100',
    'Filled': 'bg-green-50 text-green-700 border-green-100',
    'Open': 'bg-blue-50 text-blue-700 border-blue-100',
  };

  return (
    <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-bold border", styles[status] || 'bg-slate-50 text-slate-600 border-slate-100')}>
      {status.toUpperCase()}
    </span>
  );
}
