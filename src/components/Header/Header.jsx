import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
const Header = () => {
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
                    <Nav>
                        <Nav.Link href="#pricing">themes</Nav.Link>
                        <Nav.Link href="#deets">
                            <Image roundedCircle style={{ height: '30px' }}></Image>
                            <FaUserAlt></FaUserAlt>
                        </Nav.Link>
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