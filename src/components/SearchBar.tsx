import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchButtonProps, SearchInputProps, Props} from '@/types/character'

export const SearchInput = ({ 
  value, 
  onChange, 
  placeholder = "Search...", 
  onEnter 
}: SearchInputProps) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && onEnter) onEnter();
      }}
    />
  );
};

export const SearchButton = ({ 
  onClick, 
  loading, 
  children = "Search" 
}: SearchButtonProps) => {
  return (
    <Button onClick={onClick} disabled={loading}>
      {loading ? "Searching..." : children}
    </Button>
  );
};


export const SearchBar = ({ value, onChange, onSearch, loading, placeholder="search", buttonText = "Search" }: Props) => {
  return (
    <div className="flex gap-2">
      <SearchInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onEnter={onSearch}
      />
      {onSearch && (
         <SearchButton onClick={onSearch} loading={loading}>
          {buttonText}
        </SearchButton>
      )}
    </div>
  );
};
