import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="p-4 h-12 flex items-center justify-between text-red-500 md:h-16 lg:px-20 xl:px-40">
      {/* LOGO */}
      <Link
        href="/"
        className="text-red-500 text-lg font-semibold uppercase md:font-bold md:text-center"
      >
        Masseno
      </Link>
      {/* COPYRIGHT */}
      <p>&copy; ALL RIGHTS RESERVED</p>
    </div>
  );
};

export default Footer;
