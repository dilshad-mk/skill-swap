import React, { useState,useEffect } from 'react'
import axios from 'axios';
import DashBordNav from '../components/dashbord/DashBordNav'
import DashBordHome from '../components/dashbord/DashBordHome';
import Browse from '../components/dashbord/Browse';
import MySwap from '../components/dashbord/MySwap';
import Messages from '../components/dashbord/Messages';
import Notifications from '../components/dashbord/Notifications';

function Dashbord() {
     const [activeTab,setActiveTab]=useState("dashbordhome");
   
     const userEmail =localStorage.getItem("useremail");
       
     const [userData, setUserData] = useState(null);


useEffect(() => {
  const fetchUser = async () => {
    try {
      const res = await axios.get(
        `https://skill-swap-api-h7rf.onrender.com/users_details?email=${userEmail}`
      );

  
      setUserData(res.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  if (userEmail) {
    fetchUser();
  }
}, [userEmail]);
        
    //  condtional rendering components ...................
         
            const renderComponent =()=>{
              switch (activeTab){
                case "dashbordhome": return <DashBordHome userData={userData}/>;
                case "browse": return <Browse/>;
                case "swaps": return <MySwap/>;
                case "messages": return <Messages/>;
                case "notifications": return <Notifications/>;
                default:
                  return <DashBordHome/>
              }
            }
   
  return (
    <>
      <DashBordNav activeTab={activeTab} setActiveTab={setActiveTab}/>

      <div className='max-w-screen items-center flex-col flex  min-h-screen mt-12 md:mt-14 !px-4 md:!px-40 py-5 bg-gradient-to-r from-purple-50 to-blue-100'>
        {renderComponent()}
      </div>
    </>
  )
}

export default Dashbord