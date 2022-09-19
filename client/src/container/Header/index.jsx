import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about-me">About Me</Link>
        <Link to="/contact-me">Contac Me</Link>
      </ul>
    </>
  );
};

export default Header;
