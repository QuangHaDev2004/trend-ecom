import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className="mt-16 flex flex-col items-center gap-8 rounded-md bg-gray-800 p-8 md:flex-row md:items-start md:justify-between md:gap-0">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/images/logo.png"
              alt="TrendEcom"
              width={200}
              height={200}
              className="h-9 w-9 object-cover"
            />
            <p className="hidden text-lg font-medium tracking-wider text-white md:block">
              TRENDECOM.
            </p>
          </Link>
          <p className="text-sm text-gray-400">Copyright © TrendEcom.</p>
          <p className="text-sm text-gray-400">All rights reserved.</p>
        </div>
        <div className="flex flex-col items-center gap-4 text-sm text-gray-400 md:items-start">
          <p className="font-semibold text-amber-50">Liên kết</p>
          <Link href="">Trang chủ</Link>
          <Link href="">Liên hệ</Link>
          <Link href="">Điều khoản dịch vụ</Link>
          <Link href="">Chính sách bảo mật</Link>
        </div>
        <div className="flex flex-col items-center gap-4 text-sm text-gray-400 md:items-start">
          <p className="font-semibold text-amber-50">Liên kết</p>
          <Link href="">Tất cả sản phẩm</Link>
          <Link href="">Hàng mới về</Link>
          <Link href="">Bán chạy nhất</Link>
          <Link href="">Khuyến mãi</Link>
        </div>

        <div className="flex flex-col items-center gap-4 text-sm text-gray-400 md:items-start">
          <p className="font-semibold text-amber-50">Liên kết</p>
          <Link href="">Giới thiệu</Link>
          <Link href="">Liên hệ</Link>
          <Link href="">Blog</Link>
          <Link href="">Chương trình cộng tác viên</Link>
        </div>
      </div>
    </>
  );
};
