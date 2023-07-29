import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <Link href="/cart" className="flex space-x-4 cursor-pointer">
      <div className="relative h-8 w-8 md:h-5 md:w-5">
        <Image src={"/cart.png"} alt={""} fill />
      </div>
      <p className="text-3xl md:text-base text-white md:text-red-500">
        CART ( 3 )
      </p>
    </Link>
  );
};

export default CartIcon;
