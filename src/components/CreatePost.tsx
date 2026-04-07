import { Image, Send, Smile, Paperclip } from "lucide-react";
import { useState } from "react";

export default function CreatePost() {
  const [content, setContent] = useState("");

  return (
    <div className="card mb-8">
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
          <img src="https://picsum.photos/seed/user/100" alt="Profile" referrerPolicy="no-referrer" />
        </div>
        <div className="flex-1">
          <textarea
            placeholder="Share your knowledge, project update or ask a question..."
            className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary/20 min-h-[120px] resize-none transition-all"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-500 hover:bg-accent hover:text-primary rounded-full transition-all">
                <Image className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-500 hover:bg-accent hover:text-primary rounded-full transition-all">
                <Paperclip className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-500 hover:bg-accent hover:text-primary rounded-full transition-all">
                <Smile className="w-5 h-5" />
              </button>
            </div>
            
            <button 
              disabled={!content.trim()}
              className="btn-primary flex items-center gap-2 px-6"
            >
              <Send className="w-4 h-4" />
              <span>Post</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
