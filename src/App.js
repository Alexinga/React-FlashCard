import { useState } from "react";
import "./App.css";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function App() {
  return (
    <div>
      <FlashCard />
    </div>
  );
}

function FlashCard() {
  return (
    <div className="grid">
      {questions.map((question) => (
        <SingleCard questionQ={question} key={question.id} />
      ))}
    </div>
  );
}

// 3 steps of defining State

// 1. Define a state variable
// 2. Use state variable
// 3. Update it

function SingleCard({ questionQ }) {
  const [selectID, setSelectID] = useState(null);

  function handleChange(id) {
    setSelectID(id !== selectID ? id : null);
  }

  return (
    <div
      onClick={() => handleChange(questionQ.id)}
      className={questionQ.id === selectID ? "grid-item selected" : "grid-item"}
    >
      <h4>
        {questionQ.id === selectID ? questionQ.answer : questionQ.question}
      </h4>
    </div>
  );
}
export default App;
