import { Order } from "@/lib/Type";
import { useEffect, useState } from "react";

export function useDapurContent() {
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  const handleTableSelect = (selectedTableName: string) => {
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

  return {
    selectedTable,
    orders,
    handleTableSelect,
  };
}
