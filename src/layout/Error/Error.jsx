import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError()
    const { statusText, status } = error;
    return (
        <div className='text-center text-danger' style={{ marginTop: '200px' }}>
            <h4>{statusText}</h4>
            <h5>{status}</h5>
            <p>Get Out from this page.<Link className='fw-semibold' to='/'> home</Link></p>
        </div>
    );
};

export default Error;