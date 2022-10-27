import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    return (
        <Container className="bg-dark text-white fw-bold mt-5" fluid>
            <Row className='p-4'>
                <Col>
                    <h5>Contact us:</h5>
                    <ListGroup>
                        <ListGroup.Item><small>Phone: +8801827408931</small></ListGroup.Item>
                        <ListGroup.Item><small>Email: cr7.kamrul.9090@gmail.com</small></ListGroup.Item>
                        <ListGroup.Item><small>
                            <ButtonGroup size="sm">
                                <Button variant='link'><Link to='/'>Home</Link></Button>
                                <Button variant='link'><Link to='/public'>blogs</Link></Button>
                                <Button variant='link'><Link to='/courses'>Course</Link></Button>
                            </ButtonGroup>
                        </small></ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <h5>Social Media:</h5>
                    <ListGroup>
                        <ListGroup.Item><FaFacebook></FaFacebook><a href='https://www.facebook.com/CR7.Kamrul'> Facebook</a></ListGroup.Item>
                        <ListGroup.Item><FaTwitter></FaTwitter><a href='https://twitter.com/Kamrulh89092711'> Twitter</a></ListGroup.Item>
                        <ListGroup.Item><FaGithub></FaGithub><a href='https://github.com/Kamrul9090'> GitHub</a></ListGroup.Item>
                    </ListGroup>
                </Col>
                <Row>
                    <div className='d-flex mt-2 justify-content-center'>

                        <a className='me-2' href="#">Privacy Policy</a>
                        <a className='me-2' href="#">Accessibility</a>
                        <a className='me-2' href="#">Sitemap</a>
                        <a className='me-2' href="#">Support</a>
                    </div>
                </Row>
            </Row>
        </Container>
    );
};

export default Footer;