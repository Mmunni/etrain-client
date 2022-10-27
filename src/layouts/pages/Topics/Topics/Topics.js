import React from 'react';
import './Topics.css'
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../CourseSummaryCard/CourseSummaryCard';
import LeftSide from '../LeftSide/LeftSide';

const Topics = () => {
  
     const allCourse = useLoaderData();
    return (
        <div>
            <div className="container">
                <h1 className='Course-title'>Courses</h1>
                <div className="row">
                <div className="col-lg-3 col-sm-12">
                     <LeftSide></LeftSide> 
                </div>
                <div className="col-lg-9 col-sm-12 col-12 mb-5">
                     <div className="right-side-card mb-5">
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

export default Topics;