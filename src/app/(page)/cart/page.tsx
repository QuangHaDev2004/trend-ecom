"use client";

import { PaymentForm } from "@/components/CartForm/PaymentForm";
import { ShippingForm } from "@/components/CartForm/ShippingForm";
import { CartItemsType } from "@/types";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaArrowRightLong, FaRegTrashCan } from "react-icons/fa6";

const steps = [
  {
    id: 1,
    title: "Giỏ hàng",
  },
  {
    id: 2,
    title: "Địa chỉ giao hàng",
  },
  {
    id: 3,
    title: "Phương thức thanh toán",
  },
];

const cartItem: CartItemsType = [
  {
    id: 1,
    name: "Áo thun Adidas CoreFit",
    shortDescription:
      "Chiếc áo thun thoải mái, thiết kế thể thao phù hợp cho mọi hoạt động.",
    description:
      "Áo thun Adidas CoreFit mang lại cảm giác thoải mái tối đa. Với chất liệu cao cấp, thoáng khí, dễ phối đồ và phù hợp cho cả luyện tập lẫn mặc hằng ngày.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/assets/images/products/1g.png",
      purple: "/assets/images/products/1p.png",
      green: "/assets/images/products/1gr.png",
    },
    quantity: 1,
    selectedSize: "m",
    selectedColor: "gray",
  },
  {
    id: 2,
    name: "Áo khoác Puma Ultra Warm Zip",
    shortDescription: "Áo khoác khóa kéo giữ ấm, nhẹ nhàng và phong cách.",
    description:
      "Puma Ultra Warm Zip với thiết kế tiện lợi, khóa kéo dễ sử dụng, chất liệu ấm áp nhưng thoáng khí. Lý tưởng cho mùa lạnh hoặc các buổi tập ngoài trời.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: {
      gray: "/assets/images/products/2g.png",
      green: "/assets/images/products/2gr.png",
    },
    quantity: 1,
    selectedSize: "l",
    selectedColor: "gray",
  },
  {
    id: 3,
    name: "Áo chui đầu Nike Air Essentials",
    shortDescription: "Áo chui đầu nhẹ, thoải mái và phong cách đường phố.",
    description:
      "Nike Air Essentials Pullover mang lại sự thoải mái cả ngày. Thiết kế tối giản, chất liệu bền đẹp, dễ dàng kết hợp với nhiều trang phục khác nhau.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/assets/images/products/3gr.png",
      blue: "/assets/images/products/3b.png",
      black: "/assets/images/products/3bl.png",
    },
    quantity: 1,
    selectedSize: "m",
    selectedColor: "black",
  },
];

export default function CartPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [shippingForm, setShippingForm] = useState();

  const activeStep = parseInt(searchParams.get("step") || "1");

  return (
    <>
      <div className="mt-12 flex flex-col items-center justify-center gap-8">
        {/* TITLE */}
        <h1 className="text-2xl font-bold">Giỏ hàng của bạn</h1>
        {/* STEPS */}
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
          {steps.map((step) => (
            <div
              className={`flex items-center gap-2 border-b-2 pb-4 ${activeStep === step.id ? "border-gray-800" : "border-gray-200"}`}
              key={step.id}
            >
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full p-4 text-sm font-semibold text-white ${activeStep === step.id ? "bg-gray-800" : "bg-gray-400"}`}
              >
                {step.id}
              </div>
              <p
                className={`text-sm font-semibold ${activeStep === step.id ? "text-gray-800" : "text-gray-400"}`}
              >
                {step.title}
              </p>
            </div>
          ))}
        </div>
        {/* STEPS & DETAIL */}
        <div className="flex w-full flex-col gap-16 lg:flex-row">
          {/* STEPS */}
          <div className="flex w-full flex-col gap-8 rounded-lg border border-gray-100 p-8 shadow-lg lg:w-7/12">
            {activeStep === 1 ? (
              <>
                <h2 className="font-bold">Sản phẩm trong giỏ</h2>
                {cartItem.map((item) => (
                  <div
                    className="flex items-center justify-between"
                    key={item.id}
                  >
                    <div className="flex gap-8">
                      <div className="relative h-32 w-32 overflow-hidden rounded-lg bg-gray-50">
                        <Image
                          src={item.images[item.selectedColor]}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-1">
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm font-medium text-gray-500">
                            Số lượng: {item.quantity}
                          </p>
                          <p className="text-sm font-medium text-gray-500">
                            Kích cỡ: {item.selectedSize}
                          </p>
                          <p className="text-sm font-medium text-gray-500">
                            Màu sắc: {item.selectedColor}
                          </p>
                        </div>
                        <p className="font-semibold">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-red-100 text-red-400 transition-all duration-300 hover:bg-red-200">
                      <FaRegTrashCan className="text-[14px]" />
                    </button>
                  </div>
                ))}
              </>
            ) : activeStep === 2 ? (
              <ShippingForm />
            ) : activeStep === 3 && shippingForm ? (
              <PaymentForm />
            ) : (
              <p className="text-sm text-gray-500">
                Vui lòng điền vào biểu mẫu giao hàng để tiếp tục.
              </p>
            )}
          </div>
          {/* DETAIL */}
          <div className="flex w-full flex-col gap-8 rounded-lg border border-gray-100 p-8 shadow-lg lg:w-5/12">
            <h2 className="font-bold">Chi tiết giỏ hàng</h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-sm">
                <p className="text-gray-500">Tạm tính</p>
                <p className="font-semibold">
                  $
                  {cartItem
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toFixed(2)}
                </p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <p className="text-gray-500">Giảm giá (10%)</p>
                <p className="font-semibold">$10</p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <p className="text-gray-500">Phí vận chuyển</p>
                <p className="font-semibold">$10</p>
              </div>
              <hr className="border-gray-200" />
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-800">Tổng cộng</p>
                <p className="font-semibold">
                  $
                  {cartItem
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toFixed(2)}
                </p>
              </div>
            </div>
            {activeStep === 1 && (
              <button
                onClick={() => router.push(`/cart/?step=2`, { scroll: false })}
                className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-gray-800 p-3 text-white transition-all duration-300 hover:bg-gray-900"
              >
                <p className="text-sm font-semibold">Tiếp tục</p>
                <FaArrowRightLong />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
