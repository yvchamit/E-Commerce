import { useEffect, useState } from "react";
import { getOrders } from "../lib/orderService";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import { ChevronDown, ChevronUp, Package } from "lucide-react";

const PLACEHOLDER_IMG =
  "https://dummyimage.com/200x300/e0e0e0/737373.png&text=No+Image";

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [expandedOrder, setExpandedOrder] = useState(null);

  useEffect(() => {
    getOrders()
      .then((data) => setOrders(data))
      .catch((err) => {
        console.error("Orders Fetch Error:", err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const toggleOrder = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header page="shop" />

      <main className="max-w-section mx-auto py-16 px-8">
        <h2 className="text-3xl font-bold text-[#252B42] mb-8 flex items-center gap-3">
          <Package className="text-[#23A6F0]" /> My Previous Orders
        </h2>

        {loading ? (
          <div className="text-center py-20 text-[#737373]">
            Loading orders...
          </div>
        ) : error ? (
          <div className="bg-white p-12 text-center rounded-xl shadow-sm border">
            <p className="text-red-500 font-medium">
              Siparişleriniz yüklenirken bir sorun oluştu. Lütfen sayfayı
              yenileyin.
            </p>
          </div>
        ) : orders.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-xl shadow-sm border">
            <p className="text-gray-500">You haven't placed any orders yet.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-xl shadow-sm border border-[#23A6F0] overflow-hidden"
              >
                <div
                  onClick={() => toggleOrder(order.id)}
                  className="p-6 cursor-pointer hover:bg-gray-50 flex flex-wrap justify-between items-center transition-all"
                >
                  <div className="flex gap-8">
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                        Order Date
                      </p>
                      <p className="font-semibold text-[#252B42]">
                        {new Date(order.order_date).toLocaleDateString("tr-TR")}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                        Total Amount
                      </p>
                      <p className="font-semibold text-[#23A6F0]">
                        {(order.price ?? 0).toFixed(2)} TL
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#23A6F0] font-bold text-sm">
                    {expandedOrder === order.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                    {expandedOrder === order.id
                      ? "Hide Details"
                      : "View Details"}
                  </div>
                </div>

                {expandedOrder === order.id && (
                  <div className="border-t border-[#23A6F0] bg-[#F9F9F9] p-6">
                    <h4 className="font-bold text-[#252B42] mb-4 border-b border-gray-200 pb-2">
                      Order Items
                    </h4>
                    <div className="space-y-4">
                      {order.products.map((item, idx) => {
                        const displayImage =
                          item.images?.[0]?.url || PLACEHOLDER_IMG;

                        return (
                          <div
                            key={idx}
                            className="flex items-center gap-4 bg-white p-4 rounded-lg border border-gray-100 shadow-xs"
                          >
                            <img
                              src={displayImage}
                              alt={item.name || "Product"}
                              className="w-16 h-20 object-cover rounded shadow-sm"
                              onError={(e) => {
                                e.target.src = PLACEHOLDER_IMG;
                              }}
                            />
                            <div className="flex-1">
                              <p className="font-bold text-[#252B42]">
                                {item.name || `Ürün #${item.id}`}
                              </p>
                              {item.description && (
                                <p className="text-sm text-[#737373] line-clamp-1">
                                  {item.description}
                                </p>
                              )}
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-[#737373]">
                                Qty: {item.count}
                              </p>
                              {item.price != null && (
                                <p className="font-bold text-[#252B42]">
                                  {(item.price * item.count).toFixed(2)} TL
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default OrderHistoryPage;
