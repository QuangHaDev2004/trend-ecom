import Image from "next/image";
import Link from "next/link";
import { SearchBar } from "./SearchBar";
import { FaRegBell } from "react-icons/fa6";
import { ShoppingCartIcon } from "./ShoppingCartIcon";

export const Navbar = () => {
  return (
    <>
      <nav className="flex w-full items-center justify-between border-b border-gray-200 py-4">
        {/* LEFT */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/images/logo.png"
            alt="TrendEcom"
            width={200}
            height={200}
            className="h-9 w-9 object-cover"
          />
          <p className="hidden text-lg font-semibold tracking-wider md:block">
            TRENDECOM.
          </p>
        </Link>

        {/* RIGHT */}
        <div className="flex items-center gap-6">
          <SearchBar />
          <FaRegBell className="h-5 w-5 cursor-pointer text-gray-600" />
          <ShoppingCartIcon />
          <Link href="/login" className="font-semibold">
            Đăng nhập
          </Link>
        </div>
      </nav>
    </>
  );
};
