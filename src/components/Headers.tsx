import React from "react";

function Headers() {
  const restaurant = "ABC Restaurant";
  return (
    <div className="font-bold">
      <h1 className="text-xl py-4">Cashier {restaurant}</h1>
    </div>
  );
}

export default Headers;
