// CharactersPage.tsx
import { useContext } from "react";
import { CharactersContext } from '@/shared/provider/CharactersProvider'
import { SearchBar } from "@/entities/SearchBar";
import { CharacterList } from "@/entities/CharacterList";


export function CharactersPage() {

  const {
    query, setQuery, characters, error,
    loading, isFavorite, toggleFavorite} = useContext(CharactersContext);

  return (
    <div className="p-4">
      <div className="mb-4">
        <SearchBar value={query} onChange={setQuery} loading={loading} />
      </div>

      {error && <div className="text-red-600">Error: {error}</div>}
      {loading && <div className="text-center">Loading...</div>}

      <CharacterList
        characters={characters}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4"
      />
    </div>
  );
}