const ProductColors = ({ colors }) => {
  return (
    <div className="flex gap-2">
      {colors.map((color) => (
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: color }}
        ></div>
      ))}
      
      {/* <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
      <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
      <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
      <div className="w-4 h-4 rounded-full bg-[#252B42]"></div> */}
    </div>
  );
};

export default ProductColors;
