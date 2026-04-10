const defaultColors = ["#23A6F0", "#23856D", "#E77C40", "#252B42"];

const ProductColors = ({ colors = defaultColors }) => {
  
  return (
    <div className="flex gap-2">
      
      {colors?.map((color, index) => (
        <div
          key={index}
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
};

export default ProductColors;