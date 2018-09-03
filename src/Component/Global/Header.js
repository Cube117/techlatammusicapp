import React, { Component } from 'react';
import './CSS/Header.css';

class Header extends Component {

  render() {
    return (
      <div className="Header">
        <header className="nav">
          <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">TechLatam Music</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
                </li>
              </ul>
              <form class="form-inline">
                <input class="form-control mr-sm-2" id="buscador" placeholder="Buscar Album, Artista, etc" aria-label="Search" type="search" />
              </form>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
