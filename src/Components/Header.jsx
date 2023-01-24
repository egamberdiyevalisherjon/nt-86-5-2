import React from "react";

function Header() {
  return (
    <header id="main-header" className="text-bg-dark py-3 fs-3">
      <nav className="container d-flex align-items-center justify-content-between">
        <a className="text-reset text-decoration-none" href="#">LOGO</a>
        <ul className="d-flex align-items-center gap-3 list-unstyled m-0">
          <li>
            <a className="text-reset text-decoration-none" href="#">Home</a>
          </li>
          <li>
            <a className="text-reset text-decoration-none" href="#">About</a>
          </li>
          <li>
            <a className="text-reset text-decoration-none" href="#">Contact</a>
          </li>
          <li>
            <a className="text-reset text-decoration-none" href="#">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
