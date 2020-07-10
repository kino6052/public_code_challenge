import { generateDummyData } from "../utils/data";
import { IFarm } from "./AppService";
const DATA = generateDummyData();

export class DataService {
  static getFarmData = () => {
    return DATA;
  };
  static getFarmById = (id: string) => {
    return DataService.getFarmData().find((farm) => farm.id === id) as
      | IFarm
      | undefined;
  };
}
