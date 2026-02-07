// CharactersPage.tsx
import { useContext } from "react";
import { CharactersContext } from '@/entities/provider/CharactersProvider'
import { CharacterCard } from "@/shared/ui/CharacterCard";
import { SearchBar } from "@/shared/ui/SearchBar";
import { CharacterRenderPropsList } from "@/shared/ui/CharacterRenderPropsList";


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
      
      <CharacterRenderPropsList
        characters={characters}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4"
      >
        {(character) => (
          <CharacterCard
            key={character.id}
            character={character}
            favorite={isFavorite(character.id)}
            onToggleFavorite={() => toggleFavorite(character.id)}
          />
        )}
      </CharacterRenderPropsList>
    </div>
  );
}