import React from "react";
import QuizDetail from "./Pages/QuizDetail";
import QuizResult from "./Pages/QuizResult";
import Quiz from "./Pages/Quiz";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuizDetail />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quizResult" element={<QuizResult />} />
        </Routes>
      </BrowserRouter>
      {/* <Quiz /> */}
      {/* <QuizResult /> */}
      {/* <QuizDetail /> */}
    </div>
  );
};

export default App;
