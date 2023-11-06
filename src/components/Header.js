import React from 'react';

const Header = () => {

  // Function to scroll to a section smoothly by getting the id and calculating where to scroll 
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.scrollY - 20;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };
  
  // Rendering the header
  return (
    <header>
      <nav className='header-nav'>
        <ul className='header-list'>
          {/* Each list item is a link that scrolls to a specific section of the page */}
          <li><a onClick={() => scrollTo('title')}>Home</a></li>
          <li><a onClick={() => scrollTo('about-me')}>About</a></li>
          <li><a onClick={() => scrollTo('projects')}>Projects</a></li>
          <li><a onClick={() => scrollTo('contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};


export default Header;