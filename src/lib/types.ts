import { ReactNode } from "react";

export interface INavbarElement {
    type: "single"
    key: string;
    name: string;
    icon?: ReactNode;
}

export type NavbarElement = INavbarElement;

export interface ICar {
    title?: string;
    images?: { xxxl?: string }[];
    modelDescription?: string;
    make?: string;
    price?:  number;
    detailPageUrl?: string;
    firstRegistrationDate?: string;
    mileage?: string;
    generalInspectionDate?: string;
    newHuAu?: string;
    power?: string;
    gearbox?: string;
    fuelType?: string;
}
export type Car = ICar;