import React from 'react'
import "./Features.css"
function Features() {
  return (
    <div className='wrapper-features' id='features'>
        
        <div className="text-part">
        <p>Why Choose Us</p>
        <h1>Why SkillSwap?</h1>
        <p>The best platform for peer-to-peer skill exchange</p>
      </div>

      <div className="grid-cards">
        <div className="cards-features">
          <i class="bi bi-heart"></i>
          <h3>Completely Free</h3>
          <p>No hidden fees, no subscriptions. Exchange skills without spending money.</p>
        </div>

        <div className="cards-features">
       <i class="bi bi-people"></i>
          <h3>Global Community</h3>
          <p>Connect with learners and teachers from over 150 countries worldwide.</p>
        </div>

        <div className="cards-features">
         <i class="bi bi-graph-up-arrow"></i>
          <h3>Skill Growth</h3>
          <p>Track your progress and see your skills improve over time.</p>
        </div>

        <div className="cards-features">
       <i class="bi bi-calendar-check"></i>
          <h3>Flexible Scheduling</h3>
          <p>Book sessions that fit your schedule with our smart calendar system.</p>
        </div>

        <div className="cards-features">
        <i class="bi bi-chat"></i>
          <h3>Easy Communication</h3>
          <p>Built-in messaging and video calls for seamless learning sessions.</p>
        </div>

        <div className="cards-features">
         <i class="bi bi-star"></i>
          <h3>Quality Assured</h3>
          <p>Rating and review system ensures high-quality skill exchanges.</p>
        </div>

      </div>
    </div>
  )
}

export default Features