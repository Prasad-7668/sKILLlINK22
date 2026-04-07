import { Search, Bell, User, LogOut, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 z-50 flex items-center justify-between px-6">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-xl font-bold text-primary-dark">SkillLink</span>
        </Link>

        <form onSubmit={handleSearch} className="hidden md:flex items-center relative">
          <Search className="absolute left-3 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search skills, projects, people..."
            className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-full w-80 focus:ring-2 focus:ring-primary/20 text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 text-gray-500 hover:bg-gray-50 rounded-full relative"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          {showNotifications && (
            <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-[60]">
              <div className="p-4 border-b border-gray-50 flex items-center justify-between">
                <h4 className="font-bold">Notifications</h4>
                <button onClick={() => setShowNotifications(false)}><X className="w-4 h-4 text-gray-400" /></button>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {[
                  { id: 1, user: "Priya Patel", action: "liked your post", time: "2m ago" },
                  { id: 2, user: "Rahul Verma", action: "invited you to a team", time: "1h ago" },
                  { id: 3, user: "System", action: "Skill growth updated!", time: "3h ago" },
                ].map((n) => (
                  <div key={n.id} className="p-4 hover:bg-gray-50 border-b border-gray-50 cursor-pointer transition-all">
                    <p className="text-sm"><span className="font-bold">{n.user}</span> {n.action}</p>
                    <p className="text-xs text-gray-400 mt-1">{n.time}</p>
                  </div>
                ))}
              </div>
              <div className="p-3 text-center border-t border-gray-50">
                <button className="text-xs font-bold text-primary-dark hover:underline">View All</button>
              </div>
            </div>
          )}
        </div>

        <Link to="/profile" className="flex items-center gap-2 p-1 pr-3 hover:bg-gray-50 rounded-full transition-all">
          <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
            <img src="https://picsum.photos/seed/user/100" alt="Profile" referrerPolicy="no-referrer" />
          </div>
          <span className="text-sm font-medium hidden sm:block">John Doe</span>
        </Link>
      </div>
    </nav>
  );
}
