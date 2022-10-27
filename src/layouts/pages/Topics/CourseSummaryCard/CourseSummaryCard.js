import React from 'react';
import { FaRegEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import './CourseSummaryCard.css';

const CourseSummaryCard = ({course}) => {
    const {_id,title, details, image_url, rating ,total_view} = course;
    return (
        <div>
            <div className="container">
            <Card >
            <Card.Body>
                <Card.Img variant="top" src={image_url} />
                <Card.Title className='text-center Fw-bold fs-3 my-3 title-card'>{title}</Card.Title>
                <Card.Text>
                {
                    details.length > 150 ? 
                    <p>{details.slice(0, 150) + '....'} <Button variant='primary' className='primium-btn'><Link to={`/courses/${_id}`}>Get Primium Access</Link></Button></p>
                    :
                    <p className='mt-4'>{details}</p>
                }
                </Card.Text>
               
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <div>
                   <FaStar className='me-1 text-warning'></FaStar> 
                   <span>{rating?.number}</span>
                </div>
                <div>
                     <FaRegEye className='me-2'/>
                     <span>{total_view}</span>
                </div>
            </Card.Footer>
            </Card>
            </div>
        </div>
    );
};

export default CourseSummaryCard;
