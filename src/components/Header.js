import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return <header>
    <div className="logo">
      <h4>Gaku’s TECH BLOG ver.017</h4>
    </div>
    <nav>
      <ul>
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
    </nav>
  </header>
};

export default Header;
