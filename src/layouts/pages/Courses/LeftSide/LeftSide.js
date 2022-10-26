import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/courses-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    } , [])
    return (
        <div>
            <div className="left-side">
                <h4>All Catagory: {categories.length}</h4>
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