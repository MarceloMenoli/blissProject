import { useEffect, useState } from "react";
import { fetchQuestions } from "../../services/blissApi";
import { Question } from "../../services/types";
import {
  ListScreenContainer,
  LoadMoreButton,
  QuestionCard,
  QuestionWrapper,
} from "./styles";
import { Search } from "../../components/SearchInput";
import { useNavigate } from "react-router-dom";

export const ListQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const navigate = useNavigate();

  const listQuestions = async (
    filter: string = "",
    newOffset = 0,
    limit = 10
  ) => {
    const lowercaseValue = filter.toLowerCase();

    try {
      const data = await fetchQuestions({
        filter: lowercaseValue,
        offset: newOffset,
        limit,
      });
      setQuestions([...questions, ...data]);
      setOffset(newOffset);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listQuestions();
  }, []);

  const handleLoadMoreClick = () => {
    listQuestions("", offset + 10);
  };

  return (
    <ListScreenContainer>
      <h1>List Screen</h1>
      <Search onSearch={(search) => listQuestions(search)} />
      <QuestionWrapper>
        {questions?.map((question) => (
          <QuestionCard
            onClick={() => navigate("/question/")}
            key={question.id}
          >
            <h2>{question.question}</h2>
            <img src={question.image_url} alt={question.question} />
            <ul>
              {question?.choices?.map((choice) => (
                <li key={choice.choice}>
                  {choice.choice} - {choice.votes} votes
                </li>
              ))}
            </ul>
          </QuestionCard>
        ))}
      </QuestionWrapper>
      <LoadMoreButton onClick={handleLoadMoreClick}>Load more</LoadMoreButton>
    </ListScreenContainer>
  );
};
