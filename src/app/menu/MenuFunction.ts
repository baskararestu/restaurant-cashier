import { useState, useEffect } from "react";
import { MenuFunctions, MenuItem } from "@/lib/Type";

export function useMenuFunctions(): MenuFunctions {
  const [inputValue, setInputValue] = useState<string>("");
  const [menuData, setMenuData] = useState<MenuItem[]>([]);
  const [priceValue, setPriceValue] = useState<number>(0);

  const formatAsIDR = (number: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const generateRandomId = (): string => {
    return String(Math.floor(10000 + Math.random() * 90000));
  };

  const addMenuItem = (): void => {
    if (inputValue.trim() === "") {
      return;
    }

    const newItem: MenuItem = {
      id: generateRandomId(),
      name: inputValue,
      price: priceValue,
    };

    const updatedMenuData = [...menuData, newItem];
    setMenuData(updatedMenuData);

    localStorage.setItem("menuData", JSON.stringify(updatedMenuData));

    setInputValue("");
  };

  const removeMenuItem = (id: string): void => {
    const updatedMenuData = menuData.filter((item: MenuItem) => item.id !== id);
    setMenuData(updatedMenuData);

    localStorage.setItem("menuData", JSON.stringify(updatedMenuData));
  };

  useEffect(() => {
    const storedMenuData = localStorage.getItem("menuData");
    if (storedMenuData) {
      setMenuData(JSON.parse(storedMenuData));
    }
  }, []);

  return {
    inputValue,
    menuData,
    formatAsIDR,
    setInputValue,
    addMenuItem,
    removeMenuItem,
    priceValue,
    setPriceValue,
  };
}
