import { setupFavoritesDeps } from "./setupFavorites";
import { CharacterList } from "@/components/CharacterList";

export function FavoritesPage() {
  const { characters, isFavorite, toggleFavorite, clearFavorites } = setupFavoritesDeps();

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold">Favorites</h2>
        {characters.length > 0 && (
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
        characters={characters}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4"
      />
    </div>
  );
}