import React from 'react';
import Header from './components/Header';
import Title from './Title';
import Article from './Article';
import Projects from './Projects';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';



const App = () => {
  return (
    <>
      <Header />
      <Title />
      <Article />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;