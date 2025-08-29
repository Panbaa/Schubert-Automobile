export interface ICar {
  detailPageUrl: string;
  image: string;
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