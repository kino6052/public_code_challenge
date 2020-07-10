import { AppService, IFarm } from "../AppService";
import { generateDummyData } from "../../utils/data";

describe("AppService Tests", () => {
  it("should filter data correctly", () => {
    const data = (generateDummyData() as unknown) as IFarm[];
    const result = AppService.filterFarms(data, "hundred");
    expect(result.length).toBe(1);
  });
});
