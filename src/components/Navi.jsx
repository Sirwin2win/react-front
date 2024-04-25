import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import wall from '../assets/images/wall.jpg';
// import '../index.css'
import './Styles.css'

const Navi = () => {
  return (
      <div>
    <Navbar bg="primary" color='white' expand="lg"  data-bs-theme="dark">
    {/* <Navbar.Brand href="#home" >Destre</Navbar.Brand> */}
    <Navbar.Brand ><img src={wall} id='pic' /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"  />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="navin">
      
    <Nav.Link>
    <Link className='tu' to={"/"}>Home</Link>
    </Nav.Link>
    <Nav.Link>
    <Link className='tu' to={"/about"}>About</Link>
    </Nav.Link>
    <Nav.Link>
    <Link className='tu' to={"/contact"}>Contact</Link>
    </Nav.Link>
    {/* <Nav.Link>
    <Link className='tu' to={"/category-listing"}>Categories</Link>
    </Nav.Link>
    <Nav.Link>
    <Link className='tu' to={"/add-category"}>Add Categories</Link>
    </Nav.Link> */}
    <Nav.Link>
    <Link className='tu' to={"/add-product"}>Add Product</Link>
    </Nav.Link>
    <Nav.Link>
    <Link className='tu' to={"/products"}>Products</Link>
    </Nav.Link>
    {/* <Nav.Link>
    <Link className='tu' to={"/manage-category"}>Manage Category</Link>
    </Nav.Link> */}

    <Nav.Link>
    <Link className='tu' to={"/manage-product"}>Manage Product</Link>
    </Nav.Link>

    </Nav>
    </Navbar.Collapse>
    </Navbar>


    </div>
      
      )
}

export default Navi
