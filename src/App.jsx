import "./App.css";
import { useState, useEffect } from "react";
import { superPower } from "./data/superPower.js";

//  MAKE A DOCUMENTATION FOR THIS APP GAME WEB APP
// CHANGE THE CHOICES TO IMAGES AND WHEN CLICK IT HAS AN VOICE LINE THAT SPEAK THE MESSAGE ALSO IN MOBILE VIEW MAKE IT RESPONSIVE

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [isClicked, setIsClicked] = useState(false);
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState({
    power: "",
    img: "",
    description: "",
  });

  const item = superPower.find((q) => q.id === currentQuestion);

  const isDone = currentQuestion === 15;

  useEffect(() => {
    const total = Object.values(answers).reduce((acc, val) => acc + val, 0);

    if (total <= 230 && total >= 150)
      setResult({
        power: "Invisibility",
        img: "/images/rInvisibility.jpg",
        description:
          "ou can slip away unnoticed when you want. People never realize when you vanish from events, meetings, or lectures.",
      });
    else if (total <= 330 && total >= 240)
      setResult({
        power: "Flying",
        img: "/images/rFlying.jpg",
        description:
          "You move faster than others and always stay ahead. You’re the first to try new trends and explore new places.",
      });
    else if (total <= 420 && total >= 340)
      setResult({
        power: "Super Brain",
        img: "/images/rBrainpower.jpg",
        description:
          "You’re brilliant and solve problems in seconds. You love challenges, planning, and using your sharp humor.",
      });
    else if (total <= 510 && total >= 430)
      setResult({
        power: "Mind Reading",
        img: "/images/rMindreading.jpg",
        description:
          "You sense when something’s wrong, help others, and even influence decisions. People trust you deeply.",
      });
    else if (total > 510)
      setResult({
        power: "Money Magnet",
        img: "/images/rMoneymagnet.jpg",
        description:
          "You always attract opportunities and never run out of money. You know how to spend wisely and earn effortlessly.",
      });
  }, [answers]);

  function speak(text) {
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    const voices = speechSynthesis.getVoices();
    const googleVoice = voices.find(
      (v) => v.lang === "en-US" && v.name.includes("Google")
    );
    if (googleVoice) utterance.voice = googleVoice;

    utterance.pitch = 1;
    utterance.rate = 0.9;
    utterance.volume = 1;

    speechSynthesis.speak(utterance);
  } // Fixed it when the picture is click it will speak but when other button are clicked it will stop speaking

  return (
    <>
      {step === 1 ? (
        <div className="page">
          <div className="container">
            <div className="row-one">
              <div className="number-box">
                <span className="question-id">{item.id}</span>
              </div>
            </div>
            <div className="question-box row-two">
              <h1 className="question-text">{item.question}</h1>
            </div>
            <div className="choices-grid">
              {Object.values(item.choices).map((choice, index) => (
                <div
                  key={index}
                  className={`choice-container ${
                    answers[item.id] === choice.points ? "selected" : ""
                  }`}
                >
                  <button
                    className="choice-btn"
                    onClick={() => {
                      setIsClicked(true);
                      setAnswers((prev) => ({
                        ...prev,
                        [item.id]: choice.points,
                      }));
                      speak(choice.text);
                    }}
                  >
                    {choice.img && (
                      <img
                        src={choice.img}
                        alt={choice.text}
                        className="choice-img"
                      />
                    )}
                  </button>
                </div>
              ))}
            </div>
            <button
              className={isClicked ? "next-btn" : "next-btn-disabled"}
              onClick={() => {
                setCurrentQuestion((prev) => Math.min(prev + 1, 15));
                setIsClicked(false);
                isDone && setStep(2);
                console.log(answers);
              }}
            >
              {currentQuestion < 15 ? "Next" : `Show Result`}
            </button>
          </div>
        </div>
      ) : (
        <div className="result-container">
          <h1 className="result-title">
            <div>Your Super Power is: </div>
            <div className="result-power">{result.power}</div>
          </h1>
          <div className="result-image-container">
            <img src={result.img} alt={result.power} className="result-img" />
          </div>
          <div className="result-description">{result.description}</div>
          <button
            className="restart-btn"
            onClick={() => {
              setCurrentQuestion(1);
              setStep(1);
              setAnswers({});
            }}
          >
            Restart Quiz
          </button>
        </div>
      )}
    </>
  );
}

export default App;
