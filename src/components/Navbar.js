import React from "react";
const Navbar = () => {
  return (
    <nav class="navbar bg-body-tertiary fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="https://th.bing.com/th/id/R.74cc7f34f83e34de9d131549d42a8cc4?rik=FKxDSaoCNlF3zQ&riu=http%3a%2f%2fteachersfirst.com%2fblog%2fwp-content%2fuploads%2f2019%2f07%2fScreen-Shot-2019-06-25-at-12.19.03-AM.png&ehk=AU1nRw5%2f2X5H0GdeG0RtrnoCcWkz5fUZXXWzxT5nQSw%3d&risl=&pid=ImgRaw&r=0"
            alt=""
            width="40"
            height="40"
            class="d-inline-block align-text-top"
          />
          <b>LAHARI MARADA</b>
        </a>
        <ul className="nav justify-content-end text-bg-light p-1">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="nav-link"
              smooth
              href="/#Home"
            >
              <b>HOME</b>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" smooth href="/#About">
              <b>ABOUT</b>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" smooth href="/#Skills">
              <b>SKILLS</b>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" smooth href="/#Work">
              <b>EXPERIENCE</b>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
