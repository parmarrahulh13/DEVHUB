import "./Navbar.css";

function Navbar({name}){
    
    return (
        <div className='navbar'>
            <div className="logo">
                <h2>{name} <span>HUB</span> </h2> 
                
                
            </div>
            <div className="links">

              <ul className="nav-link">
                <li><a href="#">Resources</a></li>
                <li><a href="#">Saved</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">👤</a></li>
                
              </ul>
             

            </div>
            
        </div>
    );
};

export default Navbar;