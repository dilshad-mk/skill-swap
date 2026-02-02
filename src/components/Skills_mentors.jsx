import React from 'react'
import { useEffect, useRef } from 'react'

import "./Skills_mentors.css"
function Skills_mentors({userData}) {

  
  /* 🔹 ADD */
  const sectionRef = useRef(null)

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        entry.target.classList.add('animate')
        observer.unobserve(entry.target)
      }
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    }
  )

  if (sectionRef.current) {
    observer.observe(sectionRef.current)
  }

  return () => observer.disconnect()
}, [])


 



  
  return (
    <div className='Wrapper' ref={sectionRef}>

    {/* text part */}
     <div className="text-Part">
        <p>Popular Skills</p>
        <h1>Featured Skills & Mentors</h1>
        <p>Discover talented individuals ready to share their expertise</p>
      </div>

      {/* card part */}
      <div className="card_grid">
        {userData.map((user)=>(
          <div className="card">

            {/* user card top div (profile photo name etc..) */}
             <div className='user_info'>
              <div className="user_profile_photo">
              <img className='rounded-circle' src={user.image} alt={user.image} ></img>
             </div>
             {/* user details  */}

           <div className="user_details">
              <h6>{user.name}</h6>
              <p>{user.level}</p>
           </div>
             </div>

           {/* skill section  */}
           <div className='card-skills'>
            <p>Teaching</p>
            <h6>{user.teaching}</h6>
            <p>Want To Learn</p>
            <h6>{user.want_to_learn}</h6>
           </div>

           

            {/* rating */}
            <div className='rating'>
              <h6><i className="bi bi-star-fill me-2"></i>{user.rating}</h6>
              <button>View Profile</button>

            </div>

          </div>
        ))}
      </div>

        <button className='brows-btn'>Browse All Skills <i className="bi bi-arrow-right ms-2"></i></button>
    </div>
  )
}

export default Skills_mentors