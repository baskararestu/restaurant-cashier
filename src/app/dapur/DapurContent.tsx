"use client";

import { Order } from "@/lib/Type";
import { tableList } from "@/lib/data";
import React, { useState, useEffect } from "react";

function DapurContent() {
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  const handleTableSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTableName = event.target.value;
    setSelectedTable(selectedTableName);
  };

  useEffect(() => {
    const selectedTableName = selectedTable;

    if (!selectedTableName) {
      setOrders([]);
      return;
    }

    const itemOrder = JSON.parse(localStorage.getItem("itemOrder") || "[]");
    const filteredOrders = itemOrder.filter(
      (order: Order) => order.table === selectedTableName
    );
    setOrders(filteredOrders);
  }, [selectedTable]);

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-bold">List Order Dapur</h2>
      <select
        className="select select-bordered w-full max-w-xs"
        value={selectedTable || ""}
        onChange={handleTableSelect}
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
              <th>Selesai</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {orders.map((order, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{order.menu}</td>
                <td>{order.quantity}</td>
                <td>{order.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DapurContent;
