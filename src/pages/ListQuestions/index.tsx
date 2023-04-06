import { useEffect, useState } from "react";
import { fetchQuestions } from "../../services/blissApi";
import { Question } from "../../services/types";
import { useRef } from "react";
import {
  ListScreenContainer,
  LoadMoreButton,
  QuestionCard,
  QuestionWrapper,
} from "./styles";
import { Search } from "../../components/SearchInput";
import { useLocation, useNavigate } from "react-router-dom";

export const ListQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location?.search);
  const filter = searchParams.get("filter");
  const searchInputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    if (!filter) {
      searchInputRef.current?.focus();
    }
  }, [filter]);

  const handleLoadMoreClick = () => {
    listQuestions("", offset + 10);
  };

  const handleSearch = (search: string) => {
    navigate(`/questions?filter=${search}`);
    listQuestions(search);
  };

  const handleShare = () => {
    const options = {
      url: window.location.href,
    };
    navigate("/share", { state: options });
  };

  return (
    <ListScreenContainer>
      <h1>List Screen</h1>
      <div>
        <Search
          ref={searchInputRef}
          onSearch={(search) => handleSearch(search)}
        />
        <button onClick={handleShare}>Share</button>
      </div>
      <QuestionWrapper>
        {questions?.map((question, index) => (
          <QuestionCard
            onClick={() => navigate(`/question/${question.id}`)}
            key={index}
          >
            <h2>{question.question}</h2>
            <img src={question.image_url} alt={question.question} />
            <ul>
              {question?.choices?.map((choice, index) => (
                <li key={index}>
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
