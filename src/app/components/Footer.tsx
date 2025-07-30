// components/Footer.js
'use client';

import { useActionState } from 'react';      // Correctly imported from 'react'
import { useFormStatus } from 'react-dom';    // Correctly imported from 'react-dom'
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './footer.module.css';
import { subscribeNewsletter } from '@/app/actions'; // Correct path to your server action

// A separate button component to manage the form's pending state
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-fit px-4 py-2 border border-white text-white uppercase transition hover:bg-white hover:text-black disabled:opacity-50"
    >
      {pending ? 'Subscribing...' : 'Subscribe'}
    </button>
  );
}

export default function Footer() {

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.colboxes}>
          
          {/* Column 1: Logo */}
          <div className={style.col}>
            <Link href="/home">
              <Image className={style.logo} src="/favwhite.png" alt="Footer Logo" width={60} height={60} />
            </Link>
          </div>

          {/* Column 2: Navigation */}
          <div className={style.col}>
            <ul className={style.ul}
            // "space-y-2 font-semibold"
            >
              <li><Link href="/products" className="hover:text-white">Products</Link></li>
              <li><Link href="/about" className="hover:text-white">Company</Link></li>
              <li><Link href="/brands" className="hover:text-white">Our Brands</Link></li>
            </ul>
          </div>

          {/* Column 3: More Links */}
          <div className={style.col}>
            <ul className={style.ul}
            // "space-y-2 font-semibold"
            >
              <li><Link href="/distribution" className="hover:text-white">Distribution</Link></li>
              <li><Link href="/events" className="hover:text-white">News</Link></li>
              <li><Link href="/career" className="hover:text-white">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className={style.col}>
            <h4 className={style.newsletter}
            >Sign up to the newsletter</h4>
            <p className={style.NewsletterSubheading}
            >
              Enter your email address Be the first to know about new products and updates.
            </p>
            <form
            //  ref={formRef} action={formAction} 
             className={style.formSubscribe}
             >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className={style.inputEmail}
                // "w-[70%] bg-transparent border-b border-white text-white 
                // placeholder:text-gray-400 py-2 focus:outline-none mb-4"
                required
              />
              <SubmitButton />
              {/* This paragraph will display the 'Success' or 'Error' message from the server action */}
              {/* {state.message && (
                <p className="mt-2 text-sm text-white">{state.message}</p>
              )} */}
            </form>
          </div>

          {/* Column 5: Social & Legal */}
          <div className={style.col}>
            <h4 className={style.social}>Follow CAGS</h4>
            <div className={style.socialLinkswithPrivacy}>
            <ul className="space-y-2 font-semibold mb-6">
              <li><a href="https://www.instagram.com/cagssocial/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a></li>
              <li><a href="https://twitter.com/cagssocial" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a></li>
              <li><a href="https://www.facebook.com/cagssocial" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a></li>
            </ul>
            <ul className="space-y-2 font-semibold text-sm pt-[60px]">
              <li><Link href="/privacypolicy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/privacypolicy" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/privacypolicy" className="hover:text-white">Cookie Policy</Link></li>
              <li><Link href="/home" className="hover:text-white">Accessibility Statement</Link></li>
            </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={style.bottombarCopyright}
        // "mt-12 pt-8 border-t border-gray-700 text-left text-sm text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} CAGS. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}