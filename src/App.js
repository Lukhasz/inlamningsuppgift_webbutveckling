import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Article from './Article';
import Projects from './Projects';
import Footer from './Footer';
import ContactForm from './components/ContactForm';




const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Article />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;