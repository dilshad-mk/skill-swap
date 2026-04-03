import React, { useState } from 'react'

function Browse() {

      const [skillslectedSkill,setSkillSelectedSkill]= useState("");

   const users=[
    {
    image:"/images/Sarah_Johnson.jpg",
    name:"Sarah Johnson",
    level:"Expert",
    teaching:"Web Development",
    want_to_learn:"Spanish",
    rating: 4.9,
    message:"I learned Spanish from Maria while teaching her UI design. This platform changed my life! The connections you make are genuine and lasting."

  },
    {
    image:"/images/James_Taylor.jpg", 
    name:"James Taylor",
    level:"Expert",
    teaching:"Public Speaking",
    want_to_learn:"Writing",
    rating: 4.9,
    message:"SkillSwap helped me learn guitar while sharing my coding skills. The community is incredibly supportive and talented."
  },
    {
    image:"/images/Michael_Chen.jpg",  
    name:"Michael Chen",
    level:"Intermediate",
    teaching:"Graphic Design",
    want_to_learn:"Photography",
    rating: 4.8,
    message:"I never thought I could learn video editing for free. Now I run my own production company thanks to the skills I gained here!"
  },
    {
    image:"/images/Emma_Williams.jpg",  
    name:"Emma Williams",
    level:"Expert",
    teaching:"Content Writing",
    want_to_learn:"Video Editing",
    rating: 5
  },
    {
    image:"/images/David_Rodriguez.jpg",  
    name:"David Rodriguez",
    level:"Expert",
    teaching:"Digital Marketing",
    want_to_learn:"UI/UX Design",
    rating: 4.9
  },
    {
    image:"/images/Lisa_Anderson.jpg",  
    name:"Lisa Anderson",
    level:"Intermediate",
    teaching:"Photography",
    want_to_learn:"Music Production",
    rating: 4.7
  }
]
  return (
    <div className='flex flex-col justify-center'>
      <h2 className='!text-xl md:!text-2xl'>Browse Skills</h2>
      <p className='relative  text-sm'>Discover talented people ready to exchange skills</p>

{/* filter box--------------------------------------------------------------- */}
 <div className='flex flex-col gap-3 border-2 border-gray-300 px-3 py-3 rounded-xl bg-white md:w-full'>
    <div className='w-full'>
    <input type="search" placeholder='Search by skills,name....' className='w-full border bg-blue-50 px-2 rounded-md placeholder:text-[12px] text-sm focus:ring-blue-50 ring-amber-100' />
   </div>
      
      <div className='flex  flex-wrap gap-3 justify-between'>
        <select name="" id="" onChange={(e)=> setSkillSelectedSkill(e.target.value)} className='border-2 border-gray-200 lg:w-60 rounded-md text-[10px] bg-blue-50 !text-sm px-1'>
          <option value="All">All</option>
          <option value="Web Developme nt">Web Development</option>
        <option value="Graphic Design">Graphic Design</option>
        <option value="Photography">Photography</option>
        </select>

        <select name="" id="" className='border-2 border-gray-200 lg:w-60 rounded-md !text-sm bg-blue-50 px-1'>
          <option  value="All">All Levels</option>
          <option value="Web Development">Amatuer</option>
        <option value="Graphic Design">Intermediate</option>
        <option value="Photography">Pro</option>
        </select>

        <select name="" id="" className='border-2 border-gray-200 lg:w-60 rounded-md !text-sm bg-blue-50 px-1'>
          <option  value="All">Highest Rated</option>
          <option value="Web Development">Most Reviews</option>
        <option value="Photography">Newest First</option>
        </select>
      </div>

 </div>

         <p className='mt-5'>Showing 6 skill swappers <br /></p>
    <div className='lg:flex lg:flex-wrap gap-2 justify-center w-full'>
       {users.map((userdata)=>(
         <div className='bg-white border-2 border-gray-200 px-3 py-4 rounded-2xl lg:w-[32%]'>
           <div className='pb-3'>
             <div className='flex gap-3 items-center'>
               <div className='rounded-full relative bottom-3.5'>
                 <img src={userdata.image} alt="" className='rounded-full w-15'/>
               </div>
               <div>
                 <p className='leading-2 font-bold text-sm'>{userdata.name}</p>
                 <p className='leading-0 text-xs font-semibold'><i className="fa fa-star !text-yellow-500"></i> {userdata.rating}</p>
                 <p className='leading-2 text-xs font-semibold bg-blue-50 w-full py-2 rounded-2xl text-center'>{userdata.level}</p>
               </div>
             </div>

             <div>
               <p className='text-xs '>Teaching</p>
               <p className='text-blue-500 font-semibold leading-0 text-xs'>{userdata.teaching}</p>
             </div>

             <div>
               <p className='text-xs '>Wants to Learn</p>
               <p className='text-purple-500 font-semibold leading-0 text-xs'>{userdata.want_to_learn}</p>
             </div>

           </div>

           <div className='border-t-1 border-gray-200 py-3 flex justify-between'>
            <button className='border border-gray-200 px-3 py-1 !text-[12px] font-semibold !rounded-md hover:bg-blue-50'>View Profile</button>
            <button className='border border-gray-200 px-3 py-1 !text-[12px] font-semibold !rounded-md bg-linear-to-r from-purple-600 to-blue-600 text-white hover:shadow-md '>Request Swap</button>
           </div>
         </div>

       ))}
    </div>
              <button className='mt-4 border-2 w-fit self-center px-7 py-1 border-gray-300 !rounded-md !text-sm font-semibold text-gray-600' >Load More Results</button>
    </div>
  )
}

export default Browse