import { Order } from "@/lib/Type";
import { tableList } from "@/lib/data";
import React, { useState } from "react";
import { useKantinFunctions } from "./KasirFunctions";

function KasirContent() {
  const { selectedTable, orders, handleTableSelect, handlePrintStruk } =
    useKantinFunctions();

  const paymentPrice = orders.reduce(
    (total, order) => total + order.totalPrice,
    0
  );
  console.log(orders, "orders");

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3 items-center">
        <select
          className="select select-bordered w-full max-w-xs"
          value={selectedTable || ""}
          onChange={(event) => handleTableSelect(event.target.value)}
        >
          <option disabled value="">
            Pilih Meja
          </option>
          {tableList.map((table) => (
            <option key={table.id} value={table.name}>
              {table.name}
            </option>
          ))}
        </select>
        <button
          className="btn"
          disabled={orders.length === 0}
          onClick={handlePrintStruk}
        >
          Print Struk
        </button>
      </div>
      {selectedTable ? (
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="text-xl">
              <tr>
                <th></th>
                <th>Menu</th>
                <th>Jumlah</th>
                <th>Harga</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              {orders.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center text-lg">
                    Tidak ada pesanan
                  </td>
                </tr>
              ) : (
                orders.map((order, index) => (
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
        </div>
      ) : (
        <div className="py-3 text-xl font-semibold text-red-600 text-center">
          Pilih Meja Terlebih Dahulu
        </div>
      )}

      <div className="">
        <h3 className="text-lg font-semibold">
          Total yang dibayar: {paymentPrice}
        </h3>
      </div>
    </div>
  );
}

export default KasirContent;
