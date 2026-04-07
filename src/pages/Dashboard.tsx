import { TrendingUp, Users, Briefcase, Award, ArrowUpRight, ArrowDownRight, Activity, Zap } from "lucide-react";
import { format } from "date-fns";

const STATS = [
  { label: "Profile Views", value: "1,284", change: "+12.5%", trend: "up", icon: Users },
  { label: "Project Invites", value: "24", change: "+4.2%", trend: "up", icon: Briefcase },
  { label: "Skill Growth", value: "85%", change: "+5.1%", trend: "up", icon: TrendingUp },
  { label: "Contribution Score", value: "850", change: "-2.1%", trend: "down", icon: Award },
];

const RECENT_INTERACTIONS = [
  { id: "i1", user: "Priya Patel", action: "liked your post", time: "2 hours ago", photo: "https://picsum.photos/seed/priya/100" },
  { id: "i2", user: "Rahul Verma", action: "invited you to 'Web Dev Hackathon'", time: "5 hours ago", photo: "https://picsum.photos/seed/rahul/100" },
  { id: "i3", user: "Sneha Reddy", action: "commented on your project", time: "1 day ago", photo: "https://picsum.photos/seed/sneha/100" },
  { id: "i4", user: "Arjun Sharma", action: "started following you", time: "2 days ago", photo: "https://picsum.photos/seed/arjun/100" },
];

export default function Dashboard() {
  return (
    <div className="py-4 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 font-medium">Track your growth and interactions on SkillLink.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat) => (
          <div key={stat.label} className="card p-5 hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-primary-dark">
                <stat.icon className="w-5 h-5" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                {stat.trend === "up" ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.change}
              </div>
            </div>
            <h4 className="text-sm font-medium text-gray-500">{stat.label}</h4>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Skill Growth Tracking */}
        <div className="lg:col-span-2 card">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              Skill Growth Tracking
            </h3>
            <select className="bg-gray-50 border-none rounded-lg text-sm px-3 py-1 focus:ring-2 focus:ring-primary/20">
              <option>Last 30 Days</option>
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          
          <div className="space-y-6">
            {[
              { skill: "React", level: 90, color: "bg-blue-500" },
              { skill: "Node.js", level: 75, color: "bg-green-500" },
              { skill: "TypeScript", level: 60, color: "bg-blue-600" },
              { skill: "Python", level: 45, color: "bg-yellow-500" },
            ].map((skill) => (
              <div key={skill.skill} className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-gray-700">{skill.skill}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000`} 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Interactions */}
        <div className="card">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Recent Activity
          </h3>
          <div className="space-y-6">
            {RECENT_INTERACTIONS.map((interaction) => (
              <div key={interaction.id} className="flex gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src={interaction.photo} alt={interaction.user} referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-bold text-gray-900">{interaction.user}</span>
                    {" "}
                    <span className="text-gray-600">{interaction.action}</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{interaction.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-2 text-sm font-bold text-primary-dark hover:bg-accent rounded-lg transition-all">
            View All Activity
          </button>
        </div>
      </div>
    </div>
  );
}
