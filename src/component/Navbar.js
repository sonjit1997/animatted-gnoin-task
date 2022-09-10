import React from 'react';
import './style/Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav>
        <a href='#'>home</a>
        <a href='#'>account</a>
        <a href='#'>contact</a>
        <a href='#'>service</a>
        <a href='#'>order</a>
        <div className='animation start-home'></div>
      </nav>
    </>
  );
}

export default Navbar;
