import { useNavigate } from "react-router";
import "./styles.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header-container">
      <div className="title">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <article>
          We are family owned <br /> Mediterranean restaurant, <br /> focused on
          traditional <br />
          recipes served with a modern <br /> twist.
        </article>
        <button
          onClick={() => {
            navigate("/booking");
          }}
        >
          Reserve a Table
        </button>
      </div>
      <div className="header-image" />
    </header>
  );
};

export default Header;
