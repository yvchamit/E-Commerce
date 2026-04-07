import { cn } from "../lib/mergeClass";
import { FaArrowRight } from "react-icons/fa";

export default function BtnContact({
  children,
  className = "",
  showIcon = false,
  ...props
}) {
  return (
    <button
      className={cn(
        "w-fit px-10 py-4 rounded-md font-bold text-sm transition-all active:scale-95 whitespace-nowrap",
        "bg-[#23A6F0] text-white hover:bg-[#1a85c5] flex items-center justify-center gap-4",
        className,
      )}
      {...props}
    >
      {children}
      {showIcon && <FaArrowRight />}
    </button>
  );
}
