import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row w-screen h-screen">
      {/* Left Section - Always visible */}
      <div className="w-full md:w-[60vw] px-12 pt-8 pb-12 bg-white">
        <h2 className="text-lg font-medium text-black">Expense Tracker</h2>
        {children} {/* Ensure children (e.g., login form) is passed */}
      </div>

      {/* Right Section - Visible on md screens and above */}
      <div className="block w-[40vw] h-screen bg-violet-50 bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative"
           style={{ backgroundImage: "url('/assets/images/auth-bg-img.jpg')" }}> {/* Replace with correct path or remove */}
        <div className="w-48 h-48 rounded-[40px] bg-purple-600 absolute -top-9 -left-5" />
        <div className="w-48 h-56 rounded-[60px] border-[20px] border-fuchsia-600 absolute top-[100%] -right-10" />
        <div className="w-48 h-48 rounded-[40px] bg-violet-500 absolute -bottom-9 -left-5" />

        <div className="grid grid-cols-1 z-20">
          <div className="bg-primary text-white p-4 rounded-lg">
            <span>📈</span>
            <p className="text-sm">Track your Income & Expenses</p>
            <p className="text-xl font-bold">430,000</p>
          </div>
        </div>

        
        <img
          src="/assets/images/card2.png"
          alt="Card preview"
          className="w-64 lg:w-[90%] absolute bottom-10 shadow-lg shadow-blue-400/15"
          onError={(e) => { e.target.style.display = 'none'; console.log('Image failed to load'); }}
        />
      </div>
    </div>
  );
};

export default AuthLayout;