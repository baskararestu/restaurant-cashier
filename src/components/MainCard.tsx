import React from "react";

function MainCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="card w-[17rem] md:w-[35rem] lg:w-[45rem] bg-gray-100 shadow-sm mt-5 h-full">
      <div className="card-body">{children}</div>
    </div>
  );
}

export default MainCard;
