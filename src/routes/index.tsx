import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { ListQuestions } from "../pages/ListQuestions";
import { QuestionDetail } from "../pages/QuestionDetail";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/questions" element={<ListQuestions />} />
      <Route path="/questions/:id" element={<QuestionDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
