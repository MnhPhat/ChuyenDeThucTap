import React, { useEffect, useState } from "react";
import { urlImageProduct } from "../../../config";
import { useShoppingContext } from "../context/ShoppingContext.tsx";
import CartItem from "../../../layouts/LayoutSite/CartItems.tsx";
const Cart = () => {
  const { cartItems, cartQty, totalPrice } = useShoppingContext();
  return (
    <>
      <section className="hdl-maincontent py-2">
        <div className="container">
          <table className="table table-bordered">
            <thead>
              <tr className="bg-dark">
                <th style={{ width: 30 }} className="text-center">
                  STT
                </th>
                <th style={{ width: 100 }}>Hình</th>
                <th>Tên sản phẩm</th>
                <th className="text-center">Giá</th>
                <th style={{ width: 130 }} className="text-center">
                  Số lượng
                </th>
                <th className="text-center">Thành tiền</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                return <CartItem key={item.id} {...item} />;
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={5}>
                  <button className="btn btn-main">Cập nhật</button>
                  <a href="checkout.html" className="btn btn-main">
                    Thanh toán
                  </a>
                </td>
                <td
                  colSpan={2}
                  className="text-end"
                  
                >
                  <strong>Tổng tiền: {totalPrice}</strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </>
  );
};

export default Cart;
