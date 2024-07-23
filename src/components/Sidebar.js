import React from "react";

function Sidebar() {
  return (
    <nav id="sidebar" className="sidebar js-sidebar">
      <div className="sidebar-content js-simplebar">
        <a className="sidebar-brand" href="index.html">
          <span className="align-middle">Admin</span>
        </a>

        <ul className="sidebar-nav">
          <li className="sidebar-header">Submission</li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="ui-forms.html">
              <i className="align-middle" data-feather="check-square"></i>
              <span className="align-middle">Forms</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
