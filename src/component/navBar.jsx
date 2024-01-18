import React from 'react'
// import Logo from '../../public/Logo.svg';
export default function NavBar() {
  return (
    <div>
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom" id='Nav'>
      <div class="col-md-3" >
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
        {/* <img src={Logo} alt="Your Logo" width="120" height="75  " /> */}
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary text-warning">Home</a></li>
        <li><a href="#" class="nav-link px-2 text-light">Features</a></li>
        <li><a href="#" class="nav-link px-2 text-light">Pricing</a></li>
        <li><a href="#" class="nav-link px-2 text-light">FAQs</a></li>  
        <li><a href="#" class="nav-link px-2 text-light">About</a></li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-warning me-2"> <a href="http://localhost:5173/login">Login</a></button>
        <button type="button" class="btn btn-warning text-light" style={{marginRight: 'px'}}> <a href="http://localhost:5173/">Sign-up</a> </button>
      </div>
    </header>
    </div>
  )
}
