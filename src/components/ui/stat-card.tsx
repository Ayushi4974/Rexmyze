interface StatCardProps {
  label: string;
  value: string;
  sublabel?: string;
  className?: string;
}

export default function StatCard({ label, value, sublabel, className }: StatCardProps) {
  return (
    <div className={`p-6 rounded-2xl bg-card border border-border shadow-md flex flex-col items-center text-center transition-all hover:scale-105 hover:shadow-xl ${className}`}>
      <span className="text-4xl font-extrabold tracking-tight text-primary mb-2">
        {value}
      </span>
      <span className="text-sm font-bold uppercase tracking-widest text-foreground">
        {label}
      </span>
      {sublabel && (
        <span className="text-xs text-muted-foreground mt-2 font-medium italic">
          {sublabel}
        </span>
      )}
    </div>
  );
}
