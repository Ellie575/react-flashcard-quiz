import React, { useState } from "react";
import FlashcardList from "./FlashcardList.js";

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
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
