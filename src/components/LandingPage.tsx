import React from 'react';
import { useModal } from '../context/ModalContext';

const LandingPage: React.FC = () => {
  const { openModal } = useModal();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          filter: "brightness(0.5) contrast(1.2)"
        }}
      >
        {/* Blue overlay for brand color */}
        <div className="absolute inset-0 bg-[#0012ff] opacity-20"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative h-full w-full">
        {/* Logo */}
        <div className="absolute top-10 left-0 right-0 text-center">
          <h1 className="text-6xl font-extrabold text-white tracking-wider">
            <span className="text-[#0012ff]">nikoo</span>
            <span className="text-white">gfx</span>
          </h1>
        </div>
        
        {/* Order Button (Left Middle) */}
        <div className="absolute top-1/2 left-[10%] transform -translate-y-1/2">
          <button 
            onClick={() => openModal('commission')}
            className="bg-[#0012ff] hover:bg-blue-800 text-white px-12 py-4 rounded-md text-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-[#0012ff]/50"
          >
            Order
          </button>
        </div>
        
        {/* Pricing Button (Right Middle) */}
        <div className="absolute top-1/2 right-[10%] transform -translate-y-1/2">
          <button 
            onClick={() => openModal('pricing')}
            className="bg-transparent hover:bg-[#0012ff]/20 text-white border-2 border-[#0012ff] px-12 py-4 rounded-md text-2xl font-bold transition-all duration-300"
          >
            Pricing
          </button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-0 right-0 text-center">
          <p className="text-white text-xl font-medium animate-pulse">
            Scroll down for more
          </p>
          <div className="mt-2 mx-auto w-6 h-10 border-2 border-white rounded-full flex items-start justify-center">
            <div className="w-2 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;