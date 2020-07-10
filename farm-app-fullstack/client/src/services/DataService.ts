import { generateDummyData } from "../utils/data";
const DATA = generateDummyData();

export class DataService {
  static getFarmData = () => {
    return DATA;
  };
}
