import React from 'react';

const Header = () => {

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset - 20; // 20 is the offset
    window.scrollTo({ top: y, behavior: 'smooth' });
  };
  
  return (
    <header>
      <nav className='header-nav'>
        <ul className='header-list'>
          <li><a onClick={() => scrollTo('hero-section')}>Home</a></li>
          <li><a onClick={() => scrollTo('about-me')}>About</a></li>
          <li><a onClick={() => scrollTo('projects')}>Projects</a></li>
          <li><a onClick={() => scrollTo('contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};




export default Header;