"use client"

import useCartStore from "@/store/cartStore";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

export const ShoppingCartIcon = () => {
  const { cart } = useCartStore();

  return (
    <>
      <Link href="/cart" className="relative">
        <FiShoppingCart className="h-5 w-5 cursor-pointer text-gray-600" />
        <span className="absolute -top-3 -right-3 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-black">
          {cart.length}
        </span>
      </Link>
    </>
  );
};
