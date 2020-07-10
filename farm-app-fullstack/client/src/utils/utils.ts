import { BehaviorSubject } from "rxjs";
import { useState, useEffect } from "react";
import { skip } from "rxjs/operators";

export const generateUniqueId = (): string => `\
${Math.round(Math.random() * 10000)}-\
${Math.round(Math.random() * 10000)}-\
${Math.round(Math.random() * 10000)}-\
${Math.round(Math.random() * 10000)}`;

export const useSharedState = <T>(
  subject: BehaviorSubject<T>
): [T, typeof useState] => {
  const [value, setState] = useState(subject.getValue());
  useEffect(() => {
    const sub = subject.pipe(skip(1)).subscribe((s) => setState(s));
    return () => sub.unsubscribe();
  }, []);
  const newSetState = (state: T) => subject.next(state);
  // @ts-ignore
  return [value, newSetState];
};

export const setPartial = <T>(
  subject: BehaviorSubject<T>,
  partial: Partial<T>
) => {
  const prev = subject.getValue();
  subject.next({ ...prev, ...partial });
};
