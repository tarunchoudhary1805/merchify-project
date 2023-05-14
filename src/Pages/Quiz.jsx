import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();
  const [quizQuestion, setQuizQuestion] = useState([
    {
      id: 1,
      question_title: "Question1",
      Question_answer: [
        {
          option: "A",
          answer_option: "option11",
        },
        { option: "B", answer_option: "option12" },
        { option: "C", answer_option: "option13" },
        { option: "D", answer_option: "option14" },
      ],
      correct: "A",
    },
    {
      id: 2,
      question_title: "Question2",
      Question_answer: [
        { option: "A", answer_option: "option21" },
        { option: "B", answer_option: "option22" },
        { option: "C", answer_option: "option23" },
        { option: "D", answer_option: "option24" },
      ],
      correct: "A",
    },
    {
      id: 3,
      question_title: "Question3",
      Question_answer: [
        { option: "A", answer_option: "option31" },
        { option: "B", answer_option: "option32" },
        { option: "C", answer_option: "option33" },
        { option: "D", answer_option: "option34" },
      ],
      correct: "A",
    },
    {
      id: 4,
      question_title: "Question4",
      Question_answer: [
        { option: "A", answer_option: "option41" },
        { option: "B", answer_option: "option42" },
        { option: "C", answer_option: "option43" },
        { option: "D", answer_option: "option44" },
      ],
      correct: "A",
    },
    {
      id: 5,
      question_title: "Question5",
      Question_answer: [
        { option: "A", answer_option: "option51" },
        { option: "B", answer_option: "option52" },
        { option: "C", answer_option: "option53" },
        { option: "D", answer_option: "option54" },
      ],
      correct: "A",
    },
  ]);

  const [step, setStep] = useState(0);
  const [seconds, setSeconds] = useState("00");
  const [minutes, setMinutes] = useState("01");
  const [result, setResult] = useState(0);
  const [correct, setCorrect] = useState();
  const [value, setValue] = useState();
  const [check, setCheck] = useState(false);
  const [op, setOp] = useState();
  console.log(result);
  function updateTime() {
    if (minutes == 0 && seconds == 0) {
      //reset
      return submit();
    } else {
      if (seconds == 0) {
        setMinutes((minutes) => minutes - 1);
        if (minutes == 0) setMinutes("00");
        setSeconds(59);
      } else {
        setSeconds((seconds) => seconds - 1);
      }
    }
  }

  useEffect(() => {
    // use set timeout and be confident because updateTime will cause rerender
    // rerender mean re call this effect => then it will be similar to how setinterval works
    // but with easy to understand logic
    const token = setTimeout(updateTime, 1000);

    return function cleanUp() {
      clearTimeout(token);
    };
  });

  const submit = () => {
    let res = result;
    if (value?.length > 0 && correct == value) {
      console.log("submit");
      res += 1;
      setResult(res);
      setValue("");
      setCorrect("");
      setOp(undefined);
    }
    localStorage.setItem("result", JSON.stringify(res));
    localStorage.setItem("quiz_size", JSON.stringify(quizQuestion.length));
    let ans = 60 - seconds;
    localStorage.setItem("min", JSON.stringify(minutes));
    localStorage.setItem("sec", JSON.stringify(ans));
    console.log("submittedd");
    navigate("/quizResult");
  };
  console.log(op);
  const setNext = () => {
    setStep(step + 1);
    console.log(correct + " " + value);
    if (value?.length > 0 && correct == value) {
      setResult(result + 1);
      setOp(undefined);
    }
  };

  const handleChange = (e, correct_answer) => {
    e.preventDefault();
    console.log(e.target.value);
    console.log(e.target.name);
    console.log(correct_answer);
    setValue(e.target.value);
    setCorrect(correct_answer);
    setOp(e.target.value);
    setCheck(true);
  };

  // setInterval(updateTime, 1000);

  return (
    <div className="px-5 py-5">
      {quizQuestion.slice(step, step + 1).map((quiz) => (
        <>
          <div key={quiz.id} className="flex justify-between">
            <button className="secondary-button text-sm font-bold rounded-full text-white px-8 ">
              {step + 1}/{quizQuestion.length}
            </button>
            <button className="primary-button text-sm rounded-full text-white px-5 py-1">
              {minutes} : {seconds}
            </button>
          </div>
          <div className="flex flex-col justify-between align-bottom">
            <div className="my-3">
              <p className="text-sm font-semibold">{quiz.question_title}</p>
            </div>
            <div>
              {quiz.Question_answer.map((ans, i) => (
                <div
                  key={ans}
                  className=" flex justify-between border shadow-md my-3 py-3 px-3 rounded"
                >
                  <div>
                    <span className="border text-xs font-bold border-black shadow-md py-1 mr-3 px-2 rounded">
                      {ans.option}
                    </span>
                    <span className="text-xs font-semibold">
                      {ans.answer_option}
                    </span>
                  </div>
                  <div>
                    {" "}
                    <span>
                      <input
                        type="radio"
                        value={ans.option}
                        name={`ans${quiz.id}`}
                        id={`${quiz.id}${i}`}
                        autocomplete="off"
                        // checked={false}
                        onChange={(e) => handleChange(e, quiz.correct)}
                        className="text-green"
                      />
                    </span>
                  </div>{" "}
                </div>
              ))}
            </div>
          </div>
        </>
      ))}
      <div className="absolute left-0 right-0 bottom-2 border-t-2 text-center">
        <div className="text-center my-2">
          {step + 1 <= 4 && (
            <button
              onClick={setNext}
              className="rounded-full text-white px-5 py-1  primary-button"
            >
              Next
            </button>
          )}
          {step + 1 == 5 && (
            <button
              onClick={submit}
              className="rounded-full text-white px-5 py-1 primary-button"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
