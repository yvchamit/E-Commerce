import { AlarmClock } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { AreaChartOutlined } from "@ant-design/icons";

const posts = [
  {
    id: 1,
    image: "./image/pos1.jpg",
    tag: "NEW",
    categories: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    commentCount: 10,
  },
  {
    id: 2,
    image: "./image/pos2.jpg",
    tag: "NEW",
    categories: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    commentCount: 10,
  },
  {
    id: 3,
    image: "./image/pos3.jpg",
    tag: "NEW",
    categories: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    commentCount: 10,
  },
];

function PostCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white shadow-md border border-[#E6E6E6] group flex flex-col"
        >
          <div className="relative h-75 overflow-hidden">
            <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <span className="absolute top-5 left-5 bg-[#E74040] text-white px-3 py-1 rounded-sm text-sm font-bold shadow-sm">
              {post.tag}
            </span>
          </div>

          <div className="py-6 px-8 space-y-4 grow flex flex-col">
            <div className="flex gap-4 text-xs text-[#737373] font-semibold">
              {post.categories.map((cat, index) => (
                <span
                  key={index}
                  className={index === 0 ? "text-[#8EC2F2]" : ""}
                >
                  {cat}
                </span>
              ))}
            </div>

            <h4 className="text-xl text-[#252B42] leading-snug">
              {post.title}
            </h4>
            <p className="text-[#737373] text-sm leading-relaxed font-semibold">
              {post.description}
            </p>

            <div className="flex justify-between items-center py-4 text-xs font-medium text-[#737373] mt-auto">
              <div className="flex items-center gap-1">
                <AlarmClock
                  className="text-[#23A6F0]"
                  size={16}
                  strokeWidth={2}
                />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <AreaChartOutlined
                  style={{ fontSize: "20px", color: "#23856D" }}
                />
                <span>{post.commentCount} comments</span>
              </div>
            </div>

            <button className="flex items-center gap-2 text-[#737373] font-bold text-sm hover:text-[#23A6F0] transition-colors group w-fit">
              Learn More
              <ChevronRight
                className="text-[#23A6F0] group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostCard;
