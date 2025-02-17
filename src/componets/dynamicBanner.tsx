import 'tailwindcss/tailwind.css'
import IconButton from '@mui/material/IconButton';
import { ArrowBackOutlined, ArrowForwardOutlined } from '@mui/icons-material';
import Image from 'next/image';

type ImagePropsType = {
    src: string;
    link: string | null;
  };

interface BannerProps {
    image: ImagePropsType[];
    onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const DynamicBanner = (props: BannerProps) => {

  return (
    <div className="absolute w-full h-full flex items-center justify-center">
      <div className="flex items-center justify-between w-full px-10 py-4">
        
        <div className="flex items-center "> 
          <div className="h-28 mr-2">
            <strong className="text-5xl text-black">Practice News</strong>
            
            <p className="text-left leading-none mt-2">
              <span className="text-base text-grey-4 leading-none mt-2">
                Stay on top of all upcoming events, practice<br />
                revenue statistics and marketing tips.
              </span>
            </p>
  
            <div className="flex space-x-2 mt-2">
              <IconButton type="button" className="rounded-full border border-grey-2 shadow-lg w-6 h-6 flex items-center justify-center" onClick={() => {}}>
                <ArrowBackOutlined />
              </IconButton>
              <IconButton type="button" className="rounded-full border border-grey-2 shadow-lg w-6 h-6 flex items-center justify-center" onClick={() => {}}>
                <ArrowForwardOutlined />
              </IconButton>
            </div>
          </div>

          <div className="flex items-center justify-center ml-2">
          <a
              className="flex items-center justify-center mr-4"
              href={props.image[0].link ?? "#"} // Fallback to "#" if link is null
            >
              <Image
                src={props.image[0].src}
                alt="Denplan Summit 2025 Event Banner"
                width={650}
                height={50}
                className="rounded-xl ml-5 mr-5 border border-grey shadow-lg"
              />
            </a>
  
            <a className="flex items-center justify-center mr-2" href={props.image[1].link ?? "#"} >
              <Image
                src={props.image[1].src}
                alt="Denplan Summit 2025 Event Banner"
                width={650}
                height={50}
                className="rounded-xl border border-grey shadow-lg"
              />
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
  
  
  
}

export default DynamicBanner;