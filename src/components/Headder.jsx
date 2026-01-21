import React from 'react'
import "./Headder.css"
function Headder() {
    return (
        <div className='headder_wrapper'>
            <div className='left-header'>
                <div><p className='fisrt_para'>Join 50,000+ skill swappers worldwide</p></div>
                <div>
                    <h1>Learn a Skill. <span>Teach a Skill.</span> No Money Required.</h1>
                </div>
                <div>
                    <p className='second_para'>Connect with people worldwide to exchange knowledge. Teach what you know, learn what you want. Build meaningful connections through peer-to-peer skill sharing.</p>
                </div>
                <div className='buttons-wrapper'>
                    <button>Get Started Free <i class="bi bi-arrow-right"></i></button>
                    <button>Browse Skills</button>
                </div>
                <div className='feed_back_section'>
                    <div className='feed_back'>
                        <div className='rating'>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                        </div>
                        <div className='rating_para'>p4.9/5 from 12,000+ reviews</div>
                    </div>
                    <div className='rating_acc_profile_pic'>
                        <img className='rounded-circle' src="images\feedbackimg1.jpg" alt="" />
                        <img className='rounded-circle' src="images\feedbackimg2.jpg" alt="" />
                        <img className='rounded-circle' src="images\feedbackimg3.jpg" alt="" />
                        <img className='rounded-circle' src="images\feedbackimg4.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className='right-header'>
                <img src="images\rightheader_banner.jpg" alt="" />
                <div className="banner_bg"></div>
                <div className='div_50k'>
                    <div><i class="bi bi-people"></i></div>
                    <div><span>50K+</span><br />Active Users</div>
                </div>
                <div className='Div_500'>
                    <div><i class="bi bi-book"></i></div>
                    <div><span>500+</span> <br />Skills Available</div>
                </div>
            </div>
        </div>
    )
}

export default Headder