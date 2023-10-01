import { useEffect, useState } from "react";
import { Order } from "@/lib/Type";

export function usePenjualanFunctions() {
  const [paidOrders, setPaidOrders] = useState<Order[]>([]);

  useEffect(() => {
    const paidOrder: Order[] = JSON.parse(
      localStorage.getItem("paidOrder") || "[]"
    );

    const filteredOrders = paidOrder.filter((order) => order.menu);

    setPaidOrders(filteredOrders);
  }, []);

  return {
    paidOrders,
  };
}
