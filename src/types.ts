export type UserRole = "student" | "admin";

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  role: UserRole;
  bio: string;
  college: string;
  branch: string;
  skills: string[];
  projects: Project[];
  certifications: string[];
  interests: string[];
  availability: "open" | "busy";
  createdAt: string;
  contributionScore: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
  tags: string[];
}

export interface Post {
  id: string;
  authorId: string;
  authorName: string;
  authorPhoto: string;
  content: string;
  imageUrl?: string;
  likes: string[]; // Array of user UIDs
  comments: Comment[];
  createdAt: string;
  tags: string[];
}

export interface Comment {
  id: string;
  authorId: string;
  authorName: string;
  content: string;
  createdAt: string;
}

export interface Team {
  id: string;
  name: string;
  description: string;
  ownerId: string;
  members: string[]; // Array of user UIDs
  lookingFor: string[]; // Skills they are looking for
  status: "active" | "completed";
  tasks: Task[];
  createdAt: string;
}

export interface Task {
  id: string;
  title: string;
  assignedTo?: string;
  status: "todo" | "in-progress" | "done";
}

export interface Notification {
  id: string;
  userId: string;
  type: "like" | "comment" | "invite" | "system";
  message: string;
  fromId?: string;
  fromName?: string;
  read: boolean;
  createdAt: string;
}
