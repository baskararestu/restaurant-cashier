import React from "react";

function ButtonAddMenu({ addMenuItem }: any) {
  return (
    <button className="btn w-[10rem]" onClick={addMenuItem}>
      Tambah
    </button>
  );
}

export default ButtonAddMenu;
