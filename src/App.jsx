import "./App.css";
import Icon from "./assets/illustration-woman-online-mobile.svg";
import Arrow from "./assets/icon-arrow-down.svg";

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
  return (
    <div className="faq-container">
      <span className="faq-item">
        How many team members can I invite? <img src={Arrow} alt="arrow icon" />
      </span>
      <span className="line"></span>
      <span className="faq-item">
        What is the maximum file upload size?
        <img src={Arrow} alt="arrow icon" />
      </span>
      <span className="line"></span>
      <span className="faq-item-second">
        How do I reset my password? <img src={Arrow} alt="arrow icon" />
      </span>
      <span className="line"></span>
      <span className="faq-item-second">
        Can I cancel my subscription? <img src={Arrow} alt="arrow icon" />
      </span>
      <span className="line"></span>
      <span className="faq-item-three">
        Do you provide additional support? <img src={Arrow} alt="arrow icon" />
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
