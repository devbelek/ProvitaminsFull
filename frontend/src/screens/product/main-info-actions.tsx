"use client";

import IconButton from "@/src/components/shared/icon-button";
import { useBasketStore } from "@/src/stores/basket";
import { useFavoritesStore } from "@/src/stores/favorites";
import { useParams } from "next/navigation";

function MainInfoActions() {
  const params = useParams();
  const { favorites, toggleFavorite } = useFavoritesStore();
  const { basket, toggleBasket } = useBasketStore();
  return (
    <div className="flex gap-2.5">
      <IconButton.Buy
        isActive={basket.has(Number(params.id))}
        size="lg"
        onClick={() => toggleBasket(Number(params.id))}
      />
      <IconButton.Favorite
        variant="outlined"
        isActive={favorites.has(Number(params.id))}
        onClick={() => toggleFavorite(Number(params.id))}
      />
    </div>
  );
}

export default MainInfoActions;
