import React from "react";
import { useNavigate } from "react-router-dom";
import Time from "../Components/Icons/Time";
import Questions from "../Components/Icons/Questions";
import Certificate from "../Components/Icons/Certificate";

const QuizRules = () => {
  const navigate = useNavigate();
  const submit = () => {
    navigate("/quiz");
  };
  return (
    <div className="quiz_rules py-5 px-5 rounded-t-2xl shadow-inner shadow-2xl border border-1">
      <h1 className="text-2xl font-bold">Quiz Rules</h1>
      <div>
        <div className="flex align-middle">
          <div className="my-auto ">
            <p className="">
              {" "}
              <Time />
            </p>
          </div>
          <div className="mx-2 font-semibold my-2">
            <h2 className="font-bold ">10 Mins</h2>
            <p className="text-sm">Keep in mind that it's a time-bound quiz.</p>
          </div>
        </div>
        <div className="flex align-middle">
          <div className="my-auto ">
            <p className="">
              {" "}
              <Questions />
            </p>
          </div>
          <div className="mx-2 font-semibold my-2">
            <h2 className="font-bold ">5 Questions</h2>
            <p className="text-sm">Keep in mind that it's a time-bound quiz.</p>
          </div>
        </div>
        <div className="flex align-middle">
          <div className="my-auto ">
            <p className="">
              {" "}
              <Certificate />
            </p>
          </div>
          <div className="mx-2 font-semibold my-2">
            <h2 className="font-bold">50% Passing Criteria</h2>
            <p className="text-sm">Keep in mind that it's a time-bound quiz.</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-xs text-center my-2 border py-2 border-2 text-gray-600">
          This Quiz can only be attempted once daily
        </p>
      </div>
      <div className="text-center">
        <button
          className="rounded-3xl primary-button font-bold  px-8 py-1 my-1 text-center"
          onClick={submit}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default QuizRules;
