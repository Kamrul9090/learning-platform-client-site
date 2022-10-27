import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { FaArrowCircleDown } from "react-icons/fa";
import { HiArchive, HiClock } from "react-icons/hi";
const CourseDetails = () => {
    const data = useLoaderData();
    const { name, about, email, time, picture, phone, price, lecture } = data;
    return (
        <div>
            <div className='mt-5 d-flex justify-content-between'>
                <div className='d-flex'>
                    <h3 className=''>Access Your Course</h3>
                    <FaArrowCircleDown style={{ height: '40px', width: '30px', marginLeft: '10px' }}></FaArrowCircleDown>
                </div>
                <div>
                    <Button>Download PDF</Button>
                </div>
            </div>
            <Card style={{ width: '30rem', margin: '60px auto' }}>
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
            <Button variant='success'><Link className='text-decoration-none text-light fw-semibold' to='/checkout'>Get Premium Access</Link></Button>
        </div>
    );
};

export default CourseDetails;