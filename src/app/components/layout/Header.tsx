import React from "react";
import Logo from "/public/Logo.webp";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-8 py-6">
      <Image src={Logo} alt="logo" className="w-40" />
      <ul className="flex gap-x-10 ">
        <li className="text-lg">
          <Link href={"/"}>Female</Link>
        </li>
        <li className="text-lg">
          <Link href={"/"}>Male</Link>
        </li>
        <li className="text-lg">
          <Link href={"/"}> Kids</Link>
        </li>
        <li className="text-lg">
          <Link href={"/"}> All Products</Link>
        </li>
      </ul>
      <div className="h-10 w-10 rounded-full bg-gray-400 flex justify-center items-center">
      <ShoppingCart />
      </div>
    </div>
  );
};

export default Header;
