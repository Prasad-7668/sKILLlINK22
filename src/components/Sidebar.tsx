import { Home, User, Users, LayoutDashboard, Settings, MessageSquare, Briefcase } from "lucide-react";
import { NavLink } from "react-router-dom";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: User, label: "Profile", path: "/profile" },
  { icon: Users, label: "Teams", path: "/teams" },
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: MessageSquare, label: "Messages", path: "/messages" },
  { icon: Briefcase, label: "Projects", path: "/projects" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-100 p-4 hidden lg:block">
      <div className="space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium",
                isActive
                  ? "bg-accent text-primary-dark"
                  : "text-gray-500 hover:bg-gray-50 hover:text-primary"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>

      <div className="absolute bottom-8 left-4 right-4">
        <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
          <h4 className="text-sm font-bold text-primary-dark mb-1">Open to Work?</h4>
          <p className="text-xs text-gray-600 mb-3">Let others know you're looking for projects.</p>
          <button className="w-full py-2 bg-primary text-white rounded-lg text-xs font-bold hover:bg-primary-dark transition-all">
            Update Status
          </button>
        </div>
      </div>
    </aside>
  );
}
