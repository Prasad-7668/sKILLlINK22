import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Teams from "./pages/Teams";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import { useState } from "react";

// Simple Login Page
function Login({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-6">
      <div className="card max-w-md w-full p-10 text-center">
        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
          <span className="text-white font-bold text-3xl">S</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to SkillLink</h1>
        <p className="text-gray-500 mb-8">Connect, Collaborate, and Grow with your fellow college students.</p>
        
        <div className="space-y-4">
          <button 
            onClick={onLogin}
            className="w-full py-3 bg-white border border-gray-200 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-gray-50 transition-all shadow-sm"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/action/google.svg" alt="Google" className="w-5 h-5" />
            <span>Sign in with Google</span>
          </button>
          
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-400">Or continue with</span></div>
          </div>

          <input type="email" placeholder="College Email" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          
          <button 
            onClick={onLogin}
            className="btn-primary w-full py-3 mt-2"
          >
            Sign In
          </button>
        </div>
        
        <p className="mt-8 text-sm text-gray-500">
          Don't have an account? <a href="#" className="text-primary-dark font-bold hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);

  return (
    <Router>
      <Routes>
        {!isAuthenticated ? (
          <Route path="*" element={<Login onLogin={handleLogin} />} />
        ) : (
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="teams" element={<Teams />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        )}
      </Routes>
    </Router>
  );
}
