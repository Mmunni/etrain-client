import React from 'react';
import './Home.css';
import Banner from '../../../../assets/banner/Banner_img.webp';
import Learning from '../../../../assets/learning/Learning_img.webp'
import { FaGg, FaGraduationCap, FaRegLightbulb } from 'react-icons/fa';

const Home = () => {
    return (
        <div >
          <div className="container">
            {/* banner area */}
            <div className="row-cols-12 row-cols-lg-6">
                <div className="banner-area d-flex justify-content-center align-items-center">
                <div className="col-6">
                    <div className="title">
                    <h1>Making Your Childs World Better</h1>
                    <p>Etrain works with universities and other organizations to offer online courses, certifications, and degrees in a variety of subjects.</p>
                    <button className='btn_1 me-4 mb-3'>View Course</button>
                    <button className='btn_2'>Get Started</button>
                    </div>
                </div>
                <div className=" col-6">
                    <div className="banner">
                    <img className='img-fluid' src={Banner} alt="" />
                    </div>
                </div>
                </div>
            </div>
            {/* feature area */}
            <div className="row pt-100 pb-100 ">
                <div className="feature d-flex ">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="feature-title">
                            <h2>Awesome Feature</h2>
                            <p>We provide Programming Laguage That can students easily understand</p>
                            <button className='btn_1 mt-4'>Read More</button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="feature-card text-center">
                            <FaGraduationCap className='icon'/>
                            <h4>Better Future</h4>
                            <p>You can make your futter better if we complete this courses</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="feature-card text-center">
                            <FaGg className='icon'/>
                            <h4>Qualified Trainers</h4>
                            <p>Our all teachers are qualified they try to learing studens are easy way</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="feature-card text-center">
                            <FaRegLightbulb className='icon'/>
                            <h4>Job Oppurtunity</h4>
                            <p>If these courses are complete then you can apply anywhere for job</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* learning with love area */}
            <div className="row  pb-100">
                <div className="learning-area d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="learning-img">
                            <img className='img-fluid' src={Learning} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="learning-title">
                            <h2>Learning with Love and Laughter</h2>
                            <p>A programming language is a system of notation for writing computer programs. ... Most programming languages are text-based formal languages.</p>
                            </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Home;