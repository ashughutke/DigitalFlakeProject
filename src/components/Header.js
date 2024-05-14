import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TiInfo } from "react-icons/ti";


function Header() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    localStorage.removeItem('token');  // Clear the token from localStorage
    navigate('/');  // Redirect to the login page
  };

  return (
    <div>
      <nav className="navbar bg-purple">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/home">            
          <b>D</b> <b> digital</b>flake
          </Link>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" aria-current="page" onClick={handleShow}><FaRegUserCircle /></Link>
            </li>
          </ul>
        </div>
      </nav>

      <Modal show={show} onHide={handleClose}>
        
        <Modal.Body closeButton>
          <div className="text-center">
            <h5><span className="text-danger me-2"><TiInfo /></span>Log Out</h5>
            <p>Are you sure you want to log out?</p>
          </div>
          
          <div className="text-center mt-5">
            <Button variant="light" className="btn btn-white mx-2" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary bg-purple" className="mx-2" onClick={handleLogout}>
              Confirm
            </Button>
          </div>
        </Modal.Body>
        
      </Modal>
      
    </div>
  );
}

export default Header;