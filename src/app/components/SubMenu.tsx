"use client";

import Link from "next/link";

/*
  NOTE: For the hover effect to work, you must add the `group` class
  to the parent element of this component. For example:

  <div className="relative group">
    <button>Company</button> // This is the main menu item
    <SubMenu />             // This is your submenu
  </div>
*/

export default function SubMenu() {
  return (
    // Added h-[100px] for a fixed height. Width is already 100% with 'w-full'.
    <div className="absolute left-0 top-full hidden w-full bg-white shadow-lg border-t border-gray-200 z-40 group-hover:block h-[100px]">
      {/*
        Removed py-6 and added flexbox alignment to vertically center the content
        within the new fixed 100px height.
      */}
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="flex flex-wrap -mx-4 w-full">
          {/* Left Column */}
          <div className="w-full md:w-1/4 px-4">
            <h5 className="text-black text-lg font-semibold">Company</h5>
          </div>

          {/* Middle Column */}
          <div className="w-full md:w-1/3 px-4 md:border-l border-gray-200">
            <ul className="space-y-2">
              <li>
                <Link href="/Home/About" className="text-gray-700 hover:text-blue-600 text-sm">Overview</Link>
              </li>
              <li>
                <Link href="/Home/OurHistory" className="text-gray-700 hover:text-blue-600 text-sm">History</Link>
              </li>
              <li>
                <Link href="/Home/Certificates" className="text-gray-700 hover:text-blue-600 text-sm">Certifications</Link>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-2/5 px-4">
            <span className="block mb-2 text-gray-700 text-sm">
              Join Our Distribution Network and Grow Your Business
            </span>
            <Link href="/Home/Contact" className="font-bold text-blue-600 hover:underline inline-flex items-center">
              <h4 className="flex items-center text-base">
                Contact us&nbsp;
                <img
                  src="/Content/Site/images/righticon.png"
                  alt="right icon"
                  className="inline-block max-w-[18px]"
                />
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}