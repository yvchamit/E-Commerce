import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Package,
  ChevronDown,
  ChevronUp,
  Eye,
  ShoppingBag,
  ImageIcon,
} from "lucide-react";
import { getOrders } from "../../lib/orderService";

const PreviousOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedOrder, setExpandedOrder] = useState(null);

  const allProducts = useSelector((state) => state.product.productList);

  useEffect(() => {
    getOrders()
      .then((data) => {
        const sorted = data.sort(
          (a, b) => new Date(b.order_date) - new Date(a.order_date),
        );
        setOrders(sorted);
      })
      .catch((err) => console.error("Siparişler çekilemedi:", err))
      .finally(() => setLoading(false));
  }, []);

  const getProductData = (productId) => {
    const found = allProducts.find((p) => Number(p.id) === Number(productId));

    return {
      image: found?.images?.[0]?.url || found?.image || "",
      name: found?.name || "Ürün Detayı",
    };
  };

  if (loading)
    return (
      <div className="text-center py-10 animate-pulse text-[#737373]">
        Sipariş geçmişi yükleniyor...
      </div>
    );

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-8 mb-8">
      <div className="flex items-center gap-3 mb-8 border-b pb-4">
        <Package className="text-[#23A6F0]" size={24} />
        <h2 className="text-xl font-bold text-[#252B42]">
          Geçmiş Siparişlerim
        </h2>
        <span className="bg-[#23A6F0] text-white text-[10px] px-2 py-1 rounded-full font-bold">
          {orders.length} SİPARİŞ
        </span>
      </div>

      <div
        className={`grid gap-6 items-start ${orders.length > 4 ? "md:grid-cols-2" : "grid-cols-1"}`}
      >
        {orders.map((order) => {
          const isExpanded = expandedOrder === order.id;

          return (
            <div
              key={order.id}
              className={`border rounded-xl transition-all self-start ${isExpanded ? "border-[#23A6F0] shadow-md" : "border-gray-100 shadow-sm"}`}
            >
              {/* Sipariş Özeti (Header) */}
              <div
                className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50/50"
                onClick={() => setExpandedOrder(isExpanded ? null : order.id)}
              >
                <div className="flex gap-4 items-center">
                  <div className="bg-gray-100 p-2 rounded-lg text-[#737373]">
                    <ShoppingBag size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#737373] uppercase mb-1">
                      {new Date(order.order_date).toLocaleDateString("tr-TR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <p className="text-sm font-bold text-[#23856D]">
                      {order.price.toLocaleString()} TL
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 text-[#23A6F0] p-1 rounded-md">
                  {isExpanded ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </div>
              </div>

              {/* Sipariş Detayı */}
              {isExpanded && (
                <div className="px-4 pb-4 pt-2 border-t border-gray-50 bg-gray-50/10 animate-fadeIn">
                  <div className="space-y-3 pt-2">
                    {order.products.map((item, idx) => {
                      const productInfo = getProductData(item.product_id);
                      return (
                        <div
                          key={idx}
                          className="flex gap-3 bg-white p-2 rounded-lg border border-gray-100"
                        >
                          {/* Ürün Resmi */}
                          <div className="w-14 h-18 shrink-0 rounded overflow-hidden bg-gray-50">
                            {productInfo.image ? (
                              <img
                                src={productInfo.image}
                                className="w-full h-full object-cover"
                                alt=""
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-300">
                                <ImageIcon size={16} />
                              </div>
                            )}
                          </div>
                          {/* Ürün Metinleri */}
                          <div className="flex-1 flex flex-col justify-center">
                            <h4 className="text-xs font-bold text-[#252B42] line-clamp-1">
                              {productInfo.name}
                            </h4>
                            <p className="text-[10px] text-[#737373] mt-0.5 capitalize">
                              {item.detail}
                            </p>
                            <div className="flex justify-between items-end mt-2">
                              <span className="text-[10px] font-bold text-[#23A6F0] bg-blue-50 px-1.5 py-0.5 rounded">
                                {item.count} Adet
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center text-[10px]">
                    <span className="text-green-600 font-bold flex items-center gap-1">
                      <Eye size={12} /> SİPARİŞ ALINDI
                    </span>
                    <span className="text-[#737373]">ID: #{order.id}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PreviousOrders;
