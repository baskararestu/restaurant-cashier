import React from "react";
import { menus } from "@/lib/data";
import { MenuItem, Order } from "@/lib/Type";

export function handleMenuChange(
  selectedValue: string,
  setSelectedMenu: React.Dispatch<React.SetStateAction<string | null>>,
  setSelectedMenuPrice: React.Dispatch<React.SetStateAction<number | null>>
) {
  const menuData = JSON.parse(localStorage.getItem("menuData") || "[]");

  const selectedMenuItem = menuData.find(
    (menu: MenuItem) => menu.name === selectedValue
  );

  if (selectedMenuItem) {
    setSelectedMenu(selectedMenuItem.name);
    setSelectedMenuPrice(selectedMenuItem.price);
  } else {
    setSelectedMenu(null);
    setSelectedMenuPrice(null);
  }
}

export function handleOrder(
  selectedMenu: string | null,
  selectedMenuPrice: number | null,
  quantity: number,
  selectedTable: string | null,
  setSelectedMenu: React.Dispatch<React.SetStateAction<string | null>>,
  setSelectedMenuPrice: React.Dispatch<React.SetStateAction<number | null>>,
  setQuantity: React.Dispatch<React.SetStateAction<number>>
) {
  if (selectedMenu && selectedMenuPrice) {
    const existingOrders = JSON.parse(
      localStorage.getItem("itemOrder") || "[]"
    );

    const existingOrderIndex = existingOrders.findIndex(
      (order: Order) =>
        order.menu === selectedMenu && order.table === selectedTable
    );

    if (existingOrderIndex !== -1) {
      const updatedOrder = { ...existingOrders[existingOrderIndex] };
      updatedOrder.quantity += quantity;
      updatedOrder.totalPrice = selectedMenuPrice * updatedOrder.quantity;

      existingOrders[existingOrderIndex] = updatedOrder;
    } else {
      const order = {
        menu: selectedMenu,
        table: selectedTable,
        totalPrice: selectedMenuPrice * quantity,
        quantity: quantity,
      };
      existingOrders.push(order);
    }

    localStorage.setItem("itemOrder", JSON.stringify(existingOrders));

    setSelectedMenu(null);
    setSelectedMenuPrice(null);
    setQuantity(1);
  }
}
