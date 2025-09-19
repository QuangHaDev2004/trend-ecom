import { ProductsType } from "@/types";
import { Categories } from "../Categories/Categories";
import { ProductCard } from "./ProductCard";

// TEMPORARY
const products: ProductsType = [
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
  },
  {
    id: 4,
    name: "Áo thun Nike Dri Flex",
    shortDescription:
      "Áo thun co giãn, thoáng mát dành cho hoạt động thể thao.",
    description:
      "Nike Dri Flex T-Shirt sử dụng công nghệ thấm hút mồ hôi, giúp bạn luôn khô thoáng khi tập luyện. Thiết kế hiện đại, dễ mặc và tiện lợi.",
    price: 29.9,
    sizes: ["s", "m", "l"],
    colors: ["white", "pink"],
    images: {
      white: "/assets/images/products/4w.png",
      pink: "/assets/images/products/4p.png",
    },
  },
  {
    id: 5,
    name: "Áo khoác Under Armour StormFleece",
    shortDescription: "Áo khoác giữ nhiệt, chống gió và nước nhẹ.",
    description:
      "Under Armour StormFleece được làm từ chất liệu giữ ấm cao cấp, chống gió và kháng nước nhẹ. Phù hợp cho các hoạt động ngoài trời trong điều kiện lạnh.",
    price: 49.9,
    sizes: ["s", "m", "l"],
    colors: ["red", "orange", "black"],
    images: {
      red: "/assets/images/products/5r.png",
      orange: "/assets/images/products/5o.png",
      black: "/assets/images/products/5bl.png",
    },
  },
  {
    id: 6,
    name: "Giày Nike Air Max 270",
    shortDescription: "Đôi giày thể thao êm ái, mang lại sự thoải mái cả ngày.",
    description:
      "Nike Air Max 270 với đệm khí nổi bật, mang lại cảm giác nhẹ nhàng và êm ái cho bàn chân. Phù hợp cho cả tập luyện và đi chơi hằng ngày.",
    price: 59.9,
    sizes: ["40", "42", "43", "44"],
    colors: ["gray", "white"],
    images: {
      gray: "/assets/images/products/6g.png",
      white: "/assets/images/products/6w.png",
    },
  },
  {
    id: 7,
    name: "Giày Nike Ultraboost Pulse",
    shortDescription: "Giày chạy bộ nhẹ, đàn hồi và bền bỉ.",
    description:
      "Nike Ultraboost Pulse mang đến cảm giác chạy mượt mà, đế đàn hồi cao, hỗ trợ tốt cho bàn chân. Phù hợp cho các vận động viên và người yêu thể thao.",
    price: 69.9,
    sizes: ["40", "42", "43"],
    colors: ["gray", "pink"],
    images: {
      gray: "/assets/images/products/7g.png",
      pink: "/assets/images/products/7p.png",
    },
  },
  {
    id: 8,
    name: "Quần jean Levi’s Classic Denim",
    shortDescription: "Quần jean cổ điển, bền đẹp và dễ phối đồ.",
    description:
      "Levi’s Classic Denim là lựa chọn hoàn hảo cho phong cách thời trang thường ngày. Chất liệu denim chắc chắn, thiết kế cổ điển không bao giờ lỗi mốt.",
    price: 59.9,
    sizes: ["s", "m", "l"],
    colors: ["blue", "green"],
    images: {
      blue: "/assets/images/products/8b.png",
      green: "/assets/images/products/8gr.png",
    },
  },
];

export const ProductList = () => {
  return (
    <>
      <div className="">
        <Categories />
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
