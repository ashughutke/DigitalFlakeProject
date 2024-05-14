import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { IoHomeOutline } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";


function Sidenav() {
 

  return (
    <div>
      <Nav defaultActiveKey="/home" className="flex-column sidenav">
        <a id="i1"><Nav.Link href="/home"><IoHomeOutline /> Home</Nav.Link></a>
        <Nav.Link href="/category"><IoGridOutline /> Category</Nav.Link>
        <Nav.Link href="/product"><BsBoxSeam /> Products</Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidenav;