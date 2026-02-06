export interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
}

export interface CharacterAPIResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}


export interface RenderCardProps {
  character: Character;
  favorite: boolean;
  onToggleFavorite: () => void;
}

export interface CharacterListProps {
  characters: Character[];
  className?: string;
  children: (character: Character) => React.ReactNode;
}

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onEnter?: () => void;
}



export interface SearchButtonProps {
  onClick: () => void;
  loading?: boolean;
  children?: React.ReactNode;
}



export interface Props {
  value: string;
  onChange: (v: string) => void;
  onSearch?: () => void;
  loading?: boolean;
  placeholder?:string,
  buttonText?: string;
}