import React, {useState} from 'react';
import logo from "../images/Logo.svg";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

    return (
      <header className='header'>
        <nav className="nav">
          <div className='nav-container flex-between align-center'>
            <img src={logo} alt="Little Lemon Logo" className="logo"/>
            {/* Hamburger Menu for small screens */}
            <div className="hamburger" onClick={toggleMenu}>
              <span className={`bar top-bar ${menuOpen ? 'open' : ''}`}></span>
              <span className={`bar middle-bar ${menuOpen ? 'open' : ''}`}></span>
              <span className={`bar bottom-bar ${menuOpen ? 'open' : ''}`}></span>
            </div>
            {/* Nav List (Hidden on small screens, visible when menuOpen is true) */}
            <div  className={`list-container ${menuOpen ? 'show' : 'hide'}`}>
            <ul  className={`nav-list ${menuOpen ? 'show' : 'hide'}`}>
              <li><a href="#home" className="nav-link">Home</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#menu" className="nav-link">Menu</a></li>
              <li><a href="#reservations" className="nav-link">Reservations</a></li>
              <li><a href="#order-online" className="nav-link">Order Online</a></li>
              <li><a href="#login" className="nav-link">Login</a></li>
            </ul>
            </div>
          </div>
        </nav>   
      </header>
    );
  }
  
  export default Header;