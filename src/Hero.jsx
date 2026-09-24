import "./Hero.css";

function Hero({ name }) {
  return (
    <div className="Hero">
      <div className="title">
        <h3>YOUR DEVELOPER RESOURCE HUB</h3>
        
        <p>Find tools, documentation and courses.</p>
      </div>

      <input type="text" placeholder="🔍 Search resources..." />
      <ul>
        <li>All</li>
        <li>React </li>
        <li>JavaScript </li>
        <li>CSS</li>
        <li>Tools</li>
      </ul>
    </div>
  );
}

export default Hero;
