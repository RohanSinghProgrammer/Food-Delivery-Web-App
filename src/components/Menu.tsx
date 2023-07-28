"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "HOMEPAGE", url: "/" },
  { id: 2, title: "MENU", url: "/menu" },
  { id: 3, title: "WORKING HOURS", url: "/" },
  { id: 4, title: "CONTACT", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  // Temporary
  const user = false;
  return (
    <div>
      <div>
        {!open ? (
          <Image
            src="/open.png"
            alt="..."
            width={20}
            height={20}
            className="cursor-pointer"
            onClick={() => setOpen(true)}
          />
        ) : (
          <Image
            src="/close.png"
            alt="..."
            width={20}
            height={20}
            className="cursor-pointer"
            onClick={() => setOpen(false)}
          />
        )}
      </div>
      {open && (
        <div className="absolute h-[calc(100vh-6rem)] w-full bg-red-500 left-0 top-24 flex flex-col space-y-6 justify-center items-center z-10">
          <div className="grid place-items-center gap-6 text-white text-3xl">
            {links.map((item) => (
              <Link key={item.id} href={item.url} onClick={()=> setOpen(false)}>{item.title}</Link>
            ))}
            {/* login || orders */}
            {!user ? (
              <Link href={"/login"} onClick={()=> setOpen(false)}>LOGIN</Link>
            ) : (
              <Link href={"/orders"} onClick={()=> setOpen(false)}>ORDERS</Link>
            )}
          </div>
            {/* cart icon */}
            <Link href={'/cart'} onClick={()=> setOpen(false)}>
                <CartIcon />
            </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
