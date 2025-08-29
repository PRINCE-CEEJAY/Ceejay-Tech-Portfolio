import { ArrowDown } from "lucide-react";
import React, { useState } from "react";

const Questions = [
  {
    id: 1,
    question: "Who is Ceejay Tech ?",
    answer:
      "Ceejay Tech is a leading web developer team committed to building responsive web apps",
  },
  {
    id: 2,
    question: "What does Ceejay Tech Specialize on",
    answer:
      "We specialize in building scalable web apps and training upcoming developers",
  },
  {
    id: 3,
    question: "Is Ceejay Tech open for collaboration ?",
    answer:
      "Yes, our team is open to accept your collaborations and any freelancing opportunities that are available in front end web development",
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
          className="flex flex-col gap-3 w-full bg-primary/30 mb-2 p-1 rounded-md"
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
