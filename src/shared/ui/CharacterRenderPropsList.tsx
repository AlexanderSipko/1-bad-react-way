import { List } from "@/shared/ui/List";
import { CharacterListProps } from "@/shared/types/character";


export const CharacterRenderPropsList = ({
    characters,
    children,
    className
}: CharacterListProps) => {
    return (
        <List
            data={characters}
            renderData={(character) => children(character)}
            className={className}
        />
    );
};
