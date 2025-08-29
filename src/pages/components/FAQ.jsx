import { ArrowDown } from "lucide-react";
import React, { useState } from "react";

const Questions = [
  {
    id: 1,
    question: "Is HTML really important to web dev ?",
    answer:
      "Yes, it is the core markup language that the browser uses to display information about your web page",
  },
  {
    id: 2,
    question: "How is React used for UI design",
    answer:
      "React is a frontend UI library developed by facebook engineers to facilitate fast and efficient UI building for the web page",
  },
  {
    id: 3,
    question: "which programming language is the most popular ?",
    answer:
      "There is no singular language that is more popular than the other but for some reasons python appears to be on top demand due to its simplicity and user friendly",
  },
];
const FAQ = () => {
  const [currentId, setCurrentId] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const handleClick = (id) => {
    if (id === null) return;
    setCurrentId(id);
    setIsActive((prev) => !prev);
  };
  return (
    <div className="flex flex-col bg-primary-foreground p-1 w-full rounded-md ">
      <h1 className="text-blue-800">Frequently Asked Questions</h1>
      {Questions.map((q) => (
        <div
          key={q.id}
          className="flex flex-col gap-3 w-full bg-primary/30 mb-2 p-2 rounded-md"
        >
          <div
            className="flex flex-row cursor-pointer text-red-800 justify-center text-xl"
            onClick={() => handleClick(q.id)}
          >
            <h4>{q.question}</h4>
            <ArrowDown
              className={`${isActive && currentId === q.id && "rotate-180"}`}
            />
          </div>
          {currentId === q.id && isActive && (
            <p className="text-primary">{q.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
