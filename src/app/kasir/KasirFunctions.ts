import { Order } from "@/lib/Type";
import { useEffect, useState } from "react";

export function useKantinFunctions() {
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  const handleTableSelect = (selectedTableName: string) => {
    setSelectedTable(selectedTableName);
  };

  const printStruk = (selectedTable: string | null, orders: Order[]) => {
    if (!selectedTable || orders.length === 0) {
      return;
    }

    const paidOrders: Order[] = JSON.parse(
      localStorage.getItem("paidOrder") || "[]"
    );

    const ordersToPay = orders.filter((order) => order.table === selectedTable);

    paidOrders.push(...ordersToPay);

    localStorage.setItem("paidOrder", JSON.stringify(paidOrders));

    const itemOrder: Order[] = JSON.parse(
      localStorage.getItem("itemOrder") || "[]"
    );
    const updatedItemOrder = itemOrder.filter(
      (order) => order.table !== selectedTable
    );
    localStorage.setItem("itemOrder", JSON.stringify(updatedItemOrder));
  };

  const handlePrintStruk = async () => {
    try {
      printStruk(selectedTable, orders);
      alert("print succed");
      window.location.reload();
    } catch (error) {
      alert("error print");
    }
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
    handlePrintStruk,
  };
}
