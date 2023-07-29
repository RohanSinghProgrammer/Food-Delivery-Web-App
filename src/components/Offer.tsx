import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="h-screen md:h-[70vh] flex flex-col md:flex-row bg-black md:bg-[url('/offerBg.png')] text-white">
      {/* TEXT SECTION */}
      <div className="flex-1 flex flex-col justify-center items-center gap-4 md:gap-8 text-center py-6">
        <h1 className="text-5xl lg:text-6xl font-bold">
          Delicious Burger & French Fry
        </h1>
        <p className="md:text-xl">
          Progressively simplify effective e-toiler and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDown />
        <button className="bg-red-500 text-white py-3 px-6 rounded-md">
          Order Now
        </button>
      </div>
      {/* IMAGE SECTION */}
      <div className="flex-1 relative md:h-full">
        <Image src="/offerProduct.png" alt="..." fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
