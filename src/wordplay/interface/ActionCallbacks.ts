import { Func } from '../type';

export interface ActionCallbacks {
  nextTo: Func,
  jumpTo: (name: string) => Func,
  endTo: Func
}