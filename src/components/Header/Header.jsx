import React from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import DarkModeToggle from "react-dark-mode-toggle";
import { FaEdgeLegacy } from "react-icons/fa";


const Header = () => {
    const { user, mode, toggletheme, logOut } = useContext(AuthContext);

    const handleLogoutButton = () => {
        logOut()
            .then(() => { })
            .catch(e => { console.log(e) })
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/"><FaEdgeLegacy className='text-success'></FaEdgeLegacy> <Link to='/' className='text-decoration-none text-light'>Edu-Port</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto fw-bold" >
                        <Link className='me-2 text-decoration-none text-light' to="/courses">Courses</Link>
                        <Link className='me-2  text-decoration-none text-light' to="/questions">FAQ</Link>
                        <Link className='me-2  text-decoration-none text-light' to="/public">Blogs</Link>
                    </Nav>
                    <Nav className='d-flex align-items-center fw-semibold'>
                        <Nav.Link href="#">
                            <DarkModeToggle onChange={toggletheme} checked={mode === 'dark'}></DarkModeToggle>
                        </Nav.Link>
                        <Link className='text-light text-decoration-none' href="/">
                            {
                                user?.uid ?
                                    <>
                                        <Image className='mx-2' roundedCircle style={{ height: '35px' }} src={user?.photoURL} title={user.displayName}></Image>
                                        <Button variant='warning'><Link className='text-decoration-none text-light' onClick={handleLogoutButton} to="/">
                                            Logout
                                        </Link></Button>
                                    </>
                                    :
                                    <Button variant='success'><Link className='text-decoration-none text-light' to="/login">
                                        Login
                                    </Link></Button>
                            }
                        </Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;