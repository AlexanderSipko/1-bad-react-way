import { useFavorites } from "@/hooks/useFavorites";
import { useCharacters } from '@/hooks/useCharacters'


export const setupCharacters = () => {

  const charactersService = useCharacters;
  const favoritesService = useFavorites;

  const { query, setQuery, loading, items:characters, error } = charactersService();
  const { isFavorite, toggleFavorite, clearFavorites } = favoritesService();

  return {
      characters, query, setQuery,
      loading, error,
      isFavorite, toggleFavorite, clearFavorites
    };
};