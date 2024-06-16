import React from "react";

import "./MyOrderPage.css";
import Table from "./../Common/Table";
import useData from "../../hooks/useData";
import Loader from "../Common/Loader";

const MyOrderPage = () => {
  const { data: orders, errors, isLoading } = useData("/order");

  const getProductName = (order) => {
    const productStringArray = order.products.map(
      (product) => `${product.product.title}(${product.quantity})`
    );

    return productStringArray.join(", ");
  };

  return (
    <section className="align_center my_order_page">
      {isLoading && <Loader />}
      {errors && <em className="form_error">{errors}</em>}
      {orders && (
        <Table headings={["Order", "Products", "Total", "Status"]}>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>{getProductName(order)}</td>
                <td>${order.total}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </section>
  );
};

export default MyOrderPage;
