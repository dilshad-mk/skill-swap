import React, { useDebugValue } from 'react'
import { useState } from 'react';
import Step1BasicInfo from '../components/profilesetup/Step1BasicInfo'
import Step2Skills from '../components/profilesetup/Step2Skills';
import Step3Interests from '../components/profilesetup/Step3Interests';

function Profile_setup() {

  // progress bar setup --------------------/
  const [step, setStep] = useState(1);

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;
  // -------------------------------------------------
      
      // user profile details storing ------------------------------
       const [userDetails , setUserDetails]=useState(
        {
          name:"",
          bio:"",
          location:"",
          teach:"",
          learn:"",
          session:"",
          availability:""
        }
       );
       // get data from childs ------(generic update function)

       const updateUserDetails= (updatedFields)=>{
            setUserDetails((prevdetails)=>({
              ...prevdetails,  //keep erything else the same
              ...updatedFields //Overwrite with the newly passed data
            }));
       }
      //  -----------------------------------------------------------------
            // handle next btn navigation -------------------
            const [error ,setError]=useState("");
            const handleNext =()=>{
              if(step === 1){

                if(!userDetails.name.trim() || !userDetails.bio.trim()){
                  setError("Fill the required fields!");
                  return;
                }
                if(userDetails.bio.length <10){
                  setError("Bio must contain atleast 10 charecters!");
                  return;
                }
              }
              if(step === 2){
                if(!userDetails.teach){
                  setError("Select Atleat One Field!");
                  return;
                }
              }
              if(step === 3 ){
                if(!userDetails.learn){
                  setError("Select Atleat One Field!");
                  return;
                }
              }
              setStep(step < totalSteps ? step + 1: totalSteps);
              console.log(userDetails);
            };
            // -------------------------------------------------------
                  //  step 1 validation check 
            const isStep1Invalid = step === 1 && (!userDetails.name.trim() || !userDetails.bio.trim || userDetails.bio.length < 10);

                  // step 2 validation check 
                  const isStep2Invalid = step === 2 && (!userDetails.teach);

                  // step 3 validation check 
                  const isStep3Invalid = step === 3 && (!userDetails.learn);
      

  return (
    <div className='bg-linear-to-r from-blue-50 to-purple-50 flex flex-col justify-center w-full h-full  items-center py-5 gap-3 '>
  
        {/* error msg--------------------------- */}
      
      {error && (
        <p className='text-red-600 text-[12px]'>{error}</p>
      )}

      <div className='flex-col flex justify-center items-center gap-3'>
        {/* progress bar  */}

        <div className="w-full bg-gray-200 h-2 rounded-full mb- ">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

      

        {/* profile steup steps  */}

          {step === 1 &&(
            
        <Step1BasicInfo data={userDetails} onUpdate={updateUserDetails} />
          )}
          {step === 2 &&(
            
        <Step2Skills data={userDetails} onUpdate={updateUserDetails} />
          )}
          {step === 3 &&(
            
         <Step3Interests data={userDetails} onUpdate={updateUserDetails} />
          )}
        
       




        {/* navigation btns */}

        <div className='flex gap-[130px] '>
          {/* back btn  */}
          <button className=" rounded-3 bg-white text-black py-1 px-2 rounded-3xl group flex items-center gap-2 shadow-md" onClick={() => setStep(step > 1 ? step - 1 : 1)}>
            <i className="bi bi-arrow-left transform transition-transform duration-500 group-hover:translate-x-[-5px]"></i>Back</button>


          {/* next btn  */}
          <button className={` ${isStep1Invalid || isStep2Invalid || isStep3Invalid? "bg-gradient-to-r from-blue-400 to-purple-400 text-white" :"bg-gradient-to-r from-blue-600 to-purple-600 text-white"}  py-1 px-2 rounded-3 group flex items-center gap-2 shadow-md`}
            onClick={handleNext}
          >Next<i className="bi bi-arrow-right transform transition-transform duration-500 group-hover:translate-x-1"></i>
          </button>
        </div>

      </div>

    </div>

  )
}

export default Profile_setup