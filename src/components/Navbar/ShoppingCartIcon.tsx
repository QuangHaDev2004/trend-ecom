import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

export const ShoppingCartIcon = () => {
  return (
    <>
      <Link href="/cart" className="relative">
        <FiShoppingCart className="h-5 w-5 cursor-pointer text-gray-600" />
        <span className="absolute -top-3 -right-3 h-4 w-4 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold text-xs">
          0
        </span>
      </Link>
    </>
  );
};
