import React from 'react';
import { 
  Users, 
  UserPlus, 
  Briefcase, 
  ClipboardList, 
  CheckCircle, 
  Clock, 
  Truck, 
  UserCheck 
} from 'lucide-react';
import { cn } from '../lib/utils';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: React.ElementType;
  trend?: string;
  trendUp?: boolean;
  color: 'blue' | 'orange' | 'green' | 'purple' | 'slate';
}

const colorMap = {
  blue: 'bg-blue-50 text-blue-600 border-blue-100',
  orange: 'bg-orange-50 text-orange-600 border-orange-100',
  green: 'bg-green-50 text-green-600 border-green-100',
  purple: 'bg-purple-50 text-purple-600 border-purple-100',
  slate: 'bg-slate-50 text-slate-600 border-slate-100',
};

const iconColorMap = {
  blue: 'bg-blue-100',
  orange: 'bg-orange-100',
  green: 'bg-green-100',
  purple: 'bg-purple-100',
  slate: 'bg-slate-100',
};

export function StatCard({ label, value, icon: Icon, trend, trendUp, color }: StatCardProps) {
  return (
    <div className={cn("p-5 rounded-xl border bg-white shadow-sm transition-all hover:shadow-md", colorMap[color])}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">{label}</p>
          <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
          {trend && (
            <p className={cn("text-xs mt-1 font-medium", trendUp ? "text-green-600" : "text-red-600")}>
              {trendUp ? '↑' : '↓'} {trend} <span className="text-slate-400 font-normal">vs last week</span>
            </p>
          )}
        </div>
        <div className={cn("p-2.5 rounded-lg", iconColorMap[color])}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

export function KPISection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <StatCard label="Total Active Clients" value={42} icon={Users} color="blue" trend="4%" trendUp={true} />
      <StatCard label="New Leads (Week)" value={12} icon={UserPlus} color="orange" trend="15%" trendUp={true} />
      <StatCard label="Open Job Orders" value={28} icon={Briefcase} color="purple" trend="2" trendUp={false} />
      <StatCard label="Total Applicants" value={156} icon={ClipboardList} color="slate" trend="24%" trendUp={true} />
      <StatCard label="Qualified Candidates" value={84} icon={UserCheck} color="green" trend="8%" trendUp={true} />
      <StatCard label="Interviews Booked" value={18} icon={Clock} color="orange" trend="12%" trendUp={false} />
      <StatCard label="Ready for Dispatch" value={32} icon={Truck} color="blue" trend="5" trendUp={true} />
      <StatCard label="Active Placements" value={112} icon={CheckCircle} color="green" trend="3%" trendUp={true} />
    </div>
  );
}
