import { ReactNode } from "react";
import { INavbarProps } from "../Navbar";
import './Desktop.css';
import { useNavigate } from "react-router-dom";

interface IDesktopProps extends INavbarProps {
    leftSideIcon: ReactNode;
}

const Desktop = ({ elements, leftSideIcon }: IDesktopProps ) => {
    const navigate = useNavigate();

    const handleNavigation = (name: string) => {
        navigate(`/${name}`);
    };

    return (
        <div className="w-full h-full hidden justify-start lg:flex flex-row items-center">
            <div id="desktopNavbarIcon" className="h-full flex items-center justify-start ml-8 hover:scale-105 transition-transform duration-300">
                {leftSideIcon}
            </div>
            <p className="ms-3 text-white text-xl font-medium">Schubert Automobile</p>
            <div className="h-full pr-8 ms-auto me-0 flex items-center justify-end gap-6">
                {elements.map((element) => (
                    <button 
                        onClick={() => handleNavigation(element.name)} 
                        key={element.key} 
                        className="relative p-2 text-sm font-medium flex gap-2 items-center text-zinc-300 hover:text-white transition-all duration-300 group"
                    >
                        {element.icon && <span className="transform group-hover:scale-110 transition-transform duration-300">{element.icon}</span>}
                        <span>{element.name}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Desktop;