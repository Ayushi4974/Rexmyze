"use client";

import { useState, useEffect } from "react";
import { Loader2, Mail, Phone, Users, MessageSquare, LogOut, ShieldCheck, Database, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>({ leads: [], messages: [] });
  const [activeTab, setActiveTab] = useState("leads");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const res = await fetch(`/api/admin/data?password=${encodeURIComponent(password)}`);
      const result = await res.json();
      
      if (result.success) {
        setData(result);
        setIsAuthenticated(true);
        localStorage.setItem("admin_password", password);
      } else {
        setError("Invalid password");
      }
    } catch (err) {
      setError("Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedPassword = localStorage.getItem("admin_password");
    if (savedPassword) {
      setPassword(savedPassword);
      // Automatically attempt login with saved password
      const autoLogin = async () => {
         try {
            const res = await fetch(`/api/admin/data?password=${encodeURIComponent(savedPassword)}`);
            const result = await res.json();
            if (result.success) {
               setData(result);
               setIsAuthenticated(true);
            }
         } catch (e) {}
      };
      autoLogin();
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    localStorage.removeItem("admin_password");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-card rounded-4xl shadow-2xl p-10 border-4 border-primary">
          <div className="flex justify-center mb-8">
            <div className="h-20 w-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary">
              <ShieldCheck size={40} />
            </div>
          </div>
          <h1 className="text-3xl font-black text-center mb-2 tracking-tighter">Admin Portal</h1>
          <p className="text-center text-muted-foreground mb-8 italic font-medium">Please enter your password to access the database</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-muted/50 border-none rounded-xl px-6 py-5 text-sm font-bold focus:ring-4 focus:ring-primary/20 outline-none transition-all"
                required
              />
              {error && <p className="text-destructive text-xs font-bold pl-2">{error}</p>}
            </div>
            <Button
              disabled={loading}
              className="w-full py-8 text-xl font-black uppercase tracking-widest rounded-xl bg-primary hover:bg-primary/90 shadow-xl"
            >
              {loading ? <Loader2 className="animate-spin" /> : "Access Database"}
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/10 font-sans">
      <nav className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-white">
                <Database size={20} />
             </div>
             <div>
                <h1 className="text-xl font-black tracking-tighter uppercase">Rexmyze <span className="text-primary italic">Admin</span></h1>
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60 leading-none">Management Dashboard</p>
             </div>
          </div>
          <Button variant="ghost" onClick={handleLogout} className="text-destructive font-black uppercase tracking-widest text-xs gap-2">
            Logout <LogOut size={16} />
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
           <button 
             onClick={() => setActiveTab("leads")}
             className={`flex-1 p-8 rounded-3xl border-4 transition-all flex items-center gap-6 shadow-xl ${activeTab === 'leads' ? 'bg-primary border-primary text-white scale-[1.02]' : 'bg-white border-transparent text-foreground hover:border-primary/20'}`}
           >
              <div className={`h-16 w-16 rounded-2xl flex items-center justify-center ${activeTab === 'leads' ? 'bg-white/20' : 'bg-primary/10 text-primary'}`}>
                 <Users size={32} />
              </div>
              <div className="text-left">
                 <p className={`text-3xl font-black leading-tight ${activeTab === 'leads' ? 'text-white' : 'text-primary'}`}>{data.leads.length}</p>
                 <p className={`text-xs font-bold uppercase tracking-widest ${activeTab === 'leads' ? 'text-white/70' : 'text-muted-foreground'}`}>Student Leads</p>
              </div>
           </button>
           <button 
             onClick={() => setActiveTab("messages")}
             className={`flex-1 p-8 rounded-3xl border-4 transition-all flex items-center gap-6 shadow-xl ${activeTab === 'messages' ? 'bg-primary border-primary text-white scale-[1.02]' : 'bg-white border-transparent text-foreground hover:border-primary/20'}`}
           >
              <div className={`h-16 w-16 rounded-2xl flex items-center justify-center ${activeTab === 'messages' ? 'bg-white/20' : 'bg-primary/10 text-primary'}`}>
                 <MessageSquare size={32} />
              </div>
              <div className="text-left">
                 <p className={`text-3xl font-black leading-tight ${activeTab === 'messages' ? 'text-white' : 'text-primary'}`}>{data.messages.length}</p>
                 <p className={`text-xs font-bold uppercase tracking-widest ${activeTab === 'messages' ? 'text-white/70' : 'text-muted-foreground'}`}>General Messages</p>
              </div>
           </button>
        </div>

        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-border">
          <div className="p-10 border-b border-border bg-muted/10 flex flex-col md:flex-row justify-between items-center gap-6">
             <h2 className="text-3xl font-black tracking-tighter uppercase">{activeTab === 'leads' ? 'Reserve Your Seat' : 'Contact Us'} <span className="text-primary italic underline underline-offset-8">Submissions</span></h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/30 border-b border-border">
                  <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-muted-foreground">Date</th>
                  <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-muted-foreground">Name</th>
                  <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-muted-foreground">Contact</th>
                  <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-muted-foreground">{activeTab === 'leads' ? 'Interested In' : 'Message'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {activeTab === 'leads' ? (
                  data.leads.map((lead: any) => (
                    <tr key={lead._id} className="hover:bg-muted/10 transition-colors">
                      <td className="px-8 py-8 whitespace-nowrap">
                         <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                            <Calendar size={14} className="text-primary" />
                            {new Date(lead.createdAt).toLocaleDateString()}
                         </div>
                      </td>
                      <td className="px-8 py-8">
                        <p className="font-black text-lg tracking-tight mb-1">{lead.name}</p>
                        <p className="text-xs text-muted-foreground font-medium italic">{lead.center || 'Main Center'}</p>
                      </td>
                      <td className="px-8 py-8">
                        <div className="space-y-2">
                           <a href={`mailto:${lead.email}`} className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
                              <Mail size={14} className="text-primary" /> {lead.email}
                           </a>
                           <a href={`tel:${lead.phone}`} className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
                              <Phone size={14} className="text-primary" /> {lead.phone}
                           </a>
                        </div>
                      </td>
                      <td className="px-8 py-8">
                        <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-primary italic border border-primary/20">
                          {lead.course || 'Masterclass'}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  data.messages.map((msg: any) => (
                    <tr key={msg._id} className="hover:bg-muted/10 transition-colors">
                      <td className="px-8 py-8 whitespace-nowrap text-xs font-bold text-muted-foreground">
                        {new Date(msg.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-8 py-8">
                        <p className="font-black text-lg tracking-tight">{msg.name}</p>
                        <p className="text-xs text-muted-foreground font-medium italic">{msg.email}</p>
                      </td>
                      <td className="px-8 py-8 text-sm font-bold text-muted-foreground">
                        {msg.phone}
                      </td>
                      <td className="px-8 py-8">
                        <p className="text-sm font-medium leading-relaxed italic border-l-2 border-primary/30 pl-4">{msg.message}</p>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          {(activeTab === 'leads' ? data.leads.length : data.messages.length) === 0 && (
             <div className="py-24 text-center">
                <p className="text-muted-foreground font-medium italic">No submissions found in the database.</p>
             </div>
          )}
        </div>
      </main>
    </div>
  );
}
