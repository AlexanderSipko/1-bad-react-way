import { List } from "@/shared/ui/List";
import { CharacterCard } from "@/entities/CharacterCard";
import { RenderCardProps, CharacterListProps } from "@/shared/types/character";

const RenderCard = ({character, isFavorite, toggleFavorite}:RenderCardProps) => {
    return <CharacterCard
              key={character.id} 
              character={character}
              favorite={isFavorite(character.id)}
              onToggleFavorite={() => toggleFavorite(character.id)}
  />}


export const CharacterList = ({
    characters,
    isFavorite,
    toggleFavorite,
    className
}: CharacterListProps) => {
    return   <List
                data={characters}
                renderData={
                    (character) =>
                    <RenderCard
                        character={character}
                        isFavorite={isFavorite}
                        toggleFavorite={toggleFavorite}/>
                    }
                className={className}
            >                                   
            </List>;
};