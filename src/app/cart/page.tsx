import Image from "next/image";
import React from "react";

const Cart = () => {
  return (
    <div className="h-[calc(100vh-9rem)] md:h-[calc(100vh-11rem)] flex flex-col md:flex-row justify-center items-center text-red-500">
      {/* ITEMS CONTAINER */}
      <div className="h-1/2 w-full md:w-2/3 md:h-full py-4 overflow-y-scroll flex flex-col justify-center items-center">
        {/* SINGLE ITEM */}
        <div className="px-4 flex items-center justify-between mb-4 w-full md:px-8 xl:px-16">
          <Image src={'/temporary/p1.png'} alt="..." height={100} width={100} />
          <div className="flex-1 px-2">
            <p className="font-bold text-xl">Sicilian</p>
            <p>Large</p>
          </div>
          <div className="flex items-center space-x-4">
            <p className="font-semibold">₹450</p>
            <button>x</button>
          </div>
        </div>
        {/* SINGLE ITEM */}
        <div className="px-4 flex items-center justify-between mb-4 w-full md:px-8 xl:px-16">
          <Image src={'/temporary/p1.png'} alt="..." height={100} width={100} />
          <div className="flex-1 px-2">
            <p className="font-bold text-xl">Sicilian</p>
            <p>Large</p>
          </div>
          <div className="flex items-center space-x-4">
            <p className="font-semibold">₹450</p>
            <button>x</button>
          </div>
        </div>
        {/* SINGLE ITEM */}
        <div className="px-4 flex items-center justify-between mb-4 w-full md:px-8 xl:px-16">
          <Image src={'/temporary/p1.png'} alt="..." height={100} width={100} />
          <div className="flex-1 px-2">
            <p className="font-bold text-xl">Sicilian</p>
            <p>Large</p>
          </div>
          <div className="flex items-center space-x-4">
            <p className="font-semibold">₹450</p>
            <button>x</button>
          </div>
        </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 w-full md:w-1/3 md:h-full bg-fuchsia-50 flex justify-center items-center p-6 flex-col">
        {/* SUBTOTAL */}
        <div className="flex w-full justify-between items-center font-semibold mb-4">
          <p>Subtotal ( 3 items )</p>
          <p>₹1550</p>
        </div>
        {/* SERVICE COST */}
        <div className="flex w-full justify-between items-center font-semibold mb-4">
          <p>Service Cost</p>
          <p>₹0</p>
        </div>
        {/* DELIVERY COST */}
        <div className="flex w-full justify-between items-center font-semibold mb-4">
          <p>Delivery Cost</p>
          <p className="text-green-500">FREE!</p>
        </div>
        <hr className="w-full my-2" />
        {/* SUBTOTAL */}
        <div className="flex w-full justify-between items-center font-semibold mb-4">
          <p className="uppercase">Total (incl. gst)</p>
          <p>₹1550</p>
        </div>
        {/* CHECKOUT BUTTON */}
        <button className="bg-red-500 text-white py-2 px-4 rounded-md uppercase self-end">checkout</button>
      </div>
    </div>
  );
};

export default Cart;
