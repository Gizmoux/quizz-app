"use client";
import React from "react";
import data from "../data.json";
import { useState } from "react";

const Card = () => {
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [isTrue, setIsTrue] = useState(false);
  const [counter, setCounter] = useState(0);
  const handleClick = (option: string) => {
    if (option === data[indexQuestion].answer) {
      setIsTrue(true);
      setCounter(counter + 1);
      setIndexQuestion(indexQuestion + 1);
    } else {
      console.log("mauvaise réponse");
    }
  };

  return (
    <div>
      <h1> Question {indexQuestion + 1} !</h1>
      <p>Score: {counter}</p>

      <p>{data[indexQuestion].question}</p>

      <p>
        {data[indexQuestion].options.map((option) => {
          return (
            <button
              onClick={() => handleClick(option)}
              key={option}
              className="bg-red-400 hover:bg-red-500 rounded-md m-2 p-2 w-1/2 flex items-center justify-center"
            >
              {option}
            </button>
          );
        })}
      </p>
    </div>
  );
};

export default Card;
