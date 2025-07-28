import "./App.css";
import Icon from "./assets/illustration-woman-online-mobile.svg";
import Arrow from "./assets/icon-arrow-down.svg";
import Rotated from "./assets/Path2.png";
import { useState } from "react";

const Header = () => {
  return (
    <header>
      <img className="women-online" src={Icon} alt="woman-online" />
    </header>
  );
};

const Main = () => {
  return (
    <main>
      <h1 className="main-header">FAQ</h1>
    </main>
  );
};

const Container = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div
        className={`faq-item ${openIndex === 0 ? "open" : ""}`}
        onClick={() => toggleOpen(0)}
      >
        <span>How many team members can I invite?</span>
        <img
          className={`arrow ${openIndex === 0 ? "hidden" : ""}`}
          src={Arrow}
          alt="arrow icon"
        />
        <img
          className={`arrow ${openIndex === 0 ? "" : "hidden"}`}
          src={Rotated}
          alt="rotated arrow icon"
        />
      </div>
      {openIndex === 0 && (
        <p className="faq-answer">
          You can invite up to 5 team members to your project.
        </p>
      )}
      <span className="line"></span>

      <div
        className={`faq-item ${openIndex === 1 ? "open" : ""}`}
        onClick={() => toggleOpen(1)}
      >
        <span>What is the maximum file upload size?</span>
        <img
          className={`arrow ${openIndex === 1 ? "hidden" : ""}`}
          src={Arrow}
          alt="arrow icon"
        />
        <img
          className={`arrow ${openIndex === 1 ? "" : "hidden"}`}
          src={Rotated}
          alt="rotated arrow icon"
        />
      </div>
      {openIndex === 1 && (
        <p className="faq-answer">
          No more than 2GB. All files in your account must fit your allotted
          storage space.
        </p>
      )}
      <span className="line"></span>

      <div
        className={`faq-item-second ${openIndex === 2 ? "open" : ""}`}
        onClick={() => toggleOpen(2)}
      >
        <span>How do I reset my password?</span>
        <img
          className={`arrow ${openIndex === 2 ? "hidden" : ""}`}
          src={Arrow}
          alt="arrow icon"
        />
        <img
          className={`arrow ${openIndex === 2 ? "" : "hidden"}`}
          src={Rotated}
          alt="rotated arrow icon"
        />
      </div>
      {openIndex === 2 && (
        <p className="faq-answer">
          Click on 'Forgot Password' at login and follow instructions.
        </p>
      )}
      <span className="line"></span>

      <div
        className={`faq-item-second ${openIndex === 3 ? "open" : ""}`}
        onClick={() => toggleOpen(3)}
      >
        <span>Can I cancel my subscription?</span>
        <img
          className={`arrow ${openIndex === 3 ? "hidden" : ""}`}
          src={Arrow}
          alt="arrow icon"
        />
        <img
          className={`arrow ${openIndex === 3 ? "" : "hidden"}`}
          src={Rotated}
          alt="rotated arrow icon"
        />
      </div>
      {openIndex === 3 && (
        <p className="faq-answer">
          Yes, you can cancel anytime from your account settings.
        </p>
      )}
      <span className="line"></span>

      <div
        className={`faq-item-three ${openIndex === 4 ? "open" : ""}`}
        onClick={() => toggleOpen(4)}
      >
        <span>Do you provide additional support?</span>
        <img
          className={`arrow ${openIndex === 4 ? "hidden" : ""}`}
          src={Arrow}
          alt="arrow icon"
        />
        <img
          className={`arrow ${openIndex === 4 ? "" : "hidden"}`}
          src={Rotated}
          alt="rotated arrow icon"
        />
      </div>
      {openIndex === 4 && (
        <p className="faq-answer">
          Yes, premium users have access to 24/7 support.
        </p>
      )}
      <span className="line"></span>
    </div>
  );
};

const Line = () => {
  return <div className="line"></div>;
};

function App() {
  return (
    <div className="accordion">
      <Header />
      <Main />
      <Container />
      <Line />
    </div>
  );
}

export default App;
