import "./Hero.css";

function Hero() {
  return (
    <div className="Hero">
      <div className="title">
        <span className="badge">✦ DEVELOPER RESOURCE HUB</span>

        <h1>
          Everything you need
          <br />
          <span>to build better.</span>
        </h1>

        <p>
          Find tools, documentation, courses and resources
          <br />
          to level up your development skills.
        </p>
      </div>

      <div className="search-box">
        <span>⌕</span>
        <input type="text" placeholder="Search resources..." />
      </div>

      <ul className="categories">
        <li className="active">All</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>Tools</li>
      </ul>
    </div>
  );
}

export default Hero;
