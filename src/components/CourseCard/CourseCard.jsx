import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const CourseCard = ({ course }) => {
    console.log(course);
    const { name, about, picture } = course;
    return (
        <CardGroup>
            <Card className='mb-5'>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    );
};

export default CourseCard;