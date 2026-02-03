import { List } from "@/shared/ui/List";
import { CharacterCard } from "@/components/CharacterCard";
import { RenderCardProps, CharacterListProps } from "@/types/character";

const RenderCard = ({character, isFavorite, toggleFavorite}:RenderCardProps) => {
    return <CharacterCard
              key={character.id} 
              character={character}
              favorite={isFavorite(character.id)}
              onToggleFavorite={toggleFavorite}
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