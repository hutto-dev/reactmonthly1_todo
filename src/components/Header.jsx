import ReactLogo from "../images/react_logo.png";
import "../styles/Header.css";

export default function Header() {
  return (
    <header>
      <div className="header-top">
        <img className="react-logo" src={ReactLogo} alt="React Logo" />
        <h1 className="title">React Monthly 1</h1>
      </div>
      <h2 className="project-name">To-Do List</h2>
    </header>
  );
}
