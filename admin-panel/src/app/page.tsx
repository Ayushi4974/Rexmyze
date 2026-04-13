"use client";

import { useState, useEffect } from "react";
import { 
  Loader2, Mail, Phone, Users, MessageSquare, 
  LogOut, ShieldCheck, Database, Calendar, 
  RefreshCcw, ChevronRight, Search, Filter, 
  LayoutDashboard, Bell, Settings, ArrowUpRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// The base URL of your main site's API
const API_BASE_URL = "https://rexmyze.vercel.app";

const Card = ({ children, className = "" }: any) => (
  <div className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden ${className}`}>
    {children}
  </div>
);

const Button = ({ children, onClick, disabled, className, variant = "primary" }: any) => {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-bold";
  const variants: any = {
    primary: "bg-[#458ecc] hover:bg-[#5da2df] text-white shadow-[0_0_20px_rgba(69,142,204,0.3)] hover:shadow-[0_0_30px_rgba(69,142,204,0.5)] transform hover:-translate-y-0.5",
    ghost: "text-red-400 hover:bg-red-500/10 hover:text-red-300",
    outline: "border border-white/10 text-white/70 hover:bg-white/5 hover:text-white",
    tab: "text-white/40 hover:text-white/70",
    activeTab: "text-white bg-white/10"
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
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async (pwd: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/data?password=${encodeURIComponent(pwd)}`);
      const result = await res.json();
      
      if (result.success) {
        setData(result);
        setIsAuthenticated(true);
        localStorage.setItem("admin_password", pwd);
      } else {
        setError("Access Denied: Invalid Credentials");
        localStorage.removeItem("admin_password");
      }
    } catch (err) {
      setError("Network Correlation Failed. Check main database connection.");
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

  const filteredData = activeTab === 'leads' 
    ? data.leads.filter((l: any) => l.name?.toLowerCase().includes(searchQuery.toLowerCase()) || l.email?.toLowerCase().includes(searchQuery.toLowerCase()))
    : data.messages.filter((m: any) => m.name?.toLowerCase().includes(searchQuery.toLowerCase()) || m.message?.toLowerCase().includes(searchQuery.toLowerCase()));

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 text-white selection:bg-[#458ecc]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] left-[30%] w-[500px] h-[500px] bg-[#458ecc]/10 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[20%] right-[30%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] animate-pulse delay-700"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full relative z-10"
        >
          <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldCheck size={120} />
            </div>

            <div className="flex justify-center mb-10">
              <div className="h-20 w-20 bg-gradient-to-tr from-[#458ecc] to-blue-400 rounded-3xl flex items-center justify-center text-white shadow-[0_0_30px_rgba(69,142,204,0.4)]">
                <ShieldCheck size={36} />
              </div>
            </div>
            
            <h1 className="text-4xl font-black text-center mb-2 tracking-tight uppercase leading-none">
              REXMYZE <span className="text-[#458ecc] italic">ADMIN</span>
            </h1>
            <p className="text-center text-white/40 mb-10 text-sm font-medium tracking-wide uppercase">Proprietary Lead Management</p>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-4">Access Key</label>
                <input
                  type="password"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/[0.05] border border-white/5 rounded-2xl px-6 py-5 text-sm font-bold focus:border-[#458ecc]/50 focus:bg-white/[0.08] outline-none transition-all placeholder:text-white/10"
                  required
                />
                <AnimatePresence>
                  {error && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-[10px] font-black uppercase tracking-widest pl-4 pt-2"
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              <Button
                disabled={loading}
                className="w-full py-6 text-sm font-black uppercase tracking-[0.2em] rounded-2xl h-16"
              >
                {loading ? <Loader2 className="animate-spin" /> : "Verify Identity"}
              </Button>
            </form>
          </div>
          <p className="text-center mt-8 text-[10px] uppercase font-black tracking-[0.3em] text-white/20">Secure Environment v2.4.0</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-[#458ecc]/30">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-20 md:w-64 bg-black border-r border-white/5 hidden sm:flex flex-col z-[60]">
         <div className="p-8 pb-12">
            <div className="flex items-center gap-3">
               <div className="h-10 w-10 bg-[#458ecc] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <Database size={20} />
               </div>
               <div className="hidden md:block">
                  <h1 className="text-xl font-black tracking-tighter uppercase italic leading-none">Rexmyze</h1>
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">Control Panel</p>
               </div>
            </div>
         </div>

         <nav className="flex-1 px-4 space-y-2">
            <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl bg-white/5 text-[#458ecc] border border-white/10 group transition-all">
                <LayoutDashboard size={20} />
                <span className="text-sm font-bold md:block hidden">Dashboard</span>
            </button>
            <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-all">
                <Bell size={20} />
                <span className="text-sm font-bold md:block hidden">Alerts</span>
            </button>
            <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-all">
                <Settings size={20} />
                <span className="text-sm font-bold md:block hidden">Settings</span>
            </button>
         </nav>

         <div className="p-4 border-t border-white/5">
            <button onClick={handleLogout} className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all">
                <LogOut size={20} />
                <span className="text-sm font-bold md:block hidden">Terminal Exit</span>
            </button>
         </div>
      </aside>

      {/* Main Content */}
      <main className="sm:ml-20 md:ml-64 p-6 md:p-12 transition-all">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
           <div>
              <h2 className="text-4xl font-black tracking-tight uppercase leading-none mb-2">Systems <span className="text-[#458ecc] italic">Overview</span></h2>
              <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">Active Data Streams from Production Site</p>
           </div>
           
           <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                 <input 
                   type="text" 
                   placeholder="Search entries..." 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className="w-full bg-white/[0.03] border border-white/10 rounded-2xl pl-12 pr-4 py-3 text-sm font-bold focus:border-[#458ecc]/50 outline-none transition-all"
                 />
              </div>
              <Button onClick={() => fetchData(password)} className="h-12 w-12 rounded-2xl flex-shrink-0" variant="outline">
                 {loading ? <Loader2 className="animate-spin size-4" /> : <RefreshCcw size={18} />}
              </Button>
           </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setActiveTab("leads")}
              className={`relative group h-48 rounded-[2.5rem] p-8 overflow-hidden transition-all border-2 ${activeTab === 'leads' ? 'bg-[#458ecc] border-[#458ecc]' : 'bg-white/[0.03] border-white/5 hover:border-white/10'}`}
            >
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <Users size={120} />
               </div>
               <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${activeTab === 'leads' ? 'bg-white/20' : 'bg-[#458ecc]/10 text-[#458ecc]'}`}>
                     <Users size={24} />
                  </div>
                  <div>
                    <p className={`text-5xl font-black tracking-tighter mb-1 ${activeTab === 'leads' ? 'text-white' : 'text-white'}`}>{data.leads.length}</p>
                    <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${activeTab === 'leads' ? 'text-white/70' : 'text-white/30'}`}>Student Registrations</p>
                  </div>
               </div>
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setActiveTab("messages")}
              className={`relative group h-48 rounded-[2.5rem] p-8 overflow-hidden transition-all border-2 ${activeTab === 'messages' ? 'bg-[#458ecc] border-[#458ecc]' : 'bg-white/[0.03] border-white/5 hover:border-white/10'}`}
            >
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <MessageSquare size={120} />
               </div>
               <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${activeTab === 'messages' ? 'bg-white/20' : 'bg-[#458ecc]/10 text-[#458ecc]'}`}>
                     <MessageSquare size={24} />
                  </div>
                  <div>
                    <p className={`text-5xl font-black tracking-tighter mb-1 ${activeTab === 'messages' ? 'text-white' : 'text-white'}`}>{data.messages.length}</p>
                    <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${activeTab === 'messages' ? 'text-white/70' : 'text-white/30'}`}>General Inquiries</p>
                  </div>
               </div>
            </motion.button>
        </div>

        {/* Data Table Area */}
        <Card className="shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
           <div className="px-10 py-8 border-b border-white/5 bg-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                 <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                 <h3 className="text-lg font-black tracking-tight uppercase">Live <span className="text-[#458ecc]">{activeTab === 'leads' ? 'Leads' : 'Messages'}</span> Stream</h3>
              </div>
              <div className="flex bg-black/40 rounded-xl p-1 border border-white/5">
                 <Button 
                   variant={activeTab === 'leads' ? "activeTab" : "tab"} 
                   className="px-6 py-2 rounded-lg text-xs"
                   onClick={() => setActiveTab("leads")}
                 >
                   REGISTRATIONS
                 </Button>
                 <Button 
                   variant={activeTab === 'messages' ? "activeTab" : "tab"} 
                   className="px-6 py-2 rounded-lg text-xs"
                   onClick={() => setActiveTab("messages")}
                 >
                   INBOX
                 </Button>
              </div>
           </div>

           <div className="overflow-x-auto">
             <table className="w-full text-left border-collapse min-w-[800px]">
               <thead>
                 <tr className="bg-white/[0.02]">
                   <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-white/20">Timestamp</th>
                   <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-white/20">Identity</th>
                   <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-white/20">Communication</th>
                   <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-white/20">{activeTab === 'leads' ? 'Vector' : 'Message Context'}</th>
                   <th className="px-8 py-6"></th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                 <AnimatePresence mode="popLayout">
                 {filteredData.map((item: any, idx: number) => (
                   <motion.tr 
                     key={item._id || idx}
                     initial={{ opacity: 0, x: -10 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: idx * 0.05 }}
                     className="hover:bg-white/[0.02] transition-colors group"
                   >
                     <td className="px-8 py-8 whitespace-nowrap">
                        <div className="flex flex-col">
                           <span className="text-xs font-bold text-white/60 mb-1">{new Date(item.createdAt).toLocaleDateString()}</span>
                           <span className="text-[10px] font-medium text-white/20">{new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                     </td>
                     <td className="px-8 py-8">
                        <div className="flex items-center gap-4">
                           <div className="h-10 w-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-white/40 border border-white/10 group-hover:border-[#458ecc]/50 transition-colors">
                              {item.name?.charAt(0) || '?'}
                           </div>
                           <div>
                              <p className="font-bold text-base tracking-tight mb-0.5">{item.name}</p>
                              <p className="text-[10px] text-white/30 font-black uppercase tracking-widest">{item.center || item.email?.split('@')[0] || 'Internal'}</p>
                           </div>
                        </div>
                     </td>
                     <td className="px-8 py-8">
                       <div className="space-y-2">
                          <a href={`mailto:${item.email}`} className="flex items-center gap-2 text-[12px] font-bold text-white/50 hover:text-[#458ecc] transition-colors">
                             <Mail size={12} className="text-[#458ecc]" /> {item.email}
                          </a>
                          <a href={`tel:${item.phone}`} className="flex items-center gap-2 text-[12px] font-bold text-white/50 hover:text-[#458ecc] transition-colors">
                             <Phone size={12} className="text-[#458ecc]" /> {item.phone}
                          </a>
                       </div>
                     </td>
                     <td className="px-8 py-8">
                       {activeTab === 'leads' ? (
                          <span className="inline-flex rounded-lg bg-[#458ecc]/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-[#458ecc] border border-[#458ecc]/20">
                            {item.course || 'Global Event'}
                          </span>
                       ) : (
                          <p className="text-sm font-medium text-white/60 leading-relaxed italic max-w-xs line-clamp-2">{item.message}</p>
                       )}
                     </td>
                     <td className="px-8 py-8">
                        <button className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-white/20 hover:text-white hover:bg-[#458ecc] hover:scale-110 transition-all opacity-0 group-hover:opacity-100">
                           <ArrowUpRight size={18} />
                        </button>
                     </td>
                   </motion.tr>
                 ))}
                 </AnimatePresence>
                 {filteredData.length === 0 && (
                   <tr>
                      <td colSpan={5} className="py-24 text-center">
                         <div className="inline-flex h-16 w-16 rounded-full bg-white/5 items-center justify-center text-white/10 mb-4">
                            <Search size={32} />
                         </div>
                         <p className="text-white/20 font-bold uppercase tracking-[0.2em] text-xs">No matching encrypted records found</p>
                      </td>
                   </tr>
                 )}
               </tbody>
             </table>
           </div>
        </Card>

        {/* Footer info */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 pb-12">
            <div className="flex items-center gap-6 opacity-20">
                <div className="text-[10px] font-black uppercase tracking-widest">Database State: Healthy</div>
                <div className="h-4 w-[1px] bg-white"></div>
                <div className="text-[10px] font-black uppercase tracking-widest">Network: Encrypted</div>
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/10 italic">© 2026 REXMYZE ACADEMY • INTERNAL ACCESS ONLY</p>
        </div>
      </main>

      {/* Background visual elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-50">
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-purple-600/10 rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
}
