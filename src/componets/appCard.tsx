import 'tailwindcss/tailwind.css'

interface CardProps {
    title: string,
    subTitle: string,
    description: string,   
    buttonText: string,
    onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const AppCard = (props: CardProps) => {

    return (
        <div className="relative bg-transparent">
            <div className="mb-6">
                <p className="text-left pb-2">
                    <strong className="text-xl text-black">{props.title}</strong>
                </p>
                <div className="flex border border-b-2 border-leaf-green"/>
                <p className="text-left mt-">
                    <strong className="text-lg text-leaf-green">{props.subTitle}</strong><br />
                    {/* <span className="text-base text-leaf-green leading-none">{props.description}</span> */}
                </p>
            </div>
            <div className="flex items-end justify-end">
                <div className="flex mt-24">
                    <button className="bg-apple-green rounded-full shadow-lg text-white text-lg py-2 px-4 font-bold" onClick={() => {}}>
                        {props.buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AppCard;