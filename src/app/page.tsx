import { ProductList } from "@/components/Product/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="relative mb-12 aspect-[3/1]">
        <Image
          src="/assets/images/featured.png"
          alt="Featured Product"
          fill
          className="object-cover"
        />
      </div>
      <ProductList />
    </div>
  );
}
