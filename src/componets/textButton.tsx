
import 'tailwindcss/tailwind.css'
import { MouseEvent } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowForwardOutlined from '@mui/icons-material/ArrowForwardOutlined';


interface TextButtonProps {
    text : string
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const TextButton = (props: TextButtonProps) => {
    const altText = `${props.text} icon`;

    const toSentenceCase = (text: string) => {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    };

    return (
        <div className="bg-apple-green shadow-lg rounded-full flex justify-center items-center h-14 w-6/12">
            <div className="flex items-center ml-2">
                <Button onClick={props.onClick} className="text-left leading-none">
                    <strong className="text-base text-black">
                        {toSentenceCase(props.text)}
                    </strong>
                </Button>
                <div className="relative flex ml-1">
                    <IconButton onClick={props.onClick} className="p-1">
                        <ArrowForwardOutlined />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default TextButton;