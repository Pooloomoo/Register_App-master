import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>
        <span className="footer__copyright">&copy;</span> 2018 MTH
      </p>
      <p>
        Crafted with <i className="fas fa-heart footer__icon"></i> by{' '}
        <span className="footer__signature">
          Matt H
        </span>
      </p>
    </footer>
  );
}

export default Footer;
