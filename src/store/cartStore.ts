import { CartStoreActionsType, CartStoreStateType } from "@/types";
import { create } from "zustand";

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),
  removeFormCart: (product) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== product.id),
    })),
  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;

