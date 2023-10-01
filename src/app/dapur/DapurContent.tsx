"use client";

import { tableList } from "@/lib/data";
import React from "react";
import { useDapurContent } from "./DapurFunction";

function DapurContent() {
  const { selectedTable, orders, handleTableSelect } = useDapurContent();

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-bold">List Order Dapur</h2>
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
            {orders.length === 0 || orders === null ? (
              <tr>
                <td colSpan={4} className="text-center text-lg">
                  Tidak ada menu
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
    </div>
  );
}

export default DapurContent;
