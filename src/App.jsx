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
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="faq-container">
      <span className="faq-item">
        How many team members can I invite?
        <img src={Arrow} alt="arrow icon" />
      </span>
      <span className="line"></span>

      <div className="faq-item" onClick={toggleOpen}>
        <span>What is the maximum file upload size?</span>

        <img
          className={`arrow ${isOpen ? "hidden" : ""}`}
          src={Arrow}
          alt="arrow icon"
        />
        <img
          className={`arrow ${isOpen ? "" : "hidden"}`}
          src={Rotated}
          alt="rotated arrow icon"
        />
      </div>

      {isOpen && (
        <p className="faq-answer">
          No more than 2GB. All files in your account <br /> must fit your
          allotted storage space.
        </p>
      )}

      <span className="line"></span>

      <span className="faq-item-second">
        How do I reset my password?
        <img src={Arrow} alt="arrow icon" />
      </span>
      <span className="line"></span>
      <span className="faq-item-second">
        Can I cancel my subscription?
        <img src={Arrow} alt="arrow icon" />
      </span>
      <span className="line"></span>
      <span className="faq-item-three">
        Do you provide additional support?
        <img src={Arrow} alt="arrow icon" />
      </span>
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
