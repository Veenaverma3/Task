import React from "react";
import { FaChessKing, FaVideo } from "react-icons/fa6";
import ic1 from "../img/icon1.png";
import ic2 from "../img/icon2.png";
import ic3 from "../img/icon3.png";
import ic4 from "../img/icon4.png";

const Hom6 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:px-20 space-y-10 lg:space-y-0 lg:space-x-16 bg-slate-800 text-white">
      {/* Customer Testimonial Section */}
      <div className="max-w-lg text-center lg:text-left">
        <h1 className="text-5xl font-bold  mb-4">
          What Ourv<br/> Customers Say<br/> //
        </h1>
        <p className=" leading-relaxed mb-6">
          I was overwhelmed with the thought of creating my will, but this
          platform made it so easy and stress-free. The step-by-step process was
          clear, and I appreciated the legal review that gave me confidence
          everything was in order. I now have peace of mind knowing my will is
          securely stored and can be updated whenever needed. Highly recommend
          it!
        </p>
        <p className=" font-semibold text-lg mb-6">
          — Sarah Mitchell
        </p>
        {/* Icons */}
        <div className="flex items-center justify-center lg:justify-start space-x-4">
          <img src={ic1} alt="icon1" className="w-16 h-16 rounded-full" />
          <img src={ic2} alt="icon2" className="w-16 h-16 rounded-full" />
          <img src={ic3} alt="icon3" className="w-16 h-16 rounded-full" />
          <img src={ic4} alt="icon4" className="w-16 h-16 rounded-full" />
          <FaVideo className="text-slate-800 w-16 h-16 text-3xl cursor-pointer rounded-full bg-white hover:text-slate-700 transition" />
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-md bg-slate-900 shadow-lg rounded-lg p-8">
        <div className="flex justify-center mb-4">
          <FaChessKing className="text-4xl text-white" />
        </div>
        <h1 className="text-3xl font-semibold text-white text-center mb-4">
          Need Assistance? Send Us a Message!
        </h1>
        <form className="space-y-4">
          <div>
            <label className="block text-white font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-1">Message</label>
            <textarea
              placeholder="What would you like to say?"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded-lg font-medium hover:bg-teal-600 transition"
          >
            Send
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          or <span className="text-teal-500 font-medium cursor-pointer hover:underline">Start Free Trial</span>
        </p>
      </div>
    </div>
  );
};

export default Hom6;
