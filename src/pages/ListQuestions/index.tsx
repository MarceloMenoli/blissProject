import { useEffect, useState } from "react";
import { fetchQuestions } from "../../services/blissApi";
import { Question } from "../../services/types";
import { ListScreenContainer, QuestionCard, QuestionWrapper } from "./styles";
import { Search } from "../../components/SearchInput";

export const ListQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const listQuestions = async () => {
    try {
      const data = await fetchQuestions();
      setQuestions(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async (filter: string) => {
    try {
      const results = await fetchQuestions({ filter: filter });
      setQuestions(results);
    } catch (error) {
      console.error("Error fetching questions: ", error);
    }
  };

  useEffect(() => {
    listQuestions();
  }, []);

  return (
    <ListScreenContainer>
      <h1>List Screen</h1>
      <Search onSearch={(search) => handleSearch(search)} />
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
          </QuestionCard>
        ))}
      </QuestionWrapper>
    </ListScreenContainer>
  );
};
