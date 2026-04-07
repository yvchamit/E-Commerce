import { AlarmClock } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { AreaChartOutlined } from "@ant-design/icons";

function PostCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="bg-white shadow-md border border-[#E6E6E6] group flex flex-col">
        <div className="relative h-75 overflow-hidden">
          <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500">
            <img
              src="./image/pos1.jpg"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <span className="absolute top-5 left-5 bg-[#E74040] text-white px-3 py-1 rounded-sm text-sm font-bold shadow-sm">
            NEW
          </span>
        </div>

        <div className="py-6 px-8 space-y-4 grow">
          <div className="flex gap-4 text-xs text-[#737373] font-semibold">
            <span className="text-[#8EC2F2]">Google</span>
            <span>Trending</span>
            <span>New</span>
          </div>

          <h4 className="text-xl text-[#252B42] leading-snug">
            Loudest à la Madison #1 <br /> (L'integral)
          </h4>
          <p className="text-[#737373] text-sm leading-relaxed font-semibold">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>

          {/* Tarih ve Yorum Detayları (Lucide İkonlu) */}
          <div className="flex justify-between items-center py-4 text-xs font-medium text-[#737373]">
            <div className="flex items-center gap-1">
              <AlarmClock
                className="text-[#23A6F0]"
                size={16}
                strokeWidth={2}
              />
              <span>22 April 2021</span>
            </div>
            <div className="flex items-center gap-1">
              <AreaChartOutlined
                style={{ fontSize: "20px", color: "#23856D" }}
              />
              <span>10 comments</span>
            </div>
          </div>

          {/* Learn More Butonu (Lucide İkonlu) */}
          <button className="flex items-center gap-2 text-[#737373] font-bold text-sm hover:text-[#23A6F0] transition-colors group">
            Learn More
            <ChevronRight
              className="text-[#23A6F0] group-hover:translate-x-1 transition-transform"
              size={18}
            />
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md border border-[#E6E6E6] group flex flex-col">
        <div className="relative h-75 overflow-hidden">
          <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500">
            <img
              src="./image/pos2.jpg"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <span className="absolute top-5 left-5 bg-[#E74040] text-white px-3 py-1 rounded-sm text-sm font-bold shadow-sm">
            NEW
          </span>
        </div>

        <div className="py-6 px-8 space-y-4 grow">
          <div className="flex gap-4 text-xs text-[#737373] font-semibold">
            <span className="text-[#8EC2F2]">Google</span>
            <span>Trending</span>
            <span>New</span>
          </div>

          <h4 className="text-xl text-[#252B42] leading-snug">
            Loudest à la Madison #1 <br /> (L'integral)
          </h4>
          <p className="text-[#737373] text-sm leading-relaxed font-semibold">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>

          <div className="flex justify-between items-center py-4 text-xs font-medium text-[#737373]">
            <div className="flex items-center gap-1">
              <AlarmClock
                className="text-[#23A6F0]"
                size={16}
                strokeWidth={2}
              />
              <span>22 April 2021</span>
            </div>
            <div className="flex items-center gap-1">
              <AreaChartOutlined
                style={{ fontSize: "20px", color: "#23856D" }}
              />
              <span>10 comments</span>
            </div>
          </div>

          {/* Learn More Butonu (Lucide İkonlu) */}
          <button className="flex items-center gap-2 text-[#737373] font-bold text-sm hover:text-[#23A6F0] transition-colors group">
            Learn More
            <ChevronRight
              className="text-[#23A6F0] group-hover:translate-x-1 transition-transform"
              size={18}
            />
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md border border-[#E6E6E6] group flex flex-col">
        <div className="relative h-75 overflow-hidden">
          <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500">
            <img
              src="./image/pos3.jpg"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <span className="absolute top-5 left-5 bg-[#E74040] text-white px-3 py-1 rounded-sm text-sm font-bold shadow-sm">
            NEW
          </span>
        </div>

        <div className="py-6 px-8 space-y-4 grow">
          <div className="flex gap-4 text-xs text-[#737373] font-semibold">
            <span className="text-[#8EC2F2]">Google</span>
            <span>Trending</span>
            <span>New</span>
          </div>

          <h4 className="text-xl text-[#252B42] leading-snug">
            Loudest à la Madison #1 <br /> (L'integral)
          </h4>
          <p className="text-[#737373] text-sm leading-relaxed font-semibold">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>

          <div className="flex justify-between items-center py-4 text-xs font-semibold text-[#737373]">
            <div className="flex items-center gap-1">
              <AlarmClock
                className="text-[#23A6F0]"
                size={16}
                strokeWidth={2}
              />
              <span>22 April 2021</span>
            </div>
            <div className="flex items-center gap-1">
              <AreaChartOutlined
                style={{ fontSize: "20px", color: "#23856D" }}
              />
              <span>10 comments</span>
            </div>
          </div>

          <button className="flex items-center gap-2 text-[#737373] font-bold text-sm hover:text-[#23A6F0] transition-colors group">
            Learn More
            <ChevronRight
              className="text-[#23A6F0] group-hover:translate-x-1 transition-transform"
              size={18}
            />
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default PostCard;
