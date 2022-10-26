import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Header = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto fw-bold">
                        <Link className='me-2' to="/courses">Courses</Link>
                        <Link className='me-2' to="/questions">FAQ</Link>
                        <Link className='me-2' to="/blogs">Blogs</Link>
                    </Nav>
                    <Nav className='d-flex align-items-center fw-semibold'>
                        <Nav.Link href="#pricing">themes</Nav.Link>
                        <Link className='text-light' href="/">
                            {
                                user?.uid ?
                                    <>
                                        <Image roundedCircle style={{ height: '35px' }} src={user?.photoURL}></Image>
                                        <small className='mx-2'>{user.displayName}</small>
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