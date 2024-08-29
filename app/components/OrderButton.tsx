"use client";
import React, { useState } from "react";
import Order from "./Order";

const OrderButton = () => {
  const [order, setOrder] = useState(false);
  const openOrder = () => setOrder(true);
  const closeOrder = () => setOrder(false);
  return (
    <div>
      <button
        onClick={openOrder}
        className="text-sm font-bold leading-10 tracking-normal text-center uppercase text-primary-red ml-10 min-w-[180px] h-10 mt-3 cursor-pointer border-[2px] border-solid border-primary-red hover:text-white hover:bg-primary-red"
      >
        {" "}
        Order{" "}
      </button>
      {order && <Order onOrderClose={closeOrder} />}
    </div>
  );
};

export default OrderButton;
