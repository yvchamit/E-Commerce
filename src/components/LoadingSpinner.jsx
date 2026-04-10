export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20 w-full">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#23A6F0]"></div>
      <p className="mt-4 text-[#737373] font-medium">Ürünler yükleniyor, lütfen bekleyiniz...</p>
    </div>
  );
}