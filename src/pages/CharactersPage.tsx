import { setupCharacters } from "./setupCharacters";
import { SearchBar } from "@/components/SearchBar";
import { CharacterList } from "@/components/CharacterList";

export function CharactersPage() {
  const {
    query, setQuery, loading, characters, error,
    isFavorite, toggleFavorite, clearFavorites  } = setupCharacters();

  return (
    <div className="p-4">
      <div className="mb-4">
        <SearchBar value={query} onChange={setQuery} loading={loading} />
      </div>
      {characters.length > 0 && (
          <button
            className="text-sm underline text-muted-foreground"
            onClick={clearFavorites}
            title="Clear all favorites"
          >
            Clear all
          </button>
        )}

      {error && <div className="text-red-600">Error: {error}</div>}

      <CharacterList
        characters={characters}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4"
      ></CharacterList>
    </div>
  );
}
