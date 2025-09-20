"use client";

import { Select } from "@headlessui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FaChevronDown } from "react-icons/fa6";

export const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <div className="my-6 flex items-center justify-end gap-2 text-sm text-gray-500">
        <span className="">Sắp xếp theo:</span>
        <div className="relative">
          <Select
            name="sort"
            className="appearance-none rounded-md p-2 pr-8 shadow-md ring ring-gray-200"
            onChange={(e) => handleFilter(e.target.value)}
          >
            <option value="newest">Mới nhất</option>
            <option value="oldest">Cũ nhất</option>
            <option value="asc">Giá: Thấp đến Cao</option>
            <option value="desc">Giá: Cao đến Thấp</option>
          </Select>
          <FaChevronDown className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 text-[12px]" />
        </div>
      </div>
    </>
  );
};
