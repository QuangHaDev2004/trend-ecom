"use client";

import useCartStore from "@/store/cartStore";
import { ProductType } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { toast } from "sonner";

export const ProductInteraction = ({
  product,
  selectedSize,
  selectedColor,
}: {
  product: ProductType;
  selectedSize: string;
  selectedColor: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCartStore();

  const handleTypeChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleQuantityChange = (type: "increment" | "decrement") => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: quantity,
      selectedSize: selectedSize,
      selectedColor: selectedColor,
    });
    toast.success("Thêm sản phẩm thành công!");
  };

  return (
    <>
      <div className="mt-4 flex flex-col gap-4">
        {/* SIZE */}
        <div className="flex flex-col gap-2 font-medium">
          <span className="font-medium text-gray-500">Kích cỡ</span>
          <div className="flex items-center gap-2 text-xs">
            {product.sizes.map((size) => (
              <div
                className={`cursor-pointer border p-[2px] ${selectedSize === size ? "border-gray-600" : "border-gray-300"}`}
                key={size}
                onClick={() => handleTypeChange("size", size)}
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center uppercase ${selectedSize === size ? "bg-black text-white" : "bg-white text-black"}`}
                >
                  {size}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* COLOR */}
        <div className="flex flex-col gap-2 font-medium">
          <span className="font-medium text-gray-500">Màu sắc</span>
          <div className="flex items-center gap-2">
            {product.colors.map((color) => (
              <div
                className={`cursor-pointer border p-[2px] ${selectedColor === color ? "border-gray-300" : "border-white"}`}
                key={color}
                onClick={() => handleTypeChange("color", color)}
              >
                <div
                  className={`flex h-8 w-8`}
                  style={{ backgroundColor: color }}
                ></div>
              </div>
            ))}
          </div>
        </div>
        {/* QUANTITY */}
        <div className="flex flex-col gap-2 font-medium">
          <span className="font-medium text-gray-500">Số lượng</span>
          <div className="flex items-center gap-2">
            <button
              className="cursor-pointer border border-gray-300 p-2"
              onClick={() => handleQuantityChange("decrement")}
            >
              <FaMinus className="text-[12px]" />
            </button>
            <span>{quantity}</span>
            <button
              className="cursor-pointer border border-gray-300 p-2"
              onClick={() => handleQuantityChange("increment")}
            >
              <FaPlus className="text-[12px]" />
            </button>
          </div>
        </div>
        {/* BUTTON */}
        <button
          onClick={handleAddToCart}
          className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-800 px-4 py-2 font-semibold text-white shadow-lg"
        >
          <FaPlus />
          Thêm vào giỏ
        </button>
        <button className="flex cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 font-semibold text-gray-800 shadow-lg ring ring-gray-400">
          <FiShoppingCart />
          Mua hàng
        </button>
      </div>
    </>
  );
};
