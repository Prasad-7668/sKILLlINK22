import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import type { Post } from "../types";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="card mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
            <img src={post.authorPhoto} alt={post.authorName} referrerPolicy="no-referrer" />
          </div>
          <div>
            <h4 className="font-bold text-sm">{post.authorName}</h4>
            <p className="text-xs text-gray-500">
              {formatDistanceToNow(new Date(post.createdAt))} ago
            </p>
          </div>
        </div>
        <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-full">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="mb-4">
        <p className="text-sm leading-relaxed text-gray-800 whitespace-pre-wrap">
          {post.content}
        </p>
        {post.imageUrl && (
          <div className="mt-4 rounded-xl overflow-hidden border border-gray-100">
            <img src={post.imageUrl} alt="Post content" className="w-full h-auto" referrerPolicy="no-referrer" />
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <span key={tag} className="text-xs font-medium text-primary-dark hover:underline cursor-pointer">
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-6 pt-4 border-t border-gray-50">
        <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
          <Heart className="w-5 h-5" />
          <span className="text-sm font-medium">{post.likes.length}</span>
        </button>
        <button className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors">
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium">{post.comments.length}</span>
        </button>
        <button className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors ml-auto">
          <Share2 className="w-5 h-5" />
          <span className="text-sm font-medium">Share</span>
        </button>
      </div>
    </div>
  );
}
