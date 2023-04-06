import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { ListQuestions } from "../pages/ListQuestions";
import { QuestionDetail } from "../pages/QuestionDetail";
import { useEffect, useState } from "react";
import { OfflineScreen } from "../pages/OfflineScreen";
import { ShareScreen } from "../pages/ShareScreen";

export const Router = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  const navigate = useNavigate();
  useEffect(() => {
    if (window.navigator.onLine) {
      setIsOnline(true);
      // navigate(-1);
    } else {
      setIsOnline(false);
    }
  }, []);

  return (
    <Routes>
      {isOnline ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<ListQuestions />} />
          <Route path="/question/:id" element={<QuestionDetail />} />
          <Route path="/share" element={<ShareScreen />} />
          <Route path="*" element={<NotFound />} />
        </>
      ) : (
        <Route path="*" element={<OfflineScreen />} />
      )}
    </Routes>
  );
};
