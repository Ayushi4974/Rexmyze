import StatCard from "@/components/ui/stat-card";

export default function Stats() {
  const stats = [
    { label: "Students Trained", value: "10,000+", sublabel: "Across India & Abroad" },
    { label: "Placement Rate", value: "100%", sublabel: "Assistance to all graduates" },
    { label: "Courses Offered", value: "15+", sublabel: "AI-Powered Modules" },
    { label: "Success Rate", value: "4.9/5", sublabel: "Average Student Rating" },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard 
              key={i}
              label={stat.label}
              value={stat.value}
              sublabel={stat.sublabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
