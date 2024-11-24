import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-4">
            <h5 className="mb-3">About MoaLand</h5>
            <p>Welcome to MoaLand, your ultimate source for discovering the latest movies and TV shows. Explore trending titles, top-rated films, and much more.</p>
          </div>

          <div className="col-md-2">
            <h5 className="mb-3">Explore Genres</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Action</a></li>
              <li><a href="/" className="text-white">Drama</a></li>
              <li><a href="/" className="text-white">Horror</a></li>
              <li><a href="/" className="text-white">Comedy</a></li>
              <li><a href="/" className="text-white">Romance</a></li>
            </ul>
          </div>

          <div className="col-md-2">
            <h5 className="mb-3">Explore Country</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">China</a></li>
              <li><a href="/" className="text-white">Japan</a></li>
              <li><a href="/" className="text-white">Indonesia</a></li>
              <li><a href="/" className="text-white">Korea</a></li>
              <li><a href="/" className="text-white">Thailand</a></li>
            </ul>
          </div>

          <div className="col-md-2">
            <h5 className="mb-3">Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">About Us</a></li>
              <li><a href="/" className="text-white">Contact</a></li>
              <li><a href="/" className="text-white">Terms of Service</a></li>
              <li><a href="/" className="text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p>© 2024 MoaLand. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
