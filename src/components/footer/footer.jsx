import React from 'react';
import Logo from '../logo/logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="page-footer">
      <Logo isLight={true}/>
      <div className="copyright">
        <p>© {currentYear} What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
