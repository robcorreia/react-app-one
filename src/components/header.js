import React,  {Component } from 'react';
import './header.css';
import '../components/produto-component';

class Header extends React.Component {
  render() {
    return (
      <div>
        <header>
            <article className="header-container">
            <a className="brand">Brand</a>
            <nav>
                <ul className="menu">
                    <li>
                        <a>Link 1</a>
                    </li>
                    <li>
                        <a>Link 2</a>
                    </li>
                    <li>
                        <a>Link 3</a>
                    </li>
                </ul>
             </nav>
            </article>
            <div className="hero">
              
            </div>
        </header>
      </div>
    );
  }
  }
  

export default Header;