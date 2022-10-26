import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../CourseSummaryCard/CourseSummaryCard';

const Category = () => {
    const categoryCourses = useLoaderData();
    return (
        <div>
             <h2 className='mb-5 text-center'>Courses: {categoryCourses.length}</h2>
            {
                        categoryCourses.map(course => <CourseSummaryCard
                        key={course._id}
                        course={course}
                     ></CourseSummaryCard>)
            }
        </div>
    );
};

export default Category;