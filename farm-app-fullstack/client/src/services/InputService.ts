import { Subject, BehaviorSubject } from "rxjs";
import { filter, map, retryWhen } from "rxjs/operators";
import { InitSubject } from "./InitService";
import { DocumentSubject, EType } from "./DocumentService";
import { generateUniqueId } from "../utils/utils";

// Default Values
export const DEFAULT_FARM_NAME = "";
export const DEFAULT_MIN_REVENUE = 0;
export const DEFAULT_MAX_REVENUE = Number.POSITIVE_INFINITY;

// Unique Ids of the Inputs
export const FARM_NAME_ID = generateUniqueId();
export const MIN_REVENUE_ID = generateUniqueId();
export const MAX_REVENUE_ID = generateUniqueId();

// Stateful Stores
export const FarmNameSubject = new BehaviorSubject<string>(DEFAULT_FARM_NAME);
export const MinRevenueSubject = new BehaviorSubject<number>(
  DEFAULT_MIN_REVENUE
);
export const MaxRevenueSubject = new BehaviorSubject<number>(
  DEFAULT_MAX_REVENUE
);

export class InputService {
  static FarmNameSubject = DocumentSubject.pipe(
    filter(({ id, type }) => {
      if (id !== FARM_NAME_ID && type !== EType.Keydown) return false;
      return true;
    }),
    map(({ data }) => {
      return data as string;
    })
  );

  static MinRevenueSubject = DocumentSubject.pipe(
    filter(({ id, type }) => {
      if (id !== MIN_REVENUE_ID && type !== EType.Keydown) return false;
      return true;
    }),
    map(({ data }) => {
      const num = Number(data);
      if (Number.isNaN(num) || num < 0) return 0;
      return num;
    })
  );

  static MaxRevenueSubject = DocumentSubject.pipe(
    filter(({ id, type }) => {
      if (id !== MAX_REVENUE_ID && type !== EType.Keydown) return false;
      return true;
    }),
    map(({ data }) => {
      const num = Number(data);
      if (Number.isNaN(num) || num < 0) return 0;
      return num;
    })
  );
}

// Logic That Will Update Stores on Change to Inputs
InitSubject.subscribe(() => {
  InputService.FarmNameSubject.subscribe((name) => {
    FarmNameSubject.next(name);
  });
  InputService.MinRevenueSubject.subscribe((revenue) => {
    MinRevenueSubject.next(revenue);
  });
  InputService.MaxRevenueSubject.subscribe((revenue) => {
    MaxRevenueSubject.next(revenue);
  });
});
