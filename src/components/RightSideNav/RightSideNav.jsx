import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';


const RightSideNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/category`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='mt-5'>
            <h4 className='border border-success rounded p-2 text-center'>Our main courses: {categories.length}</h4>
            {
                categories.map(category => <p className='text-center mt-5'>
                    <Button className='w-75' variant='success'><Link className='text-decoration-none text-light fw-semibold' to={`category/${category.id}`}>{category.categories}</Link></Button>
                </p>)
            }
        </div>
    );
};

export default RightSideNav;