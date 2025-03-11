 
 import React, { useState } from "react";
 import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
 
 const Profile = () => {
   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 
   return (
     <div className="flex flex-col items-center justify-center mb-16 mt-6 p-8">
       <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
         <button className="flex items-center text-gray-600 text-lg font-bold hover:text-black mb-6">
           <FaArrowLeft className="mr-2 text-teal-400" />
           Back
         </button>
 
         <h1 className="text-3xl font-semibold text-gray-800 mb-4">Let's Get Started</h1>
 
         <label className="block text-gray-700 mb-1">Email Address</label>
         <input type="email" className="w-full border-2 p-2 rounded mb-4" placeholder="Enter your email" />
 
         <label className="block text-gray-700 mb-1">Create Password</label>
         <div className="relative mb-4">
           <input
             type={showPassword ? "text" : "password"}
             className="w-full border-2 p-2 rounded pr-10"
             placeholder="Enter password"
           />
           <button
             type="button"
             className="absolute right-3 top-3 text-gray-600"
             onClick={() => setShowPassword(!showPassword)}
           >
             {showPassword ? <FaEyeSlash /> : <FaEye />}
           </button>
         </div>
 
         <label className="block text-gray-700 mb-1">Confirm Password</label>
         <div className="relative mb-6">
           <input
             type={showConfirmPassword ? "text" : "password"}
             className="w-full border-2 p-2 rounded pr-10"
             placeholder="Confirm password"
           />
           <button
             type="button"
             className="absolute right-3 top-3 text-gray-600"
             onClick={() => setShowConfirmPassword(!showConfirmPassword)}
           >
             {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
           </button>
         </div>
 
         <div className="flex justify-end">
           <button className="w-28 bg-teal-500 text-white py-2 rounded-full hover:bg-teal-600 transition">
             Continue
           </button>
         </div>
       </div>
     </div>
   );
 };
 
 export default Profile;
 