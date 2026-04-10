import { LuRedo } from "react-icons/lu";
import BtnContact from "../../components/BtnContact"; // Yolunu projene göre ayarla

export default function TalkOffice() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-section mx-auto flex flex-col items-center text-center gap-6">
        <div className="text-[#23A6F0] mb-2 transform rotate-45 md:rotate-60">
          <LuRedo size={90} />
        </div>

        <h6 className="font-bold text-base text-[#252B42] tracking-wider uppercase">
          WE Can't WAIT TO MEET YOU
        </h6>

        <h2 className="text-5xl md:text-[58px] font-bold text-[#252B42] leading-tight">
          Let’s Talk
        </h2>

        <div className="mt-4">
          <BtnContact showIcon={false} className="text-sm px-10 py-4 shadow-lg">
            Try it free now
          </BtnContact>
        </div>
      </div>
    </section>
  ); 
}
