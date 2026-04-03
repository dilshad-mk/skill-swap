import React from 'react'

function DashBordHome({userData}) {
  
    
  return (
    
      <div className='flex flex-col justify-center items-center w-full'>
        <h1 className='!text-xl md:!text-2xl relative '>Welcome back, {userData?.name } 👋</h1>
      <p className='relative  text-sm'>Here's what's happening with your skill swaps today</p>
    
    {/* activities ------------------- */}
      <div className='flex xl:gap-5 gap-2 flex-wrap  w-full  justify-center items-center mt-3'>

        <div className='flex gap-5  justify-between items-center bg-white xl:w-[20%] py-2 px-2 md:px-3 w-[40%] rounded-2xl md:h-25 h-30 border hover:shadow-xl hover:translate-y-[-4px] duration-300 cursor-pointer'>
            <div><p className='md:text-[12px] text-[8.5px] text-gray-500'>Active Swaps</p>
                  <p className='font-bold'>8</p>
            </div>
            <div className='bg-blue-200 rounded-2xl w-10 h-10 rounded-2xl flex justify-center items-center'><i className="text-blue-600 fa-solid fa-user-group"></i></div>
        </div>

        <div className='flex gap-5 justify-between items-center bg-white xl:w-[20%] py-2 px-2 md:px-3 w-[40%] rounded-2xl md:h-25 h-30 border hover:shadow-xl hover:translate-y-[-4px] duration-300 cursor-pointer'>
            <div><p className='md:text-[12px] text-[8.5px] text-gray-500'>Completed</p>
                  <p className='font-bold'>24</p>
            </div>
            <div className='bg-green-200 rounded-2xl w-10 h-10 rounded-2xl flex justify-center items-center'><i className="text-green-600 fa-regular fa-circle-check"></i></div>
        </div>

        <div className='flex gap-5 justify-between items-center bg-white xl:w-[20%] py-2 px-2 md:px-3 w-[40%] rounded-2xl md:h-25 h-30 border hover:shadow-xl hover:translate-y-[-4px] duration-300 cursor-pointer'>
            <div><p className='md:text-[12px] text-[8.5px] text-gray-500'>Hours Learned</p>
                  <p className='font-bold'>127</p>
            </div>
            <div className='bg-purple-200 rounded-2xl w-10 h-10 rounded-2xl flex justify-center items-center'><i className="text-purple-600 fa-regular fa-clock"></i></div>
        </div>

        <div className='flex gap-5 justify-between items-center bg-white xl:w-[20%] py-2 px-2 md:px-3 w-[40%] rounded-2xl md:h-25 h-30 border hover:shadow-xl hover:translate-y-[-4px] duration-300 cursor-pointer'>
            <div><p className='md:text-[12px] text-[8.5px] text-gray-500'>Avg Rating</p>
                  <p className='font-bold'>4.9</p>
            </div>
            <div className='bg-orange-200 rounded-2xl w-10 h-10 rounded-2xl flex justify-center items-center'><i className="text-orange-600 fa-regular fa-star"></i></div>
        </div>

      </div>


      {/* upcomming sessions---------- */}
            <div className='xl:w-[82%] w-full xl:flex  gap-4 relative '>
              {/* left side ----------- */}
              <div className='xl:w-[65%]'>
                {/* top ------------------------*/}

             <div className='bg-white mt-4 rounded-2xl border border-[black] flex flex-col gap-3 py-4'>
                <div className='flex justify-between px-4 py-1'>
                 <p className='text-[10px] md:text-[12px]'>Upcomming Sessions</p>
                <p className='text-[10px] md:text-[12px] hover:bg-blue-50 px-2 rounded-xl duration-300 cursor-pointer'>View All</p>
               </div>

               {/* cards */}
                <div className='flex flex-col px-2 md:!px-4 gap-3'>
                    {/* card-1-------------- */}
                  <div className='flex justify-between px-4 !min-h-15 py-2 md:!py-4 items-center rounded-md bg-blue-50'>
                    {/* left--div------------- */}
                      <div className='flex justify-center items-center gap-3'>
                          <div className='rounded-full w-10'> {/*image div  */}
                               <img src="public\images\Sarah_Johnson.jpg" alt="" className='rounded-full '/>
                            </div>   
                            
                              
                            <div className='flex flex-col justify-center  relative top-1.5'> {/* name and skill div */} 
                                <p className='md:text-[12px] text-[10px] font-bold leading-0 mt-1'>Sarah Jhonson</p>
                                <p className='md:text-[12px] text-[10px] leading-1 mt-'>WebDevelopment</p>
                            </div>

                      </div>
                        {/* right div  */}
                        <div className='flex gap-3 justify-center items-center '>
                                    <div className='relative top-1.5'> {/* time and session div     */}
                                            <p className='md:text-[12px] text-[10px] leading-0 text-blue-800'>Today, 2:00 PM </p>
                                            <p className='md:text-[12px] text-[10px] leading-1'> Video Call</p>
                                    </div>

                                    <div>{/* join btn div  */}
                                      <button className='!text-[10px] md:!text-[12px] bg-blue-600 py-2 font-bold text-white !rounded-md px-2'>
                                            Join
                                      </button>
                                    </div>

                        </div>

                  </div>
                  {/* ------------------------------------------ */}
                    {/* card2--------------- */}
                  <div className='flex justify-between px-4 !min-h-15 py-2 md:!py-4 items-center rounded-md bg-blue-50'>
                    {/* left--div------------- */}
                      <div className='flex justify-center items-center gap-3'>
                          <div className='rounded-full w-10'> {/*image div  */}
                               <img src="public\images\Michael_Chen.jpg" alt="" className='rounded-full '/>
                            </div>   
                            
                              
                            <div className='flex flex-col justify-center  relative top-1.5'> {/* name and skill div */} 
                                <p className='md:text-[12px] text-[10px] font-bold leading-0 mt-1'>Michael Chen</p>
                                <p className='md:text-[12px] text-[10px] leading-1 mt-'>Graphic Design
</p>
                            </div>

                      </div>
                        {/* right div  */}
                        <div className='flex gap-3 justify-center items-center '>
                                    <div className='relative top-1.5'> {/* time and session div     */}
                                            <p className='md:text-[12px] text-[10px] leading-0 text-blue-800'>Tommorrow, 10:00 AM </p>
                                            <p className='md:text-[12px] text-[10px] leading-1'> Chat</p>
                                    </div>

                                    <div>{/* join btn div  */}
                                      <button className='!text-[10px] md:!text-[12px] bg-blue-600 py-2 font-bold text-white !rounded-md px-2'>
                                            Join
                                      </button>
                                    </div>

                        </div>

                  </div>
                  {/* ------------------------------------------ */}
                    {/* card3--------------- */}
                  <div className='flex justify-between px-4 !min-h-15 py-2 md:!py-4 items-center rounded-md bg-blue-50'>
                    {/* left--div------------- */}
                      <div className='flex justify-center items-center gap-3'>
                          <div className='rounded-full w-10'> {/*image div  */}
                               <img src="public\images\Emma_Williams.jpg" alt="" className='rounded-full '/>
                            </div>   
                            
                              
                            <div className='flex flex-col justify-center  relative top-1.5'> {/* name and skill div */} 
                                <p className='md:text-[12px] text-[10px] font-bold leading-0 mt-1'>Emma Williams</p>
                                <p className='md:text-[12px] text-[10px] leading-1 mt-'>Content Writing</p>
                            </div>

                      </div>
                        {/* right div  */}
                        <div className='flex gap-3 justify-center items-center '>
                                    <div className='relative top-1.5'> {/* time and session div     */}
                                            <p className='md:text-[12px] text-[10px] leading-0 text-blue-800'>Friday, 3:00 PM </p>
                                            <p className='md:text-[12px] text-[10px] leading-1'> Video Call</p>
                                    </div>

                                    <div>{/* join btn div  */}
                                      <button className='!text-[10px] md:!text-[12px] bg-blue-600 py-2 font-bold text-white !rounded-md px-2'>
                                            Join
                                      </button>
                                    </div>

                        </div>

                  </div>
                  {/* ------------------------------------------ */}

                </div>
             </div>
             {/* ------------------- *---------------------------/}


               {/* btm */}
               <div>

                 <div className='bg-white mt-4 rounded-2xl border border-[black] flex flex-col gap-3 py-4'>
                <div className='flex justify-between px-4 py-1'>
                 <p className='text-[10px] md:text-[12px]'>Recent Swap Requests</p>
                <p className='text-[10px] md:text-[12px] hover:bg-blue-50 px-2 rounded-xl duration-300 cursor-pointer'>View All</p>
               </div>

               {/* cards */}
                <div className='flex flex-col px-2 md:!px-4 gap-3'>
                    {/* card-1-------------- */}
                  <div className='flex justify-between px-4 !min-h-15 py-2 md:!py-4 items-center rounded-md bg-blue-50'>
                    {/* left--div------------- */}
                      <div className='flex justify-center items-center gap-3'>
                          <div className='rounded-full w-10'> {/*image div  */}
                               <img src="public\images\David_Rodriguez.jpg" alt="" className='rounded-full '/>
                            </div>   
                            
                              
                            <div className='flex flex-col justify-center  relative top-1.5'> {/* name and skill div */} 
                                <p className='md:text-[12px] text-[10px] font-bold leading-0 mt-1'>David Rodriguez</p>
                                <p className='md:text-[12px] text-[10px] leading-3 mt-'>Wants to learn Digital Marketing</p>
                                <p className='md:text-[10px] text-[#808080b6] text-[8px] leading-0 relative bottom-2'>2h ago</p>
                            </div>

                      </div>
                        {/* right div  */}
                        <div className='flex gap-3 justify-center items-center '>
                                    <div className='flex justify-center items-center gap-2'> {/* ipdations div     */}
                                            <p className='md:text-[12px] text-[10px] bg-green-200 px-1 py-1 rounded-md'><i className="text-green-600 fa-regular fa-circle-check"></i></p>
                                            <p className='md:text-[12px] text-[10px]  bg-white px-1 py-1 rounded-md'> <i className="text-red-600 fa-regular fa-circle-xmark"></i></p>
                                            <p className='md:text-[12px] text-[10px] leading-1 '> </p>
                                    </div>

                           

                        </div>

                  </div>
                  {/* ------------------------------------------ */}

                    {/* card-2-------------- */}
                  <div className='flex justify-between px-4 !min-h-15 py-2 md:!py-4 items-center rounded-md bg-blue-50'>
                    {/* left--div------------- */}
                      <div className='flex justify-center items-center gap-3'>
                          <div className='rounded-full w-10'> {/*image div  */}
                               <img src="public\images\Lisa_Anderson.jpg" alt="" className='rounded-full '/>
                            </div>   
                            
                              
                            <div className='flex flex-col justify-center  relative top-1.5'> {/* name and skill div */} 
                                <p className='md:text-[12px] text-[10px] font-bold leading-0 mt-1'>Lisa Anderson</p>
                                <p className='md:text-[12px] text-[10px] leading-3 mt-'>Wants to learn Photography</p>
                                <p className='md:text-[10px] text-[#808080b6] text-[8px] leading-0 relative bottom-2'>5h ago</p>
                            </div>

                      </div>
                        {/* right div  */}
                        <div className='flex gap-3 justify-center items-center '>
                                    <div className='flex justify-center items-center gap-2'> {/* ipdations div     */}
                                            
                                            <p className='md:text-[12px] text-[10px] bg-blue-300 px-2 rounded-md'>accepted</p>
                                    </div>

                           

                        </div>

                  </div>
                  {/* ------------------------------------------ */}

                    {/* card-3-------------- */}
                  <div className='flex justify-between px-4 !min-h-15 py-2 md:!py-4 items-center rounded-md bg-blue-50'>
                    {/* left--div------------- */}
                      <div className='flex justify-center items-center gap-3'>
                          <div className='rounded-full w-10'> {/*image div  */}
                               <img src="public\images\James_Taylor.jpg" alt="" className='rounded-full '/>
                            </div>   
                            
                              
                            <div className='flex flex-col justify-center  relative top-1.5'> {/* name and skill div */} 
                                <p className='md:text-[12px] text-[10px] font-bold leading-0 mt-1'>James Taylor</p>
                                <p className='md:text-[12px] text-[10px] leading-3 mt-'>Wants to learn Public Speaking</p>
                                <p className='md:text-[10px] text-[#808080b6] text-[8px] leading-0 relative bottom-2'>1d ago</p>
                            </div>

                      </div>
                        {/* right div  */}
                        <div className='flex gap-3 justify-center items-center '>
                                    <div className='flex justify-center items-center gap-2'> {/* ipdations div     */}
                                            
                                            <p className='md:text-[12px] text-[10px] bg-blue-300 px-2 rounded-md'>accepted</p>
                                    </div>

                           

                        </div>

                  </div>
                  {/* ------------------------------------------ */}
                  

                </div>
             </div>

               </div>
              </div>

              {/* right side --- */}
                <div className='xl:w-[33%]'>
                  {/* top --------- */}
                  <div className='bg-white mt-4 rounded-2xl border border-[black] flex flex-col gap-3 py-4'>
                    
                <div className='px-4 py-1'>
                 <p className='text-[10px] md:text-[12px]'>Suggested Matches</p>
               </div>

                       {/* cards-------------------  */}
                         <div>
                              
                              <div className='flex gap-2 flex-col px-3'>     {/* card 1-------------- */}

                                      <div className='flex gap-2 md:justify-between '>{/* top  */}

                                          <div className='rounded-full w-10 relative bottom-1.5'> {/* image div */}
                                        <img src="public\images\Emma_Williams.jpg" alt="" className='rounded-full'/>
                                    </div>

                                      <div className='flex flex-col gap-1 justify-center relative left-2 md:left-0'> {/* detail div */}

                                            <div className=''>
                                              <p className='text-[10px] md:text-[12px] !font-bold leading-0'>
                                                Priya Sharma
                                              </p>
                                              <p className='text-[10px] md:text-[12px] !font-bold leading-0'><i className="text-yellow-500 fa-solid fa-star"></i> 4.9</p>
                                            </div>

                                            <div>
                                              <p className='text-[10px] md:text-[12px] !font-bold leading-0 text-blue-500'>Teaches: <span className='text-[10px] md:text-[12px] !font-light
                                               leading-0 text-black'>Spanish</span></p>

                                              <p className='text-[10px] md:text-[12px] !font-bold leading-0 text-purple-500'>Wants: <span className='text-[10px] md:text-[12px] !font-light
                                               leading-0 text-black'>UI/UX Design</span></p>
                                            </div>

                                      </div>
                                      
                                      <div>
                                        <p className='bg-green-100 text-green-500 text-[12px] font-semibold px-2 rounded-md relative left-13 md:left-0'>95% Match</p>
                                      </div>

                                      </div>

                                      <div>{/* btm */}
                                        <p className='border border-[#00000064] text-center text-[12px] py-1 rounded-md font-semibold hover:bg-blue-50 duration-300 cursor-pointer'>View Profile</p>
                                      </div>

                              </div>
                              <div className='flex gap-2 flex-col px-3'>     {/* card 2-------------- */}

                                      <div className='flex gap-2 md:justify-between '>{/* top  */}

                                          <div className='rounded-full w-10 relative bottom-1.5'> {/* image div */}
                                        <img src="public/images/feedbackimg4.jpg" alt="" className='rounded-full'/>
                                    </div>

                                      <div className='flex flex-col gap-1 justify-center relative left-2 md:left-0'> {/* detail div */}

                                            <div className=''>
                                              <p className='text-[10px] md:text-[12px] !font-bold leading-0'>
                                                Alex Thompson
                                              </p>
                                              <p className='text-[10px] md:text-[12px] !font-bold leading-0'><i className="text-yellow-500 fa-solid fa-star"></i> 4.8</p>
                                            </div>

                                            <div>
                                              <p className='text-[10px] md:text-[12px] !font-bold leading-0 text-blue-500'>Teaches: <span className='text-[10px] md:text-[12px] !font-light
                                               leading-0 text-black'>Guitar</span></p>

                                              <p className='text-[10px] md:text-[12px] !font-bold leading-0 text-purple-500'>Wants: <span className='text-[10px] md:text-[12px] !font-light
                                               leading-0 text-black'>Web Development</span></p>
                                            </div>

                                      </div>
                                      
                                      <div>
                                        <p className='bg-green-100 text-green-500 text-[12px] font-semibold px-2 rounded-md relative left-13 md:left-0'>85% Match</p>
                                      </div>

                                      </div>

                                      <div>{/* btm */}
                                        <p className='border border-[#00000064] text-center text-[12px] py-1 rounded-md font-semibold hover:bg-blue-50 duration-300 cursor-pointer'>View Profile</p>
                                      </div>

                              </div>
                              <div className='flex gap-2 flex-col px-3'>     {/* card 3-------------- */}

                                      <div className='flex gap-2 md:justify-between '>{/* top  */}

                                          <div className='rounded-full w-10 relative bottom-1.5'> {/* image div */}
                                        <img src="public\images\Michael_Chen.jpg" alt="" className='rounded-full'/>
                                    </div>

                                      <div className='flex flex-col gap-1 justify-center relative left-2 md:left-0'> {/* detail div */}

                                            <div className=''>
                                              <p className='text-[10px] md:text-[12px] !font-bold leading-0'>
                                                Marcus Johnson
                                              </p>
                                              <p className='text-[10px] md:text-[12px] !font-bold leading-0'><i className="text-yellow-500 fa-solid fa-star"></i> 4.9</p>
                                            </div>

                                            <div>
                                              <p className='text-[10px] md:text-[12px] !font-bold leading-0 text-blue-500'>Teaches: <span className='text-[10px] md:text-[12px] !font-light
                                               leading-0 text-black'>Photography</span></p>

                                              <p className='text-[10px] md:text-[12px] !font-bold leading-0 text-purple-500'>Wants: <span className='text-[10px] md:text-[12px] !font-light
                                               leading-0 text-black'>Video Editing</span></p>
                                            </div>

                                      </div>
                                      
                                      <div>
                                        <p className='bg-green-100 text-green-500 text-[12px] font-semibold px-2 rounded-md relative left-13 md:left-0'>92% Match</p>
                                      </div>

                                      </div>

                                      <div>{/* btm */}
                                        <p className='border border-[#00000064] text-center text-[12px] py-1 rounded-md font-semibold hover:bg-blue-50 duration-300 cursor-pointer'>View Profile</p>
                                      </div>

                              </div>

                         </div>

                  </div>

                  {/* btm */}
                  <div className='bg-white mt-4 rounded-2xl border border-[black] flex flex-col gap-3 py-4'>

                   <div className='px-4 py-1'>
                 <p className='text-[10px] md:text-[12px]'>Quick Actions</p>
               </div>
              {/* actions */}
              <div>
                <div className='flex gap-2 flex-col px-3'>
                <p className='md:text-[12px] text:[10px] border py-2 px-2 rounded-md flex gap-3 items-center hover:bg-blue-100'><i className="fa-solid fa-book"></i> Brows Skills</p>
                <p className='md:text-[12px] text:[10px] border py-2 px-2 rounded-md flex gap-3 items-center hover:bg-blue-100'><i className="fa-regular fa-message"> </i> Send Messages</p>
                <p className='md:text-[12px] text:[10px] border py-2 px-2 rounded-md flex gap-3 items-center hover:bg-blue-100'><i className="fa-regular fa-calendar"></i> Schedule Session</p>
                </div>
                
              </div>
                  </div>
                </div>
            </div>
              
      </div>
 
  )
}

export default DashBordHome