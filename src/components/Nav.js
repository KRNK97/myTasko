import React, { Fragment, useState, useEffect } from "react";
import axiosInstance from "./Axios";
import { useHistory } from "react-router-dom";

const Nav = ({ user, setUser }) => {
  const history = useHistory();
  //   const { comps, setComps } = useState();

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    axiosInstance.defaults.headers["Authorization"] = null;
    // window.location.reload();
    setUser(null);
    history.push("/");
    window.location.reload();
  };

  const renderComp = () => {
    if (user) {
      return (
        <>
          <li class="nav-item ">
            <a class="nav-link" href="/" onClick={logout}>
              Logout
            </a>
          </li>
        </>
      );
    }
    return (
      <>
        <li class="nav-item">
          <a class="nav-link" href="/login/">
            <span className="">Sign In</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/register/">
            <span className="">Sign Up</span>
          </a>
        </li>
      </>
    );
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand font-weight-bold text-primary" href="/">
          Tasko
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav w-100">
            {renderComp()}
            <div className="p-lg-2 p-0 font-weight-bold text-muted username">
              {user}
            </div>
            {/* <li class="nav-item">
              <a class="nav-link" href="/login/">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/register/">
                Register
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={logout}>
                Logout
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
