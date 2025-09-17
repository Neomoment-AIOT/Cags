// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock } from '@fortawesome/free-solid-svg-icons';
// import Link from 'next/link';

export default function BlockedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          {/* <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-50 mb-6">
            <FontAwesomeIcon
              icon={faLock}
              className="h-10 w-10 text-red-500"
              aria-hidden="true"
            />
          </div> */}
          <span className="text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">
            Access Restricted
          </span>
          <p className="mt-4 text-base text-red-600">
            We're sorry, but this content is not available in your region.
          </p>
        </div>

        <div className="mt-8 bg-white py-8 px-6 shadow-xl rounded-xl sm:px-10">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                {/* <div className="flex-shrink-0">
                  <img 
                    className="h-12 w-auto" 
                    src="/Logo.png" 
                    alt="CAGS Logo"
                  />
                </div> */}
              </div>

              <div className="text-sm text-gray-600 space-y-2">
                <p>Due to regional restrictions, we're unable to provide access to our website from your current location.</p>
                <p>We appreciate your understanding and apologize for any inconvenience this may cause.</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="text-sm">
                <p className="font-medium text-gray-700">Need assistance?</p>
                <p className="mt-1 text-gray-500">
                  If you believe this is an error, please contact our support team at{' '}
                  <span
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    support@cags.com
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-6">
          <p> {new Date().getFullYear()} CAGS. All rights reserved.</p>
        </div>
      </div>

    </div>
  );
}