/// <reference path="../type.d.ts" />

declare interface ActionCallbacks {
  onNext: Func,
  onJump: (name: string) => Func,
  onEnd: Func
}