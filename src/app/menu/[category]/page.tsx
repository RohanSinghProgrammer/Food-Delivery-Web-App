import React from "react";
import { pizzas } from "../../../../data";
import Link from "next/link";
import Image from "next/image";

const Category = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
      {pizzas.map((item) => (
        <Link
          key={item.id}
          href={`/product/${item.id}`}
          className="h-[60vh] p-6 flex flex-col justify-between border-b border-x border-red-300 lg:even:bg-fuchsia-50 group"
        >
          {/* IMAGE SECTION */}
          <div className="relative h-[85%]">
            {item.img && (
              <Image src={item.img} alt="..." fill className="object-contain" />
            )}
          </div>
          {/* TEXT SECTION */}
          <div className="flex flex-1 items-center justify-between text-red-500 font-bold">
            <h3>{item.title}</h3>
            {/* to scale up money */}
            <h3 className="group-hover:hidden">₹{item.price * 20}</h3>
            <button className="py-2 px-4 text-white bg-red-500 rounded-md hidden group-hover:block">
              Add to cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;
