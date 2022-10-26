import React from 'react';
import './Home.css';
import Banner from '../../../../assets/banner/Banner_img.webp'

const Home = () => {
    return (
        <div >
          <div className="container">
            <div className="row">
                <div className="banner-area d-flex justify-content-center align-items-center">
                <div className="col-6">
                    <div className="title">
                    <h1>Making Your Childs World Better</h1>
                    <p>A programming language is a system of notation for writing computer programs. ... Most programming languages are text-based formal languages.</p>
                    <button className='btn_1 me-4'>View Course</button>
                    <button className='btn_2'>Get Started</button>
                    </div>
                </div>
                <div className="col-6">
                    <div className="banner">
                    <img className='img-fluid' src={Banner} alt="" />
                    </div>
                </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Home;