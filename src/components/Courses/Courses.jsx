import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/courses`)
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div>
            <h4 className='text-center mt-5 mb-5'>OUR ALL PAID COURSES</h4>
            {
                courses.map(course =>
                    <CourseCard key={course._id} course={course}></CourseCard>
                )
            }
        </div>
    );
};

export default Courses;