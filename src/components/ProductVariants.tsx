"use client";

import React, { useEffect, useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: {
    title: string;
    additionalPrice: number;
  }[];
};

const ProductVariants = ({ price, id, options }: Props) => {
  const [itemPrice, setItemPrice] = useState(price);
  const [qty, setQty] = useState(1);
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    options && setItemPrice((price + options[selectedItem].additionalPrice) * qty);
  }, [selectedItem,qty]);

  return (
    <div className="flex space-x-4 py-4 flex-col text-red-500 space-y-4 pt-4">
      {/* PRICE */}
      <h2 className="text-2xl font-semibold pl-4">₹{(itemPrice * 20).toFixed(2)}</h2>{" "}
      {/*TO SCALE UP PRICE*/}
      {/* SELECT VARIANT */}
      <div className="flex space-x-4">
        {options?.map((item, index) => (
          <button
            onClick={() => setSelectedItem(index)}
            className={`border font-semibold py-2 px-4 rounded-md ${
              selectedItem == index ? "bg-red-500 text-white" : "border-red-500"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      {/* SELECT QUANTITY */}
      <div className="flex items-center justify-between border border-red-500">
        <div className="flex items-center px-2 justify-between w-full">
          <p>Quantity</p>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setQty((prev) => (prev == 1 ? 1 : prev - 1))}
            >
              {"<"}
            </button>
            <button>{qty}</button>
            <button onClick={() => setQty((prev) => prev + 1)}>{">"}</button>
          </div>
        </div>
        <button className="h-full bg-red-500 p-2 text-white font-semibold">
          Add&nbsp;to&nbsp;cart
        </button>
      </div>
    </div>
  );
};

export default ProductVariants;
