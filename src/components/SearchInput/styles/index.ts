import styled from "styled-components"

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  padding: 0.5rem;
  border-radius: 10px;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
`;

export const SearchButton = styled.button`
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  }
`;