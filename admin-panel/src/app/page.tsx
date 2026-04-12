"use client";

import { useState, useEffect } from "react";
import { Loader2, Mail, Phone, Users, MessageSquare, LogOut, ShieldCheck, Database, Calendar, RefreshCcw } from "lucide-react";

// The base URL of your main site's API
const API_BASE_URL = "https://rexmyze.vercel.app";

const Button = ({ children, onClick, disabled, className, variant = "primary" }: any) => {
  const baseStyles = "inline-flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed";
  const variants: any = {
    primary: "bg-[#458ecc] hover:bg-[#347aad] text-white shadow-lg shadow-[#458ecc]/30",
    ghost: "text-red-500 hover:bg-red-50",
    outline: "border-2 border-slate-200 text-slate-600 hover:bg-slate-50"
  };
  
  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>({ leads: [], messages: [] });
  const [activeTab, setActiveTab] = useState("leads");
  const [error, setError] = useState("");

  const fetchData = async (pwd: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/data?password=${encodeURIComponent(pwd)}`);
      const result = await res.json();
      
      if (result.success) {
        setData(result);
        setIsAuthenticated(true);
        localStorage.setItem("admin_password", pwd);
      } else {
        setError("Invalid password");
        localStorage.removeItem("admin_password");
      }
    } catch (err) {
      setError("Failed to connect to server. Ensure CORS is enabled on the main site.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    fetchData(password);
  };

  useEffect(() => {
    const savedPassword = localStorage.getItem("admin_password");
    if (savedPassword) {
      setPassword(savedPassword);
      setLoading(true);
      fetchData(savedPassword);
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    localStorage.removeItem("admin_password");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-900">
        <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl p-10 border-4 border-[#458ecc]">
          <div className="flex justify-center mb-8">
            <div className="h-20 w-20 bg-[#458ecc]/10 rounded-3xl flex items-center justify-center text-[#458ecc]">
              <ShieldCheck size={40} />
            </div>
          </div>
          <h1 className="text-3xl font-black text-center mb-2 tracking-tighter uppercase italic">Admin Portal</h1>
          <p className="text-center text-slate-500 mb-8 italic font-medium">Restricted access to lead database</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-100 border-none rounded-2xl px-6 py-5 text-sm font-bold focus:ring-4 focus:ring-[#458ecc]/20 outline-none transition-all"
                required
              />
              {error && <p className="text-red-500 text-xs font-bold pl-2">{error}</p>}
            </div>
            <Button
              disabled={loading}
              className="w-full py-8 text-xl font-black uppercase tracking-widest rounded-2xl"
            >
              {loading ? <Loader2 className="animate-spin" /> : "Access Database"}
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100/50 font-sans text-slate-900">
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-3">
             <div className="h-10 w-10 bg-[#458ecc] rounded-xl flex items-center justify-center text-white">
                <Database size={20} />
             </div>
             <div>
                <h1 className="text-xl font-black tracking-tighter uppercase">Rexmyze <span className="text-[#458ecc] italic">Admin</span></h1>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 opacity-60 leading-none">External Management Panel</p>
             </div>
          </div>
          <div className="flex items-center gap-4">
            <Button 
                variant="outline" 
                onClick={() => fetchData(password)} 
                className="h-10 px-4 rounded-xl text-xs font-black uppercase tracking-tighter gap-2"
                disabled={loading}
            >
                {loading ? <Loader2 className="animate-spin size-4" /> : <RefreshCcw size={16} />}
                Refresh
            </Button>
            <Button variant="ghost" onClick={handleLogout} className="h-10 px-4 rounded-xl text-xs font-black uppercase tracking-widest gap-2">
                Logout <LogOut size={16} />
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
           <button 
             onClick={() => setActiveTab("leads")}
             className={`flex-1 p-8 rounded-[2.5rem] border-4 transition-all flex items-center gap-6 shadow-xl text-left ${activeTab === 'leads' ? 'bg-[#458ecc] border-[#458ecc] text-white scale-[1.02]' : 'bg-white border-transparent text-slate-900 hover:border-[#458ecc]/20'}`}
           >
              <div className={`h-16 w-16 rounded-2xl flex items-center justify-center ${activeTab === 'leads' ? 'bg-white/20' : 'bg-[#458ecc]/10 text-[#458ecc]'}`}>
                 <Users size={32} />
              </div>
              <div className="flex flex-col">
                 <p className={`text-3xl font-black leading-tight ${activeTab === 'leads' ? 'text-white' : 'text-[#458ecc]'}`}>{data.leads.length}</p>
                 <p className={`text-xs font-bold uppercase tracking-widest ${activeTab === 'leads' ? 'text-white/70' : 'text-slate-400'}`}>Student Leads</p>
              </div>
           </button>
           <button 
             onClick={() => setActiveTab("messages")}
             className={`flex-1 p-8 rounded-[2.5rem] border-4 transition-all flex items-center gap-6 shadow-xl text-left ${activeTab === 'messages' ? 'bg-[#458ecc] border-[#458ecc] text-white scale-[1.02]' : 'bg-white border-transparent text-slate-900 hover:border-[#458ecc]/20'}`}
           >
              <div className={`h-16 w-16 rounded-2xl flex items-center justify-center ${activeTab === 'messages' ? 'bg-white/20' : 'bg-[#458ecc]/10 text-[#458ecc]'}`}>
                 <MessageSquare size={32} />
              </div>
              <div className="flex flex-col">
                 <p className={`text-3xl font-black leading-tight ${activeTab === 'messages' ? 'text-white' : 'text-[#458ecc]'}`}>{data.messages.length}</p>
                 <p className={`text-xs font-bold uppercase tracking-widest ${activeTab === 'messages' ? 'text-white/70' : 'text-slate-400'}`}>General Messages</p>
              </div>
           </button>
        </div>

        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-200">
          <div className="p-10 border-b border-slate-100 bg-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
             <h2 className="text-3xl font-black tracking-tighter uppercase">{activeTab === 'leads' ? 'Student Registrations' : 'Contact Us'} <span className="text-[#458ecc] italic underline underline-offset-8">Submissions</span></h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400">Date</th>
                  <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400">Name</th>
                  <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400">Contact</th>
                  <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400">{activeTab === 'leads' ? 'Interested In' : 'Message'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {activeTab === 'leads' ? (
                  data.leads.map((lead: any) => (
                    <tr key={lead._id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-8 whitespace-nowrap">
                         <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                            <Calendar size={14} className="text-[#458ecc]" />
                            {new Date(lead.createdAt).toLocaleDateString()}
                         </div>
                      </td>
                      <td className="px-8 py-8">
                        <p className="font-black text-lg tracking-tight mb-1">{lead.name}</p>
                        <p className="text-xs text-slate-400 font-medium italic">{lead.center || 'Main Center'}</p>
                      </td>
                      <td className="px-8 py-8">
                        <div className="space-y-2">
                           <a href={`mailto:${lead.email}`} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#458ecc] transition-colors">
                              <Mail size={14} className="text-[#458ecc]" /> {lead.email}
                           </a>
                           <a href={`tel:${lead.phone}`} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#458ecc] transition-colors">
                              <Phone size={14} className="text-[#458ecc]" /> {lead.phone}
                           </a>
                        </div>
                      </td>
                      <td className="px-8 py-8">
                        <span className="inline-flex rounded-full bg-[#458ecc]/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-[#458ecc] italic border border-[#458ecc]/20">
                          {lead.course || 'Masterclass'}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  data.messages.map((msg: any) => (
                    <tr key={msg._id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-8 whitespace-nowrap text-xs font-bold text-slate-500">
                        {new Date(msg.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-8 py-8">
                        <p className="font-black text-lg tracking-tight">{msg.name}</p>
                        <p className="text-xs text-slate-400 font-medium italic">{msg.email}</p>
                      </td>
                      <td className="px-8 py-8 text-sm font-bold text-slate-500">
                        {msg.phone}
                      </td>
                      <td className="px-8 py-8">
                        <p className="text-sm font-medium leading-relaxed italic border-l-2 border-[#458ecc]/30 pl-4">{msg.message}</p>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          {(activeTab === 'leads' ? data.leads.length : data.messages.length) === 0 && (
             <div className="py-24 text-center">
                <p className="text-slate-400 font-medium italic">No submissions found in the database.</p>
             </div>
          )}
        </div>
      </main>
    </div>
  );
}
