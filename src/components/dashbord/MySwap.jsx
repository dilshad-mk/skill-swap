import React, { useState } from 'react'

function MySwap() {

  const [activeTab,setActiveTab]=useState("upcoming");

  // conditional rendering ======================
     
        const renderOnCondition =()=>{
          switch (activeTab){
              case "upcoming": return "upcoming"
                case "received": return "received";
                case "send": return "send";
                case "past": return "past";
                
                default:
                  return "upcoming"
          }
        }

renderOnCondition();
  return (
    <div className='w-full'>
       <h2 className='!text-xl md:!text-2xl'>My Skill Swaps</h2>
            
            {/* sections  */}
                <ul className='list-none flex justify-between mt-5 px-2 lg:!px-0'>

                  <li className={` lg:!px-25 py-1.5 lg:!rounded-2xl !px-3 rounded-md lg:!text-sm text-xs cursor-pointer ${activeTab === "upcoming" ? " bg-white" : "hover:bg-white"} duration-300`} onClick={()=>setActiveTab("upcoming")}>Upcoming</li>

                  <li className={` lg:!px-25 py-1.5 lg:!rounded-2xl !px-3 rounded-md lg:!text-sm text-xs cursor-pointer ${activeTab === "received" ? "bg-white " : "hover:bg-white"} duration-300`} onClick={()=>setActiveTab("received")}>Received <span className='bg-red-600 px-2 rounded-full !text-[10px] py-1 text-white font-bold ml-2'>2</span></li>

                  <li className={` lg:!px-25 py-1.5 lg:!rounded-2xl !px-3 rounded-md lg:!text-sm text-xs cursor-pointer ${activeTab === "send" ? "bg-white " : "hover:bg-white"} duration-300`} onClick={()=>setActiveTab("send")}>Send</li>

                  <li className={` lg:!px-25 py-1.5 lg:!rounded-2xl !px-3 rounded-md lg:!text-sm text-xs cursor-pointer ${activeTab === "past" ? " bg-white" : "hover:bg-white"} duration-300`} onClick={()=>setActiveTab("past")}>Past</li>

                </ul>
                
                {/* upcomming---------- */}
            {activeTab === "upcoming" && (   
              
              <div className='flex flex-col gap-3 mt-5
              '>
                    {/* 1st------------ */}
                      <div className='flex justify-between bg-white px-2 lg:!px-5 py-4 items-center rounded-2xl'>
                        {/* left-- */}
                        <div className='flex gap-2 items-center'>
                              <div className='rounded-full'>
                                <img src="/images/Lisa_Anderson.jpg" alt="" className='rounded-full w-10 lg:w-13'/>
                              </div>
                              <div className='relative top-2'>
                                <p className='text-xs font-bold lg:text-[15px] leading-0'>Sarah Johnson</p>
                                <p className='text-[10px] leading-0'>Web Development</p>
                                <p className='flex gap-1 text-[9px] leading-0 text-gray-500'>Today, 2:00 PM <span>1 hour</span> <span>Video Call</span></p>
                              </div>
                        </div>

                        {/* right (btns)---- */}
                        <div className='flex flex-col gap-2'>
                          <button className='bg-green-500 text-white px-2 py-1 !rounded-md !text-xs cursor-pointer font-semibold hover:bg-green-700 duration-300'>
                               Join Session
                            </button>
                            <button className=' border  px-2 py-1 !rounded-md !text-xs cursor-pointer font-semibold hover:bg-blue-50 duration-300'>Reschedule</button>
                        </div>

                      </div>

                      {/* 2nd ----------- */}
                             <div className='flex justify-between bg-white px-2 lg:!px-5 py-4 items-center rounded-2xl'>
                        {/* left-- */}
                        <div className='flex gap-2 items-center'>
                              <div className='rounded-full'>
                                <img src="/images/David_Rodriguez.jpg" alt="" className='rounded-full w-10 lg:w-13'/>
                              </div>
                              <div className='relative top-2'>
                                <p className='text-xs font-bold lg:text-[15px] leading-0'>Michael Chen </p>
                                <p className='text-[10px] leading-0'>Graphic Design</p>
                                <p className='flex gap-1 text-[9px] leading-0 text-gray-500'>Tomorrow, 10:00 AM <span>45 min</span> <span>Chat</span></p>
                              </div>
                        </div>

                        {/* right (btns)---- */}
                        <div className='flex flex-col gap-2'>
                          <button className='bg-green-500 text-white px-2 py-1 !rounded-md !text-xs cursor-pointer font-semibold hover:bg-green-700 duration-300'>
                               Join Session
                            </button>
                            <button className=' border  px-2 py-1 !rounded-md !text-xs cursor-pointer font-semibold hover:bg-blue-50 duration-300'>Reschedule</button>
                        </div>

                      </div>

                </div>
                
              )
            }

            {/* received---------------------------------- */}
                    {activeTab === "received" &&(
                      <div className='flex flex-col gap-3 mt-5'>

                      <div className='flex flex-col  bg-white px-2 lg:!px-5 py-4 items-start rounded-2xl'>
                        <div className='flex gap-3'>
                              <div className='rounded-full'>
                                <img src="/images/Lisa_Anderson.jpg" alt="" className='rounded-full w-10 lg:w-13'/>
                              </div>
                              <div className='relative top-2'>
                                <p className='text-xs font-bold lg:text-[15px] leading-0'>Sarah Johnson</p>
                                <p className='text-[10px] leading-0'>Wants to learn: Digital Marketing</p>
                                <p className='flex gap-1 text-[9px] leading-0 text-gray-500'>1 hour ago</p>
                                         
                                         <div className='bg-blue-50 px-1 py-[1px] mb-3 rounded-md'>
                                            <p className='text-[8px] lg:text-xs '>Hi! I would love to learn UI/UX from you. I can teach you Digital Marketing in return.</p>
                                         </div>

                                   <div className='flex gap-3'>
                                          <button className='bg-green-500 text-white px-2 py-1 !rounded-md !text-xs cursor-pointer font-semibold hover:bg-green-700 duration-300 flex items-center gap-1'>
                                            <i className="fa-regular fa-circle-check"></i>
                               Accept
                            </button>
                            <button className=' border  px-2 py-1 !rounded-md !text-xs cursor-pointer font-semibold hover:bg-blue-50 duration-300'><i className="fa-solid fa-circle-xmark"></i> Decline</button>
                              </div>
                                   </div>
                        </div>
                      </div>

                      <div className='flex flex-col  bg-white px-2 lg:!px-5 py-4 items-start rounded-2xl'>
                        <div className='flex gap-3'>
                              <div className='rounded-full'>
                                <img src="/images/Emma_Williams.jpg" alt="" className='rounded-full w-10 lg:w-13'/>
                              </div>
                              <div className='relative top-2'>
                                <p className='text-xs font-bold lg:text-[15px] leading-0'>Lisa Anderson</p>
                                <p className='text-[10px] leading-0'>Wants to learn: Photography</p>
                                <p className='flex gap-1 text-[9px] leading-0 text-gray-500'>5 hours ago</p>
                                         
                                         <div className='bg-blue-50 px-1 py-[1px] mb-3 rounded-md'>
                                            <p className='text-[8px] lg:text-xs '>Looking forward to exchanging photography skills!</p>
                                         </div>

                                   <div className='flex gap-3'>
                                          <button className='bg-green-500 text-white px-2 py-1 !rounded-md !text-xs cursor-pointer font-semibold hover:bg-green-700 duration-300 flex items-center gap-1'>
                                            <i className="fa-regular fa-circle-check"></i>
                               Accept
                            </button>
                            <button className=' border  px-2 py-1 !rounded-md !text-xs cursor-pointer font-semibold hover:bg-blue-50 duration-300'><i className="fa-solid fa-circle-xmark"></i> Decline</button>
                              </div>
                                   </div>
                        </div>
                      </div>

                      </div>
                    )}
    </div>
  )
}

export default MySwap