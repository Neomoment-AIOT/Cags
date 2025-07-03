// app/components/AgeVerificationPopup.tsx

"use client"; // This component needs to be a client component for onClick events.

import Image from 'next/image';

// The component accepts a function `onConfirm` as a prop.
// This function will be called when the user clicks "Yes".
type AgeVerificationPopupProps = {
  onConfirm: () => void;
};

export default function AgeVerificationPopup({ onConfirm }: AgeVerificationPopupProps) {

  const handleDeny = () => {
    // You can decide what happens when the user clicks "No".
    // A common practice is to redirect them away from the site.
    alert("You must be 18 or older to view this content.");
    window.location.href = 'https://www.google.com'; // Redirects to Google as an example.
  };

  return (
    // Full-screen overlay: fixed position, covers the screen, dark semi-transparent background.
    // Uses flexbox to center the content box. z-50 ensures it's on top of everything.
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      
      {/* Content Box: dark background, rounded corners, padding, and shadow. */}
      {/* It's a flex container that stacks columns vertically on mobile and side-by-side on desktop (md:flex-row). */}
      <div className="bg-[#1c242d] text-white rounded-lg shadow-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">

        {/* Left Column */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-center md:text-left md:border-r md:border-gray-700">
          <div className="mx-auto md:mx-0">
            <Image 
              src="/favwhite.png" 
              alt="CAGS Logo"
              width={60}
              height={60}
            />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mt-4">Welcome to CAGS</h1>
          <p className="text-gray-300 mt-4">
            This website contains images of tobacco products. Please verify your age to continue.
          </p>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-center">
          <p className="text-xl font-semibold text-center">
            I am 18 years old or over
          </p>
          <div className="flex gap-4 mt-6">
            {/* The "Yes" button calls the onConfirm function passed from the parent. */}
            <button 
              onClick={onConfirm}
              className="bg-white text-black font-bold py-3 px-10 rounded-md hover:bg-gray-300 transition-colors"
            >
              Yes
            </button>
            {/* The "No" button has its own handler defined inside this component. */}
            <button
              onClick={handleDeny}
              className="bg-transparent border-2 border-gray-500 text-gray-300 font-bold py-3 px-10 rounded-md hover:bg-red-600 hover:border-red-600 hover:text-white transition-colors"
            >
              No
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-8 text-center">
            By accessing this site, you confirm that you meet or<br/>exceed the age requirement of 18 years.
          </p>
        </div>

      </div>
    </div>
  );
}