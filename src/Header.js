import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className='header-nav'>
        <ul className='header-list'>
          <li><a href="#hero-section">Home</a></li>
          <li><a href="#about-me">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;