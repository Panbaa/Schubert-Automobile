import { ReactNode, useState } from "react";
import { INavbarProps } from "../Navbar";
import { Menu, X } from "lucide-react";
import "./Phone.css";
import { useNavigate } from "react-router-dom";

interface IPhoneProps extends INavbarProps {
    leftSideIcon: ReactNode;
}

const Phone = ({ elements, leftSideIcon }: IPhoneProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    }

    const handleNavigation = (name: string) => {
        navigate(`/${name}`);
    };
    
    return (
        <div className="relative text-white h-full w-full">
            <div className="w-full h-full flex items-center justify-between lg:hidden px-4">
                <div id="phoneNavbarIcon" className="h-full flex items-center justify-start hover:scale-105 transition-transform duration-300">
                    {leftSideIcon}
                </div>
                <p className="ms-3 text-white text-xl font-medium">Schubert Automobile</p>
                <div className="h-full flex items-center justify-end">
                    <button 
                        onClick={handleButtonClick} 
                        className="p-2 rounded-full hover:bg-zinc-800 transition-colors duration-300"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="absolute top-full right-0 w-full max-w-96 bg-zinc-900 border-t border-zinc-800 lg:hidden divide-y divide-zinc-800 backdrop-blur-md shadow-xl">
                    {elements.map((element) => (
                        <button 
                            onClick={() => {
                                handleNavigation(element.name);
                                handleButtonClick();
                            }} 
                            key={element.key} 
                            className="w-full p-4 text-sm font-medium text-left flex items-center gap-3 text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-all duration-300"
                        >
                            {element.icon && <span className="transform transition-transform duration-300">{element.icon}</span>}
                            <span>{element.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Phone;