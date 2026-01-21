import React from 'react'
import './How_it_works.css'

function How_it_works() {
  return (
    <section className='wrapper' id='how-it-works'>
      <div className='text_part'>
         <p>Simple Process</p>
       <h1>How SkillSwap Works</h1>
       <p>Get started in minutes and begin exchanging skills with people around the world</p>
      </div>
      <div className='card_part_grid'>
        <div className='cards'>
            <i class="bi bi-people"></i>
            <h6>Create Your Profile</h6>
            <p>Sign up and tell us what skills you can teach and what you want to learn</p>
            <div className="circle rounded-circle">1</div>
        </div>
        <div className='cards'>
            <i class="bi bi-book"></i>
            <h6>Browse & Connect</h6>
            <p>Find people with skills you want to learn and who want to learn your skills</p>
            <div className="circle rounded-circle">2</div>
        </div>
        <div className='cards'>
            <i class="bi bi-calendar"></i>
            <h6>Schedule Sessions</h6>
            <p>Book convenient time slots for video calls or chat sessions</p>
            <div className="circle rounded-circle">3</div>
        </div>
        <div className='cards'>
           <i class="bi bi-check-circle"></i>
            <h6>Start Learning</h6>
            <p>Exchange knowledge, build skills, and make meaningful connections</p>
            <div className="circle rounded-circle">4</div>
        </div>
      </div>
    </section>
  )
}

export default How_it_works