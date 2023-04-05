import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { ListScreen } from "../pages/ListScreen";

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/questions" element={<ListScreen />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
