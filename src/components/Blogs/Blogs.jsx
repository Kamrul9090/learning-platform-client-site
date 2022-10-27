import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-center mt-5 text-success'>Read Our Blogs</h2>
            <Container className='fw-semibold'>
                <Col className='mt-5'>
                    <h3>What is Cors?</h3>
                    <p>Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.</p>
                </Col>
                <Col className='mt-5'>
                    <h3>Why are you using `firebase`? What other options do you have to implement authentication?</h3>
                    <p>I am using firebase because it is a believable authentication system for me that is provided by Google.</p>
                    <p>Other Authentication systems:
                        <li>Auth0</li>
                        <li>swoopnow.com</li>
                        <li>Tibco</li>
                        <li>Okta</li>
                    </p>
                </Col>
                <Col className='mt-5'>
                    <h3> How does the private route work?</h3>
                    <p> private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                </Col>
                <Col className='mt-5'>
                    <h3>What is Node? How does Node work?</h3>
                    <p>Node.js is an open-source backend javascript runtime environment.</p>
                    <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive</p>
                </Col>
            </Container>
        </div>
    );
};

export default Blogs;