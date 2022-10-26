import React from 'react';
import { FaRegBookmark, FaRegEye, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

const CourseSummaryCard = ({course}) => {
    const {_id,author, title, details, image_url, rating ,total_view} = course;
    return (
        <div>
            <div className="container">
            <Card >
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <div className='me-3'>
                        <Image 
                        roundedCircle
                        src={author?.img}
                        style = {{height: '60px'}}
                        >
                        </Image>
                    </div>
                    <div>
                        <p className='mb-0'>{author?.name}</p>
                        <p>{author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-2'/>
                    <FaShareAlt/>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className='text-center fs-3 fw-bold mb-2'>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                {
                    details.length > 150 ? 
                    <p>{details.slice(0, 150) + '....'} <Link to={`/news/${_id}`}>Read More</Link></p>
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
