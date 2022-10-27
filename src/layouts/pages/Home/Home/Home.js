import React from 'react';
import './Home.css';
import Banner from '../../../../assets/banner/Banner_img.webp';
import Learning from '../../../../assets/learning/Learning_img.webp'
import { FaGg, FaGraduationCap, FaRegLightbulb } from 'react-icons/fa';

const Home = () => {
    return (
        <div >
          <div className="container mt-5">
            {/* banner area */}
            <div className="row">   
                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                    <div className="title">
                        <div>
                            <h1>Making Your Childs World Better</h1>
                            <p>Etrain works with universities and other organizations to offer online courses, certifications, and degrees in a variety of subjects.</p>
                            <button className='btn_1 me-4 mb-3'>View Course</button>
                            <button className='btn_2'>Get Started</button>
                        </div>
                    </div>
                </div>
                <div className=" col-12 col-sm-12 col-md-12 col-lg-6">
                    <div className="banner">
                    <img className='img-fluid' src={Banner} alt="" />
                    </div>
                
                </div>
            </div>
            {/* feature area */} 
            <div className="feature-area pt-100 pb-100">
            <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-5">
                        <div className="feature-title">
                            <h2>Awesome Feature</h2>
                            <p>We provide Programming Laguage That can students easily understand</p>
                            <button className='btn_1 mt-4'>Read More</button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-3">
                        <div className="feature-card text-center">
                            <FaGraduationCap className='icon'/>
                            <h4>Better Future</h4>
                            <p>You can make your futter better if we complete this courses</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-3">
                        <div className="feature-card text-center">
                            <FaGg className='icon'/>
                            <h4>Qualified Trainers</h4>
                            <p>Our all teachers are qualified they try to learing studens are easy way</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-3">
                        <div className="feature-card text-center">
                            <FaRegLightbulb className='icon'/>
                            <h4>Job Oppurtunity</h4>
                            <p>If these courses are complete then you can apply anywhere for job</p>
                        </div>
                    </div>
                
            </div>
                </div>           
            {/* learning with love area */}
           <div className="learning-area pb-100">
           <div className="row ">
                
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div className="learning-img">
                            <img className='img-fluid' src={Learning} alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="learning-title mt-5">
                            <h2>Learning with Love and Laughter</h2>
                            <p>A programming language is a system of notation for writing computer programs. Most programming languages are text-based formal languages.programming language is a system of notation for writing computer programs.[1] Most programming languages are text-based formal languages, but they may also be graphical. They are a kind of computer language.

                            The description of a programming language is usually split into the two components of syntax (form) and semantics (meaning), which are usually defined by a formal language. Some languages are defined by a specification document (for example, the C programming language is specified by an ISO Standard) while other languages (such as Perl) have a dominant implementation that is treated as a reference. Some languages have both, with the basic language defined by a standard and extensions taken from the dominant implementation being common.</p>
                            </div>
                    </div>
              
            </div>
           </div>
          </div>
        </div>
    );
};

export default Home;