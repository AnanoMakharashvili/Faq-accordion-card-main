import "./App.css";
import Icon from "./assets/illustration-woman-online-mobile.svg";
import Arrow from "./assets/icon-arrow-down.svg";
import Rotated from "./assets/Path2.png";
import { useState } from "react";

const accordionArr = [
  {
    question: "How many team members can I invite?",
    answer: "You can invite up to 5 team members to your project.",
    className: "faq-item",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
    className: "faq-item",
  },
  {
    question: "How do I reset my password?",
    answer: "Click on 'Forgot Password' at login and follow instructions.",
    className: "faq-item-second",
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel anytime from your account settings.",
    className: "faq-item-second",
  },
  {
    question: "Do you provide additional support?",
    answer: "Yes, premium users have access to 24/7 support.",
    className: "faq-item-three",
  },
];

function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      <header>
        <img className="women-online" src={Icon} alt="woman-online" />
      </header>
      <main>
        <h1 className="main-header">FAQ</h1>
        <div className="faq-container">
          {accordionArr.map((item, index) => (
            <div key={index} className="faq-item-wrapper">
              <div
                className={`${item.className} ${
                  openIndex === index ? "open" : ""
                }`}
                onClick={() => toggleOpen(index)}
              >
                <span>{item.question}</span>
                <img
                  className={`arrow ${openIndex === index ? "hidden" : ""}`}
                  src={Arrow}
                  alt="arrow icon"
                />
                <img
                  className={`arrow ${openIndex === index ? "" : "hidden"}`}
                  src={Rotated}
                  alt="rotated arrow icon"
                />
              </div>

              {openIndex === index && (
                <p className="faq-answer">{item.answer}</p>
              )}

              <span className="line"></span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
