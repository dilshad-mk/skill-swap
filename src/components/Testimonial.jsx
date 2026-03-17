import React from 'react'
import "./Testimonial.css"

function Testimonial({userData}) {
  return (
    <div className='testimonial-wrapper' id='testimonials'>
       <div className="text-part-testmonial">
        <p>Success Stories</p>
        <h1>What Our Community Says</h1>
        <p>Real stories from real people who transformed their skills</p>

       </div>
       {/* card_grid */}
       <div className='Card_grid'>
  {userData.slice(0, 3).map((user, index) => (
      <div className="testimonial-card" key={index}>
       <div style={{display:"flex",gap:"4px"}}>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
       </div>
        <div><p style={{fontStyle:"italic",fontSize:"15px",fontWeight:"390"}}>"{user.message}"</p></div>
         {/* profile photo name part */}
           <div style={{display:"flex",gap:"20px", justifyContent:"center", marginTop:"40px"}}>

             <div><img src={user.image} alt="" style={{ width: "48px"}} className='rounded-circle' /></div>
          
          <div>
              <div><h6 style={{fontSize:"14px"}}>{user.name}</h6></div>
            <div><p style={{fontSize:"12px",color:"gray"}}>{user.want_to_learn}</p></div>
          </div>
        
           </div>
        </div>
        
     
    ))
  }
</div>

    </div>
  )
}

export default Testimonial