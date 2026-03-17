import React, { useState } from 'react'

function Step1BasicInfo({ data, onUpdate }) {

  // profile picture 
  const [profilePic, setProfilePic] = useState(null);

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(URL.createObjectURL(e.target.files[0]));
    }
   
  };
  // remove profile pic ////
   
  const removeProfilePic = (e) => {
    e.preventDefault();
    setProfilePic(null);
   
  };

  return (



    <div className='flex flex-col bg-[white] px-4 py-5 items-center max-w-[600px] md:min-w-150 sm:min-w-100 rounded-2xl shadow-xl'>
      <h5>Let's Set Up Your Profile</h5>
      <p className='text-[13px]'>Tell us a bit about yourself</p>

      <div className='rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border-[#30359a2a] border-2 w-[100px] h-[100px] relative'>


        {/* profile pic render based on condition -------------------------------------- */}
        {profilePic ? (
          <img src={profilePic} alt="profile preview" className='absolute w-[100%] h-[100%] rounded-full' />
        ) : (
          <p className='absolute top-7 left-9.5 text-4xl capitalize  bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent transition-all duration-300'>{data.name.trim().charAt(0)}</p>
        )}

          {/* profile pic remove */}
       {profilePic ? ( <label className='absolute bg-red-600 w-10 h-10 rounded-full flex justify-center items-center -bottom-1 -right-2 cursor-pointer hover:bg-red-400 transition-colors shadow-md'>

          <i className={` text-white text-[12px] font-bold  transition-all duration-[.14s] relative left-3.5 top-1.5 bi bi-eraser`}></i>
          <input
    
    onClick={removeProfilePic}
    className='hidden'
    />
    {/* profile pic Upload  btn--------------------------*/}
        </label>):  <label className='absolute bg-blue-600 w-10 h-10 rounded-full flex justify-center items-center -bottom-1 -right-2 cursor-pointer hover:bg-blue-400 transition-colors shadow-md'>

          <i className={` text-white text-[12px] font-bold  transition-all duration-[.14s] relative left-3.5 top-1.5  bi bi-cloud-arrow-up`}></i>
          <input
            type='file'
            accept='image/*'
             onChange={handleImageUpload}
           
            className='hidden'
          />
        </label>}

      </div>
      <span className='text-[10px] mt-2 tracking-wider'>Upload a profile photo</span>

      {/* form ------------------------------------- */}

      <form className=' w-full h-full mt-4 flex flex-col gap-3'>

        {/* name input --- */}
        <div className=' flex flex-col gap-2'>
          <label htmlFor="name" className='text-[12px] font-[550]'>Full Name <span className={`${!data.name ? "text-red-600" : "text-black"}`}>*</span></label>
          <input type="text" name='name' placeholder=''
            value={data.name}
            onChange={(e) => onUpdate({ name: e.target.value })}
            className='ring-[#80808045] ring-1 rounded-xl py-2 px-2 !text-[13px] bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-blue-400' />
        </div>

        {/* short bio input ------------/ */}
        <div className='flex flex-col  gap-2 '>
          <label htmlFor="bio" className='text-[12px] font-[550]'>Short Bio <span className={`${!data.bio ? "text-red-600" : "text-black"}`}>*</span></label>
          <textarea name='bio' placeholder=''
            value={data.bio}
            onChange={(e) => onUpdate({ bio: e.target.value })}
            className=' ring-[#80808045] ring-1 !resize-none  rounded-xl py-1 px-2 !text-[13px] bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-20'>

          </textarea>
          <span className='text-[10px] font-[12px] text-gray-800'>{data.bio.length} charecters (min 10)</span>
        </div>

        {/* location input------------ */}
        <div className='flex flex-col  gap-2'>
          <label htmlFor="location" className='text-[12px] font-[550]'>Location (Optional) </label>
          <input type="text" name='location' placeholder=''
            value={data.location}
            onChange={(e) => onUpdate({ location: e.target.value })}
            className=' ring-1 ring-[#80808045] rounded-xl px-3 py-2 !text-[13px] bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-blue-400' />

        </div>

      </form>

    </div>


  )
}

export default Step1BasicInfo