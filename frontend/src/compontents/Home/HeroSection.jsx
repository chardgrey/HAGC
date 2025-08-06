import React from 'react'
import paw from '@/assets/paw.svg'
import dog from '@/assets/heroimg.svg'

export default function HeroSection() {
  return (
    <div className="bg-[#F7E9D7] min-h-screen relative">
      {/* Paw prints pattern */}
      <div className="absolute inset-0 opacity-20">
        {/* Left side paw prints */}
        <div className="absolute top-20 left-8 w-8 h-8 opacity-60">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 7C14.1 7 13.36 7.5 13.06 8.19L9.97 15.07C9.68 15.71 8.95 16 8.22 16H5C3.9 16 3 16.9 3 18S3.9 20 5 20H8.22C10.07 20 11.81 19.11 12.81 17.59L15.5 13H19V11H16.5L18.78 7.76C19.85 6.23 21.73 5.86 23.06 6.93L21 9Z"/>
          </svg>
        </div>
        <div className="absolute top-40 left-16 w-6 h-6 opacity-40">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 7C14.1 7 13.36 7.5 13.06 8.19L9.97 15.07C9.68 15.71 8.95 16 8.22 16H5C3.9 16 3 16.9 3 18S3.9 20 5 20H8.22C10.07 20 11.81 19.11 12.81 17.59L15.5 13H19V11H16.5L18.78 7.76C19.85 6.23 21.73 5.86 23.06 6.93L21 9Z"/>
          </svg>
        </div>
        <div className="absolute top-60 left-4 w-5 h-5 opacity-50">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 7C14.1 7 13.36 7.5 13.06 8.19L9.97 15.07C9.68 15.71 8.95 16 8.22 16H5C3.9 16 3 16.9 3 18S3.9 20 5 20H8.22C10.07 20 11.81 19.11 12.81 17.59L15.5 13H19V11H16.5L18.78 7.76C19.85 6.23 21.73 5.86 23.06 6.93L21 9Z"/>
          </svg>
        </div>
        <div className="absolute bottom-32 left-20 w-7 h-7 opacity-30">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 7C14.1 7 13.36 7.5 13.06 8.19L9.97 15.07C9.68 15.71 8.95 16 8.22 16H5C3.9 16 3 16.9 3 18S3.9 20 5 20H8.22C10.07 20 11.81 19.11 12.81 17.59L15.5 13H19V11H16.5L18.78 7.76C19.85 6.23 21.73 5.86 23.06 6.93L21 9Z"/>
          </svg>
        </div>
        <div className="absolute bottom-16 left-8 w-4 h-4 opacity-60">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 7C14.1 7 13.36 7.5 13.06 8.19L9.97 15.07C9.68 15.71 8.95 16 8.22 16H5C3.9 16 3 16.9 3 18S3.9 20 5 20H8.22C10.07 20 11.81 19.11 12.81 17.59L15.5 13H19V11H16.5L18.78 7.76C19.85 6.23 21.73 5.86 23.06 6.93L21 9Z"/>
          </svg>
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex items-center min-h-screen px-4 sm:px-6 lg:px-8 overflow-visible">
        <div className="absolute inset-0 opacity-30 z-0">
            <img src={paw} alt="" className='absolute top-0 left-0 w-full h-full object-cover'/>
        </div>
        <div className="w-full max-w-7xl mx-auto z-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            
            {/* Left content */}
            <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0 lg:pr-12">
              <h1 className="text-4xl fredoka sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4">
                <span className="text-gray-800 block">Find Your Perfect</span>
                <span className="inline bg-white text-[#F2786D] px-4 py-1 rounded-3xl shadow-md">
                    Furry Friend!
                </span>
              </h1>
              
              <p className="text-[#333333] text-lg sm:text-xl lg:text-2xl mb-8 max-w-md mx-auto lg:mx-0 port-lligat-slab-regular tracking-wide">
                You can make a difference in their lives!!
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-6 py-3 bg-transparent border-2 border-[#4FA3D1] text-[#4FA3D1] rounded-2xl font-semibold hover:bg-[#4FA3D1] hover:text-white transition-all duration-300 text-sm sm:text-base">
                  Report Rescue
                </button>
                <button className="px-6 py-3 bg-[#4FA3D1] text-white rounded-2xl font-semibold hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base">
                  Find Your Furever Friend
                </button>
              </div>
            </div>
            
            {/* Right content - Dog image covers all right side */}
            <div className="flex-1 relative h-screen flex items-end justify-end">
              <div className="w-full h-full relative flex items-end justify-end">
                <img
                  src={dog}
                  alt="Dog"
                  className="w-[150%] h-[150vh] max-w-none object-contain object-bottom"
                  style={{ minHeight: '150vh', maxHeight: 'none' }}
                />
              </div>

              {/* Decorative blue circle */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-[#4FA3D1] rounded-full opacity-80"></div>

              {/* Decorative green circle */}
              <div className="absolute bottom-20 left-4 w-12 h-12 bg-[#6BBF59] rounded-full opacity-80"></div>

              {/* Plus icon */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-8 h-8 text-white text-2xl font-bold flex items-center justify-center">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}