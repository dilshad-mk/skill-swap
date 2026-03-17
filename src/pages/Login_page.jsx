import axios from 'axios';
import React, { useState,} from 'react';
import { useNavigate } from 'react-router-dom';

function Login_page() {
    // form data store-------------------------------- 
  const [formdata, setFormData] = useState({ email: "", password: "" });

//   error======================
  const [error, setError] = useState("");

//   password hide and show togle ---------------------------------
    const [ishide,setHide]=useState(false);
      
        const pswdtoggle=()=>{
            setHide(!ishide);
        };

//--------------------------------------------------------------- 
   
// handlechange -------------------------------

  const handlechange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  
    setError(""); 
  };

//   handleSubmit--------------------------------
  const handleSubmit  = async (e) => {
    e.preventDefault();
    if (!formdata.email || !formdata.password) {
      setError("All fields are required");
      return;
    };
    if(!formdata.email.endsWith("@gmail.com")){
      setError("Enter a valid email");
    }
    setError("");
    console.log("Success:", formdata);

      try{
    const res = await axios.get(`https://skill-swap-api-1.onrender.com/users?email=${formdata.email}&password=${formdata.password}`);
       
    if(res.data.length>0){
      console.log("login Success");
         
            navigate('/dashboard');

    }else{
      setError("Invalid email or password")
    }
  }catch(err){
    console.error(err);
    setError("Login failed");
  }
  };




//   navigations ===================================
          const navigate=useNavigate();

          // to signup page 
             const tosignup=()=>{
                  navigate('/signup')
             }
      
// =========================
  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen bg-[#faf7ff]'>
    
    <div><img src="images/skill-swap-logo.png" alt="" className='w-52 bottom-6 relative' /></div>
     
         {/* form part ---------------------- */}
      <form onSubmit={handleSubmit} className="rounded-2xl flex flex-col gap-4 p-4 bg-white w-[90%] max-w-md shadow-md">
          

          {/* headiing part------------------ */}
        <div>
            <h4 className='text-center font-bold'>Welcome Back</h4>
        <p className='text-center text-gray-400 text-[14px]'>Log in to your account to continue learning</p>
        </div>

        {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}

           {/* email input ------------------- */}
        <div>
          <label className="text-sm mb-1 block">Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@gmail.com"
            value={formdata.email}
            onChange={handlechange}
            className={`w-full px-3 py-2 text-xs rounded-xl bg-[#f8fafc] border outline-none transition-all placeholder:text-[12px] placeholder:pl-2 focus:ring-indigo-400 focus:ring-1 ${
              error && !formdata.email ? "border-red-100 ring-2 ring-red-500" : "border-gray-300 focus:ring-indigo-400"
            }`}
          />
        </div>


                {/* pswd input------------------- */}
      <div>
  <label className="text-sm mb-1 block">Password</label>
  {/* 1. Relative container is key */}
  <div className="relative flex items-center">
    <input
      // 2. Dynamic type based on state
      type={ishide ? "text" : "password"} 
      name="password"
      placeholder='Enter your password'
      value={formdata.password}
      onChange={handlechange}
      className={`w-full px-3 py-2 rounded-xl text-xs bg-[#f8fafc] border outline-none transition-all placeholder:text-[12px]  ${
        error && !formdata.password 
          ? "border-red-100 ring-2 ring-red-500" 
          : "border-gray-300 focus:ring-indigo-400 focus:ring-2"
      }`}
    />
    
    {/* 3. Position icons inside the relative div */}
    <div 
      className="absolute right-3 cursor-pointer text-gray-500 flex items-center" 
      onClick={pswdtoggle}
    >
      {ishide ? (
        <i className="bi bi-eye"></i>
      ) : (
        <i className="bi bi-eye-slash"></i>
      )}
    </div>
  </div>
</div>
              
              {/* forgot pswd======================= */}

              <div className="flex justify-between items-center">
                <div className='flex items-center'>
                    <input type="checkbox" />
                    <span className='relative left-1 text-[12px] text-[#7a7a7a]'>Remeber Me</span>
                </div>
                <span className='text-[12px] text-[#9810fa] cursor-pointer' onClick={()=>alert("Currently not available")}>Forgot password</span>
              </div>

        {/* login btn ------------------ */}
        <button className='bg-purple-600 hover:bg-purple-700 text-white py-2 font-semibold transition-[.14s] rounded-4'>
          Login
        </button>

        {/* signup navigation ----------------------- */}
                   
        <p className='text-[12px] text-[#7a7a7a] text-center'>Don't have an account? <span className=' text-[12px] text-[#9810fa] cursor-pointer text-center' onClick={tosignup}>Sign up for free</span></p>
      </form>
    </div>
  );
}

export default Login_page;