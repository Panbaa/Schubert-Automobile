import React, { ReactNode, useState } from "react";
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
        <div className="relative text-black h-full w-full">
            <div className="w-full h-full flex items-center justify-between sm:hidden px-4">
                <div id="phoneNavbarIcon" className="h-full flex items-center justify-start">
                    {leftSideIcon}
                </div>
                <div className="h-full flex items-center justify-end">
                    <div>
                        <button onClick={handleButtonClick} >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="absolute h-[calc(100vh-4rem)] right-0 w-full max-w-96 bg-white border-1 border-t sm:hidden divide-y">
                    {elements.map((element) => {
                        return (
                            <button onClick={() => {handleNavigation(element.name); handleButtonClick();}} key={element.key} className="w-full p-4 text-lg font-medium text-left flex items-center gap-1 hover:bg-gray-200 transition-colors">
                                {element.icon && <span>{element.icon}</span>}
                                <span>{element.name}</span>
                            </button>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Phone;