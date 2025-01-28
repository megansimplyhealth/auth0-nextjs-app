
import 'tailwindcss/tailwind.css'
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownOutlined from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useState } from 'react';
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

interface AccountAvatarProps {
    lastName?: string
    role?: string
    image?: string
}

const AccountAvatar = (props: AccountAvatarProps) => {
    const avatarImage = props.image ?? "/images/avatar.jpg";
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { user } = useUser();

    const handleNavigation = (option: string): string => {
    const routes: Record<string, string> = {
      profile: "/myAccount/profile",
      settings: "/myAccount/settings",
      };
      return routes[option] || "/";
    };

    const handleLogout = () => {
      window.location.href = '/api/auth/logout';
    };
    
      return (
        <div className="bg-white rounded-full flex justify-center items-center w-full h-full border border-grey shadow-lg">
          <div className="flex items-center">
            <div className="relative">
              <Image
                src={avatarImage}
                alt="Account Avatar"
                width={60}
                height={60}
                className="h-16 w-16 p-2 rounded-full object-cover"
              />
              <div className="absolute inset-0 rounded-full shadow-inner"></div>
            </div>
    
            {user && (
              <p className="text-left leading-none ml-2 mr-2">
                <strong className="text-lg text-black">Dr. {props.lastName}</strong>
                <br />
                <span className="text-sm text-grey-4 leading-none">{props.role}</span>
              </p>
            )}
    
            <div className="relative">
              <IconButton
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="rounded-full"
              >
                <KeyboardArrowDownOutlined />
              </IconButton>
    
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
                  <ul className="py-2">
                    {["profile", "settings", "logout"].map((option) => (
                      <li key={option} className="px-4 py-2 hover:bg-gray-100">
                        <Link
                          href={option === "logout" ? "#" : handleNavigation(option)}
                          onClick={option === "logout" ? handleLogout : () => setDropdownOpen(false)}
                        >
                          {option.charAt(0).toUpperCase() + option.slice(1)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    };

export default AccountAvatar