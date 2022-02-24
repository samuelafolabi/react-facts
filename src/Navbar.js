import reactIcon from "./reactjs-icon.png";

function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="nav-title">
          <img src={reactIcon} className="react-logo" />
          <h3>ReactFacts</h3>
        </div>

        <ul className="nav-items">
          <li>React Course - Project 1</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
