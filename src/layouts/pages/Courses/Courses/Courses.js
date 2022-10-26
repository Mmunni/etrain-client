import React from 'react';
import './Courses.css'

import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../CourseSummaryCard/CourseSummaryCard';
import LeftSide from '../LeftSide/LeftSide';

const Courses = () => {
  
     const allCourse = useLoaderData();
    return (
        <div>
            <div className="container">
                <h1 className='Course-title'>Courses</h1>
                <div className="row">
                <div className="col-3">
                     <LeftSide></LeftSide> 
                </div>
                <div className="col-9 mb-5">
                     <div className="rigth-side-card mb-5">
                    {
                        allCourse.map(course => <CourseSummaryCard
                        key={course._id}
                        course={course}
                     ></CourseSummaryCard>)
                    }
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;