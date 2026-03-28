import React from 'react'

function Step5Review({data, goToStep}) {

  // getting user profile deatils from localstorage to review 
  const profile_data = JSON.parse(localStorage.getItem("userDetails"))


  

  return (
    <div>
      {/* wrapper  */}
      <div className='flex flex-col bg-[white] px-4 py-5 mx-3 items-center md:min-w-150 sm:min-w-100 rounded-2xl shadow-xl max-w-[600px] md:min-w-150 sm:min-w-100'>
        <div className='bg-green-200 rounded-full w-[60px] h-[60px] flex justify-center items-center '>
          <i class="bi bi-check2 text-green-500 text-2xl"></i>
        </div>
        <h5 className='mt-4 '>Review Your Profile</h5>
        <p className='text-[13px] text-center'>Make sure everything looks good before you start</p>


        {/* Review */}
        <div className='flex flex-col w-full gap-3'>
          

          {/* profile pic  pending -------------------------------------------*/}



        {/* user name  */}
           <span className=' font-semibold'>User Name :</span>
          <div className=' bg-green-50 border rounded-2xl min-h-13 flex items-center px-3 justify-between'>
            <p className='mt-3 text-gray-600 capitalize text-sm'>{profile_data.userName}</p>
            <i className="cursor-pointer bi bi-pencil " onClick={()=> goToStep(1)}></i>
          </div>

      {/* bio  */}
      <span className=' font-semibold'>Bio :</span>
          <div className=' bg-green-50 border rounded-2xl min-h-13 flex items-center px-3 justify-between'>
            <p className='mt-3 text-gray-600 capitalize text-sm'>{profile_data.bio}</p>
            <i className="cursor-pointer bi bi-pencil" onClick={()=> goToStep(1)}></i>
          </div>


      {/* location */}
        <span className=' font-semibold'>Location :</span>
          <div className=' bg-green-50 border rounded-2xl min-h-13 flex items-center px-3 justify-between'>
            <p className='mt-3 text-gray-600 capitalize text-sm'>{profile_data.location}</p>
            <i className="cursor-pointer bi bi-pencil" onClick={()=> goToStep(1)}></i>
          </div>

        {/* learn */}
          <span className=' font-semibold'>Want To Learn :</span>
          <div className=' bg-green-50 border rounded-2xl min-h-13 flex items-center px-3 justify-between'>
            <p className='mt-3 text-gray-600 text-sm'>{profile_data.learn.join(" / ")}</p>
            <i className="cursor-pointer bi bi-pencil" onClick={()=> goToStep(3)}></i>
          </div>

        {/* teach  */}
          <span className=' font-semibold'>Teaching Skills :</span>
          <div className=' bg-green-50 border rounded-2xl min-h-13 flex items-center px-3 justify-between'>
            <p className='mt-3 text-gray-600 text-sm'>{profile_data.teach.join(" / ")}</p>
            <i className="cursor-pointer bi bi-pencil" onClick={()=> goToStep(3)}></i>
          </div>


          {/* session  */}
          <span className=' font-semibold'>Available Sessions :</span>
          <div className=' bg-green-50 border rounded-2xl min-h-13 flex items-center px-3 justify-between'>
            <p className='mt-3 text-gray-600 text-sm'>
              {profile_data.availability?.video && "Video Call"}
              {profile_data.availability?.video && profile_data.availability?.chat && " / "}
              {profile_data.availability?.chat && "Chat"}
            </p>
            <i className="cursor-pointer bi bi-pencil" onClick={()=> goToStep(4)}></i>
          </div>
        </div>

      </div>
   
    </div>
  )
}

export default Step5Review