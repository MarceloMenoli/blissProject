import styled from "styled-components";

export const ShareWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  > button {
    padding: 10px 25px;
    border-radius: 10px;
    font-size: 1rem;
    transition: background 0.5s;
    :hover {
      background: #ccc;
      opacity: 0.8;
    }
  }
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

export const QuestionCard = styled.div`
  flex-basis: 20%;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;

  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  img {
    margin-bottom: 20px;
    max-width: 100%;
  }

  ul {
    margin-top: 20px;
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 16px;
    margin-bottom: 5px;
  }

  button {
    background-color: #0070f3;
    border-radius: 5px;
    border: none;
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
    padding: 10px;
  }
`;

export const LoadMoreButton = styled.button`
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  :hover {
    background-color: #014185;
  }
`;
