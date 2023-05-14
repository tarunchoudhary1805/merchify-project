import React, { useState } from "react";
import "./index.css";
import girl from "./../assets/girl.png";
import QuizRules from "./QuizRules";
import Comment from "./../Components/Icons/Comment";
import Bookmark from "./../Components/Icons/Bookmark";
import Challenge from "../Components/Icons/Challenge";
import Star from "../Components/Icons/Star";
import Certificate from "../Components/Icons/Certificate";
import Questions from "../Components/Icons/Questions";
import Time from "../Components/Icons/Time";
import Attempt from "../Components/Icons/Attempt";

const QuizDetail = () => {
  const [quizRule, setQuizRule] = useState(false);
  return (
    <>
      <div
        onClick={() => setQuizRule(false)}
        className={`quiz_details_page   m-0 p-0 ${quizRule ? "overlay" : ""}`}
      >
        {/* background image */}
        <div className="hero_section overlay h-44 flex px-5 ">
          <div className="w-4/6">
            <h2 className="font-extrabold text-2xl py-8">
              The <span>Daily</span> MS <span>Excel</span> Quiz
            </h2>
          </div>
          <div className="w-2/6   absolute right-0">
            <img src={girl} className="h-44" alt="girl thinking" />
          </div>
        </div>
        <section className="details_section px-5">
          <h3 className="text-2xl font-bold my-2 ">The Daily MS Excel Quiz</h3>
          <div className="flex justify-between">
            <div>
              <p className="text-xs font-bold flex my-2">
                <Comment /> <span className="ml-2">Leave a Comment</span>
              </p>
              <p className="text-xs font-bold flex my-2">
                <Bookmark /> <span className="ml-2">Save Quiz</span>
              </p>
              <p className="text-xs font-bold flex my-2">
                <Challenge /> <span className="ml-2">Challenge a Friend</span>
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold flex my-2">
                <Star /> <Star /> <Star /> <Star />
                <Star />{" "}
              </p>
              <p className="text-xs font-semibold">3 Ratings(5.0)</p>
            </div>
          </div>
          <div className="quiz_para my-3">
            <p className="text-sm font-semibold ">
              This Microsoft Excel Proficieny Test is desgined to evaluate an
              individual's knowledge and skills in using Microsoft Excel.{" "}
              <span className="font-semibold">Read More</span>
            </p>
          </div>
          <div>
            <h4 className="text-md font-bold">This Quiz Includes</h4>
            <p className="flex text-sm font-semibold my-2">
              {" "}
              <Certificate />
              <span className="mx-1">50% Passing Percentage</span>
            </p>
            <p className="flex text-sm font-semibold my-2">
              <Questions />
              <span className="mx-1">5 Questions</span>
            </p>
            <p className="flex text-sm font-semibold my-2">
              <Time />
              <span className="mx-1">10 Mins</span>
            </p>
            <p className="flex text-sm font-semibold my-2">
              <Attempt />
              <span className="mx-1">1 Attempt Daily</span>
            </p>
          </div>
        </section>
      </div>
      <div className="text-center border-t-2 mt-3 mx-0">
        <button
          className="rounded-3xl primary-button font-bold  px-5 py-1 my-4 text-center"
          onClick={() => setQuizRule(true)}
        >
          Take Quiz
        </button>
      </div>
      {quizRule && <QuizRules />}
    </>
  );
};

export default QuizDetail;
