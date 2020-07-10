import { Subject } from "rxjs";
import { InitSubject } from "./InitService";

export enum EType {
  Click,
  Keydown,
}

export const DocumentSubject = new Subject<{
  id: string;
  type: EType;
  data?: {};
}>();

export class InputService {}

// Initialization Logic
// This allows for better decoupling between services

InitSubject.subscribe(() => {
  document.addEventListener("click", (e) => {
    if (!e || !e.target) return;
    const id = (e.target as HTMLElement).id;
    DocumentSubject.next({
      id,
      type: EType.Click,
    });
  });
  document.addEventListener("keydown", (e) => {
    if (!e || !e.target) return;
    const id = (e.target as HTMLElement).id;
    const value = (e.target as HTMLInputElement).value;
    DocumentSubject.next({
      id,
      type: EType.Keydown,
      data: value,
    });
  });
});
