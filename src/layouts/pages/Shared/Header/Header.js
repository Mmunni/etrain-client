import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import Logo from '../../../../assets/logo/Logo.webp'
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';


const Header = () => {
    return (
        <div>
             <Navbar collapseOnSelect expand="lg" mt-sm-3>
      <Container>
        <Link to="/">
            <img src={Logo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="ms-auto menu">
            <Link to='/'>Home</Link>
            <Link to='/courses'>Courses</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/blog'>Blog</Link>
           
            <Link to='/login'>Login</Link>
           
            
            <Link to='/register'>Register</Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;