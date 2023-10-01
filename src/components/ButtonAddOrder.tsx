import React from "react";

function ButtonAddOrder({ handleOrder }: any) {
  return (
    <button className="btn w-[7rem]" onClick={handleOrder}>
      Tambah Order
    </button>
  );
}

export default ButtonAddOrder;
