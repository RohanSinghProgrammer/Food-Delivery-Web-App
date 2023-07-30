import React from "react";
import { menu } from "../../../data";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="p-4 md:p-20 lg:p-40 h-[calc(100vh-9rem) md:h-[calc(100vh-11rem)] flex flex-col md:flex-row justify-center items-center">
      {menu.map((item) => (
        <Link
          key={item.slug}
          className="bg-cover p-4 h-52 md:h-64 w-full"
          href={`/menu/${item.slug}`}
          style={{ backgroundImage: `url(${item.img})`, color: item.color }}
        >
          <div className="h-full flex flex-col justify-between items-start">
            <h2 className="uppercase text-3xl">{item.title}</h2>
            <p className="flex-1 mt-4 pr-8 text-sm">{item.desc}</p>
            <button
              style={{
                color: item.color === "black" ? "white" : "red",
                backgroundColor: item.color === "black" ? "black" : "white",
              }}
              className="py-2 px-4 rounded-md"
            >
              Explore now
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
