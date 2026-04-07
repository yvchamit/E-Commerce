import { AlarmClock, ChevronRight } from "lucide-react";
import { AreaChartOutlined } from "@ant-design/icons";
import { cn } from "../lib/mergeClass";

export default function BlogCard({
  image,
  title,
  description,
  date,
  comments,
}) {
  return (
    <div className="bg-white shadow-md border border-[#E6E6E6] group flex flex-col overflow-hidden h-full">
      {/* GÖRSEL ALANI */}
      <div className="relative overflow-hidden">
        <div className="w-full bg-gray-200 group-hover:scale-105 transition-transform duration-500">
          <img
            src={image || "./image/pos1.jpg"}
            alt={title}
            className={cn(
              "w-full object-cover object-center",
              "aspect-square", // Mobil: Kare (1:1)
              "md:aspect-video", // Masaüstü: Yatay (16:9)
            )}
          />
        </div>
        <span className="absolute top-5 left-5 bg-[#E74040] text-white px-3 py-1 rounded-sm text-sm font-bold shadow-sm">
          NEW
        </span>
      </div>

      {/* İÇERİK ALANI */}
      <div className="py-6 px-8 flex flex-col grow">
        {/* Kategoriler */}
        <div className="flex gap-4 text-xs text-[#737373] font-semibold mb-3">
          <span className="text-[#8EC2F2]">Google</span>
          <span>Trending</span>
          <span>New</span>
        </div>

        {/* Başlık */}
        <h4 className="text-xl text-[#252B42] leading-snug mb-3 min-h-14">
          {title || "Loudest à la Madison #1 (L'integral)"}
        </h4>

        {/* Açıklama */}
        <p className="text-[#737373] text-sm leading-relaxed font-semibold mb-6 grow">
          {description ||
            "We focus on ergonomics and meeting you where you work. It's only a keystroke away."}
        </p>

        {/* Alt Detaylar (Tarih & Yorum) */}
        <div className="flex justify-between items-center py-4 text-xs font-medium text-[#737373] mb-6">
          <div className="flex items-center gap-1">
            <AlarmClock className="text-[#23A6F0]" size={16} strokeWidth={2} />
            <span>{date || "22 April 2021"}</span>
          </div>
          <div className="flex items-center gap-1">
            <AreaChartOutlined style={{ fontSize: "20px", color: "#23856D" }} />
            <span>{comments || "10"} comments</span>
          </div>
        </div>

        {/* Buton */}
        <button className="flex items-center gap-2 text-[#737373] font-bold text-sm hover:text-[#23A6F0] transition-colors group/btn">
          Learn More
          <ChevronRight
            className="text-[#23A6F0] group-hover/btn:translate-x-1 transition-transform"
            size={18}
          />
        </button>
      </div>
    </div>
  );
}
