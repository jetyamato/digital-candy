import apiClient from "../utils/api-client";

export const checkoutAPI = () => {
  return apiClient.post("/order/checkout");
};

export const getOrderAPI = () => {
  return apiClient.get("/order");
};
