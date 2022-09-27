import React from 'react';
import { Link } from 'react-router-dom';
import('./Script.js').then(func => {});

const Header = () => {
  return <header>
    <div className="logo">
      <h4>GAKU's TECH BLOG ver.039</h4>
    </div>
    <nav>
      <ul className="nav-links">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
        <Link to="/blog">BLOG</Link>
        </li>
        <li>
        <Link to="/sns">SNS</Link>
        </li>
      </ul>

      <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>

    </nav>
    <script type="module" src="../Script.js"></script>
  </header>
};

export default Header;