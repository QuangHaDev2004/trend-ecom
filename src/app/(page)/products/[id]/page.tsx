import { ProductInteraction } from "@/components/ProductDetail/ProductInteraction";
import { ProductType } from "@/types";
import Image from "next/image";

const product: ProductType = {
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
};

type Params = Promise<{ id: string }>;
type SearchParams = Promise<{ color: string; size: string }>;

export default async function ProductDetail(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { id } = await props.params;
  const { size, color } = await props.searchParams;

  const selectedSize = size || product.sizes[0];
  const selectedColor = color || product.colors[0];

  return (
    <>
      <div className="mt-12 flex flex-col gap-4 md:gap-12 lg:flex-row">
        {/* IMAGE */}
        <div className="relative aspect-[2/3] w-full lg:w-5/12">
          <Image
            src={product.images[selectedColor]}
            alt={product.name}
            fill
            className="rounded-md object-contain"
          />
        </div>
        {/* DETAIL */}
        <div className="flex w-full flex-col gap-4 lg:w-7/12">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-500">{product.description}</p>
          <h2 className="text-2xl font-semibold">
            ${product.price.toFixed(2)}
          </h2>
          <ProductInteraction
            product={product}
            selectedSize={selectedSize}
            selectedColor={selectedColor}
          />
        </div>
      </div>
    </>
  );
}
