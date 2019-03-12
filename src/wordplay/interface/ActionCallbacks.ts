import { Func } from '../type';

export interface ActionCallbacks {
  onNext: Func,
  onJump: (name: string) => Func,
  onEnd: Func
}