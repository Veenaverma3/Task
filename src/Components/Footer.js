 import React from 'react';
import { Link } from "react-router-dom";
import logo from "../img/logo.png"
const Footer = () => {
    return (
        <footer className="bg-[#161C28] text-[#A6A6A6] font-bold py-8 px-6 w-full">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
                {/* Left Section */}
                <div className="mb-6 md:mb-0 text-left space-y-6 w-full md:w-1/4 xl:w-96">
                   <img src={logo} className="h-8"/>
                    <p className="mt-2">Secure Your Legacy, Today</p>
                    <div className="mt-4 flex items-center border border-gray-500 rounded-full overflow-hidden w-64 sm:w-40 lg:w-60 xl:w-72">
                        <input
                            type="email"
                            placeholder="Enter your email here"
                            className="bg-transparent px-4 py-2 text-sm w-full  focus:outline-none"
                        />
                        <button className="bg-[#54BD95] h-[33px] w-[35px] flex items-center justify-center  p-2 rounded-full mr-1 mt-1 mb-1 text-white">
                            ➝
                        </button>
                    </div>
                    </div>

{/* Middle and Right Sections */}
<div className="grid grid-cols-2  md:grid-cols-3 gap-8 w-full md:w-3/4">
    <div>
        <h3 className="text-white font-semibold mb-5">Solutions</h3>
        <ul className="space-y-5">
            <li><Link to="#" className="hover:text-white">How It Works</Link></li>
            <li><Link to="#" className="hover:text-white">Pricing Plans</Link></li>
            <li><Link to="#" className="hover:text-white">Create Your Will</Link></li>
            <li><Link to="#" className="hover:text-white">Security</Link></li>
        </ul>
    </div>

    <div>
        <h3 className="text-white font-semibold mb-5">Help & Support</h3>
        <ul className="space-y-5">
            <li><Link to="#" className="hover:text-white">FAQs</Link></li>
            <li><Link to="#" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="#" className="hover:text-white">Legal Resources</Link></li>
            <li><Link to="#" className="hover:text-white">User Guide</Link></li>
        </ul>
    </div>

    <div>
    <h3 className="text-white font-semibold mb-5">Product</h3>
                        <ul className="space-y-5">
                            <li><Link to="#" className="hover:text-white">Will</Link></li>
                            <li><Link to="#" className="hover:text-white">LPA</Link></li>
                            <li><Link to="#" className="hover:text-white">Trusts</Link></li>
                            <li><Link to="#" className="hover:text-white">Calculators</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center flex justify-around flex-wrap items-center text-sm mt-8  border-gray-700 pt-4">
                <p className="text-[#ffff] font-bold ">© 2024 Regency Inc. Copyright and rights reserved</p>
                <p className="mt-2 text-[#ffff]">
                    <Link to="#" className="hover:underline font-bold ">Terms and Conditions</Link> •{" "}
                    <Link to="#" className="hover:underline font-bold">Privacy Policy</Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;