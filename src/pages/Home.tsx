import { useState, useEffect } from "react";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";
import type { Post } from "../types";

const MOCK_POSTS: Post[] = [
  {
    id: "1",
    authorId: "user1",
    authorName: "Arjun Sharma",
    authorPhoto: "https://picsum.photos/seed/arjun/100",
    content: "Just finished building a real-time chat application using Socket.io and React! 🚀 It was a great learning experience. Looking for feedback on the UI. Check it out on my GitHub!",
    imageUrl: "https://picsum.photos/seed/project1/800/400",
    likes: ["user2", "user3", "user4"],
    comments: [
      { id: "c1", authorId: "user2", authorName: "Priya Patel", content: "This looks amazing! Great job on the UI.", createdAt: new Date().toISOString() }
    ],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    tags: ["webdev", "react", "socketio", "javascript"]
  },
  {
    id: "2",
    authorId: "user2",
    authorName: "Priya Patel",
    authorPhoto: "https://picsum.photos/seed/priya/100",
    content: "Does anyone have resources for learning Machine Learning from scratch? Specifically looking for hands-on projects for beginners. 🤖📚",
    likes: ["user1", "user5"],
    comments: [],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    tags: ["machinelearning", "learning", "help", "python"]
  },
  {
    id: "3",
    authorId: "user3",
    authorName: "Rahul Verma",
    authorPhoto: "https://picsum.photos/seed/rahul/100",
    content: "Excited to announce that our team for the upcoming Hackathon is almost complete! We are still looking for one more UI/UX designer. If you're interested, DM me! 🎨✨",
    likes: ["user1", "user2", "user4", "user5", "user6"],
    comments: [
      { id: "c2", authorId: "user4", authorName: "Sneha Reddy", content: "I'm interested! Sending you a DM now.", createdAt: new Date().toISOString() }
    ],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
    tags: ["hackathon", "uiux", "collaboration", "design"]
  }
];

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Simulate fetching posts
    setPosts(MOCK_POSTS);
  }, []);

  return (
    <div className="py-4">
      <CreatePost />
      
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-4 px-2">
          <h2 className="text-xl font-bold text-gray-800">Your Feed</h2>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-xs font-bold bg-primary text-white rounded-full">Recent</button>
            <button className="px-3 py-1 text-xs font-bold text-gray-500 hover:bg-gray-100 rounded-full transition-all">Trending</button>
          </div>
        </div>

        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
