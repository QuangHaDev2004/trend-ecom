import { ProductList } from "@/components/Product/ProductList";
import Image from "next/image";

type SearchParams = Promise<{ category: string }>;

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const category = (await searchParams).category;

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
      <ProductList category={category} />
    </div>
  );
}
