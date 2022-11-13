import { useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

const Header = () => {

    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      return <Contact />;
    };
  
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <>
    <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
    {renderPage()}
    </>
  )
}

export default Header