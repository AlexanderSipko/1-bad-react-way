import { useContext } from "react";
import { CharacterList } from "@/entities/CharacterList";
import { CharactersContext } from '@/shared/provider/CharactersProvider'

export function FavoritesPage() {

  const {
    favoriteCharacters, clearFavorites,
    isFavorite, toggleFavorite } = useContext(CharactersContext);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold">Favorites</h2>
        {favoriteCharacters.length > 0 && (
          <button
            className="text-sm underline text-muted-foreground"
            onClick={clearFavorites}
            title="Clear all favorites"
          >
            Clear all
          </button>
        )}
      </div>
      
      <CharacterList
        characters={favoriteCharacters}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4"
      />
    </div>
  );
}