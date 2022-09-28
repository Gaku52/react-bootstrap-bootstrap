import React from 'react';
import('./Script.js').then(func => {});

const Header = () => {
  return <header>
    <div className="logo">
      <h4>GAKU's TECH BLOG ver.040</h4>
    </div>
    <nav>
      <ul className="nav-links">
        <li><a href="/">HOME</a></li>
        <li><a href="/blog">BLOG</a></li>
        <li><a href="/sns">SNS</a></li>
      </ul>

      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

    </nav>
    <script type="module" src="./Script.js">
    </script>
  </header>
};

export default Header;