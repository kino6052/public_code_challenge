import { BehaviorSubject, merge } from "rxjs";
import { parseData } from "../utils/data";
import {
  DEFAULT_FARM_NAME,
  DEFAULT_MIN_REVENUE,
  DEFAULT_MAX_REVENUE,
  FarmNameSubject,
  MinRevenueSubject,
  MaxRevenueSubject,
} from "./InputService";
import { InitSubject } from "./InitService";
import { DataService, DataSubject } from "./DataService";
import { distinctUntilChanged, debounceTime } from "rxjs/operators";
import { DEBOUNCE } from "../utils/constants";
import { DEFAULT_ROUTE, RouterSubject } from "./RouterService";

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
  route: string;
  farmName: string;
  minRevenue: number;
  maxRevenue: number;
  farms: IFarm[];
}

const DEFAULT_APP_DATA: IAppData = {
  route: DEFAULT_ROUTE,
  farmName: DEFAULT_FARM_NAME,
  minRevenue: DEFAULT_MIN_REVENUE,
  maxRevenue: DEFAULT_MAX_REVENUE,
  farms: [] as IFarm[],
};

export const AppServiceSubject = new BehaviorSubject<IAppData>(
  DEFAULT_APP_DATA
);

export class AppService {
  static filterFarms = (
    data: IFarm[],
    name: string = DEFAULT_FARM_NAME,
    minRevenue: number = DEFAULT_MIN_REVENUE,
    maxRevenue: number = DEFAULT_MAX_REVENUE
  ) => {
    const _name = name.toLowerCase() || "";
    return data.filter((farm) => {
      const farmName = farm.name.toLowerCase();
      const isNameMatch = farmName.includes(_name);
      const isRevenueMatch =
        farm.revenue >= minRevenue && farm.revenue <= maxRevenue;
      return isNameMatch && isRevenueMatch;
    });
  };
  static updateAppState = () => {
    const route = RouterSubject.getValue();
    const farmName = FarmNameSubject.getValue();
    const minRevenue = MinRevenueSubject.getValue();
    const maxRevenue = MaxRevenueSubject.getValue();
    const farmData = DataService.getFarmData();
    const farms = AppService.filterFarms(
      farmData,
      farmName,
      minRevenue,
      maxRevenue
    );
    const newState = { farmName, minRevenue, maxRevenue, farms, route };
    AppServiceSubject.next(newState);
  };
}

// Subscribe to Observables after Initialization
InitSubject.subscribe(() => {
  // AppServiceSubject.subscribe(console.warn);
  merge(
    FarmNameSubject,
    MinRevenueSubject,
    MaxRevenueSubject,
    RouterSubject,
    DataSubject
  )
    .pipe(distinctUntilChanged(), debounceTime(DEBOUNCE))
    .subscribe(() => AppService.updateAppState());
});
