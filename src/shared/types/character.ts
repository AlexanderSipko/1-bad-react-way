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


export type RenderCardProps = {
  character: Character;
  isFavorite: (id: number) => boolean;
  toggleFavorite: (id: number) => void;
};

export type CharacterListProps = {
  characters: Character[];
  isFavorite: (id: number) => boolean;
  toggleFavorite: (id: number) => void;
  className: string
};

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