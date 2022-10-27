import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaDiscord } from "react-icons/fa";

const Checkout = () => {
    const categoryName = useLoaderData();
    const { course, name } = categoryName;

    return (
        <div className='text-center' style={{ marginTop: '200px' }}>
            <h4> Thanks For Access <p className='text-primary fw-bold'>{name}</p> Course</h4>
            <h6><small>Your Course Access id:</small> <span className='text-success fw-bold'>{course}</span></h6>
            <div>
                <FaDiscord style={{ width: '300px', height: '100px', color: 'green' }}></FaDiscord>
            </div>
        </div>
    );
};

export default Checkout;