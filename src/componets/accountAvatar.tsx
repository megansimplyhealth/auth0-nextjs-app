
import 'tailwindcss/tailwind.css'
import Image from 'next/image';
import { IconButton } from '@material-ui/core';
import { KeyboardArrowDownOutlined } from '@material-ui/icons';


interface AccountAvatarProps {
    lastName?: string
    role?: string
    onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const AccountAvatar = (props: AccountAvatarProps) => {

    return (
        <div className="bg-white rounded-full flex justify-center items-center w-full h-full border border-grey shadow-lg">
            <div className="flex items-center">
                <div className="relative">
                    <Image
                    src="/images/avatar.jpg"
                    alt="Account Avatar" 
                    width={60}
                    height={60}
                    className="h-16 w-16 p-2 rounded-full object-cover"
                    />
                    <div className="absolute inset-0 rounded-full shadow-inner"></div>
                </div>

                <p className="text-left leading-none ml-2 mr-2">
                    <strong className="text-lg text-black">Dr. {props.lastName}</strong><br />
                    <span className="text-sm text-grey-4 leading-none">{props.role}</span>
                </p>

                <div className="relative flex rounded-full mr-2">
                    <IconButton type="button">
                        <KeyboardArrowDownOutlined />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default AccountAvatar;