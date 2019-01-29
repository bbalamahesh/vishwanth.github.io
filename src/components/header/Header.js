import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {

    return (
      <div>
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
        </header>
        <nav className="nav">
          <div className="nav-left">
            <a className="nav-item is-brand" href="#">
              <img src="images/logo.png" alt="Vishwanth logo" width="208" height="57" />
            </a>
          </div>

          <label className="nav-toggle" for="nav-toggle-state">
            <span></span>
            <span></span>
            <span></span>
          </label>


          <input type="checkbox" id="nav-toggle-state" />

          <div className="nav-right nav-menu">
            <a className="nav-item">
              <Link to='/'>Home</Link>
            </a>
            <a className="nav-item">
              <Link to='/photos'>Photos</Link>
            </a>
            <a className="nav-item">
              <Link to='/videos'>Videos</Link>
            </a>
            <a className="nav-item">
              <Link to='/contact'>Contact</Link>
            </a>
          </div>
        </nav>



        {/* <section className="hero">
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
        </section>*/}

      </div>



    );
  }
}

export default Header;
