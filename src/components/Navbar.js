import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import LoginRounded from '@mui/icons-material/LoginRounded'
import Button from '@mui/material/Button';


const Navbar = () => {
  
  //Navbar active color change
  let location = useLocation();
  useEffect(() => {
  }, [location]);


  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#063970" }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Evalue Content</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
              </li>
              <li className="nav-item"><Link className={`nav-link ${location.pathname === "/service" ? "active" : ""}`} to="/service">Service</Link></li>
              <li className="nav-item"><Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">contact us</Link></li>

            </ul>
            <Button component={Link} to="/Login" variant="contained" size="medium" startIcon={<LoginRounded />} sx={{ marginLeft: 'auto' }} >Login</Button>
          </div>
        </div>
      </nav>
    </div>
  )
}





export default Navbar