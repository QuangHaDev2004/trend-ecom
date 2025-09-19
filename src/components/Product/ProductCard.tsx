import { ProductType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

export const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <>
      <div className="overflow-hidden rounded-lg shadow-lg">
        {/* IMAGES */}
        <Link href={`/products/${product.id}`}>
          <div className="relative aspect-[2/3] overflow-hidden">
            <Image
              src={product.images[product.colors[0]]}
              alt={product.name}
              fill
              className="object-cover transition-all duration-300 hover:scale-105"
            />
          </div>
        </Link>
        {/* PRODUCT DETAIL */}
        <div className="flex flex-col gap-3 p-4">
          <h1 className="line-clamp-1 min-h-6 font-semibold">{product.name}</h1>
          <p className="line-clamp-2 min-h-[30px] text-sm text-gray-500">
            {product.shortDescription}
          </p>
          {/* PRODUCT TYPE */}
          <div className="flex gap-8 text-xs">
            {/* SIZE */}
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Kích cỡ</span>
              <select
                name="size"
                id="size"
                className="cursor-pointer rounded-md px-2 py-1 ring ring-gray-300"
              >
                {product.sizes.map((size) => (
                  <option value={size} key={size}>
                    {size.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
            {/* COLOR */}
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Màu sắc</span>
              <div className="flex items-center gap-2">
                {product.colors.map((color) => (
                  <div className="ring ring-gray-300 rounded-full p-0.5" key={color}>
                    <div
                      className="h-[14px] w-[14px] cursor-pointer rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* PRICE AND ADD TO CART BUTTON */}
          <div className="flex items-center justify-between">
            <p className="font-semibold">${product.price.toFixed(2)}</p>
            <button className="flex cursor-pointer items-center gap-2 rounded-md p-2 text-sm font-medium shadow-lg ring-1 ring-gray-200 transition-all duration-300 hover:bg-black hover:text-white">
              <FiShoppingCart className="text-[16px]" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
