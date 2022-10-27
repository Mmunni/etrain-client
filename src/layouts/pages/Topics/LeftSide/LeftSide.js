import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSide.css';

const LeftSide = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://etrain-server.vercel.app/courses-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    } , [])
    return (
        <div>
            <div className="left-side">
                <h4 className='mb-3 text-white fw-semi-bold '>All Catagory: {categories.length}</h4>
            {
                categories.map(category => <p key={category.id}>
                    <Link to={`/catagory/${category.id}`}>{category.name}</Link>
                </p>)
            }
                </div>
        </div>
    );
};

export default LeftSide;