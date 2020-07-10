import { RouterService } from "../RouterService";

describe("RouterService", () => {
  it("should get route for id", () => {
    const route = RouterService.getRouteForId("test");
    expect(route).toEqual("/farm/test");
  });

  it("should determine if the route is correct", () => {
    const isFarmPageRoute = RouterService.isFarmPageRoute("/farm/test");
    expect(isFarmPageRoute).toBe(true);
  });

  it("should determine if the route is correct", () => {
    const isFarmPageRoute = RouterService.isFarmPageRoute("/test");
    expect(isFarmPageRoute).toBe(false);
  });

  it("should determine if the route is correct", () => {
    const isHomePageRoute = RouterService.isHomePageRoute("/");
    expect(isHomePageRoute).toBe(true);
  });

  it("should determine if the route is correct", () => {
    const isHomePageRoute = RouterService.isHomePageRoute("/farm/test");
    expect(isHomePageRoute).toBe(false);
  });
});
