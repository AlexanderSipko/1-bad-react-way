import { List } from "@/shared/ui/List";
import { Character } from "@/shared/types/character";

export interface Tt {
    characters: Character[];
    className?: string;
    renderData: (character: Character) => React.ReactNode;
  }


export const CharacterSlotList = ({
    characters,
    className,
    renderData
}:Tt) => {
    return (<List
                data={characters}
                renderData={(character) => renderData(character)}
                className={className}
            />)
}