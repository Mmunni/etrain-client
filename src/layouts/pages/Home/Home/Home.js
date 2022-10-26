import React from 'react';
import './Home.css';
import Banner from '../../../../assets/banner/Banner_img.webp'
import { FaGg, FaGraduationCap, FaRegLightbulb } from 'react-icons/fa';

const Home = () => {
    return (
        <div >
          <div className="container">
            {/* banner area */}
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
            {/* feature area */}
            <div className="row pt-100 pb-100 ">
                <div className="feature d-flex ">
                    <div className="col-3">
                        <div className="feature-title">
                            <h2>Awesome Feature</h2>
                            <p>We provide Programming Laguage That can students easily understand</p>
                            <button className='btn_1 mt-4'>Read More</button>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="feature-card text-center">
                            <FaGraduationCap className='icon'/>
                            <h4>Better Future</h4>
                            <p>You can make your futter better if we complete this courses</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="feature-card text-center">
                            <FaGg className='icon'/>
                            <h4>Qualified Trainers</h4>
                            <p>You can make your futter better if we complete this courses</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="feature-card text-center">
                            <FaRegLightbulb className='icon'/>
                            <h4>Job Oppurtunity</h4>
                            <p>You can make your futter better if we complete this courses</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Home;