import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light navbar-bg">

      <div className="navbar-collapse collapse">
        <ul className="navbar-nav navbar-align">
          <li className="nav-item dropdown">
            <a
              className="nav-icon dropdown-toggle d-inline-block d-sm-none"
              href="#"
              data-bs-toggle="dropdown"
            >
              <i className="align-middle" data-feather="settings"></i>
            </a>

            <a
              className="nav-link dropdown-toggle d-none d-sm-inline-block"
              href="#"
              data-bs-toggle="dropdown"
            >
              <img
                src="../../admin/img/avatars/avatar.jpg"
                className="avatar img-fluid rounded me-1"
              />
              <span className="text-dark">Guna</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <a className="dropdown-item" href="pages-profile.html">
                <i className="align-middle me-1" data-feather="user"></i>
                Profile
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Log out
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
