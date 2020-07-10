import { BehaviorSubject, merge } from "rxjs";
import { generateDummyData } from "../utils/data";
import {
  DEFAULT_FARM_NAME,
  DEFAULT_MIN_REVENUE,
  DEFAULT_MAX_REVENUE,
  FarmNameSubject,
  MinRevenueSubject,
  MaxRevenueSubject,
} from "./InputService";
import { InitSubject } from "./InitService";

export interface IFarm {
  id: string;
  name: string;
  state: string;
  soil_type: string;
  revenue: number;
  fields: IField[];
}

export interface IField {
  name: string;
  crop: string;
  size: number;
}

export interface IAppData {
  farmName: string;
  minRevenue: number;
  maxRevenue: number;
  farms: IFarm[];
}

const DEFAULT_APP_DATA: IAppData = {
  farmName: DEFAULT_FARM_NAME,
  minRevenue: DEFAULT_MIN_REVENUE,
  maxRevenue: DEFAULT_MAX_REVENUE,
  farms: (generateDummyData() as unknown) as IFarm[],
};

export const AppServiceSubject = new BehaviorSubject<IAppData>(
  DEFAULT_APP_DATA
);

export class AppService {
  static filterFarms = (
    data: IFarm[],
    name?: string,
    minRevenue?: number,
    maxRevenue?: number
  ) => {
    return [];
  };
}

// Subscribe to Observables after Initialization
InitSubject.subscribe(() => {
  FarmNameSubject.subscribe((name) => {
    const state = { ...AppServiceSubject.getValue() };
    state.farmName = name;
    AppServiceSubject.next(state);
  });
  MinRevenueSubject.subscribe((revenue) => {
    const state = { ...AppServiceSubject.getValue() };
    state.minRevenue = revenue;
    AppServiceSubject.next(state);
  });
  MaxRevenueSubject.subscribe((revenue) => {
    const state = { ...AppServiceSubject.getValue() };
    state.maxRevenue = revenue;
    AppServiceSubject.next(state);
  });
  merge(
    FarmNameSubject,
    MinRevenueSubject,
    MaxRevenueSubject
  ).subscribe(() => {});
});
