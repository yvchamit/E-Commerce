import { axiosInstance } from "./axiosInstance";

export const createOrder = async (
  cart,
  selectedAddress,
  selectedCard,
  installments,
  grandTotal,
) => {
  const orderPayload = {
    address_id: selectedAddress?.id || 1,
    order_date: new Date().toISOString(),
    card_no: Number(selectedCard.card_no.replace(/\s/g, "")),
    card_name: selectedCard.name_on_card,
    card_expire_month: Number(selectedCard.expire_month),
    card_expire_year: Number(selectedCard.expire_year),
    card_ccv: 321,
    price: grandTotal,
    products: cart.map((item) => ({
      product_id: item.product.id,
      count: item.count,
      detail: `${item.product.name} - ${item.count} adet`,
    })),
  };

  try {
    const response = await axiosInstance.post("/order", orderPayload);

    return response.data;
  } catch (error) {
    console.error(
      "Order Service Error:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const getOrders = async () => {
  try {
    const response = await axiosInstance.get("/order");
    return response.data;
  } catch (error) {
    console.error("Orders fetching error:", error);
    throw error;
  }
};
