import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

    // password show and hide toggle ---------------------
    const [ishide, setHide] = useState(false);
    const [compswshow, setCompswshow] = useState(false);

    const pswdtoggle = () => {
        setHide(!ishide);
    };
    const confirmpswdtoggle = () => {
        setCompswshow(!compswshow);
    };
    //   -------------------------------------------------

    //   navigations ------------------

    const navigate = useNavigate();
    const tologin = () => {
        navigate('/Login');
    };


    //    form data ------------------------
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: ""
    });

    //    error form ---------------------------
    const [error, setError] = useState("");

    //handlechange-----------------------------

    const handlechange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError("");
    };


    const handlesubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.password || !formData.confirmpassword) {
            setError("All fields required!");
            return;
        };
        if (formData.password.length < 6) {
            setError("Password must contain 6 leatters!");
            return;
        };
        if (formData.password !== formData.confirmpassword) {
            setError("Passwords mus be same!");
            return;
        };
        if(!formData.email.endsWith("@gmail.com")){
            setError("Email must be a gmail address");
            return;
        }

        // checks is email already exist?-------------
          try{
            const checkUser = await axios.get(`https://skill-swap-api-1.onrender.com/users?email=${formData.email}`);
             if(checkUser.data.length>0){
                setError("Email already registerd!");
                return;
             }
          

        // post form data to json server users -----------------------------
         
            const res = await axios.post("https://skill-swap-api-1.onrender.com/users",{
                name: formData.name,
                email: formData.email,
                password: formData.password
            });
             console.log("sign up successful");
             setError("");
              
            //  navigates to profile setup after signup seccesful
                navigate('/Profile_setup')
}
         
         catch (err){
   console.log(err.response);
   console.log(err.message);
   setError("Something went wrong!");
}
          
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-[#faf7ff] px-4">

            <div className="w-full max-w-[480px] bg-white/70 backdrop-blur-md rounded-2xl shadow-lg px-4 py-4">

                {/* Title */}
                <h5 className="text-3xl font-semibold text-center text-gray-800">
                    Create Your Account
                </h5>

                <p className="text-center text-gray-500 mt-2 mb-6">
                    Join thousands of skill swappers worldwide
                </p>

                {/* error msg------- */}
                {error && <p className="text-red-600 text-[12px] text-center">{error}</p>}

                {/* Form */}
                <form className="" onSubmit={handlesubmit}>

                    {/* Full Name */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Full Name
                        </label>

                        <input
                            type="text"
                            placeholder="your name"
                            value={formData.name}
                            onChange={handlechange}
                            name="name"
                             className={`w-full px-3 py-2 text-xs rounded-xl bg-[#f8fafc] border outline-none transition-all placeholder:text-[12px] placeholder:pl-2 focus:ring-indigo-400 focus:ring-1 ${
              error && !formData.name ? "border-red-100 ring-2 ring-red-500" : "border-gray-300 focus:ring-indigo-400"
            }`}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handlechange}
                            name="email"
                            className={`w-full px-3 py-2 text-xs rounded-xl bg-[#f8fafc] border outline-none transition-all placeholder:text-[12px] placeholder:pl-2 focus:ring-indigo-400 focus:ring-1 ${
              error && !formData.email ? "border-red-100 ring-2 ring-red-500" : "border-gray-300 focus:ring-indigo-400"
            }`}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Password
                        </label>

                        <div className="mt-2 relative">
                            <input
                                type={ishide ? "text" : "password"}
                                placeholder="Create a strong password"
                                value={formData.password
                                }
                                onChange={handlechange}
                                name="password"
                               className={`w-full px-3 py-2 text-xs rounded-xl bg-[#f8fafc] border outline-none transition-all placeholder:text-[12px] placeholder:pl-2 focus:ring-indigo-400 focus:ring-1 ${
              error && !formData.password ? "border-red-100 ring-2 ring-red-500" : "border-gray-300 focus:ring-indigo-400"
            }`}
                            />

                            <span className="absolute right-4 top-1 text-gray-500" onClick={pswdtoggle}>
                                {ishide ? (<i className="bi bi-eye"></i>
                                ) : (
                                    <i className="bi bi-eye-slash"></i>)}
                            </span>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>

                        <div className="mt-2 relative">
                            <input
                                type={compswshow ? "text" : 'password'}
                                placeholder="Confirm your password"
                                value={formData.confirmpassword}
                                onChange={handlechange}
                                name="confirmpassword"
                                   className={`w-full px-3 py-2 text-xs rounded-xl bg-[#f8fafc] border outline-none transition-all placeholder:text-[12px] placeholder:pl-2 focus:ring-indigo-400 focus:ring-1 ${
              error && !formData.confirmpassword ? "border-red-100 ring-2 ring-red-500" : "border-gray-300 focus:ring-indigo-400"
            }`}
                            />

                            <span className="absolute right-4 top-1 text-gray-500" onClick={confirmpswdtoggle}>
                                {compswshow ? (<i className="bi bi-eye"></i>
                                ) : (
                                    <i className="bi bi-eye-slash"></i>)}
                            </span>
                        </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-2 text-sm text-gray-600 mt-3">
                        <input type="checkbox" className="mt-1" />

                        <p>
                            I agree to the{" "}
                            <span className="text-purple-600 cursor-pointer">
                                Terms of Service
                            </span>{" "}
                            and{" "}
                            <span className="text-purple-600 cursor-pointer">
                                Privacy Policy
                            </span>
                        </p>
                    </div>

                    {/* Create Account */}
                    <button
                        className="w-full py-3 rounded-5 text-white font-semibold bg-gradient-to-r from-[#5F2EEA] to-[#8A2BE2] hover:opacity-95"
                    >
                        Create Account
                    </button>

                </form>


                {/* Login */}
                <p className="text-center text-gray-600 mt-6 text-sm mt-2">
                    Already have an account?{" "}
                    <span className="text-purple-600 font-medium cursor-pointer" onClick={tologin}>
                        Log in
                    </span>
                </p>

            </div>
        </div>
    );
}

export default Signup;