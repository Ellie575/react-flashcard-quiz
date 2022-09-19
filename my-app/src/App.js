import React, { useState, useEffect } from "react";
import FlashcardList from "./FlashcardList";
import "./App.css";
import axios from "axios";

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=10").then((res) => {
      setFlashcards(
        res.data.results.map((questionItem, index) => {
          const answer = questionItem.correct_answer;
          const options = [...questionItem.incorrect_answers, answer];
          return {
            id: `${index}-${Date.now()}`,
            question: questionItem.question,
            answer: answer,
            options: options.sort(() => Math.random() - 0.5),
          };
        })
      );
    });
  }, []);

  return <FlashcardList flashcards={flashcards} />;
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: `What is 2 + 2?`,
    answer: `4`,
    options: [`1`, `2`, `3`, `4`],
  },
  {
    id: 2,
    question: `What is 10 x 10?`,
    answer: `100`,
    options: [`1`, `10`, `100`, `1000`],
  },
];

export default App;
