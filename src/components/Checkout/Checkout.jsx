import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const categoryName = useLoaderData();
    const { course, name } = categoryName;

    return (
        <div className='text-center mt-5'>
            <h4> Thanks For Access: <small className='text-primary fw-bold'>{name}</small> Course</h4>
            <h6>Your Course Access id: <span className='text-success fw-bold'>{course}</span></h6>
            <div className='fw-bold'>
                কি আছে আর জীবনে!!
            </div>
        </div>
    );
};

export default Checkout;