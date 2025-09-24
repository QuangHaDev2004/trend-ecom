import { z } from "zod";

export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartItemsType = CartItemType[];

export const shippingFormSchema = z.object({
  name: z.string().min(1, "Vui lòng nhập họ tên!"),
  email: z.string().min(1, "Vui lòng nhập email!"),
  phone: z
    .string()
    .min(7, "Số điện thoại phải có từ 7 đến 10 chữ số!")
    .min(10, "Số điện thoại phải có từ 7 đến 10 chữ số!")
    .regex(/^\d+$/, "Số điện thoại chỉ được bao gồm các chữ số!"),
  address: z.string().min(1, "Vui lòng nhập địa chỉ!"),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;

export type CartStoreStateType = {
  cart: CartItemsType;
  hasHydrated: boolean;
};

export type CartStoreActionsType = {
  addToCart: (product: CartItemType) => void;
  removeFormCart: (product: CartItemType) => void;
  clearCart: () => void;
};
