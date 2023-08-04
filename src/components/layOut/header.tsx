import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  
const header = () => {
  return (
    
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
     <a className="navbar-brand" href="#">Navbar</a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"     aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
        <a className="nav-link disabled" href="#"  aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
  <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <form className="d-flex">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
</nav>
    </div>
  )
}

export default header
