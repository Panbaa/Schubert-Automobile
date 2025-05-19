import { ReactNode } from "react";

export interface INavbarElement {
    type: "single"
    key: string;
    name: string;
    icon?: ReactNode;
}

export type NavbarElement = INavbarElement;

export interface ICar {
    detailPageUrl: string;
    images: string;
    price: number;
    make: string;
    modelDescription: string;
    title: string;
    firstRegistrationDate: string;
    generalInspectionDate?: string;
    newHuAu: string;
    mileage: number;
    power: number;
    gearbox: string;
    fuelType: string;
  }
  
export type Car = ICar;