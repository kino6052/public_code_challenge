import { parseData, DUMMY_DATA } from "../utils/data";
import { IFarm } from "./AppService";
import { BehaviorSubject } from "rxjs";
import { InitSubject } from "./InitService";

const DEFAULT_DATA = parseData(DUMMY_DATA);

export const DataSubject = new BehaviorSubject<typeof DEFAULT_DATA>([]);

export class DataService {
  static getFarmData = () => {
    return DataSubject.getValue();
  };
  static getFarmById = (id: string) => {
    return DataService.getFarmData().find((farm) => farm.id === id) as
      | IFarm
      | undefined;
  };
}

// Logic That Will Update Stores on Change to Inputs
InitSubject.subscribe(() => {
  fetch("/farms")
    .then((response) => response.json())
    .then((data) => DataSubject.next(parseData(data)));
});
