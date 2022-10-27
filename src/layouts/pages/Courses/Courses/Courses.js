import React from 'react';
import { Card } from 'react-bootstrap';
import { FaFileDownload } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const course = useLoaderData();
    const { title, details, image_url} = course;
    console.log(course)
    return (
        <div>
             <div className="container my-5">
                <div className='fs-2 text-end mb-5'>
                <FaFileDownload/>
                </div>
             <Card>
                 <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {details}
                             </Card.Text>
                    </Card.Body>
                </Card>
             </div>
        </div>
    );
};

export default Courses;