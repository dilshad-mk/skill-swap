import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Step1BasicInfo from '../components/profilesetup/Step1BasicInfo'
import Step2Skills from '../components/profilesetup/Step2Skills';
import Step3Interests from '../components/profilesetup/Step3Interests';
import Step4Availability from '../components/profilesetup/Step4Availability';
import Step5Review from '../components/profilesetup/Step5Review';

function Profile_setup() {


     // initializing navigation =====================
            const navigate =useNavigate();

            // BTN LOADING EFFECT-----------------
            const [loading, setLoading] = useState(false);
            // ----------------------




                // progress bar setup --------------------/
  const [step, setStep] = useState(() => {
    return Number(localStorage.getItem("step")) || 1;
  });

  useEffect(() => {
    localStorage.setItem("step", step);
  }, [step]);

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;
  // -------------------------------------------------

  // user profile details storing ------------------------------
  const [userDetails, setUserDetails] = useState(() => {
    const saved = localStorage.getItem("userDetails");
    const signupData = localStorage.getItem("signupData");
    try {
      const parsedUser = saved ? JSON.parse(saved) : {};
      const parsedSignup = signupData ? JSON.parse(signupData)
        : {};
      return {
        userName: "",
        name: "",
        email: "",
        bio: "",
        location: "",
        teach: "",
        learn: "",
        session: "",
        availability: {},
        profilePic: "",
        ...parsedSignup,
        ...parsedUser
      };
    } catch {
      return {
        userName: "",
        name: "",
        email: "",
        bio: "",
        location: "",
        teach: "",
        learn: "",
        session: "",
        availability: {},
        profilePic: ""
      };
    }
  });

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  }, [userDetails]);

  useEffect(()=>{
    localStorage.removeItem("signupData");
  },[]);

  // get data from childs ------(generic update function)
  const updateUserDetails = (updatedFields) => {
    setUserDetails((prevdetails) => ({
      ...prevdetails,
      ...updatedFields
    }));
  }
  
  // handle next btn navigation -------------------
  const [error, setError] = useState("");

 const handleNext = async () => {

  // validation
  //  step 1---------------
  if (step === 1) {
    if (!userDetails.userName.trim() || !userDetails.bio.trim()) {
      setError("Fill the required fields!");
      return;
    }
    if (userDetails.bio.length < 10) {
      setError("Bio must contain atleast 10 characters!");
      return;
    }
  }
  
  // STEP 2 ---------------------------

  if (step === 2) {
    if (!userDetails.teach || userDetails.teach.length === 0) {
      setError("Select Atleast One Field!");
      return;
    }
  }
  
  
  // STEP 3 ===============================
  if (step === 3) {
    if (!userDetails.learn || userDetails.learn.length === 0) {
      setError("Select Atleast One Field!");
      return;
    }
  }
  
  // STEP 4 ---------------------------
  if (step === 4) {
    if (
      !userDetails.availability ||
      Object.keys(userDetails.availability).length === 0
    ) {
      setError("Select Atleast One Field");
      return;
    }
  }

  //  STEP 5 LOGIC ---------------------------
  
 

  if (step === 5) {
    try {
      setLoading(true);
      await axios.post("https://skill-swap-api-h7rf.onrender.com/users_details", userDetails);
      setLoading(false);

      console.log("Profile saved successfully");
      
      // clear localStorage if needed
      localStorage.removeItem("userDetails");
      localStorage.removeItem("step");

      // navigate to dashboard
      navigate("/dashboard");

    } catch (err) {
      console.log(err);
      setError("Failed to save profile");
    }

    return; // (stop further execution)
  }

  // normal step increment
  setStep(step + 1);
  setError("");
};
  // -------------------------------------------------------

  // steps validation checks
  const isStep1Invalid = step === 1 && (!userDetails.userName.trim() || !userDetails.bio.trim() || userDetails.bio.length < 10);
  const isStep2Invalid = step === 2 && (!userDetails.teach || userDetails.teach.length === 0);
  const isStep3Invalid = step === 3 && (!userDetails.learn || userDetails.learn.length === 0);
  const isStep4Invalid =
    step === 4 &&
    (!userDetails.availability ||
      (!userDetails.availability.chat && !userDetails.availability.video));


  return (
    <div className='bg-linear-to-r from-blue-50 to-purple-50 flex flex-col justify-center w-full min-h-screen max-h-full items-center py-5 gap-3 '>

          <div><img src="images/skill-swap-logo.png" alt="" className='w-52 bottom-6 relative' /></div>
      {/* error msg--------------------------- */}
      {error && (
        <p className='text-red-600 text-[12px]'>{error}</p>
      )}
<div>
  
        <span className={`relative left-68 font-semibold text-[12px]  ${step === totalSteps ? "text-green-400" : "text-purple-400"}`}>{Math.round(progress)}% complete</span>
        <span className={`relative right-68 font-semibold text-[12px]  ${step === totalSteps ? "text-black" : "text-gray-300"}`}>Step {step} of 5</span>
</div>
      <div className='flex-col flex justify-center items-center gap-3'>

        {/* progress bar---------------------------  */}

        <div className="w-full bg-gray-200 h-2 rounded-full">
          
          <div
            className={`h-2 rounded-full transition-all duration-300 
      ${step === totalSteps
                ? "bg-gradient-to-r from-green-500 to-cyan-400"
                : "bg-gradient-to-r from-blue-500 to-blue-400"}
    `}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        {/* ----------------------------- */}

        {/* profile setup steps */}
        {step === 1 && (
          <Step1BasicInfo data={userDetails} onUpdate={updateUserDetails} />
        )}

        {step === 2 && (
          <Step2Skills data={userDetails} onUpdate={updateUserDetails} />
        )}

        {step === 3 && (
          <Step3Interests data={userDetails} onUpdate={updateUserDetails} />
        )}

        {step === 4 && (
          <Step4Availability data={userDetails} onUpdate={updateUserDetails} />
        )}
        {step === 5 && (
          <Step5Review data={userDetails} onUpdate={updateUserDetails} goToStep = {setStep} />
        )}

        {/* navigation btns */}
        <div className='flex gap-[130px] '>

          {/* back btn */}
          <button
            className="rounded-3 bg-white text-black py-1 px-2 rounded-3xl group flex items-center gap-2 shadow-md"
            onClick={() => setStep(step > 1 ? step - 1 : 1)}
          >
            <i className="bi bi-arrow-left transform transition-transform duration-500 group-hover:translate-x-[-5px]"></i>
            Back
          </button>

          {/* next btn */}
          <button
            className={`py-1 px-2 rounded-3 group flex items-center gap-2 shadow-md text-white
    ${isStep1Invalid || isStep2Invalid || isStep3Invalid || isStep4Invalid
                ? "bg-gradient-to-r from-blue-400 to-purple-400"
                : step === totalSteps
                  ? "bg-gradient-to-r from-green-400 to-cyan-300"
                  : "bg-gradient-to-r from-blue-600 to-purple-600"
              }
  `}

            onClick={handleNext}
          >
           {loading ? "Saving..." : step < totalSteps ? "Next" : "Finish Setup"}
            <i className="bi bi-arrow-right transform transition-transform duration-500 group-hover:translate-x-1"></i>
          </button>

        </div>

      </div>

    </div>
  )
}

export default Profile_setup