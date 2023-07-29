import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const user = false;
  return (
    <div className="p-4 h-12 border-b-2 border-b-red-500 flex items-center justify-between text-red-500 md:h-16 lg:px-20 xl:px-40">
      {/* LEFT OPTIONS */}
      <div className="hidden md:flex items-center space-x-4 flex-1">
        <Link href="/">HOMEPAGE</Link>
        <Link href="/menu">MENU</Link>
        <Link href="/">CONTACT</Link>
      </div>
      {/* LOGO */}
      <Link
        href="/"
        className="text-red-500 text-lg font-semibold uppercase md:font-bold flex-1 md:text-center"
      >
        Masseno
      </Link>
      {/* Mobile menu */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT OPTIONS */}
      <div className="hidden md:flex items-center justify-end space-x-4 flex-1">
        <div className="flex items-center px-1 rounded-md bg-orange-300 space-x-2 cursor-pointer md:absolute top-3 right-2 lg:static">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>1234 5678</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
