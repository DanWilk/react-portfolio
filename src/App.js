import React, { useState } from 'react';
import './App.css';
import About from './components/About'
import Nav from './components/Nav'
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer'

function App() {

const [pages] = useState(['About', 'Portfolio', 'Contact', 'Resume'])

const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className='body'>
      <Nav 
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main className='body'>
        { currentPage === 'About' ? (<About/>) :
        currentPage === 'Resume' ? (<Resume />) :
         currentPage === 'Portfolio' ? (<Portfolio/>) : 
        (<ContactForm/>) }
      </main>
      <Footer />
    </div>
  );
}

export default App;
