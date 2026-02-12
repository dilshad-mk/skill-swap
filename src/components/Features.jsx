import React from 'react'
import "./Features.css"
function Features() {
  return (
    <div className='wrapper-features' id='Features'>
        
        <div className="text-part">
        <p>Simple Process</p>
        <h1>How SkillSwap Works</h1>
        <p>Get started in minutes and begin exchanging skills with people around the world</p>
      </div>

      <div className="grid-cards">
        <div className="cards-features">
          <i class="bi bi-heart"></i>
          <h3>Completely Free</h3>
          <p>No hidden fees, no subscriptions. Exchange skills without spending money.</p>
        </div>

        <div className="cards-features">
       <i class="bi bi-people"></i>
          <h3>Completely Free</h3>
          <p>No hidden fees, no subscriptions. Exchange skills without spending money.</p>
        </div>

        <div className="cards-features">
         <i class="bi bi-graph-up-arrow"></i>
          <h3>Completely Free</h3>
          <p>No hidden fees, no subscriptions. Exchange skills without spending money.</p>
        </div>

        <div className="cards-features">
       <i class="bi bi-calendar-check"></i>
          <h3>Completely Free</h3>
          <p>No hidden fees, no subscriptions. Exchange skills without spending money.</p>
        </div>

        <div className="cards-features">
        <i class="bi bi-chat"></i>
          <h3>Completely Free</h3>
          <p>No hidden fees, no subscriptions. Exchange skills without spending money.</p>
        </div>

        <div className="cards-features">
         <i class="bi bi-star"></i>
          <h3>Completely Free</h3>
          <p>No hidden fees, no subscriptions. Exchange skills without spending money.</p>
        </div>

      </div>
    </div>
  )
}

export default Features