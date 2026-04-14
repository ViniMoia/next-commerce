import Link from 'next/link'
import {  Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

function Navbar() {
  return (<nav className='fixed top-0 w-full flex item-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300'>
         < Link
         className='uppercase font-bold text-md h12 flex item-center justify-center  px-4 py-4'
         href="/">
          <h2 className='uppercase font-bold text-md h12 flex item-center justify-center'>
          Next Store
          </h2>
         </Link>
         <header className="flex justify-end items-center p-4 gap-4 h-16">
                     <Show when="signed-out">
                       <SignInButton />
                       <SignUpButton>
                         <button className="bg-purple-700 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                           Sign Up
                         </button>
                       </SignUpButton>
                     </Show>
                     <Show when="signed-in">
                       <UserButton />
                     </Show>
                   </header>
        </nav>
    ) 
}

export default Navbar