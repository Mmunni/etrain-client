import React from 'react';
import { Card } from 'react-bootstrap';
import { FaFileDownload } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import "./Courses.css";

import Pdf from "react-to-pdf";

const ref = React.createRef();

const Courses = () => {
    const course = useLoaderData();
     const { title, details, image_url} = course;
    return (
        <div>
            <div className="container">
            <div className="pdf-style">
        <Pdf targetRef={ref} filename="courses.pdf">
        {({ toPdf }) => <button className='text-end mb-5 mt-3' onClick={toPdf}><FaFileDownload/>Generate Pdf</button>}
        </Pdf>
      <div ref={ref}>
            <div className="row">
                
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
    </div>
            </div>

    
        </div>
    );
};


export default Courses;