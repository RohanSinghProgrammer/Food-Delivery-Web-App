import Image from "next/image";
import React from "react";
import { singleProduct } from "../../../../data";
import ProductVariants from "@/components/ProductVariants";

const SingleProduct = () => {
  return (
    <div className="p-4 md:p-20 lg:px-40 text-red-500 h-[calc(100vh-9rem)] md:h-[calc(100vh-11rem)] flex flex-col md:flex-row justify-evenly items-center gap-4">
      {/* IMAGE SECTION */}
      <div className="relative h-1/2 md:h-full w-full">
        {singleProduct.img && (
          <Image
            src={singleProduct.img}
            alt="..."
            fill
            className="object-contain"
          />
        )}
      </div>
      {/* TEXT SECTION */}
      <div>
        <h1 className="text-3xl font-bold pl-4">{singleProduct.title}</h1>
        <p className="text-sm pl-4">{singleProduct.desc}</p>
        <ProductVariants price={singleProduct.price} id={singleProduct.id} options={singleProduct.options} />
      </div>
    </div>
  );
};

export default SingleProduct;
