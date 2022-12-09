import React from "react";
import { Link,NavLink } from "react-router-dom";
const Navbar=()=>
{
return(
    <nav class="navbar navbar-expand-lg bg-secondary">
  <div class="container-fluid">
    <Link   class="navbar-brand text-warning" to="#">React CRUD</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link text-warning" aria-current="page" exact to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link  class="nav-link text-warning" exact to="/about">About us</Link>
        </li>
        <li class="nav-item">
          <Link  class="nav-link text-warning" exact to="/contact">Contact us</Link>
        </li>
      </ul>
    </div>
    <Link className="btn btn-outline-light" to="/users/add">Add user</Link>
  </div>
</nav>
);
}
export default Navbar;