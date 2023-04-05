import styled, { keyframes } from "styled-components";

export const ListScreenContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );

  > h1 {
    color: #fff;
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
