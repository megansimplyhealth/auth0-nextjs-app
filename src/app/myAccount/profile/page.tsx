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
  const userEmail = user?.email;


  return (
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
    <div className="absolute h-32 w-full mt-24">    
      <h1>Profile</h1>
      <p>Welcome to your profile page, {userFirstName} {userSurname}.</p>
      <p>Email: {userEmail}</p>
    </div>

    <div className="flex justify-center items-center flex-row pt-4 px-10 border-t-2 border-leaf-green-40 "/>

    {/* footer */}
    <div className="absolute bg-background-grey px-10 w-full ">
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
  );
}