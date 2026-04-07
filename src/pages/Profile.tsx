import { MapPin, Briefcase, Calendar, Edit2, Plus, Award, Github, Linkedin, Globe } from "lucide-react";
import type { UserProfile } from "../types";

const MOCK_PROFILE: UserProfile = {
  uid: "user1",
  email: "john.doe@college.edu",
  displayName: "John Doe",
  photoURL: "https://picsum.photos/seed/user/200",
  role: "student",
  bio: "Passionate Full-Stack Developer | Open Source Contributor | Tech Enthusiast. Always looking for exciting projects to collaborate on!",
  college: "Indian Institute of Technology, Delhi",
  branch: "Computer Science & Engineering",
  skills: ["React", "Node.js", "TypeScript", "Tailwind CSS", "Firebase", "Python", "Docker"],
  projects: [
    { id: "p1", title: "SkillLink Platform", description: "A college collaboration and skill-sharing platform for students.", tags: ["React", "Firebase", "Tailwind"] },
    { id: "p2", title: "AI Image Generator", description: "Using OpenAI API to generate images from text prompts.", tags: ["Next.js", "OpenAI", "Prisma"] }
  ],
  certifications: ["AWS Certified Cloud Practitioner", "Google Data Analytics Professional Certificate"],
  interests: ["Web Development", "AI/ML", "Open Source", "Blockchain"],
  availability: "open",
  createdAt: new Date().toISOString(),
  contributionScore: 850
};

export default function Profile() {
  const profile = MOCK_PROFILE;

  return (
    <div className="py-4 space-y-8">
      {/* Profile Header */}
      <div className="card p-0 overflow-hidden">
        <div className="h-48 bg-gradient-to-r from-primary to-primary-dark relative">
          <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-all">
            <Edit2 className="w-5 h-5" />
          </button>
        </div>
        <div className="px-8 pb-8 relative">
          <div className="absolute -top-16 left-8 w-32 h-32 rounded-3xl border-4 border-white overflow-hidden bg-white shadow-lg">
            <img src={profile.photoURL} alt={profile.displayName} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          
          <div className="pt-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{profile.displayName}</h1>
              <p className="text-gray-500 font-medium">{profile.branch} @ {profile.college}</p>
              <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Delhi, India</span>
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  <span className={profile.availability === "open" ? "text-primary-dark font-bold" : "text-gray-500"}>
                    {profile.availability === "open" ? "Open to Work" : "Not Available"}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {new Date(profile.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button className="btn-secondary flex items-center gap-2">
                <Edit2 className="w-4 h-4" />
                <span>Edit Profile</span>
              </button>
              <button className="btn-primary flex items-center gap-2">
                <Plus className="w-4 h-4" />
                <span>Add Project</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* About */}
          <div className="card">
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-gray-700 leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Projects */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Projects</h3>
              <button className="text-primary-dark font-bold text-sm hover:underline">View All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {profile.projects.map((project) => (
                <div key={project.id} className="p-4 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group">
                  <h4 className="font-bold text-gray-900 group-hover:text-primary-dark transition-colors">{project.title}</h4>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="card">
            <h3 className="text-xl font-bold mb-6">Certifications</h3>
            <div className="space-y-4">
              {profile.certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-primary-dark">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{cert}</h4>
                    <p className="text-xs text-gray-500">Verified Professional Certificate</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Skills */}
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span key={interest} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-all text-gray-700">
                <Github className="w-5 h-5" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-all text-gray-700">
                <Linkedin className="w-5 h-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-all text-gray-700">
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium">Portfolio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
