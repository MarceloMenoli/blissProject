import { useState } from "react";
import { SearchButton, SearchContainer, SearchInput } from "./styles";

interface SearchProps {
  onSearch: (query: string) => void;
}

export const Search = ({ onSearch }: SearchProps) => {
  const [query, setQuery] = useState<string>("");

  const handleSearch = () => {
    onSearch(query);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchContainer>
  );
};
