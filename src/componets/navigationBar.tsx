import IconButton from '@mui/material/IconButton';
import { AppsOutlined, HomeOutlined, NotificationsOutlined, SettingsOutlined } from '@mui/icons-material';
import 'tailwindcss/tailwind.css'


interface NavProps {
    icons?: string[]
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const NavigationBar = (props: NavProps) => {

    return (
        <div className="bg-white border border-grey shadow-lg rounded-full flex justify-center items-center px-4" style={{ height: '58px' }}>
            <div className="relative flex rounded-full w-1/4 ml-2 ">
                <IconButton type="button" className="w-full rounded-l-md hover:bg-apple-green">
                    <HomeOutlined />
                </IconButton>
            </div>
            <div className="relative flex rounded-full w-1/4">
                <IconButton type="button" className="w-full hover:bg-apple-green">
                    <AppsOutlined />
                </IconButton>
            </div>
            <div className="relative flex rounded-full w-1/4">
                <IconButton type="button" className="w-full hover:bg-apple-green">
                    <SettingsOutlined />
                </IconButton>
            </div>
            <div className="relative flex rounded-full w-1/4 mr-2">
                <IconButton type="button" className="w-full rounded-r-md hover:bg-apple-green">
                    <NotificationsOutlined />
                </IconButton>
            </div>
        </div>
    );
}

export default NavigationBar