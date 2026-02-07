import { useContext } from "react";
import { CharacterSlotList } from "@/shared/ui/CharacterSlotList";
import { CharacterCard } from "@/shared/ui/CharacterCard";
import { CharactersContext } from '@/entities/provider/CharactersProvider'
import { Character } from "@/shared/types/character";

export function FavoritesPage() {

  const {
    favoriteCharacters, clearFavorites,
    isFavorite, toggleFavorite } = useContext(CharactersContext);

  const renderData = (character: Character) => (
      <CharacterCard
        key={character.id}
        character={character}
        favorite={isFavorite(character.id)}
        onToggleFavorite={() => toggleFavorite(character.id)}
      />
  )


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
      
      <CharacterSlotList
        characters={favoriteCharacters}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4"
        renderData={renderData}
      />
    </div>
  );
}