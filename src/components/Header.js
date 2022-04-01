import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
        <div className="container">
            <h1>
              <NavLink className="text-light" to = "/">
                CRUD - React, Redux, REST API & Axios 
              </NavLink>
            </h1>   
        </div>

        <NavLink to="/products/new"
            className="btn btn-danger new-post d-block d-md-inline-block">New Product &#43;</NavLink>
    </nav>
  )
}
