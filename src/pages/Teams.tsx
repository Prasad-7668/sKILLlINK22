import { Users, Plus, Search, Filter, MessageSquare, CheckCircle2, Clock, PlayCircle } from "lucide-react";
import type { Team } from "../types";

const MOCK_TEAMS: Team[] = [
  {
    id: "t1",
    name: "AI Study Group",
    description: "Collaborative learning group for deep learning and neural networks. We meet every weekend to discuss research papers and work on projects.",
    ownerId: "user1",
    members: ["user1", "user2", "user3"],
    lookingFor: ["PyTorch", "Math", "Data Visualization"],
    status: "active",
    tasks: [
      { id: "tk1", title: "Read ResNet paper", status: "done" },
      { id: "tk2", title: "Implement basic CNN", status: "in-progress" },
      { id: "tk3", title: "Prepare presentation", status: "todo" }
    ],
    createdAt: new Date().toISOString()
  },
  {
    id: "t2",
    name: "Web Dev Hackathon",
    description: "Building a full-stack e-commerce platform for the upcoming college hackathon. Need a designer and a backend developer.",
    ownerId: "user4",
    members: ["user4", "user5"],
    lookingFor: ["UI/UX", "Node.js", "PostgreSQL"],
    status: "active",
    tasks: [
      { id: "tk4", title: "Design wireframes", status: "todo" },
      { id: "tk5", title: "Setup database", status: "todo" }
    ],
    createdAt: new Date().toISOString()
  }
];

export default function Teams() {
  const teams = MOCK_TEAMS;

  return (
    <div className="py-4 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Teams & Projects</h1>
          <p className="text-gray-500 font-medium">Collaborate with fellow students on exciting projects.</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-5 h-5" />
          <span>Create Team</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search teams by name or skills..."
            className="input-field pl-10"
          />
        </div>
        <button className="btn-secondary flex items-center gap-2">
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </button>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teams.map((team) => (
          <div key={team.id} className="card hover:shadow-md transition-all border-l-4 border-l-primary">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-primary-dark">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{team.name}</h3>
                  <p className="text-xs text-gray-500">{team.members.length} Members • {team.status}</p>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-50 rounded-full text-gray-400">
                <MessageSquare className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-6 line-clamp-2">
              {team.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Looking for</h4>
              <div className="flex flex-wrap gap-2">
                {team.lookingFor.map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-red-50 text-red-600 rounded-md text-[10px] font-bold uppercase tracking-wider border border-red-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Recent Tasks</h4>
              {team.tasks.slice(0, 3).map((task) => (
                <div key={task.id} className="flex items-center gap-2 text-sm">
                  {task.status === "done" ? (
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  ) : task.status === "in-progress" ? (
                    <PlayCircle className="w-4 h-4 text-blue-500" />
                  ) : (
                    <Clock className="w-4 h-4 text-gray-300" />
                  )}
                  <span className={task.status === "done" ? "text-gray-400 line-through" : "text-gray-700"}>
                    {task.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
              <div className="flex -space-x-2">
                {team.members.map((member, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <img src={`https://picsum.photos/seed/${member}/100`} alt="Member" referrerPolicy="no-referrer" />
                  </div>
                ))}
                {team.members.length > 3 && (
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500">
                    +{team.members.length - 3}
                  </div>
                )}
              </div>
              <button className="text-primary-dark font-bold text-sm hover:underline">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
