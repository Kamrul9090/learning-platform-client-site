import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import DarkModeToggle from "react-dark-mode-toggle";
import { FaEdgeLegacy } from "react-icons/fa";


const Header = () => {
    const { user, mode, toggletheme } = useContext(AuthContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><FaEdgeLegacy className='text-success'></FaEdgeLegacy> <Link to='/' className='text-decoration-none text-light'>Edu-Port</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto fw-bold" >
                        <Link className='me-2 text-decoration-none' to="/courses">Courses</Link>
                        <Link className='me-2  text-decoration-none' to="/questions">FAQ</Link>
                        <Link className='me-2  text-decoration-none' to="/public">Blogs</Link>
                    </Nav>
                    <Nav className='d-flex align-items-center fw-semibold'>
                        <Nav.Link href="#pricing">
                            <DarkModeToggle onChange={toggletheme} checked={mode === 'dark'}></DarkModeToggle>
                        </Nav.Link>
                        <Link className='text-light text-decoration-none' href="/">
                            {
                                user?.uid ?
                                    <>
                                        <Image className='mx-2' roundedCircle style={{ height: '35px' }} src={user?.photoURL} title={user.displayName}></Image>
                                    </>
                                    :
                                    <FaUserAlt></FaUserAlt>
                            }
                        </Link>
                        <Link to="/login">
                            Login
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;