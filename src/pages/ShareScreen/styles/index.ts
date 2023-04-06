import styled from "styled-components";

export const ShareForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
  background: #d5f29d;
  padding: 30px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 1rem;
  width: 100%;
  max-width: 600px;

  button{
    font-size: 1rem;
    padding: 10px 0;
    border-radius: 5px;
  }
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  font-size: 0.8rem;
`;
