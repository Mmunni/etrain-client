import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import Logo from '../../../../assets/logo/Logo.webp'
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import Image from "react-bootstrap/Image";


const Header = () => {

  const { user, logOut } = useContext(AuthContext);

  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
    return (
        <div>
             <Navbar collapseOnSelect expand="lg" 
             bg="light"
          variant="light">
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
            
          </Nav>
         
          <Nav>
              <Nav.Link>
                {user?.uid ? (
                  <>
                    <span>{user?.displayName}</span>
                    <Button
                      onClick={handelLogOut}
                      className="ms-2"
                      variant="outline-warning"
                      size="sm"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link className="me-3" to="/login">
                      <Button variant="outline-warning" size="sm">
                        Login
                      </Button>
                    </Link>
                    <Link to="/register">
                      <Button variant="outline-warning" size="sm">
                        Register
                      </Button>
                    </Link>
                  </>
                )}
              </Nav.Link>
              <Nav.Link>
                {user?.photoURL ? (
                  <Image
                    roundedCircle
                    src={user?.photoURL}
                    style={{ height: "30px" }}
                  ></Image>
                ) : (
                  <FaUser></FaUser>
                )}
              </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;