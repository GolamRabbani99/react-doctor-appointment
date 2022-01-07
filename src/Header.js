import React from 'react'
import {Link} from "react-router-dom";
function Header() {
    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link to="/"><a className="navbar-brand">DoctorLogo</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <Link to="/booking">
        <li className="nav-item">
         <a className="nav-link active" aria-current="page">what we treat</a>
        </li>
        </Link>
      
      </ul>
     

     <ul className="d-flex">
        <li className="nav-item">
        <a className="nav-link" aria-current="page">sign in</a>
        </li>
        <button type="button" class="btn btn-info">Book Now</button>
     </ul>
    </div>
  </div>
  </div>
</nav>


<div className="container">
<div className="Hero">
<div className="hero-text text-info

">
    <h1 className="hero__header">Need to see A Doctor !</h1>
    <p className="hero__paragrap">Book Appointment in a few clicks</p>
    <Link to="/bookform">
    <button className="btn btn-info">start</button></Link>
    
  </div>
</div>
</div>

</>
        
    )
}

export default Header
