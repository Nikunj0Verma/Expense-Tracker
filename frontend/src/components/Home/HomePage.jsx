import React from "react";
import './homepage.css';

import {
  FaMoneyBillWave,
  FaRegCalendarAlt,
  FaSignInAlt,
  FaList,
  FaChartPie,
  FaQuoteLeft,
} from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { FaFilter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <>
    <div className="overflow-hidden">


      <div className="text-white py-20 px-4 relative w-full overflow-hidden bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 animate-gradient">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-center">
            Take Control of Your Money, One Transaction at a Time
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-xl text-center">
            BudgetNest helps you track, filter, and understand your spending — effortlessly and intelligently
          </p>

          {/* Feature Icons */}
          <div className="flex space-x-8 mt-10">
            <div className="flex flex-col items-center">
              <FaMoneyBillWave className="text-3xl" />
              <p className="mt-2">Efficient Tracking</p>
            </div>
            <div className="flex flex-col items-center">
              <FaFilter className="text-3xl" />
              <p className="mt-2">Transactions Filtering</p>
            </div>
            <div className="flex flex-col items-center">
              <IoIosStats className="text-3xl" />
              <p className="mt-2">Insightful Reports</p>
            </div>
          </div>

          {/* Call to Action Button */}
          <Link to="/register">
            <button className="mt-8 px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg shadow-md hover:cursor-pointer hover:bg-gray-200 transform hover:-translate-y-0.5
                    transition-all duration-500">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      {/* How it works */}
      <div className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          How It Works
        </h2>
         <p className="mt-4 text-xl text-center italic text-gray-600">
           "Three Steps. One Smarter Budget"
          </p>
        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-blue-500 text-white mb-4">
              <FaSignInAlt className="text-xl" />
            </div>
            <h3 className="mb-2 font-semibold">Sign Up</h3>
            <p>Register and start managing your expenses in a minute.</p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-pink-500 text-white mb-4">
              <FaList className="text-xl" />
            </div>
            <h3 className="mb-2 font-semibold">Add Transactions</h3>
            <p>Quickly add income and expenses to your account.</p>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-purple-500 text-white mb-4">
              <FaChartPie className="text-xl" />
            </div>
            <h3 className="mb-2 font-semibold">View Reports</h3>
            <p>See insightful reports & graphs of your finances.</p>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="bg-gray-100 py-20 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          User Dashboard
        </h2>
       <img className="mt-10 text-center w-300 flex m-auto" src="bg.png" alt="" />
      </div>
      {/* CTA */}
      <div className="bg-blue-500 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">
            Ready to Take Charge of Your Money?
          </h2>
          <p className="mt-4">
            Join BudgetNest and start building financial clarity — one transaction at a time
          </p>
          <Link to="/register">
            <button className="mt-8 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:cursor-pointer hover:bg-gray-100 transform hover:-translate-y-0.5
                    transition-all duration-500">
              Sign Up For Free
            </button>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default HeroSection;