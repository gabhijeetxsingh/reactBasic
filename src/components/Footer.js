import React from 'react';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">NORTHLINE</div>
      <p>Elevated everyday essentials for people who keep moving.</p>
      <p className="site-footer__copy">© {new Date().getFullYear()} Northline Co.</p>
    </footer>
  );
}

export default Footer;
