import React, { useState } from "react";
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Sidebar = () => {
  const [activePage, setActivePage] = useState("");
  const location = useLocation();

  const logout = () => {
    window.open(
        `http://localhost:8080/auth/logout`, "_self"
    )
}

  // Set active page on component mount and when location changes
  React.useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  return (
    <div className="sidebar">
      <div>
        <img src={logo} alt="" className="logo" />
      </div>
      <ul className="sidebar-list">
        <li className={activePage === "/services" ? "active" : ""}>
          <Link to="/services">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-first-aid-kit"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#8A8A8A"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 8v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
              <path d="M4 8m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M10 14h4" />
              <path d="M12 12v4" />
            </svg>
            Services
          </Link>
        </li>

        <li className={activePage === "/schedule" ? "active" : ""}>
          <Link to="/schedule">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-calendar-month"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#8A8A8A"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
              <path d="M16 3v4" />
              <path d="M8 3v4" />
              <path d="M4 11h16" />
              <path d="M7 14h.013" />
              <path d="M10.01 14h.005" />
              <path d="M13.01 14h.005" />
              <path d="M16.015 14h.005" />
              <path d="M13.015 17h.005" />
              <path d="M7.01 17h.005" />
              <path d="M10.01 17h.005" />
            </svg>
            Schedules
          </Link>
        </li>

        <li className={activePage === "/telemed" ? "active" : ""}>
          <Link to="/telemed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-zoom"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#8A8A8A"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17.011 9.385v5.128l3.989 3.487v-12z" />
              <path d="M3.887 6h10.08c1.468 0 3.033 1.203 3.033 2.803v8.196a.991 .991 0 0 1 -.975 1h-10.373c-1.667 0 -2.652 -1.5 -2.652 -3l.01 -8a.882 .882 0 0 1 .208 -.71a.841 .841 0 0 1 .67 -.287z" />
            </svg>
            Telemed
          </Link>
        </li>

        <li className={activePage === "/requestForms" ? "active" : ""}>
          <Link to="/requestForms">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-checklist"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#8A8A8A"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
              <path d="M14 19l2 2l4 -4" />
              <path d="M9 8h4" />
              <path d="M9 12h2" />
            </svg>
            Request Forms
          </Link>
        </li>

        <li className={activePage === "/events" ? "active" : ""}>
          <Link to="/events">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-heartbeat"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#8A8A8A"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19.5 13.572l-7.5 7.428l-2.896 -2.868m-6.117 -8.104a5 5 0 0 1 9.013 -3.022a5 5 0 1 1 7.5 6.572" />
              <path d="M3 13h2l2 3l2 -6l1 3h3" />
            </svg>
            Events
          </Link>
        </li>

        <li className={activePage === "/healthTips" ? "active" : ""}>
          <Link to="/healthTips">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-heartbeat"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#8A8A8A"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19.5 13.572l-7.5 7.428l-2.896 -2.868m-6.117 -8.104a5 5 0 0 1 9.013 -3.022a5 5 0 1 1 7.5 6.572" />
              <path d="M3 13h2l2 3l2 -6l1 3h3" />
            </svg>
            Health Tips
          </Link>
        </li>
      </ul>
      <ul className="logout">
        <li onclick="window.location.href='/html/signin.html';">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-logout"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#8A8A8A"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
            <path d="M9 12h12l-3 -3" />
            <path d="M18 15l3 -3" />
          </svg>
           <button onClick={logout}>Log Out</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
