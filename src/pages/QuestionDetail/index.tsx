import { useEffect, useState } from "react";
import { Question } from "../../services/types";
import { useNavigate, useParams } from "react-router-dom";
import { fetchQuestion, updateQuestion } from "../../services/blissApi";
import {
  ActionButton,
  ChoicesContainer,
  DetailQuestionContainer,
  QuestionContainer,
  QuestionText,
} from "./styles";

export const QuestionDetail = () => {
  const [question, setQuestion] = useState<Question>();
  const { id } = useParams();
  const navigate = useNavigate();

  const getQuestion = async () => {
    try {
      const data = await fetchQuestion(id);
      setQuestion(data);
    } catch (error) {
      console.log(error);
    }
  };

  const voteQuestion = async (choiceIndex: number) => {
    try {
      const updatedQuestion = { ...question };
      updatedQuestion?.choices
        ? (updatedQuestion.choices[choiceIndex].votes += 1)
        : null;
      const response = await updateQuestion(updatedQuestion, id);
      setQuestion(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuestion();
  }, []);

  const handleShare = () => {
    const options = {
      url: window.location.href,
    };
    navigate("/share", { state: options });
  };

  return (
    <DetailQuestionContainer>
      <h1>Question Detail</h1>
      {question && (
        <QuestionContainer>
          <>
            <QuestionText>{question.question}</QuestionText>
            <ChoicesContainer>
              {question?.choices?.map((choice, index) => (
                <div key={choice.choice}>
                  <div>
                    <span>{choice.choice}</span>
                    <span>{choice.votes}</span>
                  </div>
                  <button onClick={() => voteQuestion(index)}>Vote</button>
                </div>
              ))}
            </ChoicesContainer>
          </>
        </QuestionContainer>
      )}
      <div style={{ display: "flex", gap: "10px" }}>
        <ActionButton onClick={() => navigate(-1)}>Back to list</ActionButton>
        <ActionButton onClick={handleShare}>Share</ActionButton>
      </div>
    </DetailQuestionContainer>
  );
};
