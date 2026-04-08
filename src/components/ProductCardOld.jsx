import { cn } from "../lib/mergeClass";
import ProductColors from "./ProductColors";

function ProductCard({ showColors = true, aspect = "3/4", align = "center" }) {
  const isLeft = align === "left";

  return (
    <>
      <div
        className={cn(
          "flex flex-col group cursor-pointer h-full bg-[#FFFFFF]",
          isLeft ? "items-start text-left" : "items-center text-center",
        )}
      >
        <div
          style={{ aspectRatio: aspect }}
          className={cn("w-full overflow-hidden mb-6 bg-gray-200")}
        >
          <img
            src="/image/pr1.jpg"
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            alt="Product Image"
          />
        </div>

        <div
          className={cn(
            "flex flex-col px-2 w-full",
            isLeft ? "items-start pl-6" : "items-center",
          )}
        >
          <h5 className="font-bold text-[#252B42] line-clamp-1">
            Graphic Design
          </h5>

          <p className="text-[#737373] text-sm font-bold my-2 line-clamp-1">
            English Department
          </p>

          <div
            className={cn(
              "flex gap-2 font-bold mb-4",
              isLeft ? "justify-start" : "justify-center",
            )}
          >
            <span className="text-[#BDBDBD]">$16.48</span>
            <span className="text-[#23856D]">$6.48</span>
          </div>

          {showColors && (
            <div className={isLeft ? "w-full flex justify-start" : ""}>
              <ProductColors />
            </div>
          )}
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col group cursor-pointer h-full bg-[#FFFFFF]",
          isLeft ? "items-start text-left" : "items-center text-center",
        )}
      >
        <div
          style={{ aspectRatio: aspect }}
          className={cn("w-full overflow-hidden mb-6 bg-gray-200")}
        >
          <img
            src="/image/pr2.jpg"
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            alt="Product Image"
          />
        </div>

        <div
          className={cn(
            "flex flex-col px-2 w-full",
            isLeft ? "items-start pl-6" : "items-center",
          )}
        >
          <h5 className="font-bold text-[#252B42] line-clamp-1">
            Graphic Design
          </h5>

          <p className="text-[#737373] text-sm font-bold my-2 line-clamp-1">
            English Department
          </p>

          <div
            className={cn(
              "flex gap-2 font-bold mb-4",
              isLeft ? "justify-start" : "justify-center",
            )}
          >
            <span className="text-[#BDBDBD]">$16.48</span>
            <span className="text-[#23856D]">$6.48</span>
          </div>

          {showColors && (
            <div className={isLeft ? "w-full flex justify-start" : ""}>
              <ProductColors />
            </div>
          )}
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col group cursor-pointer h-full bg-[#FFFFFF]",
          isLeft ? "items-start text-left" : "items-center text-center",
        )}
      >
        <div
          style={{ aspectRatio: aspect }}
          className={cn("w-full overflow-hidden mb-6 bg-gray-200")}
        >
          <img
            src="/image/pr3.jpg"
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            alt="Product Image"
          />
        </div>

        <div
          className={cn(
            "flex flex-col px-2 w-full",
            isLeft ? "items-start pl-6" : "items-center",
          )}
        >
          <h5 className="font-bold text-[#252B42] line-clamp-1">
            Graphic Design
          </h5>

          <p className="text-[#737373] text-sm font-bold my-2 line-clamp-1">
            English Department
          </p>

          <div
            className={cn(
              "flex gap-2 font-bold mb-4",
              isLeft ? "justify-start" : "justify-center",
            )}
          >
            <span className="text-[#BDBDBD]">$16.48</span>
            <span className="text-[#23856D]">$6.48</span>
          </div>

          {showColors && (
            <div className={isLeft ? "w-full flex justify-start" : ""}>
              <ProductColors />
            </div>
          )}
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col group cursor-pointer h-full bg-[#FFFFFF]",
          isLeft ? "items-start text-left" : "items-center text-center",
        )}
      >
        <div
          style={{ aspectRatio: aspect }}
          className={cn("w-full overflow-hidden mb-6 bg-gray-200")}
        >
          <img
            src="/image/pr4.jpg"
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            alt="Product Image"
          />
        </div>

        <div
          className={cn(
            "flex flex-col px-2 w-full",
            isLeft ? "items-start pl-6" : "items-center",
          )}
        >
          <h5 className="font-bold text-[#252B42] line-clamp-1">
            Graphic Design
          </h5>

          <p className="text-[#737373] text-sm font-bold my-2 line-clamp-1">
            English Department
          </p>

          <div
            className={cn(
              "flex gap-2 font-bold mb-4",
              isLeft ? "justify-start" : "justify-center",
            )}
          >
            <span className="text-[#BDBDBD]">$16.48</span>
            <span className="text-[#23856D]">$6.48</span>
          </div>

          {showColors && (
            <div className={isLeft ? "w-full flex justify-start" : ""}>
              <ProductColors />
            </div>
          )}
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col group cursor-pointer h-full bg-[#FFFFFF]",
          isLeft ? "items-start text-left" : "items-center text-center",
        )}
      >
        <div
          style={{ aspectRatio: aspect }}
          className={cn("w-full overflow-hidden mb-6 bg-gray-200")}
        >
          <img
            src="/image/pr5.jpg"
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            alt="Product Image"
          />
        </div>

        <div
          className={cn(
            "flex flex-col px-2 w-full",
            isLeft ? "items-start pl-6" : "items-center",
          )}
        >
          <h5 className="font-bold text-[#252B42] line-clamp-1">
            Graphic Design
          </h5>

          <p className="text-[#737373] text-sm font-bold my-2 line-clamp-1">
            English Department
          </p>

          <div
            className={cn(
              "flex gap-2 font-bold mb-4",
              isLeft ? "justify-start" : "justify-center",
            )}
          >
            <span className="text-[#BDBDBD]">$16.48</span>
            <span className="text-[#23856D]">$6.48</span>
          </div>

          {showColors && (
            <div className={isLeft ? "w-full flex justify-start" : ""}>
              <ProductColors />
            </div>
          )}
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col group cursor-pointer h-full bg-[#FFFFFF]",
          isLeft ? "items-start text-left" : "items-center text-center",
        )}
      >
        <div
          style={{ aspectRatio: aspect }}
          className={cn("w-full overflow-hidden mb-6 bg-gray-200")}
        >
          <img
            src="/image/pr6.jpg"
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            alt="Product Image"
          />
        </div>

        <div
          className={cn(
            "flex flex-col px-2 w-full",
            isLeft ? "items-start pl-6" : "items-center",
          )}
        >
          <h5 className="font-bold text-[#252B42] line-clamp-1">
            Graphic Design
          </h5>

          <p className="text-[#737373] text-sm font-bold my-2 line-clamp-1">
            English Department
          </p>

          <div
            className={cn(
              "flex gap-2 font-bold mb-4",
              isLeft ? "justify-start" : "justify-center",
            )}
          >
            <span className="text-[#BDBDBD]">$16.48</span>
            <span className="text-[#23856D]">$6.48</span>
          </div>

          {showColors && (
            <div className={isLeft ? "w-full flex justify-start" : ""}>
              <ProductColors />
            </div>
          )}
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col group cursor-pointer h-full bg-[#FFFFFF]",
          isLeft ? "items-start text-left" : "items-center text-center",
        )}
      >
        <div
          style={{ aspectRatio: aspect }}
          className={cn("w-full overflow-hidden mb-6 bg-gray-200")}
        >
          <img
            src="/image/pr7.jpg"
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            alt="Product Image"
          />
        </div>

        <div
          className={cn(
            "flex flex-col px-2 w-full",
            isLeft ? "items-start pl-6" : "items-center",
          )}
        >
          <h5 className="font-bold text-[#252B42] line-clamp-1">
            Graphic Design
          </h5>

          <p className="text-[#737373] text-sm font-bold my-2 line-clamp-1">
            English Department
          </p>

          <div
            className={cn(
              "flex gap-2 font-bold mb-4",
              isLeft ? "justify-start" : "justify-center",
            )}
          >
            <span className="text-[#BDBDBD]">$16.48</span>
            <span className="text-[#23856D]">$6.48</span>
          </div>

          {showColors && (
            <div className={isLeft ? "w-full flex justify-start" : ""}>
              <ProductColors />
            </div>
          )}
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col group cursor-pointer h-full bg-[#FFFFFF]",
          isLeft ? "items-start text-left" : "items-center text-center",
        )}
      >
        <div
          style={{ aspectRatio: aspect }}
          className={cn("w-full overflow-hidden mb-6 bg-gray-200")}
        >
          <img
            src="/image/pr8.jpg"
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            alt="Product Image"
          />
        </div>

        <div
          className={cn(
            "flex flex-col px-2 w-full",
            isLeft ? "items-start pl-6" : "items-center",
          )}
        >
          <h5 className="font-bold text-[#252B42] line-clamp-1">
            Graphic Design
          </h5>

          <p className="text-[#737373] text-sm font-bold my-2 line-clamp-1">
            English Department
          </p>

          <div
            className={cn(
              "flex gap-2 font-bold mb-4",
              isLeft ? "justify-start" : "justify-center",
            )}
          >
            <span className="text-[#BDBDBD]">$16.48</span>
            <span className="text-[#23856D]">$6.48</span>
          </div>

          {showColors && (
            <div className={isLeft ? "w-full flex justify-start" : ""}>
              <ProductColors />
            </div>
          )}
        </div>
      </div>

      
    </>
  );
}

export default ProductCard;
