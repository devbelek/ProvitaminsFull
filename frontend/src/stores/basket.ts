import { Bounce, toast } from "react-toastify";
import { create } from "zustand";
import { StorageValue, persist } from "zustand/middleware";

interface Basket {
  id: number;
  count: number;
}

export interface BasketState {
  basket: Map<number, Basket>;
  addBasket: (productId: number) => void;
  removeBasket: (productId: number) => void;
  toggleBasket: (productId: number) => void;
  setCount: (productId: number, count: number) => void;
  getTotalCount: () => number;
  clear: () => void;
}

export const useBasketStore = create<BasketState>()(
  persist(
    (set, get) => ({
      basket: new Map<number, Basket>(),

      addBasket: (productId) => {
        const basket = get().basket;
        if (!basket.has(productId)) {
          basket.set(productId, {
            id: productId,
            count: 1,
          });
          set({ basket: new Map<number, Basket>(basket) });
        }
      },

      removeBasket: (productId) => {
        const basket = get().basket;
        basket.delete(productId);
        set({ basket: new Map<number, Basket>(basket) });
      },

      toggleBasket: (productId) => {
        const basket = get().basket;
        if (basket.has(productId)) {
          basket.delete(productId);
        } else {
          basket.set(productId, {
            id: productId,
            count: 1,
          });
          toast.success("Товар добавлен в вашу корзину", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            closeButton: () => null,
            transition: Bounce,
          });
        }
        set({ basket: new Map<number, Basket>(basket) });
      },
      setCount: (id: number, count: number) => {
        const basket = get().basket;
        basket.set(id, {
          id,
          count,
        });
        set({ basket: new Map<number, Basket>(basket) });
      },

      getTotalCount: () => {
        const basket = get().basket;
        let total = 0;
        basket.forEach((item) => {
          total += item.count;
        });

        return total;
      },
      clear: () => {
        const basket = new Map<number, Basket>();
        set({ basket: new Map<number, Basket>(basket) });
      },
    }),
    {
      name: "basket-products",
      storage: {
        getItem: (name) => {
          const str = localStorage.getItem(name);
          if (!str) return null;
          const { state } = JSON.parse(str);
          return {
            state: {
              ...state,
              basket: new Map(state.basket),
            },
          };
        },
        setItem: (name, newValue: StorageValue<BasketState>) => {
          const str = JSON.stringify({
            state: {
              ...newValue.state,
              basket: Array.from(newValue.state.basket.entries()),
            },
          });
          localStorage.setItem(name, str);
        },
        removeItem: (name) => localStorage.removeItem(name),
      },
    }
  )
);
