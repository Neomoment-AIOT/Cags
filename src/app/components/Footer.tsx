import Link from 'next/link';
import Image from 'next/image';
// Optional: If you want to use icons for social media
// import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1c242d] text-gray-300 pt-16 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main grid for footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">

          {/* Column 1: Logo */}
          <div className="lg:col-span-1 flex items-start">
            <Link href="/">
              <Image 
                src="/favwhite.png" 
                alt="Footer Logo"
                width={80} // Adjust to your logo's actual width
                height={80} // Adjust to your logo's actual height
              />
            </Link>
          </div>

          {/* Column 2: Links */}
          <div className="lg:col-span-2">
            <ul className="space-y-3 font-semibold">
              <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Company</Link></li>
              <li><Link href="/brands" className="hover:text-white transition-colors">Our Brands</Link></li>
            </ul>
          </div>

          {/* Column 3: More Links */}
          <div className="lg:col-span-2">
            <ul className="space-y-3 font-semibold">
              <li><Link href="/distribution" className="hover:text-white transition-colors">Distribution</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
              <li><Link href="/career" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter Signup */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-lg text-white mb-2">Sign up to the newsletter</h4>
            <p className="text-sm mb-4">
              Be the first to know about new products and updates.
            </p>
            {/* The form action and method are preserved from your original code */}
            <form 
              action="http://abcgomel.us9.list-manage.com/subscribe/post-json?u=ba37086d08bdc9f56f3592af0&amp;id=e38247f7cc&amp;c=?" 
              method="post" 
              name="mc-embedded-subscribe-form"
              target="_blank" 
              noValidate
              className="flex flex-col items-start space-y-4"
            >
              <input 
               type="email" 
                name="EMAIL" 
                className="w-full sm:w-3/4 g-transparent border-0 border-b-[1px] border-white text-white placeholder:text-gray-400 py-4 my-6 focus:outline-none focus:ring-0 focus:border-white transition-colors"
                placeholder="Enter your email" 
                required 
              />
              <button 
                type="submit"
                // --- BUTTON STYLES MODIFIED AS PER YOUR REQUEST ---
                  className="w-full sm:w-1/2 bg-transparent border-[2px] border-white text-white uppercase font-semibold py-3 rounded-md hover:bg-white hover:text-[#1c242d] transition-colors text-center"
              
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
          
          {/* Column 5: Social & Legal Links */}
          <div className="lg:col-span-3">
             <h4 className="font-bold text-lg text-white mb-2">Follow CAGS</h4>
             <ul className="space-y-3 font-semibold mb-8">
                {/* Use standard <a> tags for external links */}
                <li><a href="https://www.instagram.com/cagssocial/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="https://twitter.com/cagssocial" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="https://www.facebook.com/cagssocial" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
             </ul>
             <ul className="space-y-3 font-semibold">
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link></li>
                <li><Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
                <li><Link href="/accessibility" className="hover:text-white transition-colors">Accessibility Statement</Link></li>
             </ul>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
           <p>&copy; {new Date().getFullYear()} CAGS. All Rights Reserved.</p>
        </div>
        
      </div>
    </footer>
  );
}