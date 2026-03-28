import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line,
  Legend
} from 'recharts';

const COLORS = ['#f97316', '#3b82f6', '#10b981', '#8b5cf6', '#64748b', '#ef4444'];

export function ChartCard({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white p-6 rounded-xl border border-slate-200 shadow-sm ${className}`}>
      <h3 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">{title}</h3>
      <div className="h-[300px] w-full">
        {children}
      </div>
    </div>
  );
}

export function ClientLeadsChart() {
  const data = [
    { name: 'Lead', value: 15 },
    { name: 'Negotiation', value: 8 },
    { name: 'Contract', value: 12 },
    { name: 'Active', value: 42 },
  ];

  return (
    <ChartCard title="Client Pipeline by Stage">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 20, right: 20 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
          <XAxis type="number" hide />
          <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} width={80} />
          <Tooltip 
            cursor={{ fill: '#f8fafc' }}
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Bar dataKey="value" fill="#f97316" radius={[0, 4, 4, 0]} barSize={24} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export function CandidatesByStageChart() {
  const data = [
    { name: 'New', value: 45 },
    { name: 'Screening', value: 32 },
    { name: 'Interview', value: 18 },
    { name: 'BG Check', value: 12 },
    { name: 'Ready', value: 32 },
  ];

  return (
    <ChartCard title="Candidates by Stage">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export function PlacementsByWeekChart() {
  const data = [
    { week: 'Week 1', placements: 12 },
    { week: 'Week 2', placements: 18 },
    { week: 'Week 3', placements: 15 },
    { week: 'Week 4', placements: 22 },
    { week: 'Week 5', placements: 20 },
  ];

  return (
    <ChartCard title="Placements Trend (Weekly)">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
          <Tooltip />
          <Line type="monotone" dataKey="placements" stroke="#f97316" strokeWidth={3} dot={{ r: 4, fill: '#f97316' }} activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export function RecruiterLeaderboard() {
  const data = [
    { name: 'Elena R.', placements: 15, interviews: 30 },
    { name: 'Sarah M.', placements: 12, interviews: 24 },
    { name: 'James W.', placements: 8, interviews: 18 },
  ];

  return (
    <ChartCard title="Recruiter Leaderboard">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="placements" name="Placements" fill="#f97316" radius={[4, 4, 0, 0]} />
          <Bar dataKey="interviews" name="Interviews" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export function ApplicantsBySourceChart() {
  const data = [
    { name: 'Indeed', value: 65 },
    { name: 'LinkedIn', value: 38 },
    { name: 'Referral', value: 24 },
    { name: 'Website', value: 29 },
  ];

  return (
    <ChartCard title="Applicants by Source">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
