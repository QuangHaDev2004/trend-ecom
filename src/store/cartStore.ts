import { CartStoreActionsType, CartStoreStateType } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
  persist(
    (set) => ({
      hasHydrated: false, // đồng bộ dữ liệu xong?
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const existIndex = state.cart.findIndex(
            (item) =>
              item.id === product.id &&
              item.selectedSize === product.selectedSize &&
              item.selectedColor === product.selectedColor,
          );

          if (existIndex !== -1) {
            const updatedCart = [...state.cart];
            updatedCart[existIndex].quantity += product.quantity || 1;
            return {
              cart: updatedCart,
            };
          }

          return {
            cart: [...state.cart, product],
          };
        }),
      removeFormCart: (product) =>
        set((state) => ({
          cart: state.cart.filter(
            (item) =>
              item.id !== product.id ||
              item.selectedSize !== product.selectedSize ||
              item.selectedColor !== product.selectedColor,
          ),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasHydrated = true;
        }
      },
    },
  ),
);

export default useCartStore;
