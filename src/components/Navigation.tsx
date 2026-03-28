import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  TrendingUp, 
  ClipboardCheck, 
  FileText,
  Menu,
  X
} from 'lucide-react';
import { cn } from '../lib/utils';

export type Section = 'overview' | 'clients' | 'candidates' | 'recruiters' | 'placements' | 'documents';

interface SidebarProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  className?: string;
}

const navItems: { id: Section; label: string; icon: React.ElementType }[] = [
  { id: 'overview', label: 'Executive Overview', icon: LayoutDashboard },
  { id: 'clients', label: 'Client Pipeline', icon: TrendingUp },
  { id: 'candidates', label: 'Candidate Pipeline', icon: Users },
  { id: 'recruiters', label: 'Recruiter Performance', icon: TrendingUp },
  { id: 'placements', label: 'Placements & Dispatch', icon: Briefcase },
  { id: 'documents', label: 'Onboarding & Docs', icon: FileText },
];

export function Sidebar({ activeSection, setActiveSection, className }: SidebarProps) {
  return (
    <div className={cn("flex flex-col h-full bg-slate-900 text-white w-64 border-r border-slate-800", className)}>
      <div className="p-6">
        <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center font-black text-white">C</div>
          CoreWorks
        </h1>
        <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-semibold">Staffing Dashboard</p>
      </div>
      
      <nav className="flex-1 px-4 space-y-1 mt-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
              activeSection === item.id 
                ? "bg-orange-500 text-white" 
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </button>
        ))}
      </nav>
      
      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">MC</div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-medium truncate">Mark Canlas</p>
            <p className="text-xs text-slate-500 truncate">Admin User</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MobileNav({ activeSection, setActiveSection }: SidebarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800">
        <h1 className="text-lg font-bold text-white flex items-center gap-2">
          <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center font-black text-white text-xs">C</div>
          CoreWorks
        </h1>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-slate-400 hover:text-white"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm">
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-4">
              <button onClick={() => setIsOpen(false)} className="p-2 text-slate-400">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="px-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-4 px-4 py-4 rounded-xl text-lg font-medium transition-colors",
                    activeSection === item.id 
                      ? "bg-orange-500 text-white" 
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  )}
                >
                  <item.icon className="w-6 h-6" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
