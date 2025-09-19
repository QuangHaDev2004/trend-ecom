import Image from "next/image";
import Link from "next/link";
import { SearchBar } from "./SearchBar";
import { FaRegBell } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";

export const Navbar = () => {
  return (
    <>
      <nav className="py-4 w-full flex items-center justify-between border-b border-gray-200">
        {/* LEFT */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/images/logo.png"
            alt="TrendEcom"
            width={200}
            height={200}
            className="w-9 h-9 object-cover"
          />
          <p className="hidden md:block text-lg font-medium tracking-wider">TRENDECOM.</p>
        </Link>

        {/* RIGHT */}
        <div className="flex items-center gap-6">
          <SearchBar />
          <FaRegBell className="w-5 h-5 text-gray-600 cursor-pointer" />
          <FiShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer"  />
          <Link href="/login" className="font-semibold">Đăng nhập</Link>
        </div>
      </nav>
    </>
  );
};
