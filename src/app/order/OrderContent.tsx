"use client";

import React, { useState, useEffect } from "react";
import ButtonAddOrder from "@/components/ButtonAddOrder";
import ButtonTable from "@/components/ButtonTable";
import { handleMenuChange, handleOrder } from "./OrderFunction";
import { MenuItem } from "@/lib/Type";

function OrderContent() {
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const [selectedMenuPrice, setSelectedMenuPrice] = useState<number | null>(
    null
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [menuList, setMenuList] = useState<MenuItem[]>([]);

  const totalPrice =
    selectedMenuPrice !== null ? selectedMenuPrice * quantity : 0;

  useEffect(() => {
    const menuData = JSON.parse(localStorage.getItem("menuData") || "[]");
    setMenuList(menuData);
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-center">
        <ButtonTable
          onTableSelect={(tableId) => setSelectedTable(tableId)}
          selectedTable={selectedTable}
        />
      </div>
      {selectedTable && (
        <div className="flex flex-col gap-5">
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={(event) =>
              handleMenuChange(
                event.target.value,
                menuList,
                setSelectedMenu,
                setSelectedMenuPrice
              )
            }
            value={selectedMenu || ""}
          >
            <option disabled value="">
              Pilih Menu
            </option>
            {menuList.map((menu: MenuItem) => (
              <option key={menu.id} value={menu.name}>
                {menu.name}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
            className="input input-bordered"
          />
          {selectedMenu && (
            <div>
              <p>Menu: {selectedMenu}</p>
              <p>Price per Item: {selectedMenuPrice}</p>
              <p>Total Price: {totalPrice}</p>
            </div>
          )}
          <ButtonAddOrder
            handleOrder={() =>
              handleOrder(
                selectedMenu,
                selectedMenuPrice,
                quantity,
                selectedTable,
                setSelectedMenu,
                setSelectedMenuPrice,
                setQuantity
              )
            }
          />
        </div>
      )}
    </div>
  );
}

export default OrderContent;
