import { ReactNode } from "react";

export interface INavbarElement {
    type: "single"
    key: string;
    name: string;
    icon?: ReactNode;
}

export type NavbarElement = INavbarElement;