import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {

    return (
      <header className="header-container">
        <article className="message is-link">
          <div className="message-header">
            <span><strong>Email: </strong>vishwanth.balamahesh@gmail.com</span>
            <span>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-google-plus-g"></i>
            </span>
          </div>
        </article>
        <section className="hero">
          <div className="hero-body">
            <nav className="navbar" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                <a className="navbar-item" href="javascript:void(0);">
                  <img src="images/logo.png" width="208" height="57" />
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>

              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item">
                    <Link to='/'>Home</Link>
                  </a>
                  <a className="navbar-item">
                    <Link to='/photos'>Photos</Link>
                  </a>
                  <a className="navbar-item">
                    <Link to='/videos'>Videos</Link>
                  </a>
                  <a className="navbar-item">
                    <Link to='/contact'>Contact</Link>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </section>
      </header>
    );
  }
}

export default Header;
