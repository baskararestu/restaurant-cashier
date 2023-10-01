import React from "react";
import { useMenuFunctions } from "./MenuFunction";
import { BsTrash } from "react-icons/bs";
import ButtonAddMenu from "@/components/ButtonAddMenu";

function MenuContent(): JSX.Element {
  const {
    inputValue,
    priceValue,
    menuData,
    setInputValue,
    setPriceValue,
    addMenuItem,
    removeMenuItem,
    formatAsIDR,
  } = useMenuFunctions();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-2">
        <input
          type="text"
          placeholder="Tambahkan Nama Menu..."
          className="input input-bordered w-full max-w-md"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input
          type="number"
          placeholder="Tambahkan Harga..."
          className="input input-bordered w-1/3 max-w-md"
          value={priceValue}
          onChange={(e) => setPriceValue(Number(e.target.value))}
        />
        <ButtonAddMenu addMenuItem={addMenuItem} />
      </div>
      <div className="flex justify-between items-center mt-2 overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-lg">
              <th className="w-2/12">ID</th>
              <th className="w-4/12">Menu</th>
              <th className="w-3/12">Harga</th>
              <th className="w-1/12">Hapus</th>
            </tr>
          </thead>
          <tbody>
            {menuData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{formatAsIDR(item.price)}</td>
                <td className="text-end">
                  <button
                    className="text-red-500 text-2xl"
                    onClick={() => removeMenuItem(item.id)}
                  >
                    <BsTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MenuContent;
