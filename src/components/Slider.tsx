"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    img: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in Kolkata",
    img: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    img: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev == data.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-7rem)] flex flex-col md:flex-row">
      {/* HEADING SECTION */}
      <div className="flex-1 flex flex-col justify-center items-center gap-8 text-red-500 bg-fuchsia-50 py-4 md:py-0">
        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl uppercase text-center px-4 md:px-8">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 py-4 px-8 text-white font-semibold">
          Order Now
        </button>
      </div>
      {/* IMAGE SECTION */}
      <div className="h-1/2 w-full md:h-full md:w-1/2 relative">
        <Image
          src={data[currentSlide].img}
          alt="Slider"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
