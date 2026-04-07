import { Search as SearchIcon, Filter, User, Briefcase, MapPin, Star } from "lucide-react";
import { useState } from "react";
import type { UserProfile } from "../types";

const MOCK_USERS: Partial<UserProfile>[] = [
  { uid: "u1", displayName: "Arjun Sharma", branch: "CSE", college: "IIT Delhi", skills: ["React", "Node.js", "Python"], availability: "open", photoURL: "https://picsum.photos/seed/arjun/100" },
  { uid: "u2", displayName: "Priya Patel", branch: "ECE", college: "NSUT", skills: ["ML", "Python", "Data Science"], availability: "busy", photoURL: "https://picsum.photos/seed/priya/100" },
  { uid: "u3", displayName: "Rahul Verma", branch: "ME", college: "DTU", skills: ["CAD", "SolidWorks", "IoT"], availability: "open", photoURL: "https://picsum.photos/seed/rahul/100" },
  { uid: "u4", displayName: "Sneha Reddy", branch: "CSE", college: "IIT Delhi", skills: ["UI/UX", "Figma", "React"], availability: "open", photoURL: "https://picsum.photos/seed/sneha/100" },
  { uid: "u5", displayName: "Vikram Singh", branch: "IT", college: "IGDTUW", skills: ["Java", "Spring Boot", "MySQL"], availability: "busy", photoURL: "https://picsum.photos/seed/vikram/100" },
];

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(MOCK_USERS);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (!val.trim()) {
      setResults(MOCK_USERS);
      return;
    }
    const filtered = MOCK_USERS.filter(user => 
      user.displayName?.toLowerCase().includes(val.toLowerCase()) ||
      user.skills?.some(s => s.toLowerCase().includes(val.toLowerCase())) ||
      user.branch?.toLowerCase().includes(val.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="py-4 space-y-8">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-gray-900">Find Collaborators</h1>
        
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, skill, branch or college..."
              className="input-field pl-12 py-3 text-lg"
              value={query}
              onChange={handleSearch}
            />
          </div>
          <button className="btn-secondary flex items-center gap-2 py-3 px-6">
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {results.map((user) => (
          <div key={user.uid} className="card hover:shadow-md transition-all group">
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0 border-2 border-white shadow-sm group-hover:scale-105 transition-transform">
                <img src={user.photoURL} alt={user.displayName} referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary-dark transition-colors">{user.displayName}</h3>
                    <p className="text-xs text-gray-500 font-medium">{user.branch} @ {user.college}</p>
                  </div>
                  <div className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${user.availability === "open" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                    {user.availability === "open" ? "Open" : "Busy"}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {user.skills?.map((skill) => (
                    <span key={skill} className="skill-badge text-[10px] py-0.5 px-2">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-50">
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-gray-600">4.9</span>
                <span>(12 reviews)</span>
              </div>
              <div className="flex gap-2">
                <button className="text-xs font-bold text-primary-dark hover:underline">View Profile</button>
                <button className="btn-primary py-1.5 px-4 text-xs">Invite</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {results.length === 0 && (
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <SearchIcon className="w-10 h-10 text-gray-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">No results found</h3>
          <p className="text-gray-500">Try searching for different skills or names.</p>
        </div>
      )}
    </div>
  );
}
