"use client";

import { useEffect, useState } from "react";
import "./globals.css";
import axios from "axios";

const TsAnswers = [
  "A. Long-Term Evolution",
  "C. Local Telephone Exchange", // Corrected answer (original was B)
  "B. To provide connectivity between mobile devices and the core network",
  "A. Voice over Internet Protocol",
  "A. MIMO (Multiple Input Multiple Output)",
  "B. To monitor and control network elements",
  "B. SIP (Session Initiation Protocol)",
  "B. To authenticate the subscriber to the network",
  "A. Fiber-to-the-Home",
  "A. Bluetooth",
  // EMBEDDED PRIMARY ENGINEERING
  "B. Perform specific tasks within a larger system",
  "C. High-speed processing", // Corrected answer (original was D)
  "B. C and assembly",
  "B. Execute instructions and control peripherals",
  "B. Software that controls hardware",
  "C. Industrial control system",
  "A. Real-Time Operating System",
  "A. Bluetooth",
  "B. To handle external events promptly",
  "B. Development",
  // ROBOTICS ENGINEERING
  "B. Reducing human labor",
  "C. C++ and MATLAB",
  "B. Collect environmental data",
  "C. Humanoid robot",
  "B. Enabling robots to see and interpret the environment",
  "A. Robotic Operating System",
  "A. Actuator",
  "C. Increased safety for human-robot interaction",
  "B. Enabling robots to learn and make decisions",
  "C. Manipulate objects",
  // NETWORK ENGINEERING
  "C. Managing and maintaining computer networks",
  "C. Switch",
  "B. Star",
  "B. Filter incoming and outgoing network traffic",
  "C. SSH",
  "C. Routes data between different networks",
  "B. 32-bit addresses",
  "B. Prioritize network traffic",
  "C. SMTP",
  "C. Local Area Network",
];

const sectionIndices = {
  ts: [0, 9],
  embedded: [10, 19],
  robotic: [20, 29],
  network: [30, 39],
};

function App() {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [scores, setScores] = useState(null);

  useEffect(() => {
    axios
      .get("/api")
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleRadioClick = (e, questionIndex) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: e.target.value,
    }));
  };

  const calculateScores = () => {
    const calculateSectionScore = (answers, start, end) => {
      let score = 0;
      for (let i = start; i <= end; i++) {
        if (userAnswers[i] === answers[i]) {
          score++;
        }
      }

      return score;
    };

    const tsScore = calculateSectionScore(TsAnswers, ...sectionIndices.ts);
    const embeddedScore = calculateSectionScore(
      TsAnswers,
      ...sectionIndices.embedded
    );
    const roboticScore = calculateSectionScore(
      TsAnswers,
      ...sectionIndices.robotic
    );
    const networkScore = calculateSectionScore(
      TsAnswers,
      ...sectionIndices.network
    );

    setScores({
      tsScore,
      embeddedScore,
      roboticScore,
      networkScore,
    });
  };

  const handleSubmit = () => {
    calculateScores();
  };

  const HandleFuture = ({ scores }) => {
    if (!scores) return null;

    if (
      scores.tsScore > scores.embeddedScore &&
      scores.tsScore > scores.roboticScore &&
      scores.tsScore > scores.networkScore
    ) {
      return (
        <div>
          <h1 className=" flex flex-col gap-5 text-center text-semibold py-10 items-center">You have a Bright Future in Telecom Services</h1>
        </div>
      );
    } else if (
      scores.embeddedScore > scores.tsScore &&
      scores.embeddedScore > scores.roboticScore &&
      scores.embeddedScore > scores.networkScore
    ) {
      return (
        <div>
          <h1 className=" flex flex-col gap-5 text-center text-semibold py-10 items-center">You have a Bright Future in Embedded Systems</h1>
        </div>
      );
    } else if (
      scores.roboticScore > scores.tsScore &&
      scores.roboticScore > scores.embeddedScore &&
      scores.roboticScore > scores.networkScore
    ) {
      return (
        <div>
          <h1 className=" flex flex-col gap-5 text-center text-semibold py-10 items-center">You have a Bright Future in Robotics</h1>
        </div>
      );
    } else if (
      scores.networkScore > scores.tsScore &&
      scores.networkScore > scores.embeddedScore &&
      scores.networkScore > scores.roboticScore
    ) {
      return (
        <div>
          <h1 className=" flex flex-col gap-5 text-center text-semibold py-10 items-center">You have a Bright Future in Network Services</h1>
        </div>
      );
    } else {
      return (
        <div>
          
        </div>
      );
    }
  };

  return (
    <>
      <h1 className="text-center items-center py-10">Career Quiz</h1>
      <p className="text-center items-center py-10">Questions: {questions.length}</p>
      {questions.map((question, index) => (
        <div key={question.id} className="py-5 pl-5 question">
          <p>Question {index + 1}</p>
          <h3 className="question">{question.question}</h3>
          <ul className="options">
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  onChange={(e) => handleRadioClick(e, index)}
                  checked={userAnswers[index] === option}
                />
                <label>{option}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="text-center items-center py-10">
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {scores && (
        <div className="scores flex flex-col gap-5 text-center text-semibold py-10 items-center">
          <h2>Scores:</h2>
          <p>TS Score: {scores.tsScore + 1}</p>
          <p>Embedded Score: {scores.embeddedScore}</p>
          <p>Robotic Score: {scores.roboticScore}</p>
          <p>Network Score: {scores.networkScore}</p>
        </div>
      )}
      <HandleFuture  scores={scores} />
    </>
  );
}

export default App;
