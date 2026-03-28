import React from 'react'

function Step1BasicInfo({ data, onUpdate }) {
  
  // profile pic upload 
  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.onloadend = () => {
        onUpdate({ profilePic: reader.result }); 
      };
      reader.readAsDataURL(file);

      e.target.value = null;
    }
  };

  // remove profile pic
  const removeProfilePic = (e) => {
    e.preventDefault();
    onUpdate({ profilePic: "" }); 
  };

  return (
    <div className='step1-wrapper flex flex-col bg-[white] px-5 py-5 items-center max-w-[600px] md:min-w-150 sm:min-w-100 rounded-2xl shadow-xl'>
      <h5>Let's Set Up Your Profile</h5>
      <p className='text-[13px]'>Tell us a bit about yourself</p>

      <div className='rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border-[#30359a2a] border-2 w-[100px] h-[100px] relative'>

        {/* profile pic render */}
        {data.profilePic ? (
          <img src={data.profilePic} alt="profile preview" className='absolute w-full h-full rounded-full' />
        ) : (
          <p className='absolute top-7 left-9.5 text-4xl capitalize bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
            {data.userName ? data.userName.trim().charAt(0) : "?"}
          </p>
        )}

        {/* remove or upload */}
        {data.profilePic ? (
          <button
            onClick={removeProfilePic}
            className='absolute bg-red-600 w-10 h-10 rounded-5 flex justify-center items-center -bottom-1 -right-2 hover:bg-red-400 shadow-md'
          >
            <i className="text-white text-[12px] bi bi-eraser rounded-full"></i>
          </button>
        ) : (
          <label className='absolute bg-blue-600 w-10 h-10 rounded-full flex justify-center items-center -bottom-1 -right-2 cursor-pointer hover:bg-blue-400 shadow-md'>
            <i className="text-white text-[12px] bi bi-cloud-arrow-up absolute left-3.5 top-2.5"></i>
            <input
              type='file'
              accept='image/*'
              onChange={handleImageUpload}
              className='hidden'
            />
          </label>
        )}

      </div>

      <span className='text-[10px] mt-2 tracking-wider'>Upload a profile photo</span>

      {/* form */}
      <form className='w-full mt-4 flex flex-col gap-3'>

        {/*user name */}
        <div className='flex flex-col gap-2'>
          <label className='text-[12px] font-[550]'>
            User Name <span className={`${!data.userName ? "text-red-600" : "text-black"}`}>*</span>
          </label>
          <input
            type="text"
            value={data.userName}
            onChange={(e) => onUpdate({ userName: e.target.value })}
            className='ring-1 rounded-xl py-2 px-2 text-[13px] bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
        </div>

        {/* bio */}
        <div className='flex flex-col gap-2'>
          <label className='text-[12px] font-[550]'>
            Short Bio <span className={`${!data.bio ? "text-red-600" : "text-black"}`}>*</span>
          </label>
          <textarea
            value={data.bio}
            onChange={(e) => onUpdate({ bio: e.target.value })}
            className='ring-1 rounded-xl py-1 px-2 text-[13px] bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-20'
          />
          <span className='text-[10px]'>{data.bio.length} characters (min 10)</span>
        </div>

        {/* location */}
        <div className='flex flex-col gap-2'>
          <label className='text-[12px] font-[550]'>Location (Optional)</label>
          <input
            type="text"
            value={data.location}
            onChange={(e) => onUpdate({ location: e.target.value })}
            className='ring-1 rounded-xl px-3 py-2 text-[13px] bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
        </div>

      </form>
    </div>
  )
}

export default Step1BasicInfo