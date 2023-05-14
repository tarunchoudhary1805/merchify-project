import React, { useEffect, useState } from "react";
import LeftArrow from "../Components/Icons/LeftArrow";
import ArrowTrendingDown from "../Components/Icons/ArrowTrendingDown";
import ArrowTrendingUp from "../Components/Icons/ArrowTrendingUp";

const QuizResult = () => {
  const [val, setVal] = useState("");
  const [strr, setStrr] = useState("");
  const [min, setMin] = useState(JSON.parse(localStorage.getItem("min")) || 0);
  const [sec, setSec] = useState(JSON.parse(localStorage.getItem("sec")) || 0);
  const res = JSON.parse(localStorage.getItem("result"));
  const quiz_size = JSON.parse(localStorage.getItem("quiz_size"));
  useEffect(() => {
    let x = (res * 100) / quiz_size;
    setVal(x);
    let y = "";
    if (val == 100) {
      y = "Wow!! Excellent performance";
    } else if (val > 70) {
      y = "Good Performance";
    } else if (val > 0) {
      y = "Oh! You can do better";
    }
    setStrr(y);
  }, []);
  return (
    <div>
      <nav className="bg-white h-[10vh] py-5 px-5 border-b border-b-2 shadow-xl">
        <LeftArrow />
      </nav>
      <div className="bg-primary h-[70vh]">
        <h2 className="py-4 font-bold text-lg text-center">
          The Daily MS Excel Quiz
        </h2>
        <div className="bg-white rounded-lg shadow-md mx-6 p-3 text-center ">
          <div>
            {" "}
            <h6 className="text-md font-semibold">You Scored:</h6>
            <div className="flex justify-center">
              <ArrowTrendingUp />
              <h1 className="text-primary mb-3 ">{val}%</h1>
              <ArrowTrendingDown />
            </div>
            <h3 className="text-md font-bold ">{strr}</h3>
          </div>

          <p className="text-xs font-semibold pt-3 pb-1 px-3">
            Success is not final, failure is not fatal; It is the courage to
            continue that counts.
          </p>
        </div>
        <div className=" px-8 py-5 flex justify-between">
          <div>
            <h2 className="text-md font-bold">Your Score</h2>
            <h1 className="text-primary">
              {res}/{quiz_size}
            </h1>
            <p className="text-xs font-bold">Avg: 2 marks</p>
          </div>
          <div>
            <h2 className="text-md font-bold">Time Taken</h2>
            <h1 className="text-primary">
              {min}:{sec} min
            </h1>
            <p className="text-xs font-bold">Avg: 1:59 mins</p>
          </div>
        </div>
        <div>
          <h2 className="text-primary text-md text-center my-3">QuizApp</h2>
          <p className="text-xs font-bold text-center pt-1 pb-5">
            Share it with your friends!
          </p>
        </div>

        <div className="absolute left-0 right-0 bottom-2 border-t-2 text-center">
          <div className="text-center my-5">
            <button className="primary-button rounded-full px-5 py-1">
              Answers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
