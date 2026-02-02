import React, { useEffect, useRef } from 'react'
import "./Headder.css"

function Headder() {
  const headerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
          observer.unobserve(entry.target) // run once
        }
      },
      {
        threshold: 0.5
      }
    )

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="headder_wrapper" ref={headerRef}>
      <div className="left-header">
        <p className="fisrt_para">Join 50,000+ skill swappers worldwide</p>

        <h1>
          Learn a Skill. <span>Teach a Skill.</span> No Money Required.
        </h1>

        <p className="second_para">
          Connect with people worldwide to exchange knowledge. Teach what you know,
          learn what you want. Build meaningful connections through peer-to-peer skill sharing.
        </p>

        <div className="buttons-wrapper">
          <button>
            Get Started Free <i className="bi bi-arrow-right"></i>
          </button>
          <button>Browse Skills</button>
        </div>

        <div className="feed_back_section">
          <div className="feed_back">
            <div className="rating">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <div className="rating_para">
              4.9/5 from 12,000+ reviews
            </div>
          </div>

          <div className="rating_acc_profile_pic">
            <img className="rounded-circle" src="images/feedbackimg1.jpg" alt="" />
            <img className="rounded-circle" src="images/feedbackimg2.jpg" alt="" />
            <img className="rounded-circle" src="images/feedbackimg3.jpg" alt="" />
            <img className="rounded-circle" src="images/feedbackimg4.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="right-header">
        <img src="images/rightheader_banner.jpg" alt="" />
        <div className="banner_bg"></div>

        <div className="div_50k">
          <i className="bi bi-people"></i>
          <div><span>50K+</span><br />Active Users</div>
        </div>

        <div className="Div_500">
          <i className="bi bi-book"></i>
          <div><span>500+</span><br />Skills Available</div>
        </div>
      </div>
    </div>
  )
}

export default Headder
