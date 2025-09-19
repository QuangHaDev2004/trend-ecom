"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  FaBasketShopping,
  FaShirt,
  FaShoePrints,
  FaGlasses,
  FaBriefcase,
  FaPersonDress,
  FaVest,
  FaHand,
} from "react-icons/fa6";

const categories = [
  {
    name: "Tất cả",
    icon: <FaBasketShopping className="h-4 w-4" />,
    slug: "all",
  },
  {
    name: "Áo thun",
    icon: <FaShirt className="h-4 w-4" />,
    slug: "t-shirts",
  },
  {
    name: "Giày",
    icon: <FaShoePrints className="h-4 w-4" />,
    slug: "shoes",
  },
  {
    name: "Phụ kiện",
    icon: <FaGlasses className="h-4 w-4" />,
    slug: "accessories",
  },
  {
    name: "Túi xách",
    icon: <FaBriefcase className="h-4 w-4" />,
    slug: "bags",
  },
  {
    name: "Đầm/Váy",
    icon: <FaPersonDress className="h-4 w-4" />,
    slug: "dresses",
  },
  {
    name: "Áo khoác",
    icon: <FaVest className="h-4 w-4" />,
    slug: "jackets",
  },
  {
    name: "Găng tay",
    icon: <FaHand className="h-4 w-4" />,
    slug: "gloves",
  },
];

export const Categories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category");

  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value || "all");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <div className="mb-4 grid grid-cols-2 gap-2 rounded-lg bg-gray-100 p-2 text-sm font-medium sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        {categories.map((category) => (
          <div
            className={`flex cursor-pointer items-center justify-center gap-2 rounded-md p-2 ${category.slug === selectedCategory ? "bg-white shadow-md" : "text-gray-500"}`}
            key={category.slug}
            onClick={() => handleChange(category.slug)}
          >
            {category.icon}
            {category.name}
          </div>
        ))}
      </div>
    </>
  );
};
