import Image from "next/image";
import React from "react";
import { featuredProducts } from "../../data";

const Featured = () => {
  return (
    <div className="flex w-screen overflow-y-scroll">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="text-red-500 w-screen md:w-[50vw] lg:w-[33vw] h-[70vh] lg:h-[90vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300"
          >
            {/* IMAGE */}
            {item.img && (
              <div className="relative flex-1 w-full transition-all duration-500 hover:rotate-45">
                <Image
                  src={item.img}
                  alt="..."
                  fill
                  className="object-contain"
                />
              </div>
            )}
            {/* TEXT */}
            <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
              <h3 className="text-xl uppercase font-bold">{item.title}</h3>
              <p className="p-4">{item.desc}</p>
              {/* to scale up price (temporarily)*/}
              <p className="font-semibold">₹{item.price * 20}</p>
              <button className="bg-red-500 text-white py-2 px-4 rounded-md">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
