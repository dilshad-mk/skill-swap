import React, { useState, useEffect } from 'react'

function DashBordNav({ activeTab, setActiveTab }) {

  const [isclicked, setIsclicked] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 855);

  // toggle fixed
  const handleclick = () => {
    setIsclicked(prev => !prev);
  };

  // resize listener
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 855;
      setIsMobile(mobile);

      //  auto close menu when switching to desktop
      if (!mobile) {
        setIsclicked(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className='w-screen min-h-14 bg-white border-b border-gray-100 shadow-xl transition-all ease-in-out duration-300 fixed top-0 z-50'>

      {/* desktop nav */}
      <div className={`items-center justify-between px-5 ${isMobile ? "hidden" : "flex"}`}>

        <div>
          <img src="images/skill-swap-logo.png" alt="" className='w-22' />
        </div>

        <ul className="flex items-center gap-2 list-none mt-2">
          <li className={`text-xs  rounded-xl px-3 py-2 flex gap-2.5 cursor-pointer ${activeTab === "dashbordhome" ? "bg-blue-600 text-white" : "hover:bg-blue-50"}`} onClick={() => setActiveTab("dashbordhome")}><i className="bi bi-grid"></i> Dashboard</li>
          <li className={`text-xs  rounded-xl px-3 py-2 flex gap-2.5 cursor-pointer ${activeTab === "browse" ? "bg-blue-600 text-white" : "hover:bg-blue-50"}`} onClick={() => setActiveTab("browse")}><i className="bi bi-search"></i> Browse</li>
          <li className={`text-xs  rounded-xl px-3 py-2 flex gap-2.5 cursor-pointer ${activeTab === "swaps" ? "bg-blue-600 text-white" : "hover:bg-blue-50"}`} onClick={() => setActiveTab("swaps")}><i className="bi bi-arrow-repeat"></i> My Swaps</li>
          <li className={`text-xs  rounded-xl px-3 py-2 flex gap-2.5 cursor-pointer ${activeTab === "messages" ? "bg-blue-600 text-white" : "hover:bg-blue-50"}`} onClick={() => setActiveTab("messages")}><i className="bi bi-chat-left-text"></i> Messages</li>
          <li className={`text-xs  rounded-xl px-3 py-2 flex gap-2.5 cursor-pointer ${activeTab === "notifications" ? "bg-blue-600 text-white" : "hover:bg-blue-50"}`} onClick={() => setActiveTab("notifications")}><i className="bi bi-bell"></i> Notifications</li>
        </ul>

        <div className='bg-amber-100 w-10 h-10 rounded-full'></div>
      </div>

      {/* mobile nav */}
      <div className='px-4 w-screen gap-1.5'>

        {/* top bar */}
        <div className={`${isMobile ? "flex" : "hidden"} justify-between items-center`}>
          <img src="images/skill-swap-logo.png" alt="" className='w-22' />

          <i
            className={`bi bi-list text-2xl ${isMobile ? "flex" : "hidden"}`}
            onClick={handleclick}
          ></i>
        </div>

        {/* menu */}
        <ul className={`${isclicked ? "flex flex-col" : "hidden"} flex-col items-start gap-2 list-none mt-2`}>
          <div className='bg-amber-100 w-10 h-10 rounded-full self-start'></div>
          <li className={`text-xs  rounded-xl px-3 py-2 flex gap-2.5 cursor-pointer ${activeTab === "dashbordhome" ? "bg-blue-600 text-white" : "hover:bg-blue-50"}`} onClick={() => setActiveTab("dashbordhome")}><i className="bi bi-grid"></i> Dashboard</li>
          <li className={`text-xs  rounded-xl px-3 py-2 flex gap-2.5 cursor-pointer ${activeTab === "browse" ? "bg-blue-600 text-white" : "hover:bg-blue-50"}`} onClick={() => setActiveTab("browse")}><i className="bi bi-search"></i> Browse</li>
          <li className={`text-xs  rounded-xl px-3 py-2 flex gap-2.5 cursor-pointer ${activeTab === "swaps" ? "bg-blue-600 text-white" : "hover:bg-blue-50"}`} onClick={() => setActiveTab("swaps")}><i className="bi bi-arrow-repeat"></i> My Swaps</li>
          <li className={`text-xs  rounded-xl px-3 py-2 flex gap-2.5 cursor-pointer ${activeTab === "messages" ? "bg-blue-600 text-white" : "hover:bg-blue-50"}`} onClick={() => setActiveTab("messages")}><i className="bi bi-chat-left-text"></i> Messages</li>
          <li className={`text-xs  rounded-xl px-3 py-2 flex gap-2.5 cursor-pointer ${activeTab === "notifications" ? "bg-blue-600 text-white" : "hover:bg-blue-50"}`} onClick={() => setActiveTab("notifications")}><i className="bi bi-bell"></i> Notifications</li>
        </ul>

      </div>
    </nav>
  )
}

export default DashBordNav