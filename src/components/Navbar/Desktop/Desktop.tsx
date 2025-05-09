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
            <div id="desktopNavbarIcon" className="h-full flex items-center justify-start ml-8 ">
                {leftSideIcon} 
            </div>
                <p className="ms-3 text-white text-xl">Schubert Automobile</p>
            <div className="h-full pr-8 ms-auto me-0 flex items-center justify-end gap-4">
                {elements.map((element) => {
                    return(
                        <button onClick={() => handleNavigation(element.name)} key={element.key} className="p-2 text-sm font-medium flex gap-1 items-center border-b-2 border-b-transparent transition ease-in-out hover:scale-125 active:bg-gray-900 text-white active:rounded">
                            {element.icon && <span>{element.icon}</span>}
                            <span>{element.name}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Desktop;