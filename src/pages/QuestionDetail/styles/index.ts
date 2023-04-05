import styled from "styled-components";

export const DetailQuestionContainer = styled.div`
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

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  background: lightslategray;
  padding: 30px;
  border-radius: 30px;
`;

export const QuestionText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const ChoiceText = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const VoteButton = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #1e90ff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0077b6;
  }
`;

export const ChoicesContainer = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 10px;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    font-size: 16px;
    color: #333;
    justify-content: space-between;
  }

  span {
    margin-right: 10px;
  }

  button {
    background-color: #4caf50;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 8px 12px;
    font-size: 16px;
    cursor: pointer;
  }
`;

export const GoBackButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41; /* cor de fundo ao passar o mouse */
  }
`;
