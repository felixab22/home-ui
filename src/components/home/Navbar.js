import React from "react";
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import mainLogo from "@assets/images/logo.webp";
import "@styles/Navbar.css";

const Navbar = () => {
  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate('/login')
    }
  }, [])
  const [usuario, setUsuario] = useState([])
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-menu app-margin">
        <div className="container-fluid m-0 p-0">
          <NavLink className="navbar-brand ms-3" to="/">
            <img className="main-img" src={mainLogo} alt="fireSpot" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="text-white navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item navbar-menu-item">
                <NavLink className="nav-link text-white" to="/list">Boletas</NavLink>
              </li>
              <li className="nav-item navbar-menu-item">
                <NavLink className="nav-link text-white" to="/file">Cargar Boletas</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-2 m-0 p-0 text-end">
            <label type="text" value={usuario} onChange={e => setUsuario}></label>
            <button onClick={() => { sessionStorage.removeItem("token") }} className="btn login-button me-3"><i className="fa fa-sign-in p-0 me-1" />Cerrar sesión</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
