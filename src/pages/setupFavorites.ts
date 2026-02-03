import { useFavorites } from "@/hooks/useFavorites";


export const setupFavoritesDeps = () => {
  const charactersService = useFavorites;

  const { list: characters, isFavorite, toggleFavorite, clearFavorites } = charactersService();

  return { characters, isFavorite, toggleFavorite, clearFavorites };
};