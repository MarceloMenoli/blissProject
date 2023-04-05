import { useEffect, useState } from "react";
import { Question } from "../../services/types";
import { useParams } from "react-router-dom";
import { fetchQuestion } from "../../services/blissApi";
import {
  ChoicesContainer,
  DetailQuestionContainer,
  QuestionContainer,
  QuestionText,
} from "./styles";

export const QuestionDetail = () => {
  const [question, setQuestion] = useState<Question>();
  const { id } = useParams();

  const getQuestion = async () => {
    try {
      const data = await fetchQuestion(id);
      setQuestion(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuestion();
  }, []);

  return (
    <DetailQuestionContainer>
      <h1>Question Detail</h1>
      {question && (
        <QuestionContainer>
          <>
            <QuestionText>{question.question}</QuestionText>
            <ChoicesContainer>
              {question?.choices?.map((choice) => (
                <div key={choice.choice}>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span>{choice.choice}</span>
                    <span>{choice.votes}</span>
                  </div>
                  <button onClick={() => console.log(choice)}>Vote</button>
                </div>
              ))}
            </ChoicesContainer>
          </>
        </QuestionContainer>
      )}
    </DetailQuestionContainer>
  );
};
