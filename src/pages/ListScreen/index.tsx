import { useEffect, useState } from "react";
import { fetchQuestions } from "../../services/blissApi";
import { Question } from "../../services/types";
import { ListScreenContainer, QuestionCard, QuestionWrapper } from "./styles";

export const ListScreen = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const listQuestions = async () => {
    try {
      const data = await fetchQuestions();
      setQuestions(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listQuestions();
  }, []);

  return (
    <ListScreenContainer>
      <h1>List Screen</h1>
      <QuestionWrapper>
        {questions?.map((question) => (
          <QuestionCard key={question.id}>
            <h2>{question.question}</h2>
            <img src={question.image_url} alt={question.question} />
            <ul>
              {question.choices.map((choice) => (
                <li key={choice.choice}>
                  {choice.choice} - {choice.votes} votes
                </li>
              ))}
            </ul>
            <button>Vote</button>
          </QuestionCard>
        ))}
      </QuestionWrapper>
    </ListScreenContainer>
  );
};
