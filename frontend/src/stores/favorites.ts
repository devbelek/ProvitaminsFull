import { create } from "zustand";
import { StorageValue, persist } from "zustand/middleware";
import { toast, Bounce } from "react-toastify";

export interface FavoritesState {
  favorites: Set<number>;
  addFavorite: (productId: number) => void;
  removeFavorite: (productId: number) => void;
  toggleFavorite: (productId: number) => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: new Set<number>(),

      addFavorite: (productId) => {
        const favorites = get().favorites;
        favorites.add(productId);
        set({ favorites: new Set<number>(favorites) });
      },

      removeFavorite: (productId) => {
        const favorites = get().favorites;
        favorites.delete(productId);
        set({ favorites: new Set<number>(favorites) });
      },

      toggleFavorite: (productId) => {
        const favorites = get().favorites;
        if (favorites.has(productId)) {
          get().removeFavorite(productId);
        } else {
          get().addFavorite(productId);
          toast.success("Товар добавлен в избранные", {
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
      },
    }),
    {
      name: "favorite-products",
      storage: {
        getItem: (name) => {
          const str = localStorage.getItem(name);
          if (!str) return null;
          const { state } = JSON.parse(str);
          return {
            state: {
              ...state,
              favorites: new Set(state.favorites),
            },
          };
        },
        setItem: (name, newValue: StorageValue<FavoritesState>) => {
          const str = JSON.stringify({
            state: {
              ...newValue.state,
              favorites: Array.from(newValue.state.favorites),
            },
          });
          localStorage.setItem(name, str);
        },
        removeItem: (name) => localStorage.removeItem(name),
      },
    }
  )
);
