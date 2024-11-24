import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { HomeIcon, StarIcon, FilmIcon, GlobeIcon, SearchIcon } from 'lucide-react';
import Search from './Search';

const NavbarItems = () => (
  <>
    <li className="nav-item me-4">
      <a className="nav-link active" aria-current="page" href="/">
        <HomeIcon className="me-2" size={20} />
        Home
      </a>
    </li>
    <li className="nav-item me-4">
      <a className="nav-link active" aria-current="page" href="/">
        <StarIcon className="me-2" size={20} />
        Popular
      </a>
    </li>
    <li className="nav-item dropdown me-4">
      <a className="nav-link dropdown-toggle" href="/" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <FilmIcon className="me-2" size={20} />
        Genre
      </a>
      <ul className="dropdown-menu">
        <li><span className="dropdown-item" href="/">Action</span></li>
        <li><span className="dropdown-item" href="/">Drama</span></li>
        <li><span className="dropdown-item" href="/">Horror</span></li>
        <li><span className="dropdown-item" href="/">Comedy</span></li>
        <li><span className="dropdown-item" href="/">Romance</span></li>
      </ul>
    </li>
    <li className="nav-item dropdown me-4">
      <a className="nav-link dropdown-toggle" href="/" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <GlobeIcon className="me-2" size={20} />
        Country
      </a>
      <ul className="dropdown-menu">
        <li><span className="dropdown-item" href="/">China</span></li>
        <li><span className="dropdown-item" href="/">Japan</span></li>
        <li><span className="dropdown-item" href="/">Indonesia</span></li>
        <li><span className="dropdown-item" href="/">Korea</span></li>
        <li><span className="dropdown-item" href="/">Thailand</span></li>
      </ul>
    </li>
  </>
);

const Header = ({ title, onSearch }) => {
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => setShowSearch(!showSearch);

  return (
    <>
      {/* --- Navbar Top --- */}
      <nav className="navbar navbar-dark bg-dark sticky-top">
        <div className="container d-flex justify-content-between">
          <a className="navbar-brand" href="/">{title}</a>
          <div className="d-flex ms-auto">
            {/* Search Icon Button (Mobile) */}
            <button className="navbar-toggler d-lg-none" type="button" aria-expanded="false" aria-label="Toggle search" onClick={toggleSearch}>
              <SearchIcon size={20} className="text-white" />
            </button>

            {/* Toggle Icon Button (Mobile) */}
            <button className="navbar-toggler d-lg-none ms-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          {/* Search Form (Deskop) */}
          <div className="d-flex ms-auto d-none d-lg-flex">
            <Search onSearch={onSearch} />
          </div>
        </div>
      </nav>
      {/* --- Navbar Top End --- */}

      {/* Search Form (Mobile) */}
      {showSearch && (
        <div className="navbar navbar-dark bg-dark d-lg-none">
          <div className="container">
            <div className="col align-self-end">
              <Search onSearch={onSearch} />
            </div>
          </div>
        </div>
      )}

      {/* --- Navbar Bottom --- */}
      {/* Desktop */}
      <nav className="navbar navbar-expand-lg bg-body-secondary d-none d-lg-flex">
        <div className="container">
          <ul className="navbar-nav d-flex flex-row">
            <NavbarItems />
          </ul>
        </div>
      </nav>

      {/* Offcanvas (Mobile) */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">{title}</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <NavbarItems />
          </ul>
        </div>
      </div>
      {/* --- Navbar Bottom End --- */}
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Header;
