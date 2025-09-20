import { ProductList } from "@/components/Product/ProductList";

type SearchParams = Promise<{ category: string }>;

export default async function ProductPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const category = (await searchParams).category;

  return (
    <>
      <div className="">
        <ProductList category={category} params="products" />
      </div>
    </>
  );
}
