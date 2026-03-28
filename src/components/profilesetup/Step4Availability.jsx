import React, { useState } from 'react'

function Step4Availability({ data, onUpdate }) {


  const [chatSelected, setChatSelected] = useState(data?.availability?.chat || false);
  const [videoSelected, setVideoSelected] = useState(data?.availability?.video || false);

  const handleChatSlelected = () => {
    const updated = !chatSelected;
    setChatSelected(updated);

    onUpdate({
      availability: {
        ...(data.availability || {}),
        chat: updated
      }
    });
  };


  const handleVideoSlelected = () => {
    const updated = !videoSelected;
    setVideoSelected(updated);

    onUpdate({
      availability: {
        ...(data.availability || {}),
        video: updated
      }
    });

  };

  return (
    <div>
      {/* wrapper  */}
      <div className='flex flex-col bg-[white] px-4 py-5  sm:mx-3 items-center md:min-w-150 sm:min-w-100 rounded-2xl shadow-xl max-w-[600px] md:min-w-150 sm:min-w-100 '>
        <h5>Set Your Availability</h5>
        <p className='text-[13px] text-center'>When are you available for skill swap sessions?</p>

        {/* session  */}
        <span className='relative right-17 text-[12px]'>Prefferd Session Type</span>

        <div className='flex justify-center items-center sm:gap-7 gap-3 mt-3'>

          {/* Video */}
          <div
            className={`border border-[#8080806d] px-5 py-2 flex flex-col items-center justify-center rounded-2xl text-center text-[12px] cursor-pointer duration-300 ${videoSelected ? "bg-blue-500 text-white" : "bg-white"
              }`}
            onClick={handleVideoSlelected}
          >
            <i className="bi bi-camera-video text-xl mb-1"></i>
            <p>Video Call</p>
          </div>

          {/* Chat */}
          <div
            className={`border border-[#8080806d] px-5 py-2 flex flex-col items-center justify-center rounded-2xl text-center text-[12px] cursor-pointer duration-300 ${chatSelected ? "bg-blue-500 text-white" : "bg-white"
              }`}
            onClick={handleChatSlelected}
          >
            <i className="bi bi-chat-left-text text-xl mb-1"></i>
            <p>Chat</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Step4Availability