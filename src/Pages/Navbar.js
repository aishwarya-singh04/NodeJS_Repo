import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link class="navbar-brand" to="/">React Linking</Link>
  

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">About</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/contact">Contact</Link>
      </li>
      
      
    </ul>
    
  </div>
</nav>
        </div>
    )
}
