import { BehaviorSubject } from "rxjs";

export const DEFAULT_ROUTE = "/";
export const RouterSubject = new BehaviorSubject(DEFAULT_ROUTE);

export class RouterService {
  static getHomeRoute = () => "/";
  static getFarmRoute = () => "/farm/:id";
  static getRouteForId = (id: string) => `/farm/${id}`;
  static goToFarmPage = (id: string) => {
    RouterSubject.next(RouterService.getRouteForId(id));
  };
  static isHomePageRoute = (route: string) => route === "/";
  static isFarmPageRoute = (route: string) => route.includes("farm");
}
