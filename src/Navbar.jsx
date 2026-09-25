import "./Navbar.css";

function Navbar({ name }) {
  return (
    <nav className="navbar">

      <div className="logo">
        <h2>
          {name} <span>HUB</span>
        </h2>
      </div>

      <div className="links">
        <ul className="nav-link">
          <li>
            <a href="#" className="active">
              Resources
            </a>
          </li>

          <li>
            <a href="#">Saved</a>
          </li>

          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#" className="profile">
              👤
            </a>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;

