import React, { useEffect, useState } from "react";
import { Order } from "@/lib/Type";
import { usePenjualanFunctions } from "./PenjualanFunction";

function PenjualanContent() {
  const { paidOrders } = usePenjualanFunctions();

  const paymentPrice = paidOrders.reduce(
    (total, order) => total + order.totalPrice,
    0
  );

  return (
    <div>
      <h2 className="text-xl font-bold">Penjualan Content</h2>
      <div className="overflow-x-auto">
        <table className="table text-lg">
          <thead>
            <tr>
              <th></th>
              <th>Menu</th>
              <th>Jumlah</th>
              <th>Harga</th>
            </tr>
          </thead>
          <tbody>
            {paidOrders.length === 0 || paidOrders === null ? (
              <tr>
                <td colSpan={4} className="text-center text-lg">
                  Tidak ada penjualan
                </td>
              </tr>
            ) : (
              paidOrders.map((order, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{order.menu}</td>
                  <td>{order.quantity}</td>
                  <td>{order.totalPrice}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="font-semibold py-5 text-md flex flex-col justify-start gap-2">
          <p>Total Pendapatan:</p> <p>{paymentPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default PenjualanContent;
