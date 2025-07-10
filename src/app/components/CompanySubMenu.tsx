"use client";

import Link from "next/link";
import Image from "next/image";

/*
  NOTE: For the hover effect to work, you must add the `group` class
  and padding (e.g., `pb-4`) to the parent element of this component.
*/

export default function CompanySubMenu() {
  return (
    // UPDATED: Changed `top-13` to `top-full` and added `group-focus-within:block`
    <div className="absolute top-full hidden w-full min-w-[1440px] 
    z-40 group-hover:block group-focus-within:block">
      
      {/* This inner div is the centered container for your content. */}
      <div className="container subMenu-container
      mx-auto px-6 mt-7 
      bg-[#e7e6e6] 
    shadow-lg border-t 
    ml-[-36%]
    ">
        
        {/* Flex container for columns. */}
        <div className="flex flex-wrap w-full py-4 md:py-4 space-y-8 md:space-y-0">
          
          {/* Column 1: Company Title */}
          <div className="w-full md:w-1/4 px-4 pr-8 border-r-2 border-white border-w-full p-4 m-0">
            <h3 className="text-lg font-medium text-gray-800 pb-2 border-b border-gray-400">
              Company
            </h3>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="w-full md:w-1/3 px-4 md:border-l border-slate-200 p-4 m-0">
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-sm font-semibold text-gray-800 hover:text-black transition-colors duration-200 uppercase tracking-widest">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/history" className="text-sm font-semibold text-gray-800 hover:text-black transition-colors duration-200 uppercase tracking-widest">
                  History
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="text-sm font-semibold text-gray-800 hover:text-black transition-colors duration-200 uppercase tracking-widest">
                  Certifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us CTA */}
          <div className="w-full md:w-2/5 px-4 p-4 m-0">
            <p className="text-sm text-gray-700 mb-3">
              Join Our Distribution Network and Grow Your Business
            </p>
            <Link href="/contact" className="inline-flex items-center text-gray-800 hover:text-black transition-colors duration-200">
              <span className="text-sm font-semibold uppercase tracking-widest">
                Contact us
              </span>
              <span className="ml-2 text-xl">→</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}