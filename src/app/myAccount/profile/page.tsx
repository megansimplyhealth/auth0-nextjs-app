"use client";

import { useUser } from '@auth0/nextjs-auth0/client';
import React from "react"
import Image from 'next/image';
import 'tailwindcss/tailwind.css'
import NavigationBar from '../../../componets/navigationBar'
import AccountAvatar from "../../../componets/accountAvatar";

export default function Profile() {
  const { user } = useUser();

  const userFirstName = user?.name?.split(' ')[0];
  const userSurname = user?.name?.split(' ')[1];
  const userAvatar = user?.picture ?? "/images/avatar.jpg";
  const userEmail = user?.email ?? "";

  return (
    <div>
      {user ? (
        <div className="bg-background-grey min-h-screen">
        
        {/* header */}
        <div className="absolute text-leaf-green px-10 py-1 z-10 w-full">
          <div className="flex items-center justify-between py-2 text-5x1">
            <div className="flex ">
            <Image
              src="/images/Denplan-logo.png"
              alt="Denplan Logo"
              width={161}
              height={61}
            />
            </div>
            <div className="flex items-center ml-40">
              <NavigationBar />
            </div>

            <div className="flex items-center">
              <AccountAvatar lastName={userSurname} role="Dentist" image={userAvatar}/>
            </div>
          </div>
        </div>

        {/* content section */}
        <div className="flex flex-col items-center pt-[10rem] px-10 pb-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl xl:text-4xl font-extrabold text-leaf-green">
              Profile
            </h1>
            <p className="text-lg text-secondary-green">
              Welcome to your profile page, please change your details here
            </p>
          </div>

          <div className="w-full flex-1 mt-8">
            <div className="mx-auto max-w-xs">
              <p className="text-lg text-leaf-green">First Name</p>
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-2"
                type="text"
                placeholder={userFirstName}
              />
              <p className="text-lg text-leaf-green">Surname</p>
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-2"
                type="text"
                placeholder={userSurname}
              />
              <p className="text-lg text-leaf-green">Email</p>
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-2"
                type="email"
                placeholder={userEmail}
              />
              <p className="text-lg text-leaf-green">Current Password</p>
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-2"
                type="password"
                placeholder="Current Password"
              />
              <p className="text-lg text-leaf-green">New Password</p>
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-2"
                type="password"
                placeholder="New Password"
              />
              <p className="text-lg text-leaf-green">Confirm Password</p>
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-2"
                type="password"
                placeholder="Confirm Password"
              />
              <button
                className="mt-5 tracking-wide font-semibold bg-secondary-green text-gray-100 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <span className="ml-3">Update Details</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-row mt-[35rem] pt-4 px-10 border-t-2 border-leaf-green-40 "/>

        {/* footer */}
        <div className="absolute bg-background-grey pt-4 px-10 w-full ">
          <div className="flex items-center justify-center py-2 text-5x1 mt-2 ml-48">
            <div className="flex items-center">
            <p className="text-left">
              <strong className="text-lg text-leaf-green underline mr-4">Accessibility</strong><strong className="text-lg text-leaf-green leading-none underline mr-4">Privacy and Legal</strong><strong className="text-lg text-leaf-green leading-none underline mr-4">Frequently Asked Questions</strong><strong className="text-lg text-leaf-green leading-none underline mr-4">Careers</strong><strong className="text-lg text-leaf-green leading-none underline mr-4">Feedback</strong><strong className="text-lg text-leaf-green leading-none underline mr-4">Sitemap</strong><strong className="text-lg text-leaf-green leading-none underline mr-4">Simplyhealth</strong><br />
              <strong className="text-lg text-leaf-green underline mr-32"></strong><span className="text-sm text-grey-4">Copyright © 2024 Megan Limited | blah blah blah legal stuff | Registered Company Number 12345678 </span>
            </p>
            </div>
            <div className="flex items-center ml-48">
              <Image
                src="/images/Denplan-B-Corp-Footer.png"
                alt="Denplan Logo"
                width={260}
                height={80}
              />
            </div>
          </div>
        </div>
      </div>
      ) : (
        <></>
      )}
    </div>
  );
};