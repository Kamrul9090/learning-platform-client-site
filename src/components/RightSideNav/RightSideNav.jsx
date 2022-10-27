import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const RightSideNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/category`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='mt-5 text-center'>
            <h3>Our main courses: {categories.length}</h3>
            {
                categories.map(category => <p><Link to={`category/${category.id}`}>{category.categories}</Link></p>)
            }
        </div>
    );
};

export default RightSideNav;