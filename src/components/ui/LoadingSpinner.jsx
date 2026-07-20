export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-24 w-full">
      <div className="flex space-x-3">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className="w-4 h-4 bg-[#23A6F0] rounded-full animate-bounce"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationDuration: "1s",
            }}
          ></div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-[#252B42] font-bold tracking-widest uppercase text-xs mb-3">
          Yükleniyor
        </p>
        <div className="h-1 w-12 bg-[#23A6F0] mx-auto rounded-full animate-pulse"></div>
        <p className="mt-3 text-[#737373] text-sm italic">
          Size en uygun ürünleri hazırlıyoruz...
        </p>
      </div>
    </div>
  );
}
