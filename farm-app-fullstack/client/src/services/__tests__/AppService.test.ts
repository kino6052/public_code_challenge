import { AppService, IFarm } from "../AppService";
import { generateDummyData } from "../../utils/data";

describe("AppService Tests", () => {
  it("should filter data correctly", () => {
    let result = [];
    const data = (generateDummyData() as unknown) as IFarm[];
    result = AppService.filterFarms(data, "hundred");
    expect(result.length).toBe(1);
    result = AppService.filterFarms(data, "", 100000, 200000);
    expect(result.length).toBe(4);
    result = AppService.filterFarms(data, "a");
    expect(result.length).toBe(6);
  });
});
