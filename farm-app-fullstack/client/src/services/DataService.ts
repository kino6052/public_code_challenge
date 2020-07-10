import { generateDummyData } from "../utils/data";

export class DataService {
  static getFarmData = () => {
    return generateDummyData();
  };
}
