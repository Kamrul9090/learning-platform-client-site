import React, { createRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { FaArrowCircleDown } from "react-icons/fa";
import { HiArchive, HiClock } from "react-icons/hi";
import ReactToPdf from 'react-to-pdf'


const ref = createRef()

const CourseDetails = () => {
    const data = useLoaderData();
    const { name, about, email, time, picture, phone, price, lecture, _id } = data;
    return (
        <div>
            <div className='mt-5 d-flex justify-content-between'>
                <div>
                    <h4 className='d-inline'>Access Your Course</h4>
                    <FaArrowCircleDown style={{ marginLeft: '5px', width: '30px', height: '40px' }}></FaArrowCircleDown>
                </div>
                <div>
                    <ReactToPdf targetRef={ref} filename="eduport.pdf">
                        {({ toPdf }) => (
                            <Button onClick={toPdf}>Download PDF</Button>
                        )}
                    </ReactToPdf>
                </div>
            </div>
            <div className='mx-auto fw-semibold' style={{ width: '400px', textAlign: 'center' }} ref={ref} >
                <h6 className='text-success'>About Our course</h6>
                <small>Edu- Port is a learning bage site. We have many crush courses that help you to develop your skills. Like web development, finance, graphic design, marketing, web design etc.</small>
                <li>total course 06</li>
                <li>Course Price: $50+</li>
                <li>Total lecture per course 90+</li>
                <li>courses duration 11h 90m+ per courses.</li>
            </div>
            <Card className='m-5 w-75'>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><b>PRICE: {price}</b></ListGroup.Item>
                    <ListGroup.Item>{email}</ListGroup.Item>
                    <ListGroup.Item>{phone}</ListGroup.Item>
                </ListGroup>
                <Card.Footer className='d-flex justify-content-between'>
                    <div>
                        <HiArchive></HiArchive>
                        <small className="text-secondary fw-semibold ms-1">{lecture}</small>
                    </div>
                    <div>
                        <HiClock></HiClock>
                        <small className="text-secondary fw-semibold ms-1">{time}</small>
                    </div>
                </Card.Footer>
                <Card.Body className='text-center'>
                    <Link to="/courses">Go Back</Link>
                </Card.Body>
            </Card>
            <Button variant='success'><Link className='text-decoration-none text-light fw-semibold' to={`/checkout/${_id}`}>Get Premium Access</Link></Button>
        </div>
    );
};

export default CourseDetails;